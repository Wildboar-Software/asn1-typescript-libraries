/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_dbUnavail_why_reasonCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-dbUnavail-why-reasonCode ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_dbUnavail_why_reasonCode = INTEGER;

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_doesNotExist: DiagFormat_dbUnavail_why_reasonCode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_doesNotExist
 * @constant
 * @type {number}
 */
export
const doesNotExist: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_doesNotExist; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_existsButUnavail
 * @constant
 * @type {number}
 */
export
const existsButUnavail: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_existsButUnavail; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_locked: DiagFormat_dbUnavail_why_reasonCode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_locked
 * @constant
 * @type {number}
 */
export
const locked: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_locked; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const DiagFormat_dbUnavail_why_reasonCode_accessDenied: DiagFormat_dbUnavail_why_reasonCode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_dbUnavail_why_reasonCode_accessDenied
 * @constant
 * @type {number}
 */
export
const accessDenied: DiagFormat_dbUnavail_why_reasonCode = DiagFormat_dbUnavail_why_reasonCode_accessDenied; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Decoder<DiagFormat_dbUnavail_why_reasonCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_dbUnavail_why_reasonCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_dbUnavail_why_reasonCode (el: _Element): DiagFormat_dbUnavail_why_reasonCode {
    if (!_cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode) { _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_dbUnavail_why_reasonCode(el);
}

let _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode: $.ASN1Encoder<DiagFormat_dbUnavail_why_reasonCode> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_dbUnavail_why_reasonCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_dbUnavail_why_reasonCode, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_dbUnavail_why_reasonCode (value: DiagFormat_dbUnavail_why_reasonCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode) { _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_dbUnavail_why_reasonCode(value, elGetter);
}


/* eslint-enable */
