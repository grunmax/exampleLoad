name := "exampleLoad"

version := "1.0"

scalaVersion := "2.12.3"

enablePlugins(GatlingPlugin)

libraryDependencies += "io.gatling.highcharts" % "gatling-charts-highcharts" % "2.3.0" % "test"

libraryDependencies += "io.gatling" % "gatling-test-framework" % "2.3.0" % "test"