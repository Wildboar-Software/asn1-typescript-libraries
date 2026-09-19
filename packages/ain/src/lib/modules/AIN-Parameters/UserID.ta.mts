/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
// export { Dn, _decode_Dn, _encode_Dn } from "../AIN-Parameters/Dn.ta.mjs";
import { UserID_bri, _decode_UserID_bri, _encode_UserID_bri } from "../AIN-Parameters/UserID-bri.ta.mjs";
// export { UserID_bri, _decode_UserID_bri, _encode_UserID_bri } from "../AIN-Parameters/UserID-bri.ta.mjs";
import { TrunkGroupID, _decode_TrunkGroupID, _encode_TrunkGroupID } from "../AIN-Parameters/TrunkGroupID.ta.mjs";
// export { TrunkGroupID, _decode_TrunkGroupID, _encode_TrunkGroupID } from "../AIN-Parameters/TrunkGroupID.ta.mjs";
import { PrivateFacilityGID, _decode_PrivateFacilityGID, _encode_PrivateFacilityGID } from "../AIN-Parameters/PrivateFacilityGID.ta.mjs";
// export { PrivateFacilityGID, _decode_PrivateFacilityGID, _encode_PrivateFacilityGID } from "../AIN-Parameters/PrivateFacilityGID.ta.mjs";
import { ADSIcpeID, _decode_ADSIcpeID, _encode_ADSIcpeID } from "../AIN-Parameters/ADSIcpeID.ta.mjs";
// export { ADSIcpeID, _decode_ADSIcpeID, _encode_ADSIcpeID } from "../AIN-Parameters/ADSIcpeID.ta.mjs";


/**
 * @summary UserID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UserID  ::=  [53] CHOICE{
 *         dn                  [1] IMPLICIT Dn,
 *         bri                 [2] IMPLICIT SEQUENCE {
 *                                 spid    Spid,
 *                                 dn      Dn
 *                                 }, --BRI(ISDNI)
 *         trunkGroupID        [5] IMPLICIT TrunkGroupID,
 *         privateFacilityGID  [6] IMPLICIT PrivateFacilityGID,
 *         aDSIcpeID               ADSIcpeID
 *     }
 * ```
 */
export
type UserID =
    { dn: Dn } /* CHOICE_ALT_ROOT */
    | { bri: UserID_bri } /* CHOICE_ALT_ROOT */
    | { trunkGroupID: TrunkGroupID } /* CHOICE_ALT_ROOT */
    | { privateFacilityGID: PrivateFacilityGID } /* CHOICE_ALT_ROOT */
    | { aDSIcpeID: ADSIcpeID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UserID: $.ASN1Decoder<UserID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UserID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UserID (el: _Element): UserID {
    if (!_cached_decoder_for_UserID) { _cached_decoder_for_UserID = $._decode_explicit<UserID>(() => $._decode_inextensible_choice<UserID>({
    "CONTEXT 1": [ "dn", $._decode_implicit<Dn>(() => _decode_Dn) ],
    "CONTEXT 2": [ "bri", $._decode_implicit<UserID_bri>(() => _decode_UserID_bri) ],
    "CONTEXT 5": [ "trunkGroupID", $._decode_implicit<TrunkGroupID>(() => _decode_TrunkGroupID) ],
    "CONTEXT 6": [ "privateFacilityGID", $._decode_implicit<PrivateFacilityGID>(() => _decode_PrivateFacilityGID) ],
    "UNIVERSAL 4": [ "aDSIcpeID", _decode_ADSIcpeID ]
})); }
    return _cached_decoder_for_UserID(el);
}

let _cached_encoder_for_UserID: $.ASN1Encoder<UserID> | null = null;

/**
 * @summary Encodes a(n) UserID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UserID, encoded as an ASN.1 Element.
 */
export
function _encode_UserID (value: UserID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UserID) { _cached_encoder_for_UserID = $._encode_explicit(_TagClass.context, 53, () => $._encode_choice<UserID>({
    "dn": $._encode_implicit(_TagClass.context, 1, () => _encode_Dn, $.BER),
    "bri": $._encode_implicit(_TagClass.context, 2, () => _encode_UserID_bri, $.BER),
    "trunkGroupID": $._encode_implicit(_TagClass.context, 5, () => _encode_TrunkGroupID, $.BER),
    "privateFacilityGID": $._encode_implicit(_TagClass.context, 6, () => _encode_PrivateFacilityGID, $.BER),
    "aDSIcpeID": _encode_ADSIcpeID,
}, $.BER), $.BER); }
    return _cached_encoder_for_UserID(value, elGetter);
}


/* eslint-enable */
