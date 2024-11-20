
export default function CoreConcept(prop) { // function CoreConcept( props )
    console.log("CoreConcept is executed");

    return (
        <li>
            <img src={prop.image} alt={prop.title} />
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
        </li>
    );
}
