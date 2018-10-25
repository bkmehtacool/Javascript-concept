var posts = [
     {title: 'Post One', body: 'this is one post'},
     {title: 'Post two', body: 'this is two post'}
];

function getPost(){
     setTimeout(function(){
          posts.forEach(function(post, index){
               console.log(post.title);
          });
     },1000);
}

function createPost(post, callback){
     setTimeout(function(){
          posts.push(post);
          callback();
     }, 2000);
}

createPost({title: 'Post tree', body: 'this is tree post'} ,getPost);








console.log('End of Execution');
