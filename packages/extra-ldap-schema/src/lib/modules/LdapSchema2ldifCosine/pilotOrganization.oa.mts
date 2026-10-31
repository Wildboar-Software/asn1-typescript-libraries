/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { buildingName } from "../LdapSchema2ldifCosine/buildingName.oa.mjs";
import { id_oc_pilotOrganization } from "../LdapSchema2ldifCosine/id-oc-pilotOrganization.va.mjs";
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";

/**
 * @summary pilotOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organization
 *                               | organizationalUnit }
 *   MAY CONTAIN               { buildingName }
 *   LDAP-NAME                 {"pilotOrganization"}
 *   ID                        id-oc-pilotOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const pilotOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organization, organizationalUnit] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [buildingName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pilotOrganization"],
    "&id": id_oc_pilotOrganization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
