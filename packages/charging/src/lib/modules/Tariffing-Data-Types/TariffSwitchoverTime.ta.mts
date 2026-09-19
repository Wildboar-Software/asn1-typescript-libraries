/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TariffSwitchoverTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TariffSwitchoverTime  ::=  OCTET STRING (SIZE(1))
 * ```
 */
export
type TariffSwitchoverTime = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TariffSwitchoverTime: $.ASN1Decoder<TariffSwitchoverTime> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TariffSwitchoverTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TariffSwitchoverTime (el: _Element): TariffSwitchoverTime {
    if (!_cached_decoder_for_TariffSwitchoverTime) { _cached_decoder_for_TariffSwitchoverTime = $._decodeOctetString; }
    return _cached_decoder_for_TariffSwitchoverTime(el);
}

let _cached_encoder_for_TariffSwitchoverTime: $.ASN1Encoder<TariffSwitchoverTime> | null = null;

/**
 * @summary Encodes a(n) TariffSwitchoverTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TariffSwitchoverTime, encoded as an ASN.1 Element.
 */
export
function _encode_TariffSwitchoverTime (value: TariffSwitchoverTime, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TariffSwitchoverTime) { _cached_encoder_for_TariffSwitchoverTime = $._encodeOctetString; }
    return _cached_encoder_for_TariffSwitchoverTime(value, elGetter);
}


/* eslint-enable */
