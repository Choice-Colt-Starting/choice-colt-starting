import "./articlesPage.css";

function ArticlesPage(props){
    return(
        <div id={props.articlesClicked===false?"none":"articlesPageParentDiv"}>
            <p>Artiles will be here soon!</p>
        </div>
    );
};
export {ArticlesPage};