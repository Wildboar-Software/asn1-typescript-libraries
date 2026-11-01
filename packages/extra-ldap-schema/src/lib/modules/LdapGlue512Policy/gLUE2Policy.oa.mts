/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { gLUE2PolicyUserDomainForeignKey } from "../LdapGlue512Policy/gLUE2PolicyUserDomainForeignKey.oa.mjs";
// export { gLUE2PolicyUserDomainForeignKey } from "../LdapGlue512Policy/gLUE2PolicyUserDomainForeignKey.oa.mjs";
import { id_oc_gLUE2Policy } from "../LdapGlue512Policy/id-oc-gLUE2Policy.va.mjs";
import { gLUE2PolicyID } from "../LdapGlue512Policy/gLUE2PolicyID.oa.mjs";
import { gLUE2PolicyScheme } from "../LdapGlue512Policy/gLUE2PolicyScheme.oa.mjs";
import { gLUE2PolicyRule } from "../LdapGlue512Policy/gLUE2PolicyRule.oa.mjs";
// export { id_oc_gLUE2Policy } from "../LdapGlue512Policy/id-oc-gLUE2Policy.va.mjs";


/**
 * @summary gLUE2Policy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Policy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2PolicyID
 *                               | gLUE2PolicyScheme
 *                               | gLUE2PolicyRule }
 *   MAY CONTAIN               { gLUE2PolicyUserDomainForeignKey }
 *   LDAP-NAME                 {"GLUE2Policy"}
 *   LDAP-DESC                 "A policy"
 *   ID                        id-oc-gLUE2Policy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Policy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2PolicyID, gLUE2PolicyScheme, gLUE2PolicyRule, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2PolicyUserDomainForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Policy" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A policy" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Policy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
