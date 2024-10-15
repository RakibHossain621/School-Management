import classNames from 'classnames';
import React from 'react';
interface Props {
    title?: string;
    title1?: string
    title2?:string
    key?: any;
    subTitle?: string;
    className?: string;
    titleCN?: string;
    titleCN1?: string;
    titleCN2?:string
    subTitleCN?: string;
}
const MidTitle: React.FC<Props> = ({
    key,
    title,
    title1,
    subTitle,
    titleCN,
    titleCN1,

    subTitleCN,
    className,
}) => {
    return (
        <div className={classNames(className)} key={key}>
            <h1 className={classNames('bold-48 !text-TextColor', titleCN)}>{title}
                <span className={classNames('text-Primary', titleCN1)}> {title1} </span>
            </h1>

            <p className={classNames('regular-20 !text-TextColor max-w-[730px] mt-3', subTitleCN)}>
                {subTitle}
            </p>
        </div>
    )
}

export default MidTitle
