/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_intellimirrorGroup } from "../LdapSchema2ldifMicrosoft/id-oc-intellimirrorGroup.va.mjs";

/**
 * @summary intellimirrorGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intellimirrorGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   LDAP-NAME                 {"intellimirrorGroup"}
 *   ID                        id-oc-intellimirrorGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const intellimirrorGroup: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "intellimirrorGroup" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_intellimirrorGroup /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
