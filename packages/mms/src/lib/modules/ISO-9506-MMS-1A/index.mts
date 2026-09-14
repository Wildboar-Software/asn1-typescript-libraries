/**
 * @description
 *
 * Annex abstract syntax module `ISO-9506-MMS-1A`
 * (MMS annex version 1). ObtainFile is the
 * normative File Access service: the client asks
 * the server to copy a file from a source
 * filestore, possibly another server. FileOpen,
 * FileRead, FileClose, FileRename, FileDelete,
 * and FileDirectory are informative file
 * management. Scattered Access was moved from
 * the 2003 base document to informative Annex E;
 * object class value 1 is reserved for it
 * (ISO 9506-1:2003 §7.6).
 *
 * [ISO 9506-1:2003 Annex C, D, E]
 * [ISO 9506-2:2003 Annex C, D, E]
 */
export * from "./DefineScatteredAccess-Request.ta.mjs";
export * from "./DefineScatteredAccess-Response.ta.mjs";
export * from "./DirectoryEntry.ta.mjs";
export * from "./FileAttributes.ta.mjs";
export * from "./FileClose-Request.ta.mjs";
export * from "./FileClose-Response.ta.mjs";
export * from "./FileDelete-Request.ta.mjs";
export * from "./FileDelete-Response.ta.mjs";
export * from "./FileDirectory-Request.ta.mjs";
export * from "./FileDirectory-Response.ta.mjs";
export * from "./FileOpen-Request.ta.mjs";
export * from "./FileOpen-Response.ta.mjs";
export * from "./FileRead-Request.ta.mjs";
export * from "./FileRead-Response.ta.mjs";
export type {
    FileRename_Error,
} from "./FileRename-Error.ta.mjs";
export {
    FileRename_Error_source_file,
    FileRename_Error_destination_file,
    _decode_FileRename_Error,
    _encode_FileRename_Error,
} from "./FileRename-Error.ta.mjs";
export * from "./FileRename-Request.ta.mjs";
export * from "./FileRename-Response.ta.mjs";
export * from "./GetScatteredAccessAttributes-Request.ta.mjs";
export * from "./GetScatteredAccessAttributes-Response.ta.mjs";
export type {
    ObtainFile_Error,
} from "./ObtainFile-Error.ta.mjs";
export {
    ObtainFile_Error_source_file,
    ObtainFile_Error_destination_file,
    _decode_ObtainFile_Error,
    _encode_ObtainFile_Error,
} from "./ObtainFile-Error.ta.mjs";
export * from "./ObtainFile-Request.ta.mjs";
export * from "./ObtainFile-Response.ta.mjs";
export * from "./ScatteredAccessDescription-Item.ta.mjs";
export * from "./ScatteredAccessDescription.ta.mjs";
