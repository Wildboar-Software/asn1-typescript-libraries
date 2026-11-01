/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraDataSource } from "../LdapZimbra/id-oc-zimbraDataSource.va.mjs";
import { zimbraDataSourceEnabled } from "../LdapZimbra/zimbraDataSourceEnabled.oa.mjs";
import { zimbraDataSourceFolderId } from "../LdapZimbra/zimbraDataSourceFolderId.oa.mjs";
import { zimbraDataSourceId } from "../LdapZimbra/zimbraDataSourceId.oa.mjs";
import { zimbraDataSourceName } from "../LdapZimbra/zimbraDataSourceName.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraDataSourceAttribute } from "../LdapZimbra/zimbraDataSourceAttribute.oa.mjs";
import { zimbraDataSourceConnectTimeout } from "../LdapZimbra/zimbraDataSourceConnectTimeout.oa.mjs";
import { zimbraDataSourceConnectionType } from "../LdapZimbra/zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceDomain } from "../LdapZimbra/zimbraDataSourceDomain.oa.mjs";
import { zimbraDataSourceEmailAddress } from "../LdapZimbra/zimbraDataSourceEmailAddress.oa.mjs";
import { zimbraDataSourceEnableTrace } from "../LdapZimbra/zimbraDataSourceEnableTrace.oa.mjs";
import { zimbraDataSourceFailingSince } from "../LdapZimbra/zimbraDataSourceFailingSince.oa.mjs";
import { zimbraDataSourceHost } from "../LdapZimbra/zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourceImportClassName } from "../LdapZimbra/zimbraDataSourceImportClassName.oa.mjs";
import { zimbraDataSourceImportOnly } from "../LdapZimbra/zimbraDataSourceImportOnly.oa.mjs";
import { zimbraDataSourceIsInternal } from "../LdapZimbra/zimbraDataSourceIsInternal.oa.mjs";
import { zimbraDataSourceLastError } from "../LdapZimbra/zimbraDataSourceLastError.oa.mjs";
import { zimbraDataSourceMaxTraceSize } from "../LdapZimbra/zimbraDataSourceMaxTraceSize.oa.mjs";
import { zimbraDataSourcePassword } from "../LdapZimbra/zimbraDataSourcePassword.oa.mjs";
import { zimbraDataSourcePollingInterval } from "../LdapZimbra/zimbraDataSourcePollingInterval.oa.mjs";
import { zimbraDataSourcePort } from "../LdapZimbra/zimbraDataSourcePort.oa.mjs";
import { zimbraDataSourceReadTimeout } from "../LdapZimbra/zimbraDataSourceReadTimeout.oa.mjs";
import { zimbraDataSourceType } from "../LdapZimbra/zimbraDataSourceType.oa.mjs";
import { zimbraDataSourceUseAddressForForwardReply } from "../LdapZimbra/zimbraDataSourceUseAddressForForwardReply.oa.mjs";
import { zimbraDataSourceUsername } from "../LdapZimbra/zimbraDataSourceUsername.oa.mjs";
import { zimbraPrefCalendarAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDenySignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDenySignatureId.oa.mjs";
import { zimbraPrefCalendarDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarTentativeSignatureId } from "../LdapZimbra/zimbraPrefCalendarTentativeSignatureId.oa.mjs";
import { zimbraPrefDefaultSignatureId } from "../LdapZimbra/zimbraPrefDefaultSignatureId.oa.mjs";
import { zimbraPrefForwardReplySignatureId } from "../LdapZimbra/zimbraPrefForwardReplySignatureId.oa.mjs";
import { zimbraPrefFromAddress } from "../LdapZimbra/zimbraPrefFromAddress.oa.mjs";
import { zimbraPrefFromDisplay } from "../LdapZimbra/zimbraPrefFromDisplay.oa.mjs";
import { zimbraPrefReadReceiptsToAddress } from "../LdapZimbra/zimbraPrefReadReceiptsToAddress.oa.mjs";
import { zimbraPrefReplyToAddress } from "../LdapZimbra/zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "../LdapZimbra/zimbraPrefReplyToDisplay.oa.mjs";
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
const zimbraDataSource: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraDataSourceEnabled, zimbraDataSourceFolderId, zimbraDataSourceId, zimbraDataSourceName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ zimbraCreateTimestamp, zimbraDataSourceAttribute, zimbraDataSourceConnectTimeout, zimbraDataSourceConnectionType, zimbraDataSourceDomain, zimbraDataSourceEmailAddress, zimbraDataSourceEnableTrace, zimbraDataSourceFailingSince, zimbraDataSourceHost, zimbraDataSourceImportClassName, zimbraDataSourceImportOnly, zimbraDataSourceIsInternal, zimbraDataSourceLastError, zimbraDataSourceMaxTraceSize, zimbraDataSourcePassword, zimbraDataSourcePollingInterval, zimbraDataSourcePort, zimbraDataSourceReadTimeout, zimbraDataSourceType, zimbraDataSourceUseAddressForForwardReply, zimbraDataSourceUsername, zimbraPrefCalendarAcceptSignatureId, zimbraPrefCalendarAutoAcceptSignatureId, zimbraPrefCalendarAutoDeclineSignatureId, zimbraPrefCalendarAutoDenySignatureId, zimbraPrefCalendarDeclineSignatureId, zimbraPrefCalendarTentativeSignatureId, zimbraPrefDefaultSignatureId, zimbraPrefForwardReplySignatureId, zimbraPrefFromAddress, zimbraPrefFromDisplay, zimbraPrefReadReceiptsToAddress, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDataSource" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "base class for data source objects" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDataSource /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
