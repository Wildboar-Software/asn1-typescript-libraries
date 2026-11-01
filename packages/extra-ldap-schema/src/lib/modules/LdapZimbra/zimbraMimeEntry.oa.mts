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
import { id_oc_zimbraMimeEntry } from "../LdapZimbra/id-oc-zimbraMimeEntry.va.mjs";
// export { id_oc_zimbraMimeEntry } from "../LdapZimbra/id-oc-zimbraMimeEntry.va.mjs";


import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraMimeFileExtension } from "../LdapZimbra/zimbraMimeFileExtension.oa.mjs";
import { zimbraMimeHandlerClass } from "../LdapZimbra/zimbraMimeHandlerClass.oa.mjs";
import { zimbraMimeHandlerExtension } from "../LdapZimbra/zimbraMimeHandlerExtension.oa.mjs";
import { zimbraMimePriority } from "../LdapZimbra/zimbraMimePriority.oa.mjs";
import { zimbraMimeType } from "../LdapZimbra/zimbraMimeType.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraMimeIndexingEnabled } from "../LdapZimbra/zimbraMimeIndexingEnabled.oa.mjs";
/**
 * @summary zimbraMimeEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMimeEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraMimeIndexingEnabled }
 *   MAY CONTAIN               { description
 *                               | zimbraMimeFileExtension
 *                               | zimbraMimeHandlerClass
 *                               | zimbraMimeHandlerExtension
 *                               | zimbraMimePriority
 *                               | zimbraMimeType }
 *   LDAP-NAME                 {"zimbraMimeEntry"}
 *   LDAP-DESC                 "MIME type info"
 *   ID                        id-oc-zimbraMimeEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraMimeEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraMimeIndexingEnabled, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraMimeFileExtension, zimbraMimeHandlerClass, zimbraMimeHandlerExtension, zimbraMimePriority, zimbraMimeType, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraMimeEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "MIME type info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraMimeEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
