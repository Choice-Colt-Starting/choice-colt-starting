import"./discover.css";

function Discover() {

    const discoverTabs = [
        { id: 'disDiv0', link: 'https://www.youtube.com/@choicecoltstarting', description: 'Check progress of horses' },
        { id: 'disDiv1', link: 'https://www.youtube.com/shorts/bAjq-Agdfi0', description: 'Horses learn from the release of pressure' },
        { id: 'disDiv2', link: 'https://goo.gl/maps/D9ZSuRbdGX6i9Gw69', description: 'Visit the ranch' },
        { id: 'disDiv5', link: 'https://www.youtube.com/shorts/IQyXeVTfL58', description: 'When is your horse ready to learn something new' },
        { id: 'disDiv3', link: 'https://www.youtube.com/shorts/tALluyRBeg8', description: 'Why use groundwork' },
        { id: 'disDiv4', link: 'https://www.youtube.com/shorts/F4Bm2ui-Tdk', description: 'Horses with short attention spans' }
    ];

    return(
        <div id="parentDiscoverDiv">
            {discoverTabs.map(({ id, link, description }) => {
                return (
                    <a id={id} className="discoverDivs disText" href={link}>{description}</a>
                );
            })}
        </div>
    );
}
export{Discover};