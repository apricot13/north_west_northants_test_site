import './App.css';
import { NewsArticleFilterAccordion } from "northants-design-system";
import { ThemeProvider } from 'styled-components';
import { west_theme, DropDownFilter, CheckboxListFilter, Searchbar  } from "northants-design-system";
import { newsArticleData } from './NewsArticleData';
import { articleOptions } from "./CheckboxListFilterData";
import { serviceOptions } from "./DropDownFilterData";


function App() {
  return (
    <div className="App">
       <ThemeProvider theme={west_theme}>
       <NewsArticleFilterAccordion sections={[
          {
          title: "Search articles",
          content: 
          <>
            <Searchbar id="news-search" searchTerm={(newsArticleData.searchTerm) ? newsArticleData.searchTerm : undefined} isLight={true} submitInfo={[{
                postTo: "/news",
                params: {
                  type: "search",
                  searchTerm: (newsArticleData.searchTerm) ? newsArticleData.searchTerm : undefined
                }
            }]} />
          </>,
          isExpanded: true
          },
          {
          title: "Services",
          content: <>
            <DropDownFilter label={null} options={serviceOptions} selected={newsArticleData.services} />
          </>,
          isExpanded: true
          },
          {
          title: "Type of article",
          content: <>
            <CheckboxListFilter label={null} hint={null} options={articleOptions} checked={newsArticleData.articleType} />
          </>,
          isExpanded: true
          }
          ]} />
      </ThemeProvider>
    </div>
  );
}

export default App;
