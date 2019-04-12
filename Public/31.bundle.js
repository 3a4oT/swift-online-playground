(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js":
/*!************************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js ***!
  \************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\r\n *  Copyright (c) Microsoft Corporation. All rights reserved.\r\n *  Licensed under the MIT License. See License.txt in the project root for license information.\r\n *--------------------------------------------------------------------------------------------*/\r\n\r\nvar conf = {\r\n    comments: {\r\n        lineComment: '//',\r\n        blockComment: ['/*', '*/'],\r\n    },\r\n    brackets: [['[', ']'], ['(', ')'], ['{', '}']],\r\n    autoClosingPairs: [\r\n        { open: '\"', close: '\"', notIn: ['string', 'comment', 'identifier'] },\r\n        { open: '[', close: ']', notIn: ['string', 'comment', 'identifier'] },\r\n        { open: '(', close: ')', notIn: ['string', 'comment', 'identifier'] },\r\n        { open: '{', close: '}', notIn: ['string', 'comment', 'identifier'] },\r\n    ]\r\n};\r\nvar language = {\r\n    defaultToken: '',\r\n    tokenPostfix: '.pq',\r\n    ignoreCase: false,\r\n    brackets: [\r\n        { open: '[', close: ']', token: 'delimiter.square' },\r\n        { open: '{', close: '}', token: 'delimiter.brackets' },\r\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\r\n    ],\r\n    operatorKeywords: [\r\n        \"and\",\r\n        \"not\",\r\n        \"or\"\r\n    ],\r\n    keywords: [\r\n        \"as\",\r\n        \"each\",\r\n        \"else\",\r\n        \"error\",\r\n        \"false\",\r\n        \"if\",\r\n        \"in\",\r\n        \"is\",\r\n        \"let\",\r\n        \"meta\",\r\n        \"otherwise\",\r\n        \"section\",\r\n        \"shared\",\r\n        \"then\",\r\n        \"true\",\r\n        \"try\",\r\n        \"type\"\r\n    ],\r\n    constructors: [\r\n        \"#binary\",\r\n        \"#date\",\r\n        \"#datetime\",\r\n        \"#datetimezone\",\r\n        \"#duration\",\r\n        \"#table\",\r\n        \"#time\"\r\n    ],\r\n    constants: [\r\n        \"#infinity\",\r\n        \"#nan\",\r\n        \"#sections\",\r\n        \"#shared\"\r\n    ],\r\n    typeKeywords: [\r\n        \"action\",\r\n        \"any\",\r\n        \"anynonnull\",\r\n        \"none\",\r\n        \"null\",\r\n        \"logical\",\r\n        \"number\",\r\n        \"time\",\r\n        \"date\",\r\n        \"datetime\",\r\n        \"datetimezone\",\r\n        \"duration\",\r\n        \"text\",\r\n        \"binary\",\r\n        \"list\",\r\n        \"record\",\r\n        \"table\",\r\n        \"function\"\r\n    ],\r\n    builtinFunctions: [\r\n        \"Access.Database\",\r\n        \"Action.Return\",\r\n        \"Action.Sequence\",\r\n        \"Action.Try\",\r\n        \"ActiveDirectory.Domains\",\r\n        \"AdoDotNet.DataSource\",\r\n        \"AdoDotNet.Query\",\r\n        \"AdobeAnalytics.Cubes\",\r\n        \"AnalysisServices.Database\",\r\n        \"AnalysisServices.Databases\",\r\n        \"AzureStorage.BlobContents\",\r\n        \"AzureStorage.Blobs\",\r\n        \"AzureStorage.Tables\",\r\n        \"Binary.Buffer\",\r\n        \"Binary.Combine\",\r\n        \"Binary.Compress\",\r\n        \"Binary.Decompress\",\r\n        \"Binary.End\",\r\n        \"Binary.From\",\r\n        \"Binary.FromList\",\r\n        \"Binary.FromText\",\r\n        \"Binary.InferContentType\",\r\n        \"Binary.Length\",\r\n        \"Binary.ToList\",\r\n        \"Binary.ToText\",\r\n        \"BinaryFormat.7BitEncodedSignedInteger\",\r\n        \"BinaryFormat.7BitEncodedUnsignedInteger\",\r\n        \"BinaryFormat.Binary\",\r\n        \"BinaryFormat.Byte\",\r\n        \"BinaryFormat.ByteOrder\",\r\n        \"BinaryFormat.Choice\",\r\n        \"BinaryFormat.Decimal\",\r\n        \"BinaryFormat.Double\",\r\n        \"BinaryFormat.Group\",\r\n        \"BinaryFormat.Length\",\r\n        \"BinaryFormat.List\",\r\n        \"BinaryFormat.Null\",\r\n        \"BinaryFormat.Record\",\r\n        \"BinaryFormat.SignedInteger16\",\r\n        \"BinaryFormat.SignedInteger32\",\r\n        \"BinaryFormat.SignedInteger64\",\r\n        \"BinaryFormat.Single\",\r\n        \"BinaryFormat.Text\",\r\n        \"BinaryFormat.Transform\",\r\n        \"BinaryFormat.UnsignedInteger16\",\r\n        \"BinaryFormat.UnsignedInteger32\",\r\n        \"BinaryFormat.UnsignedInteger64\",\r\n        \"Byte.From\",\r\n        \"Character.FromNumber\",\r\n        \"Character.ToNumber\",\r\n        \"Combiner.CombineTextByDelimiter\",\r\n        \"Combiner.CombineTextByEachDelimiter\",\r\n        \"Combiner.CombineTextByLengths\",\r\n        \"Combiner.CombineTextByPositions\",\r\n        \"Combiner.CombineTextByRanges\",\r\n        \"Comparer.Equals\",\r\n        \"Comparer.FromCulture\",\r\n        \"Comparer.Ordinal\",\r\n        \"Comparer.OrdinalIgnoreCase\",\r\n        \"Csv.Document\",\r\n        \"Cube.AddAndExpandDimensionColumn\",\r\n        \"Cube.AddMeasureColumn\",\r\n        \"Cube.ApplyParameter\",\r\n        \"Cube.AttributeMemberId\",\r\n        \"Cube.AttributeMemberProperty\",\r\n        \"Cube.CollapseAndRemoveColumns\",\r\n        \"Cube.Dimensions\",\r\n        \"Cube.DisplayFolders\",\r\n        \"Cube.Measures\",\r\n        \"Cube.Parameters\",\r\n        \"Cube.Properties\",\r\n        \"Cube.PropertyKey\",\r\n        \"Cube.ReplaceDimensions\",\r\n        \"Cube.Transform\",\r\n        \"Currency.From\",\r\n        \"DB2.Database\",\r\n        \"Date.AddDays\",\r\n        \"Date.AddMonths\",\r\n        \"Date.AddQuarters\",\r\n        \"Date.AddWeeks\",\r\n        \"Date.AddYears\",\r\n        \"Date.Day\",\r\n        \"Date.DayOfWeek\",\r\n        \"Date.DayOfWeekName\",\r\n        \"Date.DayOfYear\",\r\n        \"Date.DaysInMonth\",\r\n        \"Date.EndOfDay\",\r\n        \"Date.EndOfMonth\",\r\n        \"Date.EndOfQuarter\",\r\n        \"Date.EndOfWeek\",\r\n        \"Date.EndOfYear\",\r\n        \"Date.From\",\r\n        \"Date.FromText\",\r\n        \"Date.IsInCurrentDay\",\r\n        \"Date.IsInCurrentMonth\",\r\n        \"Date.IsInCurrentQuarter\",\r\n        \"Date.IsInCurrentWeek\",\r\n        \"Date.IsInCurrentYear\",\r\n        \"Date.IsInNextDay\",\r\n        \"Date.IsInNextMonth\",\r\n        \"Date.IsInNextNDays\",\r\n        \"Date.IsInNextNMonths\",\r\n        \"Date.IsInNextNQuarters\",\r\n        \"Date.IsInNextNWeeks\",\r\n        \"Date.IsInNextNYears\",\r\n        \"Date.IsInNextQuarter\",\r\n        \"Date.IsInNextWeek\",\r\n        \"Date.IsInNextYear\",\r\n        \"Date.IsInPreviousDay\",\r\n        \"Date.IsInPreviousMonth\",\r\n        \"Date.IsInPreviousNDays\",\r\n        \"Date.IsInPreviousNMonths\",\r\n        \"Date.IsInPreviousNQuarters\",\r\n        \"Date.IsInPreviousNWeeks\",\r\n        \"Date.IsInPreviousNYears\",\r\n        \"Date.IsInPreviousQuarter\",\r\n        \"Date.IsInPreviousWeek\",\r\n        \"Date.IsInPreviousYear\",\r\n        \"Date.IsInYearToDate\",\r\n        \"Date.IsLeapYear\",\r\n        \"Date.Month\",\r\n        \"Date.MonthName\",\r\n        \"Date.QuarterOfYear\",\r\n        \"Date.StartOfDay\",\r\n        \"Date.StartOfMonth\",\r\n        \"Date.StartOfQuarter\",\r\n        \"Date.StartOfWeek\",\r\n        \"Date.StartOfYear\",\r\n        \"Date.ToRecord\",\r\n        \"Date.ToText\",\r\n        \"Date.WeekOfMonth\",\r\n        \"Date.WeekOfYear\",\r\n        \"Date.Year\",\r\n        \"DateTime.AddZone\",\r\n        \"DateTime.Date\",\r\n        \"DateTime.FixedLocalNow\",\r\n        \"DateTime.From\",\r\n        \"DateTime.FromFileTime\",\r\n        \"DateTime.FromText\",\r\n        \"DateTime.IsInCurrentHour\",\r\n        \"DateTime.IsInCurrentMinute\",\r\n        \"DateTime.IsInCurrentSecond\",\r\n        \"DateTime.IsInNextHour\",\r\n        \"DateTime.IsInNextMinute\",\r\n        \"DateTime.IsInNextNHours\",\r\n        \"DateTime.IsInNextNMinutes\",\r\n        \"DateTime.IsInNextNSeconds\",\r\n        \"DateTime.IsInNextSecond\",\r\n        \"DateTime.IsInPreviousHour\",\r\n        \"DateTime.IsInPreviousMinute\",\r\n        \"DateTime.IsInPreviousNHours\",\r\n        \"DateTime.IsInPreviousNMinutes\",\r\n        \"DateTime.IsInPreviousNSeconds\",\r\n        \"DateTime.IsInPreviousSecond\",\r\n        \"DateTime.LocalNow\",\r\n        \"DateTime.Time\",\r\n        \"DateTime.ToRecord\",\r\n        \"DateTime.ToText\",\r\n        \"DateTimeZone.FixedLocalNow\",\r\n        \"DateTimeZone.FixedUtcNow\",\r\n        \"DateTimeZone.From\",\r\n        \"DateTimeZone.FromFileTime\",\r\n        \"DateTimeZone.FromText\",\r\n        \"DateTimeZone.LocalNow\",\r\n        \"DateTimeZone.RemoveZone\",\r\n        \"DateTimeZone.SwitchZone\",\r\n        \"DateTimeZone.ToLocal\",\r\n        \"DateTimeZone.ToRecord\",\r\n        \"DateTimeZone.ToText\",\r\n        \"DateTimeZone.ToUtc\",\r\n        \"DateTimeZone.UtcNow\",\r\n        \"DateTimeZone.ZoneHours\",\r\n        \"DateTimeZone.ZoneMinutes\",\r\n        \"Decimal.From\",\r\n        \"Diagnostics.ActivityId\",\r\n        \"Diagnostics.Trace\",\r\n        \"DirectQueryCapabilities.From\",\r\n        \"Double.From\",\r\n        \"Duration.Days\",\r\n        \"Duration.From\",\r\n        \"Duration.FromText\",\r\n        \"Duration.Hours\",\r\n        \"Duration.Minutes\",\r\n        \"Duration.Seconds\",\r\n        \"Duration.ToRecord\",\r\n        \"Duration.ToText\",\r\n        \"Duration.TotalDays\",\r\n        \"Duration.TotalHours\",\r\n        \"Duration.TotalMinutes\",\r\n        \"Duration.TotalSeconds\",\r\n        \"Embedded.Value\",\r\n        \"Error.Record\",\r\n        \"Excel.CurrentWorkbook\",\r\n        \"Excel.Workbook\",\r\n        \"Exchange.Contents\",\r\n        \"Expression.Constant\",\r\n        \"Expression.Evaluate\",\r\n        \"Expression.Identifier\",\r\n        \"Facebook.Graph\",\r\n        \"File.Contents\",\r\n        \"Folder.Contents\",\r\n        \"Folder.Files\",\r\n        \"Function.From\",\r\n        \"Function.Invoke\",\r\n        \"Function.InvokeAfter\",\r\n        \"Function.IsDataSource\",\r\n        \"GoogleAnalytics.Accounts\",\r\n        \"Guid.From\",\r\n        \"HdInsight.Containers\",\r\n        \"HdInsight.Contents\",\r\n        \"HdInsight.Files\",\r\n        \"Hdfs.Contents\",\r\n        \"Hdfs.Files\",\r\n        \"Informix.Database\",\r\n        \"Int16.From\",\r\n        \"Int32.From\",\r\n        \"Int64.From\",\r\n        \"Int8.From\",\r\n        \"ItemExpression.From\",\r\n        \"Json.Document\",\r\n        \"Json.FromValue\",\r\n        \"Lines.FromBinary\",\r\n        \"Lines.FromText\",\r\n        \"Lines.ToBinary\",\r\n        \"Lines.ToText\",\r\n        \"List.Accumulate\",\r\n        \"List.AllTrue\",\r\n        \"List.Alternate\",\r\n        \"List.AnyTrue\",\r\n        \"List.Average\",\r\n        \"List.Buffer\",\r\n        \"List.Combine\",\r\n        \"List.Contains\",\r\n        \"List.ContainsAll\",\r\n        \"List.ContainsAny\",\r\n        \"List.Count\",\r\n        \"List.Covariance\",\r\n        \"List.DateTimeZones\",\r\n        \"List.DateTimes\",\r\n        \"List.Dates\",\r\n        \"List.Difference\",\r\n        \"List.Distinct\",\r\n        \"List.Durations\",\r\n        \"List.FindText\",\r\n        \"List.First\",\r\n        \"List.FirstN\",\r\n        \"List.Generate\",\r\n        \"List.InsertRange\",\r\n        \"List.Intersect\",\r\n        \"List.IsDistinct\",\r\n        \"List.IsEmpty\",\r\n        \"List.Last\",\r\n        \"List.LastN\",\r\n        \"List.MatchesAll\",\r\n        \"List.MatchesAny\",\r\n        \"List.Max\",\r\n        \"List.MaxN\",\r\n        \"List.Median\",\r\n        \"List.Min\",\r\n        \"List.MinN\",\r\n        \"List.Mode\",\r\n        \"List.Modes\",\r\n        \"List.NonNullCount\",\r\n        \"List.Numbers\",\r\n        \"List.PositionOf\",\r\n        \"List.PositionOfAny\",\r\n        \"List.Positions\",\r\n        \"List.Product\",\r\n        \"List.Random\",\r\n        \"List.Range\",\r\n        \"List.RemoveFirstN\",\r\n        \"List.RemoveItems\",\r\n        \"List.RemoveLastN\",\r\n        \"List.RemoveMatchingItems\",\r\n        \"List.RemoveNulls\",\r\n        \"List.RemoveRange\",\r\n        \"List.Repeat\",\r\n        \"List.ReplaceMatchingItems\",\r\n        \"List.ReplaceRange\",\r\n        \"List.ReplaceValue\",\r\n        \"List.Reverse\",\r\n        \"List.Select\",\r\n        \"List.Single\",\r\n        \"List.SingleOrDefault\",\r\n        \"List.Skip\",\r\n        \"List.Sort\",\r\n        \"List.StandardDeviation\",\r\n        \"List.Sum\",\r\n        \"List.Times\",\r\n        \"List.Transform\",\r\n        \"List.TransformMany\",\r\n        \"List.Union\",\r\n        \"List.Zip\",\r\n        \"Logical.From\",\r\n        \"Logical.FromText\",\r\n        \"Logical.ToText\",\r\n        \"MQ.Queue\",\r\n        \"MySQL.Database\",\r\n        \"Number.Abs\",\r\n        \"Number.Acos\",\r\n        \"Number.Asin\",\r\n        \"Number.Atan\",\r\n        \"Number.Atan2\",\r\n        \"Number.BitwiseAnd\",\r\n        \"Number.BitwiseNot\",\r\n        \"Number.BitwiseOr\",\r\n        \"Number.BitwiseShiftLeft\",\r\n        \"Number.BitwiseShiftRight\",\r\n        \"Number.BitwiseXor\",\r\n        \"Number.Combinations\",\r\n        \"Number.Cos\",\r\n        \"Number.Cosh\",\r\n        \"Number.Exp\",\r\n        \"Number.Factorial\",\r\n        \"Number.From\",\r\n        \"Number.FromText\",\r\n        \"Number.IntegerDivide\",\r\n        \"Number.IsEven\",\r\n        \"Number.IsNaN\",\r\n        \"Number.IsOdd\",\r\n        \"Number.Ln\",\r\n        \"Number.Log\",\r\n        \"Number.Log10\",\r\n        \"Number.Mod\",\r\n        \"Number.Permutations\",\r\n        \"Number.Power\",\r\n        \"Number.Random\",\r\n        \"Number.RandomBetween\",\r\n        \"Number.Round\",\r\n        \"Number.RoundAwayFromZero\",\r\n        \"Number.RoundDown\",\r\n        \"Number.RoundTowardZero\",\r\n        \"Number.RoundUp\",\r\n        \"Number.Sign\",\r\n        \"Number.Sin\",\r\n        \"Number.Sinh\",\r\n        \"Number.Sqrt\",\r\n        \"Number.Tan\",\r\n        \"Number.Tanh\",\r\n        \"Number.ToText\",\r\n        \"OData.Feed\",\r\n        \"Odbc.DataSource\",\r\n        \"Odbc.Query\",\r\n        \"OleDb.DataSource\",\r\n        \"OleDb.Query\",\r\n        \"Oracle.Database\",\r\n        \"Percentage.From\",\r\n        \"PostgreSQL.Database\",\r\n        \"RData.FromBinary\",\r\n        \"Record.AddField\",\r\n        \"Record.Combine\",\r\n        \"Record.Field\",\r\n        \"Record.FieldCount\",\r\n        \"Record.FieldNames\",\r\n        \"Record.FieldOrDefault\",\r\n        \"Record.FieldValues\",\r\n        \"Record.FromList\",\r\n        \"Record.FromTable\",\r\n        \"Record.HasFields\",\r\n        \"Record.RemoveFields\",\r\n        \"Record.RenameFields\",\r\n        \"Record.ReorderFields\",\r\n        \"Record.SelectFields\",\r\n        \"Record.ToList\",\r\n        \"Record.ToTable\",\r\n        \"Record.TransformFields\",\r\n        \"Replacer.ReplaceText\",\r\n        \"Replacer.ReplaceValue\",\r\n        \"RowExpression.Column\",\r\n        \"RowExpression.From\",\r\n        \"Salesforce.Data\",\r\n        \"Salesforce.Reports\",\r\n        \"SapBusinessWarehouse.Cubes\",\r\n        \"SapHana.Database\",\r\n        \"SharePoint.Contents\",\r\n        \"SharePoint.Files\",\r\n        \"SharePoint.Tables\",\r\n        \"Single.From\",\r\n        \"Soda.Feed\",\r\n        \"Splitter.SplitByNothing\",\r\n        \"Splitter.SplitTextByAnyDelimiter\",\r\n        \"Splitter.SplitTextByDelimiter\",\r\n        \"Splitter.SplitTextByEachDelimiter\",\r\n        \"Splitter.SplitTextByLengths\",\r\n        \"Splitter.SplitTextByPositions\",\r\n        \"Splitter.SplitTextByRanges\",\r\n        \"Splitter.SplitTextByRepeatedLengths\",\r\n        \"Splitter.SplitTextByWhitespace\",\r\n        \"Sql.Database\",\r\n        \"Sql.Databases\",\r\n        \"SqlExpression.SchemaFrom\",\r\n        \"SqlExpression.ToExpression\",\r\n        \"Sybase.Database\",\r\n        \"Table.AddColumn\",\r\n        \"Table.AddIndexColumn\",\r\n        \"Table.AddJoinColumn\",\r\n        \"Table.AddKey\",\r\n        \"Table.AggregateTableColumn\",\r\n        \"Table.AlternateRows\",\r\n        \"Table.Buffer\",\r\n        \"Table.Column\",\r\n        \"Table.ColumnCount\",\r\n        \"Table.ColumnNames\",\r\n        \"Table.ColumnsOfType\",\r\n        \"Table.Combine\",\r\n        \"Table.CombineColumns\",\r\n        \"Table.Contains\",\r\n        \"Table.ContainsAll\",\r\n        \"Table.ContainsAny\",\r\n        \"Table.DemoteHeaders\",\r\n        \"Table.Distinct\",\r\n        \"Table.DuplicateColumn\",\r\n        \"Table.ExpandListColumn\",\r\n        \"Table.ExpandRecordColumn\",\r\n        \"Table.ExpandTableColumn\",\r\n        \"Table.FillDown\",\r\n        \"Table.FillUp\",\r\n        \"Table.FilterWithDataTable\",\r\n        \"Table.FindText\",\r\n        \"Table.First\",\r\n        \"Table.FirstN\",\r\n        \"Table.FirstValue\",\r\n        \"Table.FromColumns\",\r\n        \"Table.FromList\",\r\n        \"Table.FromPartitions\",\r\n        \"Table.FromRecords\",\r\n        \"Table.FromRows\",\r\n        \"Table.FromValue\",\r\n        \"Table.Group\",\r\n        \"Table.HasColumns\",\r\n        \"Table.InsertRows\",\r\n        \"Table.IsDistinct\",\r\n        \"Table.IsEmpty\",\r\n        \"Table.Join\",\r\n        \"Table.Keys\",\r\n        \"Table.Last\",\r\n        \"Table.LastN\",\r\n        \"Table.MatchesAllRows\",\r\n        \"Table.MatchesAnyRows\",\r\n        \"Table.Max\",\r\n        \"Table.MaxN\",\r\n        \"Table.Min\",\r\n        \"Table.MinN\",\r\n        \"Table.NestedJoin\",\r\n        \"Table.Partition\",\r\n        \"Table.PartitionValues\",\r\n        \"Table.Pivot\",\r\n        \"Table.PositionOf\",\r\n        \"Table.PositionOfAny\",\r\n        \"Table.PrefixColumns\",\r\n        \"Table.Profile\",\r\n        \"Table.PromoteHeaders\",\r\n        \"Table.Range\",\r\n        \"Table.RemoveColumns\",\r\n        \"Table.RemoveFirstN\",\r\n        \"Table.RemoveLastN\",\r\n        \"Table.RemoveMatchingRows\",\r\n        \"Table.RemoveRows\",\r\n        \"Table.RemoveRowsWithErrors\",\r\n        \"Table.RenameColumns\",\r\n        \"Table.ReorderColumns\",\r\n        \"Table.Repeat\",\r\n        \"Table.ReplaceErrorValues\",\r\n        \"Table.ReplaceKeys\",\r\n        \"Table.ReplaceMatchingRows\",\r\n        \"Table.ReplaceRelationshipIdentity\",\r\n        \"Table.ReplaceRows\",\r\n        \"Table.ReplaceValue\",\r\n        \"Table.ReverseRows\",\r\n        \"Table.RowCount\",\r\n        \"Table.Schema\",\r\n        \"Table.SelectColumns\",\r\n        \"Table.SelectRows\",\r\n        \"Table.SelectRowsWithErrors\",\r\n        \"Table.SingleRow\",\r\n        \"Table.Skip\",\r\n        \"Table.Sort\",\r\n        \"Table.SplitColumn\",\r\n        \"Table.ToColumns\",\r\n        \"Table.ToList\",\r\n        \"Table.ToRecords\",\r\n        \"Table.ToRows\",\r\n        \"Table.TransformColumnNames\",\r\n        \"Table.TransformColumnTypes\",\r\n        \"Table.TransformColumns\",\r\n        \"Table.TransformRows\",\r\n        \"Table.Transpose\",\r\n        \"Table.Unpivot\",\r\n        \"Table.UnpivotOtherColumns\",\r\n        \"Table.View\",\r\n        \"Table.ViewFunction\",\r\n        \"TableAction.DeleteRows\",\r\n        \"TableAction.InsertRows\",\r\n        \"TableAction.UpdateRows\",\r\n        \"Tables.GetRelationships\",\r\n        \"Teradata.Database\",\r\n        \"Text.AfterDelimiter\",\r\n        \"Text.At\",\r\n        \"Text.BeforeDelimiter\",\r\n        \"Text.BetweenDelimiters\",\r\n        \"Text.Clean\",\r\n        \"Text.Combine\",\r\n        \"Text.Contains\",\r\n        \"Text.End\",\r\n        \"Text.EndsWith\",\r\n        \"Text.Format\",\r\n        \"Text.From\",\r\n        \"Text.FromBinary\",\r\n        \"Text.Insert\",\r\n        \"Text.Length\",\r\n        \"Text.Lower\",\r\n        \"Text.Middle\",\r\n        \"Text.NewGuid\",\r\n        \"Text.PadEnd\",\r\n        \"Text.PadStart\",\r\n        \"Text.PositionOf\",\r\n        \"Text.PositionOfAny\",\r\n        \"Text.Proper\",\r\n        \"Text.Range\",\r\n        \"Text.Remove\",\r\n        \"Text.RemoveRange\",\r\n        \"Text.Repeat\",\r\n        \"Text.Replace\",\r\n        \"Text.ReplaceRange\",\r\n        \"Text.Select\",\r\n        \"Text.Split\",\r\n        \"Text.SplitAny\",\r\n        \"Text.Start\",\r\n        \"Text.StartsWith\",\r\n        \"Text.ToBinary\",\r\n        \"Text.ToList\",\r\n        \"Text.Trim\",\r\n        \"Text.TrimEnd\",\r\n        \"Text.TrimStart\",\r\n        \"Text.Upper\",\r\n        \"Time.EndOfHour\",\r\n        \"Time.From\",\r\n        \"Time.FromText\",\r\n        \"Time.Hour\",\r\n        \"Time.Minute\",\r\n        \"Time.Second\",\r\n        \"Time.StartOfHour\",\r\n        \"Time.ToRecord\",\r\n        \"Time.ToText\",\r\n        \"Type.AddTableKey\",\r\n        \"Type.ClosedRecord\",\r\n        \"Type.Facets\",\r\n        \"Type.ForFunction\",\r\n        \"Type.ForRecord\",\r\n        \"Type.FunctionParameters\",\r\n        \"Type.FunctionRequiredParameters\",\r\n        \"Type.FunctionReturn\",\r\n        \"Type.Is\",\r\n        \"Type.IsNullable\",\r\n        \"Type.IsOpenRecord\",\r\n        \"Type.ListItem\",\r\n        \"Type.NonNullable\",\r\n        \"Type.OpenRecord\",\r\n        \"Type.RecordFields\",\r\n        \"Type.ReplaceFacets\",\r\n        \"Type.ReplaceTableKeys\",\r\n        \"Type.TableColumn\",\r\n        \"Type.TableKeys\",\r\n        \"Type.TableRow\",\r\n        \"Type.TableSchema\",\r\n        \"Type.Union\",\r\n        \"Uri.BuildQueryString\",\r\n        \"Uri.Combine\",\r\n        \"Uri.EscapeDataString\",\r\n        \"Uri.Parts\",\r\n        \"Value.Add\",\r\n        \"Value.As\",\r\n        \"Value.Compare\",\r\n        \"Value.Divide\",\r\n        \"Value.Equals\",\r\n        \"Value.Firewall\",\r\n        \"Value.FromText\",\r\n        \"Value.Is\",\r\n        \"Value.Metadata\",\r\n        \"Value.Multiply\",\r\n        \"Value.NativeQuery\",\r\n        \"Value.NullableEquals\",\r\n        \"Value.RemoveMetadata\",\r\n        \"Value.ReplaceMetadata\",\r\n        \"Value.ReplaceType\",\r\n        \"Value.Subtract\",\r\n        \"Value.Type\",\r\n        \"ValueAction.NativeStatement\",\r\n        \"ValueAction.Replace\",\r\n        \"Variable.Value\",\r\n        \"Web.Contents\",\r\n        \"Web.Page\",\r\n        \"WebAction.Request\",\r\n        \"Xml.Document\",\r\n        \"Xml.Tables\"\r\n    ],\r\n    builtinConstants: [\r\n        \"BinaryEncoding.Base64\",\r\n        \"BinaryEncoding.Hex\",\r\n        \"BinaryOccurrence.Optional\",\r\n        \"BinaryOccurrence.Repeating\",\r\n        \"BinaryOccurrence.Required\",\r\n        \"ByteOrder.BigEndian\",\r\n        \"ByteOrder.LittleEndian\",\r\n        \"Compression.Deflate\",\r\n        \"Compression.GZip\",\r\n        \"CsvStyle.QuoteAfterDelimiter\",\r\n        \"CsvStyle.QuoteAlways\",\r\n        \"Culture.Current\",\r\n        \"Day.Friday\",\r\n        \"Day.Monday\",\r\n        \"Day.Saturday\",\r\n        \"Day.Sunday\",\r\n        \"Day.Thursday\",\r\n        \"Day.Tuesday\",\r\n        \"Day.Wednesday\",\r\n        \"ExtraValues.Error\",\r\n        \"ExtraValues.Ignore\",\r\n        \"ExtraValues.List\",\r\n        \"GroupKind.Global\",\r\n        \"GroupKind.Local\",\r\n        \"JoinAlgorithm.Dynamic\",\r\n        \"JoinAlgorithm.LeftHash\",\r\n        \"JoinAlgorithm.LeftIndex\",\r\n        \"JoinAlgorithm.PairwiseHash\",\r\n        \"JoinAlgorithm.RightHash\",\r\n        \"JoinAlgorithm.RightIndex\",\r\n        \"JoinAlgorithm.SortMerge\",\r\n        \"JoinKind.FullOuter\",\r\n        \"JoinKind.Inner\",\r\n        \"JoinKind.LeftAnti\",\r\n        \"JoinKind.LeftOuter\",\r\n        \"JoinKind.RightAnti\",\r\n        \"JoinKind.RightOuter\",\r\n        \"JoinSide.Left\",\r\n        \"JoinSide.Right\",\r\n        \"MissingField.Error\",\r\n        \"MissingField.Ignore\",\r\n        \"MissingField.UseNull\",\r\n        \"Number.E\",\r\n        \"Number.Epsilon\",\r\n        \"Number.NaN\",\r\n        \"Number.NegativeInfinity\",\r\n        \"Number.PI\",\r\n        \"Number.PositiveInfinity\",\r\n        \"Occurrence.All\",\r\n        \"Occurrence.First\",\r\n        \"Occurrence.Last\",\r\n        \"Occurrence.Optional\",\r\n        \"Occurrence.Repeating\",\r\n        \"Occurrence.Required\",\r\n        \"Order.Ascending\",\r\n        \"Order.Descending\",\r\n        \"Precision.Decimal\",\r\n        \"Precision.Double\",\r\n        \"QuoteStyle.Csv\",\r\n        \"QuoteStyle.None\",\r\n        \"RelativePosition.FromEnd\",\r\n        \"RelativePosition.FromStart\",\r\n        \"RoundingMode.AwayFromZero\",\r\n        \"RoundingMode.Down\",\r\n        \"RoundingMode.ToEven\",\r\n        \"RoundingMode.TowardZero\",\r\n        \"RoundingMode.Up\",\r\n        \"SapHanaDistribution.All\",\r\n        \"SapHanaDistribution.Connection\",\r\n        \"SapHanaDistribution.Off\",\r\n        \"SapHanaDistribution.Statement\",\r\n        \"SapHanaRangeOperator.Equals\",\r\n        \"SapHanaRangeOperator.GreaterThan\",\r\n        \"SapHanaRangeOperator.GreaterThanOrEquals\",\r\n        \"SapHanaRangeOperator.LessThan\",\r\n        \"SapHanaRangeOperator.LessThanOrEquals\",\r\n        \"SapHanaRangeOperator.NotEquals\",\r\n        \"TextEncoding.Ascii\",\r\n        \"TextEncoding.BigEndianUnicode\",\r\n        \"TextEncoding.Unicode\",\r\n        \"TextEncoding.Utf16\",\r\n        \"TextEncoding.Utf8\",\r\n        \"TextEncoding.Windows\",\r\n        \"TraceLevel.Critical\",\r\n        \"TraceLevel.Error\",\r\n        \"TraceLevel.Information\",\r\n        \"TraceLevel.Verbose\",\r\n        \"TraceLevel.Warning\",\r\n        \"WebMethod.Delete\",\r\n        \"WebMethod.Get\",\r\n        \"WebMethod.Head\",\r\n        \"WebMethod.Patch\",\r\n        \"WebMethod.Post\",\r\n        \"WebMethod.Put\"\r\n    ],\r\n    builtinTypes: [\r\n        \"Action.Type\",\r\n        \"Any.Type\",\r\n        \"Binary.Type\",\r\n        \"BinaryEncoding.Type\",\r\n        \"BinaryOccurrence.Type\",\r\n        \"Byte.Type\",\r\n        \"ByteOrder.Type\",\r\n        \"Character.Type\",\r\n        \"Compression.Type\",\r\n        \"CsvStyle.Type\",\r\n        \"Currency.Type\",\r\n        \"Date.Type\",\r\n        \"DateTime.Type\",\r\n        \"DateTimeZone.Type\",\r\n        \"Day.Type\",\r\n        \"Decimal.Type\",\r\n        \"Double.Type\",\r\n        \"Duration.Type\",\r\n        \"ExtraValues.Type\",\r\n        \"Function.Type\",\r\n        \"GroupKind.Type\",\r\n        \"Guid.Type\",\r\n        \"Int16.Type\",\r\n        \"Int32.Type\",\r\n        \"Int64.Type\",\r\n        \"Int8.Type\",\r\n        \"JoinAlgorithm.Type\",\r\n        \"JoinKind.Type\",\r\n        \"JoinSide.Type\",\r\n        \"List.Type\",\r\n        \"Logical.Type\",\r\n        \"MissingField.Type\",\r\n        \"None.Type\",\r\n        \"Null.Type\",\r\n        \"Number.Type\",\r\n        \"Occurrence.Type\",\r\n        \"Order.Type\",\r\n        \"Password.Type\",\r\n        \"Percentage.Type\",\r\n        \"Precision.Type\",\r\n        \"QuoteStyle.Type\",\r\n        \"Record.Type\",\r\n        \"RelativePosition.Type\",\r\n        \"RoundingMode.Type\",\r\n        \"SapHanaDistribution.Type\",\r\n        \"SapHanaRangeOperator.Type\",\r\n        \"Single.Type\",\r\n        \"Table.Type\",\r\n        \"Text.Type\",\r\n        \"TextEncoding.Type\",\r\n        \"Time.Type\",\r\n        \"TraceLevel.Type\",\r\n        \"Type.Type\",\r\n        \"Uri.Type\",\r\n        \"WebMethod.Type\"\r\n    ],\r\n    tokenizer: {\r\n        root: [\r\n            // quoted identifier\r\n            [/#\"[\\w \\.]+\"/, \"identifier.quote\"],\r\n            // numbers\r\n            [/\\d*\\.\\d+([eE][\\-+]?\\d+)?/, \"number.float\"],\r\n            [/0[xX][0-9a-fA-F]+/, \"number.hex\"],\r\n            [/\\d+([eE][\\-+]?\\d+)?/, \"number\"],\r\n            // keywords\r\n            [/(#?[a-z]+)\\b/,\r\n                {\r\n                    cases: {\r\n                        \"@typeKeywords\": \"type\",\r\n                        \"@keywords\": \"keyword\",\r\n                        \"@constants\": \"constant\",\r\n                        \"@constructors\": \"constructor\",\r\n                        \"@operatorKeywords\": \"operators\",\r\n                        \"@default\": \"identifier\"\r\n                    }\r\n                }\r\n            ],\r\n            // built-in types\r\n            [/\\b([A-Z][a-zA-Z0-9]+\\.Type)\\b/,\r\n                {\r\n                    cases: {\r\n                        \"@builtinTypes\": \"type\",\r\n                        \"@default\": \"identifier\"\r\n                    }\r\n                }\r\n            ],\r\n            // other built-ins\r\n            [/\\b([A-Z][a-zA-Z0-9]+\\.[A-Z][a-zA-Z0-9]+)\\b/,\r\n                {\r\n                    cases: {\r\n                        \"@builtinFunctions\": \"keyword.function\",\r\n                        \"@builtinConstants\": \"constant\",\r\n                        \"@default\": \"identifier\"\r\n                    }\r\n                }\r\n            ],\r\n            // other identifiers\r\n            [/\\b([a-zA-Z_][\\w\\.]*)\\b/, \"identifier\"],\r\n            { include: \"@whitespace\" },\r\n            { include: \"@comments\" },\r\n            { include: \"@strings\" },\r\n            [/[{}()\\[\\]]/, \"@brackets\"],\r\n            [/([=\\+<>\\-\\*&@\\?\\/!])|([<>]=)|(<>)|(=>)|(\\.\\.\\.)|(\\.\\.)/, \"operators\"],\r\n            [/[,;]/, \"delimiter\"],\r\n        ],\r\n        whitespace: [\r\n            [/\\s+/, \"white\"]\r\n        ],\r\n        comments: [\r\n            [\"\\\\/\\\\*\", \"comment\", \"@comment\"],\r\n            [\"\\\\/\\\\/+.*\", \"comment\"]\r\n        ],\r\n        comment: [\r\n            [\"\\\\*\\\\/\", \"comment\", \"@pop\"],\r\n            [\".\", \"comment\"]\r\n        ],\r\n        strings: [\r\n            [\"\\\"\", \"string\", \"@string\"]\r\n        ],\r\n        string: [\r\n            [\"\\\"\\\"\", \"string.escape\"],\r\n            [\"\\\"\", \"string\", \"@pop\"],\r\n            [\".\", \"string\"]\r\n        ]\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/monaco-editor/esm/vs/basic-languages/powerquery/powerquery.js?");

/***/ })

}]);