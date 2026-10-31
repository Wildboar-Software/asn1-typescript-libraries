/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_freenitMailingList } from "../LdapMailinglist/id-oc-freenitMailingList.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { archivePrincipalId } from "./archivePrincipalId.oa.mjs";
import { createdAt } from "./createdAt.oa.mjs";
import { inboxPrincipalId } from "./inboxPrincipalId.oa.mjs";
import { mailinglistAddress } from "./mailinglistAddress.oa.mjs";
import { mailinglistArchiveAddress } from "./mailinglistArchiveAddress.oa.mjs";
import { mailinglistArchiveEnabled } from "./mailinglistArchiveEnabled.oa.mjs";
import { mailinglistDistributionAddress } from "./mailinglistDistributionAddress.oa.mjs";
import { mailinglistModerationEnabled } from "./mailinglistModerationEnabled.oa.mjs";
import { mailinglistPublic } from "./mailinglistPublic.oa.mjs";
import { mlidNumber } from "./mlidNumber.oa.mjs";
import { principalId } from "./principalId.oa.mjs";
import { updatedAt } from "./updatedAt.oa.mjs";

/**
 * @summary freenitMailingList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * freenitMailingList OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | mlidNumber
 *                               | mailinglistAddress
 *                               | mailinglistDistributionAddress
 *                               | mailinglistArchiveAddress }
 *   MAY CONTAIN               { description
 *                               | mailinglistPublic
 *                               | mailinglistArchiveEnabled
 *                               | mailinglistModerationEnabled
 *                               | principalId
 *                               | inboxPrincipalId
 *                               | archivePrincipalId
 *                               | createdAt
 *                               | updatedAt }
 *   LDAP-NAME                 {"freenitMailingList"}
 *   LDAP-DESC                 "Freenit mailing list entry"
 *   ID                        id-oc-freenitMailingList }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const freenitMailingList: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, mlidNumber, mailinglistAddress, mailinglistDistributionAddress, mailinglistArchiveAddress] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, mailinglistPublic, mailinglistArchiveEnabled, mailinglistModerationEnabled, principalId, inboxPrincipalId, archivePrincipalId, createdAt, updatedAt] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["freenitMailingList"],
    "&ldapDesc": "Freenit mailing list entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_freenitMailingList /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
