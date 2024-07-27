import React,{Component} from "react";

export class NewsItem extends Component{
  
    render(){
        let {title,description,imageUrl,newsUrl}=this.props;
        return(
            <div className="my-3">
                 <div className="card">
                 <img src={!imageUrl?"https://readwrite.com/wp-content/uploads/2024/07/f7241310-8110-4543-8b45-18d74cf08d80.webp":imageUrl} className="card-img-top" alt="..." />
                   <div className="card-body">
                 <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Know More</a>
            </div>
         </div>
   
            </div>
        )
    }
}

export default NewsItem;