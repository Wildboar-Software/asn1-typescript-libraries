/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_nestedGroup } from "../Ldap60basev2/id-oc-nestedGroup.va.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";

/**
 * @summary nestedGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nestedGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { groupOfNames }
 *   MAY CONTAIN               { memberOf }
 *   LDAP-NAME                 {"nestedGroup"}
 *   LDAP-DESC                 "Group that supports nesting"
 *   ID                        id-oc-nestedGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nestedGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [groupOfNames] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [memberOf] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["nestedGroup"],
    "&ldapDesc": "Group that supports nesting" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nestedGroup /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
