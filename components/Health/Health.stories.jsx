import React from 'react'
import {Health} from './Health'

export default {
  title: "Health",
  component: Health
};

export const HealthStorybook = () => (
  <>
    <h4>Health Indicators:</h4>
    <Health hp={{current: 15, total: 50}}/>
    <br/>
    <Health hp={{current: 25, total: 50}}/>
  </>
)
