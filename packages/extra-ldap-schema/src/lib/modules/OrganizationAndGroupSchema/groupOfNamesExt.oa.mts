/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_groupOfNamesExt } from "../OrganizationAndGroupSchema/id-oc-groupOfNamesExt.va.mjs";
import { groupOfNames } from "../SelectedObjectClasses/groupOfNames.oa.mjs";
import { ExtOrganizationOrGroupAttributes } from "./ExtOrganizationOrGroupAttributes.osa.mjs";

/**
 * @summary groupOfNamesExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupOfNamesExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {groupOfNames}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationOrGroupAttributes}
 *     LDAP-NAME           {"groupOfNamesExt"}
 *     LDAP-DESC           "A group of names"
 *     ID                  id-oc-groupOfNamesExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupOfNamesExt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [groupOfNames] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [...ExtOrganizationOrGroupAttributes] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["groupOfNamesExt"],
    "&ldapDesc": "A group of names" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_groupOfNamesExt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
