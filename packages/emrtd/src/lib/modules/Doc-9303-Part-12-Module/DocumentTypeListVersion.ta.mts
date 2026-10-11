/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentTypeListVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentTypeListVersion  ::=  INTEGER {v0(0)}
 * ```
 */
export
type DocumentTypeListVersion = INTEGER;

/**
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const DocumentTypeListVersion_v0: DocumentTypeListVersion = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0: DocumentTypeListVersion = DocumentTypeListVersion_v0; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DocumentTypeListVersion = $._decodeInteger;
export const _encode_DocumentTypeListVersion = $._encodeInteger;


/* eslint-enable */
