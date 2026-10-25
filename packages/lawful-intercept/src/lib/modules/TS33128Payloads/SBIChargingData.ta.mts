/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type EncapsulatedSBIChargingData, _decode_EncapsulatedSBIChargingData, _encode_EncapsulatedSBIChargingData } from "../TS33128Payloads/EncapsulatedSBIChargingData.ta.mjs";
// export { EncapsulatedSBIChargingData, _decode_EncapsulatedSBIChargingData, _encode_EncapsulatedSBIChargingData } from "../TS33128Payloads/EncapsulatedSBIChargingData.ta.mjs";


/**
 * @summary SBIChargingData
 * @description
 * 
 * Encapsulated message that triggered the xIRI in its original format.
 *
 * 3GPP TS 33.128, clause 7.19.3.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SBIChargingData  ::=  CHOICE
 * {
 *     fullSBIChargingData    [1] EncapsulatedSBIChargingData
 * }
 * ```
 */
export
type SBIChargingData =
    /**
     * @description
     *
     * Encapsulated unmodified payload of Nchf SBI payload. (3GPP TS 33.128,
     * clause 7.19.3.5.)
     */
    { fullSBIChargingData: EncapsulatedSBIChargingData } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_SBIChargingData: $.ASN1Decoder<SBIChargingData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SBIChargingData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SBIChargingData (el: _Element): SBIChargingData {
    if (!_cached_decoder_for_SBIChargingData) { _cached_decoder_for_SBIChargingData = $._decode_extensible_choice<SBIChargingData>({
    "CONTEXT 1": [ "fullSBIChargingData", $._decode_explicit<EncapsulatedSBIChargingData>(() => _decode_EncapsulatedSBIChargingData) ]
}); }
    return _cached_decoder_for_SBIChargingData(el);
}

let _cached_encoder_for_SBIChargingData: $.ASN1Encoder<SBIChargingData> | null = null;

/**
 * @summary Encodes a(n) SBIChargingData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SBIChargingData, encoded as an ASN.1 Element.
 */
export
function _encode_SBIChargingData (value: SBIChargingData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SBIChargingData) { _cached_encoder_for_SBIChargingData = $._encode_choice<SBIChargingData>({
    "fullSBIChargingData": $._encode_explicit(_TagClass.context, 1, () => _encode_EncapsulatedSBIChargingData, $.BER),
}, $.BER); }
    return _cached_encoder_for_SBIChargingData(value, elGetter);
}


/* eslint-enable */
