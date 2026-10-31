/* eslint-disable */
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuSAMLconfig } from "../LdapOx/id-oc-gluuSAMLconfig.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { federationRules } from "./federationRules.oa.mjs";
import { gluuContainerFederation } from "./gluuContainerFederation.oa.mjs";
import { gluuEntityId } from "./gluuEntityId.oa.mjs";
import { gluuEntityType } from "./gluuEntityType.oa.mjs";
import { gluuIsFederation } from "./gluuIsFederation.oa.mjs";
import { gluuProfileConfiguration } from "./gluuProfileConfiguration.oa.mjs";
import { gluuReleasedAttribute } from "./gluuReleasedAttribute.oa.mjs";
import { gluuRulesAccepted } from "./gluuRulesAccepted.oa.mjs";
import { gluuSAMLMetaDataFilter } from "./gluuSAMLMetaDataFilter.oa.mjs";
import { gluuSAMLTrustEngine } from "./gluuSAMLTrustEngine.oa.mjs";
import { gluuSAMLmaxRefreshDelay } from "./gluuSAMLmaxRefreshDelay.oa.mjs";
import { gluuSAMLspMetaDataFN } from "./gluuSAMLspMetaDataFN.oa.mjs";
import { gluuSAMLspMetaDataSourceType } from "./gluuSAMLspMetaDataSourceType.oa.mjs";
import { gluuSAMLspMetaDataURL } from "./gluuSAMLspMetaDataURL.oa.mjs";
import { gluuSpecificRelyingPartyConfig } from "./gluuSpecificRelyingPartyConfig.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { gluuTrustContact } from "./gluuTrustContact.oa.mjs";
import { gluuTrustDeconstruction } from "./gluuTrustDeconstruction.oa.mjs";
import { gluuValidationLog } from "./gluuValidationLog.oa.mjs";
import { gluuValidationStatus } from "./gluuValidationStatus.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { oxAuthPostLogoutRedirectURI } from "./oxAuthPostLogoutRedirectURI.oa.mjs";
import { researchAndScholarshipEnabled } from "./researchAndScholarshipEnabled.oa.mjs";
import { url } from "./url.oa.mjs";

/**
 * @summary gluuSAMLconfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuSAMLconfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { description
 *                               | displayName
 *                               | federationRules
 *                               | gluuContainerFederation
 *                               | gluuEntityId
 *                               | gluuIsFederation
 *                               | gluuProfileConfiguration
 *                               | gluuReleasedAttribute
 *                               | gluuRulesAccepted
 *                               | gluuSAMLMetaDataFilter
 *                               | gluuSAMLTrustEngine
 *                               | gluuSAMLmaxRefreshDelay
 *                               | gluuSAMLspMetaDataFN
 *                               | gluuSAMLspMetaDataSourceType
 *                               | gluuSAMLspMetaDataURL
 *                               | gluuSpecificRelyingPartyConfig
 *                               | gluuStatus
 *                               | gluuTrustContact
 *                               | gluuTrustDeconstruction
 *                               | gluuValidationLog
 *                               | gluuValidationStatus
 *                               | iname
 *                               | inum
 *                               | organizationName
 *                               | oxAuthPostLogoutRedirectURI
 *                               | url
 *                               | researchAndScholarshipEnabled
 *                               | gluuEntityType }
 *   LDAP-NAME                 {"gluuSAMLconfig"}
 *   ID                        id-oc-gluuSAMLconfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuSAMLconfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, displayName, federationRules, gluuContainerFederation, gluuEntityId, gluuIsFederation, gluuProfileConfiguration, gluuReleasedAttribute, gluuRulesAccepted, gluuSAMLMetaDataFilter, gluuSAMLTrustEngine, gluuSAMLmaxRefreshDelay, gluuSAMLspMetaDataFN, gluuSAMLspMetaDataSourceType, gluuSAMLspMetaDataURL, gluuSpecificRelyingPartyConfig, gluuStatus, gluuTrustContact, gluuTrustDeconstruction, gluuValidationLog, gluuValidationStatus, iname, inum, organizationName, oxAuthPostLogoutRedirectURI, url, researchAndScholarshipEnabled, gluuEntityType] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuSAMLconfig"],
    "&id": id_oc_gluuSAMLconfig /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
