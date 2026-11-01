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
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_kopano_company } from "../LdapKopano/id-oc-kopano-company.va.mjs";

import { kopanoAccount } from "../LdapKopano/kopanoAccount.oa.mjs";
import { kopanoHidden } from "../LdapKopano/kopanoHidden.oa.mjs";
import { kopanoViewPrivilege } from "../LdapKopano/kopanoViewPrivilege.oa.mjs";
import { kopanoAdminPrivilege } from "../LdapKopano/kopanoAdminPrivilege.oa.mjs";
import { kopanoSystemAdmin } from "../LdapKopano/kopanoSystemAdmin.oa.mjs";
import { kopanoQuotaOverride } from "../LdapKopano/kopanoQuotaOverride.oa.mjs";
import { kopanoQuotaWarn } from "../LdapKopano/kopanoQuotaWarn.oa.mjs";
import { kopanoUserDefaultQuotaOverride } from "../LdapKopano/kopanoUserDefaultQuotaOverride.oa.mjs";
import { kopanoUserDefaultQuotaWarn } from "../LdapKopano/kopanoUserDefaultQuotaWarn.oa.mjs";
import { kopanoUserDefaultQuotaSoft } from "../LdapKopano/kopanoUserDefaultQuotaSoft.oa.mjs";
import { kopanoUserDefaultQuotaHard } from "../LdapKopano/kopanoUserDefaultQuotaHard.oa.mjs";
import { kopanoQuotaUserWarningRecipients } from "../LdapKopano/kopanoQuotaUserWarningRecipients.oa.mjs";
import { kopanoQuotaCompanyWarningRecipients } from "../LdapKopano/kopanoQuotaCompanyWarningRecipients.oa.mjs";
import { kopanoCompanyServer } from "../LdapKopano/kopanoCompanyServer.oa.mjs";
/**
 * @summary kopano_company
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-company OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoViewPrivilege
 *                               | kopanoAdminPrivilege
 *                               | kopanoSystemAdmin
 *                               | kopanoQuotaOverride
 *                               | kopanoQuotaWarn
 *                               | kopanoUserDefaultQuotaOverride
 *                               | kopanoUserDefaultQuotaWarn
 *                               | kopanoUserDefaultQuotaSoft
 *                               | kopanoUserDefaultQuotaHard
 *                               | kopanoQuotaUserWarningRecipients
 *                               | kopanoQuotaCompanyWarningRecipients
 *                               | kopanoCompanyServer }
 *   LDAP-NAME                 {"kopano-company"}
 *   LDAP-DESC                 "KOPANO: a company of Kopano"
 *   ID                        id-oc-kopano-company }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_company: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ kopanoAccount, kopanoHidden, kopanoViewPrivilege, kopanoAdminPrivilege, kopanoSystemAdmin, kopanoQuotaOverride, kopanoQuotaWarn, kopanoUserDefaultQuotaOverride, kopanoUserDefaultQuotaWarn, kopanoUserDefaultQuotaSoft, kopanoUserDefaultQuotaHard, kopanoQuotaUserWarningRecipients, kopanoQuotaCompanyWarningRecipients, kopanoCompanyServer, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kopano-company" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KOPANO: a company of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_company /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
