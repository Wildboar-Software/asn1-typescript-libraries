/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DiagFormat_sort_illegal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-sort-illegal ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DiagFormat_sort_illegal = INTEGER;

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_relation: DiagFormat_sort_illegal = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_relation
 * @constant
 * @type {number}
 */
export
const relation: DiagFormat_sort_illegal = DiagFormat_sort_illegal_relation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_case_: DiagFormat_sort_illegal = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_case_
 * @constant
 * @type {number}
 */
export
const case_: DiagFormat_sort_illegal = DiagFormat_sort_illegal_case_; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_action: DiagFormat_sort_illegal = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_action
 * @constant
 * @type {number}
 */
export
const action: DiagFormat_sort_illegal = DiagFormat_sort_illegal_action; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const DiagFormat_sort_illegal_sort: DiagFormat_sort_illegal = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DiagFormat_sort_illegal_sort
 * @constant
 * @type {number}
 */
export
const sort: DiagFormat_sort_illegal = DiagFormat_sort_illegal_sort; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DiagFormat_sort_illegal: $.ASN1Decoder<DiagFormat_sort_illegal> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_sort_illegal
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_sort_illegal (el: _Element): DiagFormat_sort_illegal {
    if (!_cached_decoder_for_DiagFormat_sort_illegal) { _cached_decoder_for_DiagFormat_sort_illegal = $._decodeInteger; }
    return _cached_decoder_for_DiagFormat_sort_illegal(el);
}

let _cached_encoder_for_DiagFormat_sort_illegal: $.ASN1Encoder<DiagFormat_sort_illegal> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_sort_illegal into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_sort_illegal, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_sort_illegal (value: DiagFormat_sort_illegal, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_sort_illegal) { _cached_encoder_for_DiagFormat_sort_illegal = $._encodeInteger; }
    return _cached_encoder_for_DiagFormat_sort_illegal(value, elGetter);
}


/* eslint-enable */
