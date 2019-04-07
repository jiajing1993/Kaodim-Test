/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from "react"

import { RecordProvider } from "./src/context/RecordContext"

export const wrapRootElement = ({ element }) => (
  <RecordProvider>{element}</RecordProvider>
)