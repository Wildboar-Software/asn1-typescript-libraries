/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mS_SQL_SQLDatabase } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLDatabase.va.mjs";


/**
 * @summary mS_SQL_SQLDatabase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLDatabase OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Status
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-Description
 *                               | mS-SQL-Alias
 *                               | mS-SQL-Size
 *                               | mS-SQL-CreationDate
 *                               | mS-SQL-LastBackupDate
 *                               | mS-SQL-LastDiagnosticDate
 *                               | mS-SQL-Applications
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-SQLDatabase"}
 *   ID                        id-oc-mS-SQL-SQLDatabase }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLDatabase: OBJECT_CLASS = undefined;

/* eslint-enable */
