/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_puppetClient } from "../LdapPuppet/id-oc-puppetClient.va.mjs";
import { puppetClass } from "../LdapPuppet/puppetClass.oa.mjs";
import { parentNode } from "../LdapPuppet/parentNode.oa.mjs";
import { environment } from "../LdapPuppet/environment.oa.mjs";
import { puppetVar } from "../LdapPuppet/puppetVar.oa.mjs";
// export { id_oc_puppetClient } from "../LdapPuppet/id-oc-puppetClient.va.mjs";


/**
 * @summary puppetClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * puppetClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { puppetClass
 *                               | parentNode
 *                               | environment
 *                               | puppetVar }
 *   LDAP-NAME                 {"puppetClient"}
 *   LDAP-DESC                 "Puppet Client objectclass"
 *   ID                        id-oc-puppetClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const puppetClient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ puppetClass, parentNode, environment, puppetVar, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "puppetClient" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Puppet Client objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_puppetClient /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
