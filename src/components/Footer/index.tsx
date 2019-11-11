import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2019</NoWrap>{' '}
                <NoWrap>
                    &laquo;CJ &amp; JM Simpson&raquo;
                </NoWrap>
            </Info>
            <Info>
                <NoWrap>VAT Number: 409 1416 72</NoWrap>
            </Info>
        </Container>
    );
};
