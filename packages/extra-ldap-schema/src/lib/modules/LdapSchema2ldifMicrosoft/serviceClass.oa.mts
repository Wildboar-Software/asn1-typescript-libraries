/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { serviceClassInfo } from "../LdapSchema2ldifMicrosoft/serviceClassInfo.oa.mjs";
// export { id_oc_serviceClass } from "../LdapSchema2ldifMicrosoft/id-oc-serviceClass.va.mjs";


/**
 * @summary serviceClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceClass OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { displayName
 *                               | serviceClassID }
 *   MAY CONTAIN               { serviceClassInfo }
 *   LDAP-NAME                 {"serviceClass"}
 *   ID                        id-oc-serviceClass }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceClass: OBJECT_CLASS = undefined;

/* eslint-enable */
