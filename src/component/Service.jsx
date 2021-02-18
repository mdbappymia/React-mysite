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
          <div className="row dev-sec">
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
                cardtext="In this site, thats is live online radio streaming."
                src="assets/web/EdevsRadio.png"
                href="https://mdbappymia.github.io/RadioProject"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Radio Project"
                cardtext="In this site,that is a live radio station. It use html,css and javascript."
                src="assets/web/HetRadio.png"
                href="http://hetstamcafe.compra.nl"
              />
            </div>
            <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Portfolio Site"
                cardtext="This is a personal portfolio template site, it created by html,css and javascript."
                src="assets/web/PortfolioSite.png"
                href="https://mdbappymia.github.io/Dark-Protfolio-Site"
              />
              </div>
              <div className="col-md-4">
              <Card
              className="card-effect"
                cardtitle="Another site"
                src="assets/web/site2.png"
                cardtext="This is a personal portfolio template site, it created by html,css and javascript."
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
              cardtext = "A backlink is a link created when one website links to another. Backlinks are also called inbound links or incoming links ."
              href='https://moz.com/learn/seo/backlinks'
              />
            </div>
            <div className="col-md-4">
              <Card
              src="assets/web/web2.0.jpg"
              cardtitle="Web 2.0 Backlinks"
              cardtext = "Web 2.0 links are powerful ways to help control the conversation of content that’s directed to a website. "
              href="https://www.novomotus.com/web-2-0-backlinks/"
              />
            </div>
            <div className="col-md-4">
              <Card
              src="assets/web/socal.jpg"
              cardtitle="Social Media Marketing"
              cardtext = "Social media marketing is a powerful way for businesses of all sizes to reach prospects and customers."
              href="https://www.wordstream.com/social-media-marketing"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section-s-4">
      </div>
    </>
  );
};
export default Service;
