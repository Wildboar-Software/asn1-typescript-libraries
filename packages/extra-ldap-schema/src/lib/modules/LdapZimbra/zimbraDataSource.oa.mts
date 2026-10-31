/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraDataSource } from "../LdapZimbra/id-oc-zimbraDataSource.va.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraDataSourceAttribute } from "./zimbraDataSourceAttribute.oa.mjs";
import { zimbraDataSourceConnectTimeout } from "./zimbraDataSourceConnectTimeout.oa.mjs";
import { zimbraDataSourceConnectionType } from "./zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceDomain } from "./zimbraDataSourceDomain.oa.mjs";
import { zimbraDataSourceEmailAddress } from "./zimbraDataSourceEmailAddress.oa.mjs";
import { zimbraDataSourceEnableTrace } from "./zimbraDataSourceEnableTrace.oa.mjs";
import { zimbraDataSourceEnabled } from "./zimbraDataSourceEnabled.oa.mjs";
import { zimbraDataSourceFailingSince } from "./zimbraDataSourceFailingSince.oa.mjs";
import { zimbraDataSourceFolderId } from "./zimbraDataSourceFolderId.oa.mjs";
import { zimbraDataSourceHost } from "./zimbraDataSourceHost.oa.mjs";
import { zimbraDataSourceId } from "./zimbraDataSourceId.oa.mjs";
import { zimbraDataSourceImportClassName } from "./zimbraDataSourceImportClassName.oa.mjs";
import { zimbraDataSourceImportOnly } from "./zimbraDataSourceImportOnly.oa.mjs";
import { zimbraDataSourceIsInternal } from "./zimbraDataSourceIsInternal.oa.mjs";
import { zimbraDataSourceLastError } from "./zimbraDataSourceLastError.oa.mjs";
import { zimbraDataSourceMaxTraceSize } from "./zimbraDataSourceMaxTraceSize.oa.mjs";
import { zimbraDataSourceName } from "./zimbraDataSourceName.oa.mjs";
import { zimbraDataSourcePassword } from "./zimbraDataSourcePassword.oa.mjs";
import { zimbraDataSourcePollingInterval } from "./zimbraDataSourcePollingInterval.oa.mjs";
import { zimbraDataSourcePort } from "./zimbraDataSourcePort.oa.mjs";
import { zimbraDataSourceReadTimeout } from "./zimbraDataSourceReadTimeout.oa.mjs";
import { zimbraDataSourceType } from "./zimbraDataSourceType.oa.mjs";
import { zimbraDataSourceUseAddressForForwardReply } from "./zimbraDataSourceUseAddressForForwardReply.oa.mjs";
import { zimbraDataSourceUsername } from "./zimbraDataSourceUsername.oa.mjs";
import { zimbraPrefCalendarAcceptSignatureId } from "./zimbraPrefCalendarAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoAcceptSignatureId } from "./zimbraPrefCalendarAutoAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDeclineSignatureId } from "./zimbraPrefCalendarAutoDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDenySignatureId } from "./zimbraPrefCalendarAutoDenySignatureId.oa.mjs";
import { zimbraPrefCalendarDeclineSignatureId } from "./zimbraPrefCalendarDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarTentativeSignatureId } from "./zimbraPrefCalendarTentativeSignatureId.oa.mjs";
import { zimbraPrefDefaultSignatureId } from "./zimbraPrefDefaultSignatureId.oa.mjs";
import { zimbraPrefForwardReplySignatureId } from "./zimbraPrefForwardReplySignatureId.oa.mjs";
import { zimbraPrefFromAddress } from "./zimbraPrefFromAddress.oa.mjs";
import { zimbraPrefFromDisplay } from "./zimbraPrefFromDisplay.oa.mjs";
import { zimbraPrefReadReceiptsToAddress } from "./zimbraPrefReadReceiptsToAddress.oa.mjs";
import { zimbraPrefReplyToAddress } from "./zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "./zimbraPrefReplyToDisplay.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraDataSourceEnabled, zimbraDataSourceFolderId, zimbraDataSourceId, zimbraDataSourceName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [zimbraCreateTimestamp, zimbraDataSourceAttribute, zimbraDataSourceConnectTimeout, zimbraDataSourceConnectionType, zimbraDataSourceDomain, zimbraDataSourceEmailAddress, zimbraDataSourceEnableTrace, zimbraDataSourceFailingSince, zimbraDataSourceHost, zimbraDataSourceImportClassName, zimbraDataSourceImportOnly, zimbraDataSourceIsInternal, zimbraDataSourceLastError, zimbraDataSourceMaxTraceSize, zimbraDataSourcePassword, zimbraDataSourcePollingInterval, zimbraDataSourcePort, zimbraDataSourceReadTimeout, zimbraDataSourceType, zimbraDataSourceUseAddressForForwardReply, zimbraDataSourceUsername, zimbraPrefCalendarAcceptSignatureId, zimbraPrefCalendarAutoAcceptSignatureId, zimbraPrefCalendarAutoDeclineSignatureId, zimbraPrefCalendarAutoDenySignatureId, zimbraPrefCalendarDeclineSignatureId, zimbraPrefCalendarTentativeSignatureId, zimbraPrefDefaultSignatureId, zimbraPrefForwardReplySignatureId, zimbraPrefFromAddress, zimbraPrefFromDisplay, zimbraPrefReadReceiptsToAddress, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraDataSource"],
    "&ldapDesc": "base class for data source objects" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDataSource /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
