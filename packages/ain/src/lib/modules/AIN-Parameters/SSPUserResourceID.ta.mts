/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { DnCtID, _decode_DnCtID, _encode_DnCtID } from "../AIN-Parameters/DnCtID.ta.mjs";
// export { DnCtID, _decode_DnCtID, _encode_DnCtID } from "../AIN-Parameters/DnCtID.ta.mjs";
import { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
// export { Spid, _decode_Spid, _encode_Spid } from "../AIN-Parameters/Spid.ta.mjs";
import { TrunkGroupID, _decode_TrunkGroupID, _encode_TrunkGroupID } from "../AIN-Parameters/TrunkGroupID.ta.mjs";
// export { TrunkGroupID, _decode_TrunkGroupID, _encode_TrunkGroupID } from "../AIN-Parameters/TrunkGroupID.ta.mjs";
import { LocalSSPID, _decode_LocalSSPID, _encode_LocalSSPID } from "../AIN-Parameters/LocalSSPID.ta.mjs";
// export { LocalSSPID, _decode_LocalSSPID, _encode_LocalSSPID } from "../AIN-Parameters/LocalSSPID.ta.mjs";
import { PublicDialingPlanID, _decode_PublicDialingPlanID, _encode_PublicDialingPlanID } from "../AIN-Parameters/PublicDialingPlanID.ta.mjs";
// export { PublicDialingPlanID, _decode_PublicDialingPlanID, _encode_PublicDialingPlanID } from "../AIN-Parameters/PublicDialingPlanID.ta.mjs";
import { PRIOfficeEquipmentID, _decode_PRIOfficeEquipmentID, _encode_PRIOfficeEquipmentID } from "../AIN-Parameters/PRIOfficeEquipmentID.ta.mjs";
// export { PRIOfficeEquipmentID, _decode_PRIOfficeEquipmentID, _encode_PRIOfficeEquipmentID } from "../AIN-Parameters/PRIOfficeEquipmentID.ta.mjs";
import { BasicBusinessGroupID, _decode_BasicBusinessGroupID, _encode_BasicBusinessGroupID } from "../AIN-Parameters/BasicBusinessGroupID.ta.mjs";
// export { BasicBusinessGroupID, _decode_BasicBusinessGroupID, _encode_BasicBusinessGroupID } from "../AIN-Parameters/BasicBusinessGroupID.ta.mjs";
import { BasicBusinessGroupDialingPlanID, _decode_BasicBusinessGroupDialingPlanID, _encode_BasicBusinessGroupDialingPlanID } from "../AIN-Parameters/BasicBusinessGroupDialingPlanID.ta.mjs";
// export { BasicBusinessGroupDialingPlanID, _decode_BasicBusinessGroupDialingPlanID, _encode_BasicBusinessGroupDialingPlanID } from "../AIN-Parameters/BasicBusinessGroupDialingPlanID.ta.mjs";
import { AFRPatternID, _decode_AFRPatternID, _encode_AFRPatternID } from "../AIN-Parameters/AFRPatternID.ta.mjs";
// export { AFRPatternID, _decode_AFRPatternID, _encode_AFRPatternID } from "../AIN-Parameters/AFRPatternID.ta.mjs";
import { OfficeEquipmentID, _decode_OfficeEquipmentID, _encode_OfficeEquipmentID } from "../AIN-Parameters/OfficeEquipmentID.ta.mjs";
// export { OfficeEquipmentID, _decode_OfficeEquipmentID, _encode_OfficeEquipmentID } from "../AIN-Parameters/OfficeEquipmentID.ta.mjs";


/**
 * @summary SSPUserResourceID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SSPUserResourceID  ::=  CHOICE{
 *         dn                              [1] IMPLICIT Dn, --see Section 6.151 of this GR for encoding
 *         dnCtID                          [2] IMPLICIT DnCtID,
 *         spid                            [3] IMPLICIT Spid, --see Section 6.129 of this GR for encoding
 *         trunkGroupID                    [4] IMPLICIT TrunkGroupID, --see Section 6.151 of this GR for encoding
 *         localSSPID                      [5] IMPLICIT LocalSSPID,
 *         publicDialingPlanID             [6] IMPLICIT PublicDialingPlanID,
 *         pRIOfficeEquipmentID            [7] IMPLICIT PRIOfficeEquipmentID,
 *         basicBusinessGroupID            [8] IMPLICIT BasicBusinessGroupID,
 *         basicBusinessGroupDialingPlanID [9] IMPLICIT BasicBusinessGroupDialingPlanID,
 *         aFRPatternID                    [10] IMPLICIT AFRPatternID,
 *         officeEquipmentID               [11] IMPLICIT OfficeEquipmentID
 *     }
 * ```
 */
export
type SSPUserResourceID =
    { dn: Dn } /* CHOICE_ALT_ROOT */
    | { dnCtID: DnCtID } /* CHOICE_ALT_ROOT */
    | { spid: Spid } /* CHOICE_ALT_ROOT */
    | { trunkGroupID: TrunkGroupID } /* CHOICE_ALT_ROOT */
    | { localSSPID: LocalSSPID } /* CHOICE_ALT_ROOT */
    | { publicDialingPlanID: PublicDialingPlanID } /* CHOICE_ALT_ROOT */
    | { pRIOfficeEquipmentID: PRIOfficeEquipmentID } /* CHOICE_ALT_ROOT */
    | { basicBusinessGroupID: BasicBusinessGroupID } /* CHOICE_ALT_ROOT */
    | { basicBusinessGroupDialingPlanID: BasicBusinessGroupDialingPlanID } /* CHOICE_ALT_ROOT */
    | { aFRPatternID: AFRPatternID } /* CHOICE_ALT_ROOT */
    | { officeEquipmentID: OfficeEquipmentID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SSPUserResourceID: $.ASN1Decoder<SSPUserResourceID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SSPUserResourceID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SSPUserResourceID (el: _Element): SSPUserResourceID {
    if (!_cached_decoder_for_SSPUserResourceID) { _cached_decoder_for_SSPUserResourceID = $._decode_inextensible_choice<SSPUserResourceID>({
    "CONTEXT 1": [ "dn", $._decode_implicit<Dn>(() => _decode_Dn) ],
    "CONTEXT 2": [ "dnCtID", $._decode_implicit<DnCtID>(() => _decode_DnCtID) ],
    "CONTEXT 3": [ "spid", $._decode_implicit<Spid>(() => _decode_Spid) ],
    "CONTEXT 4": [ "trunkGroupID", $._decode_implicit<TrunkGroupID>(() => _decode_TrunkGroupID) ],
    "CONTEXT 5": [ "localSSPID", $._decode_implicit<LocalSSPID>(() => _decode_LocalSSPID) ],
    "CONTEXT 6": [ "publicDialingPlanID", $._decode_implicit<PublicDialingPlanID>(() => _decode_PublicDialingPlanID) ],
    "CONTEXT 7": [ "pRIOfficeEquipmentID", $._decode_implicit<PRIOfficeEquipmentID>(() => _decode_PRIOfficeEquipmentID) ],
    "CONTEXT 8": [ "basicBusinessGroupID", $._decode_implicit<BasicBusinessGroupID>(() => _decode_BasicBusinessGroupID) ],
    "CONTEXT 9": [ "basicBusinessGroupDialingPlanID", $._decode_implicit<BasicBusinessGroupDialingPlanID>(() => _decode_BasicBusinessGroupDialingPlanID) ],
    "CONTEXT 10": [ "aFRPatternID", $._decode_implicit<AFRPatternID>(() => _decode_AFRPatternID) ],
    "CONTEXT 11": [ "officeEquipmentID", $._decode_implicit<OfficeEquipmentID>(() => _decode_OfficeEquipmentID) ]
}); }
    return _cached_decoder_for_SSPUserResourceID(el);
}

let _cached_encoder_for_SSPUserResourceID: $.ASN1Encoder<SSPUserResourceID> | null = null;

/**
 * @summary Encodes a(n) SSPUserResourceID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SSPUserResourceID, encoded as an ASN.1 Element.
 */
export
function _encode_SSPUserResourceID (value: SSPUserResourceID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SSPUserResourceID) { _cached_encoder_for_SSPUserResourceID = $._encode_choice<SSPUserResourceID>({
    "dn": $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER),
    "dnCtID": $._encode_implicit(_TagClass.context, 2, () => _encode_DnCtID, $.BER),
    "spid": $._encode_implicit(_TagClass.context, 3, () => _encode_Spid, $.BER),
    "trunkGroupID": $._encode_implicit(_TagClass.context, 4, () => _encode_TrunkGroupID, $.BER),
    "localSSPID": $._encode_implicit(_TagClass.context, 5, () => _encode_LocalSSPID, $.BER),
    "publicDialingPlanID": $._encode_implicit(_TagClass.context, 6, () => _encode_PublicDialingPlanID, $.BER),
    "pRIOfficeEquipmentID": $._encode_implicit(_TagClass.context, 7, () => _encode_PRIOfficeEquipmentID, $.BER),
    "basicBusinessGroupID": $._encode_implicit(_TagClass.context, 8, () => _encode_BasicBusinessGroupID, $.BER),
    "basicBusinessGroupDialingPlanID": $._encode_implicit(_TagClass.context, 9, () => _encode_BasicBusinessGroupDialingPlanID, $.BER),
    "aFRPatternID": $._encode_implicit(_TagClass.context, 10, () => _encode_AFRPatternID, $.BER),
    "officeEquipmentID": $._encode_implicit(_TagClass.context, 11, () => _encode_OfficeEquipmentID, $.BER),
}, $.BER); }
    return _cached_encoder_for_SSPUserResourceID(value, elGetter);
}


/* eslint-enable */
