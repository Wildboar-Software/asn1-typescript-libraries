/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_kopano_user } from "../LdapKopano/id-oc-kopano-user.va.mjs";
import { kopanoQuotaOverride } from "../LdapKopano/kopanoQuotaOverride.oa.mjs";
import { kopanoQuotaWarn } from "../LdapKopano/kopanoQuotaWarn.oa.mjs";
import { kopanoQuotaSoft } from "../LdapKopano/kopanoQuotaSoft.oa.mjs";
import { kopanoSendAsPrivilege } from "../LdapKopano/kopanoSendAsPrivilege.oa.mjs";
import { kopanoQuotaHard } from "../LdapKopano/kopanoQuotaHard.oa.mjs";
import { kopanoAdmin } from "../LdapKopano/kopanoAdmin.oa.mjs";
import { kopanoSharedStoreOnly } from "../LdapKopano/kopanoSharedStoreOnly.oa.mjs";
import { kopanoResourceType } from "../LdapKopano/kopanoResourceType.oa.mjs";
import { kopanoResourceCapacity } from "../LdapKopano/kopanoResourceCapacity.oa.mjs";
import { kopanoAccount } from "../LdapKopano/kopanoAccount.oa.mjs";
import { kopanoHidden } from "../LdapKopano/kopanoHidden.oa.mjs";
import { kopanoAliases } from "../LdapKopano/kopanoAliases.oa.mjs";
import { kopanoUserServer } from "../LdapKopano/kopanoUserServer.oa.mjs";
import { kopanoEnabledFeatures } from "../LdapKopano/kopanoEnabledFeatures.oa.mjs";
import { kopanoDisabledFeatures } from "../LdapKopano/kopanoDisabledFeatures.oa.mjs";
import { kopanoUserArchiveServers } from "../LdapKopano/kopanoUserArchiveServers.oa.mjs";
import { kopanoUserArchiveCouplings } from "../LdapKopano/kopanoUserArchiveCouplings.oa.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";


/**
 * @summary kopano_user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kopano-user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { kopanoQuotaOverride
 *                               | kopanoQuotaWarn
 *                               | kopanoQuotaSoft
 *                               | kopanoSendAsPrivilege
 *                               | kopanoQuotaHard
 *                               | kopanoAdmin
 *                               | kopanoSharedStoreOnly
 *                               | kopanoResourceType
 *                               | kopanoResourceCapacity
 *                               | kopanoAccount
 *                               | kopanoHidden
 *                               | kopanoAliases
 *                               | kopanoUserServer
 *                               | kopanoEnabledFeatures
 *                               | kopanoDisabledFeatures
 *                               | kopanoUserArchiveServers
 *                               | kopanoUserArchiveCouplings
 *                               | uidNumber }
 *   LDAP-NAME                 {"kopano-user"}
 *   LDAP-DESC                 "KOPANO: an user of Kopano"
 *   ID                        id-oc-kopano-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const kopano_user: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ kopanoQuotaOverride, kopanoQuotaWarn, kopanoQuotaSoft, kopanoSendAsPrivilege, kopanoQuotaHard, kopanoAdmin, kopanoSharedStoreOnly, kopanoResourceType, kopanoResourceCapacity, kopanoAccount, kopanoHidden, kopanoAliases, kopanoUserServer, kopanoEnabledFeatures, kopanoDisabledFeatures, kopanoUserArchiveServers, kopanoUserArchiveCouplings, uidNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "kopano-user" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "KOPANO: an user of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_user /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

