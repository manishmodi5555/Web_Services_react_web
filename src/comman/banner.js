export default function Banner( props) {  
    return (
        <>
       <section className="w3l-about-breadcrumb">
  <div className="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
    <div className="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
      <h2 className="title">{props.title}</h2>
      <ul className="breadcrumbs-custom-path mt-2">
        <li><a href="index.html">Home</a></li>
        <li className="mx-2">/ </li>
        <li className="active">{props.subtitle}</li>
      </ul>
    </div>
  </div>
</section>

        </>
    )
}