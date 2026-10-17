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
 * Contains the selected choice between default charging data information types
 * or translated charging data information.
 *
 * 3GPP TS 33.128, clause 7.19.3.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
    /**
     * @description
     *
     * The IRI-POI in the charging function shall generate an xIRI containing an
     * NchfChargingDataRequest record when the IRI-POI present in the charging
     * function receives a ChargingDataRequest (see TS 32.291 [148] clause
     * 6.1.6.2.1.1) with the target identity as the subscriber identifier or
     * user information from the Nchf interface. (3GPP TS 33.128, clause
     * 7.19.3.4.)
     */
    { nchfChargingDataRequest: NchfChargingDataRequest } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The IRI-POI in the charging function shall generate an xIRI containing an
     * RfChargingDataRequest record when the IRI-POI present in the charging
     * function receives a Charging Data Request (TS 32.299 [111] clause 5.1.2)
     * with the target identity as the User Name, or Subscriber Identifier in
     * the Service Information from the Rf interface. (3GPP TS 33.128, clause
     * 7.19.3.9.)
     */
    | { rfChargingDataRequest: RfChargingDataRequest } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The IRI-POI in the charging function shall generate an xIRI containing a
     * TranslatedChargingDataInfo record when the IRI-POI present in the
     * charging function receives a charging data request with the target
     * identity as the User Name or SubscriberIdentifier. (3GPP TS 33.128,
     * clause 7.19.3.13.)
     */
    | { translatedChargingDataInfo: TranslatedChargingDataInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_ChargingDataInformation: $.ASN1Decoder<ChargingDataInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingDataInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingDataInformation (el: _Element): ChargingDataInformation {
    if (!_cached_decoder_for_ChargingDataInformation) { _cached_decoder_for_ChargingDataInformation = $._decode_extensible_choice<ChargingDataInformation>({
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
