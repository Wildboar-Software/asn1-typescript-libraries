/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { evolutionTasksURI } from "../LdapEvoldap/evolutionTasksURI.oa.mjs";
// export { evolutionTasksURI } from "../LdapEvoldap/evolutionTasksURI.oa.mjs";
import { id_oc_evolutionTasksSource } from "../LdapEvoldap/id-oc-evolutionTasksSource.va.mjs";
// export { id_oc_evolutionTasksSource } from "../LdapEvoldap/id-oc-evolutionTasksSource.va.mjs";


/**
 * @summary evolutionTasksSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * evolutionTasksSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { evolutionTasksURI }
 *   LDAP-NAME                 {"evolutionTasksSource"}
 *   LDAP-DESC                 "Evolution tasks source"
 *   ID                        id-oc-evolutionTasksSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const evolutionTasksSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ evolutionTasksURI, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "evolutionTasksSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Evolution tasks source" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_evolutionTasksSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
