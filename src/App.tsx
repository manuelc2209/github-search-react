import React from 'react';
import { UIComponent } from './components/ui/InitialPage';
import { StyledContainer, StyledHeader } from './styles';

function App() {
    return (
        <StyledContainer>
            <StyledHeader>
                <UIComponent />
            </StyledHeader>
        </StyledContainer>
    );
}

export default App;
