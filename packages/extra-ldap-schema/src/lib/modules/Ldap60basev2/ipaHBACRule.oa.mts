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
import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
// export { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
// export { accessRuleType } from "../Ldap60basev2/accessRuleType.oa.mjs";
import { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";
import { sourceHost } from "../Ldap60basev2/sourceHost.oa.mjs";
import { sourceHostCategory } from "../Ldap60basev2/sourceHostCategory.oa.mjs";
import { serviceCategory } from "../Ldap60basev2/serviceCategory.oa.mjs";
import { memberService } from "../Ldap60basev2/memberService.oa.mjs";
import { externalHost } from "../Ldap60basev2/externalHost.oa.mjs";
import { accessTime } from "../Ldap60basev2/accessTime.oa.mjs";
// export { id_oc_ipaHBACRule } from "../Ldap60basev2/id-oc-ipaHBACRule.va.mjs";


/**
 * @summary ipaHBACRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaHBACRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MUST CONTAIN              { accessRuleType }
 *   MAY CONTAIN               { sourceHost
 *                               | sourceHostCategory
 *                               | serviceCategory
 *                               | memberService
 *                               | externalHost
 *                               | accessTime }
 *   LDAP-NAME                 {"ipaHBACRule"}
 *   ID                        id-oc-ipaHBACRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaHBACRule: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ accessRuleType, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sourceHost, sourceHostCategory, serviceCategory, memberService, externalHost, accessTime, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaHBACRule" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaHBACRule /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
