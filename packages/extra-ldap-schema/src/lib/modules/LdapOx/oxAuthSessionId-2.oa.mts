/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxAuthSessionId_2 } from "../LdapOx/id-oc-oxAuthSessionId-2.va.mjs";


/**
 * @summary oxAuthSessionId_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthSessionId-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxId
 *                               | sid
 *                               | creationDate
 *                               | exp
 *                               | del
 *                               | oxLastAccessTime
 *                               | oxAuthUserDN
 *                               | authnTime
 *                               | oxState
 *                               | oxSessionState
 *                               | oxAuthPermissionGranted
 *                               | oxAsJwt
 *                               | oxJwt
 *                               | oxAuthPermissionGrantedMap
 *                               | oxInvolvedClients
 *                               | oxAuthSessionAttribute }
 *   LDAP-NAME                 {"oxAuthSessionId"}
 *   ID                        id-oc-oxAuthSessionId-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthSessionId_2: OBJECT_CLASS = undefined;

/* eslint-enable */
