/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerInformation  ::=  OCTET STRING(SIZE(0..31))
 * ```
 */
export
type TriggerInformation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TriggerInformation: $.ASN1Decoder<TriggerInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerInformation (el: _Element): TriggerInformation {
    if (!_cached_decoder_for_TriggerInformation) { _cached_decoder_for_TriggerInformation = $._decodeOctetString; }
    return _cached_decoder_for_TriggerInformation(el);
}

let _cached_encoder_for_TriggerInformation: $.ASN1Encoder<TriggerInformation> | null = null;

/**
 * @summary Encodes a(n) TriggerInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerInformation (value: TriggerInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerInformation) { _cached_encoder_for_TriggerInformation = $._encodeOctetString; }
    return _cached_encoder_for_TriggerInformation(value, elGetter);
}


/* eslint-enable */
