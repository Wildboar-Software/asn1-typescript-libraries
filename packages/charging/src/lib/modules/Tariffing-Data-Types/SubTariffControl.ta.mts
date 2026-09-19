/* eslint-disable */
import {
    ASN1Element as _Element,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SubTariffControl
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubTariffControl  ::=  BIT STRING {oneTimeCharge (0)}
 * (SIZE(minSubTariffControlLen..maxSubTariffControlLen))
 * ```
 */
export
type SubTariffControl = BIT_STRING;

/**
 * @summary SubTariffControl_oneTimeCharge
 * @constant
 */
export
const SubTariffControl_oneTimeCharge: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary oneTimeCharge
 * @constant
 */
export
const oneTimeCharge: number = SubTariffControl_oneTimeCharge; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SubTariffControl: $.ASN1Decoder<SubTariffControl> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubTariffControl
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubTariffControl (el: _Element): SubTariffControl {
    if (!_cached_decoder_for_SubTariffControl) { _cached_decoder_for_SubTariffControl = $._decodeBitString; }
    return _cached_decoder_for_SubTariffControl(el);
}

let _cached_encoder_for_SubTariffControl: $.ASN1Encoder<SubTariffControl> | null = null;

/**
 * @summary Encodes a(n) SubTariffControl into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubTariffControl, encoded as an ASN.1 Element.
 */
export
function _encode_SubTariffControl (value: SubTariffControl, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubTariffControl) { _cached_encoder_for_SubTariffControl = $._encodeBitString; }
    return _cached_encoder_for_SubTariffControl(value, elGetter);
}


/* eslint-enable */
