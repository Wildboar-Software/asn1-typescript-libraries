/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ftSSDSet } from "../LdapApacheFortress/id-oc-ftSSDSet.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalRole } from "../SelectedObjectClasses/organizationalRole.oa.mjs";
import { ftId } from "./ftId.oa.mjs";
import { ftRoles } from "./ftRoles.oa.mjs";
import { ftSetCardinality } from "./ftSetCardinality.oa.mjs";
import { ftSetName } from "./ftSetName.oa.mjs";

/**
 * @summary ftSSDSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ftSSDSet OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalRole }
 *   MUST CONTAIN              { ftId
 *                               | ftSetName
 *                               | ftSetCardinality }
 *   MAY CONTAIN               { ftRoles
 *                               | description }
 *   LDAP-NAME                 {"ftSSDSet"}
 *   LDAP-DESC                 "Fortress Role Static Separation of Duty Set Structural Object Class"
 *   ID                        id-oc-ftSSDSet }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ftSSDSet: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalRole] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ftId, ftSetName, ftSetCardinality] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ftRoles, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ftSSDSet"],
    "&ldapDesc": "Fortress Role Static Separation of Duty Set Structural Object Class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ftSSDSet /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
