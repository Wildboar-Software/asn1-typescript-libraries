/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { nestedGroup } from "../Ldap60basev2/nestedGroup.oa.mjs";
import { memberManager } from "../Ldap60basev2/memberManager.oa.mjs";
import { id_oc_ipaUserGroup } from "../Ldap60basev2/id-oc-ipaUserGroup.va.mjs";

/**
 * @summary ipaUserGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaUserGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { nestedGroup }
 *   MAY CONTAIN               { memberManager }
 *   LDAP-NAME                 {"ipaUserGroup"}
 *   LDAP-DESC                 "IPA user group object class"
 *   ID                        id-oc-ipaUserGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaUserGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ nestedGroup, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ memberManager, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipaUserGroup" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "IPA user group object class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaUserGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
