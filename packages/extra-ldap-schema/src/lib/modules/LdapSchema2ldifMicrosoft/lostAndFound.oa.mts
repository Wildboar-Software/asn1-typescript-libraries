/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_lostAndFound } from "../LdapSchema2ldifMicrosoft/id-oc-lostAndFound.va.mjs";
import { moveTreeState } from "../MSUser/moveTreeState.oa.mjs";

/**
 * @summary lostAndFound
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lostAndFound OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { moveTreeState }
 *   LDAP-NAME                 {"lostAndFound"}
 *   ID                        id-oc-lostAndFound }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const lostAndFound: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [moveTreeState] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["lostAndFound"],
    "&id": id_oc_lostAndFound /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
