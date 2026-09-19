/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PdCommandId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PdCommandId  ::=  INTEGER {
 *     pdci-add        (1),  -- add item to list
 *     pdci-del        (2),  -- delete item from list
 *     pdci-match      (3)   -- math item in list
 * }
 * ```
 */
export
type PdCommandId = INTEGER;

/**
 * @summary PdCommandId_pdci_add
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_add: PdCommandId = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_add
 * @constant
 * @type {number}
 */
export
const pdci_add: PdCommandId = PdCommandId_pdci_add; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_del
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_del: PdCommandId = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_del
 * @constant
 * @type {number}
 */
export
const pdci_del: PdCommandId = PdCommandId_pdci_del; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_match
 * @constant
 * @type {number}
 */
export
const PdCommandId_pdci_match: PdCommandId = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PdCommandId_pdci_match
 * @constant
 * @type {number}
 */
export
const pdci_match: PdCommandId = PdCommandId_pdci_match; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PdCommandId: $.ASN1Decoder<PdCommandId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PdCommandId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PdCommandId (el: _Element): PdCommandId {
    if (!_cached_decoder_for_PdCommandId) { _cached_decoder_for_PdCommandId = $._decodeInteger; }
    return _cached_decoder_for_PdCommandId(el);
}

let _cached_encoder_for_PdCommandId: $.ASN1Encoder<PdCommandId> | null = null;

/**
 * @summary Encodes a(n) PdCommandId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PdCommandId, encoded as an ASN.1 Element.
 */
export
function _encode_PdCommandId (value: PdCommandId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PdCommandId) { _cached_encoder_for_PdCommandId = $._encodeInteger; }
    return _cached_encoder_for_PdCommandId(value, elGetter);
}


/* eslint-enable */
