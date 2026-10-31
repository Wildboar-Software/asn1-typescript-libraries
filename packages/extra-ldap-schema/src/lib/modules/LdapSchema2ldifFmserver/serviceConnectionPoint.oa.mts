/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { connectionPoint } from "../LdapSchema2ldifFmserver/connectionPoint.oa.mjs";
// export { id_oc_serviceConnectionPoint } from "../LdapSchema2ldifFmserver/id-oc-serviceConnectionPoint.va.mjs";


/**
 * @summary serviceConnectionPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceConnectionPoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { connectionPoint }
 *   MUST CONTAIN              { name
 *                               | serviceBindingInformation }
 *   MAY CONTAIN               { localityName
 *                               | mail
 *                               | owner
 *                               | serviceClassName
 *                               | serviceDNSName
 *                               | serviceDNSNameType
 *                               | telephoneNumber
 *                               | description }
 *   LDAP-NAME                 {"serviceConnectionPoint"}
 *   LDAP-DESC                 "Microsoft Active Directory ServiceConnectionPoint Object"
 *   ID                        id-oc-serviceConnectionPoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const serviceConnectionPoint: OBJECT_CLASS = undefined;

/* eslint-enable */
