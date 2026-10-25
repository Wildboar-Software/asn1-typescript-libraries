/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentTypeListVersion
 * @description
 *
 * Version of `DocumentTypeListSyntax`. Only `v0` is assigned.
 *
 * Doc 9303-12, section 7.1.1.6.
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
 * The only version assigned by section 7.1.1.6.
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const DocumentTypeListVersion_v0 = 0 satisfies DocumentTypeListVersion; /* LONG_NAMED_INTEGER_VALUE */

/**
 * Short name for {@link DocumentTypeListVersion_v0}.
 * @summary DocumentTypeListVersion_v0
 * @constant
 * @type {number}
 */
export
const v0 = DocumentTypeListVersion_v0 satisfies DocumentTypeListVersion; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_DocumentTypeListVersion = $._decodeInteger;
export const _encode_DocumentTypeListVersion = $._encodeInteger;


/* eslint-enable */
