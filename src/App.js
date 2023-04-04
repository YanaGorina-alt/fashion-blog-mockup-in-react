import "./styles.css";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import image1 from "./blog-image-1.jpg";
import image2 from "./blog-image-2.jpg";

function App() {

  const articles = [
    { time:"11/12/20",
      subheading:"On the Street in Brooklyn", 
      image: image1, 
      alt:"A Lady on a Brooklyn Street", 
      paragraph:"Corem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sapiente minus optio possimus corrupti nesciunt, blanditiis asperiores! Temporibus, ratione ipsam soluta expedita ea pariatur vero enim laboriosam debitis adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe laborumpiciatis ducimus itaque odit provident quaerat repellendus, maiores eius iure temporibus repellat aspernatur voluptatibus illum dolor alias, molestias hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro odio dicta facere eaque cum a consequuntur accusantium officiis iste, mollitia labore dignissimos perferendis quod provident! Sapiente voluptatibus architecto velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias aspernatur id ducimus eius in, cum odit numquam provident repellat ut fugit optio natus soluta enim deleniti aliquam. Eius, dignissimos?"
    },
    { time:"11/11/20",
      subheading:"Vintage in Vogue",
      image: image2,
      alt: "People in Vintage",
      paragraph:"Sorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium corporis sapiente minus optio possimus corrupti nesciunt, blanditiis asperiores! Temporibus, ratione ipsam soluta expedita ea pariatur vero enim laboriosam debitis adipisci? Lorem ipsum dolor sit amet consectetur adipisicing elit. A saepe laborumpiciatis ducimus itaque odit provident quaerat repellendus, maiores eius iure temporibus repellat aspernatur voluptatibus illum dolor alias, molestias hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis porro odio dicta facere eaque cum a consequuntur accusantium officiis iste, mollitia labore dignissimos perferendis quod provident! Sapiente voluptatibus architecto velit! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis alias aspernatur id ducimus eius in, cum odit numquam provident repellat ut fugit optio natus soluta enim deleniti aliquam. Eius, dignissimos?"
    }
    ]

  const articlesList = articles.map((article)=>{
    return(
      <Article
      time={article.time}
      subheading={article.subheading}
      image={article.image}
      alt={article.alt}
      paragraph={article.paragraph}
      />
    )
  })
  return (
    <div className="App">
      <div className="body">
        <Header />
        <div className="main">
          {articlesList}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
