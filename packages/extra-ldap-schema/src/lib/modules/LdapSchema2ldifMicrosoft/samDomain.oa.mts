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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { id_oc_samDomain } from "../LdapSchema2ldifMicrosoft/id-oc-samDomain.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { cACertificate } from "../AuthenticationFramework/cACertificate.oa.mjs";
import { builtinCreationTime } from "../MSUser/builtinCreationTime.oa.mjs";
import { builtinModifiedCount } from "../MSUser/builtinModifiedCount.oa.mjs";
import { creationTime } from "../MSUser/creationTime.oa.mjs";
import { domainPolicyObject } from "../MSUser/domainPolicyObject.oa.mjs";
import { defaultLocalPolicyObject } from "../MSUser/defaultLocalPolicyObject.oa.mjs";
import { lockoutDuration } from "../MSUser/lockoutDuration.oa.mjs";
import { lockOutObservationWindow } from "../MSUser/lockOutObservationWindow.oa.mjs";
import { lSACreationTime } from "../MSUser/lSACreationTime.oa.mjs";
import { lSAModifiedCount } from "../MSUser/lSAModifiedCount.oa.mjs";
import { lockoutThreshold } from "../MSUser/lockoutThreshold.oa.mjs";
import { maxPwdAge } from "../MSUser/maxPwdAge.oa.mjs";
import { minPwdAge } from "../MSUser/minPwdAge.oa.mjs";
import { minPwdLength } from "../MSUser/minPwdLength.oa.mjs";
import { modifiedCountAtLastProm } from "../MSUser/modifiedCountAtLastProm.oa.mjs";
import { nETBIOSName } from "../MSUser/nETBIOSName.oa.mjs";
import { nextRid } from "../MSUser/nextRid.oa.mjs";
import { pwdProperties } from "../MSUser/pwdProperties.oa.mjs";
import { pwdHistoryLength } from "../MSUser/pwdHistoryLength.oa.mjs";
import { privateKey } from "../MSUser/privateKey.oa.mjs";
import { replicaSource } from "../MSUser/replicaSource.oa.mjs";
import { controlAccessRights } from "../MSUser/controlAccessRights.oa.mjs";
import { auditingPolicy } from "../MSUser/auditingPolicy.oa.mjs";
import { eFSPolicy } from "../MSUser/eFSPolicy.oa.mjs";
import { desktopProfile } from "../MSUser/desktopProfile.oa.mjs";
import { nTMixedDomain } from "../MSUser/nTMixedDomain.oa.mjs";
import { rIDManagerReference } from "../MSUser/rIDManagerReference.oa.mjs";
import { treeName } from "../MSUser/treeName.oa.mjs";
import { pekList } from "../MSUser/pekList.oa.mjs";
import { pekKeyChangeInterval } from "../MSUser/pekKeyChangeInterval.oa.mjs";
import { gPLink } from "../MSUser/gPLink.oa.mjs";
import { gPOptions } from "../MSUser/gPOptions.oa.mjs";
import { ms_DS_MachineAccountQuota } from "../MSUser/ms-DS-MachineAccountQuota.oa.mjs";
// export { id_oc_samDomain } from "../LdapSchema2ldifMicrosoft/id-oc-samDomain.va.mjs";


/**
 * @summary samDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * samDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description
 *                               | cACertificate
 *                               | builtinCreationTime
 *                               | builtinModifiedCount
 *                               | creationTime
 *                               | domainPolicyObject
 *                               | defaultLocalPolicyObject
 *                               | lockoutDuration
 *                               | lockOutObservationWindow
 *                               | lSACreationTime
 *                               | lSAModifiedCount
 *                               | lockoutThreshold
 *                               | maxPwdAge
 *                               | minPwdAge
 *                               | minPwdLength
 *                               | modifiedCountAtLastProm
 *                               | nETBIOSName
 *                               | nextRid
 *                               | pwdProperties
 *                               | pwdHistoryLength
 *                               | privateKey
 *                               | replicaSource
 *                               | controlAccessRights
 *                               | auditingPolicy
 *                               | eFSPolicy
 *                               | desktopProfile
 *                               | nTMixedDomain
 *                               | rIDManagerReference
 *                               | treeName
 *                               | pekList
 *                               | pekKeyChangeInterval
 *                               | gPLink
 *                               | gPOptions
 *                               | ms-DS-MachineAccountQuota }
 *   LDAP-NAME                 {"samDomain"}
 *   ID                        id-oc-samDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const samDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, cACertificate, builtinCreationTime, builtinModifiedCount, creationTime, domainPolicyObject, defaultLocalPolicyObject, lockoutDuration, lockOutObservationWindow, lSACreationTime, lSAModifiedCount, lockoutThreshold, maxPwdAge, minPwdAge, minPwdLength, modifiedCountAtLastProm, nETBIOSName, nextRid, pwdProperties, pwdHistoryLength, privateKey, replicaSource, controlAccessRights, auditingPolicy, eFSPolicy, desktopProfile, nTMixedDomain, rIDManagerReference, treeName, pekList, pekKeyChangeInterval, gPLink, gPOptions, ms_DS_MachineAccountQuota, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "samDomain" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_samDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
