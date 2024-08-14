import List from "./List";

const NewRecipe = (props) => {
  console.log(props.ingredients[0].name);
  return (
    <div>
      <h3> {props.name} </h3>
      {props.ingredients.map((ingredient) => (
        <List text={ingredient?.name} />
      ))}
      <h2> Cooking Instruction </h2>
      {props.steps.map((step) => (
        <p> {step} </p>
      ))}
    </div>
  );
};
export default NewRecipe;
