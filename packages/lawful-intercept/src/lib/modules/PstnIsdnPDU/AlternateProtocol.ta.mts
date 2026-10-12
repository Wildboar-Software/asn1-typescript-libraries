/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AlternateProtocol {
    uDPTL = 1,
}

/**
 * @summary AlternateProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlternateProtocol  ::=  ENUMERATED
 * {
 *     uDPTL(1),
 *         -- pstnIsdnCCContents parameter contains UDPTL packets
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlternateProtocol = _enum_for_AlternateProtocol | ENUMERATED;

/**
 * @summary AlternateProtocol_uDPTL
 * @constant
 * @type {number}
 */
export
const AlternateProtocol_uDPTL: AlternateProtocol = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uDPTL
 * @constant
 * @type {number}
 */
export
const uDPTL: AlternateProtocol = AlternateProtocol_uDPTL; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AlternateProtocol: $.ASN1Decoder<AlternateProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlternateProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AlternateProtocol (el: _Element): AlternateProtocol {
    if (!_cached_decoder_for_AlternateProtocol) { _cached_decoder_for_AlternateProtocol = $._decodeEnumerated; }
    return _cached_decoder_for_AlternateProtocol(el);
}

let _cached_encoder_for_AlternateProtocol: $.ASN1Encoder<AlternateProtocol> | null = null;

/**
 * @summary Encodes a(n) AlternateProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlternateProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_AlternateProtocol (value: AlternateProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AlternateProtocol) { _cached_encoder_for_AlternateProtocol = $._encodeEnumerated; }
    return _cached_encoder_for_AlternateProtocol(value, elGetter);
}


/* eslint-enable */
