/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventSpecificInformationBCUSM_componentReceivedSpecificInfo, _decode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo, _encode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM-componentReceivedSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCUSM_componentReceivedSpecificInfo, _decode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo, _encode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM-componentReceivedSpecificInfo.ta.mjs";
import { EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, _decode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, _encode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM-associationReleaseRequestedSpecificInfo.ta.mjs";
// export { EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, _decode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, _encode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM-associationReleaseRequestedSpecificInfo.ta.mjs";


/**
 * @summary EventSpecificInformationBCUSM
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventSpecificInformationBCUSM  ::=  CHOICE {
 *   componentReceivedSpecificInfo
 *     [0]  SEQUENCE {componentReceivedInfo
 *                      [0]  OCTET STRING
 *                              type OPTIONAL,
 *                    ...},
 *   associationReleaseRequestedSpecificInfo
 *     [1]  SEQUENCE {associationReleaseInfo
 *                      [0]  OCTET STRING
 *                              type OPTIONAL,
 *                    releaseCause            [1]  Cause OPTIONAL,
 *                    ...}
 * }
 * ```
 */
export
type EventSpecificInformationBCUSM =
    { componentReceivedSpecificInfo: EventSpecificInformationBCUSM_componentReceivedSpecificInfo } /* CHOICE_ALT_ROOT */
    | { associationReleaseRequestedSpecificInfo: EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EventSpecificInformationBCUSM: $.ASN1Decoder<EventSpecificInformationBCUSM> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventSpecificInformationBCUSM
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventSpecificInformationBCUSM (el: _Element): EventSpecificInformationBCUSM {
    if (!_cached_decoder_for_EventSpecificInformationBCUSM) { _cached_decoder_for_EventSpecificInformationBCUSM = $._decode_inextensible_choice<EventSpecificInformationBCUSM>({
    "CONTEXT 0": [ "componentReceivedSpecificInfo", $._decode_implicit<EventSpecificInformationBCUSM_componentReceivedSpecificInfo>(() => _decode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo) ],
    "CONTEXT 1": [ "associationReleaseRequestedSpecificInfo", $._decode_implicit<EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo>(() => _decode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo) ]
}); }
    return _cached_decoder_for_EventSpecificInformationBCUSM(el);
}

let _cached_encoder_for_EventSpecificInformationBCUSM: $.ASN1Encoder<EventSpecificInformationBCUSM> | null = null;

/**
 * @summary Encodes a(n) EventSpecificInformationBCUSM into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventSpecificInformationBCUSM, encoded as an ASN.1 Element.
 */
export
function _encode_EventSpecificInformationBCUSM (value: EventSpecificInformationBCUSM, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventSpecificInformationBCUSM) { _cached_encoder_for_EventSpecificInformationBCUSM = $._encode_choice<EventSpecificInformationBCUSM>({
    "componentReceivedSpecificInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_EventSpecificInformationBCUSM_componentReceivedSpecificInfo, $.BER),
    "associationReleaseRequestedSpecificInfo": $._encode_implicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCUSM_associationReleaseRequestedSpecificInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_EventSpecificInformationBCUSM(value, elGetter);
}


/* eslint-enable */
