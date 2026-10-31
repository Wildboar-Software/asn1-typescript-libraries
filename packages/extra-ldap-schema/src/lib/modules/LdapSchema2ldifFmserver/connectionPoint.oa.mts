/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_connectionPoint } from "../LdapSchema2ldifFmserver/id-oc-connectionPoint.va.mjs";


/**
 * @summary connectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * connectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { keywords
 *                               | managedBy }
 *   LDAP-NAME                 {"connectionPoint"}
 *   LDAP-DESC                 "Microsoft Active Directory ConnectPoint Object"
 *   ID                        id-oc-connectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const connectionPoint: OBJECT_CLASS = undefined;

/* eslint-enable */
