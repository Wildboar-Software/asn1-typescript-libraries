/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
// export { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
import { id_oc_ipsecFilter } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecFilter.va.mjs";
// export { id_oc_ipsecFilter } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecFilter.va.mjs";


/**
 * @summary ipsecFilter
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecFilter OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   LDAP-NAME                 {"ipsecFilter"}
 *   ID                        id-oc-ipsecFilter }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecFilter: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipsecBase, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipsecFilter" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipsecFilter /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
