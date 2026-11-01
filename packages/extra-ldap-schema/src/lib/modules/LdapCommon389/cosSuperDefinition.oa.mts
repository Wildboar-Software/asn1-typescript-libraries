/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ldapSubEntry } from "../LdapSubentry/ldapSubEntry.oa.mjs";
// export { ldapSubEntry } from "../LdapSubentry/ldapSubEntry.oa.mjs";
import { cosAttribute } from "../LdapCommon389/cosAttribute.oa.mjs";
// export { cosAttribute } from "../LdapCommon389/cosAttribute.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_oc_cosSuperDefinition } from "../LdapCommon389/id-oc-cosSuperDefinition.va.mjs";
// export { id_oc_cosSuperDefinition } from "../LdapCommon389/id-oc-cosSuperDefinition.va.mjs";


/**
 * @summary cosSuperDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosSuperDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ldapSubEntry }
 *   MUST CONTAIN              { cosAttribute }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"cosSuperDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosSuperDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosSuperDefinition: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ldapSubEntry, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ cosAttribute, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "cosSuperDefinition" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_cosSuperDefinition /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
