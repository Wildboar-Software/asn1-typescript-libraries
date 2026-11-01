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
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_apple_preset_group } from "../LdapSchema2ldifApple/id-oc-apple-preset-group.va.mjs";

import { memberUid } from "../NIS/memberUid.oa.mjs";
import { gidNumber } from "../NIS/gidNumber.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { apple_group_homeurl } from "../LdapSchema2ldifApple/apple-group-homeurl.oa.mjs";
import { apple_group_homeowner } from "../LdapSchema2ldifApple/apple-group-homeowner.oa.mjs";
import { apple_mcxflags } from "../LdapSchema2ldifApple/apple-mcxflags.oa.mjs";
import { apple_mcxsettings } from "../LdapSchema2ldifApple/apple-mcxsettings.oa.mjs";
import { apple_group_realname } from "../LdapSchema2ldifApple/apple-group-realname.oa.mjs";
import { apple_keyword } from "../LdapSchema2ldifApple/apple-keyword.oa.mjs";
import { apple_group_nestedgroup } from "../LdapSchema2ldifApple/apple-group-nestedgroup.oa.mjs";
import { apple_group_memberguid } from "../LdapSchema2ldifApple/apple-group-memberguid.oa.mjs";
import { ttl } from "../LdapCommon389/ttl.oa.mjs";
/**
 * @summary apple_preset_group
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-preset-group OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { memberUid
 *                               | gidNumber
 *                               | description
 *                               | apple-group-homeurl
 *                               | apple-group-homeowner
 *                               | apple-mcxflags
 *                               | apple-mcxsettings
 *                               | apple-group-realname
 *                               | apple-keyword
 *                               | apple-group-nestedgroup
 *                               | apple-group-memberguid
 *                               | ttl }
 *   LDAP-NAME                 {"apple-preset-group"}
 *   LDAP-DESC                 "preset group"
 *   ID                        id-oc-apple-preset-group }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_preset_group: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberUid, gidNumber, description, apple_group_homeurl, apple_group_homeowner, apple_mcxflags, apple_mcxsettings, apple_group_realname, apple_keyword, apple_group_nestedgroup, apple_group_memberguid, ttl, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-preset-group" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "preset group" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_preset_group /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
