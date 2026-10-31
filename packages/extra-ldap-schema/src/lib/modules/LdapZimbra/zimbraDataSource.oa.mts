/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_zimbraDataSource } from "../LdapZimbra/id-oc-zimbraDataSource.va.mjs";


/**
 * @summary zimbraDataSource
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDataSource OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { zimbraDataSourceEnabled
 *                               | zimbraDataSourceFolderId
 *                               | zimbraDataSourceId
 *                               | zimbraDataSourceName }
 *   MAY CONTAIN               { zimbraCreateTimestamp
 *                               | zimbraDataSourceAttribute
 *                               | zimbraDataSourceConnectTimeout
 *                               | zimbraDataSourceConnectionType
 *                               | zimbraDataSourceDomain
 *                               | zimbraDataSourceEmailAddress
 *                               | zimbraDataSourceEnableTrace
 *                               | zimbraDataSourceFailingSince
 *                               | zimbraDataSourceHost
 *                               | zimbraDataSourceImportClassName
 *                               | zimbraDataSourceImportOnly
 *                               | zimbraDataSourceIsInternal
 *                               | zimbraDataSourceLastError
 *                               | zimbraDataSourceMaxTraceSize
 *                               | zimbraDataSourcePassword
 *                               | zimbraDataSourcePollingInterval
 *                               | zimbraDataSourcePort
 *                               | zimbraDataSourceReadTimeout
 *                               | zimbraDataSourceType
 *                               | zimbraDataSourceUseAddressForForwardReply
 *                               | zimbraDataSourceUsername
 *                               | zimbraPrefCalendarAcceptSignatureId
 *                               | zimbraPrefCalendarAutoAcceptSignatureId
 *                               | zimbraPrefCalendarAutoDeclineSignatureId
 *                               | zimbraPrefCalendarAutoDenySignatureId
 *                               | zimbraPrefCalendarDeclineSignatureId
 *                               | zimbraPrefCalendarTentativeSignatureId
 *                               | zimbraPrefDefaultSignatureId
 *                               | zimbraPrefForwardReplySignatureId
 *                               | zimbraPrefFromAddress
 *                               | zimbraPrefFromDisplay
 *                               | zimbraPrefReadReceiptsToAddress
 *                               | zimbraPrefReplyToAddress
 *                               | zimbraPrefReplyToDisplay }
 *   LDAP-NAME                 {"zimbraDataSource"}
 *   LDAP-DESC                 "base class for data source objects"
 *   ID                        id-oc-zimbraDataSource }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraDataSource: OBJECT_CLASS = undefined;

/* eslint-enable */
