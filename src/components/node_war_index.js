import React, { Component } from 'react';
import NodeWarList from '../containers/node_war_list';
import MemberFind from '../containers/member_find';

export default class NodeWarIndex extends Component {

  render() {

    return (
      <div>
        <MemberFind />
        <NodeWarList />
      </div>
    );
  }
}