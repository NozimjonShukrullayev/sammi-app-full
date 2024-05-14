import { Input, TextArea } from "../ui";
import { useSelector } from "react-redux";

function ArticleForm(props) {
  const { isLoading } = useSelector(state => state.articles);

  const { title, setTitle, description, setDescription, body, setBody, formSubmit } = props;
  return (
    <div>
      <form action="#" onSubmit={formSubmit}>
        <Input label={'Title'} id={'floatingInput'} state={title} setState={setTitle} />

        <TextArea key={1} label={'Description'} state={description} setState={setDescription} />

        <TextArea height={'250px'} key={2} label={'Body'} state={body} setState={setBody} />
        
        <button className="btn btn-primary w-100 py-2 mt-2" disabled={isLoading} type="submit">
          {isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  )
}

export default ArticleForm;