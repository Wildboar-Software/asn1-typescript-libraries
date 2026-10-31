/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxTrustConfiguration } from "../LdapOx/id-oc-oxTrustConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxRevision } from "./oxRevision.oa.mjs";
import { oxTrustConfApplication } from "./oxTrustConfApplication.oa.mjs";
import { oxTrustConfAttributeResolver } from "./oxTrustConfAttributeResolver.oa.mjs";
import { oxTrustConfCacheRefresh } from "./oxTrustConfCacheRefresh.oa.mjs";
import { oxTrustConfImportPerson } from "./oxTrustConfImportPerson.oa.mjs";

/**
 * @summary oxTrustConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxTrustConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxTrustConfApplication
 *                               | oxTrustConfCacheRefresh
 *                               | oxRevision
 *                               | oxTrustConfImportPerson
 *                               | oxTrustConfAttributeResolver }
 *   LDAP-NAME                 {"oxTrustConfiguration"}
 *   ID                        id-oc-oxTrustConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxTrustConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName, oxTrustConfApplication, oxTrustConfCacheRefresh, oxRevision, oxTrustConfImportPerson, oxTrustConfAttributeResolver] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxTrustConfiguration"],
    "&id": id_oc_oxTrustConfiguration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
