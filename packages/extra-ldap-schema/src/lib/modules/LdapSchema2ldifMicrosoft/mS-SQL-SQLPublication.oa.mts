/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mS_SQL_SQLPublication } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLPublication.va.mjs";


/**
 * @summary mS_SQL_SQLPublication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLPublication OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Status
 *                               | mS-SQL-Description
 *                               | mS-SQL-Type
 *                               | mS-SQL-Database
 *                               | mS-SQL-AllowAnonymousSubscription
 *                               | mS-SQL-Publisher
 *                               | mS-SQL-AllowKnownPullSubscription
 *                               | mS-SQL-AllowImmediateUpdatingSubscription
 *                               | mS-SQL-AllowQueuedUpdatingSubscription
 *                               | mS-SQL-AllowSnapshotFilesFTPDownloading
 *                               | mS-SQL-ThirdParty }
 *   LDAP-NAME                 {"mS-SQL-SQLPublication"}
 *   ID                        id-oc-mS-SQL-SQLPublication }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLPublication: OBJECT_CLASS = undefined;

/* eslint-enable */
