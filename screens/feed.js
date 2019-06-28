import React from "react";
import { View, FlatList, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'
import { connect } from 'react-redux'
import { getArticles } from '../actions/articles'
import { getSearch } from '../actions/search'
import Article from '../components/article';

type Props = {};
class Feed extends React.Component<Props> {
    state = {
        articles: [],
        search: ''
    }
    updateSearch = search => {
        this.setState({ search });
        if (search.length >= 3){
            this.props.getSearch(search)
        }else{
            this.props.getArticles()
        }
    };

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any):void {
        if(this.props.articles != nextProps.articles) {
            this.setState({
                articles: nextProps.articles,
            })
        }
        else if(this.props.searchResults != nextProps.searchResults){
            this.setState({
                articles: nextProps.searchResults,
            })
        }
    }
    componentDidMount() {
        this.props.getArticles()
    }
    render() {
        const { search } = this.state.search;
        return (
            <View style={styles.content}>
                <SearchBar
                    style={styles.search}
                    placeholder="Search..."
                    onChangeText={this.updateSearch}
                    value={search}
                />
                <FlatList
                    style={styles.content}
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.articles}
                    renderItem={({ item }) => (
                        <Article item={item} pushIn={() => {
                            console.log('xd')
                            this.props.navigation.push('Article', {
                                url: item.url
                            })
                        }} />
                    )}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return (
        {
            articles: state.articles.articles,
            searchResults: state.searchResults.articles
        }
    )
}

export default connect(mapStateToProps, {
    getArticles, getSearch
})(Feed)

const styles = StyleSheet.create(
    {
        content: {
            flexDirection: 'column',
        },
        title: {
            fontSize: 14,
            color: 'black'
        },
        search: {
            width: 250,
            height: 150,
        }
    }
)