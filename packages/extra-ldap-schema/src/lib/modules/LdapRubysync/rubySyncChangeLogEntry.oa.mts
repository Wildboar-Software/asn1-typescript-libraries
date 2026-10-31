/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_rubySyncChangeLogEntry } from "../LdapRubysync/id-oc-rubySyncChangeLogEntry.va.mjs";


/**
 * @summary rubySyncChangeLogEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rubySyncChangeLogEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { changeNumber
 *                               | changeType
 *                               | rubySyncSourceInfo }
 *   MAY CONTAIN               { rubySyncContext
 *                               | rubySyncDumpEntry
 *                               | changes
 *                               | newRdn
 *                               | deleteOldRdn
 *                               | newSuperior }
 *   LDAP-NAME                 {"rubySyncChangeLogEntry"}
 *   LDAP-DESC                 "Useful for LDAP server without native public changelog support (see https://opends.dev.java.net/public/standards/draft-good-ldap-changelog.txt)"
 *   ID                        id-oc-rubySyncChangeLogEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const rubySyncChangeLogEntry: OBJECT_CLASS = undefined;

/* eslint-enable */
