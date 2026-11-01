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
import { id_oc_nTFRSSubscriber } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriber.va.mjs";
import { fRSRootPath } from "../MSUser/fRSRootPath.oa.mjs";
import { fRSStagingPath } from "../MSUser/fRSStagingPath.oa.mjs";
import { schedule } from "../MSUser/schedule.oa.mjs";
import { fRSUpdateTimeout } from "../MSUser/fRSUpdateTimeout.oa.mjs";
import { fRSFaultCondition } from "../MSUser/fRSFaultCondition.oa.mjs";
import { fRSServiceCommand } from "../MSUser/fRSServiceCommand.oa.mjs";
import { fRSExtensions } from "../MSUser/fRSExtensions.oa.mjs";
import { fRSFlags } from "../MSUser/fRSFlags.oa.mjs";
import { fRSMemberReference } from "../MSUser/fRSMemberReference.oa.mjs";
import { fRSServiceCommandStatus } from "../MSUser/fRSServiceCommandStatus.oa.mjs";
import { fRSTimeLastCommand } from "../LdapSchema2ldifMicrosoft/fRSTimeLastCommand.oa.mjs";
import { fRSTimeLastConfigChange } from "../LdapSchema2ldifMicrosoft/fRSTimeLastConfigChange.oa.mjs";
// export { id_oc_nTFRSSubscriber } from "../LdapSchema2ldifMicrosoft/id-oc-nTFRSSubscriber.va.mjs";


/**
 * @summary nTFRSSubscriber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nTFRSSubscriber OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { fRSRootPath
 *                               | fRSStagingPath }
 *   MAY CONTAIN               { schedule
 *                               | fRSUpdateTimeout
 *                               | fRSFaultCondition
 *                               | fRSServiceCommand
 *                               | fRSExtensions
 *                               | fRSFlags
 *                               | fRSMemberReference
 *                               | fRSServiceCommandStatus
 *                               | fRSTimeLastCommand
 *                               | fRSTimeLastConfigChange }
 *   LDAP-NAME                 {"nTFRSSubscriber"}
 *   ID                        id-oc-nTFRSSubscriber }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nTFRSSubscriber: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ fRSRootPath, fRSStagingPath, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ schedule, fRSUpdateTimeout, fRSFaultCondition, fRSServiceCommand, fRSExtensions, fRSFlags, fRSMemberReference, fRSServiceCommandStatus, fRSTimeLastCommand, fRSTimeLastConfigChange, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nTFRSSubscriber" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nTFRSSubscriber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
