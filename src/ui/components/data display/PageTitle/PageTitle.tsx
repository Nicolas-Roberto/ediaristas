import React from 'react';
import { PageTitleConteiner, PageTitleStyled } from './PageTitle.style';


interface PageTitleProps{
    title: string;
    subtitle?: string | JSX.Element;

}


const PageTitle: React.FC<PageTitleProps> = (props) => {

    return( 
        <PageTitleConteiner>
            <PageTitleStyled>
                {props.title}
                
            </PageTitleStyled>
            
            {props.subtitle}
        </PageTitleConteiner>
    );
}

export default PageTitle;