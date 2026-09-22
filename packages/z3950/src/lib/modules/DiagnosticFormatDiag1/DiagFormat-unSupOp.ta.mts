/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_unSupOp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-unSupOp ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_unSupOp = INTEGER;

/**
 * @summary DiagFormat_unSupOp_and
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and: DiagFormat_unSupOp = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and
 * @constant
 * @type {number}
 */
export
const and: DiagFormat_unSupOp = DiagFormat_unSupOp_and; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_or: DiagFormat_unSupOp = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_or
 * @constant
 * @type {number}
 */
export
const or: DiagFormat_unSupOp = DiagFormat_unSupOp_or; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_and_not: DiagFormat_unSupOp = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_and_not
 * @constant
 * @type {number}
 */
export
const and_not: DiagFormat_unSupOp = DiagFormat_unSupOp_and_not; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @constant
 * @type {number}
 */
export
const DiagFormat_unSupOp_prox: DiagFormat_unSupOp = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_unSupOp_prox
 * @constant
 * @type {number}
 */
export
const prox: DiagFormat_unSupOp = DiagFormat_unSupOp_prox; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_unSupOp: $.ASN1Decoder<DiagFormat_unSupOp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_unSupOp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_unSupOp (el: _Element): DiagFormat_unSupOp {
    if (!_cached_decoder_for_DiagFormat_unSupOp) { _cached_decoder_for_DiagFormat_unSupOp = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_unSupOp(el);
}

let _cached_encoder_for_DiagFormat_unSupOp: $.ASN1Encoder<DiagFormat_unSupOp> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_unSupOp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_unSupOp, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_unSupOp (value: DiagFormat_unSupOp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_unSupOp) { _cached_encoder_for_DiagFormat_unSupOp = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_unSupOp(value, elGetter);
}


/* eslint-enable */
