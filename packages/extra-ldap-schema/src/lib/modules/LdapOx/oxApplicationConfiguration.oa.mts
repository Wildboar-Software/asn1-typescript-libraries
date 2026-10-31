/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_oxApplicationConfiguration } from "../LdapOx/id-oc-oxApplicationConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { oxConfApplication } from "./oxConfApplication.oa.mjs";
import { oxRevision } from "./oxRevision.oa.mjs";

/**
 * @summary oxApplicationConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxApplicationConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | oxConfApplication
 *                               | oxRevision }
 *   LDAP-NAME                 {"oxApplicationConfiguration"}
 *   ID                        id-oc-oxApplicationConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxApplicationConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName, oxConfApplication, oxRevision] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxApplicationConfiguration"],
    "&id": id_oc_oxApplicationConfiguration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
