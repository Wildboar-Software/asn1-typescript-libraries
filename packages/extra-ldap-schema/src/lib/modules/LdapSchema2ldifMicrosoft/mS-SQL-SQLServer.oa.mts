/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { serviceConnectionPoint } from "../LdapSchema2ldifFmserver/serviceConnectionPoint.oa.mjs";
// export { id_oc_mS_SQL_SQLServer } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLServer.va.mjs";


/**
 * @summary mS_SQL_SQLServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceConnectionPoint }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-RegisteredOwner
 *                               | mS-SQL-Contact
 *                               | mS-SQL-Location
 *                               | mS-SQL-Memory
 *                               | mS-SQL-Build
 *                               | mS-SQL-ServiceAccount
 *                               | mS-SQL-CharacterSet
 *                               | mS-SQL-SortOrder
 *                               | mS-SQL-UnicodeSortOrder
 *                               | mS-SQL-Clustered
 *                               | mS-SQL-NamedPipe
 *                               | mS-SQL-MultiProtocol
 *                               | mS-SQL-SPX
 *                               | mS-SQL-TCPIP
 *                               | mS-SQL-AppleTalk
 *                               | mS-SQL-Vines
 *                               | mS-SQL-Status
 *                               | mS-SQL-LastUpdatedDate
 *                               | mS-SQL-InformationURL
 *                               | mS-SQL-GPSLatitude
 *                               | mS-SQL-GPSLongitude
 *                               | mS-SQL-GPSHeight
 *                               | mS-SQL-Keywords }
 *   LDAP-NAME                 {"mS-SQL-SQLServer"}
 *   ID                        id-oc-mS-SQL-SQLServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLServer: OBJECT_CLASS = undefined;

/* eslint-enable */
