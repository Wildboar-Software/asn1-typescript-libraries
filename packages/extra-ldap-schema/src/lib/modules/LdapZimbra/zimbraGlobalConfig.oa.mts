/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraGlobalConfig } from "../LdapZimbra/id-oc-zimbraGlobalConfig.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAccountClientAttr } from "./zimbraAccountClientAttr.oa.mjs";
import { zimbraAccountExtraObjectClass } from "./zimbraAccountExtraObjectClass.oa.mjs";
import { zimbraAdminAccessControlMech } from "./zimbraAdminAccessControlMech.oa.mjs";
import { zimbraAdminConsoleCatchAllAddressEnabled } from "./zimbraAdminConsoleCatchAllAddressEnabled.oa.mjs";
import { zimbraAdminConsoleDNSCheckEnabled } from "./zimbraAdminConsoleDNSCheckEnabled.oa.mjs";
import { zimbraAdminConsoleLDAPAuthEnabled } from "./zimbraAdminConsoleLDAPAuthEnabled.oa.mjs";
import { zimbraAdminConsoleLoginMessage } from "./zimbraAdminConsoleLoginMessage.oa.mjs";
import { zimbraAdminConsoleLoginURL } from "./zimbraAdminConsoleLoginURL.oa.mjs";
import { zimbraAdminConsoleLogoutURL } from "./zimbraAdminConsoleLogoutURL.oa.mjs";
import { zimbraAdminConsoleSkinEnabled } from "./zimbraAdminConsoleSkinEnabled.oa.mjs";
import { zimbraAdminImapImportNumThreads } from "./zimbraAdminImapImportNumThreads.oa.mjs";
import { zimbraAdminPort } from "./zimbraAdminPort.oa.mjs";
import { zimbraAdminProxyPort } from "./zimbraAdminProxyPort.oa.mjs";
import { zimbraAdminURL } from "./zimbraAdminURL.oa.mjs";
import { zimbraAllowNonLDHCharsInDomain } from "./zimbraAllowNonLDHCharsInDomain.oa.mjs";
import { zimbraAlwaysOnClusterId } from "./zimbraAlwaysOnClusterId.oa.mjs";
import { zimbraAmavisDSPAMEnabled } from "./zimbraAmavisDSPAMEnabled.oa.mjs";
import { zimbraAmavisEnableDKIMVerification } from "./zimbraAmavisEnableDKIMVerification.oa.mjs";
import { zimbraAmavisFinalSpamDestiny } from "./zimbraAmavisFinalSpamDestiny.oa.mjs";
import { zimbraAmavisLogLevel } from "./zimbraAmavisLogLevel.oa.mjs";
import { zimbraAmavisMaxServers } from "./zimbraAmavisMaxServers.oa.mjs";
import { zimbraAmavisOriginatingBypassSA } from "./zimbraAmavisOriginatingBypassSA.oa.mjs";
import { zimbraAmavisOutboundDisclaimersOnly } from "./zimbraAmavisOutboundDisclaimersOnly.oa.mjs";
import { zimbraAmavisQuarantineAccount } from "./zimbraAmavisQuarantineAccount.oa.mjs";
import { zimbraAmavisSALogLevel } from "./zimbraAmavisSALogLevel.oa.mjs";
import { zimbraAntispamExtractionBatchDelay } from "./zimbraAntispamExtractionBatchDelay.oa.mjs";
import { zimbraAntispamExtractionBatchSize } from "./zimbraAntispamExtractionBatchSize.oa.mjs";
import { zimbraArchiveEnabled } from "./zimbraArchiveEnabled.oa.mjs";
import { zimbraArchiveMailFrom } from "./zimbraArchiveMailFrom.oa.mjs";
import { zimbraAttachmentsBlocked } from "./zimbraAttachmentsBlocked.oa.mjs";
import { zimbraAttachmentsIndexedTextLimit } from "./zimbraAttachmentsIndexedTextLimit.oa.mjs";
import { zimbraAttachmentsScanClass } from "./zimbraAttachmentsScanClass.oa.mjs";
import { zimbraAttachmentsScanEnabled } from "./zimbraAttachmentsScanEnabled.oa.mjs";
import { zimbraAttachmentsScanURL } from "./zimbraAttachmentsScanURL.oa.mjs";
import { zimbraAttachmentsViewInHtmlOnly } from "./zimbraAttachmentsViewInHtmlOnly.oa.mjs";
import { zimbraAuthTokenKey } from "./zimbraAuthTokenKey.oa.mjs";
import { zimbraAuthTokenNotificationInterval } from "./zimbraAuthTokenNotificationInterval.oa.mjs";
import { zimbraAuthTokenValidityValueEnabled } from "./zimbraAuthTokenValidityValueEnabled.oa.mjs";
import { zimbraAutoProvBatchSize } from "./zimbraAutoProvBatchSize.oa.mjs";
import { zimbraAutoProvNotificationBody } from "./zimbraAutoProvNotificationBody.oa.mjs";
import { zimbraAutoProvNotificationSubject } from "./zimbraAutoProvNotificationSubject.oa.mjs";
import { zimbraAutoProvPollingInterval } from "./zimbraAutoProvPollingInterval.oa.mjs";
import { zimbraAutoSubmittedNullReturnPath } from "./zimbraAutoSubmittedNullReturnPath.oa.mjs";
import { zimbraBackupAutoGroupedInterval } from "./zimbraBackupAutoGroupedInterval.oa.mjs";
import { zimbraBackupAutoGroupedNumGroups } from "./zimbraBackupAutoGroupedNumGroups.oa.mjs";
import { zimbraBackupAutoGroupedThrottled } from "./zimbraBackupAutoGroupedThrottled.oa.mjs";
import { zimbraBackupMinFreeSpace } from "./zimbraBackupMinFreeSpace.oa.mjs";
import { zimbraBackupMode } from "./zimbraBackupMode.oa.mjs";
import { zimbraBackupReportEmailRecipients } from "./zimbraBackupReportEmailRecipients.oa.mjs";
import { zimbraBackupReportEmailSender } from "./zimbraBackupReportEmailSender.oa.mjs";
import { zimbraBackupReportEmailSubjectPrefix } from "./zimbraBackupReportEmailSubjectPrefix.oa.mjs";
import { zimbraBackupSkipBlobs } from "./zimbraBackupSkipBlobs.oa.mjs";
import { zimbraBackupSkipHsmBlobs } from "./zimbraBackupSkipHsmBlobs.oa.mjs";
import { zimbraBackupSkipSearchIndex } from "./zimbraBackupSkipSearchIndex.oa.mjs";
import { zimbraBackupTarget } from "./zimbraBackupTarget.oa.mjs";
import { zimbraBasicAuthRealm } from "./zimbraBasicAuthRealm.oa.mjs";
import { zimbraCBPolicydAccessControlEnabled } from "./zimbraCBPolicydAccessControlEnabled.oa.mjs";
import { zimbraCBPolicydAccountingEnabled } from "./zimbraCBPolicydAccountingEnabled.oa.mjs";
import { zimbraCBPolicydAmavisEnabled } from "./zimbraCBPolicydAmavisEnabled.oa.mjs";
import { zimbraCBPolicydBindPort } from "./zimbraCBPolicydBindPort.oa.mjs";
import { zimbraCBPolicydBypassMode } from "./zimbraCBPolicydBypassMode.oa.mjs";
import { zimbraCBPolicydBypassTimeout } from "./zimbraCBPolicydBypassTimeout.oa.mjs";
import { zimbraCBPolicydCheckHeloEnabled } from "./zimbraCBPolicydCheckHeloEnabled.oa.mjs";
import { zimbraCBPolicydCheckSPFEnabled } from "./zimbraCBPolicydCheckSPFEnabled.oa.mjs";
import { zimbraCBPolicydGreylistingBlacklistMsg } from "./zimbraCBPolicydGreylistingBlacklistMsg.oa.mjs";
import { zimbraCBPolicydGreylistingDeferMsg } from "./zimbraCBPolicydGreylistingDeferMsg.oa.mjs";
import { zimbraCBPolicydGreylistingEnabled } from "./zimbraCBPolicydGreylistingEnabled.oa.mjs";
import { zimbraCBPolicydGreylistingTrainingEnabled } from "./zimbraCBPolicydGreylistingTrainingEnabled.oa.mjs";
import { zimbraCBPolicydLogLevel } from "./zimbraCBPolicydLogLevel.oa.mjs";
import { zimbraCBPolicydMaxRequests } from "./zimbraCBPolicydMaxRequests.oa.mjs";
import { zimbraCBPolicydMaxServers } from "./zimbraCBPolicydMaxServers.oa.mjs";
import { zimbraCBPolicydMaxSpareServers } from "./zimbraCBPolicydMaxSpareServers.oa.mjs";
import { zimbraCBPolicydMinServers } from "./zimbraCBPolicydMinServers.oa.mjs";
import { zimbraCBPolicydMinSpareServers } from "./zimbraCBPolicydMinSpareServers.oa.mjs";
import { zimbraCBPolicydQuotasEnabled } from "./zimbraCBPolicydQuotasEnabled.oa.mjs";
import { zimbraCBPolicydTimeoutBusy } from "./zimbraCBPolicydTimeoutBusy.oa.mjs";
import { zimbraCBPolicydTimeoutIdle } from "./zimbraCBPolicydTimeoutIdle.oa.mjs";
import { zimbraCOSInheritedAttr } from "./zimbraCOSInheritedAttr.oa.mjs";
import { zimbraCalendarCalDavAlternateCalendarHomeSet } from "./zimbraCalendarCalDavAlternateCalendarHomeSet.oa.mjs";
import { zimbraCalendarCalDavCalendarAutoScheduleEnabled } from "./zimbraCalendarCalDavCalendarAutoScheduleEnabled.oa.mjs";
import { zimbraCalendarCalDavClearTextPasswordEnabled } from "./zimbraCalendarCalDavClearTextPasswordEnabled.oa.mjs";
import { zimbraCalendarCalDavDefaultCalendarId } from "./zimbraCalendarCalDavDefaultCalendarId.oa.mjs";
import { zimbraCalendarCalDavDisableFreebusy } from "./zimbraCalendarCalDavDisableFreebusy.oa.mjs";
import { zimbraCalendarCalDavDisableScheduling } from "./zimbraCalendarCalDavDisableScheduling.oa.mjs";
import { zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection } from "./zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection.oa.mjs";
import { zimbraCalendarCompatibilityMode } from "./zimbraCalendarCompatibilityMode.oa.mjs";
import { zimbraCalendarRecurrenceDailyMaxDays } from "./zimbraCalendarRecurrenceDailyMaxDays.oa.mjs";
import { zimbraCalendarRecurrenceMaxInstances } from "./zimbraCalendarRecurrenceMaxInstances.oa.mjs";
import { zimbraCalendarRecurrenceMonthlyMaxMonths } from "./zimbraCalendarRecurrenceMonthlyMaxMonths.oa.mjs";
import { zimbraCalendarRecurrenceOtherFrequencyMaxYears } from "./zimbraCalendarRecurrenceOtherFrequencyMaxYears.oa.mjs";
import { zimbraCalendarRecurrenceWeeklyMaxWeeks } from "./zimbraCalendarRecurrenceWeeklyMaxWeeks.oa.mjs";
import { zimbraCalendarRecurrenceYearlyMaxYears } from "./zimbraCalendarRecurrenceYearlyMaxYears.oa.mjs";
import { zimbraCalendarResourceExtraObjectClass } from "./zimbraCalendarResourceExtraObjectClass.oa.mjs";
import { zimbraCertAuthorityCertSelfSigned } from "./zimbraCertAuthorityCertSelfSigned.oa.mjs";
import { zimbraCertAuthorityKeySelfSigned } from "./zimbraCertAuthorityKeySelfSigned.oa.mjs";
import { zimbraChangePasswordURL } from "./zimbraChangePasswordURL.oa.mjs";
import { zimbraClamAVBindAddress } from "./zimbraClamAVBindAddress.oa.mjs";
import { zimbraClamAVListenPort } from "./zimbraClamAVListenPort.oa.mjs";
import { zimbraClamAVMaxThreads } from "./zimbraClamAVMaxThreads.oa.mjs";
import { zimbraClientTypeRegex } from "./zimbraClientTypeRegex.oa.mjs";
import { zimbraClusterType } from "./zimbraClusterType.oa.mjs";
import { zimbraCommunityAPIClientID } from "./zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "./zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "./zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "./zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "./zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraComponentAvailable } from "./zimbraComponentAvailable.oa.mjs";
import { zimbraConfiguredServerIDForBlobDirEnabled } from "./zimbraConfiguredServerIDForBlobDirEnabled.oa.mjs";
import { zimbraConstraint } from "./zimbraConstraint.oa.mjs";
import { zimbraContactHiddenAttributes } from "./zimbraContactHiddenAttributes.oa.mjs";
import { zimbraContactRankingTableRefreshInterval } from "./zimbraContactRankingTableRefreshInterval.oa.mjs";
import { zimbraConvertdURL } from "./zimbraConvertdURL.oa.mjs";
import { zimbraCosExtraObjectClass } from "./zimbraCosExtraObjectClass.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraCsrfAllowedRefererHosts } from "./zimbraCsrfAllowedRefererHosts.oa.mjs";
import { zimbraCsrfRefererCheckEnabled } from "./zimbraCsrfRefererCheckEnabled.oa.mjs";
import { zimbraCsrfTokenCheckEnabled } from "./zimbraCsrfTokenCheckEnabled.oa.mjs";
import { zimbraCsrfTokenKey } from "./zimbraCsrfTokenKey.oa.mjs";
import { zimbraCustomMimeHeaderNameAllowed } from "./zimbraCustomMimeHeaderNameAllowed.oa.mjs";
import { zimbraDNSCheckHostname } from "./zimbraDNSCheckHostname.oa.mjs";
import { zimbraDNSMasterIP } from "./zimbraDNSMasterIP.oa.mjs";
import { zimbraDNSTCPUpstream } from "./zimbraDNSTCPUpstream.oa.mjs";
import { zimbraDNSUseTCP } from "./zimbraDNSUseTCP.oa.mjs";
import { zimbraDNSUseUDP } from "./zimbraDNSUseUDP.oa.mjs";
import { zimbraDataSourceConnectTimeout } from "./zimbraDataSourceConnectTimeout.oa.mjs";
import { zimbraDataSourceConnectionType } from "./zimbraDataSourceConnectionType.oa.mjs";
import { zimbraDataSourceReadTimeout } from "./zimbraDataSourceReadTimeout.oa.mjs";
import { zimbraDatabaseSlowSqlThreshold } from "./zimbraDatabaseSlowSqlThreshold.oa.mjs";
import { zimbraDefaultAnalyzerStopWords } from "./zimbraDefaultAnalyzerStopWords.oa.mjs";
import { zimbraDefaultDomainName } from "./zimbraDefaultDomainName.oa.mjs";
import { zimbraDomainAdminModifiableAttr } from "./zimbraDomainAdminModifiableAttr.oa.mjs";
import { zimbraDomainAggregateQuota } from "./zimbraDomainAggregateQuota.oa.mjs";
import { zimbraDomainAggregateQuotaPolicy } from "./zimbraDomainAggregateQuotaPolicy.oa.mjs";
import { zimbraDomainAggregateQuotaWarnEmailRecipient } from "./zimbraDomainAggregateQuotaWarnEmailRecipient.oa.mjs";
import { zimbraDomainAggregateQuotaWarnPercent } from "./zimbraDomainAggregateQuotaWarnPercent.oa.mjs";
import { zimbraDomainExtraObjectClass } from "./zimbraDomainExtraObjectClass.oa.mjs";
import { zimbraDomainInheritedAttr } from "./zimbraDomainInheritedAttr.oa.mjs";
import { zimbraDomainMandatoryMailSignatureEnabled } from "./zimbraDomainMandatoryMailSignatureEnabled.oa.mjs";
import { zimbraDomainMandatoryMailSignatureHTML } from "./zimbraDomainMandatoryMailSignatureHTML.oa.mjs";
import { zimbraDomainMandatoryMailSignatureText } from "./zimbraDomainMandatoryMailSignatureText.oa.mjs";
import { zimbraDomainStatus } from "./zimbraDomainStatus.oa.mjs";
import { zimbraEmptyFolderOpTimeout } from "./zimbraEmptyFolderOpTimeout.oa.mjs";
import { zimbraErrorReportUrl } from "./zimbraErrorReportUrl.oa.mjs";
import { zimbraExternalAccountProvisioningKey } from "./zimbraExternalAccountProvisioningKey.oa.mjs";
import { zimbraExternalAccountStatusCheckInterval } from "./zimbraExternalAccountStatusCheckInterval.oa.mjs";
import { zimbraExternalShareInvitationUrlExpiration } from "./zimbraExternalShareInvitationUrlExpiration.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "./zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFileUploadMaxSize } from "./zimbraFileUploadMaxSize.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "./zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraForceClearCookies } from "./zimbraForceClearCookies.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "./zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "./zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "./zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "./zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "./zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeServerType } from "./zimbraFreebusyExchangeServerType.oa.mjs";
import { zimbraFreebusyExchangeURL } from "./zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "./zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraFreebusyExternalZimbraURL } from "./zimbraFreebusyExternalZimbraURL.oa.mjs";
import { zimbraFreebusyPropagationRetryInterval } from "./zimbraFreebusyPropagationRetryInterval.oa.mjs";
import { zimbraGalAlwaysIncludeLocalCalendarResources } from "./zimbraGalAlwaysIncludeLocalCalendarResources.oa.mjs";
import { zimbraGalAutoCompleteLdapFilter } from "./zimbraGalAutoCompleteLdapFilter.oa.mjs";
import { zimbraGalGroupIndicatorEnabled } from "./zimbraGalGroupIndicatorEnabled.oa.mjs";
import { zimbraGalInternalSearchBase } from "./zimbraGalInternalSearchBase.oa.mjs";
import { zimbraGalLdapAttrMap } from "./zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapFilterDef } from "./zimbraGalLdapFilterDef.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "./zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapPageSize } from "./zimbraGalLdapPageSize.oa.mjs";
import { zimbraGalLdapValueMap } from "./zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalMaxResults } from "./zimbraGalMaxResults.oa.mjs";
import { zimbraGalSyncInternalSearchBase } from "./zimbraGalSyncInternalSearchBase.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "./zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncMaxConcurrentClients } from "./zimbraGalSyncMaxConcurrentClients.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "./zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalTokenizeAutoCompleteKey } from "./zimbraGalTokenizeAutoCompleteKey.oa.mjs";
import { zimbraGalTokenizeSearchKey } from "./zimbraGalTokenizeSearchKey.oa.mjs";
import { zimbraGlobalConfigExtraObjectClass } from "./zimbraGlobalConfigExtraObjectClass.oa.mjs";
import { zimbraHelpAdminURL } from "./zimbraHelpAdminURL.oa.mjs";
import { zimbraHelpAdvancedURL } from "./zimbraHelpAdvancedURL.oa.mjs";
import { zimbraHelpDelegatedURL } from "./zimbraHelpDelegatedURL.oa.mjs";
import { zimbraHelpStandardURL } from "./zimbraHelpStandardURL.oa.mjs";
import { zimbraHsmAge } from "./zimbraHsmAge.oa.mjs";
import { zimbraHsmBatchSize } from "./zimbraHsmBatchSize.oa.mjs";
import { zimbraHsmMovePreviousRevisions } from "./zimbraHsmMovePreviousRevisions.oa.mjs";
import { zimbraHsmPolicy } from "./zimbraHsmPolicy.oa.mjs";
import { zimbraHttpCompressionEnabled } from "./zimbraHttpCompressionEnabled.oa.mjs";
import { zimbraHttpConnectorMaxIdleTimeMillis } from "./zimbraHttpConnectorMaxIdleTimeMillis.oa.mjs";
import { zimbraHttpContextPathBasedThreadPoolBalancingFilterRules } from "./zimbraHttpContextPathBasedThreadPoolBalancingFilterRules.oa.mjs";
import { zimbraHttpDebugHandlerEnabled } from "./zimbraHttpDebugHandlerEnabled.oa.mjs";
import { zimbraHttpDosFilterDelayMillis } from "./zimbraHttpDosFilterDelayMillis.oa.mjs";
import { zimbraHttpDosFilterMaxRequestsPerSec } from "./zimbraHttpDosFilterMaxRequestsPerSec.oa.mjs";
import { zimbraHttpHeaderCacheSize } from "./zimbraHttpHeaderCacheSize.oa.mjs";
import { zimbraHttpMaxFormContentSize } from "./zimbraHttpMaxFormContentSize.oa.mjs";
import { zimbraHttpNumThreads } from "./zimbraHttpNumThreads.oa.mjs";
import { zimbraHttpOutputBufferSize } from "./zimbraHttpOutputBufferSize.oa.mjs";
import { zimbraHttpProxyURL } from "./zimbraHttpProxyURL.oa.mjs";
import { zimbraHttpRequestHeaderSize } from "./zimbraHttpRequestHeaderSize.oa.mjs";
import { zimbraHttpResponseHeaderSize } from "./zimbraHttpResponseHeaderSize.oa.mjs";
import { zimbraHttpSSLNumThreads } from "./zimbraHttpSSLNumThreads.oa.mjs";
import { zimbraHttpThreadPoolMaxIdleTimeMillis } from "./zimbraHttpThreadPoolMaxIdleTimeMillis.oa.mjs";
import { zimbraHttpThrottleSafeIPs } from "./zimbraHttpThrottleSafeIPs.oa.mjs";
import { zimbraIPMode } from "./zimbraIPMode.oa.mjs";
import { zimbraImapBindOnStartup } from "./zimbraImapBindOnStartup.oa.mjs";
import { zimbraImapBindPort } from "./zimbraImapBindPort.oa.mjs";
import { zimbraImapCleartextLoginEnabled } from "./zimbraImapCleartextLoginEnabled.oa.mjs";
import { zimbraImapDisabledCapability } from "./zimbraImapDisabledCapability.oa.mjs";
import { zimbraImapExposeVersionOnBanner } from "./zimbraImapExposeVersionOnBanner.oa.mjs";
import { zimbraImapMaxConnections } from "./zimbraImapMaxConnections.oa.mjs";
import { zimbraImapMaxRequestSize } from "./zimbraImapMaxRequestSize.oa.mjs";
import { zimbraImapNumThreads } from "./zimbraImapNumThreads.oa.mjs";
import { zimbraImapProxyBindPort } from "./zimbraImapProxyBindPort.oa.mjs";
import { zimbraImapSSLBindOnStartup } from "./zimbraImapSSLBindOnStartup.oa.mjs";
import { zimbraImapSSLBindPort } from "./zimbraImapSSLBindPort.oa.mjs";
import { zimbraImapSSLDisabledCapability } from "./zimbraImapSSLDisabledCapability.oa.mjs";
import { zimbraImapSSLProxyBindPort } from "./zimbraImapSSLProxyBindPort.oa.mjs";
import { zimbraImapSSLServerEnabled } from "./zimbraImapSSLServerEnabled.oa.mjs";
import { zimbraImapSaslGssapiEnabled } from "./zimbraImapSaslGssapiEnabled.oa.mjs";
import { zimbraImapServerEnabled } from "./zimbraImapServerEnabled.oa.mjs";
import { zimbraImapShutdownGraceSeconds } from "./zimbraImapShutdownGraceSeconds.oa.mjs";
import { zimbraInstalledSkin } from "./zimbraInstalledSkin.oa.mjs";
import { zimbraInternalSharingCrossDomainEnabled } from "./zimbraInternalSharingCrossDomainEnabled.oa.mjs";
import { zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating } from "./zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating.oa.mjs";
import { zimbraInvalidLoginFilterMaxFailedLogin } from "./zimbraInvalidLoginFilterMaxFailedLogin.oa.mjs";
import { zimbraInvalidLoginFilterMaxSizeOfFailedIpDb } from "./zimbraInvalidLoginFilterMaxSizeOfFailedIpDb.oa.mjs";
import { zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin } from "./zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin.oa.mjs";
import { zimbraItemActionBatchSize } from "./zimbraItemActionBatchSize.oa.mjs";
import { zimbraLastLogonTimestampFrequency } from "./zimbraLastLogonTimestampFrequency.oa.mjs";
import { zimbraLastPurgeMaxDuration } from "./zimbraLastPurgeMaxDuration.oa.mjs";
import { zimbraLdapGalSyncDisabled } from "./zimbraLdapGalSyncDisabled.oa.mjs";
import { zimbraLmtpBindOnStartup } from "./zimbraLmtpBindOnStartup.oa.mjs";
import { zimbraLmtpBindPort } from "./zimbraLmtpBindPort.oa.mjs";
import { zimbraLmtpExposeVersionOnBanner } from "./zimbraLmtpExposeVersionOnBanner.oa.mjs";
import { zimbraLmtpLHLORequired } from "./zimbraLmtpLHLORequired.oa.mjs";
import { zimbraLmtpNumThreads } from "./zimbraLmtpNumThreads.oa.mjs";
import { zimbraLmtpPermanentFailureWhenOverQuota } from "./zimbraLmtpPermanentFailureWhenOverQuota.oa.mjs";
import { zimbraLmtpServerEnabled } from "./zimbraLmtpServerEnabled.oa.mjs";
import { zimbraLmtpShutdownGraceSeconds } from "./zimbraLmtpShutdownGraceSeconds.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraLogHostname } from "./zimbraLogHostname.oa.mjs";
import { zimbraLogRawLifetime } from "./zimbraLogRawLifetime.oa.mjs";
import { zimbraLogSummaryLifetime } from "./zimbraLogSummaryLifetime.oa.mjs";
import { zimbraLogToSyslog } from "./zimbraLogToSyslog.oa.mjs";
import { zimbraLowestSupportedAuthVersion } from "./zimbraLowestSupportedAuthVersion.oa.mjs";
import { zimbraMailAddressValidationRegex } from "./zimbraMailAddressValidationRegex.oa.mjs";
import { zimbraMailClearTextPasswordEnabled } from "./zimbraMailClearTextPasswordEnabled.oa.mjs";
import { zimbraMailContentMaxSize } from "./zimbraMailContentMaxSize.oa.mjs";
import { zimbraMailDiskStreamingThreshold } from "./zimbraMailDiskStreamingThreshold.oa.mjs";
import { zimbraMailDomainQuota } from "./zimbraMailDomainQuota.oa.mjs";
import { zimbraMailEmptyFolderBatchSize } from "./zimbraMailEmptyFolderBatchSize.oa.mjs";
import { zimbraMailEmptyFolderBatchThreshold } from "./zimbraMailEmptyFolderBatchThreshold.oa.mjs";
import { zimbraMailFileDescriptorBufferSize } from "./zimbraMailFileDescriptorBufferSize.oa.mjs";
import { zimbraMailFileDescriptorCacheSize } from "./zimbraMailFileDescriptorCacheSize.oa.mjs";
import { zimbraMailKeepOutWebCrawlers } from "./zimbraMailKeepOutWebCrawlers.oa.mjs";
import { zimbraMailMode } from "./zimbraMailMode.oa.mjs";
import { zimbraMailPort } from "./zimbraMailPort.oa.mjs";
import { zimbraMailProxyMaxFails } from "./zimbraMailProxyMaxFails.oa.mjs";
import { zimbraMailProxyPort } from "./zimbraMailProxyPort.oa.mjs";
import { zimbraMailProxyReconnectTimeout } from "./zimbraMailProxyReconnectTimeout.oa.mjs";
import { zimbraMailPurgeBatchSize } from "./zimbraMailPurgeBatchSize.oa.mjs";
import { zimbraMailPurgeSleepInterval } from "./zimbraMailPurgeSleepInterval.oa.mjs";
import { zimbraMailPurgeSystemPolicy } from "./zimbraMailPurgeSystemPolicy.oa.mjs";
import { zimbraMailRedirectSetEnvelopeSender } from "./zimbraMailRedirectSetEnvelopeSender.oa.mjs";
import { zimbraMailReferMode } from "./zimbraMailReferMode.oa.mjs";
import { zimbraMailSSLClientCertMode } from "./zimbraMailSSLClientCertMode.oa.mjs";
import { zimbraMailSSLClientCertOCSPEnabled } from "./zimbraMailSSLClientCertOCSPEnabled.oa.mjs";
import { zimbraMailSSLClientCertPort } from "./zimbraMailSSLClientCertPort.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMap } from "./zimbraMailSSLClientCertPrincipalMap.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled } from "./zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled.oa.mjs";
import { zimbraMailSSLPort } from "./zimbraMailSSLPort.oa.mjs";
import { zimbraMailSSLProxyClientCertPort } from "./zimbraMailSSLProxyClientCertPort.oa.mjs";
import { zimbraMailSSLProxyPort } from "./zimbraMailSSLProxyPort.oa.mjs";
import { zimbraMailTrustedIP } from "./zimbraMailTrustedIP.oa.mjs";
import { zimbraMailURL } from "./zimbraMailURL.oa.mjs";
import { zimbraMailUncompressedCacheMaxBytes } from "./zimbraMailUncompressedCacheMaxBytes.oa.mjs";
import { zimbraMailUncompressedCacheMaxFiles } from "./zimbraMailUncompressedCacheMaxFiles.oa.mjs";
import { zimbraMailUseDirectBuffers } from "./zimbraMailUseDirectBuffers.oa.mjs";
import { zimbraMailboxMoveSkipBlobs } from "./zimbraMailboxMoveSkipBlobs.oa.mjs";
import { zimbraMailboxMoveSkipHsmBlobs } from "./zimbraMailboxMoveSkipHsmBlobs.oa.mjs";
import { zimbraMailboxMoveSkipSearchIndex } from "./zimbraMailboxMoveSkipSearchIndex.oa.mjs";
import { zimbraMailboxMoveTempDir } from "./zimbraMailboxMoveTempDir.oa.mjs";
import { zimbraMailboxdSSLProtocols } from "./zimbraMailboxdSSLProtocols.oa.mjs";
import { zimbraMemcachedBindPort } from "./zimbraMemcachedBindPort.oa.mjs";
import { zimbraMemcachedClientBinaryProtocolEnabled } from "./zimbraMemcachedClientBinaryProtocolEnabled.oa.mjs";
import { zimbraMemcachedClientExpirySeconds } from "./zimbraMemcachedClientExpirySeconds.oa.mjs";
import { zimbraMemcachedClientHashAlgorithm } from "./zimbraMemcachedClientHashAlgorithm.oa.mjs";
import { zimbraMemcachedClientServerList } from "./zimbraMemcachedClientServerList.oa.mjs";
import { zimbraMemcachedClientTimeoutMillis } from "./zimbraMemcachedClientTimeoutMillis.oa.mjs";
import { zimbraMessageCacheSize } from "./zimbraMessageCacheSize.oa.mjs";
import { zimbraMessageChannelEnabled } from "./zimbraMessageChannelEnabled.oa.mjs";
import { zimbraMessageChannelPort } from "./zimbraMessageChannelPort.oa.mjs";
import { zimbraMessageIdDedupeCacheSize } from "./zimbraMessageIdDedupeCacheSize.oa.mjs";
import { zimbraMessageIdDedupeCacheTimeout } from "./zimbraMessageIdDedupeCacheTimeout.oa.mjs";
import { zimbraMilterBindPort } from "./zimbraMilterBindPort.oa.mjs";
import { zimbraMilterMaxConnections } from "./zimbraMilterMaxConnections.oa.mjs";
import { zimbraMilterNumThreads } from "./zimbraMilterNumThreads.oa.mjs";
import { zimbraMilterServerEnabled } from "./zimbraMilterServerEnabled.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "./zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMaxMessageSize } from "./zimbraMobileMaxMessageSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "./zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMobileMetadataRetentionPolicy } from "./zimbraMobileMetadataRetentionPolicy.oa.mjs";
import { zimbraMtaAddressVerifyNegativeRefreshTime } from "./zimbraMtaAddressVerifyNegativeRefreshTime.oa.mjs";
import { zimbraMtaAddressVerifyPollCount } from "./zimbraMtaAddressVerifyPollCount.oa.mjs";
import { zimbraMtaAddressVerifyPollDelay } from "./zimbraMtaAddressVerifyPollDelay.oa.mjs";
import { zimbraMtaAddressVerifyPositiveRefreshTime } from "./zimbraMtaAddressVerifyPositiveRefreshTime.oa.mjs";
import { zimbraMtaAliasMaps } from "./zimbraMtaAliasMaps.oa.mjs";
import { zimbraMtaAlwaysAddMissingHeaders } from "./zimbraMtaAlwaysAddMissingHeaders.oa.mjs";
import { zimbraMtaAntiSpamLockMethod } from "./zimbraMtaAntiSpamLockMethod.oa.mjs";
import { zimbraMtaAuthEnabled } from "./zimbraMtaAuthEnabled.oa.mjs";
import { zimbraMtaAuthHost } from "./zimbraMtaAuthHost.oa.mjs";
import { zimbraMtaAuthTarget } from "./zimbraMtaAuthTarget.oa.mjs";
import { zimbraMtaAuthURL } from "./zimbraMtaAuthURL.oa.mjs";
import { zimbraMtaBlockedExtension } from "./zimbraMtaBlockedExtension.oa.mjs";
import { zimbraMtaBlockedExtensionWarnAdmin } from "./zimbraMtaBlockedExtensionWarnAdmin.oa.mjs";
import { zimbraMtaBlockedExtensionWarnRecipient } from "./zimbraMtaBlockedExtensionWarnRecipient.oa.mjs";
import { zimbraMtaBounceNoticeRecipient } from "./zimbraMtaBounceNoticeRecipient.oa.mjs";
import { zimbraMtaBounceQueueLifetime } from "./zimbraMtaBounceQueueLifetime.oa.mjs";
import { zimbraMtaBrokenSaslAuthClients } from "./zimbraMtaBrokenSaslAuthClients.oa.mjs";
import { zimbraMtaCommandDirectory } from "./zimbraMtaCommandDirectory.oa.mjs";
import { zimbraMtaCommonBlockedExtension } from "./zimbraMtaCommonBlockedExtension.oa.mjs";
import { zimbraMtaDaemonDirectory } from "./zimbraMtaDaemonDirectory.oa.mjs";
import { zimbraMtaDefaultProcessLimit } from "./zimbraMtaDefaultProcessLimit.oa.mjs";
import { zimbraMtaDelayWarningTime } from "./zimbraMtaDelayWarningTime.oa.mjs";
import { zimbraMtaDnsLookupsEnabled } from "./zimbraMtaDnsLookupsEnabled.oa.mjs";
import { zimbraMtaEnableSmtpdPolicyd } from "./zimbraMtaEnableSmtpdPolicyd.oa.mjs";
import { zimbraMtaFallbackRelayHost } from "./zimbraMtaFallbackRelayHost.oa.mjs";
import { zimbraMtaHeaderChecks } from "./zimbraMtaHeaderChecks.oa.mjs";
import { zimbraMtaImportEnvironment } from "./zimbraMtaImportEnvironment.oa.mjs";
import { zimbraMtaInFlowDelay } from "./zimbraMtaInFlowDelay.oa.mjs";
import { zimbraMtaLmdbMapSize } from "./zimbraMtaLmdbMapSize.oa.mjs";
import { zimbraMtaLmtpConnectionCacheDestinations } from "./zimbraMtaLmtpConnectionCacheDestinations.oa.mjs";
import { zimbraMtaLmtpConnectionCacheTimeLimit } from "./zimbraMtaLmtpConnectionCacheTimeLimit.oa.mjs";
import { zimbraMtaLmtpHostLookup } from "./zimbraMtaLmtpHostLookup.oa.mjs";
import { zimbraMtaLmtpTlsCAfile } from "./zimbraMtaLmtpTlsCAfile.oa.mjs";
import { zimbraMtaLmtpTlsCApath } from "./zimbraMtaLmtpTlsCApath.oa.mjs";
import { zimbraMtaLmtpTlsCiphers } from "./zimbraMtaLmtpTlsCiphers.oa.mjs";
import { zimbraMtaLmtpTlsExcludeCiphers } from "./zimbraMtaLmtpTlsExcludeCiphers.oa.mjs";
import { zimbraMtaLmtpTlsLoglevel } from "./zimbraMtaLmtpTlsLoglevel.oa.mjs";
import { zimbraMtaLmtpTlsMandatoryCiphers } from "./zimbraMtaLmtpTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaLmtpTlsProtocols } from "./zimbraMtaLmtpTlsProtocols.oa.mjs";
import { zimbraMtaLmtpTlsSecurityLevel } from "./zimbraMtaLmtpTlsSecurityLevel.oa.mjs";
import { zimbraMtaMailqPath } from "./zimbraMtaMailqPath.oa.mjs";
import { zimbraMtaManpageDirectory } from "./zimbraMtaManpageDirectory.oa.mjs";
import { zimbraMtaMaxMessageSize } from "./zimbraMtaMaxMessageSize.oa.mjs";
import { zimbraMtaMaxUse } from "./zimbraMtaMaxUse.oa.mjs";
import { zimbraMtaMaximalBackoffTime } from "./zimbraMtaMaximalBackoffTime.oa.mjs";
import { zimbraMtaMilterCommandTimeout } from "./zimbraMtaMilterCommandTimeout.oa.mjs";
import { zimbraMtaMilterConnectTimeout } from "./zimbraMtaMilterConnectTimeout.oa.mjs";
import { zimbraMtaMilterContentTimeout } from "./zimbraMtaMilterContentTimeout.oa.mjs";
import { zimbraMtaMilterDefaultAction } from "./zimbraMtaMilterDefaultAction.oa.mjs";
import { zimbraMtaMinimalBackoffTime } from "./zimbraMtaMinimalBackoffTime.oa.mjs";
import { zimbraMtaMyDestination } from "./zimbraMtaMyDestination.oa.mjs";
import { zimbraMtaMyHostname } from "./zimbraMtaMyHostname.oa.mjs";
import { zimbraMtaMyNetworks } from "./zimbraMtaMyNetworks.oa.mjs";
import { zimbraMtaMyOrigin } from "./zimbraMtaMyOrigin.oa.mjs";
import { zimbraMtaNewaliasesPath } from "./zimbraMtaNewaliasesPath.oa.mjs";
import { zimbraMtaNonSmtpdMilters } from "./zimbraMtaNonSmtpdMilters.oa.mjs";
import { zimbraMtaNotifyClasses } from "./zimbraMtaNotifyClasses.oa.mjs";
import { zimbraMtaPolicyTimeLimit } from "./zimbraMtaPolicyTimeLimit.oa.mjs";
import { zimbraMtaPropagateUnmatchedExtensions } from "./zimbraMtaPropagateUnmatchedExtensions.oa.mjs";
import { zimbraMtaQueueDirectory } from "./zimbraMtaQueueDirectory.oa.mjs";
import { zimbraMtaQueueRunDelay } from "./zimbraMtaQueueRunDelay.oa.mjs";
import { zimbraMtaRecipientDelimiter } from "./zimbraMtaRecipientDelimiter.oa.mjs";
import { zimbraMtaRelayHost } from "./zimbraMtaRelayHost.oa.mjs";
import { zimbraMtaRestriction } from "./zimbraMtaRestriction.oa.mjs";
import { zimbraMtaSaslAuthEnable } from "./zimbraMtaSaslAuthEnable.oa.mjs";
import { zimbraMtaSaslSmtpdMechList } from "./zimbraMtaSaslSmtpdMechList.oa.mjs";
import { zimbraMtaSenderCanonicalMaps } from "./zimbraMtaSenderCanonicalMaps.oa.mjs";
import { zimbraMtaSendmailPath } from "./zimbraMtaSendmailPath.oa.mjs";
import { zimbraMtaSmtpCnameOverridesServername } from "./zimbraMtaSmtpCnameOverridesServername.oa.mjs";
import { zimbraMtaSmtpGenericMaps } from "./zimbraMtaSmtpGenericMaps.oa.mjs";
import { zimbraMtaSmtpHeloName } from "./zimbraMtaSmtpHeloName.oa.mjs";
import { zimbraMtaSmtpSaslAuthEnable } from "./zimbraMtaSmtpSaslAuthEnable.oa.mjs";
import { zimbraMtaSmtpSaslMechanismFilter } from "./zimbraMtaSmtpSaslMechanismFilter.oa.mjs";
import { zimbraMtaSmtpSaslPasswordMaps } from "./zimbraMtaSmtpSaslPasswordMaps.oa.mjs";
import { zimbraMtaSmtpSaslSecurityOptions } from "./zimbraMtaSmtpSaslSecurityOptions.oa.mjs";
import { zimbraMtaSmtpTlsCAfile } from "./zimbraMtaSmtpTlsCAfile.oa.mjs";
import { zimbraMtaSmtpTlsCApath } from "./zimbraMtaSmtpTlsCApath.oa.mjs";
import { zimbraMtaSmtpTlsCiphers } from "./zimbraMtaSmtpTlsCiphers.oa.mjs";
import { zimbraMtaSmtpTlsLoglevel } from "./zimbraMtaSmtpTlsLoglevel.oa.mjs";
import { zimbraMtaSmtpTlsMandatoryCiphers } from "./zimbraMtaSmtpTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaSmtpTlsProtocols } from "./zimbraMtaSmtpTlsProtocols.oa.mjs";
import { zimbraMtaSmtpTlsSecurityLevel } from "./zimbraMtaSmtpTlsSecurityLevel.oa.mjs";
import { zimbraMtaSmtpdBanner } from "./zimbraMtaSmtpdBanner.oa.mjs";
import { zimbraMtaSmtpdClientPortLogging } from "./zimbraMtaSmtpdClientPortLogging.oa.mjs";
import { zimbraMtaSmtpdClientRestrictions } from "./zimbraMtaSmtpdClientRestrictions.oa.mjs";
import { zimbraMtaSmtpdDataRestrictions } from "./zimbraMtaSmtpdDataRestrictions.oa.mjs";
import { zimbraMtaSmtpdErrorSleepTime } from "./zimbraMtaSmtpdErrorSleepTime.oa.mjs";
import { zimbraMtaSmtpdHardErrorLimit } from "./zimbraMtaSmtpdHardErrorLimit.oa.mjs";
import { zimbraMtaSmtpdHeloRequired } from "./zimbraMtaSmtpdHeloRequired.oa.mjs";
import { zimbraMtaSmtpdMilters } from "./zimbraMtaSmtpdMilters.oa.mjs";
import { zimbraMtaSmtpdProxyTimeout } from "./zimbraMtaSmtpdProxyTimeout.oa.mjs";
import { zimbraMtaSmtpdRejectUnlistedRecipient } from "./zimbraMtaSmtpdRejectUnlistedRecipient.oa.mjs";
import { zimbraMtaSmtpdRejectUnlistedSender } from "./zimbraMtaSmtpdRejectUnlistedSender.oa.mjs";
import { zimbraMtaSmtpdSaslAuthenticatedHeader } from "./zimbraMtaSmtpdSaslAuthenticatedHeader.oa.mjs";
import { zimbraMtaSmtpdSaslSecurityOptions } from "./zimbraMtaSmtpdSaslSecurityOptions.oa.mjs";
import { zimbraMtaSmtpdSaslTlsSecurityOptions } from "./zimbraMtaSmtpdSaslTlsSecurityOptions.oa.mjs";
import { zimbraMtaSmtpdSenderLoginMaps } from "./zimbraMtaSmtpdSenderLoginMaps.oa.mjs";
import { zimbraMtaSmtpdSenderRestrictions } from "./zimbraMtaSmtpdSenderRestrictions.oa.mjs";
import { zimbraMtaSmtpdTlsAskCcert } from "./zimbraMtaSmtpdTlsAskCcert.oa.mjs";
import { zimbraMtaSmtpdTlsCAfile } from "./zimbraMtaSmtpdTlsCAfile.oa.mjs";
import { zimbraMtaSmtpdTlsCApath } from "./zimbraMtaSmtpdTlsCApath.oa.mjs";
import { zimbraMtaSmtpdTlsCcertVerifydepth } from "./zimbraMtaSmtpdTlsCcertVerifydepth.oa.mjs";
import { zimbraMtaSmtpdTlsCiphers } from "./zimbraMtaSmtpdTlsCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsExcludeCiphers } from "./zimbraMtaSmtpdTlsExcludeCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsLoglevel } from "./zimbraMtaSmtpdTlsLoglevel.oa.mjs";
import { zimbraMtaSmtpdTlsMandatoryCiphers } from "./zimbraMtaSmtpdTlsMandatoryCiphers.oa.mjs";
import { zimbraMtaSmtpdTlsProtocols } from "./zimbraMtaSmtpdTlsProtocols.oa.mjs";
import { zimbraMtaSmtpdVirtualTransport } from "./zimbraMtaSmtpdVirtualTransport.oa.mjs";
import { zimbraMtaStpdSoftErrorLimit } from "./zimbraMtaStpdSoftErrorLimit.oa.mjs";
import { zimbraMtaTlsAppendDefaultCA } from "./zimbraMtaTlsAppendDefaultCA.oa.mjs";
import { zimbraMtaTlsAuthOnly } from "./zimbraMtaTlsAuthOnly.oa.mjs";
import { zimbraMtaTlsSecurityLevel } from "./zimbraMtaTlsSecurityLevel.oa.mjs";
import { zimbraMtaTransportMaps } from "./zimbraMtaTransportMaps.oa.mjs";
import { zimbraMtaUnverifiedRecipientDeferCode } from "./zimbraMtaUnverifiedRecipientDeferCode.oa.mjs";
import { zimbraMtaVirtualAliasDomains } from "./zimbraMtaVirtualAliasDomains.oa.mjs";
import { zimbraMtaVirtualAliasExpansionLimit } from "./zimbraMtaVirtualAliasExpansionLimit.oa.mjs";
import { zimbraMtaVirtualAliasMaps } from "./zimbraMtaVirtualAliasMaps.oa.mjs";
import { zimbraMtaVirtualMailboxDomains } from "./zimbraMtaVirtualMailboxDomains.oa.mjs";
import { zimbraMtaVirtualMailboxMaps } from "./zimbraMtaVirtualMailboxMaps.oa.mjs";
import { zimbraMyoneloginSamlSigningCert } from "./zimbraMyoneloginSamlSigningCert.oa.mjs";
import { zimbraNetworkActivation } from "./zimbraNetworkActivation.oa.mjs";
import { zimbraNetworkLicense } from "./zimbraNetworkLicense.oa.mjs";
import { zimbraNotebookAccount } from "./zimbraNotebookAccount.oa.mjs";
import { zimbraNotebookFolderCacheSize } from "./zimbraNotebookFolderCacheSize.oa.mjs";
import { zimbraNotebookMaxCachedTemplatesPerFolder } from "./zimbraNotebookMaxCachedTemplatesPerFolder.oa.mjs";
import { zimbraNotebookPageCacheSize } from "./zimbraNotebookPageCacheSize.oa.mjs";
import { zimbraNotifyBindAddress } from "./zimbraNotifyBindAddress.oa.mjs";
import { zimbraNotifyBindPort } from "./zimbraNotifyBindPort.oa.mjs";
import { zimbraNotifySSLBindAddress } from "./zimbraNotifySSLBindAddress.oa.mjs";
import { zimbraNotifySSLBindPort } from "./zimbraNotifySSLBindPort.oa.mjs";
import { zimbraNotifySSLServerEnabled } from "./zimbraNotifySSLServerEnabled.oa.mjs";
import { zimbraNotifyServerEnabled } from "./zimbraNotifyServerEnabled.oa.mjs";
import { zimbraOAuthConsumerCredentials } from "./zimbraOAuthConsumerCredentials.oa.mjs";
import { zimbraOpenidConsumerAllowedOPEndpointURL } from "./zimbraOpenidConsumerAllowedOPEndpointURL.oa.mjs";
import { zimbraOpenidConsumerStatelessModeEnabled } from "./zimbraOpenidConsumerStatelessModeEnabled.oa.mjs";
import { zimbraPasswordChangeListener } from "./zimbraPasswordChangeListener.oa.mjs";
import { zimbraPop3BindOnStartup } from "./zimbraPop3BindOnStartup.oa.mjs";
import { zimbraPop3BindPort } from "./zimbraPop3BindPort.oa.mjs";
import { zimbraPop3CleartextLoginEnabled } from "./zimbraPop3CleartextLoginEnabled.oa.mjs";
import { zimbraPop3ExposeVersionOnBanner } from "./zimbraPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraPop3MaxConnections } from "./zimbraPop3MaxConnections.oa.mjs";
import { zimbraPop3NumThreads } from "./zimbraPop3NumThreads.oa.mjs";
import { zimbraPop3ProxyBindPort } from "./zimbraPop3ProxyBindPort.oa.mjs";
import { zimbraPop3SSLBindOnStartup } from "./zimbraPop3SSLBindOnStartup.oa.mjs";
import { zimbraPop3SSLBindPort } from "./zimbraPop3SSLBindPort.oa.mjs";
import { zimbraPop3SSLProxyBindPort } from "./zimbraPop3SSLProxyBindPort.oa.mjs";
import { zimbraPop3SSLServerEnabled } from "./zimbraPop3SSLServerEnabled.oa.mjs";
import { zimbraPop3SaslGssapiEnabled } from "./zimbraPop3SaslGssapiEnabled.oa.mjs";
import { zimbraPop3ServerEnabled } from "./zimbraPop3ServerEnabled.oa.mjs";
import { zimbraPop3ShutdownGraceSeconds } from "./zimbraPop3ShutdownGraceSeconds.oa.mjs";
import { zimbraPrevFoldersToTrackMax } from "./zimbraPrevFoldersToTrackMax.oa.mjs";
import { zimbraProduct } from "./zimbraProduct.oa.mjs";
import { zimbraPublicServiceHostname } from "./zimbraPublicServiceHostname.oa.mjs";
import { zimbraPublicServicePort } from "./zimbraPublicServicePort.oa.mjs";
import { zimbraPublicServiceProtocol } from "./zimbraPublicServiceProtocol.oa.mjs";
import { zimbraRedoLogArchiveDir } from "./zimbraRedoLogArchiveDir.oa.mjs";
import { zimbraRedoLogCrashRecoveryLookbackSec } from "./zimbraRedoLogCrashRecoveryLookbackSec.oa.mjs";
import { zimbraRedoLogDeleteOnRollover } from "./zimbraRedoLogDeleteOnRollover.oa.mjs";
import { zimbraRedoLogEnabled } from "./zimbraRedoLogEnabled.oa.mjs";
import { zimbraRedoLogFsyncIntervalMS } from "./zimbraRedoLogFsyncIntervalMS.oa.mjs";
import { zimbraRedoLogLogPath } from "./zimbraRedoLogLogPath.oa.mjs";
import { zimbraRedoLogProvider } from "./zimbraRedoLogProvider.oa.mjs";
import { zimbraRedoLogRolloverFileSizeKB } from "./zimbraRedoLogRolloverFileSizeKB.oa.mjs";
import { zimbraRedoLogRolloverHardMaxFileSizeKB } from "./zimbraRedoLogRolloverHardMaxFileSizeKB.oa.mjs";
import { zimbraRedoLogRolloverMinFileAge } from "./zimbraRedoLogRolloverMinFileAge.oa.mjs";
import { zimbraRegexMaxAccessesWhenMatching } from "./zimbraRegexMaxAccessesWhenMatching.oa.mjs";
import { zimbraRemoteManagementCommand } from "./zimbraRemoteManagementCommand.oa.mjs";
import { zimbraRemoteManagementPort } from "./zimbraRemoteManagementPort.oa.mjs";
import { zimbraRemoteManagementPrivateKeyPath } from "./zimbraRemoteManagementPrivateKeyPath.oa.mjs";
import { zimbraRemoteManagementUser } from "./zimbraRemoteManagementUser.oa.mjs";
import { zimbraResponseHeader } from "./zimbraResponseHeader.oa.mjs";
import { zimbraReverseProxyAcceptMutex } from "./zimbraReverseProxyAcceptMutex.oa.mjs";
import { zimbraReverseProxyAdminEnabled } from "./zimbraReverseProxyAdminEnabled.oa.mjs";
import { zimbraReverseProxyAdminIPAddress } from "./zimbraReverseProxyAdminIPAddress.oa.mjs";
import { zimbraReverseProxyAdminPortAttribute } from "./zimbraReverseProxyAdminPortAttribute.oa.mjs";
import { zimbraReverseProxyAuthWaitInterval } from "./zimbraReverseProxyAuthWaitInterval.oa.mjs";
import { zimbraReverseProxyAvailableLookupTargets } from "./zimbraReverseProxyAvailableLookupTargets.oa.mjs";
import { zimbraReverseProxyCacheEntryTTL } from "./zimbraReverseProxyCacheEntryTTL.oa.mjs";
import { zimbraReverseProxyCacheFetchTimeout } from "./zimbraReverseProxyCacheFetchTimeout.oa.mjs";
import { zimbraReverseProxyCacheReconnectInterval } from "./zimbraReverseProxyCacheReconnectInterval.oa.mjs";
import { zimbraReverseProxyClientCertCA } from "./zimbraReverseProxyClientCertCA.oa.mjs";
import { zimbraReverseProxyClientCertMode } from "./zimbraReverseProxyClientCertMode.oa.mjs";
import { zimbraReverseProxyConnectTimeout } from "./zimbraReverseProxyConnectTimeout.oa.mjs";
import { zimbraReverseProxyDefaultRealm } from "./zimbraReverseProxyDefaultRealm.oa.mjs";
import { zimbraReverseProxyDnsLookupInServerEnabled } from "./zimbraReverseProxyDnsLookupInServerEnabled.oa.mjs";
import { zimbraReverseProxyDomainNameAttribute } from "./zimbraReverseProxyDomainNameAttribute.oa.mjs";
import { zimbraReverseProxyDomainNameQuery } from "./zimbraReverseProxyDomainNameQuery.oa.mjs";
import { zimbraReverseProxyDomainNameSearchBase } from "./zimbraReverseProxyDomainNameSearchBase.oa.mjs";
import { zimbraReverseProxyErrorHandlerURL } from "./zimbraReverseProxyErrorHandlerURL.oa.mjs";
import { zimbraReverseProxyExactServerVersionCheck } from "./zimbraReverseProxyExactServerVersionCheck.oa.mjs";
import { zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "./zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.oa.mjs";
import { zimbraReverseProxyGenConfigPerVirtualHostname } from "./zimbraReverseProxyGenConfigPerVirtualHostname.oa.mjs";
import { zimbraReverseProxyHttpEnabled } from "./zimbraReverseProxyHttpEnabled.oa.mjs";
import { zimbraReverseProxyHttpPortAttribute } from "./zimbraReverseProxyHttpPortAttribute.oa.mjs";
import { zimbraReverseProxyHttpSSLPortAttribute } from "./zimbraReverseProxyHttpSSLPortAttribute.oa.mjs";
import { zimbraReverseProxyIPLoginLimit } from "./zimbraReverseProxyIPLoginLimit.oa.mjs";
import { zimbraReverseProxyIPLoginLimitTime } from "./zimbraReverseProxyIPLoginLimitTime.oa.mjs";
import { zimbraReverseProxyImapEnabledCapability } from "./zimbraReverseProxyImapEnabledCapability.oa.mjs";
import { zimbraReverseProxyImapExposeVersionOnBanner } from "./zimbraReverseProxyImapExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyImapPortAttribute } from "./zimbraReverseProxyImapPortAttribute.oa.mjs";
import { zimbraReverseProxyImapSSLPortAttribute } from "./zimbraReverseProxyImapSSLPortAttribute.oa.mjs";
import { zimbraReverseProxyImapSaslGssapiEnabled } from "./zimbraReverseProxyImapSaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyImapSaslPlainEnabled } from "./zimbraReverseProxyImapSaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyImapStartTlsMode } from "./zimbraReverseProxyImapStartTlsMode.oa.mjs";
import { zimbraReverseProxyInactivityTimeout } from "./zimbraReverseProxyInactivityTimeout.oa.mjs";
import { zimbraReverseProxyIpThrottleMsg } from "./zimbraReverseProxyIpThrottleMsg.oa.mjs";
import { zimbraReverseProxyLogLevel } from "./zimbraReverseProxyLogLevel.oa.mjs";
import { zimbraReverseProxyLookupTarget } from "./zimbraReverseProxyLookupTarget.oa.mjs";
import { zimbraReverseProxyMailEnabled } from "./zimbraReverseProxyMailEnabled.oa.mjs";
import { zimbraReverseProxyMailHostAttribute } from "./zimbraReverseProxyMailHostAttribute.oa.mjs";
import { zimbraReverseProxyMailHostQuery } from "./zimbraReverseProxyMailHostQuery.oa.mjs";
import { zimbraReverseProxyMailHostSearchBase } from "./zimbraReverseProxyMailHostSearchBase.oa.mjs";
import { zimbraReverseProxyMailImapEnabled } from "./zimbraReverseProxyMailImapEnabled.oa.mjs";
import { zimbraReverseProxyMailImapsEnabled } from "./zimbraReverseProxyMailImapsEnabled.oa.mjs";
import { zimbraReverseProxyMailMode } from "./zimbraReverseProxyMailMode.oa.mjs";
import { zimbraReverseProxyMailPop3Enabled } from "./zimbraReverseProxyMailPop3Enabled.oa.mjs";
import { zimbraReverseProxyMailPop3sEnabled } from "./zimbraReverseProxyMailPop3sEnabled.oa.mjs";
import { zimbraReverseProxyPassErrors } from "./zimbraReverseProxyPassErrors.oa.mjs";
import { zimbraReverseProxyPop3EnabledCapability } from "./zimbraReverseProxyPop3EnabledCapability.oa.mjs";
import { zimbraReverseProxyPop3ExposeVersionOnBanner } from "./zimbraReverseProxyPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyPop3PortAttribute } from "./zimbraReverseProxyPop3PortAttribute.oa.mjs";
import { zimbraReverseProxyPop3SSLPortAttribute } from "./zimbraReverseProxyPop3SSLPortAttribute.oa.mjs";
import { zimbraReverseProxyPop3SaslGssapiEnabled } from "./zimbraReverseProxyPop3SaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyPop3SaslPlainEnabled } from "./zimbraReverseProxyPop3SaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyPop3StartTlsMode } from "./zimbraReverseProxyPop3StartTlsMode.oa.mjs";
import { zimbraReverseProxyPortQuery } from "./zimbraReverseProxyPortQuery.oa.mjs";
import { zimbraReverseProxyPortSearchBase } from "./zimbraReverseProxyPortSearchBase.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeout } from "./zimbraReverseProxyRouteLookupTimeout.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeoutCache } from "./zimbraReverseProxyRouteLookupTimeoutCache.oa.mjs";
import { zimbraReverseProxySSLCiphers } from "./zimbraReverseProxySSLCiphers.oa.mjs";
import { zimbraReverseProxySSLECDHCurve } from "./zimbraReverseProxySSLECDHCurve.oa.mjs";
import { zimbraReverseProxySSLProtocols } from "./zimbraReverseProxySSLProtocols.oa.mjs";
import { zimbraReverseProxySSLToUpstreamEnabled } from "./zimbraReverseProxySSLToUpstreamEnabled.oa.mjs";
import { zimbraReverseProxySendImapId } from "./zimbraReverseProxySendImapId.oa.mjs";
import { zimbraReverseProxySendPop3Xoip } from "./zimbraReverseProxySendPop3Xoip.oa.mjs";
import { zimbraReverseProxyUpstreamConnectTimeout } from "./zimbraReverseProxyUpstreamConnectTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamEwsServers } from "./zimbraReverseProxyUpstreamEwsServers.oa.mjs";
import { zimbraReverseProxyUpstreamLoginServers } from "./zimbraReverseProxyUpstreamLoginServers.oa.mjs";
import { zimbraReverseProxyUpstreamPollingTimeout } from "./zimbraReverseProxyUpstreamPollingTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamReadTimeout } from "./zimbraReverseProxyUpstreamReadTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamSendTimeout } from "./zimbraReverseProxyUpstreamSendTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamServers } from "./zimbraReverseProxyUpstreamServers.oa.mjs";
import { zimbraReverseProxyUserLoginLimit } from "./zimbraReverseProxyUserLoginLimit.oa.mjs";
import { zimbraReverseProxyUserLoginLimitTime } from "./zimbraReverseProxyUserLoginLimitTime.oa.mjs";
import { zimbraReverseProxyUserNameAttribute } from "./zimbraReverseProxyUserNameAttribute.oa.mjs";
import { zimbraReverseProxyUserThrottleMsg } from "./zimbraReverseProxyUserThrottleMsg.oa.mjs";
import { zimbraReverseProxyWorkerConnections } from "./zimbraReverseProxyWorkerConnections.oa.mjs";
import { zimbraReverseProxyWorkerProcesses } from "./zimbraReverseProxyWorkerProcesses.oa.mjs";
import { zimbraSMIMELdapAttribute } from "./zimbraSMIMELdapAttribute.oa.mjs";
import { zimbraSMIMELdapBindDn } from "./zimbraSMIMELdapBindDn.oa.mjs";
import { zimbraSMIMELdapBindPassword } from "./zimbraSMIMELdapBindPassword.oa.mjs";
import { zimbraSMIMELdapDiscoverSearchBaseEnabled } from "./zimbraSMIMELdapDiscoverSearchBaseEnabled.oa.mjs";
import { zimbraSMIMELdapFilter } from "./zimbraSMIMELdapFilter.oa.mjs";
import { zimbraSMIMELdapSearchBase } from "./zimbraSMIMELdapSearchBase.oa.mjs";
import { zimbraSMIMELdapStartTlsEnabled } from "./zimbraSMIMELdapStartTlsEnabled.oa.mjs";
import { zimbraSMIMELdapURL } from "./zimbraSMIMELdapURL.oa.mjs";
import { zimbraSSLCertificate } from "./zimbraSSLCertificate.oa.mjs";
import { zimbraSSLExcludeCipherSuites } from "./zimbraSSLExcludeCipherSuites.oa.mjs";
import { zimbraSSLIncludeCipherSuites } from "./zimbraSSLIncludeCipherSuites.oa.mjs";
import { zimbraSSLPrivateKey } from "./zimbraSSLPrivateKey.oa.mjs";
import { zimbraSaslGssapiRequiresTls } from "./zimbraSaslGssapiRequiresTls.oa.mjs";
import { zimbraScheduledTaskNumThreads } from "./zimbraScheduledTaskNumThreads.oa.mjs";
import { zimbraServerExtraObjectClass } from "./zimbraServerExtraObjectClass.oa.mjs";
import { zimbraServerInheritedAttr } from "./zimbraServerInheritedAttr.oa.mjs";
import { zimbraShareNotificationMtaAuthAccount } from "./zimbraShareNotificationMtaAuthAccount.oa.mjs";
import { zimbraShareNotificationMtaAuthPassword } from "./zimbraShareNotificationMtaAuthPassword.oa.mjs";
import { zimbraShareNotificationMtaAuthRequired } from "./zimbraShareNotificationMtaAuthRequired.oa.mjs";
import { zimbraShareNotificationMtaConnectionType } from "./zimbraShareNotificationMtaConnectionType.oa.mjs";
import { zimbraShareNotificationMtaEnabled } from "./zimbraShareNotificationMtaEnabled.oa.mjs";
import { zimbraShareNotificationMtaHostname } from "./zimbraShareNotificationMtaHostname.oa.mjs";
import { zimbraShareNotificationMtaPort } from "./zimbraShareNotificationMtaPort.oa.mjs";
import { zimbraSharingUpdatePublishInterval } from "./zimbraSharingUpdatePublishInterval.oa.mjs";
import { zimbraSkinBackgroundColor } from "./zimbraSkinBackgroundColor.oa.mjs";
import { zimbraSkinFavicon } from "./zimbraSkinFavicon.oa.mjs";
import { zimbraSkinForegroundColor } from "./zimbraSkinForegroundColor.oa.mjs";
import { zimbraSkinLogoAppBanner } from "./zimbraSkinLogoAppBanner.oa.mjs";
import { zimbraSkinLogoLoginBanner } from "./zimbraSkinLogoLoginBanner.oa.mjs";
import { zimbraSkinLogoURL } from "./zimbraSkinLogoURL.oa.mjs";
import { zimbraSkinSecondaryColor } from "./zimbraSkinSecondaryColor.oa.mjs";
import { zimbraSkinSelectionColor } from "./zimbraSkinSelectionColor.oa.mjs";
import { zimbraSmtpHostname } from "./zimbraSmtpHostname.oa.mjs";
import { zimbraSmtpPort } from "./zimbraSmtpPort.oa.mjs";
import { zimbraSmtpSendAddAuthenticatedUser } from "./zimbraSmtpSendAddAuthenticatedUser.oa.mjs";
import { zimbraSmtpSendAddMailer } from "./zimbraSmtpSendAddMailer.oa.mjs";
import { zimbraSmtpSendAddOriginatingIP } from "./zimbraSmtpSendAddOriginatingIP.oa.mjs";
import { zimbraSmtpSendPartial } from "./zimbraSmtpSendPartial.oa.mjs";
import { zimbraSmtpTimeout } from "./zimbraSmtpTimeout.oa.mjs";
import { zimbraSoapExposeVersion } from "./zimbraSoapExposeVersion.oa.mjs";
import { zimbraSoapRequestMaxSize } from "./zimbraSoapRequestMaxSize.oa.mjs";
import { zimbraSpamCheckEnabled } from "./zimbraSpamCheckEnabled.oa.mjs";
import { zimbraSpamHeader } from "./zimbraSpamHeader.oa.mjs";
import { zimbraSpamHeaderValue } from "./zimbraSpamHeaderValue.oa.mjs";
import { zimbraSpamIsNotSpamAccount } from "./zimbraSpamIsNotSpamAccount.oa.mjs";
import { zimbraSpamIsSpamAccount } from "./zimbraSpamIsSpamAccount.oa.mjs";
import { zimbraSpamKillPercent } from "./zimbraSpamKillPercent.oa.mjs";
import { zimbraSpamReportEnvelopeFrom } from "./zimbraSpamReportEnvelopeFrom.oa.mjs";
import { zimbraSpamReportSenderHeader } from "./zimbraSpamReportSenderHeader.oa.mjs";
import { zimbraSpamReportTypeHam } from "./zimbraSpamReportTypeHam.oa.mjs";
import { zimbraSpamReportTypeHeader } from "./zimbraSpamReportTypeHeader.oa.mjs";
import { zimbraSpamReportTypeSpam } from "./zimbraSpamReportTypeSpam.oa.mjs";
import { zimbraSpamSubjectTag } from "./zimbraSpamSubjectTag.oa.mjs";
import { zimbraSpamTagPercent } from "./zimbraSpamTagPercent.oa.mjs";
import { zimbraSpamTrashAlias } from "./zimbraSpamTrashAlias.oa.mjs";
import { zimbraSpamWhitelistHeader } from "./zimbraSpamWhitelistHeader.oa.mjs";
import { zimbraSpamWhitelistHeaderValue } from "./zimbraSpamWhitelistHeaderValue.oa.mjs";
import { zimbraSpellAvailableDictionary } from "./zimbraSpellAvailableDictionary.oa.mjs";
import { zimbraSpellCheckURL } from "./zimbraSpellCheckURL.oa.mjs";
import { zimbraSpnegoAuthEnabled } from "./zimbraSpnegoAuthEnabled.oa.mjs";
import { zimbraSpnegoAuthErrorURL } from "./zimbraSpnegoAuthErrorURL.oa.mjs";
import { zimbraSpnegoAuthRealm } from "./zimbraSpnegoAuthRealm.oa.mjs";
import { zimbraSslCaCert } from "./zimbraSslCaCert.oa.mjs";
import { zimbraSslCaKey } from "./zimbraSslCaKey.oa.mjs";
import { zimbraStatThreadNamePrefix } from "./zimbraStatThreadNamePrefix.oa.mjs";
import { zimbraTableMaintenanceGrowthFactor } from "./zimbraTableMaintenanceGrowthFactor.oa.mjs";
import { zimbraTableMaintenanceMaxRows } from "./zimbraTableMaintenanceMaxRows.oa.mjs";
import { zimbraTableMaintenanceMinRows } from "./zimbraTableMaintenanceMinRows.oa.mjs";
import { zimbraTableMaintenanceOperation } from "./zimbraTableMaintenanceOperation.oa.mjs";
import { zimbraThreadMonitorEnabled } from "./zimbraThreadMonitorEnabled.oa.mjs";
import { zimbraThrottleSafeHosts } from "./zimbraThrottleSafeHosts.oa.mjs";
import { zimbraThrottleWhitelist } from "./zimbraThrottleWhitelist.oa.mjs";
import { zimbraUCProviderEnabled } from "./zimbraUCProviderEnabled.oa.mjs";
import { zimbraVersionCheckInterval } from "./zimbraVersionCheckInterval.oa.mjs";
import { zimbraVersionCheckLastAttempt } from "./zimbraVersionCheckLastAttempt.oa.mjs";
import { zimbraVersionCheckLastResponse } from "./zimbraVersionCheckLastResponse.oa.mjs";
import { zimbraVersionCheckLastSuccess } from "./zimbraVersionCheckLastSuccess.oa.mjs";
import { zimbraVersionCheckNotificationBody } from "./zimbraVersionCheckNotificationBody.oa.mjs";
import { zimbraVersionCheckNotificationEmail } from "./zimbraVersionCheckNotificationEmail.oa.mjs";
import { zimbraVersionCheckNotificationEmailFrom } from "./zimbraVersionCheckNotificationEmailFrom.oa.mjs";
import { zimbraVersionCheckNotificationSubject } from "./zimbraVersionCheckNotificationSubject.oa.mjs";
import { zimbraVersionCheckSendNotifications } from "./zimbraVersionCheckSendNotifications.oa.mjs";
import { zimbraVersionCheckServer } from "./zimbraVersionCheckServer.oa.mjs";
import { zimbraVersionCheckURL } from "./zimbraVersionCheckURL.oa.mjs";
import { zimbraVirusBlockEncryptedArchive } from "./zimbraVirusBlockEncryptedArchive.oa.mjs";
import { zimbraVirusCheckEnabled } from "./zimbraVirusCheckEnabled.oa.mjs";
import { zimbraVirusDefinitionsUpdateFrequency } from "./zimbraVirusDefinitionsUpdateFrequency.oa.mjs";
import { zimbraVirusWarnAdmin } from "./zimbraVirusWarnAdmin.oa.mjs";
import { zimbraVirusWarnRecipient } from "./zimbraVirusWarnRecipient.oa.mjs";
import { zimbraWebClientAdminReference } from "./zimbraWebClientAdminReference.oa.mjs";
import { zimbraWebClientLoginURL } from "./zimbraWebClientLoginURL.oa.mjs";
import { zimbraWebClientLoginURLAllowedIP } from "./zimbraWebClientLoginURLAllowedIP.oa.mjs";
import { zimbraWebClientLoginURLAllowedUA } from "./zimbraWebClientLoginURLAllowedUA.oa.mjs";
import { zimbraWebClientLogoutURL } from "./zimbraWebClientLogoutURL.oa.mjs";
import { zimbraWebClientLogoutURLAllowedIP } from "./zimbraWebClientLogoutURLAllowedIP.oa.mjs";
import { zimbraWebClientLogoutURLAllowedUA } from "./zimbraWebClientLogoutURLAllowedUA.oa.mjs";
import { zimbraWebClientMaxInputBufferLength } from "./zimbraWebClientMaxInputBufferLength.oa.mjs";
import { zimbraWebClientURL } from "./zimbraWebClientURL.oa.mjs";
import { zimbraWebGzipEnabled } from "./zimbraWebGzipEnabled.oa.mjs";
import { zimbraXMPPEnabled } from "./zimbraXMPPEnabled.oa.mjs";
import { zimbraXMPPServerDialbackKey } from "./zimbraXMPPServerDialbackKey.oa.mjs";
import { zimbraZimletDataSensitiveInMixedModeDisabled } from "./zimbraZimletDataSensitiveInMixedModeDisabled.oa.mjs";
import { zimbraZimletDomainAvailableZimlets } from "./zimbraZimletDomainAvailableZimlets.oa.mjs";
import { zimbraZimletJspEnabled } from "./zimbraZimletJspEnabled.oa.mjs";
import { zimbraZookeeperClientServerList } from "./zimbraZookeeperClientServerList.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraAccountClientAttr, zimbraAccountExtraObjectClass, zimbraAdminAccessControlMech, zimbraAdminConsoleCatchAllAddressEnabled, zimbraAdminConsoleDNSCheckEnabled, zimbraAdminConsoleLDAPAuthEnabled, zimbraAdminConsoleLoginMessage, zimbraAdminConsoleLoginURL, zimbraAdminConsoleLogoutURL, zimbraAdminConsoleSkinEnabled, zimbraAdminImapImportNumThreads, zimbraAdminPort, zimbraAdminProxyPort, zimbraAdminURL, zimbraAllowNonLDHCharsInDomain, zimbraAlwaysOnClusterId, zimbraAmavisDSPAMEnabled, zimbraAmavisEnableDKIMVerification, zimbraAmavisFinalSpamDestiny, zimbraAmavisLogLevel, zimbraAmavisMaxServers, zimbraAmavisOriginatingBypassSA, zimbraAmavisOutboundDisclaimersOnly, zimbraAmavisQuarantineAccount, zimbraAmavisSALogLevel, zimbraAntispamExtractionBatchDelay, zimbraAntispamExtractionBatchSize, zimbraArchiveEnabled, zimbraArchiveMailFrom, zimbraAttachmentsBlocked, zimbraAttachmentsIndexedTextLimit, zimbraAttachmentsScanClass, zimbraAttachmentsScanEnabled, zimbraAttachmentsScanURL, zimbraAttachmentsViewInHtmlOnly, zimbraAuthTokenKey, zimbraAuthTokenNotificationInterval, zimbraAuthTokenValidityValueEnabled, zimbraAutoProvBatchSize, zimbraAutoProvNotificationBody, zimbraAutoProvNotificationSubject, zimbraAutoProvPollingInterval, zimbraAutoSubmittedNullReturnPath, zimbraBackupAutoGroupedInterval, zimbraBackupAutoGroupedNumGroups, zimbraBackupAutoGroupedThrottled, zimbraBackupMinFreeSpace, zimbraBackupMode, zimbraBackupReportEmailRecipients, zimbraBackupReportEmailSender, zimbraBackupReportEmailSubjectPrefix, zimbraBackupSkipBlobs, zimbraBackupSkipHsmBlobs, zimbraBackupSkipSearchIndex, zimbraBackupTarget, zimbraBasicAuthRealm, zimbraCBPolicydAccessControlEnabled, zimbraCBPolicydAccountingEnabled, zimbraCBPolicydAmavisEnabled, zimbraCBPolicydBindPort, zimbraCBPolicydBypassMode, zimbraCBPolicydBypassTimeout, zimbraCBPolicydCheckHeloEnabled, zimbraCBPolicydCheckSPFEnabled, zimbraCBPolicydGreylistingBlacklistMsg, zimbraCBPolicydGreylistingDeferMsg, zimbraCBPolicydGreylistingEnabled, zimbraCBPolicydGreylistingTrainingEnabled, zimbraCBPolicydLogLevel, zimbraCBPolicydMaxRequests, zimbraCBPolicydMaxServers, zimbraCBPolicydMaxSpareServers, zimbraCBPolicydMinServers, zimbraCBPolicydMinSpareServers, zimbraCBPolicydQuotasEnabled, zimbraCBPolicydTimeoutBusy, zimbraCBPolicydTimeoutIdle, zimbraCOSInheritedAttr, zimbraCalendarCalDavAlternateCalendarHomeSet, zimbraCalendarCalDavCalendarAutoScheduleEnabled, zimbraCalendarCalDavClearTextPasswordEnabled, zimbraCalendarCalDavDefaultCalendarId, zimbraCalendarCalDavDisableFreebusy, zimbraCalendarCalDavDisableScheduling, zimbraCalendarCalDavUseDistinctAppointmentAndToDoCollection, zimbraCalendarCompatibilityMode, zimbraCalendarRecurrenceDailyMaxDays, zimbraCalendarRecurrenceMaxInstances, zimbraCalendarRecurrenceMonthlyMaxMonths, zimbraCalendarRecurrenceOtherFrequencyMaxYears, zimbraCalendarRecurrenceWeeklyMaxWeeks, zimbraCalendarRecurrenceYearlyMaxYears, zimbraCalendarResourceExtraObjectClass, zimbraCertAuthorityCertSelfSigned, zimbraCertAuthorityKeySelfSigned, zimbraChangePasswordURL, zimbraClamAVBindAddress, zimbraClamAVListenPort, zimbraClamAVMaxThreads, zimbraClientTypeRegex, zimbraClusterType, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraComponentAvailable, zimbraConfiguredServerIDForBlobDirEnabled, zimbraConstraint, zimbraContactHiddenAttributes, zimbraContactRankingTableRefreshInterval, zimbraConvertdURL, zimbraCosExtraObjectClass, zimbraCreateTimestamp, zimbraCsrfAllowedRefererHosts, zimbraCsrfRefererCheckEnabled, zimbraCsrfTokenCheckEnabled, zimbraCsrfTokenKey, zimbraCustomMimeHeaderNameAllowed, zimbraDNSCheckHostname, zimbraDNSMasterIP, zimbraDNSTCPUpstream, zimbraDNSUseTCP, zimbraDNSUseUDP, zimbraDataSourceConnectTimeout, zimbraDataSourceConnectionType, zimbraDataSourceReadTimeout, zimbraDatabaseSlowSqlThreshold, zimbraDefaultAnalyzerStopWords, zimbraDefaultDomainName, zimbraDomainAdminModifiableAttr, zimbraDomainAggregateQuota, zimbraDomainAggregateQuotaPolicy, zimbraDomainAggregateQuotaWarnEmailRecipient, zimbraDomainAggregateQuotaWarnPercent, zimbraDomainExtraObjectClass, zimbraDomainInheritedAttr, zimbraDomainMandatoryMailSignatureEnabled, zimbraDomainMandatoryMailSignatureHTML, zimbraDomainMandatoryMailSignatureText, zimbraDomainStatus, zimbraEmptyFolderOpTimeout, zimbraErrorReportUrl, zimbraExternalAccountProvisioningKey, zimbraExternalAccountStatusCheckInterval, zimbraExternalShareInvitationUrlExpiration, zimbraFeatureDistributionListFolderEnabled, zimbraFileUploadMaxSize, zimbraFileUploadMaxSizePerFile, zimbraForceClearCookies, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeServerType, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraFreebusyExternalZimbraURL, zimbraFreebusyPropagationRetryInterval, zimbraGalAlwaysIncludeLocalCalendarResources, zimbraGalAutoCompleteLdapFilter, zimbraGalGroupIndicatorEnabled, zimbraGalInternalSearchBase, zimbraGalLdapAttrMap, zimbraGalLdapFilterDef, zimbraGalLdapGroupHandlerClass, zimbraGalLdapPageSize, zimbraGalLdapValueMap, zimbraGalMaxResults, zimbraGalSyncInternalSearchBase, zimbraGalSyncLdapPageSize, zimbraGalSyncMaxConcurrentClients, zimbraGalSyncTimestampFormat, zimbraGalTokenizeAutoCompleteKey, zimbraGalTokenizeSearchKey, zimbraGlobalConfigExtraObjectClass, zimbraHelpAdminURL, zimbraHelpAdvancedURL, zimbraHelpDelegatedURL, zimbraHelpStandardURL, zimbraHsmAge, zimbraHsmBatchSize, zimbraHsmMovePreviousRevisions, zimbraHsmPolicy, zimbraHttpCompressionEnabled, zimbraHttpConnectorMaxIdleTimeMillis, zimbraHttpContextPathBasedThreadPoolBalancingFilterRules, zimbraHttpDebugHandlerEnabled, zimbraHttpDosFilterDelayMillis, zimbraHttpDosFilterMaxRequestsPerSec, zimbraHttpHeaderCacheSize, zimbraHttpMaxFormContentSize, zimbraHttpNumThreads, zimbraHttpOutputBufferSize, zimbraHttpProxyURL, zimbraHttpRequestHeaderSize, zimbraHttpResponseHeaderSize, zimbraHttpSSLNumThreads, zimbraHttpThreadPoolMaxIdleTimeMillis, zimbraHttpThrottleSafeIPs, zimbraIPMode, zimbraImapBindOnStartup, zimbraImapBindPort, zimbraImapCleartextLoginEnabled, zimbraImapDisabledCapability, zimbraImapExposeVersionOnBanner, zimbraImapMaxConnections, zimbraImapMaxRequestSize, zimbraImapNumThreads, zimbraImapProxyBindPort, zimbraImapSSLBindOnStartup, zimbraImapSSLBindPort, zimbraImapSSLDisabledCapability, zimbraImapSSLProxyBindPort, zimbraImapSSLServerEnabled, zimbraImapSaslGssapiEnabled, zimbraImapServerEnabled, zimbraImapShutdownGraceSeconds, zimbraInstalledSkin, zimbraInternalSharingCrossDomainEnabled, zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating, zimbraInvalidLoginFilterMaxFailedLogin, zimbraInvalidLoginFilterMaxSizeOfFailedIpDb, zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin, zimbraItemActionBatchSize, zimbraLastLogonTimestampFrequency, zimbraLastPurgeMaxDuration, zimbraLdapGalSyncDisabled, zimbraLmtpBindOnStartup, zimbraLmtpBindPort, zimbraLmtpExposeVersionOnBanner, zimbraLmtpLHLORequired, zimbraLmtpNumThreads, zimbraLmtpPermanentFailureWhenOverQuota, zimbraLmtpServerEnabled, zimbraLmtpShutdownGraceSeconds, zimbraLocale, zimbraLogHostname, zimbraLogRawLifetime, zimbraLogSummaryLifetime, zimbraLogToSyslog, zimbraLowestSupportedAuthVersion, zimbraMailAddressValidationRegex, zimbraMailClearTextPasswordEnabled, zimbraMailContentMaxSize, zimbraMailDiskStreamingThreshold, zimbraMailDomainQuota, zimbraMailEmptyFolderBatchSize, zimbraMailEmptyFolderBatchThreshold, zimbraMailFileDescriptorBufferSize, zimbraMailFileDescriptorCacheSize, zimbraMailKeepOutWebCrawlers, zimbraMailMode, zimbraMailPort, zimbraMailProxyMaxFails, zimbraMailProxyPort, zimbraMailProxyReconnectTimeout, zimbraMailPurgeBatchSize, zimbraMailPurgeSleepInterval, zimbraMailPurgeSystemPolicy, zimbraMailRedirectSetEnvelopeSender, zimbraMailReferMode, zimbraMailSSLClientCertMode, zimbraMailSSLClientCertOCSPEnabled, zimbraMailSSLClientCertPort, zimbraMailSSLClientCertPrincipalMap, zimbraMailSSLClientCertPrincipalMapLdapFilterEnabled, zimbraMailSSLPort, zimbraMailSSLProxyClientCertPort, zimbraMailSSLProxyPort, zimbraMailTrustedIP, zimbraMailURL, zimbraMailUncompressedCacheMaxBytes, zimbraMailUncompressedCacheMaxFiles, zimbraMailUseDirectBuffers, zimbraMailboxMoveSkipBlobs, zimbraMailboxMoveSkipHsmBlobs, zimbraMailboxMoveSkipSearchIndex, zimbraMailboxMoveTempDir, zimbraMailboxdSSLProtocols, zimbraMemcachedBindPort, zimbraMemcachedClientBinaryProtocolEnabled, zimbraMemcachedClientExpirySeconds, zimbraMemcachedClientHashAlgorithm, zimbraMemcachedClientServerList, zimbraMemcachedClientTimeoutMillis, zimbraMessageCacheSize, zimbraMessageChannelEnabled, zimbraMessageChannelPort, zimbraMessageIdDedupeCacheSize, zimbraMessageIdDedupeCacheTimeout, zimbraMilterBindPort, zimbraMilterMaxConnections, zimbraMilterNumThreads, zimbraMilterServerEnabled, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMaxMessageSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMobileMetadataRetentionPolicy, zimbraMtaAddressVerifyNegativeRefreshTime, zimbraMtaAddressVerifyPollCount, zimbraMtaAddressVerifyPollDelay, zimbraMtaAddressVerifyPositiveRefreshTime, zimbraMtaAliasMaps, zimbraMtaAlwaysAddMissingHeaders, zimbraMtaAntiSpamLockMethod, zimbraMtaAuthEnabled, zimbraMtaAuthHost, zimbraMtaAuthTarget, zimbraMtaAuthURL, zimbraMtaBlockedExtension, zimbraMtaBlockedExtensionWarnAdmin, zimbraMtaBlockedExtensionWarnRecipient, zimbraMtaBounceNoticeRecipient, zimbraMtaBounceQueueLifetime, zimbraMtaBrokenSaslAuthClients, zimbraMtaCommandDirectory, zimbraMtaCommonBlockedExtension, zimbraMtaDaemonDirectory, zimbraMtaDefaultProcessLimit, zimbraMtaDelayWarningTime, zimbraMtaDnsLookupsEnabled, zimbraMtaEnableSmtpdPolicyd, zimbraMtaFallbackRelayHost, zimbraMtaHeaderChecks, zimbraMtaImportEnvironment, zimbraMtaInFlowDelay, zimbraMtaLmdbMapSize, zimbraMtaLmtpConnectionCacheDestinations, zimbraMtaLmtpConnectionCacheTimeLimit, zimbraMtaLmtpHostLookup, zimbraMtaLmtpTlsCAfile, zimbraMtaLmtpTlsCApath, zimbraMtaLmtpTlsCiphers, zimbraMtaLmtpTlsExcludeCiphers, zimbraMtaLmtpTlsLoglevel, zimbraMtaLmtpTlsMandatoryCiphers, zimbraMtaLmtpTlsProtocols, zimbraMtaLmtpTlsSecurityLevel, zimbraMtaMailqPath, zimbraMtaManpageDirectory, zimbraMtaMaxMessageSize, zimbraMtaMaxUse, zimbraMtaMaximalBackoffTime, zimbraMtaMilterCommandTimeout, zimbraMtaMilterConnectTimeout, zimbraMtaMilterContentTimeout, zimbraMtaMilterDefaultAction, zimbraMtaMinimalBackoffTime, zimbraMtaMyDestination, zimbraMtaMyHostname, zimbraMtaMyNetworks, zimbraMtaMyOrigin, zimbraMtaNewaliasesPath, zimbraMtaNonSmtpdMilters, zimbraMtaNotifyClasses, zimbraMtaPolicyTimeLimit, zimbraMtaPropagateUnmatchedExtensions, zimbraMtaQueueDirectory, zimbraMtaQueueRunDelay, zimbraMtaRecipientDelimiter, zimbraMtaRelayHost, zimbraMtaRestriction, zimbraMtaSaslAuthEnable, zimbraMtaSaslSmtpdMechList, zimbraMtaSenderCanonicalMaps, zimbraMtaSendmailPath, zimbraMtaSmtpCnameOverridesServername, zimbraMtaSmtpGenericMaps, zimbraMtaSmtpHeloName, zimbraMtaSmtpSaslAuthEnable, zimbraMtaSmtpSaslMechanismFilter, zimbraMtaSmtpSaslPasswordMaps, zimbraMtaSmtpSaslSecurityOptions, zimbraMtaSmtpTlsCAfile, zimbraMtaSmtpTlsCApath, zimbraMtaSmtpTlsCiphers, zimbraMtaSmtpTlsLoglevel, zimbraMtaSmtpTlsMandatoryCiphers, zimbraMtaSmtpTlsProtocols, zimbraMtaSmtpTlsSecurityLevel, zimbraMtaSmtpdBanner, zimbraMtaSmtpdClientPortLogging, zimbraMtaSmtpdClientRestrictions, zimbraMtaSmtpdDataRestrictions, zimbraMtaSmtpdErrorSleepTime, zimbraMtaSmtpdHardErrorLimit, zimbraMtaSmtpdHeloRequired, zimbraMtaSmtpdMilters, zimbraMtaSmtpdProxyTimeout, zimbraMtaSmtpdRejectUnlistedRecipient, zimbraMtaSmtpdRejectUnlistedSender, zimbraMtaSmtpdSaslAuthenticatedHeader, zimbraMtaSmtpdSaslSecurityOptions, zimbraMtaSmtpdSaslTlsSecurityOptions, zimbraMtaSmtpdSenderLoginMaps, zimbraMtaSmtpdSenderRestrictions, zimbraMtaSmtpdTlsAskCcert, zimbraMtaSmtpdTlsCAfile, zimbraMtaSmtpdTlsCApath, zimbraMtaSmtpdTlsCcertVerifydepth, zimbraMtaSmtpdTlsCiphers, zimbraMtaSmtpdTlsExcludeCiphers, zimbraMtaSmtpdTlsLoglevel, zimbraMtaSmtpdTlsMandatoryCiphers, zimbraMtaSmtpdTlsProtocols, zimbraMtaSmtpdVirtualTransport, zimbraMtaStpdSoftErrorLimit, zimbraMtaTlsAppendDefaultCA, zimbraMtaTlsAuthOnly, zimbraMtaTlsSecurityLevel, zimbraMtaTransportMaps, zimbraMtaUnverifiedRecipientDeferCode, zimbraMtaVirtualAliasDomains, zimbraMtaVirtualAliasExpansionLimit, zimbraMtaVirtualAliasMaps, zimbraMtaVirtualMailboxDomains, zimbraMtaVirtualMailboxMaps, zimbraMyoneloginSamlSigningCert, zimbraNetworkActivation, zimbraNetworkLicense, zimbraNotebookAccount, zimbraNotebookFolderCacheSize, zimbraNotebookMaxCachedTemplatesPerFolder, zimbraNotebookPageCacheSize, zimbraNotifyBindAddress, zimbraNotifyBindPort, zimbraNotifySSLBindAddress, zimbraNotifySSLBindPort, zimbraNotifySSLServerEnabled, zimbraNotifyServerEnabled, zimbraOAuthConsumerCredentials, zimbraOpenidConsumerAllowedOPEndpointURL, zimbraOpenidConsumerStatelessModeEnabled, zimbraPasswordChangeListener, zimbraPop3BindOnStartup, zimbraPop3BindPort, zimbraPop3CleartextLoginEnabled, zimbraPop3ExposeVersionOnBanner, zimbraPop3MaxConnections, zimbraPop3NumThreads, zimbraPop3ProxyBindPort, zimbraPop3SSLBindOnStartup, zimbraPop3SSLBindPort, zimbraPop3SSLProxyBindPort, zimbraPop3SSLServerEnabled, zimbraPop3SaslGssapiEnabled, zimbraPop3ServerEnabled, zimbraPop3ShutdownGraceSeconds, zimbraPrevFoldersToTrackMax, zimbraProduct, zimbraPublicServiceHostname, zimbraPublicServicePort, zimbraPublicServiceProtocol, zimbraRedoLogArchiveDir, zimbraRedoLogCrashRecoveryLookbackSec, zimbraRedoLogDeleteOnRollover, zimbraRedoLogEnabled, zimbraRedoLogFsyncIntervalMS, zimbraRedoLogLogPath, zimbraRedoLogProvider, zimbraRedoLogRolloverFileSizeKB, zimbraRedoLogRolloverHardMaxFileSizeKB, zimbraRedoLogRolloverMinFileAge, zimbraRegexMaxAccessesWhenMatching, zimbraRemoteManagementCommand, zimbraRemoteManagementPort, zimbraRemoteManagementPrivateKeyPath, zimbraRemoteManagementUser, zimbraResponseHeader, zimbraReverseProxyAcceptMutex, zimbraReverseProxyAdminEnabled, zimbraReverseProxyAdminIPAddress, zimbraReverseProxyAdminPortAttribute, zimbraReverseProxyAuthWaitInterval, zimbraReverseProxyAvailableLookupTargets, zimbraReverseProxyCacheEntryTTL, zimbraReverseProxyCacheFetchTimeout, zimbraReverseProxyCacheReconnectInterval, zimbraReverseProxyClientCertCA, zimbraReverseProxyClientCertMode, zimbraReverseProxyConnectTimeout, zimbraReverseProxyDefaultRealm, zimbraReverseProxyDnsLookupInServerEnabled, zimbraReverseProxyDomainNameAttribute, zimbraReverseProxyDomainNameQuery, zimbraReverseProxyDomainNameSearchBase, zimbraReverseProxyErrorHandlerURL, zimbraReverseProxyExactServerVersionCheck, zimbraReverseProxyExternalRouteIncludeOriginalAuthusername, zimbraReverseProxyGenConfigPerVirtualHostname, zimbraReverseProxyHttpEnabled, zimbraReverseProxyHttpPortAttribute, zimbraReverseProxyHttpSSLPortAttribute, zimbraReverseProxyIPLoginLimit, zimbraReverseProxyIPLoginLimitTime, zimbraReverseProxyImapEnabledCapability, zimbraReverseProxyImapExposeVersionOnBanner, zimbraReverseProxyImapPortAttribute, zimbraReverseProxyImapSSLPortAttribute, zimbraReverseProxyImapSaslGssapiEnabled, zimbraReverseProxyImapSaslPlainEnabled, zimbraReverseProxyImapStartTlsMode, zimbraReverseProxyInactivityTimeout, zimbraReverseProxyIpThrottleMsg, zimbraReverseProxyLogLevel, zimbraReverseProxyLookupTarget, zimbraReverseProxyMailEnabled, zimbraReverseProxyMailHostAttribute, zimbraReverseProxyMailHostQuery, zimbraReverseProxyMailHostSearchBase, zimbraReverseProxyMailImapEnabled, zimbraReverseProxyMailImapsEnabled, zimbraReverseProxyMailMode, zimbraReverseProxyMailPop3Enabled, zimbraReverseProxyMailPop3sEnabled, zimbraReverseProxyPassErrors, zimbraReverseProxyPop3EnabledCapability, zimbraReverseProxyPop3ExposeVersionOnBanner, zimbraReverseProxyPop3PortAttribute, zimbraReverseProxyPop3SSLPortAttribute, zimbraReverseProxyPop3SaslGssapiEnabled, zimbraReverseProxyPop3SaslPlainEnabled, zimbraReverseProxyPop3StartTlsMode, zimbraReverseProxyPortQuery, zimbraReverseProxyPortSearchBase, zimbraReverseProxyRouteLookupTimeout, zimbraReverseProxyRouteLookupTimeoutCache, zimbraReverseProxySSLCiphers, zimbraReverseProxySSLECDHCurve, zimbraReverseProxySSLProtocols, zimbraReverseProxySSLToUpstreamEnabled, zimbraReverseProxySendImapId, zimbraReverseProxySendPop3Xoip, zimbraReverseProxyUpstreamConnectTimeout, zimbraReverseProxyUpstreamEwsServers, zimbraReverseProxyUpstreamLoginServers, zimbraReverseProxyUpstreamPollingTimeout, zimbraReverseProxyUpstreamReadTimeout, zimbraReverseProxyUpstreamSendTimeout, zimbraReverseProxyUpstreamServers, zimbraReverseProxyUserLoginLimit, zimbraReverseProxyUserLoginLimitTime, zimbraReverseProxyUserNameAttribute, zimbraReverseProxyUserThrottleMsg, zimbraReverseProxyWorkerConnections, zimbraReverseProxyWorkerProcesses, zimbraSMIMELdapAttribute, zimbraSMIMELdapBindDn, zimbraSMIMELdapBindPassword, zimbraSMIMELdapDiscoverSearchBaseEnabled, zimbraSMIMELdapFilter, zimbraSMIMELdapSearchBase, zimbraSMIMELdapStartTlsEnabled, zimbraSMIMELdapURL, zimbraSSLCertificate, zimbraSSLExcludeCipherSuites, zimbraSSLIncludeCipherSuites, zimbraSSLPrivateKey, zimbraSaslGssapiRequiresTls, zimbraScheduledTaskNumThreads, zimbraServerExtraObjectClass, zimbraServerInheritedAttr, zimbraShareNotificationMtaAuthAccount, zimbraShareNotificationMtaAuthPassword, zimbraShareNotificationMtaAuthRequired, zimbraShareNotificationMtaConnectionType, zimbraShareNotificationMtaEnabled, zimbraShareNotificationMtaHostname, zimbraShareNotificationMtaPort, zimbraSharingUpdatePublishInterval, zimbraSkinBackgroundColor, zimbraSkinFavicon, zimbraSkinForegroundColor, zimbraSkinLogoAppBanner, zimbraSkinLogoLoginBanner, zimbraSkinLogoURL, zimbraSkinSecondaryColor, zimbraSkinSelectionColor, zimbraSmtpHostname, zimbraSmtpPort, zimbraSmtpSendAddAuthenticatedUser, zimbraSmtpSendAddMailer, zimbraSmtpSendAddOriginatingIP, zimbraSmtpSendPartial, zimbraSmtpTimeout, zimbraSoapExposeVersion, zimbraSoapRequestMaxSize, zimbraSpamCheckEnabled, zimbraSpamHeader, zimbraSpamHeaderValue, zimbraSpamIsNotSpamAccount, zimbraSpamIsSpamAccount, zimbraSpamKillPercent, zimbraSpamReportEnvelopeFrom, zimbraSpamReportSenderHeader, zimbraSpamReportTypeHam, zimbraSpamReportTypeHeader, zimbraSpamReportTypeSpam, zimbraSpamSubjectTag, zimbraSpamTagPercent, zimbraSpamTrashAlias, zimbraSpamWhitelistHeader, zimbraSpamWhitelistHeaderValue, zimbraSpellAvailableDictionary, zimbraSpellCheckURL, zimbraSpnegoAuthEnabled, zimbraSpnegoAuthErrorURL, zimbraSpnegoAuthRealm, zimbraSslCaCert, zimbraSslCaKey, zimbraStatThreadNamePrefix, zimbraTableMaintenanceGrowthFactor, zimbraTableMaintenanceMaxRows, zimbraTableMaintenanceMinRows, zimbraTableMaintenanceOperation, zimbraThreadMonitorEnabled, zimbraThrottleSafeHosts, zimbraThrottleWhitelist, zimbraUCProviderEnabled, zimbraVersionCheckInterval, zimbraVersionCheckLastAttempt, zimbraVersionCheckLastResponse, zimbraVersionCheckLastSuccess, zimbraVersionCheckNotificationBody, zimbraVersionCheckNotificationEmail, zimbraVersionCheckNotificationEmailFrom, zimbraVersionCheckNotificationSubject, zimbraVersionCheckSendNotifications, zimbraVersionCheckServer, zimbraVersionCheckURL, zimbraVirusBlockEncryptedArchive, zimbraVirusCheckEnabled, zimbraVirusDefinitionsUpdateFrequency, zimbraVirusWarnAdmin, zimbraVirusWarnRecipient, zimbraWebClientAdminReference, zimbraWebClientLoginURL, zimbraWebClientLoginURLAllowedIP, zimbraWebClientLoginURLAllowedUA, zimbraWebClientLogoutURL, zimbraWebClientLogoutURLAllowedIP, zimbraWebClientLogoutURLAllowedUA, zimbraWebClientMaxInputBufferLength, zimbraWebClientURL, zimbraWebGzipEnabled, zimbraXMPPEnabled, zimbraXMPPServerDialbackKey, zimbraZimletDataSensitiveInMixedModeDisabled, zimbraZimletDomainAvailableZimlets, zimbraZimletJspEnabled, zimbraZookeeperClientServerList] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraGlobalConfig"],
    "&ldapDesc": "global config" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraGlobalConfig /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
