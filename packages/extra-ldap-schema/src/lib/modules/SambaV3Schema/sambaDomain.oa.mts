/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";


import { sambaAlgorithmicRidBase } from "../SambaV3Schema/sambaAlgorithmicRidBase.oa.mjs";
import { sambaForceLogoff } from "../SambaV3Schema/sambaForceLogoff.oa.mjs";
import { sambaLockoutDuration } from "../SambaV3Schema/sambaLockoutDuration.oa.mjs";
import { sambaLockoutObservationWindow } from "../SambaV3Schema/sambaLockoutObservationWindow.oa.mjs";
import { sambaLockoutThreshold } from "../SambaV3Schema/sambaLockoutThreshold.oa.mjs";
import { sambaLogonToChgPwd } from "../SambaV3Schema/sambaLogonToChgPwd.oa.mjs";
import { sambaMaxPwdAge } from "../SambaV3Schema/sambaMaxPwdAge.oa.mjs";
import { sambaMinPwdAge } from "../SambaV3Schema/sambaMinPwdAge.oa.mjs";
import { sambaMinPwdLength } from "../SambaV3Schema/sambaMinPwdLength.oa.mjs";
import { sambaNextGroupRid } from "../SambaV3Schema/sambaNextGroupRid.oa.mjs";
import { sambaNextRid } from "../SambaV3Schema/sambaNextRid.oa.mjs";
import { sambaNextUserRid } from "../SambaV3Schema/sambaNextUserRid.oa.mjs";
import { sambaPwdHistoryLength } from "../SambaV3Schema/sambaPwdHistoryLength.oa.mjs";
import { sambaRefuseMachinePwdChange } from "../SambaV3Schema/sambaRefuseMachinePwdChange.oa.mjs";
import { sambaDomainName } from "../SambaV3Schema/sambaDomainName.oa.mjs";
import { sambaSID } from "../SambaV3Schema/sambaSID.oa.mjs";
/**
 * @summary sambaDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaDomain OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            structural
 *     MUST CONTAIN    {sambaDomainName | sambaSID}
 *     MAY CONTAIN     {sambaAlgorithmicRidBase | sambaForceLogoff | sambaLockoutDuration | sambaLockoutObservationWindow | sambaLockoutThreshold | sambaLogonToChgPwd | sambaMaxPwdAge | sambaMinPwdAge | sambaMinPwdLength | sambaNextGroupRid | sambaNextRid | sambaNextUserRid | sambaPwdHistoryLength | sambaRefuseMachinePwdChange}
 *     LDAP-NAME       {"sambaDomain"}
 *     LDAP-DESC       "Samba Domain Information"
 *     ID              { 1 3 6 1 4 1 7165 2 2 5 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ sambaDomainName, sambaSID, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sambaAlgorithmicRidBase, sambaForceLogoff, sambaLockoutDuration, sambaLockoutObservationWindow, sambaLockoutThreshold, sambaLogonToChgPwd, sambaMaxPwdAge, sambaMinPwdAge, sambaMinPwdLength, sambaNextGroupRid, sambaNextRid, sambaNextUserRid, sambaPwdHistoryLength, sambaRefuseMachinePwdChange, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Domain Information" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 7165, 2, 2, 5,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
