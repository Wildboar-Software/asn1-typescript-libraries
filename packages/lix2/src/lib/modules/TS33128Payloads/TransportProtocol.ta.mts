/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TransportProtocol {
    uDP = 1,
    tCP = 2,
}

/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransportProtocol  ::=  ENUMERATED
 * {
 *     uDP(1),
 *     tCP(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TransportProtocol = _enum_for_TransportProtocol;

/**
 * @summary TransportProtocol_uDP
 * @constant
 * @type {number}
 */
export
const TransportProtocol_uDP: TransportProtocol = TransportProtocol.uDP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDP
 * @constant
 * @type {number}
 */
export
const uDP: TransportProtocol = TransportProtocol.uDP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TransportProtocol_tCP
 * @constant
 * @type {number}
 */
export
const TransportProtocol_tCP: TransportProtocol = TransportProtocol.tCP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tCP
 * @constant
 * @type {number}
 */
export
const tCP: TransportProtocol = TransportProtocol.tCP; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TransportProtocol: $.ASN1Decoder<TransportProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransportProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransportProtocol (el: _Element): TransportProtocol {
    if (!_cached_decoder_for_TransportProtocol) { _cached_decoder_for_TransportProtocol = $._decodeEnumerated; }
    return _cached_decoder_for_TransportProtocol(el);
}

let _cached_encoder_for_TransportProtocol: $.ASN1Encoder<TransportProtocol> | null = null;

/**
 * @summary Encodes a(n) TransportProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransportProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_TransportProtocol (value: TransportProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransportProtocol) { _cached_encoder_for_TransportProtocol = $._encodeEnumerated; }
    return _cached_encoder_for_TransportProtocol(value, elGetter);
}


/* eslint-enable */
