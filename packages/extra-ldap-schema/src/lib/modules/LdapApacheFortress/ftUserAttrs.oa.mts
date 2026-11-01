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
import { ftId } from "../LdapApacheFortress/ftId.oa.mjs";
import { id_oc_ftUserAttrs } from "../LdapApacheFortress/id-oc-ftUserAttrs.va.mjs";

import { ftRC } from "../LdapApacheFortress/ftRC.oa.mjs";
import { ftRA } from "../LdapApacheFortress/ftRA.oa.mjs";
import { ftARC } from "../LdapApacheFortress/ftARC.oa.mjs";
import { ftARA } from "../LdapApacheFortress/ftARA.oa.mjs";
import { ftCstr } from "../LdapApacheFortress/ftCstr.oa.mjs";
import { ftSystem } from "../LdapApacheFortress/ftSystem.oa.mjs";
/**
 * @summary ftUserAttrs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftUserAttrs OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ftId }
 *   MAY CONTAIN               { ftRC
 *                               | ftRA
 *                               | ftARC
 *                               | ftARA
 *                               | ftCstr
 *                               | ftSystem }
 *   LDAP-NAME                 {"ftUserAttrs"}
 *   LDAP-DESC                 "Fortress User Attribute AUX Object Class"
 *   ID                        id-oc-ftUserAttrs }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftUserAttrs: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ftId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ftRC, ftRA, ftARC, ftARA, ftCstr, ftSystem, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ftUserAttrs" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Fortress User Attribute AUX Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftUserAttrs /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
