/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedRfChargingData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedRfChargingData  ::=  OCTET STRING
 * ```
 */
export
type EncapsulatedRfChargingData = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EncapsulatedRfChargingData: $.ASN1Decoder<EncapsulatedRfChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedRfChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulatedRfChargingData (el: _Element): EncapsulatedRfChargingData {
    if (!_cached_decoder_for_EncapsulatedRfChargingData) { _cached_decoder_for_EncapsulatedRfChargingData = $._decodeOctetString; }
    return _cached_decoder_for_EncapsulatedRfChargingData(el);
}

let _cached_encoder_for_EncapsulatedRfChargingData: $.ASN1Encoder<EncapsulatedRfChargingData> | null = null;

/**
 * @summary Encodes a(n) EncapsulatedRfChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedRfChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulatedRfChargingData (value: EncapsulatedRfChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulatedRfChargingData) { _cached_encoder_for_EncapsulatedRfChargingData = $._encodeOctetString; }
    return _cached_encoder_for_EncapsulatedRfChargingData(value, elGetter);
}


/* eslint-enable */
