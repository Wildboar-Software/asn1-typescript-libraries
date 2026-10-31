/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_postfixUser } from "../LdapPostfix2/id-oc-postfixUser.va.mjs";
import { mailacceptinggeneralid } from "./mailacceptinggeneralid.oa.mjs";
import { maildrop } from "./maildrop.oa.mjs";

/**
 * @summary postfixUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * postfixUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { mailacceptinggeneralid
 *                               | maildrop }
 *   LDAP-NAME                 {"postfixUser"}
 *   LDAP-DESC                 "Postfix mail user class"
 *   ID                        id-oc-postfixUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const postfixUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mailacceptinggeneralid, maildrop] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["postfixUser"],
    "&ldapDesc": "Postfix mail user class" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_postfixUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
