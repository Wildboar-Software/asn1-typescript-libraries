/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraGlobalConfig } from "../LdapZimbra/id-oc-zimbraGlobalConfig.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAccountClientAttr } from "../LdapZimbra/zimbraAccountClientAttr.oa.mjs";
import { zimbraAccountExtraObjectClass } from "../LdapZimbra/zimbraAccountExtraObjectClass.oa.mjs";
import { zimbraAdminAccessControlMech } from "../LdapZimbra/zimbraAdminAccessControlMech.oa.mjs";
import { zimbraAdminConsoleCatchAllAddressEnabled } from "../LdapZimbra/zimbraAdminConsoleCatchAllAddressEnabled.oa.mjs";
import { zimbraAdminConsoleDNSCheckEnabled } from "../LdapZimbra/zimbraAdminConsoleDNSCheckEnabled.oa.mjs";
import { zimbraAdminConsoleLDAPAuthEnabled } from "../LdapZimbra/zimbraAdminConsoleLDAPAuthEnabled.oa.mjs";
import { zimbraAdminConsoleLoginMessage } from "../LdapZimbra/zimbraAdminConsoleLoginMessage.oa.mjs";
import { zimbraAdminConsoleLoginURL } from "../LdapZimbra/zimbraAdminConsoleLoginURL.oa.mjs";
import { zimbraAdminConsoleLogoutURL } from "../LdapZimbra/zimbraAdminConsoleLogoutURL.oa.mjs";
import { zimbraAdminConsoleSkinEnabled } from "../LdapZimbra/zimbraAdminConsoleSkinEnabled.oa.mjs";
import { zimbraAdminImapImportNumThreads } from "../LdapZimbra/zimbraAdminImapImportNumThreads.oa.mjs";
import { zimbraAdminPort } from "../LdapZimbra/zimbraAdminPort.oa.mjs";
import { zimbraAdminProxyPort } from "../LdapZimbra/zimbraAdminProxyPort.oa.mjs";
import { zimbraAdminURL } from "../LdapZimbra/zimbraAdminURL.oa.mjs";
import { zimbraAllowNonLDHCharsInDomain } from "../LdapZimbra/zimbraAllowNonLDHCharsInDomain.oa.mjs";
import { zimbraAlwaysOnClusterId } from "../LdapZimbra/zimbraAlwaysOnClusterId.oa.mjs";
import { zimbraAmavisDSPAMEnabled } from "../LdapZimbra/zimbraAmavisDSPAMEnabled.oa.mjs";
import { zimbraAmavisEnableDKIMVerification } from "../LdapZimbra/zimbraAmavisEnableDKIMVerification.oa.mjs";
import { zimbraAmavisFinalSpamDestiny } from "../LdapZimbra/zimbraAmavisFinalSpamDestiny.oa.mjs";
import { zimbraAmavisLogLevel } from "../LdapZimbra/zimbraAmavisLogLevel.oa.mjs";
import { zimbraAmavisMaxServers } from "../LdapZimbra/zimbraAmavisMaxServers.oa.mjs";
import { zimbraAmavisOriginatingBypassSA } from "../LdapZimbra/zimbraAmavisOriginatingBypassSA.oa.mjs";
import { zimbraAmavisOutboundDisclaimersOnly } from "../LdapZimbra/zimbraAmavisOutboundDisclaimersOnly.oa.mjs";
import { zimbraAmavisQuarantineAccount } from "../LdapZimbra/zimbraAmavisQuarantineAccount.oa.mjs";
import { zimbraAmavisSALogLevel } from "../LdapZimbra/zimbraAmavisSALogLevel.oa.mjs";
import { zimbraAntispamExtractionBatchDelay } from "../LdapZimbra/zimbraAntispamExtractionBatchDelay.oa.mjs";
import { zimbraAntispamExtractionBatchSize } from "../LdapZimbra/zimbraAntispamExtractionBatchSize.oa.mjs";
import { zimbraArchiveEnabled } from "../LdapZimbra/zimbraArchiveEnabled.oa.mjs";
import { zimbraArchiveMailFrom } from "../LdapZimbra/zimbraArchiveMailFrom.oa.mjs";
import { zimbraAttachmentsBlocked } from "../LdapZimbra/zimbraAttachmentsBlocked.oa.mjs";
import { zimbraAttachmentsIndexedTextLimit } from "../LdapZimbra/zimbraAttachmentsIndexedTextLimit.oa.mjs";
import { zimbraAttachmentsScanClass } from "../LdapZimbra/zimbraAttachmentsScanClass.oa.mjs";
import { zimbraAttachmentsScanEnabled } from "../LdapZimbra/zimbraAttachmentsScanEnabled.oa.mjs";
import { zimbraAttachmentsScanURL } from "../LdapZimbra/zimbraAttachmentsScanURL.oa.mjs";
import { zimbraAttachmentsViewInHtmlOnly } from "../LdapZimbra/zimbraAttachmentsViewInHtmlOnly.oa.mjs";
import { zimbraAuthTokenKey } from "../LdapZimbra/zimbraAuthTokenKey.oa.mjs";
import { zimbraAuthTokenNotificationInterval } from "../LdapZimbra/zimbraAuthTokenNotificationInterval.oa.mjs";
import { zimbraAuthTokenValidityValueEnabled } from "../LdapZimbra/zimbraAuthTokenValidityValueEnabled.oa.mjs";
import { zimbraAutoProvBatchSize } from "../LdapZimbra/zimbraAutoProvBatchSize.oa.mjs";
import { zimbraAutoProvNotificationBody } from "../LdapZimbra/zimbraAutoProvNotificationBody.oa.mjs";
import { zimbraAutoProvNotificationSubject } from "../LdapZimbra/zimbraAutoProvNotificationSubject.oa.mjs";
import { zimbraAutoProvPollingInterval } from "../LdapZimbra/zimbraAutoProvPollingInterval.oa.mjs";
import { zimbraAutoSubmittedNullReturnPath } from "../LdapZimbra/zimbraAutoSubmittedNullReturnPath.oa.mjs";
import { zimbraBackupAutoGroupedInterval } from "../LdapZimbra/zimbraBackupAutoGroupedInterval.oa.mjs";
import { zimbraBackupAutoGroupedNumGroups } from "../LdapZimbra/zimbraBackupAutoGroupedNumGroups.oa.mjs";
import { zimbraBackupAutoGroupedThrottled } from "../LdapZimbra/zimbraBackupAutoGroupedThrottled.oa.mjs";
import { zimbraBackupMinFreeSpace } from "../LdapZimbra/zimbraBackupMinFreeSpace.oa.mjs";
import { zimbraBackupMode } from "../LdapZimbra/zimbraBackupMode.oa.mjs";
import { zimbraBackupReportEmailRecipients } from "../LdapZimbra/zimbraBackupReportEmailRecipients.oa.mjs";
import { zimbraBackupReportEmailSender } from "../LdapZimbra/zimbraBackupReportEmailSender.oa.mjs";
import { zimbraBackupReportEmailSubjectPrefix } from "../LdapZimbra/zimbraBackupReportEmailSubjectPrefix.oa.mjs";
import { zimbraBackupSkipBlobs } from "../LdapZimbra/zimbraBackupSkipBlobs.oa.mjs";
import { zimbraBackupSkipHsmBlobs } from "../LdapZimbra/zimbraBackupSkipHsmBlobs.oa.mjs";
import { zimbraBackupSkipSearchIndex } from "../LdapZimbra/zimbraBackupSkipSearchIndex.oa.mjs";
import { zimbraBackupTarget } from "../LdapZimbra/zimbraBackupTarget.oa.mjs";
import { zimbraBasicAuthRealm } from "../LdapZimbra/zimbraBasicAuthRealm.oa.mjs";
import { zimbraCBPolicydAccessControlEnabled } from "../LdapZimbra/zimbraCBPolicydAccessControlEnabled.oa.mjs";
import { zimbraCBPolicydAccountingEnabled } from "../LdapZimbra/zimbraCBPolicydAccountingEnabled.oa.mjs";
import { zimbraCBPolicydAmavisEnabled } from "../LdapZimbra/zimbraCBPolicydAmavisEnabled.oa.mjs";
import { zimbraCBPolicydBindPort } from "../LdapZimbra/zimbraCBPolicydBindPort.oa.mjs";
import { zimbraCBPolicydBypassMode } from "../LdapZimbra/zimbraCBPolicydBypassMode.oa.mjs";
import { zimbraCBPolicydBypassTimeout } from "../LdapZimbra/zimbraCBPolicydBypassTimeout.oa.mjs";
import { zimbraCBPolicydCheckHeloEnabled } from "../LdapZimbra/zimbraCBPolicydCheckHeloEnabled.oa.mjs";
import { zimbraCBPolicydCheckSPFEnabled } from "../LdapZimbra/zimbraCBPolicydCheckSPFEnabled.oa.mjs";
import { zimbraCBPolicydGreylistingBlacklistMsg } from "../LdapZimbra/zimbraCBPolicydGreylistingBlacklistMsg.oa.mjs";
import { zimbraCBPolicydGreylistingDeferMsg } from "../LdapZimbra/zimbraCBPolicydGreylistingDeferMsg.oa.mjs";
import { zimbraCBPolicydGreylistingEnabled } from "../LdapZimbra/zimbraCBPolicydGreylistingEnabled.oa.mjs";
import { zimbraCBPolicydGreylistingTrainingEnabled } from "../LdapZimbra/zimbraCBPolicydGreylistingTrainingEnabled.oa.mjs";
import { zimbraCBPolicydLogLevel } from "../LdapZimbra/zimbraCBPolicydLogLevel.oa.mjs";
import { zimbraCBPolicydMaxRequests } from "../LdapZimbra/zimbraCBPolicydMaxRequests.oa.mjs";
import { zimbraCBPolicydMaxServers } from "../LdapZimbra/zimbraCBPolicydMaxServers.oa.mjs";
import { zimbraCBPolicydMaxSpareServers } from "../LdapZimbra/zimbraCBPolicydMaxSpareServers.oa.mjs";
import { zimbraCBPolicydMinServers } from "../LdapZimbra/zimbraCBPolicydMinServers.oa.mjs";
import { zimbraCBPolicydMinSpareServers } from "../LdapZimbra/zimbraCBPolicydMinSpareServers.oa.mjs";
import { zimbraCBPolicydQuotasEnabled } from "../LdapZimbra/zimbraCBPolicydQuotasEnabled.oa.mjs";
import { zimbraCBPolicydTimeoutBusy } from "../LdapZimbra/zimbraCBPolicydTimeoutBusy.oa.mjs";
import { zimbraCBPolicydTimeoutIdle } from "../LdapZimbra/zimbraCBPolicydTimeoutIdle.oa.mjs";
import { zimbraCOSInheritedAttr } from "../LdapZimbra/zimbraCOSInheritedAttr.oa.mjs";
import { zimbraCalendarCalDavAlternateCalendarHomeSet } from "../LdapZimbra/zimbraCalendarCalDavAlternateCalendarHomeSet.oa.mjs";
import { zimbraCalendarCalDavCalendarAutoScheduleEnabled } from "../LdapZimbra/zimbraCalendarCalDavCalendarAutoScheduleEnabled.oa.mjs";
import { zimbraCalendarCalDavClearTextPasswordEnabled } from "../LdapZimbra/zimbraCalendarCalDavClearTextPasswordEnabled.oa.mjs";
import { zimbraCalendarCalDavDefaultCalendarId } from "../LdapZimbra/zimbraCalendarCalDavDefaultCalendarId.oa.mjs";
import { zimbraCalendarCalDavDisableFreebusy } from "../LdapZimbra/zimbraCalendarCalDavDisableFreebusy.oa.mjs";
import { zimbraCalendarCalDavDisableScheduling } from "../LdapZimbra/zimbraCalendarCalDavDisableScheduling.oa.mjs";
import { zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection } from "../LdapZimbra/zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection.oa.mjs";
import { zimbraCalendarCompatibilityMode } from "../LdapZimbra/zimbraCalendarCompatibilityMode.oa.mjs";
import { zimbraCalendarRecurrenceDailyMaxDays } from "../LdapZimbra/zimbraCalendarRecurrenceDailyMaxDays.oa.mjs";
import { zimbraCalendarRecurrenceMaxInstances } from "../LdapZimbra/zimbraCalendarRecurrenceMaxInstances.oa.mjs";
import { zimbraCalendarRecurrenceMonthlyMaxMonths } from "../LdapZimbra/zimbraCalendarRecurrenceMonthlyMaxMonths.oa.mjs";
import { zimbraCalendarRecurrenceOtherFrequencyMaxYears } from "../LdapZimbra/zimbraCalendarRecurrenceOtherFrequencyMaxYears.oa.mjs";
import { zimbraCalendarRecurrenceWeeklyMaxWeeks } from "../LdapZimbra/zimbraCalendarRecurrenceWeeklyMaxWeeks.oa.mjs";
import { zimbraCalendarRecurrenceYearlyMaxYears } from "../LdapZimbra/zimbraCalendarRecurrenceYearlyMaxYears.oa.mjs";
import { zimbraCalendarResourceExtraObjectClass } from "../LdapZimbra/zimbraCalendarResourceExtraObjectClass.oa.mjs";
import { zimbraCertAuthorityCertSelfSigned } from "../LdapZimbra/zimbraCertAuthorityCertSelfSigned.oa.mjs";
import { zimbraCertAuthorityKeySelfSigned } from "../LdapZimbra/zimbraCertAuthorityKeySelfSigned.oa.mjs";
import { zimbraChangePasswordURL } from "../LdapZimbra/zimbraChangePasswordURL.oa.mjs";
import { zimbraClamAVBindAddress } from "../LdapZimbra/zimbraClamAVBindAddress.oa.mjs";
import { zimbraClamAVListenPort } from "../LdapZimbra/zimbraClamAVListenPort.oa.mjs";
import { zimbraClamAVMaxThreads } from "../LdapZimbra/zimbraClamAVMaxThreads.oa.mjs";
import { zimbraClientTypeRegex } from "../LdapZimbra/zimbraClientTypeRegex.oa.mjs";
import { zimbraClusterType } from "../LdapZimbra/zimbraClusterType.oa.mjs";
import { zimbraCommunityAPIClientID } from "../LdapZimbra/zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "../LdapZimbra/zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "../LdapZimbra/zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "../LdapZimbra/zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "../LdapZimbra/zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraComponentAvailable } from "../LdapZimbra/zimbraComponentAvailable.oa.mjs";
import { zimbraConfiguredServerIDForBlobDirEnabled } from "../LdapZimbra/zimbraConfiguredServerIDForBlobDirEnabled.oa.mjs";
import { zimbraConstraint } from "../LdapZimbra/zimbraConstraint.oa.mjs";
import { zimbraContactHiddenAttributes } from "../LdapZimbra/zimbraContactHiddenAttributes.oa.mjs";
import { zimbraContactRankingTableRefreshInterval } from "../LdapZimbra/zimbraContactRankingTableRefreshInterval.oa.mjs";
import { zimbraConvertdURL } from "../LdapZimbra/zimbraConvertdURL.oa.mjs";
import { zimbraCosExtraObjectClass } from "../LdapZimbra/zimbraCosExtraObjectClass.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraCsrfAllowedRefererHosts } from "../LdapZimbra/zimbraCsrfAllowedRefererHosts.oa.mjs";
import { zimbraCsrfRefererCheckEnabled } from "../LdapZimbra/zimbraCsrfRefererCheckEnabled.oa.mjs";
import { zimbraCsrfTokenCheckEnabled } from "../LdapZimbra/zimbraCsrfTokenCheckEnabled.oa.mjs";
import { zimbraCsrfTokenKey } from "../LdapZimbra/zimbraCsrfTokenKey.oa.mjs";
import { zimbraCustomMimeHeaderNameAllowed } from "../LdapZimbra/zimbraCustomMimeHeaderNameAllowed.oa.mjs";
import { zimbraDNSCheckHostname } from "../LdapZimbra/zimbraDNSCheckHostname.oa.mjs";
import { zimbraDNSMasterIP } from "../LdapZimbra/zimbraDNSMasterIP.oa.mjs";
import { zimbraDNSTCPUpstream } from "../LdapZimbra/zimbraDNSTCPUpstream.oa.mjs";
import { zimbraDNSUseTCP } from "../LdapZimbra/zimbraDNSUseTCP.oa.mjs";
import { zimbraDNSUseUDP } from "../LdapZimbra/zimbraDNSUseUDP.oa.mjs";
import { zimbraDataSourceConnectTimeout } from "../LdapZimbra/zimbraDataSourceConnectTimeout.oa.mjs";
import { zimbraDataSourceConnectionType } from "../LdapZimbra/zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceReadTimeout } from "../LdapZimbra/zimbraDataSourceReadTimeout.oa.mjs";
import { zimbraDatabaseSlowSqlThreshold } from "../LdapZimbra/zimbraDatabaseSlowSqlThreshold.oa.mjs";
import { zimbraDefaultAnalyzerStopWords } from "../LdapZimbra/zimbraDefaultAnalyzerStopWords.oa.mjs";
import { zimbraDefaultDomainName } from "../LdapZimbra/zimbraDefaultDomainName.oa.mjs";
import { zimbraDomainAdminModifiableAttr } from "../LdapZimbra/zimbraDomainAdminModifiableAttr.oa.mjs";
import { zimbraDomainAggregateQuota } from "../LdapZimbra/zimbraDomainAggregateQuota.oa.mjs";
import { zimbraDomainAggregateQuotaPolicy } from "../LdapZimbra/zimbraDomainAggregateQuotaPolicy.oa.mjs";
import { zimbraDomainAggregateQuotaWarnEmailRecipient } from "../LdapZimbra/zimbraDomainAggregateQuotaWarnEmailRecipient.oa.mjs";
import { zimbraDomainAggregateQuotaWarnPercent } from "../LdapZimbra/zimbraDomainAggregateQuotaWarnPercent.oa.mjs";
import { zimbraDomainExtraObjectClass } from "../LdapZimbra/zimbraDomainExtraObjectClass.oa.mjs";
import { zimbraDomainInheritedAttr } from "../LdapZimbra/zimbraDomainInheritedAttr.oa.mjs";
import { zimbraDomainMandatoryMailSignatureEnabled } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureEnabled.oa.mjs";
import { zimbraDomainMandatoryMailSignatureHTML } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureHTML.oa.mjs";
import { zimbraDomainMandatoryMailSignatureText } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureText.oa.mjs";
import { zimbraDomainStatus } from "../LdapZimbra/zimbraDomainStatus.oa.mjs";
import { zimbraEmptyFolderOpTimeout } from "../LdapZimbra/zimbraEmptyFolderOpTimeout.oa.mjs";
import { zimbraErrorReportUrl } from "../LdapZimbra/zimbraErrorReportUrl.oa.mjs";
import { zimbraExternalAccountProvisioningKey } from "../LdapZimbra/zimbraExternalAccountProvisioningKey.oa.mjs";
import { zimbraExternalAccountStatusCheckInterval } from "../LdapZimbra/zimbraExternalAccountStatusCheckInterval.oa.mjs";
import { zimbraExternalShareInvitationUrlExpiration } from "../LdapZimbra/zimbraExternalShareInvitationUrlExpiration.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "../LdapZimbra/zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFileUploadMaxSize } from "../LdapZimbra/zimbraFileUploadMaxSize.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "../LdapZimbra/zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraForceClearCookies } from "../LdapZimbra/zimbraForceClearCookies.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "../LdapZimbra/zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "../LdapZimbra/zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "../LdapZimbra/zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "../LdapZimbra/zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "../LdapZimbra/zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeServerType } from "../LdapZimbra/zimbraFreebusyExchangeServerType.oa.mjs";
import { zimbraFreebusyExchangeURL } from "../LdapZimbra/zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "../LdapZimbra/zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraFreebusyExternalZimbraURL } from "../LdapZimbra/zimbraFreebusyExternalZimbraURL.oa.mjs";
import { zimbraFreebusyPropagationRetryInterval } from "../LdapZimbra/zimbraFreebusyPropagationRetryInterval.oa.mjs";
import { zimbraGalAlwaysIncludeLocalCalendarResources } from "../LdapZimbra/zimbraGalAlwaysIncludeLocalCalendarResources.oa.mjs";
import { zimbraGalAutoCompleteLdapFilter } from "../LdapZimbra/zimbraGalAutoCompleteLdapFilter.oa.mjs";
import { zimbraGalGroupIndicatorEnabled } from "../LdapZimbra/zimbraGalGroupIndicatorEnabled.oa.mjs";
import { zimbraGalInternalSearchBase } from "../LdapZimbra/zimbraGalInternalSearchBase.oa.mjs";
import { zimbraGalLdapAttrMap } from "../LdapZimbra/zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapFilterDef } from "../LdapZimbra/zimbraGalLdapFilterDef.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "../LdapZimbra/zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapPageSize } from "../LdapZimbra/zimbraGalLdapPageSize.oa.mjs";
import { zimbraGalLdapValueMap } from "../LdapZimbra/zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalMaxResults } from "../LdapZimbra/zimbraGalMaxResults.oa.mjs";
import { zimbraGalSyncInternalSearchBase } from "../LdapZimbra/zimbraGalSyncInternalSearchBase.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "../LdapZimbra/zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncMaxConcurrentClients } from "../LdapZimbra/zimbraGalSyncMaxConcurrentClients.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "../LdapZimbra/zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalTokenizeAutoCompleteKey } from "../LdapZimbra/zimbraGalTokenizeAutoCompleteKey.oa.mjs";
import { zimbraGalTokenizeSearchKey } from "../LdapZimbra/zimbraGalTokenizeSearchKey.oa.mjs";
import { zimbraGlobalConfigExtraObjectClass } from "../LdapZimbra/zimbraGlobalConfigExtraObjectClass.oa.mjs";
import { zimbraHelpAdminURL } from "../LdapZimbra/zimbraHelpAdminURL.oa.mjs";
import { zimbraHelpAdvancedURL } from "../LdapZimbra/zimbraHelpAdvancedURL.oa.mjs";
import { zimbraHelpDelegatedURL } from "../LdapZimbra/zimbraHelpDelegatedURL.oa.mjs";
import { zimbraHelpStandardURL } from "../LdapZimbra/zimbraHelpStandardURL.oa.mjs";
import { zimbraHsmAge } from "../LdapZimbra/zimbraHsmAge.oa.mjs";
import { zimbraHsmBatchSize } from "../LdapZimbra/zimbraHsmBatchSize.oa.mjs";
import { zimbraHsmMovePreviousRevisions } from "../LdapZimbra/zimbraHsmMovePreviousRevisions.oa.mjs";
import { zimbraHsmPolicy } from "../LdapZimbra/zimbraHsmPolicy.oa.mjs";
import { zimbraHttpCompressionEnabled } from "../LdapZimbra/zimbraHttpCompressionEnabled.oa.mjs";
import { zimbraHttpConnectorMaxIdleTimeMillis } from "../LdapZimbra/zimbraHttpConnectorMaxIdleTimeMillis.oa.mjs";
import { zimbraHttpContextPathBasedThreadPoolBalancingFilterRules } from "../LdapZimbra/zimbraHttpContextPathBasedThreadPoolBalancingFilterRules.oa.mjs";
import { zimbraHttpDebugHandlerEnabled } from "../LdapZimbra/zimbraHttpDebugHandlerEnabled.oa.mjs";
import { zimbraHttpDosFilterDelayMillis } from "../LdapZimbra/zimbraHttpDosFilterDelayMillis.oa.mjs";
import { zimbraHttpDosFilterMaxRequestsPerSec } from "../LdapZimbra/zimbraHttpDosFilterMaxRequestsPerSec.oa.mjs";
import { zimbraHttpHeaderCacheSize } from "../LdapZimbra/zimbraHttpHeaderCacheSize.oa.mjs";
import { zimbraHttpMaxFormContentSize } from "../LdapZimbra/zimbraHttpMaxFormContentSize.oa.mjs";
import { zimbraHttpNumThreads } from "../LdapZimbra/zimbraHttpNumThreads.oa.mjs";
import { zimbraHttpOutputBufferSize } from "../LdapZimbra/zimbraHttpOutputBufferSize.oa.mjs";
import { zimbraHttpProxyURL } from "../LdapZimbra/zimbraHttpProxyURL.oa.mjs";
import { zimbraHttpRequestHeaderSize } from "../LdapZimbra/zimbraHttpRequestHeaderSize.oa.mjs";
import { zimbraHttpResponseHeaderSize } from "../LdapZimbra/zimbraHttpResponseHeaderSize.oa.mjs";
import { zimbraHttpSSLNumThreads } from "../LdapZimbra/zimbraHttpSSLNumThreads.oa.mjs";
import { zimbraHttpThreadPoolMaxIdleTimeMillis } from "../LdapZimbra/zimbraHttpThreadPoolMaxIdleTimeMillis.oa.mjs";
import { zimbraHttpThrottleSafeIPs } from "../LdapZimbra/zimbraHttpThrottleSafeIPs.oa.mjs";
import { zimbraIPMode } from "../LdapZimbra/zimbraIPMode.oa.mjs";
import { zimbraImapBindOnStartup } from "../LdapZimbra/zimbraImapBindOnStartup.oa.mjs";
import { zimbraImapBindPort } from "../LdapZimbra/zimbraImapBindPort.oa.mjs";
import { zimbraImapCleartextLoginEnabled } from "../LdapZimbra/zimbraImapCleartextLoginEnabled.oa.mjs";
import { zimbraImapDisabledCapability } from "../LdapZimbra/zimbraImapDisabledCapability.oa.mjs";
import { zimbraImapExposeVersionOnBanner } from "../LdapZimbra/zimbraImapExposeVersionOnBanner.oa.mjs";
import { zimbraImapMaxConnections } from "../LdapZimbra/zimbraImapMaxConnections.oa.mjs";
import { zimbraImapMaxRequestSize } from "../LdapZimbra/zimbraImapMaxRequestSize.oa.mjs";
import { zimbraImapNumThreads } from "../LdapZimbra/zimbraImapNumThreads.oa.mjs";
import { zimbraImapProxyBindPort } from "../LdapZimbra/zimbraImapProxyBindPort.oa.mjs";
import { zimbraImapSSLBindOnStartup } from "../LdapZimbra/zimbraImapSSLBindOnStartup.oa.mjs";
import { zimbraImapSSLBindPort } from "../LdapZimbra/zimbraImapSSLBindPort.oa.mjs";
import { zimbraImapSSLDisabledCapability } from "../LdapZimbra/zimbraImapSSLDisabledCapability.oa.mjs";
import { zimbraImapSSLProxyBindPort } from "../LdapZimbra/zimbraImapSSLProxyBindPort.oa.mjs";
import { zimbraImapSSLServerEnabled } from "../LdapZimbra/zimbraImapSSLServerEnabled.oa.mjs";
import { zimbraImapSaslGssapiEnabled } from "../LdapZimbra/zimbraImapSaslGssapiEnabled.oa.mjs";
import { zimbraImapServerEnabled } from "../LdapZimbra/zimbraImapServerEnabled.oa.mjs";
import { zimbraImapShutdownGraceSeconds } from "../LdapZimbra/zimbraImapShutdownGraceSeconds.oa.mjs";
import { zimbraInstalledSkin } from "../LdapZimbra/zimbraInstalledSkin.oa.mjs";
import { zimbraInternalSharingCrossDomainEnabled } from "../LdapZimbra/zimbraInternalSharingCrossDomainEnabled.oa.mjs";
import { zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating } from "../LdapZimbra/zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating.oa.mjs";
import { zimbraInvalidLoginFilterMaxFailedLogin } from "../LdapZimbra/zimbraInvalidLoginFilterMaxFailedLogin.oa.mjs";
import { zimbraInvalidLoginFilterMaxSizeOfFailedIpDb } from "../LdapZimbra/zimbraInvalidLoginFilterMaxSizeOfFailedIpDb.oa.mjs";
import { zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin } from "../LdapZimbra/zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin.oa.mjs";
import { zimbraItemActionBatchSize } from "../LdapZimbra/zimbraItemActionBatchSize.oa.mjs";
import { zimbraLastLogonTimestampFrequency } from "../LdapZimbra/zimbraLastLogonTimestampFrequency.oa.mjs";
import { zimbraLastPurgeMaxDuration } from "../LdapZimbra/zimbraLastPurgeMaxDuration.oa.mjs";
import { zimbraLdapGalSyncDisabled } from "../LdapZimbra/zimbraLdapGalSyncDisabled.oa.mjs";
import { zimbraLmtpBindOnStartup } from "../LdapZimbra/zimbraLmtpBindOnStartup.oa.mjs";
import { zimbraLmtpBindPort } from "../LdapZimbra/zimbraLmtpBindPort.oa.mjs";
import { zimbraLmtpExposeVersionOnBanner } from "../LdapZimbra/zimbraLmtpExposeVersionOnBanner.oa.mjs";
import { zimbraLmtpLHLORequired } from "../LdapZimbra/zimbraLmtpLHLORequired.oa.mjs";
import { zimbraLmtpNumThreads } from "../LdapZimbra/zimbraLmtpNumThreads.oa.mjs";
import { zimbraLmtpPermanentFailureWhenOverQuota } from "../LdapZimbra/zimbraLmtpPermanentFailureWhenOverQuota.oa.mjs";
import { zimbraLmtpServerEnabled } from "../LdapZimbra/zimbraLmtpServerEnabled.oa.mjs";
import { zimbraLmtpShutdownGraceSeconds } from "../LdapZimbra/zimbraLmtpShutdownGraceSeconds.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraLogHostname } from "../LdapZimbra/zimbraLogHostname.oa.mjs";
import { zimbraLogRawLifetime } from "../LdapZimbra/zimbraLogRawLifetime.oa.mjs";
import { zimbraLogSummaryLifetime } from "../LdapZimbra/zimbraLogSummaryLifetime.oa.mjs";
import { zimbraLogToSyslog } from "../LdapZimbra/zimbraLogToSyslog.oa.mjs";
import { zimbraLowestSupportedAuthVersion } from "../LdapZimbra/zimbraLowestSupportedAuthVersion.oa.mjs";
import { zimbraMailAddressValidationRegex } from "../LdapZimbra/zimbraMailAddressValidationRegex.oa.mjs";
import { zimbraMailClearTextPasswordEnabled } from "../LdapZimbra/zimbraMailClearTextPasswordEnabled.oa.mjs";
import { zimbraMailContentMaxSize } from "../LdapZimbra/zimbraMailContentMaxSize.oa.mjs";
import { zimbraMailDiskStreamingThreshold } from "../LdapZimbra/zimbraMailDiskStreamingThreshold.oa.mjs";
import { zimbraMailDomainQuota } from "../LdapZimbra/zimbraMailDomainQuota.oa.mjs";
import { zimbraMailEmptyFolderBatchSize } from "../LdapZimbra/zimbraMailEmptyFolderBatchSize.oa.mjs";
import { zimbraMailEmptyFolderBatchThreshold } from "../LdapZimbra/zimbraMailEmptyFolderBatchThreshold.oa.mjs";
import { zimbraMailFileDescriptorBufferSize } from "../LdapZimbra/zimbraMailFileDescriptorBufferSize.oa.mjs";
import { zimbraMailFileDescriptorCacheSize } from "../LdapZimbra/zimbraMailFileDescriptorCacheSize.oa.mjs";
import { zimbraMailKeepOutWebCrawlers } from "../LdapZimbra/zimbraMailKeepOutWebCrawlers.oa.mjs";
import { zimbraMailMode } from "../LdapZimbra/zimbraMailMode.oa.mjs";
import { zimbraMailPort } from "../LdapZimbra/zimbraMailPort.oa.mjs";
import { zimbraMailProxyMaxFails } from "../LdapZimbra/zimbraMailProxyMaxFails.oa.mjs";
import { zimbraMailProxyPort } from "../LdapZimbra/zimbraMailProxyPort.oa.mjs";
import { zimbraMailProxyReconnectTimeout } from "../LdapZimbra/zimbraMailProxyReconnectTimeout.oa.mjs";
import { zimbraMailPurgeBatchSize } from "../LdapZimbra/zimbraMailPurgeBatchSize.oa.mjs";
import { zimbraMailPurgeSleepInterval } from "../LdapZimbra/zimbraMailPurgeSleepInterval.oa.mjs";
import { zimbraMailPurgeSystemPolicy } from "../LdapZimbra/zimbraMailPurgeSystemPolicy.oa.mjs";
import { zimbraMailRedirectSetEnvelopeSender } from "../LdapZimbra/zimbraMailRedirectSetEnvelopeSender.oa.mjs";
import { zimbraMailReferMode } from "../LdapZimbra/zimbraMailReferMode.oa.mjs";
import { zimbraMailSSLClientCertMode } from "../LdapZimbra/zimbraMailSSLClientCertMode.oa.mjs";
import { zimbraMailSSLClientCertOCSPEnabled } from "../LdapZimbra/zimbraMailSSLClientCertOCSPEnabled.oa.mjs";
import { zimbraMailSSLClientCertPort } from "../LdapZimbra/zimbraMailSSLClientCertPort.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMap } from "../LdapZimbra/zimbraMailSSLClientCertPrincipalMap.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled } from "../LdapZimbra/zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled.oa.mjs";
import { zimbraMailSSLPort } from "../LdapZimbra/zimbraMailSSLPort.oa.mjs";
import { zimbraMailSSLProxyClientCertPort } from "../LdapZimbra/zimbraMailSSLProxyClientCertPort.oa.mjs";
import { zimbraMailSSLProxyPort } from "../LdapZimbra/zimbraMailSSLProxyPort.oa.mjs";
import { zimbraMailTrustedIP } from "../LdapZimbra/zimbraMailTrustedIP.oa.mjs";
import { zimbraMailURL } from "../LdapZimbra/zimbraMailURL.oa.mjs";
import { zimbraMailUncompressedCacheMaxBytes } from "../LdapZimbra/zimbraMailUncompressedCacheMaxBytes.oa.mjs";
import { zimbraMailUncompressedCacheMaxFiles } from "../LdapZimbra/zimbraMailUncompressedCacheMaxFiles.oa.mjs";
import { zimbraMailUseDirectBuffers } from "../LdapZimbra/zimbraMailUseDirectBuffers.oa.mjs";
import { zimbraMailboxMoveSkipBlobs } from "../LdapZimbra/zimbraMailboxMoveSkipBlobs.oa.mjs";
import { zimbraMailboxMoveSkipHsmBlobs } from "../LdapZimbra/zimbraMailboxMoveSkipHsmBlobs.oa.mjs";
import { zimbraMailboxMoveSkipSearchIndex } from "../LdapZimbra/zimbraMailboxMoveSkipSearchIndex.oa.mjs";
import { zimbraMailboxMoveTempDir } from "../LdapZimbra/zimbraMailboxMoveTempDir.oa.mjs";
import { zimbraMailboxdSSLProtocols } from "../LdapZimbra/zimbraMailboxdSSLProtocols.oa.mjs";
import { zimbraMemcachedBindPort } from "../LdapZimbra/zimbraMemcachedBindPort.oa.mjs";
import { zimbraMemcachedClientBinaryProtocolEnabled } from "../LdapZimbra/zimbraMemcachedClientBinaryProtocolEnabled.oa.mjs";
import { zimbraMemcachedClientExpirySeconds } from "../LdapZimbra/zimbraMemcachedClientExpirySeconds.oa.mjs";
import { zimbraMemcachedClientHashAlgorithm } from "../LdapZimbra/zimbraMemcachedClientHashAlgorithm.oa.mjs";
import { zimbraMemcachedClientServerList } from "../LdapZimbra/zimbraMemcachedClientServerList.oa.mjs";
import { zimbraMemcachedClientTimeoutMillis } from "../LdapZimbra/zimbraMemcachedClientTimeoutMillis.oa.mjs";
import { zimbraMessageCacheSize } from "../LdapZimbra/zimbraMessageCacheSize.oa.mjs";
import { zimbraMessageChannelEnabled } from "../LdapZimbra/zimbraMessageChannelEnabled.oa.mjs";
import { zimbraMessageChannelPort } from "../LdapZimbra/zimbraMessageChannelPort.oa.mjs";
import { zimbraMessageIdDedupeCacheSize } from "../LdapZimbra/zimbraMessageIdDedupeCacheSize.oa.mjs";
import { zimbraMessageIdDedupeCacheTimeout } from "../LdapZimbra/zimbraMessageIdDedupeCacheTimeout.oa.mjs";
import { zimbraMilterBindPort } from "../LdapZimbra/zimbraMilterBindPort.oa.mjs";
import { zimbraMilterMaxConnections } from "../LdapZimbra/zimbraMilterMaxConnections.oa.mjs";
import { zimbraMilterNumThreads } from "../LdapZimbra/zimbraMilterNumThreads.oa.mjs";
import { zimbraMilterServerEnabled } from "../LdapZimbra/zimbraMilterServerEnabled.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "../LdapZimbra/zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMaxMessageSize } from "../LdapZimbra/zimbraMobileMaxMessageSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "../LdapZimbra/zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMobileMetadataRetentionPolicy } from "../LdapZimbra/zimbraMobileMetadataRetentionPolicy.oa.mjs";
import { zimbraMtaAddressVerifyNegativeRefreshTime } from "../LdapZimbra/zimbraMtaAddressVerifyNegativeRefreshTime.oa.mjs";
import { zimbraMtaAddressVerifyPollCount } from "../LdapZimbra/zimbraMtaAddressVerifyPollCount.oa.mjs";
import { zimbraMtaAddressVerifyPollDelay } from "../LdapZimbra/zimbraMtaAddressVerifyPollDelay.oa.mjs";
import { zimbraMtaAddressVerifyPositiveRefreshTime } from "../LdapZimbra/zimbraMtaAddressVerifyPositiveRefreshTime.oa.mjs";
import { zimbraMtaAliasMaps } from "../LdapZimbra/zimbraMtaAliasMaps.oa.mjs";
import { zimbraMtaAlwaysAddMissingHeaders } from "../LdapZimbra/zimbraMtaAlwaysAddMissingHeaders.oa.mjs";
import { zimbraMtaAntiSpamLockMethod } from "../LdapZimbra/zimbraMtaAntiSpamLockMethod.oa.mjs";
import { zimbraMtaAuthEnabled } from "../LdapZimbra/zimbraMtaAuthEnabled.oa.mjs";
import { zimbraMtaAuthHost } from "../LdapZimbra/zimbraMtaAuthHost.oa.mjs";
import { zimbraMtaAuthTarget } from "../LdapZimbra/zimbraMtaAuthTarget.oa.mjs";
import { zimbraMtaAuthURL } from "../LdapZimbra/zimbraMtaAuthURL.oa.mjs";
import { zimbraMtaBlockedExtension } from "../LdapZimbra/zimbraMtaBlockedExtension.oa.mjs";
import { zimbraMtaBlockedExtensionWarnAdmin } from "../LdapZimbra/zimbraMtaBlockedExtensionWarnAdmin.oa.mjs";
import { zimbraMtaBlockedExtensionWarnRecipient } from "../LdapZimbra/zimbraMtaBlockedExtensionWarnRecipient.oa.mjs";
import { zimbraMtaBounceNoticeRecipient } from "../LdapZimbra/zimbraMtaBounceNoticeRecipient.oa.mjs";
import { zimbraMtaBounceQueueLifetime } from "../LdapZimbra/zimbraMtaBounceQueueLifetime.oa.mjs";
import { zimbraMtaBrokenSaslAuthClients } from "../LdapZimbra/zimbraMtaBrokenSaslAuthClients.oa.mjs";
import { zimbraMtaCommandDirectory } from "../LdapZimbra/zimbraMtaCommandDirectory.oa.mjs";
import { zimbraMtaCommonBlockedExtension } from "../LdapZimbra/zimbraMtaCommonBlockedExtension.oa.mjs";
import { zimbraMtaDaemonDirectory } from "../LdapZimbra/zimbraMtaDaemonDirectory.oa.mjs";
import { zimbraMtaDefaultProcessLimit } from "../LdapZimbra/zimbraMtaDefaultProcessLimit.oa.mjs";
import { zimbraMtaDelayWarningTime } from "../LdapZimbra/zimbraMtaDelayWarningTime.oa.mjs";
import { zimbraMtaDnsLookupsEnabled } from "../LdapZimbra/zimbraMtaDnsLookupsEnabled.oa.mjs";
import { zimbraMtaEnableSmtpdPolicyd } from "../LdapZimbra/zimbraMtaEnableSmtpdPolicyd.oa.mjs";
import { zimbraMtaFallbackRelayHost } from "../LdapZimbra/zimbraMtaFallbackRelayHost.oa.mjs";
import { zimbraMtaHeaderChecks } from "../LdapZimbra/zimbraMtaHeaderChecks.oa.mjs";
import { zimbraMtaImportEnvironment } from "../LdapZimbra/zimbraMtaImportEnvironment.oa.mjs";
import { zimbraMtaInFlowDelay } from "../LdapZimbra/zimbraMtaInFlowDelay.oa.mjs";
import { zimbraMtaLmdbMapSize } from "../LdapZimbra/zimbraMtaLmdbMapSize.oa.mjs";
import { zimbraMtaLmtpConnectionCacheDestinations } from "../LdapZimbra/zimbraMtaLmtpConnectionCacheDestinations.oa.mjs";
import { zimbraMtaLmtpConnectionCacheTimeLimit } from "../LdapZimbra/zimbraMtaLmtpConnectionCacheTimeLimit.oa.mjs";
import { zimbraMtaLmtpHostLookup } from "../LdapZimbra/zimbraMtaLmtpHostLookup.oa.mjs";
import { zimbraMtaLmtpTlsCAfile } from "../LdapZimbra/zimbraMtaLmtpTlsCAfile.oa.mjs";
import { zimbraMtaLmtpTlsCApath } from "../LdapZimbra/zimbraMtaLmtpTlsCApath.oa.mjs";
import { zimbraMtaLmtpTlsCiphers } from "../LdapZimbra/zimbraMtaLmtpTlsCiphers.oa.mjs";
import { zimbraMtaLmtpTlsExcludeCiphers } from "../LdapZimbra/zimbraMtaLmtpTlsExcludeCiphers.oa.mjs";
import { zimbraMtaLmtpTlsLoglevel } from "../LdapZimbra/zimbraMtaLmtpTlsLoglevel.oa.mjs";
import { zimbraMtaLmtpTlsMandatoryCiphers } from "../LdapZimbra/zimbraMtaLmtpTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaLmtpTlsProtocols } from "../LdapZimbra/zimbraMtaLmtpTlsProtocols.oa.mjs";
import { zimbraMtaLmtpTlsSecurityLevel } from "../LdapZimbra/zimbraMtaLmtpTlsSecurityLevel.oa.mjs";
import { zimbraMtaMailqPath } from "../LdapZimbra/zimbraMtaMailqPath.oa.mjs";
import { zimbraMtaManpageDirectory } from "../LdapZimbra/zimbraMtaManpageDirectory.oa.mjs";
import { zimbraMtaMaxMessageSize } from "../LdapZimbra/zimbraMtaMaxMessageSize.oa.mjs";
import { zimbraMtaMaxUse } from "../LdapZimbra/zimbraMtaMaxUse.oa.mjs";
import { zimbraMtaMaximalBackoffTime } from "../LdapZimbra/zimbraMtaMaximalBackoffTime.oa.mjs";
import { zimbraMtaMilterCommandTimeout } from "../LdapZimbra/zimbraMtaMilterCommandTimeout.oa.mjs";
import { zimbraMtaMilterConnectTimeout } from "../LdapZimbra/zimbraMtaMilterConnectTimeout.oa.mjs";
import { zimbraMtaMilterContentTimeout } from "../LdapZimbra/zimbraMtaMilterContentTimeout.oa.mjs";
import { zimbraMtaMilterDefaultAction } from "../LdapZimbra/zimbraMtaMilterDefaultAction.oa.mjs";
import { zimbraMtaMinimalBackoffTime } from "../LdapZimbra/zimbraMtaMinimalBackoffTime.oa.mjs";
import { zimbraMtaMyDestination } from "../LdapZimbra/zimbraMtaMyDestination.oa.mjs";
import { zimbraMtaMyHostname } from "../LdapZimbra/zimbraMtaMyHostname.oa.mjs";
import { zimbraMtaMyNetworks } from "../LdapZimbra/zimbraMtaMyNetworks.oa.mjs";
import { zimbraMtaMyOrigin } from "../LdapZimbra/zimbraMtaMyOrigin.oa.mjs";
import { zimbraMtaNewaliasesPath } from "../LdapZimbra/zimbraMtaNewaliasesPath.oa.mjs";
import { zimbraMtaNonSmtpdMilters } from "../LdapZimbra/zimbraMtaNonSmtpdMilters.oa.mjs";
import { zimbraMtaNotifyClasses } from "../LdapZimbra/zimbraMtaNotifyClasses.oa.mjs";
import { zimbraMtaPolicyTimeLimit } from "../LdapZimbra/zimbraMtaPolicyTimeLimit.oa.mjs";
import { zimbraMtaPropagateUnmatchedExtensions } from "../LdapZimbra/zimbraMtaPropagateUnmatchedExtensions.oa.mjs";
import { zimbraMtaQueueDirectory } from "../LdapZimbra/zimbraMtaQueueDirectory.oa.mjs";
import { zimbraMtaQueueRunDelay } from "../LdapZimbra/zimbraMtaQueueRunDelay.oa.mjs";
import { zimbraMtaRecipientDelimiter } from "../LdapZimbra/zimbraMtaRecipientDelimiter.oa.mjs";
import { zimbraMtaRelayHost } from "../LdapZimbra/zimbraMtaRelayHost.oa.mjs";
import { zimbraMtaRestriction } from "../LdapZimbra/zimbraMtaRestriction.oa.mjs";
import { zimbraMtaSaslAuthEnable } from "../LdapZimbra/zimbraMtaSaslAuthEnable.oa.mjs";
import { zimbraMtaSaslSmtpdMechList } from "../LdapZimbra/zimbraMtaSaslSmtpdMechList.oa.mjs";
import { zimbraMtaSenderCanonicalMaps } from "../LdapZimbra/zimbraMtaSenderCanonicalMaps.oa.mjs";
import { zimbraMtaSendmailPath } from "../LdapZimbra/zimbraMtaSendmailPath.oa.mjs";
import { zimbraMtaSmtpCnameOverridesServername } from "../LdapZimbra/zimbraMtaSmtpCnameOverridesServername.oa.mjs";
import { zimbraMtaSmtpGenericMaps } from "../LdapZimbra/zimbraMtaSmtpGenericMaps.oa.mjs";
import { zimbraMtaSmtpHeloName } from "../LdapZimbra/zimbraMtaSmtpHeloName.oa.mjs";
import { zimbraMtaSmtpSaslAuthEnable } from "../LdapZimbra/zimbraMtaSmtpSaslAuthEnable.oa.mjs";
import { zimbraMtaSmtpSaslMechanismFilter } from "../LdapZimbra/zimbraMtaSmtpSaslMechanismFilter.oa.mjs";
import { zimbraMtaSmtpSaslPasswordMaps } from "../LdapZimbra/zimbraMtaSmtpSaslPasswordMaps.oa.mjs";
import { zimbraMtaSmtpSaslSecurityOptions } from "../LdapZimbra/zimbraMtaSmtpSaslSecurityOptions.oa.mjs";
import { zimbraMtaSmtpTlsCAfile } from "../LdapZimbra/zimbraMtaSmtpTlsCAfile.oa.mjs";
import { zimbraMtaSmtpTlsCApath } from "../LdapZimbra/zimbraMtaSmtpTlsCApath.oa.mjs";
import { zimbraMtaSmtpTlsCiphers } from "../LdapZimbra/zimbraMtaSmtpTlsCiphers.oa.mjs";
import { zimbraMtaSmtpTlsLoglevel } from "../LdapZimbra/zimbraMtaSmtpTlsLoglevel.oa.mjs";
import { zimbraMtaSmtpTlsMandatoryCiphers } from "../LdapZimbra/zimbraMtaSmtpTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaSmtpTlsProtocols } from "../LdapZimbra/zimbraMtaSmtpTlsProtocols.oa.mjs";
import { zimbraMtaSmtpTlsSecurityLevel } from "../LdapZimbra/zimbraMtaSmtpTlsSecurityLevel.oa.mjs";
import { zimbraMtaSmtpdBanner } from "../LdapZimbra/zimbraMtaSmtpdBanner.oa.mjs";
import { zimbraMtaSmtpdClientPortLogging } from "../LdapZimbra/zimbraMtaSmtpdClientPortLogging.oa.mjs";
import { zimbraMtaSmtpdClientRestrictions } from "../LdapZimbra/zimbraMtaSmtpdClientRestrictions.oa.mjs";
import { zimbraMtaSmtpdDataRestrictions } from "../LdapZimbra/zimbraMtaSmtpdDataRestrictions.oa.mjs";
import { zimbraMtaSmtpdErrorSleepTime } from "../LdapZimbra/zimbraMtaSmtpdErrorSleepTime.oa.mjs";
import { zimbraMtaSmtpdHardErrorLimit } from "../LdapZimbra/zimbraMtaSmtpdHardErrorLimit.oa.mjs";
import { zimbraMtaSmtpdHeloRequired } from "../LdapZimbra/zimbraMtaSmtpdHeloRequired.oa.mjs";
import { zimbraMtaSmtpdMilters } from "../LdapZimbra/zimbraMtaSmtpdMilters.oa.mjs";
import { zimbraMtaSmtpdProxyTimeout } from "../LdapZimbra/zimbraMtaSmtpdProxyTimeout.oa.mjs";
import { zimbraMtaSmtpdRejectUnlistedRecipient } from "../LdapZimbra/zimbraMtaSmtpdRejectUnlistedRecipient.oa.mjs";
import { zimbraMtaSmtpdRejectUnlistedSender } from "../LdapZimbra/zimbraMtaSmtpdRejectUnlistedSender.oa.mjs";
import { zimbraMtaSmtpdSaslAuthenticatedHeader } from "../LdapZimbra/zimbraMtaSmtpdSaslAuthenticatedHeader.oa.mjs";
import { zimbraMtaSmtpdSaslSecurityOptions } from "../LdapZimbra/zimbraMtaSmtpdSaslSecurityOptions.oa.mjs";
import { zimbraMtaSmtpdSaslTlsSecurityOptions } from "../LdapZimbra/zimbraMtaSmtpdSaslTlsSecurityOptions.oa.mjs";
import { zimbraMtaSmtpdSenderLoginMaps } from "../LdapZimbra/zimbraMtaSmtpdSenderLoginMaps.oa.mjs";
import { zimbraMtaSmtpdSenderRestrictions } from "../LdapZimbra/zimbraMtaSmtpdSenderRestrictions.oa.mjs";
import { zimbraMtaSmtpdTlsAskCcert } from "../LdapZimbra/zimbraMtaSmtpdTlsAskCcert.oa.mjs";
import { zimbraMtaSmtpdTlsCAfile } from "../LdapZimbra/zimbraMtaSmtpdTlsCAfile.oa.mjs";
import { zimbraMtaSmtpdTlsCApath } from "../LdapZimbra/zimbraMtaSmtpdTlsCApath.oa.mjs";
import { zimbraMtaSmtpdTlsCcertVerifydepth } from "../LdapZimbra/zimbraMtaSmtpdTlsCcertVerifydepth.oa.mjs";
import { zimbraMtaSmtpdTlsCiphers } from "../LdapZimbra/zimbraMtaSmtpdTlsCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsExcludeCiphers } from "../LdapZimbra/zimbraMtaSmtpdTlsExcludeCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsLoglevel } from "../LdapZimbra/zimbraMtaSmtpdTlsLoglevel.oa.mjs";
import { zimbraMtaSmtpdTlsMandatoryCiphers } from "../LdapZimbra/zimbraMtaSmtpdTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsProtocols } from "../LdapZimbra/zimbraMtaSmtpdTlsProtocols.oa.mjs";
import { zimbraMtaSmtpdVirtualTransport } from "../LdapZimbra/zimbraMtaSmtpdVirtualTransport.oa.mjs";
import { zimbraMtaStpdSoftErrorLimit } from "../LdapZimbra/zimbraMtaStpdSoftErrorLimit.oa.mjs";
import { zimbraMtaTlsAppendDefaultCA } from "../LdapZimbra/zimbraMtaTlsAppendDefaultCA.oa.mjs";
import { zimbraMtaTlsAuthOnly } from "../LdapZimbra/zimbraMtaTlsAuthOnly.oa.mjs";
import { zimbraMtaTlsSecurityLevel } from "../LdapZimbra/zimbraMtaTlsSecurityLevel.oa.mjs";
import { zimbraMtaTransportMaps } from "../LdapZimbra/zimbraMtaTransportMaps.oa.mjs";
import { zimbraMtaUnverifiedRecipientDeferCode } from "../LdapZimbra/zimbraMtaUnverifiedRecipientDeferCode.oa.mjs";
import { zimbraMtaVirtualAliasDomains } from "../LdapZimbra/zimbraMtaVirtualAliasDomains.oa.mjs";
import { zimbraMtaVirtualAliasExpansionLimit } from "../LdapZimbra/zimbraMtaVirtualAliasExpansionLimit.oa.mjs";
import { zimbraMtaVirtualAliasMaps } from "../LdapZimbra/zimbraMtaVirtualAliasMaps.oa.mjs";
import { zimbraMtaVirtualMailboxDomains } from "../LdapZimbra/zimbraMtaVirtualMailboxDomains.oa.mjs";
import { zimbraMtaVirtualMailboxMaps } from "../LdapZimbra/zimbraMtaVirtualMailboxMaps.oa.mjs";
import { zimbraMyoneloginSamlSigningCert } from "../LdapZimbra/zimbraMyoneloginSamlSigningCert.oa.mjs";
import { zimbraNetworkActivation } from "../LdapZimbra/zimbraNetworkActivation.oa.mjs";
import { zimbraNetworkLicense } from "../LdapZimbra/zimbraNetworkLicense.oa.mjs";
import { zimbraNotebookAccount } from "../LdapZimbra/zimbraNotebookAccount.oa.mjs";
import { zimbraNotebookFolderCacheSize } from "../LdapZimbra/zimbraNotebookFolderCacheSize.oa.mjs";
import { zimbraNotebookMaxCachedTemplatesPerFolder } from "../LdapZimbra/zimbraNotebookMaxCachedTemplatesPerFolder.oa.mjs";
import { zimbraNotebookPageCacheSize } from "../LdapZimbra/zimbraNotebookPageCacheSize.oa.mjs";
import { zimbraNotifyBindAddress } from "../LdapZimbra/zimbraNotifyBindAddress.oa.mjs";
import { zimbraNotifyBindPort } from "../LdapZimbra/zimbraNotifyBindPort.oa.mjs";
import { zimbraNotifySSLBindAddress } from "../LdapZimbra/zimbraNotifySSLBindAddress.oa.mjs";
import { zimbraNotifySSLBindPort } from "../LdapZimbra/zimbraNotifySSLBindPort.oa.mjs";
import { zimbraNotifySSLServerEnabled } from "../LdapZimbra/zimbraNotifySSLServerEnabled.oa.mjs";
import { zimbraNotifyServerEnabled } from "../LdapZimbra/zimbraNotifyServerEnabled.oa.mjs";
import { zimbraOAuthConsumerCredentials } from "../LdapZimbra/zimbraOAuthConsumerCredentials.oa.mjs";
import { zimbraOpenidConsumerAllowedOPEndpointURL } from "../LdapZimbra/zimbraOpenidConsumerAllowedOPEndpointURL.oa.mjs";
import { zimbraOpenidConsumerStatelessModeEnabled } from "../LdapZimbra/zimbraOpenidConsumerStatelessModeEnabled.oa.mjs";
import { zimbraPasswordChangeListener } from "../LdapZimbra/zimbraPasswordChangeListener.oa.mjs";
import { zimbraPop3BindOnStartup } from "../LdapZimbra/zimbraPop3BindOnStartup.oa.mjs";
import { zimbraPop3BindPort } from "../LdapZimbra/zimbraPop3BindPort.oa.mjs";
import { zimbraPop3CleartextLoginEnabled } from "../LdapZimbra/zimbraPop3CleartextLoginEnabled.oa.mjs";
import { zimbraPop3ExposeVersionOnBanner } from "../LdapZimbra/zimbraPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraPop3MaxConnections } from "../LdapZimbra/zimbraPop3MaxConnections.oa.mjs";
import { zimbraPop3NumThreads } from "../LdapZimbra/zimbraPop3NumThreads.oa.mjs";
import { zimbraPop3ProxyBindPort } from "../LdapZimbra/zimbraPop3ProxyBindPort.oa.mjs";
import { zimbraPop3SSLBindOnStartup } from "../LdapZimbra/zimbraPop3SSLBindOnStartup.oa.mjs";
import { zimbraPop3SSLBindPort } from "../LdapZimbra/zimbraPop3SSLBindPort.oa.mjs";
import { zimbraPop3SSLProxyBindPort } from "../LdapZimbra/zimbraPop3SSLProxyBindPort.oa.mjs";
import { zimbraPop3SSLServerEnabled } from "../LdapZimbra/zimbraPop3SSLServerEnabled.oa.mjs";
import { zimbraPop3SaslGssapiEnabled } from "../LdapZimbra/zimbraPop3SaslGssapiEnabled.oa.mjs";
import { zimbraPop3ServerEnabled } from "../LdapZimbra/zimbraPop3ServerEnabled.oa.mjs";
import { zimbraPop3ShutdownGraceSeconds } from "../LdapZimbra/zimbraPop3ShutdownGraceSeconds.oa.mjs";
import { zimbraPrevFoldersToTrackMax } from "../LdapZimbra/zimbraPrevFoldersToTrackMax.oa.mjs";
import { zimbraProduct } from "../LdapZimbra/zimbraProduct.oa.mjs";
import { zimbraPublicServiceHostname } from "../LdapZimbra/zimbraPublicServiceHostname.oa.mjs";
import { zimbraPublicServicePort } from "../LdapZimbra/zimbraPublicServicePort.oa.mjs";
import { zimbraPublicServiceProtocol } from "../LdapZimbra/zimbraPublicServiceProtocol.oa.mjs";
import { zimbraRedoLogArchiveDir } from "../LdapZimbra/zimbraRedoLogArchiveDir.oa.mjs";
import { zimbraRedoLogCrashRecoveryLookbackSec } from "../LdapZimbra/zimbraRedoLogCrashRecoveryLookbackSec.oa.mjs";
import { zimbraRedoLogDeleteOnRollover } from "../LdapZimbra/zimbraRedoLogDeleteOnRollover.oa.mjs";
import { zimbraRedoLogEnabled } from "../LdapZimbra/zimbraRedoLogEnabled.oa.mjs";
import { zimbraRedoLogFsyncIntervalMS } from "../LdapZimbra/zimbraRedoLogFsyncIntervalMS.oa.mjs";
import { zimbraRedoLogLogPath } from "../LdapZimbra/zimbraRedoLogLogPath.oa.mjs";
import { zimbraRedoLogProvider } from "../LdapZimbra/zimbraRedoLogProvider.oa.mjs";
import { zimbraRedoLogRolloverFileSizeKB } from "../LdapZimbra/zimbraRedoLogRolloverFileSizeKB.oa.mjs";
import { zimbraRedoLogRolloverHardMaxFileSizeKB } from "../LdapZimbra/zimbraRedoLogRolloverHardMaxFileSizeKB.oa.mjs";
import { zimbraRedoLogRolloverMinFileAge } from "../LdapZimbra/zimbraRedoLogRolloverMinFileAge.oa.mjs";
import { zimbraRegexMaxAccessesWhenMatching } from "../LdapZimbra/zimbraRegexMaxAccessesWhenMatching.oa.mjs";
import { zimbraRemoteManagementCommand } from "../LdapZimbra/zimbraRemoteManagementCommand.oa.mjs";
import { zimbraRemoteManagementPort } from "../LdapZimbra/zimbraRemoteManagementPort.oa.mjs";
import { zimbraRemoteManagementPrivateKeyPath } from "../LdapZimbra/zimbraRemoteManagementPrivateKeyPath.oa.mjs";
import { zimbraRemoteManagementUser } from "../LdapZimbra/zimbraRemoteManagementUser.oa.mjs";
import { zimbraResponseHeader } from "../LdapZimbra/zimbraResponseHeader.oa.mjs";
import { zimbraReverseProxyAcceptMutex } from "../LdapZimbra/zimbraReverseProxyAcceptMutex.oa.mjs";
import { zimbraReverseProxyAdminEnabled } from "../LdapZimbra/zimbraReverseProxyAdminEnabled.oa.mjs";
import { zimbraReverseProxyAdminIPAddress } from "../LdapZimbra/zimbraReverseProxyAdminIPAddress.oa.mjs";
import { zimbraReverseProxyAdminPortAttribute } from "../LdapZimbra/zimbraReverseProxyAdminPortAttribute.oa.mjs";
import { zimbraReverseProxyAuthWaitInterval } from "../LdapZimbra/zimbraReverseProxyAuthWaitInterval.oa.mjs";
import { zimbraReverseProxyAvailableLookupTargets } from "../LdapZimbra/zimbraReverseProxyAvailableLookupTargets.oa.mjs";
import { zimbraReverseProxyCacheEntryTTL } from "../LdapZimbra/zimbraReverseProxyCacheEntryTTL.oa.mjs";
import { zimbraReverseProxyCacheFetchTimeout } from "../LdapZimbra/zimbraReverseProxyCacheFetchTimeout.oa.mjs";
import { zimbraReverseProxyCacheReconnectInterval } from "../LdapZimbra/zimbraReverseProxyCacheReconnectInterval.oa.mjs";
import { zimbraReverseProxyClientCertCA } from "../LdapZimbra/zimbraReverseProxyClientCertCA.oa.mjs";
import { zimbraReverseProxyClientCertMode } from "../LdapZimbra/zimbraReverseProxyClientCertMode.oa.mjs";
import { zimbraReverseProxyConnectTimeout } from "../LdapZimbra/zimbraReverseProxyConnectTimeout.oa.mjs";
import { zimbraReverseProxyDefaultRealm } from "../LdapZimbra/zimbraReverseProxyDefaultRealm.oa.mjs";
import { zimbraReverseProxyDnsLookupInServerEnabled } from "../LdapZimbra/zimbraReverseProxyDnsLookupInServerEnabled.oa.mjs";
import { zimbraReverseProxyDomainNameAttribute } from "../LdapZimbra/zimbraReverseProxyDomainNameAttribute.oa.mjs";
import { zimbraReverseProxyDomainNameQuery } from "../LdapZimbra/zimbraReverseProxyDomainNameQuery.oa.mjs";
import { zimbraReverseProxyDomainNameSearchBase } from "../LdapZimbra/zimbraReverseProxyDomainNameSearchBase.oa.mjs";
import { zimbraReverseProxyErrorHandlerURL } from "../LdapZimbra/zimbraReverseProxyErrorHandlerURL.oa.mjs";
import { zimbraReverseProxyExactServerVersionCheck } from "../LdapZimbra/zimbraReverseProxyExactServerVersionCheck.oa.mjs";
import { zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "../LdapZimbra/zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.oa.mjs";
import { zimbraReverseProxyGenConfigPerVirtualHostname } from "../LdapZimbra/zimbraReverseProxyGenConfigPerVirtualHostname.oa.mjs";
import { zimbraReverseProxyHttpEnabled } from "../LdapZimbra/zimbraReverseProxyHttpEnabled.oa.mjs";
import { zimbraReverseProxyHttpPortAttribute } from "../LdapZimbra/zimbraReverseProxyHttpPortAttribute.oa.mjs";
import { zimbraReverseProxyHttpSSLPortAttribute } from "../LdapZimbra/zimbraReverseProxyHttpSSLPortAttribute.oa.mjs";
import { zimbraReverseProxyIPLoginLimit } from "../LdapZimbra/zimbraReverseProxyIPLoginLimit.oa.mjs";
import { zimbraReverseProxyIPLoginLimitTime } from "../LdapZimbra/zimbraReverseProxyIPLoginLimitTime.oa.mjs";
import { zimbraReverseProxyImapEnabledCapability } from "../LdapZimbra/zimbraReverseProxyImapEnabledCapability.oa.mjs";
import { zimbraReverseProxyImapExposeVersionOnBanner } from "../LdapZimbra/zimbraReverseProxyImapExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyImapPortAttribute } from "../LdapZimbra/zimbraReverseProxyImapPortAttribute.oa.mjs";
import { zimbraReverseProxyImapSSLPortAttribute } from "../LdapZimbra/zimbraReverseProxyImapSSLPortAttribute.oa.mjs";
import { zimbraReverseProxyImapSaslGssapiEnabled } from "../LdapZimbra/zimbraReverseProxyImapSaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyImapSaslPlainEnabled } from "../LdapZimbra/zimbraReverseProxyImapSaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyImapStartTlsMode } from "../LdapZimbra/zimbraReverseProxyImapStartTlsMode.oa.mjs";
import { zimbraReverseProxyInactivityTimeout } from "../LdapZimbra/zimbraReverseProxyInactivityTimeout.oa.mjs";
import { zimbraReverseProxyIpThrottleMsg } from "../LdapZimbra/zimbraReverseProxyIpThrottleMsg.oa.mjs";
import { zimbraReverseProxyLogLevel } from "../LdapZimbra/zimbraReverseProxyLogLevel.oa.mjs";
import { zimbraReverseProxyLookupTarget } from "../LdapZimbra/zimbraReverseProxyLookupTarget.oa.mjs";
import { zimbraReverseProxyMailEnabled } from "../LdapZimbra/zimbraReverseProxyMailEnabled.oa.mjs";
import { zimbraReverseProxyMailHostAttribute } from "../LdapZimbra/zimbraReverseProxyMailHostAttribute.oa.mjs";
import { zimbraReverseProxyMailHostQuery } from "../LdapZimbra/zimbraReverseProxyMailHostQuery.oa.mjs";
import { zimbraReverseProxyMailHostSearchBase } from "../LdapZimbra/zimbraReverseProxyMailHostSearchBase.oa.mjs";
import { zimbraReverseProxyMailImapEnabled } from "../LdapZimbra/zimbraReverseProxyMailImapEnabled.oa.mjs";
import { zimbraReverseProxyMailImapsEnabled } from "../LdapZimbra/zimbraReverseProxyMailImapsEnabled.oa.mjs";
import { zimbraReverseProxyMailMode } from "../LdapZimbra/zimbraReverseProxyMailMode.oa.mjs";
import { zimbraReverseProxyMailPop3Enabled } from "../LdapZimbra/zimbraReverseProxyMailPop3Enabled.oa.mjs";
import { zimbraReverseProxyMailPop3sEnabled } from "../LdapZimbra/zimbraReverseProxyMailPop3sEnabled.oa.mjs";
import { zimbraReverseProxyPassErrors } from "../LdapZimbra/zimbraReverseProxyPassErrors.oa.mjs";
import { zimbraReverseProxyPop3EnabledCapability } from "../LdapZimbra/zimbraReverseProxyPop3EnabledCapability.oa.mjs";
import { zimbraReverseProxyPop3ExposeVersionOnBanner } from "../LdapZimbra/zimbraReverseProxyPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyPop3PortAttribute } from "../LdapZimbra/zimbraReverseProxyPop3PortAttribute.oa.mjs";
import { zimbraReverseProxyPop3SSLPortAttribute } from "../LdapZimbra/zimbraReverseProxyPop3SSLPortAttribute.oa.mjs";
import { zimbraReverseProxyPop3SaslGssapiEnabled } from "../LdapZimbra/zimbraReverseProxyPop3SaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyPop3SaslPlainEnabled } from "../LdapZimbra/zimbraReverseProxyPop3SaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyPop3StartTlsMode } from "../LdapZimbra/zimbraReverseProxyPop3StartTlsMode.oa.mjs";
import { zimbraReverseProxyPortQuery } from "../LdapZimbra/zimbraReverseProxyPortQuery.oa.mjs";
import { zimbraReverseProxyPortSearchBase } from "../LdapZimbra/zimbraReverseProxyPortSearchBase.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeout } from "../LdapZimbra/zimbraReverseProxyRouteLookupTimeout.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeoutCache } from "../LdapZimbra/zimbraReverseProxyRouteLookupTimeoutCache.oa.mjs";
import { zimbraReverseProxySSLCiphers } from "../LdapZimbra/zimbraReverseProxySSLCiphers.oa.mjs";
import { zimbraReverseProxySSLECDHCurve } from "../LdapZimbra/zimbraReverseProxySSLECDHCurve.oa.mjs";
import { zimbraReverseProxySSLProtocols } from "../LdapZimbra/zimbraReverseProxySSLProtocols.oa.mjs";
import { zimbraReverseProxySSLToUpstreamEnabled } from "../LdapZimbra/zimbraReverseProxySSLToUpstreamEnabled.oa.mjs";
import { zimbraReverseProxySendImapId } from "../LdapZimbra/zimbraReverseProxySendImapId.oa.mjs";
import { zimbraReverseProxySendPop3Xoip } from "../LdapZimbra/zimbraReverseProxySendPop3Xoip.oa.mjs";
import { zimbraReverseProxyUpstreamConnectTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamConnectTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamEwsServers } from "../LdapZimbra/zimbraReverseProxyUpstreamEwsServers.oa.mjs";
import { zimbraReverseProxyUpstreamLoginServers } from "../LdapZimbra/zimbraReverseProxyUpstreamLoginServers.oa.mjs";
import { zimbraReverseProxyUpstreamPollingTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamPollingTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamReadTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamReadTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamSendTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamSendTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamServers } from "../LdapZimbra/zimbraReverseProxyUpstreamServers.oa.mjs";
import { zimbraReverseProxyUserLoginLimit } from "../LdapZimbra/zimbraReverseProxyUserLoginLimit.oa.mjs";
import { zimbraReverseProxyUserLoginLimitTime } from "../LdapZimbra/zimbraReverseProxyUserLoginLimitTime.oa.mjs";
import { zimbraReverseProxyUserNameAttribute } from "../LdapZimbra/zimbraReverseProxyUserNameAttribute.oa.mjs";
import { zimbraReverseProxyUserThrottleMsg } from "../LdapZimbra/zimbraReverseProxyUserThrottleMsg.oa.mjs";
import { zimbraReverseProxyWorkerConnections } from "../LdapZimbra/zimbraReverseProxyWorkerConnections.oa.mjs";
import { zimbraReverseProxyWorkerProcesses } from "../LdapZimbra/zimbraReverseProxyWorkerProcesses.oa.mjs";
import { zimbraSMIMELdapAttribute } from "../LdapZimbra/zimbraSMIMELdapAttribute.oa.mjs";
import { zimbraSMIMELdapBindDn } from "../LdapZimbra/zimbraSMIMELdapBindDn.oa.mjs";
import { zimbraSMIMELdapBindPassword } from "../LdapZimbra/zimbraSMIMELdapBindPassword.oa.mjs";
import { zimbraSMIMELdapDiscoverSearchBaseEnabled } from "../LdapZimbra/zimbraSMIMELdapDiscoverSearchBaseEnabled.oa.mjs";
import { zimbraSMIMELdapFilter } from "../LdapZimbra/zimbraSMIMELdapFilter.oa.mjs";
import { zimbraSMIMELdapSearchBase } from "../LdapZimbra/zimbraSMIMELdapSearchBase.oa.mjs";
import { zimbraSMIMELdapStartTlsEnabled } from "../LdapZimbra/zimbraSMIMELdapStartTlsEnabled.oa.mjs";
import { zimbraSMIMELdapURL } from "../LdapZimbra/zimbraSMIMELdapURL.oa.mjs";
import { zimbraSSLCertificate } from "../LdapZimbra/zimbraSSLCertificate.oa.mjs";
import { zimbraSSLExcludeCipherSuites } from "../LdapZimbra/zimbraSSLExcludeCipherSuites.oa.mjs";
import { zimbraSSLIncludeCipherSuites } from "../LdapZimbra/zimbraSSLIncludeCipherSuites.oa.mjs";
import { zimbraSSLPrivateKey } from "../LdapZimbra/zimbraSSLPrivateKey.oa.mjs";
import { zimbraSaslGssapiRequiresTls } from "../LdapZimbra/zimbraSaslGssapiRequiresTls.oa.mjs";
import { zimbraScheduledTaskNumThreads } from "../LdapZimbra/zimbraScheduledTaskNumThreads.oa.mjs";
import { zimbraServerExtraObjectClass } from "../LdapZimbra/zimbraServerExtraObjectClass.oa.mjs";
import { zimbraServerInheritedAttr } from "../LdapZimbra/zimbraServerInheritedAttr.oa.mjs";
import { zimbraShareNotificationMtaAuthAccount } from "../LdapZimbra/zimbraShareNotificationMtaAuthAccount.oa.mjs";
import { zimbraShareNotificationMtaAuthPassword } from "../LdapZimbra/zimbraShareNotificationMtaAuthPassword.oa.mjs";
import { zimbraShareNotificationMtaAuthRequired } from "../LdapZimbra/zimbraShareNotificationMtaAuthRequired.oa.mjs";
import { zimbraShareNotificationMtaConnectionType } from "../LdapZimbra/zimbraShareNotificationMtaConnectionType.oa.mjs";
import { zimbraShareNotificationMtaEnabled } from "../LdapZimbra/zimbraShareNotificationMtaEnabled.oa.mjs";
import { zimbraShareNotificationMtaHostname } from "../LdapZimbra/zimbraShareNotificationMtaHostname.oa.mjs";
import { zimbraShareNotificationMtaPort } from "../LdapZimbra/zimbraShareNotificationMtaPort.oa.mjs";
import { zimbraSharingUpdatePublishInterval } from "../LdapZimbra/zimbraSharingUpdatePublishInterval.oa.mjs";
import { zimbraSkinBackgroundColor } from "../LdapZimbra/zimbraSkinBackgroundColor.oa.mjs";
import { zimbraSkinFavicon } from "../LdapZimbra/zimbraSkinFavicon.oa.mjs";
import { zimbraSkinForegroundColor } from "../LdapZimbra/zimbraSkinForegroundColor.oa.mjs";
import { zimbraSkinLogoAppBanner } from "../LdapZimbra/zimbraSkinLogoAppBanner.oa.mjs";
import { zimbraSkinLogoLoginBanner } from "../LdapZimbra/zimbraSkinLogoLoginBanner.oa.mjs";
import { zimbraSkinLogoURL } from "../LdapZimbra/zimbraSkinLogoURL.oa.mjs";
import { zimbraSkinSecondaryColor } from "../LdapZimbra/zimbraSkinSecondaryColor.oa.mjs";
import { zimbraSkinSelectionColor } from "../LdapZimbra/zimbraSkinSelectionColor.oa.mjs";
import { zimbraSmtpHostname } from "../LdapZimbra/zimbraSmtpHostname.oa.mjs";
import { zimbraSmtpPort } from "../LdapZimbra/zimbraSmtpPort.oa.mjs";
import { zimbraSmtpSendAddAuthenticatedUser } from "../LdapZimbra/zimbraSmtpSendAddAuthenticatedUser.oa.mjs";
import { zimbraSmtpSendAddMailer } from "../LdapZimbra/zimbraSmtpSendAddMailer.oa.mjs";
import { zimbraSmtpSendAddOriginatingIP } from "../LdapZimbra/zimbraSmtpSendAddOriginatingIP.oa.mjs";
import { zimbraSmtpSendPartial } from "../LdapZimbra/zimbraSmtpSendPartial.oa.mjs";
import { zimbraSmtpTimeout } from "../LdapZimbra/zimbraSmtpTimeout.oa.mjs";
import { zimbraSoapExposeVersion } from "../LdapZimbra/zimbraSoapExposeVersion.oa.mjs";
import { zimbraSoapRequestMaxSize } from "../LdapZimbra/zimbraSoapRequestMaxSize.oa.mjs";
import { zimbraSpamCheckEnabled } from "../LdapZimbra/zimbraSpamCheckEnabled.oa.mjs";
import { zimbraSpamHeader } from "../LdapZimbra/zimbraSpamHeader.oa.mjs";
import { zimbraSpamHeaderValue } from "../LdapZimbra/zimbraSpamHeaderValue.oa.mjs";
import { zimbraSpamIsNotSpamAccount } from "../LdapZimbra/zimbraSpamIsNotSpamAccount.oa.mjs";
import { zimbraSpamIsSpamAccount } from "../LdapZimbra/zimbraSpamIsSpamAccount.oa.mjs";
import { zimbraSpamKillPercent } from "../LdapZimbra/zimbraSpamKillPercent.oa.mjs";
import { zimbraSpamReportEnvelopeFrom } from "../LdapZimbra/zimbraSpamReportEnvelopeFrom.oa.mjs";
import { zimbraSpamReportSenderHeader } from "../LdapZimbra/zimbraSpamReportSenderHeader.oa.mjs";
import { zimbraSpamReportTypeHam } from "../LdapZimbra/zimbraSpamReportTypeHam.oa.mjs";
import { zimbraSpamReportTypeHeader } from "../LdapZimbra/zimbraSpamReportTypeHeader.oa.mjs";
import { zimbraSpamReportTypeSpam } from "../LdapZimbra/zimbraSpamReportTypeSpam.oa.mjs";
import { zimbraSpamSubjectTag } from "../LdapZimbra/zimbraSpamSubjectTag.oa.mjs";
import { zimbraSpamTagPercent } from "../LdapZimbra/zimbraSpamTagPercent.oa.mjs";
import { zimbraSpamTrashAlias } from "../LdapZimbra/zimbraSpamTrashAlias.oa.mjs";
import { zimbraSpamWhitelistHeader } from "../LdapZimbra/zimbraSpamWhitelistHeader.oa.mjs";
import { zimbraSpamWhitelistHeaderValue } from "../LdapZimbra/zimbraSpamWhitelistHeaderValue.oa.mjs";
import { zimbraSpellAvailableDictionary } from "../LdapZimbra/zimbraSpellAvailableDictionary.oa.mjs";
import { zimbraSpellCheckURL } from "../LdapZimbra/zimbraSpellCheckURL.oa.mjs";
import { zimbraSpnegoAuthEnabled } from "../LdapZimbra/zimbraSpnegoAuthEnabled.oa.mjs";
import { zimbraSpnegoAuthErrorURL } from "../LdapZimbra/zimbraSpnegoAuthErrorURL.oa.mjs";
import { zimbraSpnegoAuthRealm } from "../LdapZimbra/zimbraSpnegoAuthRealm.oa.mjs";
import { zimbraSslCaCert } from "../LdapZimbra/zimbraSslCaCert.oa.mjs";
import { zimbraSslCaKey } from "../LdapZimbra/zimbraSslCaKey.oa.mjs";
import { zimbraStatThreadNamePrefix } from "../LdapZimbra/zimbraStatThreadNamePrefix.oa.mjs";
import { zimbraTableMaintenanceGrowthFactor } from "../LdapZimbra/zimbraTableMaintenanceGrowthFactor.oa.mjs";
import { zimbraTableMaintenanceMaxRows } from "../LdapZimbra/zimbraTableMaintenanceMaxRows.oa.mjs";
import { zimbraTableMaintenanceMinRows } from "../LdapZimbra/zimbraTableMaintenanceMinRows.oa.mjs";
import { zimbraTableMaintenanceOperation } from "../LdapZimbra/zimbraTableMaintenanceOperation.oa.mjs";
import { zimbraThreadMonitorEnabled } from "../LdapZimbra/zimbraThreadMonitorEnabled.oa.mjs";
import { zimbraThrottleSafeHosts } from "../LdapZimbra/zimbraThrottleSafeHosts.oa.mjs";
import { zimbraThrottleWhitelist } from "../LdapZimbra/zimbraThrottleWhitelist.oa.mjs";
import { zimbraUCProviderEnabled } from "../LdapZimbra/zimbraUCProviderEnabled.oa.mjs";
import { zimbraVersionCheckInterval } from "../LdapZimbra/zimbraVersionCheckInterval.oa.mjs";
import { zimbraVersionCheckLastAttempt } from "../LdapZimbra/zimbraVersionCheckLastAttempt.oa.mjs";
import { zimbraVersionCheckLastResponse } from "../LdapZimbra/zimbraVersionCheckLastResponse.oa.mjs";
import { zimbraVersionCheckLastSuccess } from "../LdapZimbra/zimbraVersionCheckLastSuccess.oa.mjs";
import { zimbraVersionCheckNotificationBody } from "../LdapZimbra/zimbraVersionCheckNotificationBody.oa.mjs";
import { zimbraVersionCheckNotificationEmail } from "../LdapZimbra/zimbraVersionCheckNotificationEmail.oa.mjs";
import { zimbraVersionCheckNotificationEmailFrom } from "../LdapZimbra/zimbraVersionCheckNotificationEmailFrom.oa.mjs";
import { zimbraVersionCheckNotificationSubject } from "../LdapZimbra/zimbraVersionCheckNotificationSubject.oa.mjs";
import { zimbraVersionCheckSendNotifications } from "../LdapZimbra/zimbraVersionCheckSendNotifications.oa.mjs";
import { zimbraVersionCheckServer } from "../LdapZimbra/zimbraVersionCheckServer.oa.mjs";
import { zimbraVersionCheckURL } from "../LdapZimbra/zimbraVersionCheckURL.oa.mjs";
import { zimbraVirusBlockEncryptedArchive } from "../LdapZimbra/zimbraVirusBlockEncryptedArchive.oa.mjs";
import { zimbraVirusCheckEnabled } from "../LdapZimbra/zimbraVirusCheckEnabled.oa.mjs";
import { zimbraVirusDefinitionsUpdateFrequency } from "../LdapZimbra/zimbraVirusDefinitionsUpdateFrequency.oa.mjs";
import { zimbraVirusWarnAdmin } from "../LdapZimbra/zimbraVirusWarnAdmin.oa.mjs";
import { zimbraVirusWarnRecipient } from "../LdapZimbra/zimbraVirusWarnRecipient.oa.mjs";
import { zimbraWebClientAdminReference } from "../LdapZimbra/zimbraWebClientAdminReference.oa.mjs";
import { zimbraWebClientLoginURL } from "../LdapZimbra/zimbraWebClientLoginURL.oa.mjs";
import { zimbraWebClientLoginURLAllowedIP } from "../LdapZimbra/zimbraWebClientLoginURLAllowedIP.oa.mjs";
import { zimbraWebClientLoginURLAllowedUA } from "../LdapZimbra/zimbraWebClientLoginURLAllowedUA.oa.mjs";
import { zimbraWebClientLogoutURL } from "../LdapZimbra/zimbraWebClientLogoutURL.oa.mjs";
import { zimbraWebClientLogoutURLAllowedIP } from "../LdapZimbra/zimbraWebClientLogoutURLAllowedIP.oa.mjs";
import { zimbraWebClientLogoutURLAllowedUA } from "../LdapZimbra/zimbraWebClientLogoutURLAllowedUA.oa.mjs";
import { zimbraWebClientMaxInputBufferLength } from "../LdapZimbra/zimbraWebClientMaxInputBufferLength.oa.mjs";
import { zimbraWebClientURL } from "../LdapZimbra/zimbraWebClientURL.oa.mjs";
import { zimbraWebGzipEnabled } from "../LdapZimbra/zimbraWebGzipEnabled.oa.mjs";
import { zimbraXMPPEnabled } from "../LdapZimbra/zimbraXMPPEnabled.oa.mjs";
import { zimbraXMPPServerDialbackKey } from "../LdapZimbra/zimbraXMPPServerDialbackKey.oa.mjs";
import { zimbraZimletDataSensitiveInMixedModeDisabled } from "../LdapZimbra/zimbraZimletDataSensitiveInMixedModeDisabled.oa.mjs";
import { zimbraZimletDomainAvailableZimlets } from "../LdapZimbra/zimbraZimletDomainAvailableZimlets.oa.mjs";
import { zimbraZimletJspEnabled } from "../LdapZimbra/zimbraZimletJspEnabled.oa.mjs";
import { zimbraZookeeperClientServerList } from "../LdapZimbra/zimbraZookeeperClientServerList.oa.mjs";
/**
 * @summary zimbraGlobalConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraGlobalConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAccountClientAttr
 *                               | zimbraAccountExtraObjectClass
 *                               | zimbraAdminAccessControlMech
 *                               | zimbraAdminConsoleCatchAllAddressEnabled
 *                               | zimbraAdminConsoleDNSCheckEnabled
 *                               | zimbraAdminConsoleLDAPAuthEnabled
 *                               | zimbraAdminConsoleLoginMessage
 *                               | zimbraAdminConsoleLoginURL
 *                               | zimbraAdminConsoleLogoutURL
 *                               | zimbraAdminConsoleSkinEnabled
 *                               | zimbraAdminImapImportNumThreads
 *                               | zimbraAdminPort
 *                               | zimbraAdminProxyPort
 *                               | zimbraAdminURL
 *                               | zimbraAllowNonLDHCharsInDomain
 *                               | zimbraAlwaysOnClusterId
 *                               | zimbraAmavisDSPAMEnabled
 *                               | zimbraAmavisEnableDKIMVerification
 *                               | zimbraAmavisFinalSpamDestiny
 *                               | zimbraAmavisLogLevel
 *                               | zimbraAmavisMaxServers
 *                               | zimbraAmavisOriginatingBypassSA
 *                               | zimbraAmavisOutboundDisclaimersOnly
 *                               | zimbraAmavisQuarantineAccount
 *                               | zimbraAmavisSALogLevel
 *                               | zimbraAntispamExtractionBatchDelay
 *                               | zimbraAntispamExtractionBatchSize
 *                               | zimbraArchiveEnabled
 *                               | zimbraArchiveMailFrom
 *                               | zimbraAttachmentsBlocked
 *                               | zimbraAttachmentsIndexedTextLimit
 *                               | zimbraAttachmentsScanClass
 *                               | zimbraAttachmentsScanEnabled
 *                               | zimbraAttachmentsScanURL
 *                               | zimbraAttachmentsViewInHtmlOnly
 *                               | zimbraAuthTokenKey
 *                               | zimbraAuthTokenNotificationInterval
 *                               | zimbraAuthTokenValidityValueEnabled
 *                               | zimbraAutoProvBatchSize
 *                               | zimbraAutoProvNotificationBody
 *                               | zimbraAutoProvNotificationSubject
 *                               | zimbraAutoProvPollingInterval
 *                               | zimbraAutoSubmittedNullReturnPath
 *                               | zimbraBackupAutoGroupedInterval
 *                               | zimbraBackupAutoGroupedNumGroups
 *                               | zimbraBackupAutoGroupedThrottled
 *                               | zimbraBackupMinFreeSpace
 *                               | zimbraBackupMode
 *                               | zimbraBackupReportEmailRecipients
 *                               | zimbraBackupReportEmailSender
 *                               | zimbraBackupReportEmailSubjectPrefix
 *                               | zimbraBackupSkipBlobs
 *                               | zimbraBackupSkipHsmBlobs
 *                               | zimbraBackupSkipSearchIndex
 *                               | zimbraBackupTarget
 *                               | zimbraBasicAuthRealm
 *                               | zimbraCBPolicydAccessControlEnabled
 *                               | zimbraCBPolicydAccountingEnabled
 *                               | zimbraCBPolicydAmavisEnabled
 *                               | zimbraCBPolicydBindPort
 *                               | zimbraCBPolicydBypassMode
 *                               | zimbraCBPolicydBypassTimeout
 *                               | zimbraCBPolicydCheckHeloEnabled
 *                               | zimbraCBPolicydCheckSPFEnabled
 *                               | zimbraCBPolicydGreylistingBlacklistMsg
 *                               | zimbraCBPolicydGreylistingDeferMsg
 *                               | zimbraCBPolicydGreylistingEnabled
 *                               | zimbraCBPolicydGreylistingTrainingEnabled
 *                               | zimbraCBPolicydLogLevel
 *                               | zimbraCBPolicydMaxRequests
 *                               | zimbraCBPolicydMaxServers
 *                               | zimbraCBPolicydMaxSpareServers
 *                               | zimbraCBPolicydMinServers
 *                               | zimbraCBPolicydMinSpareServers
 *                               | zimbraCBPolicydQuotasEnabled
 *                               | zimbraCBPolicydTimeoutBusy
 *                               | zimbraCBPolicydTimeoutIdle
 *                               | zimbraCOSInheritedAttr
 *                               | zimbraCalendarCalDavAlternateCalendarHomeSet
 *                               | zimbraCalendarCalDavCalendarAutoScheduleEnabled
 *                               | zimbraCalendarCalDavClearTextPasswordEnabled
 *                               | zimbraCalendarCalDavDefaultCalendarId
 *                               | zimbraCalendarCalDavDisableFreebusy
 *                               | zimbraCalendarCalDavDisableScheduling
 *                               | zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection
 *                               | zimbraCalendarCompatibilityMode
 *                               | zimbraCalendarRecurrenceDailyMaxDays
 *                               | zimbraCalendarRecurrenceMaxInstances
 *                               | zimbraCalendarRecurrenceMonthlyMaxMonths
 *                               | zimbraCalendarRecurrenceOtherFrequencyMaxYears
 *                               | zimbraCalendarRecurrenceWeeklyMaxWeeks
 *                               | zimbraCalendarRecurrenceYearlyMaxYears
 *                               | zimbraCalendarResourceExtraObjectClass
 *                               | zimbraCertAuthorityCertSelfSigned
 *                               | zimbraCertAuthorityKeySelfSigned
 *                               | zimbraChangePasswordURL
 *                               | zimbraClamAVBindAddress
 *                               | zimbraClamAVListenPort
 *                               | zimbraClamAVMaxThreads
 *                               | zimbraClientTypeRegex
 *                               | zimbraClusterType
 *                               | zimbraCommunityAPIClientID
 *                               | zimbraCommunityAPIClientSecret
 *                               | zimbraCommunityBaseURL
 *                               | zimbraCommunityHomeURL
 *                               | zimbraCommunityUsernameMapping
 *                               | zimbraComponentAvailable
 *                               | zimbraConfiguredServerIDForBlobDirEnabled
 *                               | zimbraConstraint
 *                               | zimbraContactHiddenAttributes
 *                               | zimbraContactRankingTableRefreshInterval
 *                               | zimbraConvertdURL
 *                               | zimbraCosExtraObjectClass
 *                               | zimbraCreateTimestamp
 *                               | zimbraCsrfAllowedRefererHosts
 *                               | zimbraCsrfRefererCheckEnabled
 *                               | zimbraCsrfTokenCheckEnabled
 *                               | zimbraCsrfTokenKey
 *                               | zimbraCustomMimeHeaderNameAllowed
 *                               | zimbraDNSCheckHostname
 *                               | zimbraDNSMasterIP
 *                               | zimbraDNSTCPUpstream
 *                               | zimbraDNSUseTCP
 *                               | zimbraDNSUseUDP
 *                               | zimbraDataSourceConnectTimeout
 *                               | zimbraDataSourceConnectionType
 *                               | zimbraDataSourceReadTimeout
 *                               | zimbraDatabaseSlowSqlThreshold
 *                               | zimbraDefaultAnalyzerStopWords
 *                               | zimbraDefaultDomainName
 *                               | zimbraDomainAdminModifiableAttr
 *                               | zimbraDomainAggregateQuota
 *                               | zimbraDomainAggregateQuotaPolicy
 *                               | zimbraDomainAggregateQuotaWarnEmailRecipient
 *                               | zimbraDomainAggregateQuotaWarnPercent
 *                               | zimbraDomainExtraObjectClass
 *                               | zimbraDomainInheritedAttr
 *                               | zimbraDomainMandatoryMailSignatureEnabled
 *                               | zimbraDomainMandatoryMailSignatureHTML
 *                               | zimbraDomainMandatoryMailSignatureText
 *                               | zimbraDomainStatus
 *                               | zimbraEmptyFolderOpTimeout
 *                               | zimbraErrorReportUrl
 *                               | zimbraExternalAccountProvisioningKey
 *                               | zimbraExternalAccountStatusCheckInterval
 *                               | zimbraExternalShareInvitationUrlExpiration
 *                               | zimbraFeatureDistributionListFolderEnabled
 *                               | zimbraFileUploadMaxSize
 *                               | zimbraFileUploadMaxSizePerFile
 *                               | zimbraForceClearCookies
 *                               | zimbraFreebusyExchangeAuthPassword
 *                               | zimbraFreebusyExchangeAuthScheme
 *                               | zimbraFreebusyExchangeAuthUsername
 *                               | zimbraFreebusyExchangeCachedInterval
 *                               | zimbraFreebusyExchangeCachedIntervalStart
 *                               | zimbraFreebusyExchangeServerType
 *                               | zimbraFreebusyExchangeURL
 *                               | zimbraFreebusyExchangeUserOrg
 *                               | zimbraFreebusyExternalZimbraURL
 *                               | zimbraFreebusyPropagationRetryInterval
 *                               | zimbraGalAlwaysIncludeLocalCalendarResources
 *                               | zimbraGalAutoCompleteLdapFilter
 *                               | zimbraGalGroupIndicatorEnabled
 *                               | zimbraGalInternalSearchBase
 *                               | zimbraGalLdapAttrMap
 *                               | zimbraGalLdapFilterDef
 *                               | zimbraGalLdapGroupHandlerClass
 *                               | zimbraGalLdapPageSize
 *                               | zimbraGalLdapValueMap
 *                               | zimbraGalMaxResults
 *                               | zimbraGalSyncInternalSearchBase
 *                               | zimbraGalSyncLdapPageSize
 *                               | zimbraGalSyncMaxConcurrentClients
 *                               | zimbraGalSyncTimestampFormat
 *                               | zimbraGalTokenizeAutoCompleteKey
 *                               | zimbraGalTokenizeSearchKey
 *                               | zimbraGlobalConfigExtraObjectClass
 *                               | zimbraHelpAdminURL
 *                               | zimbraHelpAdvancedURL
 *                               | zimbraHelpDelegatedURL
 *                               | zimbraHelpStandardURL
 *                               | zimbraHsmAge
 *                               | zimbraHsmBatchSize
 *                               | zimbraHsmMovePreviousRevisions
 *                               | zimbraHsmPolicy
 *                               | zimbraHttpCompressionEnabled
 *                               | zimbraHttpConnectorMaxIdleTimeMillis
 *                               | zimbraHttpContextPathBasedThreadPoolBalancingFilterRules
 *                               | zimbraHttpDebugHandlerEnabled
 *                               | zimbraHttpDosFilterDelayMillis
 *                               | zimbraHttpDosFilterMaxRequestsPerSec
 *                               | zimbraHttpHeaderCacheSize
 *                               | zimbraHttpMaxFormContentSize
 *                               | zimbraHttpNumThreads
 *                               | zimbraHttpOutputBufferSize
 *                               | zimbraHttpProxyURL
 *                               | zimbraHttpRequestHeaderSize
 *                               | zimbraHttpResponseHeaderSize
 *                               | zimbraHttpSSLNumThreads
 *                               | zimbraHttpThreadPoolMaxIdleTimeMillis
 *                               | zimbraHttpThrottleSafeIPs
 *                               | zimbraIPMode
 *                               | zimbraImapBindOnStartup
 *                               | zimbraImapBindPort
 *                               | zimbraImapCleartextLoginEnabled
 *                               | zimbraImapDisabledCapability
 *                               | zimbraImapExposeVersionOnBanner
 *                               | zimbraImapMaxConnections
 *                               | zimbraImapMaxRequestSize
 *                               | zimbraImapNumThreads
 *                               | zimbraImapProxyBindPort
 *                               | zimbraImapSSLBindOnStartup
 *                               | zimbraImapSSLBindPort
 *                               | zimbraImapSSLDisabledCapability
 *                               | zimbraImapSSLProxyBindPort
 *                               | zimbraImapSSLServerEnabled
 *                               | zimbraImapSaslGssapiEnabled
 *                               | zimbraImapServerEnabled
 *                               | zimbraImapShutdownGraceSeconds
 *                               | zimbraInstalledSkin
 *                               | zimbraInternalSharingCrossDomainEnabled
 *                               | zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating
 *                               | zimbraInvalidLoginFilterMaxFailedLogin
 *                               | zimbraInvalidLoginFilterMaxSizeOfFailedIpDb
 *                               | zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin
 *                               | zimbraItemActionBatchSize
 *                               | zimbraLastLogonTimestampFrequency
 *                               | zimbraLastPurgeMaxDuration
 *                               | zimbraLdapGalSyncDisabled
 *                               | zimbraLmtpBindOnStartup
 *                               | zimbraLmtpBindPort
 *                               | zimbraLmtpExposeVersionOnBanner
 *                               | zimbraLmtpLHLORequired
 *                               | zimbraLmtpNumThreads
 *                               | zimbraLmtpPermanentFailureWhenOverQuota
 *                               | zimbraLmtpServerEnabled
 *                               | zimbraLmtpShutdownGraceSeconds
 *                               | zimbraLocale
 *                               | zimbraLogHostname
 *                               | zimbraLogRawLifetime
 *                               | zimbraLogSummaryLifetime
 *                               | zimbraLogToSyslog
 *                               | zimbraLowestSupportedAuthVersion
 *                               | zimbraMailAddressValidationRegex
 *                               | zimbraMailClearTextPasswordEnabled
 *                               | zimbraMailContentMaxSize
 *                               | zimbraMailDiskStreamingThreshold
 *                               | zimbraMailDomainQuota
 *                               | zimbraMailEmptyFolderBatchSize
 *                               | zimbraMailEmptyFolderBatchThreshold
 *                               | zimbraMailFileDescriptorBufferSize
 *                               | zimbraMailFileDescriptorCacheSize
 *                               | zimbraMailKeepOutWebCrawlers
 *                               | zimbraMailMode
 *                               | zimbraMailPort
 *                               | zimbraMailProxyMaxFails
 *                               | zimbraMailProxyPort
 *                               | zimbraMailProxyReconnectTimeout
 *                               | zimbraMailPurgeBatchSize
 *                               | zimbraMailPurgeSleepInterval
 *                               | zimbraMailPurgeSystemPolicy
 *                               | zimbraMailRedirectSetEnvelopeSender
 *                               | zimbraMailReferMode
 *                               | zimbraMailSSLClientCertMode
 *                               | zimbraMailSSLClientCertOCSPEnabled
 *                               | zimbraMailSSLClientCertPort
 *                               | zimbraMailSSLClientCertPrincipalMap
 *                               | zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled
 *                               | zimbraMailSSLPort
 *                               | zimbraMailSSLProxyClientCertPort
 *                               | zimbraMailSSLProxyPort
 *                               | zimbraMailTrustedIP
 *                               | zimbraMailURL
 *                               | zimbraMailUncompressedCacheMaxBytes
 *                               | zimbraMailUncompressedCacheMaxFiles
 *                               | zimbraMailUseDirectBuffers
 *                               | zimbraMailboxMoveSkipBlobs
 *                               | zimbraMailboxMoveSkipHsmBlobs
 *                               | zimbraMailboxMoveSkipSearchIndex
 *                               | zimbraMailboxMoveTempDir
 *                               | zimbraMailboxdSSLProtocols
 *                               | zimbraMemcachedBindPort
 *                               | zimbraMemcachedClientBinaryProtocolEnabled
 *                               | zimbraMemcachedClientExpirySeconds
 *                               | zimbraMemcachedClientHashAlgorithm
 *                               | zimbraMemcachedClientServerList
 *                               | zimbraMemcachedClientTimeoutMillis
 *                               | zimbraMessageCacheSize
 *                               | zimbraMessageChannelEnabled
 *                               | zimbraMessageChannelPort
 *                               | zimbraMessageIdDedupeCacheSize
 *                               | zimbraMessageIdDedupeCacheTimeout
 *                               | zimbraMilterBindPort
 *                               | zimbraMilterMaxConnections
 *                               | zimbraMilterNumThreads
 *                               | zimbraMilterServerEnabled
 *                               | zimbraMobileItemsToTrackPerFolderMaxSize
 *                               | zimbraMobileMaxMessageSize
 *                               | zimbraMobileMetadataMaxSizeEnabled
 *                               | zimbraMobileMetadataRetentionPolicy
 *                               | zimbraMtaAddressVerifyNegativeRefreshTime
 *                               | zimbraMtaAddressVerifyPollCount
 *                               | zimbraMtaAddressVerifyPollDelay
 *                               | zimbraMtaAddressVerifyPositiveRefreshTime
 *                               | zimbraMtaAliasMaps
 *                               | zimbraMtaAlwaysAddMissingHeaders
 *                               | zimbraMtaAntiSpamLockMethod
 *                               | zimbraMtaAuthEnabled
 *                               | zimbraMtaAuthHost
 *                               | zimbraMtaAuthTarget
 *                               | zimbraMtaAuthURL
 *                               | zimbraMtaBlockedExtension
 *                               | zimbraMtaBlockedExtensionWarnAdmin
 *                               | zimbraMtaBlockedExtensionWarnRecipient
 *                               | zimbraMtaBounceNoticeRecipient
 *                               | zimbraMtaBounceQueueLifetime
 *                               | zimbraMtaBrokenSaslAuthClients
 *                               | zimbraMtaCommandDirectory
 *                               | zimbraMtaCommonBlockedExtension
 *                               | zimbraMtaDaemonDirectory
 *                               | zimbraMtaDefaultProcessLimit
 *                               | zimbraMtaDelayWarningTime
 *                               | zimbraMtaDnsLookupsEnabled
 *                               | zimbraMtaEnableSmtpdPolicyd
 *                               | zimbraMtaFallbackRelayHost
 *                               | zimbraMtaHeaderChecks
 *                               | zimbraMtaImportEnvironment
 *                               | zimbraMtaInFlowDelay
 *                               | zimbraMtaLmdbMapSize
 *                               | zimbraMtaLmtpConnectionCacheDestinations
 *                               | zimbraMtaLmtpConnectionCacheTimeLimit
 *                               | zimbraMtaLmtpHostLookup
 *                               | zimbraMtaLmtpTlsCAfile
 *                               | zimbraMtaLmtpTlsCApath
 *                               | zimbraMtaLmtpTlsCiphers
 *                               | zimbraMtaLmtpTlsExcludeCiphers
 *                               | zimbraMtaLmtpTlsLoglevel
 *                               | zimbraMtaLmtpTlsMandatoryCiphers
 *                               | zimbraMtaLmtpTlsProtocols
 *                               | zimbraMtaLmtpTlsSecurityLevel
 *                               | zimbraMtaMailqPath
 *                               | zimbraMtaManpageDirectory
 *                               | zimbraMtaMaxMessageSize
 *                               | zimbraMtaMaxUse
 *                               | zimbraMtaMaximalBackoffTime
 *                               | zimbraMtaMilterCommandTimeout
 *                               | zimbraMtaMilterConnectTimeout
 *                               | zimbraMtaMilterContentTimeout
 *                               | zimbraMtaMilterDefaultAction
 *                               | zimbraMtaMinimalBackoffTime
 *                               | zimbraMtaMyDestination
 *                               | zimbraMtaMyHostname
 *                               | zimbraMtaMyNetworks
 *                               | zimbraMtaMyOrigin
 *                               | zimbraMtaNewaliasesPath
 *                               | zimbraMtaNonSmtpdMilters
 *                               | zimbraMtaNotifyClasses
 *                               | zimbraMtaPolicyTimeLimit
 *                               | zimbraMtaPropagateUnmatchedExtensions
 *                               | zimbraMtaQueueDirectory
 *                               | zimbraMtaQueueRunDelay
 *                               | zimbraMtaRecipientDelimiter
 *                               | zimbraMtaRelayHost
 *                               | zimbraMtaRestriction
 *                               | zimbraMtaSaslAuthEnable
 *                               | zimbraMtaSaslSmtpdMechList
 *                               | zimbraMtaSenderCanonicalMaps
 *                               | zimbraMtaSendmailPath
 *                               | zimbraMtaSmtpCnameOverridesServername
 *                               | zimbraMtaSmtpGenericMaps
 *                               | zimbraMtaSmtpHeloName
 *                               | zimbraMtaSmtpSaslAuthEnable
 *                               | zimbraMtaSmtpSaslMechanismFilter
 *                               | zimbraMtaSmtpSaslPasswordMaps
 *                               | zimbraMtaSmtpSaslSecurityOptions
 *                               | zimbraMtaSmtpTlsCAfile
 *                               | zimbraMtaSmtpTlsCApath
 *                               | zimbraMtaSmtpTlsCiphers
 *                               | zimbraMtaSmtpTlsLoglevel
 *                               | zimbraMtaSmtpTlsMandatoryCiphers
 *                               | zimbraMtaSmtpTlsProtocols
 *                               | zimbraMtaSmtpTlsSecurityLevel
 *                               | zimbraMtaSmtpdBanner
 *                               | zimbraMtaSmtpdClientPortLogging
 *                               | zimbraMtaSmtpdClientRestrictions
 *                               | zimbraMtaSmtpdDataRestrictions
 *                               | zimbraMtaSmtpdErrorSleepTime
 *                               | zimbraMtaSmtpdHardErrorLimit
 *                               | zimbraMtaSmtpdHeloRequired
 *                               | zimbraMtaSmtpdMilters
 *                               | zimbraMtaSmtpdProxyTimeout
 *                               | zimbraMtaSmtpdRejectUnlistedRecipient
 *                               | zimbraMtaSmtpdRejectUnlistedSender
 *                               | zimbraMtaSmtpdSaslAuthenticatedHeader
 *                               | zimbraMtaSmtpdSaslSecurityOptions
 *                               | zimbraMtaSmtpdSaslTlsSecurityOptions
 *                               | zimbraMtaSmtpdSenderLoginMaps
 *                               | zimbraMtaSmtpdSenderRestrictions
 *                               | zimbraMtaSmtpdTlsAskCcert
 *                               | zimbraMtaSmtpdTlsCAfile
 *                               | zimbraMtaSmtpdTlsCApath
 *                               | zimbraMtaSmtpdTlsCcertVerifydepth
 *                               | zimbraMtaSmtpdTlsCiphers
 *                               | zimbraMtaSmtpdTlsExcludeCiphers
 *                               | zimbraMtaSmtpdTlsLoglevel
 *                               | zimbraMtaSmtpdTlsMandatoryCiphers
 *                               | zimbraMtaSmtpdTlsProtocols
 *                               | zimbraMtaSmtpdVirtualTransport
 *                               | zimbraMtaStpdSoftErrorLimit
 *                               | zimbraMtaTlsAppendDefaultCA
 *                               | zimbraMtaTlsAuthOnly
 *                               | zimbraMtaTlsSecurityLevel
 *                               | zimbraMtaTransportMaps
 *                               | zimbraMtaUnverifiedRecipientDeferCode
 *                               | zimbraMtaVirtualAliasDomains
 *                               | zimbraMtaVirtualAliasExpansionLimit
 *                               | zimbraMtaVirtualAliasMaps
 *                               | zimbraMtaVirtualMailboxDomains
 *                               | zimbraMtaVirtualMailboxMaps
 *                               | zimbraMyoneloginSamlSigningCert
 *                               | zimbraNetworkActivation
 *                               | zimbraNetworkLicense
 *                               | zimbraNotebookAccount
 *                               | zimbraNotebookFolderCacheSize
 *                               | zimbraNotebookMaxCachedTemplatesPerFolder
 *                               | zimbraNotebookPageCacheSize
 *                               | zimbraNotifyBindAddress
 *                               | zimbraNotifyBindPort
 *                               | zimbraNotifySSLBindAddress
 *                               | zimbraNotifySSLBindPort
 *                               | zimbraNotifySSLServerEnabled
 *                               | zimbraNotifyServerEnabled
 *                               | zimbraOAuthConsumerCredentials
 *                               | zimbraOpenidConsumerAllowedOPEndpointURL
 *                               | zimbraOpenidConsumerStatelessModeEnabled
 *                               | zimbraPasswordChangeListener
 *                               | zimbraPop3BindOnStartup
 *                               | zimbraPop3BindPort
 *                               | zimbraPop3CleartextLoginEnabled
 *                               | zimbraPop3ExposeVersionOnBanner
 *                               | zimbraPop3MaxConnections
 *                               | zimbraPop3NumThreads
 *                               | zimbraPop3ProxyBindPort
 *                               | zimbraPop3SSLBindOnStartup
 *                               | zimbraPop3SSLBindPort
 *                               | zimbraPop3SSLProxyBindPort
 *                               | zimbraPop3SSLServerEnabled
 *                               | zimbraPop3SaslGssapiEnabled
 *                               | zimbraPop3ServerEnabled
 *                               | zimbraPop3ShutdownGraceSeconds
 *                               | zimbraPrevFoldersToTrackMax
 *                               | zimbraProduct
 *                               | zimbraPublicServiceHostname
 *                               | zimbraPublicServicePort
 *                               | zimbraPublicServiceProtocol
 *                               | zimbraRedoLogArchiveDir
 *                               | zimbraRedoLogCrashRecoveryLookbackSec
 *                               | zimbraRedoLogDeleteOnRollover
 *                               | zimbraRedoLogEnabled
 *                               | zimbraRedoLogFsyncIntervalMS
 *                               | zimbraRedoLogLogPath
 *                               | zimbraRedoLogProvider
 *                               | zimbraRedoLogRolloverFileSizeKB
 *                               | zimbraRedoLogRolloverHardMaxFileSizeKB
 *                               | zimbraRedoLogRolloverMinFileAge
 *                               | zimbraRegexMaxAccessesWhenMatching
 *                               | zimbraRemoteManagementCommand
 *                               | zimbraRemoteManagementPort
 *                               | zimbraRemoteManagementPrivateKeyPath
 *                               | zimbraRemoteManagementUser
 *                               | zimbraResponseHeader
 *                               | zimbraReverseProxyAcceptMutex
 *                               | zimbraReverseProxyAdminEnabled
 *                               | zimbraReverseProxyAdminIPAddress
 *                               | zimbraReverseProxyAdminPortAttribute
 *                               | zimbraReverseProxyAuthWaitInterval
 *                               | zimbraReverseProxyAvailableLookupTargets
 *                               | zimbraReverseProxyCacheEntryTTL
 *                               | zimbraReverseProxyCacheFetchTimeout
 *                               | zimbraReverseProxyCacheReconnectInterval
 *                               | zimbraReverseProxyClientCertCA
 *                               | zimbraReverseProxyClientCertMode
 *                               | zimbraReverseProxyConnectTimeout
 *                               | zimbraReverseProxyDefaultRealm
 *                               | zimbraReverseProxyDnsLookupInServerEnabled
 *                               | zimbraReverseProxyDomainNameAttribute
 *                               | zimbraReverseProxyDomainNameQuery
 *                               | zimbraReverseProxyDomainNameSearchBase
 *                               | zimbraReverseProxyErrorHandlerURL
 *                               | zimbraReverseProxyExactServerVersionCheck
 *                               | zimbraReverseProxyExternalRouteIncludeOriginalAuthusername
 *                               | zimbraReverseProxyGenConfigPerVirtualHostname
 *                               | zimbraReverseProxyHttpEnabled
 *                               | zimbraReverseProxyHttpPortAttribute
 *                               | zimbraReverseProxyHttpSSLPortAttribute
 *                               | zimbraReverseProxyIPLoginLimit
 *                               | zimbraReverseProxyIPLoginLimitTime
 *                               | zimbraReverseProxyImapEnabledCapability
 *                               | zimbraReverseProxyImapExposeVersionOnBanner
 *                               | zimbraReverseProxyImapPortAttribute
 *                               | zimbraReverseProxyImapSSLPortAttribute
 *                               | zimbraReverseProxyImapSaslGssapiEnabled
 *                               | zimbraReverseProxyImapSaslPlainEnabled
 *                               | zimbraReverseProxyImapStartTlsMode
 *                               | zimbraReverseProxyInactivityTimeout
 *                               | zimbraReverseProxyIpThrottleMsg
 *                               | zimbraReverseProxyLogLevel
 *                               | zimbraReverseProxyLookupTarget
 *                               | zimbraReverseProxyMailEnabled
 *                               | zimbraReverseProxyMailHostAttribute
 *                               | zimbraReverseProxyMailHostQuery
 *                               | zimbraReverseProxyMailHostSearchBase
 *                               | zimbraReverseProxyMailImapEnabled
 *                               | zimbraReverseProxyMailImapsEnabled
 *                               | zimbraReverseProxyMailMode
 *                               | zimbraReverseProxyMailPop3Enabled
 *                               | zimbraReverseProxyMailPop3sEnabled
 *                               | zimbraReverseProxyPassErrors
 *                               | zimbraReverseProxyPop3EnabledCapability
 *                               | zimbraReverseProxyPop3ExposeVersionOnBanner
 *                               | zimbraReverseProxyPop3PortAttribute
 *                               | zimbraReverseProxyPop3SSLPortAttribute
 *                               | zimbraReverseProxyPop3SaslGssapiEnabled
 *                               | zimbraReverseProxyPop3SaslPlainEnabled
 *                               | zimbraReverseProxyPop3StartTlsMode
 *                               | zimbraReverseProxyPortQuery
 *                               | zimbraReverseProxyPortSearchBase
 *                               | zimbraReverseProxyRouteLookupTimeout
 *                               | zimbraReverseProxyRouteLookupTimeoutCache
 *                               | zimbraReverseProxySSLCiphers
 *                               | zimbraReverseProxySSLECDHCurve
 *                               | zimbraReverseProxySSLProtocols
 *                               | zimbraReverseProxySSLToUpstreamEnabled
 *                               | zimbraReverseProxySendImapId
 *                               | zimbraReverseProxySendPop3Xoip
 *                               | zimbraReverseProxyUpstreamConnectTimeout
 *                               | zimbraReverseProxyUpstreamEwsServers
 *                               | zimbraReverseProxyUpstreamLoginServers
 *                               | zimbraReverseProxyUpstreamPollingTimeout
 *                               | zimbraReverseProxyUpstreamReadTimeout
 *                               | zimbraReverseProxyUpstreamSendTimeout
 *                               | zimbraReverseProxyUpstreamServers
 *                               | zimbraReverseProxyUserLoginLimit
 *                               | zimbraReverseProxyUserLoginLimitTime
 *                               | zimbraReverseProxyUserNameAttribute
 *                               | zimbraReverseProxyUserThrottleMsg
 *                               | zimbraReverseProxyWorkerConnections
 *                               | zimbraReverseProxyWorkerProcesses
 *                               | zimbraSMIMELdapAttribute
 *                               | zimbraSMIMELdapBindDn
 *                               | zimbraSMIMELdapBindPassword
 *                               | zimbraSMIMELdapDiscoverSearchBaseEnabled
 *                               | zimbraSMIMELdapFilter
 *                               | zimbraSMIMELdapSearchBase
 *                               | zimbraSMIMELdapStartTlsEnabled
 *                               | zimbraSMIMELdapURL
 *                               | zimbraSSLCertificate
 *                               | zimbraSSLExcludeCipherSuites
 *                               | zimbraSSLIncludeCipherSuites
 *                               | zimbraSSLPrivateKey
 *                               | zimbraSaslGssapiRequiresTls
 *                               | zimbraScheduledTaskNumThreads
 *                               | zimbraServerExtraObjectClass
 *                               | zimbraServerInheritedAttr
 *                               | zimbraShareNotificationMtaAuthAccount
 *                               | zimbraShareNotificationMtaAuthPassword
 *                               | zimbraShareNotificationMtaAuthRequired
 *                               | zimbraShareNotificationMtaConnectionType
 *                               | zimbraShareNotificationMtaEnabled
 *                               | zimbraShareNotificationMtaHostname
 *                               | zimbraShareNotificationMtaPort
 *                               | zimbraSharingUpdatePublishInterval
 *                               | zimbraSkinBackgroundColor
 *                               | zimbraSkinFavicon
 *                               | zimbraSkinForegroundColor
 *                               | zimbraSkinLogoAppBanner
 *                               | zimbraSkinLogoLoginBanner
 *                               | zimbraSkinLogoURL
 *                               | zimbraSkinSecondaryColor
 *                               | zimbraSkinSelectionColor
 *                               | zimbraSmtpHostname
 *                               | zimbraSmtpPort
 *                               | zimbraSmtpSendAddAuthenticatedUser
 *                               | zimbraSmtpSendAddMailer
 *                               | zimbraSmtpSendAddOriginatingIP
 *                               | zimbraSmtpSendPartial
 *                               | zimbraSmtpTimeout
 *                               | zimbraSoapExposeVersion
 *                               | zimbraSoapRequestMaxSize
 *                               | zimbraSpamCheckEnabled
 *                               | zimbraSpamHeader
 *                               | zimbraSpamHeaderValue
 *                               | zimbraSpamIsNotSpamAccount
 *                               | zimbraSpamIsSpamAccount
 *                               | zimbraSpamKillPercent
 *                               | zimbraSpamReportEnvelopeFrom
 *                               | zimbraSpamReportSenderHeader
 *                               | zimbraSpamReportTypeHam
 *                               | zimbraSpamReportTypeHeader
 *                               | zimbraSpamReportTypeSpam
 *                               | zimbraSpamSubjectTag
 *                               | zimbraSpamTagPercent
 *                               | zimbraSpamTrashAlias
 *                               | zimbraSpamWhitelistHeader
 *                               | zimbraSpamWhitelistHeaderValue
 *                               | zimbraSpellAvailableDictionary
 *                               | zimbraSpellCheckURL
 *                               | zimbraSpnegoAuthEnabled
 *                               | zimbraSpnegoAuthErrorURL
 *                               | zimbraSpnegoAuthRealm
 *                               | zimbraSslCaCert
 *                               | zimbraSslCaKey
 *                               | zimbraStatThreadNamePrefix
 *                               | zimbraTableMaintenanceGrowthFactor
 *                               | zimbraTableMaintenanceMaxRows
 *                               | zimbraTableMaintenanceMinRows
 *                               | zimbraTableMaintenanceOperation
 *                               | zimbraThreadMonitorEnabled
 *                               | zimbraThrottleSafeHosts
 *                               | zimbraThrottleWhitelist
 *                               | zimbraUCProviderEnabled
 *                               | zimbraVersionCheckInterval
 *                               | zimbraVersionCheckLastAttempt
 *                               | zimbraVersionCheckLastResponse
 *                               | zimbraVersionCheckLastSuccess
 *                               | zimbraVersionCheckNotificationBody
 *                               | zimbraVersionCheckNotificationEmail
 *                               | zimbraVersionCheckNotificationEmailFrom
 *                               | zimbraVersionCheckNotificationSubject
 *                               | zimbraVersionCheckSendNotifications
 *                               | zimbraVersionCheckServer
 *                               | zimbraVersionCheckURL
 *                               | zimbraVirusBlockEncryptedArchive
 *                               | zimbraVirusCheckEnabled
 *                               | zimbraVirusDefinitionsUpdateFrequency
 *                               | zimbraVirusWarnAdmin
 *                               | zimbraVirusWarnRecipient
 *                               | zimbraWebClientAdminReference
 *                               | zimbraWebClientLoginURL
 *                               | zimbraWebClientLoginURLAllowedIP
 *                               | zimbraWebClientLoginURLAllowedUA
 *                               | zimbraWebClientLogoutURL
 *                               | zimbraWebClientLogoutURLAllowedIP
 *                               | zimbraWebClientLogoutURLAllowedUA
 *                               | zimbraWebClientMaxInputBufferLength
 *                               | zimbraWebClientURL
 *                               | zimbraWebGzipEnabled
 *                               | zimbraXMPPEnabled
 *                               | zimbraXMPPServerDialbackKey
 *                               | zimbraZimletDataSensitiveInMixedModeDisabled
 *                               | zimbraZimletDomainAvailableZimlets
 *                               | zimbraZimletJspEnabled
 *                               | zimbraZookeeperClientServerList }
 *   LDAP-NAME                 {"zimbraGlobalConfig"}
 *   LDAP-DESC                 "global config"
 *   ID                        id-oc-zimbraGlobalConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraGlobalConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraAccountClientAttr, zimbraAccountExtraObjectClass, zimbraAdminAccessControlMech, zimbraAdminConsoleCatchAllAddressEnabled, zimbraAdminConsoleDNSCheckEnabled, zimbraAdminConsoleLDAPAuthEnabled, zimbraAdminConsoleLoginMessage, zimbraAdminConsoleLoginURL, zimbraAdminConsoleLogoutURL, zimbraAdminConsoleSkinEnabled, zimbraAdminImapImportNumThreads, zimbraAdminPort, zimbraAdminProxyPort, zimbraAdminURL, zimbraAllowNonLDHCharsInDomain, zimbraAlwaysOnClusterId, zimbraAmavisDSPAMEnabled, zimbraAmavisEnableDKIMVerification, zimbraAmavisFinalSpamDestiny, zimbraAmavisLogLevel, zimbraAmavisMaxServers, zimbraAmavisOriginatingBypassSA, zimbraAmavisOutboundDisclaimersOnly, zimbraAmavisQuarantineAccount, zimbraAmavisSALogLevel, zimbraAntispamExtractionBatchDelay, zimbraAntispamExtractionBatchSize, zimbraArchiveEnabled, zimbraArchiveMailFrom, zimbraAttachmentsBlocked, zimbraAttachmentsIndexedTextLimit, zimbraAttachmentsScanClass, zimbraAttachmentsScanEnabled, zimbraAttachmentsScanURL, zimbraAttachmentsViewInHtmlOnly, zimbraAuthTokenKey, zimbraAuthTokenNotificationInterval, zimbraAuthTokenValidityValueEnabled, zimbraAutoProvBatchSize, zimbraAutoProvNotificationBody, zimbraAutoProvNotificationSubject, zimbraAutoProvPollingInterval, zimbraAutoSubmittedNullReturnPath, zimbraBackupAutoGroupedInterval, zimbraBackupAutoGroupedNumGroups, zimbraBackupAutoGroupedThrottled, zimbraBackupMinFreeSpace, zimbraBackupMode, zimbraBackupReportEmailRecipients, zimbraBackupReportEmailSender, zimbraBackupReportEmailSubjectPrefix, zimbraBackupSkipBlobs, zimbraBackupSkipHsmBlobs, zimbraBackupSkipSearchIndex, zimbraBackupTarget, zimbraBasicAuthRealm, zimbraCBPolicydAccessControlEnabled, zimbraCBPolicydAccountingEnabled, zimbraCBPolicydAmavisEnabled, zimbraCBPolicydBindPort, zimbraCBPolicydBypassMode, zimbraCBPolicydBypassTimeout, zimbraCBPolicydCheckHeloEnabled, zimbraCBPolicydCheckSPFEnabled, zimbraCBPolicydGreylistingBlacklistMsg, zimbraCBPolicydGreylistingDeferMsg, zimbraCBPolicydGreylistingEnabled, zimbraCBPolicydGreylistingTrainingEnabled, zimbraCBPolicydLogLevel, zimbraCBPolicydMaxRequests, zimbraCBPolicydMaxServers, zimbraCBPolicydMaxSpareServers, zimbraCBPolicydMinServers, zimbraCBPolicydMinSpareServers, zimbraCBPolicydQuotasEnabled, zimbraCBPolicydTimeoutBusy, zimbraCBPolicydTimeoutIdle, zimbraCOSInheritedAttr, zimbraCalendarCalDavAlternateCalendarHomeSet, zimbraCalendarCalDavCalendarAutoScheduleEnabled, zimbraCalendarCalDavClearTextPasswordEnabled, zimbraCalendarCalDavDefaultCalendarId, zimbraCalendarCalDavDisableFreebusy, zimbraCalendarCalDavDisableScheduling, zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection, zimbraCalendarCompatibilityMode, zimbraCalendarRecurrenceDailyMaxDays, zimbraCalendarRecurrenceMaxInstances, zimbraCalendarRecurrenceMonthlyMaxMonths, zimbraCalendarRecurrenceOtherFrequencyMaxYears, zimbraCalendarRecurrenceWeeklyMaxWeeks, zimbraCalendarRecurrenceYearlyMaxYears, zimbraCalendarResourceExtraObjectClass, zimbraCertAuthorityCertSelfSigned, zimbraCertAuthorityKeySelfSigned, zimbraChangePasswordURL, zimbraClamAVBindAddress, zimbraClamAVListenPort, zimbraClamAVMaxThreads, zimbraClientTypeRegex, zimbraClusterType, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraComponentAvailable, zimbraConfiguredServerIDForBlobDirEnabled, zimbraConstraint, zimbraContactHiddenAttributes, zimbraContactRankingTableRefreshInterval, zimbraConvertdURL, zimbraCosExtraObjectClass, zimbraCreateTimestamp, zimbraCsrfAllowedRefererHosts, zimbraCsrfRefererCheckEnabled, zimbraCsrfTokenCheckEnabled, zimbraCsrfTokenKey, zimbraCustomMimeHeaderNameAllowed, zimbraDNSCheckHostname, zimbraDNSMasterIP, zimbraDNSTCPUpstream, zimbraDNSUseTCP, zimbraDNSUseUDP, zimbraDataSourceConnectTimeout, zimbraDataSourceConnectionType, zimbraDataSourceReadTimeout, zimbraDatabaseSlowSqlThreshold, zimbraDefaultAnalyzerStopWords, zimbraDefaultDomainName, zimbraDomainAdminModifiableAttr, zimbraDomainAggregateQuota, zimbraDomainAggregateQuotaPolicy, zimbraDomainAggregateQuotaWarnEmailRecipient, zimbraDomainAggregateQuotaWarnPercent, zimbraDomainExtraObjectClass, zimbraDomainInheritedAttr, zimbraDomainMandatoryMailSignatureEnabled, zimbraDomainMandatoryMailSignatureHTML, zimbraDomainMandatoryMailSignatureText, zimbraDomainStatus, zimbraEmptyFolderOpTimeout, zimbraErrorReportUrl, zimbraExternalAccountProvisioningKey, zimbraExternalAccountStatusCheckInterval, zimbraExternalShareInvitationUrlExpiration, zimbraFeatureDistributionListFolderEnabled, zimbraFileUploadMaxSize, zimbraFileUploadMaxSizePerFile, zimbraForceClearCookies, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeServerType, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraFreebusyExternalZimbraURL, zimbraFreebusyPropagationRetryInterval, zimbraGalAlwaysIncludeLocalCalendarResources, zimbraGalAutoCompleteLdapFilter, zimbraGalGroupIndicatorEnabled, zimbraGalInternalSearchBase, zimbraGalLdapAttrMap, zimbraGalLdapFilterDef, zimbraGalLdapGroupHandlerClass, zimbraGalLdapPageSize, zimbraGalLdapValueMap, zimbraGalMaxResults, zimbraGalSyncInternalSearchBase, zimbraGalSyncLdapPageSize, zimbraGalSyncMaxConcurrentClients, zimbraGalSyncTimestampFormat, zimbraGalTokenizeAutoCompleteKey, zimbraGalTokenizeSearchKey, zimbraGlobalConfigExtraObjectClass, zimbraHelpAdminURL, zimbraHelpAdvancedURL, zimbraHelpDelegatedURL, zimbraHelpStandardURL, zimbraHsmAge, zimbraHsmBatchSize, zimbraHsmMovePreviousRevisions, zimbraHsmPolicy, zimbraHttpCompressionEnabled, zimbraHttpConnectorMaxIdleTimeMillis, zimbraHttpContextPathBasedThreadPoolBalancingFilterRules, zimbraHttpDebugHandlerEnabled, zimbraHttpDosFilterDelayMillis, zimbraHttpDosFilterMaxRequestsPerSec, zimbraHttpHeaderCacheSize, zimbraHttpMaxFormContentSize, zimbraHttpNumThreads, zimbraHttpOutputBufferSize, zimbraHttpProxyURL, zimbraHttpRequestHeaderSize, zimbraHttpResponseHeaderSize, zimbraHttpSSLNumThreads, zimbraHttpThreadPoolMaxIdleTimeMillis, zimbraHttpThrottleSafeIPs, zimbraIPMode, zimbraImapBindOnStartup, zimbraImapBindPort, zimbraImapCleartextLoginEnabled, zimbraImapDisabledCapability, zimbraImapExposeVersionOnBanner, zimbraImapMaxConnections, zimbraImapMaxRequestSize, zimbraImapNumThreads, zimbraImapProxyBindPort, zimbraImapSSLBindOnStartup, zimbraImapSSLBindPort, zimbraImapSSLDisabledCapability, zimbraImapSSLProxyBindPort, zimbraImapSSLServerEnabled, zimbraImapSaslGssapiEnabled, zimbraImapServerEnabled, zimbraImapShutdownGraceSeconds, zimbraInstalledSkin, zimbraInternalSharingCrossDomainEnabled, zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating, zimbraInvalidLoginFilterMaxFailedLogin, zimbraInvalidLoginFilterMaxSizeOfFailedIpDb, zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin, zimbraItemActionBatchSize, zimbraLastLogonTimestampFrequency, zimbraLastPurgeMaxDuration, zimbraLdapGalSyncDisabled, zimbraLmtpBindOnStartup, zimbraLmtpBindPort, zimbraLmtpExposeVersionOnBanner, zimbraLmtpLHLORequired, zimbraLmtpNumThreads, zimbraLmtpPermanentFailureWhenOverQuota, zimbraLmtpServerEnabled, zimbraLmtpShutdownGraceSeconds, zimbraLocale, zimbraLogHostname, zimbraLogRawLifetime, zimbraLogSummaryLifetime, zimbraLogToSyslog, zimbraLowestSupportedAuthVersion, zimbraMailAddressValidationRegex, zimbraMailClearTextPasswordEnabled, zimbraMailContentMaxSize, zimbraMailDiskStreamingThreshold, zimbraMailDomainQuota, zimbraMailEmptyFolderBatchSize, zimbraMailEmptyFolderBatchThreshold, zimbraMailFileDescriptorBufferSize, zimbraMailFileDescriptorCacheSize, zimbraMailKeepOutWebCrawlers, zimbraMailMode, zimbraMailPort, zimbraMailProxyMaxFails, zimbraMailProxyPort, zimbraMailProxyReconnectTimeout, zimbraMailPurgeBatchSize, zimbraMailPurgeSleepInterval, zimbraMailPurgeSystemPolicy, zimbraMailRedirectSetEnvelopeSender, zimbraMailReferMode, zimbraMailSSLClientCertMode, zimbraMailSSLClientCertOCSPEnabled, zimbraMailSSLClientCertPort, zimbraMailSSLClientCertPrincipalMap, zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled, zimbraMailSSLPort, zimbraMailSSLProxyClientCertPort, zimbraMailSSLProxyPort, zimbraMailTrustedIP, zimbraMailURL, zimbraMailUncompressedCacheMaxBytes, zimbraMailUncompressedCacheMaxFiles, zimbraMailUseDirectBuffers, zimbraMailboxMoveSkipBlobs, zimbraMailboxMoveSkipHsmBlobs, zimbraMailboxMoveSkipSearchIndex, zimbraMailboxMoveTempDir, zimbraMailboxdSSLProtocols, zimbraMemcachedBindPort, zimbraMemcachedClientBinaryProtocolEnabled, zimbraMemcachedClientExpirySeconds, zimbraMemcachedClientHashAlgorithm, zimbraMemcachedClientServerList, zimbraMemcachedClientTimeoutMillis, zimbraMessageCacheSize, zimbraMessageChannelEnabled, zimbraMessageChannelPort, zimbraMessageIdDedupeCacheSize, zimbraMessageIdDedupeCacheTimeout, zimbraMilterBindPort, zimbraMilterMaxConnections, zimbraMilterNumThreads, zimbraMilterServerEnabled, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMaxMessageSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMobileMetadataRetentionPolicy, zimbraMtaAddressVerifyNegativeRefreshTime, zimbraMtaAddressVerifyPollCount, zimbraMtaAddressVerifyPollDelay, zimbraMtaAddressVerifyPositiveRefreshTime, zimbraMtaAliasMaps, zimbraMtaAlwaysAddMissingHeaders, zimbraMtaAntiSpamLockMethod, zimbraMtaAuthEnabled, zimbraMtaAuthHost, zimbraMtaAuthTarget, zimbraMtaAuthURL, zimbraMtaBlockedExtension, zimbraMtaBlockedExtensionWarnAdmin, zimbraMtaBlockedExtensionWarnRecipient, zimbraMtaBounceNoticeRecipient, zimbraMtaBounceQueueLifetime, zimbraMtaBrokenSaslAuthClients, zimbraMtaCommandDirectory, zimbraMtaCommonBlockedExtension, zimbraMtaDaemonDirectory, zimbraMtaDefaultProcessLimit, zimbraMtaDelayWarningTime, zimbraMtaDnsLookupsEnabled, zimbraMtaEnableSmtpdPolicyd, zimbraMtaFallbackRelayHost, zimbraMtaHeaderChecks, zimbraMtaImportEnvironment, zimbraMtaInFlowDelay, zimbraMtaLmdbMapSize, zimbraMtaLmtpConnectionCacheDestinations, zimbraMtaLmtpConnectionCacheTimeLimit, zimbraMtaLmtpHostLookup, zimbraMtaLmtpTlsCAfile, zimbraMtaLmtpTlsCApath, zimbraMtaLmtpTlsCiphers, zimbraMtaLmtpTlsExcludeCiphers, zimbraMtaLmtpTlsLoglevel, zimbraMtaLmtpTlsMandatoryCiphers, zimbraMtaLmtpTlsProtocols, zimbraMtaLmtpTlsSecurityLevel, zimbraMtaMailqPath, zimbraMtaManpageDirectory, zimbraMtaMaxMessageSize, zimbraMtaMaxUse, zimbraMtaMaximalBackoffTime, zimbraMtaMilterCommandTimeout, zimbraMtaMilterConnectTimeout, zimbraMtaMilterContentTimeout, zimbraMtaMilterDefaultAction, zimbraMtaMinimalBackoffTime, zimbraMtaMyDestination, zimbraMtaMyHostname, zimbraMtaMyNetworks, zimbraMtaMyOrigin, zimbraMtaNewaliasesPath, zimbraMtaNonSmtpdMilters, zimbraMtaNotifyClasses, zimbraMtaPolicyTimeLimit, zimbraMtaPropagateUnmatchedExtensions, zimbraMtaQueueDirectory, zimbraMtaQueueRunDelay, zimbraMtaRecipientDelimiter, zimbraMtaRelayHost, zimbraMtaRestriction, zimbraMtaSaslAuthEnable, zimbraMtaSaslSmtpdMechList, zimbraMtaSenderCanonicalMaps, zimbraMtaSendmailPath, zimbraMtaSmtpCnameOverridesServername, zimbraMtaSmtpGenericMaps, zimbraMtaSmtpHeloName, zimbraMtaSmtpSaslAuthEnable, zimbraMtaSmtpSaslMechanismFilter, zimbraMtaSmtpSaslPasswordMaps, zimbraMtaSmtpSaslSecurityOptions, zimbraMtaSmtpTlsCAfile, zimbraMtaSmtpTlsCApath, zimbraMtaSmtpTlsCiphers, zimbraMtaSmtpTlsLoglevel, zimbraMtaSmtpTlsMandatoryCiphers, zimbraMtaSmtpTlsProtocols, zimbraMtaSmtpTlsSecurityLevel, zimbraMtaSmtpdBanner, zimbraMtaSmtpdClientPortLogging, zimbraMtaSmtpdClientRestrictions, zimbraMtaSmtpdDataRestrictions, zimbraMtaSmtpdErrorSleepTime, zimbraMtaSmtpdHardErrorLimit, zimbraMtaSmtpdHeloRequired, zimbraMtaSmtpdMilters, zimbraMtaSmtpdProxyTimeout, zimbraMtaSmtpdRejectUnlistedRecipient, zimbraMtaSmtpdRejectUnlistedSender, zimbraMtaSmtpdSaslAuthenticatedHeader, zimbraMtaSmtpdSaslSecurityOptions, zimbraMtaSmtpdSaslTlsSecurityOptions, zimbraMtaSmtpdSenderLoginMaps, zimbraMtaSmtpdSenderRestrictions, zimbraMtaSmtpdTlsAskCcert, zimbraMtaSmtpdTlsCAfile, zimbraMtaSmtpdTlsCApath, zimbraMtaSmtpdTlsCcertVerifydepth, zimbraMtaSmtpdTlsCiphers, zimbraMtaSmtpdTlsExcludeCiphers, zimbraMtaSmtpdTlsLoglevel, zimbraMtaSmtpdTlsMandatoryCiphers, zimbraMtaSmtpdTlsProtocols, zimbraMtaSmtpdVirtualTransport, zimbraMtaStpdSoftErrorLimit, zimbraMtaTlsAppendDefaultCA, zimbraMtaTlsAuthOnly, zimbraMtaTlsSecurityLevel, zimbraMtaTransportMaps, zimbraMtaUnverifiedRecipientDeferCode, zimbraMtaVirtualAliasDomains, zimbraMtaVirtualAliasExpansionLimit, zimbraMtaVirtualAliasMaps, zimbraMtaVirtualMailboxDomains, zimbraMtaVirtualMailboxMaps, zimbraMyoneloginSamlSigningCert, zimbraNetworkActivation, zimbraNetworkLicense, zimbraNotebookAccount, zimbraNotebookFolderCacheSize, zimbraNotebookMaxCachedTemplatesPerFolder, zimbraNotebookPageCacheSize, zimbraNotifyBindAddress, zimbraNotifyBindPort, zimbraNotifySSLBindAddress, zimbraNotifySSLBindPort, zimbraNotifySSLServerEnabled, zimbraNotifyServerEnabled, zimbraOAuthConsumerCredentials, zimbraOpenidConsumerAllowedOPEndpointURL, zimbraOpenidConsumerStatelessModeEnabled, zimbraPasswordChangeListener, zimbraPop3BindOnStartup, zimbraPop3BindPort, zimbraPop3CleartextLoginEnabled, zimbraPop3ExposeVersionOnBanner, zimbraPop3MaxConnections, zimbraPop3NumThreads, zimbraPop3ProxyBindPort, zimbraPop3SSLBindOnStartup, zimbraPop3SSLBindPort, zimbraPop3SSLProxyBindPort, zimbraPop3SSLServerEnabled, zimbraPop3SaslGssapiEnabled, zimbraPop3ServerEnabled, zimbraPop3ShutdownGraceSeconds, zimbraPrevFoldersToTrackMax, zimbraProduct, zimbraPublicServiceHostname, zimbraPublicServicePort, zimbraPublicServiceProtocol, zimbraRedoLogArchiveDir, zimbraRedoLogCrashRecoveryLookbackSec, zimbraRedoLogDeleteOnRollover, zimbraRedoLogEnabled, zimbraRedoLogFsyncIntervalMS, zimbraRedoLogLogPath, zimbraRedoLogProvider, zimbraRedoLogRolloverFileSizeKB, zimbraRedoLogRolloverHardMaxFileSizeKB, zimbraRedoLogRolloverMinFileAge, zimbraRegexMaxAccessesWhenMatching, zimbraRemoteManagementCommand, zimbraRemoteManagementPort, zimbraRemoteManagementPrivateKeyPath, zimbraRemoteManagementUser, zimbraResponseHeader, zimbraReverseProxyAcceptMutex, zimbraReverseProxyAdminEnabled, zimbraReverseProxyAdminIPAddress, zimbraReverseProxyAdminPortAttribute, zimbraReverseProxyAuthWaitInterval, zimbraReverseProxyAvailableLookupTargets, zimbraReverseProxyCacheEntryTTL, zimbraReverseProxyCacheFetchTimeout, zimbraReverseProxyCacheReconnectInterval, zimbraReverseProxyClientCertCA, zimbraReverseProxyClientCertMode, zimbraReverseProxyConnectTimeout, zimbraReverseProxyDefaultRealm, zimbraReverseProxyDnsLookupInServerEnabled, zimbraReverseProxyDomainNameAttribute, zimbraReverseProxyDomainNameQuery, zimbraReverseProxyDomainNameSearchBase, zimbraReverseProxyErrorHandlerURL, zimbraReverseProxyExactServerVersionCheck, zimbraReverseProxyExternalRouteIncludeOriginalAuthusername, zimbraReverseProxyGenConfigPerVirtualHostname, zimbraReverseProxyHttpEnabled, zimbraReverseProxyHttpPortAttribute, zimbraReverseProxyHttpSSLPortAttribute, zimbraReverseProxyIPLoginLimit, zimbraReverseProxyIPLoginLimitTime, zimbraReverseProxyImapEnabledCapability, zimbraReverseProxyImapExposeVersionOnBanner, zimbraReverseProxyImapPortAttribute, zimbraReverseProxyImapSSLPortAttribute, zimbraReverseProxyImapSaslGssapiEnabled, zimbraReverseProxyImapSaslPlainEnabled, zimbraReverseProxyImapStartTlsMode, zimbraReverseProxyInactivityTimeout, zimbraReverseProxyIpThrottleMsg, zimbraReverseProxyLogLevel, zimbraReverseProxyLookupTarget, zimbraReverseProxyMailEnabled, zimbraReverseProxyMailHostAttribute, zimbraReverseProxyMailHostQuery, zimbraReverseProxyMailHostSearchBase, zimbraReverseProxyMailImapEnabled, zimbraReverseProxyMailImapsEnabled, zimbraReverseProxyMailMode, zimbraReverseProxyMailPop3Enabled, zimbraReverseProxyMailPop3sEnabled, zimbraReverseProxyPassErrors, zimbraReverseProxyPop3EnabledCapability, zimbraReverseProxyPop3ExposeVersionOnBanner, zimbraReverseProxyPop3PortAttribute, zimbraReverseProxyPop3SSLPortAttribute, zimbraReverseProxyPop3SaslGssapiEnabled, zimbraReverseProxyPop3SaslPlainEnabled, zimbraReverseProxyPop3StartTlsMode, zimbraReverseProxyPortQuery, zimbraReverseProxyPortSearchBase, zimbraReverseProxyRouteLookupTimeout, zimbraReverseProxyRouteLookupTimeoutCache, zimbraReverseProxySSLCiphers, zimbraReverseProxySSLECDHCurve, zimbraReverseProxySSLProtocols, zimbraReverseProxySSLToUpstreamEnabled, zimbraReverseProxySendImapId, zimbraReverseProxySendPop3Xoip, zimbraReverseProxyUpstreamConnectTimeout, zimbraReverseProxyUpstreamEwsServers, zimbraReverseProxyUpstreamLoginServers, zimbraReverseProxyUpstreamPollingTimeout, zimbraReverseProxyUpstreamReadTimeout, zimbraReverseProxyUpstreamSendTimeout, zimbraReverseProxyUpstreamServers, zimbraReverseProxyUserLoginLimit, zimbraReverseProxyUserLoginLimitTime, zimbraReverseProxyUserNameAttribute, zimbraReverseProxyUserThrottleMsg, zimbraReverseProxyWorkerConnections, zimbraReverseProxyWorkerProcesses, zimbraSMIMELdapAttribute, zimbraSMIMELdapBindDn, zimbraSMIMELdapBindPassword, zimbraSMIMELdapDiscoverSearchBaseEnabled, zimbraSMIMELdapFilter, zimbraSMIMELdapSearchBase, zimbraSMIMELdapStartTlsEnabled, zimbraSMIMELdapURL, zimbraSSLCertificate, zimbraSSLExcludeCipherSuites, zimbraSSLIncludeCipherSuites, zimbraSSLPrivateKey, zimbraSaslGssapiRequiresTls, zimbraScheduledTaskNumThreads, zimbraServerExtraObjectClass, zimbraServerInheritedAttr, zimbraShareNotificationMtaAuthAccount, zimbraShareNotificationMtaAuthPassword, zimbraShareNotificationMtaAuthRequired, zimbraShareNotificationMtaConnectionType, zimbraShareNotificationMtaEnabled, zimbraShareNotificationMtaHostname, zimbraShareNotificationMtaPort, zimbraSharingUpdatePublishInterval, zimbraSkinBackgroundColor, zimbraSkinFavicon, zimbraSkinForegroundColor, zimbraSkinLogoAppBanner, zimbraSkinLogoLoginBanner, zimbraSkinLogoURL, zimbraSkinSecondaryColor, zimbraSkinSelectionColor, zimbraSmtpHostname, zimbraSmtpPort, zimbraSmtpSendAddAuthenticatedUser, zimbraSmtpSendAddMailer, zimbraSmtpSendAddOriginatingIP, zimbraSmtpSendPartial, zimbraSmtpTimeout, zimbraSoapExposeVersion, zimbraSoapRequestMaxSize, zimbraSpamCheckEnabled, zimbraSpamHeader, zimbraSpamHeaderValue, zimbraSpamIsNotSpamAccount, zimbraSpamIsSpamAccount, zimbraSpamKillPercent, zimbraSpamReportEnvelopeFrom, zimbraSpamReportSenderHeader, zimbraSpamReportTypeHam, zimbraSpamReportTypeHeader, zimbraSpamReportTypeSpam, zimbraSpamSubjectTag, zimbraSpamTagPercent, zimbraSpamTrashAlias, zimbraSpamWhitelistHeader, zimbraSpamWhitelistHeaderValue, zimbraSpellAvailableDictionary, zimbraSpellCheckURL, zimbraSpnegoAuthEnabled, zimbraSpnegoAuthErrorURL, zimbraSpnegoAuthRealm, zimbraSslCaCert, zimbraSslCaKey, zimbraStatThreadNamePrefix, zimbraTableMaintenanceGrowthFactor, zimbraTableMaintenanceMaxRows, zimbraTableMaintenanceMinRows, zimbraTableMaintenanceOperation, zimbraThreadMonitorEnabled, zimbraThrottleSafeHosts, zimbraThrottleWhitelist, zimbraUCProviderEnabled, zimbraVersionCheckInterval, zimbraVersionCheckLastAttempt, zimbraVersionCheckLastResponse, zimbraVersionCheckLastSuccess, zimbraVersionCheckNotificationBody, zimbraVersionCheckNotificationEmail, zimbraVersionCheckNotificationEmailFrom, zimbraVersionCheckNotificationSubject, zimbraVersionCheckSendNotifications, zimbraVersionCheckServer, zimbraVersionCheckURL, zimbraVirusBlockEncryptedArchive, zimbraVirusCheckEnabled, zimbraVirusDefinitionsUpdateFrequency, zimbraVirusWarnAdmin, zimbraVirusWarnRecipient, zimbraWebClientAdminReference, zimbraWebClientLoginURL, zimbraWebClientLoginURLAllowedIP, zimbraWebClientLoginURLAllowedUA, zimbraWebClientLogoutURL, zimbraWebClientLogoutURLAllowedIP, zimbraWebClientLogoutURLAllowedUA, zimbraWebClientMaxInputBufferLength, zimbraWebClientURL, zimbraWebGzipEnabled, zimbraXMPPEnabled, zimbraXMPPServerDialbackKey, zimbraZimletDataSensitiveInMixedModeDisabled, zimbraZimletDomainAvailableZimlets, zimbraZimletJspEnabled, zimbraZookeeperClientServerList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraGlobalConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "global config" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGlobalConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
