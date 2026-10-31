/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nFSv4RemoteGroup } from "../LdapNfsv4/id-oc-nFSv4RemoteGroup.va.mjs";


/**
 * @summary nFSv4RemoteGroup
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nFSv4RemoteGroup OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gidNumber
 *                               | nFSv4Name }
 *   MAY CONTAIN               { commonName
 *                               | memberUid
 *                               | description }
 *   LDAP-NAME                 {"NFSv4RemoteGroup"}
 *   LDAP-DESC                 "NFS version4 group from remote NFSv4 Domain"
 *   ID                        id-oc-nFSv4RemoteGroup }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nFSv4RemoteGroup: OBJECT_CLASS = undefined;

/* eslint-enable */
