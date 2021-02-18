import Card from "./Card";
const Service = () => {
  return (
    <>
      <div className="section-s-1">
        <div className="container p-5">
          <h1 className="text-center p-5">My Service</h1>
          <p className="lead">
            There are several service w provide. Thats like as{" "}
            <b>Wed developmrnt</b> service,<b>Digital Marketing</b>,<b>SEO</b>,
            <b>Graphic Design</b> etc. These service such as:
          </p>
        </div>
      </div>
      <div className="section-s-2 py-5">
        <div className="container">
          <h1>
            <b>Web Development Service</b>
          </h1>
          <p>I made some web development project. These are sample of this.</p>
          <div className="row">
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Corona Update"
                cardtext="In this site, you can get all country corona update."
                src="assets/web/corona.png"
                href="https://mdbappymia.github.io/corona"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Bangla Dictionary"
                cardtext="You can get all bangla meaning of english word"
                src="assets/web/Bangla-dictionary.png"
                href="https://mdbappymia.github.io/E2BDictionary"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Edevs Radio"
                cardtext="In this site, you can get all country corona update."
                src="assets/web/EdevsRadio.png"
                href="https://mdbappymia.github.io/RadioProject"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Radio Project"
                cardtext="In this site, you can get all country corona update."
                src="assets/web/HetRadio.png"
                href="http://hetstamcafe.compra.nl"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Corona Update"
                cardtext="In this site, you can get all country corona update."
                src="assets/web/PortfolioSite.png"
                href="https://mdbappymia.github.io/Dark-Protfolio-Site"
              />
              </div>
              <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Corona Update"
                cardtext="In this site, you can get all country corona update."
                src="assets/web/PortfolioSite.png"
                href="https://mdbappymia.github.io/Dark-Protfolio-Site"
              />
              </div>
          </div>
        </div>
      </div>
      <div className="section-s-3">
        <div className="container">
          <h1 className="py-5">My Digital Marketing Service</h1>
          <p className='lead'>Digital marketing is the use of the Internet to reach consumers. Digital marketing is a broad field, including attracting customers via email, content marketing, search platforms, social media, and more. I provide several service:</p>
          <div className="row">
            <div className="col-md-4">
              <Card
              src="assets/web/backlinks.png"
              cardtitle="Profile Backlinks"
              cardtext = "Profile backlinks service"
              />
            </div>
            <div className="col-md-4">
              <Card
              src="assets/web/backlinks.png"
              cardtitle="Profile Backlinks"
              cardtext = "Profile backlinks service"
              />
            </div>
            <div className="col-md-4">
              <Card
              src="assets/web/backlinks.png"
              cardtitle="Profile Backlinks"
              cardtext = "Profile backlinks service"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-s-4">
        <div className="container">
          <h1 className="py-5">Grapgic design</h1>
          
        </div>
      </div>
    </>
  );
};
export default Service;
