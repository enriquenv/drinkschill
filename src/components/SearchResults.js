import React from 'react'

class SearchResults extends React.Component {
<<<<<<< HEAD
  componentDidMount() {
    fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.match.params.search}`
    ).then(async response => {
      try {
        const data = await response.json()
        console.log('response data?', data)
      } catch (error) {
        console.log('Error happened here!')
        console.error(error)
      }
    })
  }
  render() {
    return <div>test</div>
  }
}

export default SearchResults
=======
    componentDidMount() {
        fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${this.props.match.params.search}`).then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch (error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
    }
    render() {
        return <div>
            test
        </div>;
    }
}

export default SearchResults;
>>>>>>> 80cebf2a300c11eb98846a3e2edc817fa9bc2656
