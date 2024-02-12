import React, { Component } from "react";
import News from "./news";
import LoadingGIF from "./loadingGIF";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export default class NewsContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResult: null,
      progress: 0
    };
    // this.previous = this.previous.bind(this);
    // this.next = this.next.bind(this);
    this.fetchMore = this.fetchMore.bind(this);
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async fetchNews() {
    // this.setState({ loading: true });
    this.state.progress = this.setState({progress: 30})
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=771ebfdcaaee457dbf5b1ceeb7abfad6&page=${this.state.page}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    this.state.progress = this.setState({progress: 60})
    this.setState({
      articles: data.articles,
      totalResult: data.totalResults,
      // loading: false,
      page: this.state.page + 1,
      progress: 90
    });
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
      )} - News`;
      this.state.progress = this.setState({progress: 100})
  }

  async componentDidMount() {
    await this.fetchNews();
  }

  async fetchMore() {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=771ebfdcaaee457dbf5b1ceeb7abfad6&page=${this.state.page}&pageSize=10`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResult: data.totalResults,
    });
  }

  //   async previous() {
  //     await this.setState({ page: this.state.page - 1 });
  //     await this.fetchNews();
  //   }

  //   async next() {
  //     await this.setState({ page: this.state.page + 1 });
  //     await this.fetchNews();
  //   }

  render() {
    return (
      <>
        <LoadingBar color="#f11946" progress={this.state.progress} />
        {/* {this.state.loading && (
          <div className="flex justify-center m-4">
          <LoadingGIF />
          </div>
        )} */}
        <div className="text-3xl md:text-5xl flex justify-center my-5">
          <h1>{this.capitalizeFirstLetter(this.props.category)} Category</h1>
        </div>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length != this.state.totalResult}
          loader={
            <div className="flex justify-center m-4">
              <LoadingGIF />
            </div>
          }
        >
          <div className="flex flex-col sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 mx-4">
            <News
              news={this.state}
              key={this.state.articles.map((a, i) => {
                return i;
              })}
            />
          </div>

          {/* {console.log(this.state.articles.length)}
          {console.log(this.state.totalResult)}
        {console.log(this.state.articles.length != this.state.totalResult)} */}
        </InfiniteScroll>

        {/* <div className="flex flex-row justify-evenly mb-8">
          <button
          className="bg-cyan-950 p-3 m-2 mt-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
          onClick={this.previous}
          disabled={this.state.page <= 1}
          >
            Previous
          </button>
          <button
            className="bg-cyan-950 p-3 m-2 mt-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
            disabled={true}
          >
            {this.state.page}
          </button>
          <button
            className="bg-cyan-950 p-3 m-2 mt-3 rounded-lg hover:bg-slate-700 transition-all duration-300"
            onClick={this.next}
            disabled={this.state.page >= this.state.totalResult / 6}
          >
            Next
          </button>
        </div> */}
      </>
    );
  }
}
