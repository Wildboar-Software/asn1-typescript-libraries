/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/serviceAdministrationPoint.oa.mjs";
// export { remoteStorageGUID } from "../LdapSchema2ldifMicrosoft/remoteStorageGUID.oa.mjs";
// export { id_oc_remoteStorageServicePoint } from "../LdapSchema2ldifMicrosoft/id-oc-remoteStorageServicePoint.va.mjs";


/**
 * @summary remoteStorageServicePoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * remoteStorageServicePoint OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceAdministrationPoint }
 *   MAY CONTAIN               { remoteStorageGUID }
 *   LDAP-NAME                 {"remoteStorageServicePoint"}
 *   ID                        id-oc-remoteStorageServicePoint }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const remoteStorageServicePoint: OBJECT_CLASS = undefined;

/* eslint-enable */
