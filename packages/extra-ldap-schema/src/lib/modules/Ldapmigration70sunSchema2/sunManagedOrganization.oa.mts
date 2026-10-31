/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { inetDomainStatus } from "../Ldapmigration20subscriber/inetDomainStatus.oa.mjs";
import { id_oc_sunManagedOrganization } from "../Ldapmigration70sunSchema2/id-oc-sunManagedOrganization.va.mjs";
import { associatedDomain } from "../MIXERAddressMapping/associatedDomain.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { sunAdditionalTemplates } from "./sunAdditionalTemplates.oa.mjs";
import { sunOverrideTemplates } from "./sunOverrideTemplates.oa.mjs";
import { sunPreferredDomain } from "./sunPreferredDomain.oa.mjs";
import { sunPreferredOrganization } from "./sunPreferredOrganization.oa.mjs";
import { sunRegisteredServiceName } from "./sunRegisteredServiceName.oa.mjs";

/**
 * @summary sunManagedOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunManagedOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { inetDomainStatus
 *                               | sunPreferredDomain
 *                               | associatedDomain
 *                               | sunPreferredOrganization
 *                               | sunAdditionalTemplates
 *                               | sunOverrideTemplates
 *                               | sunRegisteredServiceName
 *                               | organizationName }
 *   LDAP-NAME                 {"sunManagedOrganization"}
 *   LDAP-DESC                 "Auxiliary class which must be present in an organization entry"
 *   ID                        id-oc-sunManagedOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunManagedOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inetDomainStatus, sunPreferredDomain, associatedDomain, sunPreferredOrganization, sunAdditionalTemplates, sunOverrideTemplates, sunRegisteredServiceName, organizationName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunManagedOrganization"],
    "&ldapDesc": "Auxiliary class which must be present in an organization entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunManagedOrganization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
