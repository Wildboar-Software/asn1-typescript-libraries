/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { memberOf } from "../MSUser/memberOf.oa.mjs";
import { id_oc_nestedGroup } from "../Ldap60basev2/id-oc-nestedGroup.va.mjs";

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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ groupOfNames, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberOf, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nestedGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Group that supports nesting" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_nestedGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
