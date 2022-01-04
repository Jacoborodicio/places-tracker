/** @jsx jsx **/
import {jsx, css} from "@emotion/react";
import {styled} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStickyNote} from "@fortawesome/free-solid-svg-icons/faStickyNote";

const AnnotationContainer = styled('div')`
    & div.titleSection {
      display: flex;
      justify-content: flex-start;
      align-items: baseline;
      & div.iconContainer {
        & svg {
          color: var(--text-accent-dark);
          margin-right: 1rem;
        }
      }
    }
`;

const Annotation = styled('div')`
  border-left: 1px solid var(--text-accent-dark);
  margin: 1rem 0;
  padding-left: .5rem;
  & div.header {
    display: flex;
    justify-content: flex-start;
    & > h1 { margin-bottom: .5rem;}
  }
`;

const Annotations = ({annotations, title}) => {
    return (
        <AnnotationContainer>
         <div className={'titleSection'}>
             <div className={'iconContainer'}>
                 <FontAwesomeIcon icon={faStickyNote} />
             </div>
             <div className={'titleContainer'}>
                 <h1>{title ? title : 'Annotations'}</h1>
             </div>
         </div>
            {
                annotations && annotations.map(annotation => (
                    <Annotation key={annotation.id}>
                        <div className={'header'}>
                            <h1>{annotation.title}</h1>
                            {/*TODO: analyze if the createdAt date is useful here (per note...)*/}
                        </div>
                        <p className={'description'}>{annotation.note}</p>
                    </Annotation>
                ))
            }
        </AnnotationContainer>
    )
}

export default Annotations;
