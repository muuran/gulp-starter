import React from 'react';
import Showdown from 'showdown';

var converter = new Showdown.Converter();

var Comment = React.createClass({
  render: function() {
    let rawMarkup = converter.makeHtml(this.props.children.toString());
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

export default Comment;
