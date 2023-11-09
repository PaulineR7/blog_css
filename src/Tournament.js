import './App.css';
import Header from './Header';
import Footer from './Footer';

function Tournament() {

    const articles = [
        {
          title: "Article 1",
          price: 10,
          isPublished: true,
        },
    
        {
          title: "Article 2",
          price: 20,
          isPublished: false,
        },
    
        {
          title: "Article 3",
          price: 30,
          isPublished: true,
        },
    
        {
          title: "Article 4",
          price: 40,
          isPublished: false,
        },
    
        {
          title: "Article 5",
          price: 50,
          isPublished: true,
        },
    
        {
          title: "Article 6",
          price: 60,
          isPublished: false,
        },
    
        {
          title: "Article 7",
          price: 70,
          isPublished: true,
        },
    
        {
          title: "Article 8",
          price: 80,
          isPublished: false,
        },
    
        {
          title: "Article 9",
          price: 90,
          isPublished: true,
        },
    
        {
          title: "Article 10",
          price: 100,
          isPublished: false,
        },
    ];


    // récupérer tous les articles publiés du tableau
    const publishedArticles = articles.filter((article) => {
        return (article.isPublished === true);
    })
    
    // récupérer les trois derniers de la nouvelle liste

    

    return(
      <>
      <Header />
        <main className=''>
          <div>
            <h2>Tournois</h2>
          </div>
          <div className='flex'>
                    <article>
                        <h2>Nom du tournoi</h2>
                        <p>Durée du tournoi</p>
                    </article>
          </div>
        </main>
      <Footer />
      </>
    )

    
}

export default Tournament;