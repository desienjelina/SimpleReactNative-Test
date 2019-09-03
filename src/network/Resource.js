import Request from "./Request";
import URI from "../config/Uri"

class Resource {
  async getProduct(){
    const header = {
      //"Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
    }
    let res = await Request.get(URI.RESOURCE + URI.ENDPOINT_GET_PRODUCT, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res.data)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async addProduct(body){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    console.log(JSON.stringify(body))

    let res = await Request.post(URI.RESOURCE + URI.ENDPOINT_ADD_PRODUCT, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async editTask(body, taskId){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.RESOURCE + URI.ENDPOINT_EDIT_TASK.replace(/{(taskId)}/, taskId)
    let res = await Request.put(endPoint, header, JSON.stringify(body));
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }

  async deteleTask(taskId){
    const header = {
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJrYXJ5YXdhbiIsInN1YiI6MiwiaWF0IjoxNTYxOTE2NzI5LCJleHAiOjMxNzEzMTQzNjcyOX0.JfmOjuyl39_yDsDEj2DjW21Q1QKroxWvRQ3UU5xQnzI",
      "Content-Type": "application/json",
    }

    let endPoint = URI.RESOURCE + URI.ENDPOINT_DELETE_TASK.replace(/{(taskId)}/, taskId)
    let res = await Request.delete(endPoint, header);
    
    return new Promise((resolve, reject) => {
      try{
        resolve(res)
      } catch (err) {
        reject("An error occurred")
      }
    });
  }
} 

export default new Resource();