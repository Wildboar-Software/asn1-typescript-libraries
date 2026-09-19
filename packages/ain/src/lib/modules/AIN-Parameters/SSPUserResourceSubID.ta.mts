/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AFRPatternID, _decode_AFRPatternID, _encode_AFRPatternID } from "../AIN-Parameters/AFRPatternID.ta.mjs";
// export { AFRPatternID, _decode_AFRPatternID, _encode_AFRPatternID } from "../AIN-Parameters/AFRPatternID.ta.mjs";
import { BasicBusinessGroupDialingPlanID, _decode_BasicBusinessGroupDialingPlanID, _encode_BasicBusinessGroupDialingPlanID } from "../AIN-Parameters/BasicBusinessGroupDialingPlanID.ta.mjs";
// export { BasicBusinessGroupDialingPlanID, _decode_BasicBusinessGroupDialingPlanID, _encode_BasicBusinessGroupDialingPlanID } from "../AIN-Parameters/BasicBusinessGroupDialingPlanID.ta.mjs";
import { ISDNBChannelID, _decode_ISDNBChannelID, _encode_ISDNBChannelID } from "../AIN-Parameters/ISDNBChannelID.ta.mjs";
// export { ISDNBChannelID, _decode_ISDNBChannelID, _encode_ISDNBChannelID } from "../AIN-Parameters/ISDNBChannelID.ta.mjs";


/**
 * @summary SSPUserResourceSubID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSPUserResourceSubID  ::=  CHOICE{
 *         aFRPatternID [1] IMPLICIT AFRPatternID,
 *         basicBusinessGroupDialingPlanID [2] IMPLICIT BasicBusinessGroupDialingPlanID,
 *         iSDNBChannelID [3] IMPLICIT ISDNBChannelID
 *     }
 * ```
 */
export
type SSPUserResourceSubID =
    { aFRPatternID: AFRPatternID } /* CHOICE_ALT_ROOT */
    | { basicBusinessGroupDialingPlanID: BasicBusinessGroupDialingPlanID } /* CHOICE_ALT_ROOT */
    | { iSDNBChannelID: ISDNBChannelID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSPUserResourceSubID: $.ASN1Decoder<SSPUserResourceSubID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSPUserResourceSubID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSPUserResourceSubID (el: _Element): SSPUserResourceSubID {
    if (!_cached_decoder_for_SSPUserResourceSubID) { _cached_decoder_for_SSPUserResourceSubID = $._decode_inextensible_choice<SSPUserResourceSubID>({
    "CONTEXT 1": [ "aFRPatternID", $._decode_implicit<AFRPatternID>(() => _decode_AFRPatternID) ],
    "CONTEXT 2": [ "basicBusinessGroupDialingPlanID", $._decode_implicit<BasicBusinessGroupDialingPlanID>(() => _decode_BasicBusinessGroupDialingPlanID) ],
    "CONTEXT 3": [ "iSDNBChannelID", $._decode_implicit<ISDNBChannelID>(() => _decode_ISDNBChannelID) ]
}); }
    return _cached_decoder_for_SSPUserResourceSubID(el);
}

let _cached_encoder_for_SSPUserResourceSubID: $.ASN1Encoder<SSPUserResourceSubID> | null = null;

/**
 * @summary Encodes a(n) SSPUserResourceSubID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSPUserResourceSubID, encoded as an ASN.1 Element.
 */
export
function _encode_SSPUserResourceSubID (value: SSPUserResourceSubID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSPUserResourceSubID) { _cached_encoder_for_SSPUserResourceSubID = $._encode_choice<SSPUserResourceSubID>({
    "aFRPatternID": $._encode_implicit(_TagClass.context, 1, () => _encode_AFRPatternID, $.BER),
    "basicBusinessGroupDialingPlanID": $._encode_implicit(_TagClass.context, 2, () => _encode_BasicBusinessGroupDialingPlanID, $.BER),
    "iSDNBChannelID": $._encode_implicit(_TagClass.context, 3, () => _encode_ISDNBChannelID, $.BER),
}, $.BER); }
    return _cached_encoder_for_SSPUserResourceSubID(value, elGetter);
}


/* eslint-enable */
