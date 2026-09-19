/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ADSIcpeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ADSIcpeID  ::=  OCTET STRING(SIZE(4))
 * ```
 */
export
type ADSIcpeID = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ADSIcpeID: $.ASN1Decoder<ADSIcpeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ADSIcpeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ADSIcpeID (el: _Element): ADSIcpeID {
    if (!_cached_decoder_for_ADSIcpeID) { _cached_decoder_for_ADSIcpeID = $._decodeOctetString; }
    return _cached_decoder_for_ADSIcpeID(el);
}

let _cached_encoder_for_ADSIcpeID: $.ASN1Encoder<ADSIcpeID> | null = null;

/**
 * @summary Encodes a(n) ADSIcpeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ADSIcpeID, encoded as an ASN.1 Element.
 */
export
function _encode_ADSIcpeID (value: ADSIcpeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ADSIcpeID) { _cached_encoder_for_ADSIcpeID = $._encodeOctetString; }
    return _cached_encoder_for_ADSIcpeID(value, elGetter);
}


/* eslint-enable */
