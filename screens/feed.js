import React from "react";
import { View, FlatList, StyleSheet } from 'react-native'
import {SearchBar} from 'react-native-elements'
import {connect} from 'react-redux'
import { getArticles } from '../actions/articles'
import Article from '../components/article'

type Props = {};
class Feed extends React.Component<Props> {
    state = {
        articles: [],
        country: {},
        search: ''
    }
    updateSearch =  search => {
        this.setState({ search });
      };

    componentDidMount() {
        this.props.getArticles()
    }
    render() {
        const { search } = this.state;
        return (
            <View style={styles.content}>
                <SearchBar
                placeholder={'Search..'}
                onChangeText={this.updateSearch}
                value={search}
                />
                <FlatList
                style={styles.content}
                keyExtractor={ (item, index) => index.toString()}
                data={this.props.articles}
                renderItem={({item}) => (
                    <Article item={item}/>
                )}
                />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return(
        {
            articles: state.articles.articles
        }
    )
}

export default connect(mapStateToProps,{
    getArticles
})(Feed)

const styles = StyleSheet.create(
    {
        content: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        title:{
            fontSize: 14,
            color: 'black'
        },
    }
)