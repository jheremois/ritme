import { posts } from "./services";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { postType } from "@src/shared/interfaces/posts.type";

export const getPosts = async ()=>{
    const jsonValue = await AsyncStorage.getItem('user_data')
    posts.defaults.timeout = 0
    if(jsonValue != null){
        return posts.get("/posts", {
            headers: {
                "user_token": JSON.parse(jsonValue).user_token
            }
        })
    }

    return posts.get("/posts", {
        headers: {
            "user_token": ""
        }
    })

}

export const createNewPost = async (data: postType)=>{
    const jsonValue = await AsyncStorage.getItem('user_data')
    if(jsonValue != null){
        return posts.post("/post", data,{
            headers: {
                "user_token": JSON.parse(jsonValue).user_token
            }
        })
    }
}

export const getMyPosts =async () => {
    const jsonValue = await AsyncStorage.getItem('user_data')

    return posts.get("/myPosts", {
        headers: {
          "user_token": JSON.parse(jsonValue!).user_token
        }
    })
}
