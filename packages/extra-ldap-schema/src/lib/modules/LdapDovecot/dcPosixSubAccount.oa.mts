/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { dcPosixOwnerURL } from "../LdapDovecot/dcPosixOwnerURL.oa.mjs";
// export { dcPosixOwnerURL } from "../LdapDovecot/dcPosixOwnerURL.oa.mjs";
import { id_oc_dcPosixSubAccount } from "../LdapDovecot/id-oc-dcPosixSubAccount.va.mjs";
// export { id_oc_dcPosixSubAccount } from "../LdapDovecot/id-oc-dcPosixSubAccount.va.mjs";


/**
 * @summary dcPosixSubAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcPosixSubAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { dcPosixOwnerURL }
 *   LDAP-NAME                 {"dcPosixSubAccount"}
 *   LDAP-DESC                 "LDAP-URL for retrieving the respective posixAccount of an entry"
 *   ID                        id-oc-dcPosixSubAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcPosixSubAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dcPosixOwnerURL, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dcPosixSubAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "LDAP-URL for retrieving the respective posixAccount of an entry" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dcPosixSubAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
