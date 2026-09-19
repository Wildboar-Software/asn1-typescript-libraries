/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NchfChargingDataRequest, _decode_NchfChargingDataRequest, _encode_NchfChargingDataRequest } from "../TS33128Payloads/NchfChargingDataRequest.ta.mjs";
// export { NchfChargingDataRequest, _decode_NchfChargingDataRequest, _encode_NchfChargingDataRequest } from "../TS33128Payloads/NchfChargingDataRequest.ta.mjs";
import { RfChargingDataRequest, _decode_RfChargingDataRequest, _encode_RfChargingDataRequest } from "../TS33128Payloads/RfChargingDataRequest.ta.mjs";
// export { RfChargingDataRequest, _decode_RfChargingDataRequest, _encode_RfChargingDataRequest } from "../TS33128Payloads/RfChargingDataRequest.ta.mjs";
import { TranslatedChargingDataInfo, _decode_TranslatedChargingDataInfo, _encode_TranslatedChargingDataInfo } from "../TS33128Payloads/TranslatedChargingDataInfo.ta.mjs";
// export { TranslatedChargingDataInfo, _decode_TranslatedChargingDataInfo, _encode_TranslatedChargingDataInfo } from "../TS33128Payloads/TranslatedChargingDataInfo.ta.mjs";


/**
 * @summary ChargingDataInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingDataInformation  ::=  CHOICE
 * {
 *     nchfChargingDataRequest    [1] NchfChargingDataRequest,
 *     rfChargingDataRequest      [2] RfChargingDataRequest,
 *     translatedChargingDataInfo [3] TranslatedChargingDataInfo
 * }
 * ```
 */
export
type ChargingDataInformation =
    { nchfChargingDataRequest: NchfChargingDataRequest } /* CHOICE_ALT_ROOT */
    | { rfChargingDataRequest: RfChargingDataRequest } /* CHOICE_ALT_ROOT */
    | { translatedChargingDataInfo: TranslatedChargingDataInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargingDataInformation: $.ASN1Decoder<ChargingDataInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingDataInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingDataInformation (el: _Element): ChargingDataInformation {
    if (!_cached_decoder_for_ChargingDataInformation) { _cached_decoder_for_ChargingDataInformation = $._decode_inextensible_choice<ChargingDataInformation>({
    "CONTEXT 1": [ "nchfChargingDataRequest", $._decode_implicit<NchfChargingDataRequest>(() => _decode_NchfChargingDataRequest) ],
    "CONTEXT 2": [ "rfChargingDataRequest", $._decode_implicit<RfChargingDataRequest>(() => _decode_RfChargingDataRequest) ],
    "CONTEXT 3": [ "translatedChargingDataInfo", $._decode_implicit<TranslatedChargingDataInfo>(() => _decode_TranslatedChargingDataInfo) ]
}); }
    return _cached_decoder_for_ChargingDataInformation(el);
}

let _cached_encoder_for_ChargingDataInformation: $.ASN1Encoder<ChargingDataInformation> | null = null;

/**
 * @summary Encodes a(n) ChargingDataInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingDataInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingDataInformation (value: ChargingDataInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingDataInformation) { _cached_encoder_for_ChargingDataInformation = $._encode_choice<ChargingDataInformation>({
    "nchfChargingDataRequest": $._encode_implicit(_TagClass.context, 1, () => _encode_NchfChargingDataRequest, $.BER),
    "rfChargingDataRequest": $._encode_implicit(_TagClass.context, 2, () => _encode_RfChargingDataRequest, $.BER),
    "translatedChargingDataInfo": $._encode_implicit(_TagClass.context, 3, () => _encode_TranslatedChargingDataInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargingDataInformation(value, elGetter);
}


/* eslint-enable */
