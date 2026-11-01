/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_uucpAccount } from "../LdapIspenv/id-oc-uucpAccount.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { uucpHost } from "../LdapIspenv/uucpHost.oa.mjs";
// export { id_oc_uucpAccount } from "../LdapIspenv/id-oc-uucpAccount.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, userPassword, dc, uucpHost, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "uucpAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "All data that is needed for a UUCP link" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_uucpAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
