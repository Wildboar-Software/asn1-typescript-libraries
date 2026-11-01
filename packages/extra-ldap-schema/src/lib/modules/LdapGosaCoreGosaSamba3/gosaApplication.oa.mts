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
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaApplication } from "../LdapGosaCoreGosaSamba3/id-oc-gosaApplication.va.mjs";

import { gosaApplicationName } from "../LdapGosaCoreGosaSamba3/gosaApplicationName.oa.mjs";
import { gosaApplicationIcon } from "../LdapGosaCoreGosaSamba3/gosaApplicationIcon.oa.mjs";
import { gosaApplicationFlags } from "../LdapGosaCoreGosaSamba3/gosaApplicationFlags.oa.mjs";
import { gosaApplicationMimeType } from "../LdapGosaCoreGosaSamba3/gosaApplicationMimeType.oa.mjs";
import { gosaApplicationParameter } from "../LdapGosaCoreGosaSamba3/gosaApplicationParameter.oa.mjs";
import { gotoLogonScript } from "../LdapGosaCoreGoto/gotoLogonScript.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaApplicationCategory } from "../LdapGosaCoreGosaSamba3/gosaApplicationCategory.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaApplicationExecute } from "../LdapGosaCoreGosaSamba3/gosaApplicationExecute.oa.mjs";
/**
 * @summary gosaApplication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaApplication OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gosaApplicationExecute }
 *   MAY CONTAIN               { gosaApplicationName
 *                               | gosaApplicationIcon
 *                               | gosaApplicationFlags
 *                               | gosaApplicationMimeType
 *                               | gosaApplicationParameter
 *                               | gotoLogonScript
 *                               | description
 *                               | gosaApplicationCategory }
 *   LDAP-NAME                 {"gosaApplication"}
 *   LDAP-DESC                 "Class for GOsa applications (v2.7)"
 *   ID                        id-oc-gosaApplication }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaApplication: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, gosaApplicationExecute, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gosaApplicationName, gosaApplicationIcon, gosaApplicationFlags, gosaApplicationMimeType, gosaApplicationParameter, gotoLogonScript, description, gosaApplicationCategory, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaApplication" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa applications (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaApplication /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
