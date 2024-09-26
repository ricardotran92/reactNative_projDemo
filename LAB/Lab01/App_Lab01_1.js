import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import {
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

// Post data
const postsData = [
  {
    id: 1,
    username: "Ricardo",
    avatar:
      "https://cdn-media.sforum.vn/storage/app/media/Profile%20CTV/tran-nhat-quang-sforum-cms-avatar-5.jpg",
    text: "Bangkok - Pattaya - Thành Phố Muang Boran - Dạo Thuyền Sông Chaophraya- Buffet Baiyoke Sky",
    image:
      "https://media.travel.com.vn/Tour/tfd_230824105317_432757_Khao%20Chee%20chan.jpg",
    likes: 1992,
    comments: 24,
    shares: 4,
  },
  {
    id: 2,
    username: "Traveler",
    avatar:
      "https://cdn-media.sforum.vn/storage/app/media/luudat/profilepic.jpg",
    text: "Bangkok - Pattaya - Wat Arun - Ngắm Hoàng Hôn Trên Du Thuyền Sông Chao Phraya - Thưởng Thức Calypso Cabaret Show",
    image:
      "https://media.travel.com.vn/Tour/tfd_240318120706_979312_thai%20(2).jpg",
    likes: 1080,
    comments: 80,
    shares: 10,
  },
  {
    id: 3,
    username: "NatureLover",
    avatar:
      "https://cdn-media.sforum.vn/storage/app/media/Profile%20CTV/46414680_1195062467317859_862356165189697536_n.jpg",
    text: "Thái Lan: Phuket - Đảo Phi Phi & Vịnh Phang Nga",
    image: "https://media.travel.com.vn/Tour/tfd_220802035819_640722.jpg",
    likes: 1366,
    comments: 66,
    shares: 13,
  },
];

// component Post
const Post = ({ post, onLike, onComment, onShare }) => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>

      <Text style={styles.postText}>{post.text}</Text>
      <Image source={{ uri: post.image }} style={styles.postImage} />

      <View style={styles.postStats}>
        <Text>{post.likes} Likes</Text>
        <Text>{post.comments} Comments</Text>
        <Text>{post.shares} Shares</Text>
      </View>

      <View style={styles.separator} />

      <View style={styles.interactionButtons}>
        <TouchableOpacity style={styles.button} onPress={() => onLike(post.id)}>
          <AntDesign
            name={post.isLiked ? "like2" : "like2"}
            size={20}
            color={post.isLiked ? "#2196F3" : "black"}
          />
          <Text
            style={[
              styles.buttonText,
              { marginLeft: 10, color: post.isLiked ? "#2196F3" : "black" },
            ]}
          >
            {post.isLiked ? "Liked" : "Like"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onComment(post.id)}
        >
          <Octicons name="comment" size={20} color="black" />
          <Text style={styles.buttonText}>Comments</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onShare(post.id)}
        >
          <MaterialCommunityIcons
            name="share-outline"
            size={20}
            color="black"
          />
          <Text style={styles.buttonText}>Shares</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function App() {
  // State trạng thái của các post và liked
  const [posts, setPosts] = useState(
    postsData.map((post) => ({ ...post, isLiked: false }))
  );

  const toggleLike = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          const updatedLikes = post.isLiked ? post.likes - 1 : post.likes + 1
          return { ...post, isLiked: !post.isLiked, likes: updatedLikes }
        }
        return post;
      })
    )
  }

  const increaseComments = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, comments: post.comments + 1 }
        }
        return post;
      })
      
    )
  }

  const increaseShares = (postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, shares: post.shares + 1 };
        }
        return post;
      })
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <StatusBar barstyle="dark-content" backgroundColor="#FFFFFF" />
        <Text style={styles.headerText}>Social Media Feed</Text>

        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onLike={toggleLike}
            onComment={increaseComments}
            onShare={increaseShares}
          />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  headerText: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: 20,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  postContainer: {
    backgroundColor: "#fff",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },

  username: {
    fontWeight: "bold",
    fontSize: 16,
  },

  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },

  postStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    opacity: 0.4,
  },

  separator: {
    height: 1,
    backgroundColor: "#e0e0e0",
    margin: 3,
    marginBottom: 20,
  },

  interactionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 5,
  },
});
