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
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { id_oc_gosaAccount } from "../LdapGosaCoreGosaSamba3/id-oc-gosaAccount.va.mjs";

import { sambaLMPassword } from "../SambaV3Schema/sambaLMPassword.oa.mjs";
import { sambaNTPassword } from "../SambaV3Schema/sambaNTPassword.oa.mjs";
import { sambaPwdLastSet } from "../SambaV3Schema/sambaPwdLastSet.oa.mjs";
import { gosaDefaultPrinter } from "../LdapGosaCoreGosaSamba3/gosaDefaultPrinter.oa.mjs";
import { gosaDefaultLanguage } from "../LdapGosaCoreGosaSamba3/gosaDefaultLanguage.oa.mjs";
import { academicTitle } from "../LdapGosaCoreGosaSamba3/academicTitle.oa.mjs";
import { personalTitle } from "../LdapSchema2ldifCosine/personalTitle.oa.mjs";
import { gosaHostACL } from "../LdapGosaCoreGosaSamba3/gosaHostACL.oa.mjs";
import { dateOfBirth } from "../LdapGosaCoreGosaSamba3/dateOfBirth.oa.mjs";
import { sambaBadPasswordCount } from "../SambaV3Schema/sambaBadPasswordCount.oa.mjs";
import { sambaBadPasswordTime } from "../SambaV3Schema/sambaBadPasswordTime.oa.mjs";
import { gender } from "../LdapGosaCoreGosaSamba3/gender.oa.mjs";
import { gotoLastSystemLogin } from "../LdapGosaCoreGosaSamba3/gotoLastSystemLogin.oa.mjs";
import { gotoLastSystem } from "../LdapGosaCoreGosaSamba3/gotoLastSystem.oa.mjs";
import { gosaLoginRestriction } from "../LdapGosaCoreGosaSamba3/gosaLoginRestriction.oa.mjs";
/**
 * @summary gosaAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid }
 *   MAY CONTAIN               { sambaLMPassword
 *                               | sambaNTPassword
 *                               | sambaPwdLastSet
 *                               | gosaDefaultPrinter
 *                               | gosaDefaultLanguage
 *                               | academicTitle
 *                               | personalTitle
 *                               | gosaHostACL
 *                               | dateOfBirth
 *                               | sambaBadPasswordCount
 *                               | sambaBadPasswordTime
 *                               | gender
 *                               | gotoLastSystemLogin
 *                               | gotoLastSystem
 *                               | gosaLoginRestriction }
 *   LDAP-NAME                 {"gosaAccount"}
 *   LDAP-DESC                 "Class for GOsa Accounts (v2.7)"
 *   ID                        id-oc-gosaAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sambaLMPassword, sambaNTPassword, sambaPwdLastSet, gosaDefaultPrinter, gosaDefaultLanguage, academicTitle, personalTitle, gosaHostACL, dateOfBirth, sambaBadPasswordCount, sambaBadPasswordTime, gender, gotoLastSystemLogin, gotoLastSystem, gosaLoginRestriction, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gosaAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class for GOsa Accounts (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
