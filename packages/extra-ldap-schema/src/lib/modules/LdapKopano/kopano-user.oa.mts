/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_kopano_user } from "../LdapKopano/id-oc-kopano-user.va.mjs";
import { uidNumber } from "../NIS/uidNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { kopanoAccount } from "./kopanoAccount.oa.mjs";
import { kopanoAdmin } from "./kopanoAdmin.oa.mjs";
import { kopanoAliases } from "./kopanoAliases.oa.mjs";
import { kopanoDisabledFeatures } from "./kopanoDisabledFeatures.oa.mjs";
import { kopanoEnabledFeatures } from "./kopanoEnabledFeatures.oa.mjs";
import { kopanoHidden } from "./kopanoHidden.oa.mjs";
import { kopanoQuotaHard } from "./kopanoQuotaHard.oa.mjs";
import { kopanoQuotaOverride } from "./kopanoQuotaOverride.oa.mjs";
import { kopanoQuotaSoft } from "./kopanoQuotaSoft.oa.mjs";
import { kopanoQuotaWarn } from "./kopanoQuotaWarn.oa.mjs";
import { kopanoResourceCapacity } from "./kopanoResourceCapacity.oa.mjs";
import { kopanoResourceType } from "./kopanoResourceType.oa.mjs";
import { kopanoSendAsPrivilege } from "./kopanoSendAsPrivilege.oa.mjs";
import { kopanoSharedStoreOnly } from "./kopanoSharedStoreOnly.oa.mjs";
import { kopanoUserArchiveCouplings } from "./kopanoUserArchiveCouplings.oa.mjs";
import { kopanoUserArchiveServers } from "./kopanoUserArchiveServers.oa.mjs";
import { kopanoUserServer } from "./kopanoUserServer.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [kopanoQuotaOverride, kopanoQuotaWarn, kopanoQuotaSoft, kopanoSendAsPrivilege, kopanoQuotaHard, kopanoAdmin, kopanoSharedStoreOnly, kopanoResourceType, kopanoResourceCapacity, kopanoAccount, kopanoHidden, kopanoAliases, kopanoUserServer, kopanoEnabledFeatures, kopanoDisabledFeatures, kopanoUserArchiveServers, kopanoUserArchiveCouplings, uidNumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["kopano-user"],
    "&ldapDesc": "KOPANO: an user of Kopano" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_kopano_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
