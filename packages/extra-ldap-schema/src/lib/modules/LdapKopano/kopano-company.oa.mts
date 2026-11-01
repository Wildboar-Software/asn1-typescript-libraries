/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

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
