/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_novaUser } from "../LdapNovasun/id-oc-novaUser.va.mjs";
import { accessKey } from "./accessKey.oa.mjs";
import { isNovaAdmin } from "./isNovaAdmin.oa.mjs";
import { secretKey } from "./secretKey.oa.mjs";

/**
 * @summary novaUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * novaUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { accessKey
 *                               | secretKey
 *                               | isNovaAdmin }
 *   LDAP-NAME                 {"novaUser"}
 *   LDAP-DESC                 "access and secret keys"
 *   ID                        id-oc-novaUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const novaUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [accessKey, secretKey, isNovaAdmin] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["novaUser"],
    "&ldapDesc": "access and secret keys" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_novaUser /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
