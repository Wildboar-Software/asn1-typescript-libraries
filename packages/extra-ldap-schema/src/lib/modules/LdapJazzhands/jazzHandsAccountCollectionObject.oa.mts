/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_jazzHandsAccountCollectionObject } from "../LdapJazzhands/id-oc-jazzHandsAccountCollectionObject.va.mjs";
import { jazzHandsAccountCollectionId } from "../LdapJazzhands/jazzHandsAccountCollectionId.oa.mjs";

/**
 * @summary jazzHandsAccountCollectionObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jazzHandsAccountCollectionObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { jazzHandsAccountCollectionId }
 *   LDAP-NAME                 {"jazzHandsAccountCollectionObject"}
 *   LDAP-DESC                 "jazzHands account collection class"
 *   ID                        id-oc-jazzHandsAccountCollectionObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const jazzHandsAccountCollectionObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [jazzHandsAccountCollectionId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["jazzHandsAccountCollectionObject"],
    "&ldapDesc": "jazzHands account collection class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_jazzHandsAccountCollectionObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
