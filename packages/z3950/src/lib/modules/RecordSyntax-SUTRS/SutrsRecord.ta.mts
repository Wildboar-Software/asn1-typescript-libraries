/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary SutrsRecord
 * @description
 * 
 * Simple Unstructured Text Record Syntax (ANSI/NISO Z39.50-2003, REC.2,
 * ASN1.5). Record-syntax OID `{Z39-50-recordSyntax sutrs(101)}`
 * (`1.2.840.10003.5.101`). The server applies this syntax after the schema
 * and the element specification (§3.6.3).
 * 
 * The record is one string of text, for display with little or no parsing.
 * Elements inside the text are not identified. End each line with ASCII LF
 * (`X'0A'`). Prefer lines of at most 72 characters unless a variant request
 * asks for another maximum. That limit is a best effort, not a hard cap
 * (REC.2).
 * 
 * Read this InternationalString as GeneralString (ASN1.5 comment 1). Under
 * version 2 the characters must still be from the VisibleString repertoire,
 * even though the tag remains GeneralString. A value that is valid for version
 * 3 may be invalid for version 2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SutrsRecord  ::=  InternationalString
 * ```
 */
export
type SutrsRecord = InternationalString; // DefinedType

let _cached_decoder_for_SutrsRecord: $.ASN1Decoder<SutrsRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SutrsRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SutrsRecord (el: _Element): SutrsRecord {
    if (!_cached_decoder_for_SutrsRecord) { _cached_decoder_for_SutrsRecord = _decode_InternationalString; }
    return _cached_decoder_for_SutrsRecord(el);
}

let _cached_encoder_for_SutrsRecord: $.ASN1Encoder<SutrsRecord> | null = null;

/**
 * @summary Encodes a(n) SutrsRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SutrsRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SutrsRecord (value: SutrsRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SutrsRecord) { _cached_encoder_for_SutrsRecord = _encode_InternationalString; }
    return _cached_encoder_for_SutrsRecord(value, elGetter);
}


/* eslint-enable */
