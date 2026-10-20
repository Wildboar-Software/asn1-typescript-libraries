/* eslint-disable */
import {
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TariffInformation, _decode_TariffInformation, _encode_TariffInformation } from "../MMTelChargingDataTypes/TariffInformation.ta.mjs";
// export { TariffInformation, _decode_TariffInformation, _encode_TariffInformation } from "../MMTelChargingDataTypes/TariffInformation.ta.mjs";


/**
 * @summary RealTimeTariffInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RealTimeTariffInformation  ::=  CHOICE {
 *    tariffInformation     [0] IMPLICIT TariffInformation,
 *    tariffXml             [1] IMPLICIT UTF8String}
 * ```
 */
export
type RealTimeTariffInformation =
    { tariffInformation: TariffInformation } /* CHOICE_ALT_ROOT */
    | { tariffXml: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RealTimeTariffInformation: $.ASN1Decoder<RealTimeTariffInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RealTimeTariffInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RealTimeTariffInformation (el: _Element): RealTimeTariffInformation {
    if (!_cached_decoder_for_RealTimeTariffInformation) { _cached_decoder_for_RealTimeTariffInformation = $._decode_inextensible_choice<RealTimeTariffInformation>({
    "CONTEXT 0": [ "tariffInformation", $._decode_implicit<TariffInformation>(() => _decode_TariffInformation) ],
    "CONTEXT 1": [ "tariffXml", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_RealTimeTariffInformation(el);
}

let _cached_encoder_for_RealTimeTariffInformation: $.ASN1Encoder<RealTimeTariffInformation> | null = null;

/**
 * @summary Encodes a(n) RealTimeTariffInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RealTimeTariffInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RealTimeTariffInformation (value: RealTimeTariffInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RealTimeTariffInformation) { _cached_encoder_for_RealTimeTariffInformation = $._encode_choice<RealTimeTariffInformation>({
    "tariffInformation": $._encode_implicit(_TagClass.context, 0, () => _encode_TariffInformation, $.BER),
    "tariffXml": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_RealTimeTariffInformation(value, elGetter);
}


/* eslint-enable */
