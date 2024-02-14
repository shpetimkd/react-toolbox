import React, { ReactElement, ReactNode } from "react";

interface SwitchProps {
    children: ReactNode;
}

interface CaseProps {
    children: ReactElement;
    condition: boolean;
}

const Switch = ({ children }: SwitchProps): ReactElement | null => {
    let matchingChild: React.ReactElement | null = null;
    let defaultChild: React.ReactElement | null = null;

    React.Children.forEach(children, (child) => {
        if (!matchingChild && React.isValidElement(child) && child.type === Case) {
            const { condition } = child.props as CaseProps;
            const conditionResult = Boolean(condition);

            if (conditionResult) {
                matchingChild = child;
            }
        } else if (!defaultChild && React.isValidElement(child) && child.type === Default) {
            defaultChild = child;
        }
    });

    return matchingChild ?? defaultChild ?? null;
};

const Case = ({ children }: CaseProps): ReactElement => {
    return children;
};

const Default = ({ children }: { children: ReactElement }): ReactElement => {
    return children;
};

export { Switch, Case, Default };
