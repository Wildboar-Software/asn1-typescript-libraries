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
import { id_oc_zimbraZimletEntry } from "../LdapZimbra/id-oc-zimbraZimletEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraZimletEnabled } from "../LdapZimbra/zimbraZimletEnabled.oa.mjs";
import { zimbraZimletVersion } from "../LdapZimbra/zimbraZimletVersion.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminExtDisableUIUndeploy } from "../LdapZimbra/zimbraAdminExtDisableUIUndeploy.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraZimletDescription } from "../LdapZimbra/zimbraZimletDescription.oa.mjs";
import { zimbraZimletHandlerClass } from "../LdapZimbra/zimbraZimletHandlerClass.oa.mjs";
import { zimbraZimletHandlerConfig } from "../LdapZimbra/zimbraZimletHandlerConfig.oa.mjs";
import { zimbraZimletIndexingEnabled } from "../LdapZimbra/zimbraZimletIndexingEnabled.oa.mjs";
import { zimbraZimletIsExtension } from "../LdapZimbra/zimbraZimletIsExtension.oa.mjs";
import { zimbraZimletKeyword } from "../LdapZimbra/zimbraZimletKeyword.oa.mjs";
import { zimbraZimletPriority } from "../LdapZimbra/zimbraZimletPriority.oa.mjs";
import { zimbraZimletScript } from "../LdapZimbra/zimbraZimletScript.oa.mjs";
import { zimbraZimletServerIndexRegex } from "../LdapZimbra/zimbraZimletServerIndexRegex.oa.mjs";
import { zimbraZimletTarget } from "../LdapZimbra/zimbraZimletTarget.oa.mjs";
// export { id_oc_zimbraZimletEntry } from "../LdapZimbra/id-oc-zimbraZimletEntry.va.mjs";


/**
 * @summary zimbraZimletEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraZimletEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraZimletEnabled
 *                               | zimbraZimletVersion }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminExtDisableUIUndeploy
 *                               | zimbraCreateTimestamp
 *                               | zimbraZimletDescription
 *                               | zimbraZimletHandlerClass
 *                               | zimbraZimletHandlerConfig
 *                               | zimbraZimletIndexingEnabled
 *                               | zimbraZimletIsExtension
 *                               | zimbraZimletKeyword
 *                               | zimbraZimletPriority
 *                               | zimbraZimletScript
 *                               | zimbraZimletServerIndexRegex
 *                               | zimbraZimletTarget }
 *   LDAP-NAME                 {"zimbraZimletEntry"}
 *   LDAP-DESC                 "Zimlet info"
 *   ID                        id-oc-zimbraZimletEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraZimletEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraZimletEnabled, zimbraZimletVersion, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraAdminExtDisableUIUndeploy, zimbraCreateTimestamp, zimbraZimletDescription, zimbraZimletHandlerClass, zimbraZimletHandlerConfig, zimbraZimletIndexingEnabled, zimbraZimletIsExtension, zimbraZimletKeyword, zimbraZimletPriority, zimbraZimletScript, zimbraZimletServerIndexRegex, zimbraZimletTarget, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraZimletEntry" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Zimlet info" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraZimletEntry /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
