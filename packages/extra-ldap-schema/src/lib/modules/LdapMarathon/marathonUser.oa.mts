/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_marathonUser } from "../LdapMarathon/id-oc-marathonUser.va.mjs";

/**
 * @summary marathonUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * marathonUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   LDAP-NAME                 {"marathonUser"}
 *   LDAP-DESC                 "marathon User"
 *   ID                        id-oc-marathonUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const marathonUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["marathonUser"],
    "&ldapDesc": "marathon User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_marathonUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
