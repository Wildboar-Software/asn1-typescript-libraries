/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_uucpAccount } from "../LdapIspenv/id-oc-uucpAccount.va.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uucpHost } from "./uucpHost.oa.mjs";

/**
 * @summary uucpAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uucpAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | userPassword
 *                               | dc
 *                               | uucpHost }
 *   LDAP-NAME                 {"uucpAccount"}
 *   LDAP-DESC                 "All data that is needed for a UUCP link"
 *   ID                        id-oc-uucpAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const uucpAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [uid, userPassword, dc, uucpHost] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["uucpAccount"],
    "&ldapDesc": "All data that is needed for a UUCP link" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_uucpAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
