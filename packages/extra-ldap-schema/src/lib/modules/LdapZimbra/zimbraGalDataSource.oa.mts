/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { zimbraDataSource } from "../LdapZimbra/zimbraDataSource.oa.mjs";
// export { id_oc_zimbraGalDataSource } from "../LdapZimbra/id-oc-zimbraGalDataSource.va.mjs";


/**
 * @summary zimbraGalDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGalDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraDataSource }
 *   MUST CONTAIN              { zimbraGalStatus
 *                               | zimbraGalType }
 *   MAY CONTAIN               { zimbraGalLastFailedSyncTimestamp
 *                               | zimbraGalLastSuccessfulSyncTimestamp
 *                               | zimbraGalLdapAttrMap
 *                               | zimbraGalLdapGroupHandlerClass
 *                               | zimbraGalLdapValueMap
 *                               | zimbraGalSyncIgnoredAttributes
 *                               | zimbraGalSyncLdapAuthMech
 *                               | zimbraGalSyncLdapBindDn
 *                               | zimbraGalSyncLdapBindPassword
 *                               | zimbraGalSyncLdapFilter
 *                               | zimbraGalSyncLdapKerberos5Keytab
 *                               | zimbraGalSyncLdapKerberos5Principal
 *                               | zimbraGalSyncLdapPageSize
 *                               | zimbraGalSyncLdapSearchBase
 *                               | zimbraGalSyncLdapStartTlsEnabled
 *                               | zimbraGalSyncLdapURL
 *                               | zimbraGalSyncTimestampFormat }
 *   LDAP-NAME                 {"zimbraGalDataSource"}
 *   LDAP-DESC                 "GAL data source object"
 *   ID                        id-oc-zimbraGalDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGalDataSource: OBJECT_CLASS = undefined;

/* eslint-enable */
