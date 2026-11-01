/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DocumentStoreSyntax_method
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DocumentStoreSyntax-method ::= INTEGER { ftp(0), ftam(1) }
 * ```
 */
export
type DocumentStoreSyntax_method = INTEGER;

/**
 * @summary DocumentStoreSyntax_method_ftp
 * @constant
 * @type {number}
 */
export
const DocumentStoreSyntax_method_ftp: number = 0 satisfies DocumentStoreSyntax_method; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentStoreSyntax_method_ftp
 * @constant
 * @type {number}
 */
export
const ftp: number = DocumentStoreSyntax_method_ftp; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentStoreSyntax_method_ftam
 * @constant
 * @type {number}
 */
export
const DocumentStoreSyntax_method_ftam: number = 1 satisfies DocumentStoreSyntax_method; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DocumentStoreSyntax_method_ftam
 * @constant
 * @type {number}
 */
export
const ftam: number = DocumentStoreSyntax_method_ftam; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_DocumentStoreSyntax_method: $.ASN1Decoder<DocumentStoreSyntax_method> = $._decodeInteger;

export
const _encode_DocumentStoreSyntax_method: $.ASN1Encoder<DocumentStoreSyntax_method> = $._encodeInteger;

/* eslint-enable */
