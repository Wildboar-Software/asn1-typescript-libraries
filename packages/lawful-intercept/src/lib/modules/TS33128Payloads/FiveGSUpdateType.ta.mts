/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSUpdateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSUpdateType  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type FiveGSUpdateType = OCTET_STRING; // OctetStringType

let _cached_decoder_for_FiveGSUpdateType: $.ASN1Decoder<FiveGSUpdateType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FiveGSUpdateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FiveGSUpdateType (el: _Element): FiveGSUpdateType {
    if (!_cached_decoder_for_FiveGSUpdateType) { _cached_decoder_for_FiveGSUpdateType = $._decodeOctetString; }
    return _cached_decoder_for_FiveGSUpdateType(el);
}

let _cached_encoder_for_FiveGSUpdateType: $.ASN1Encoder<FiveGSUpdateType> | null = null;

/**
 * @summary Encodes a(n) FiveGSUpdateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FiveGSUpdateType, encoded as an ASN.1 Element.
 */
export
function _encode_FiveGSUpdateType (value: FiveGSUpdateType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FiveGSUpdateType) { _cached_encoder_for_FiveGSUpdateType = $._encodeOctetString; }
    return _cached_encoder_for_FiveGSUpdateType(value, elGetter);
}


/* eslint-enable */
