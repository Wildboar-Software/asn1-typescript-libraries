/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_company } from "../LdapKopano/id-oc-kopano-company.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoAdminPrivilege } from "./kopanoAdminPrivilege.oa.mjs";
import { kopanoCompanyServer } from "./kopanoCompanyServer.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";
import { kopanoQuotaCompanyWarningRecipients } from "./kopanoQuotaCompanyWarningRecipients.oa.mjs";
import { kopanoQuotaOverride } from "./kopanoQuotaOverride.oa.mjs";
import { kopanoQuotaUserWarningRecipients } from "./kopanoQuotaUserWarningRecipients.oa.mjs";
import { kopanoQuotaWarn } from "./kopanoQuotaWarn.oa.mjs";
import { kopanoSystemAdmin } from "./kopanoSystemAdmin.oa.mjs";
import { kopanoUserDefaultQuotaHard } from "./kopanoUserDefaultQuotaHard.oa.mjs";
import { kopanoUserDefaultQuotaOverride } from "./kopanoUserDefaultQuotaOverride.oa.mjs";
import { kopanoUserDefaultQuotaSoft } from "./kopanoUserDefaultQuotaSoft.oa.mjs";
import { kopanoUserDefaultQuotaWarn } from "./kopanoUserDefaultQuotaWarn.oa.mjs";
import { kopanoViewPrivilege } from "./kopanoViewPrivilege.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoAccount, kopanoHidden, kopanoViewPrivilege, kopanoAdminPrivilege, kopanoSystemAdmin, kopanoQuotaOverride, kopanoQuotaWarn, kopanoUserDefaultQuotaOverride, kopanoUserDefaultQuotaWarn, kopanoUserDefaultQuotaSoft, kopanoUserDefaultQuotaHard, kopanoQuotaUserWarningRecipients, kopanoQuotaCompanyWarningRecipients, kopanoCompanyServer] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-company"],
    "&ldapDesc": "KOPANO: a company of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_company /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
