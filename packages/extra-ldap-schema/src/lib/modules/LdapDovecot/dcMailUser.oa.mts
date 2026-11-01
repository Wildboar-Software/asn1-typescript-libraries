/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { dcMailMessageStore } from "../LdapDovecot/dcMailMessageStore.oa.mjs";
// export { dcMailMessageStore } from "../LdapDovecot/dcMailMessageStore.oa.mjs";
import { id_oc_dcMailUser } from "../LdapDovecot/id-oc-dcMailUser.va.mjs";
// export { id_oc_dcMailUser } from "../LdapDovecot/id-oc-dcMailUser.va.mjs";


/**
 * @summary dcMailUser
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcMailUser OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { dcMailMessageStore }
 *   LDAP-NAME                 {"dcMailUser"}
 *   LDAP-DESC                 "Dovecot-LDAP User"
 *   ID                        id-oc-dcMailUser }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dcMailUser: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dcMailMessageStore, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dcMailUser" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Dovecot-LDAP User" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dcMailUser /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
