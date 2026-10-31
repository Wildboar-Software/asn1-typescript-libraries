/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { authAuthority } from "../LdapSchema2ldifApple/authAuthority.oa.mjs";
import { id_oc_authAuthorityObject } from "../LdapSchema2ldifApple/id-oc-authAuthorityObject.va.mjs";

/**
 * @summary authAuthorityObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * authAuthorityObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { authAuthority }
 *   LDAP-NAME                 {"authAuthorityObject"}
 *   ID                        id-oc-authAuthorityObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const authAuthorityObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [authAuthority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["authAuthorityObject"],
    "&id": id_oc_authAuthorityObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
