/**
 * @module
 * @description
 * ASN.1 module `RecordSyntax-SUTRS`: Simple Unstructured Text Record Syntax
 * (ANSI/NISO Z39.50-2003, REC.2, ASN1.5).
 * 
 * Object identifier `{Z39-50-recordSyntax sutrs(101)}` on arc `{Z39-50 5}`
 * (`1.2.840.10003.5.101`). Selected like any record syntax, by preferred record
 * syntax or by `compSpec` (§3.6.3). The record is one text string. Lines end
 * with ASCII LF. The recommended maximum line length is 72 characters unless a
 * variant request asks otherwise. Under version 2 only the VisibleString
 * repertoire is allowed.
 */

export type {
    SutrsRecord,
} from "./SutrsRecord.ta.mjs";

export {
    _decode_SutrsRecord,
    _encode_SutrsRecord,
} from "./SutrsRecord.ta.mjs";
