/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChargeUnitTimeInterval
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeUnitTimeInterval  ::=  OCTET STRING (SIZE(2))
 * ```
 */
export
type ChargeUnitTimeInterval = OCTET_STRING; // OctetStringType

let _cached_decoder_for_ChargeUnitTimeInterval: $.ASN1Decoder<ChargeUnitTimeInterval> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeUnitTimeInterval
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeUnitTimeInterval (el: _Element): ChargeUnitTimeInterval {
    if (!_cached_decoder_for_ChargeUnitTimeInterval) { _cached_decoder_for_ChargeUnitTimeInterval = $._decodeOctetString; }
    return _cached_decoder_for_ChargeUnitTimeInterval(el);
}

let _cached_encoder_for_ChargeUnitTimeInterval: $.ASN1Encoder<ChargeUnitTimeInterval> | null = null;

/**
 * @summary Encodes a(n) ChargeUnitTimeInterval into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeUnitTimeInterval, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeUnitTimeInterval (value: ChargeUnitTimeInterval, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeUnitTimeInterval) { _cached_encoder_for_ChargeUnitTimeInterval = $._encodeOctetString; }
    return _cached_encoder_for_ChargeUnitTimeInterval(value, elGetter);
}


/* eslint-enable */
