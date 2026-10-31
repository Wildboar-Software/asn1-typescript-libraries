/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunservicecomponent } from "../Ldapmigration70sunSchema2/id-oc-sunservicecomponent.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { sunkeyvalue } from "./sunkeyvalue.oa.mjs";
import { sunserviceid } from "./sunserviceid.oa.mjs";
import { sunsmspriority } from "./sunsmspriority.oa.mjs";
import { sunxmlkeyvalue } from "./sunxmlkeyvalue.oa.mjs";

/**
 * @summary sunservicecomponent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunservicecomponent OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { sunserviceid
 *                               | sunsmspriority
 *                               | sunkeyvalue
 *                               | sunxmlkeyvalue
 *                               | description }
 *   LDAP-NAME                 {"sunservicecomponent"}
 *   LDAP-DESC                 "Sub-components of the service"
 *   ID                        id-oc-sunservicecomponent }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunservicecomponent: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunserviceid, sunsmspriority, sunkeyvalue, sunxmlkeyvalue, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunservicecomponent"],
    "&ldapDesc": "Sub-components of the service" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunservicecomponent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
