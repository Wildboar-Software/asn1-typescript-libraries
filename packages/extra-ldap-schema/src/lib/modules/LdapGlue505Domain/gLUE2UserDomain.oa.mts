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
import { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
// export { gLUE2Domain } from "../LdapGlue505Domain/gLUE2Domain.oa.mjs";
import { id_oc_gLUE2UserDomain } from "../LdapGlue505Domain/id-oc-gLUE2UserDomain.va.mjs";
import { gLUE2UserDomainLevel } from "../LdapGlue505Domain/gLUE2UserDomainLevel.oa.mjs";
import { gLUE2UserDomainUserManager } from "../LdapGlue505Domain/gLUE2UserDomainUserManager.oa.mjs";
import { gLUE2UserDomainMember } from "../LdapGlue505Domain/gLUE2UserDomainMember.oa.mjs";
import { gLUE2UserDomainUserDomainForeignKey } from "../LdapGlue505Domain/gLUE2UserDomainUserDomainForeignKey.oa.mjs";
// export { id_oc_gLUE2UserDomain } from "../LdapGlue505Domain/id-oc-gLUE2UserDomain.va.mjs";


/**
 * @summary gLUE2UserDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2UserDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Domain }
 *   MAY CONTAIN               { gLUE2UserDomainLevel
 *                               | gLUE2UserDomainUserManager
 *                               | gLUE2UserDomainMember
 *                               | gLUE2UserDomainUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2UserDomain"}
 *   LDAP-DESC                 "A collection of actors that can be assigned with user roles and privileges to services or shares via policies"
 *   ID                        id-oc-gLUE2UserDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2UserDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Domain, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2UserDomainLevel, gLUE2UserDomainUserManager, gLUE2UserDomainMember, gLUE2UserDomainUserDomainForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2UserDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A collection of actors that can be assigned with user roles and privileges to services or shares via policies" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2UserDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
