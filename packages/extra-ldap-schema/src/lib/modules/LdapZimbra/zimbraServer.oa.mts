/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraServer } from "../LdapZimbra/id-oc-zimbraServer.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminBindAddress } from "../LdapZimbra/zimbraAdminBindAddress.oa.mjs";
import { zimbraAdminImapImportNumThreads } from "../LdapZimbra/zimbraAdminImapImportNumThreads.oa.mjs";
import { zimbraAdminLocalBind } from "../LdapZimbra/zimbraAdminLocalBind.oa.mjs";
import { zimbraAdminPort } from "../LdapZimbra/zimbraAdminPort.oa.mjs";
import { zimbraAdminProxyPort } from "../LdapZimbra/zimbraAdminProxyPort.oa.mjs";
import { zimbraAdminURL } from "../LdapZimbra/zimbraAdminURL.oa.mjs";
import { zimbraAlwaysOnClusterId } from "../LdapZimbra/zimbraAlwaysOnClusterId.oa.mjs";
import { zimbraAmavisDSPAMEnabled } from "../LdapZimbra/zimbraAmavisDSPAMEnabled.oa.mjs";
import { zimbraAmavisEnableDKIMVerification } from "../LdapZimbra/zimbraAmavisEnableDKIMVerification.oa.mjs";
import { zimbraAmavisFinalSpamDestiny } from "../LdapZimbra/zimbraAmavisFinalSpamDestiny.oa.mjs";
import { zimbraAmavisLogLevel } from "../LdapZimbra/zimbraAmavisLogLevel.oa.mjs";
import { zimbraAmavisMaxServers } from "../LdapZimbra/zimbraAmavisMaxServers.oa.mjs";
import { zimbraAmavisOriginatingBypassSA } from "../LdapZimbra/zimbraAmavisOriginatingBypassSA.oa.mjs";
import { zimbraAmavisSALogLevel } from "../LdapZimbra/zimbraAmavisSALogLevel.oa.mjs";
import { zimbraAntispamExtractionBatchDelay } from "../LdapZimbra/zimbraAntispamExtractionBatchDelay.oa.mjs";
import { zimbraAntispamExtractionBatchSize } from "../LdapZimbra/zimbraAntispamExtractionBatchSize.oa.mjs";
import { zimbraAttachmentsIndexedTextLimit } from "../LdapZimbra/zimbraAttachmentsIndexedTextLimit.oa.mjs";
import { zimbraAttachmentsScanEnabled } from "../LdapZimbra/zimbraAttachmentsScanEnabled.oa.mjs";
import { zimbraAttachmentsScanURL } from "../LdapZimbra/zimbraAttachmentsScanURL.oa.mjs";
import { zimbraAuthTokenNotificationInterval } from "../LdapZimbra/zimbraAuthTokenNotificationInterval.oa.mjs";
import { zimbraAutoProvPollingInterval } from "../LdapZimbra/zimbraAutoProvPollingInterval.oa.mjs";
import { zimbraAutoProvScheduledDomains } from "../LdapZimbra/zimbraAutoProvScheduledDomains.oa.mjs";
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
import { zimbraCalendarCalDavClearTextPasswordEnabled } from "../LdapZimbra/zimbraCalendarCalDavClearTextPasswordEnabled.oa.mjs";
import { zimbraCalendarCalDavDefaultCalendarId } from "../LdapZimbra/zimbraCalendarCalDavDefaultCalendarId.oa.mjs";
import { zimbraCalendarRecurrenceDailyMaxDays } from "../LdapZimbra/zimbraCalendarRecurrenceDailyMaxDays.oa.mjs";
import { zimbraCalendarRecurrenceMaxInstances } from "../LdapZimbra/zimbraCalendarRecurrenceMaxInstances.oa.mjs";
import { zimbraCalendarRecurrenceMonthlyMaxMonths } from "../LdapZimbra/zimbraCalendarRecurrenceMonthlyMaxMonths.oa.mjs";
import { zimbraCalendarRecurrenceOtherFrequencyMaxYears } from "../LdapZimbra/zimbraCalendarRecurrenceOtherFrequencyMaxYears.oa.mjs";
import { zimbraCalendarRecurrenceWeeklyMaxWeeks } from "../LdapZimbra/zimbraCalendarRecurrenceWeeklyMaxWeeks.oa.mjs";
import { zimbraCalendarRecurrenceYearlyMaxYears } from "../LdapZimbra/zimbraCalendarRecurrenceYearlyMaxYears.oa.mjs";
import { zimbraClamAVBindAddress } from "../LdapZimbra/zimbraClamAVBindAddress.oa.mjs";
import { zimbraClamAVListenPort } from "../LdapZimbra/zimbraClamAVListenPort.oa.mjs";
import { zimbraClamAVMaxThreads } from "../LdapZimbra/zimbraClamAVMaxThreads.oa.mjs";
import { zimbraClusterType } from "../LdapZimbra/zimbraClusterType.oa.mjs";
import { zimbraConfiguredServerIDForBlobDirEnabled } from "../LdapZimbra/zimbraConfiguredServerIDForBlobDirEnabled.oa.mjs";
import { zimbraContactHiddenAttributes } from "../LdapZimbra/zimbraContactHiddenAttributes.oa.mjs";
import { zimbraContactRankingTableRefreshInterval } from "../LdapZimbra/zimbraContactRankingTableRefreshInterval.oa.mjs";
import { zimbraConvertdURL } from "../LdapZimbra/zimbraConvertdURL.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraDNSMasterIP } from "../LdapZimbra/zimbraDNSMasterIP.oa.mjs";
import { zimbraDNSTCPUpstream } from "../LdapZimbra/zimbraDNSTCPUpstream.oa.mjs";
import { zimbraDNSUseTCP } from "../LdapZimbra/zimbraDNSUseTCP.oa.mjs";
import { zimbraDNSUseUDP } from "../LdapZimbra/zimbraDNSUseUDP.oa.mjs";
import { zimbraDatabaseSlowSqlThreshold } from "../LdapZimbra/zimbraDatabaseSlowSqlThreshold.oa.mjs";
import { zimbraEmptyFolderOpTimeout } from "../LdapZimbra/zimbraEmptyFolderOpTimeout.oa.mjs";
import { zimbraExtensionBindAddress } from "../LdapZimbra/zimbraExtensionBindAddress.oa.mjs";
import { zimbraExternalAccountStatusCheckInterval } from "../LdapZimbra/zimbraExternalAccountStatusCheckInterval.oa.mjs";
import { zimbraFileUploadMaxSize } from "../LdapZimbra/zimbraFileUploadMaxSize.oa.mjs";
import { zimbraFreebusyPropagationRetryInterval } from "../LdapZimbra/zimbraFreebusyPropagationRetryInterval.oa.mjs";
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
import { zimbraIMBindAddress } from "../LdapZimbra/zimbraIMBindAddress.oa.mjs";
import { zimbraIPMode } from "../LdapZimbra/zimbraIPMode.oa.mjs";
import { zimbraImapAdvertisedName } from "../LdapZimbra/zimbraImapAdvertisedName.oa.mjs";
import { zimbraImapBindAddress } from "../LdapZimbra/zimbraImapBindAddress.oa.mjs";
import { zimbraImapBindOnStartup } from "../LdapZimbra/zimbraImapBindOnStartup.oa.mjs";
import { zimbraImapBindPort } from "../LdapZimbra/zimbraImapBindPort.oa.mjs";
import { zimbraImapCleartextLoginEnabled } from "../LdapZimbra/zimbraImapCleartextLoginEnabled.oa.mjs";
import { zimbraImapDisabledCapability } from "../LdapZimbra/zimbraImapDisabledCapability.oa.mjs";
import { zimbraImapExposeVersionOnBanner } from "../LdapZimbra/zimbraImapExposeVersionOnBanner.oa.mjs";
import { zimbraImapMaxConnections } from "../LdapZimbra/zimbraImapMaxConnections.oa.mjs";
import { zimbraImapMaxRequestSize } from "../LdapZimbra/zimbraImapMaxRequestSize.oa.mjs";
import { zimbraImapNumThreads } from "../LdapZimbra/zimbraImapNumThreads.oa.mjs";
import { zimbraImapProxyBindPort } from "../LdapZimbra/zimbraImapProxyBindPort.oa.mjs";
import { zimbraImapSSLBindAddress } from "../LdapZimbra/zimbraImapSSLBindAddress.oa.mjs";
import { zimbraImapSSLBindOnStartup } from "../LdapZimbra/zimbraImapSSLBindOnStartup.oa.mjs";
import { zimbraImapSSLBindPort } from "../LdapZimbra/zimbraImapSSLBindPort.oa.mjs";
import { zimbraImapSSLDisabledCapability } from "../LdapZimbra/zimbraImapSSLDisabledCapability.oa.mjs";
import { zimbraImapSSLProxyBindPort } from "../LdapZimbra/zimbraImapSSLProxyBindPort.oa.mjs";
import { zimbraImapSSLServerEnabled } from "../LdapZimbra/zimbraImapSSLServerEnabled.oa.mjs";
import { zimbraImapSaslGssapiEnabled } from "../LdapZimbra/zimbraImapSaslGssapiEnabled.oa.mjs";
import { zimbraImapServerEnabled } from "../LdapZimbra/zimbraImapServerEnabled.oa.mjs";
import { zimbraImapShutdownGraceSeconds } from "../LdapZimbra/zimbraImapShutdownGraceSeconds.oa.mjs";
import { zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating } from "../LdapZimbra/zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating.oa.mjs";
import { zimbraInvalidLoginFilterMaxFailedLogin } from "../LdapZimbra/zimbraInvalidLoginFilterMaxFailedLogin.oa.mjs";
import { zimbraInvalidLoginFilterMaxSizeOfFailedIpDb } from "../LdapZimbra/zimbraInvalidLoginFilterMaxSizeOfFailedIpDb.oa.mjs";
import { zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin } from "../LdapZimbra/zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin.oa.mjs";
import { zimbraIsMonitorHost } from "../LdapZimbra/zimbraIsMonitorHost.oa.mjs";
import { zimbraItemActionBatchSize } from "../LdapZimbra/zimbraItemActionBatchSize.oa.mjs";
import { zimbraLastPurgeMaxDuration } from "../LdapZimbra/zimbraLastPurgeMaxDuration.oa.mjs";
import { zimbraLmtpAdvertisedName } from "../LdapZimbra/zimbraLmtpAdvertisedName.oa.mjs";
import { zimbraLmtpBindAddress } from "../LdapZimbra/zimbraLmtpBindAddress.oa.mjs";
import { zimbraLmtpBindOnStartup } from "../LdapZimbra/zimbraLmtpBindOnStartup.oa.mjs";
import { zimbraLmtpBindPort } from "../LdapZimbra/zimbraLmtpBindPort.oa.mjs";
import { zimbraLmtpExposeVersionOnBanner } from "../LdapZimbra/zimbraLmtpExposeVersionOnBanner.oa.mjs";
import { zimbraLmtpLHLORequired } from "../LdapZimbra/zimbraLmtpLHLORequired.oa.mjs";
import { zimbraLmtpNumThreads } from "../LdapZimbra/zimbraLmtpNumThreads.oa.mjs";
import { zimbraLmtpPermanentFailureWhenOverQuota } from "../LdapZimbra/zimbraLmtpPermanentFailureWhenOverQuota.oa.mjs";
import { zimbraLmtpServerEnabled } from "../LdapZimbra/zimbraLmtpServerEnabled.oa.mjs";
import { zimbraLmtpShutdownGraceSeconds } from "../LdapZimbra/zimbraLmtpShutdownGraceSeconds.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraLogToSyslog } from "../LdapZimbra/zimbraLogToSyslog.oa.mjs";
import { zimbraLowestSupportedAuthVersion } from "../LdapZimbra/zimbraLowestSupportedAuthVersion.oa.mjs";
import { zimbraMailBindAddress } from "../LdapZimbra/zimbraMailBindAddress.oa.mjs";
import { zimbraMailClearTextPasswordEnabled } from "../LdapZimbra/zimbraMailClearTextPasswordEnabled.oa.mjs";
import { zimbraMailContentMaxSize } from "../LdapZimbra/zimbraMailContentMaxSize.oa.mjs";
import { zimbraMailDiskStreamingThreshold } from "../LdapZimbra/zimbraMailDiskStreamingThreshold.oa.mjs";
import { zimbraMailEmptyFolderBatchSize } from "../LdapZimbra/zimbraMailEmptyFolderBatchSize.oa.mjs";
import { zimbraMailEmptyFolderBatchThreshold } from "../LdapZimbra/zimbraMailEmptyFolderBatchThreshold.oa.mjs";
import { zimbraMailFileDescriptorBufferSize } from "../LdapZimbra/zimbraMailFileDescriptorBufferSize.oa.mjs";
import { zimbraMailFileDescriptorCacheSize } from "../LdapZimbra/zimbraMailFileDescriptorCacheSize.oa.mjs";
import { zimbraMailKeepOutWebCrawlers } from "../LdapZimbra/zimbraMailKeepOutWebCrawlers.oa.mjs";
import { zimbraMailLastPurgedMailboxId } from "../LdapZimbra/zimbraMailLastPurgedMailboxId.oa.mjs";
import { zimbraMailLocalBind } from "../LdapZimbra/zimbraMailLocalBind.oa.mjs";
import { zimbraMailMode } from "../LdapZimbra/zimbraMailMode.oa.mjs";
import { zimbraMailPort } from "../LdapZimbra/zimbraMailPort.oa.mjs";
import { zimbraMailProxyMaxFails } from "../LdapZimbra/zimbraMailProxyMaxFails.oa.mjs";
import { zimbraMailProxyPort } from "../LdapZimbra/zimbraMailProxyPort.oa.mjs";
import { zimbraMailProxyReconnectTimeout } from "../LdapZimbra/zimbraMailProxyReconnectTimeout.oa.mjs";
import { zimbraMailPurgeBatchSize } from "../LdapZimbra/zimbraMailPurgeBatchSize.oa.mjs";
import { zimbraMailPurgeSleepInterval } from "../LdapZimbra/zimbraMailPurgeSleepInterval.oa.mjs";
import { zimbraMailRedirectSetEnvelopeSender } from "../LdapZimbra/zimbraMailRedirectSetEnvelopeSender.oa.mjs";
import { zimbraMailReferMode } from "../LdapZimbra/zimbraMailReferMode.oa.mjs";
import { zimbraMailSSLBindAddress } from "../LdapZimbra/zimbraMailSSLBindAddress.oa.mjs";
import { zimbraMailSSLClientCertBindAddress } from "../LdapZimbra/zimbraMailSSLClientCertBindAddress.oa.mjs";
import { zimbraMailSSLClientCertMode } from "../LdapZimbra/zimbraMailSSLClientCertMode.oa.mjs";
import { zimbraMailSSLClientCertOCSPEnabled } from "../LdapZimbra/zimbraMailSSLClientCertOCSPEnabled.oa.mjs";
import { zimbraMailSSLClientCertPort } from "../LdapZimbra/zimbraMailSSLClientCertPort.oa.mjs";
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
import { zimbraMemcachedBindAddress } from "../LdapZimbra/zimbraMemcachedBindAddress.oa.mjs";
import { zimbraMemcachedBindPort } from "../LdapZimbra/zimbraMemcachedBindPort.oa.mjs";
import { zimbraMemcachedClientBinaryProtocolEnabled } from "../LdapZimbra/zimbraMemcachedClientBinaryProtocolEnabled.oa.mjs";
import { zimbraMemcachedClientExpirySeconds } from "../LdapZimbra/zimbraMemcachedClientExpirySeconds.oa.mjs";
import { zimbraMemcachedClientHashAlgorithm } from "../LdapZimbra/zimbraMemcachedClientHashAlgorithm.oa.mjs";
import { zimbraMemcachedClientServerList } from "../LdapZimbra/zimbraMemcachedClientServerList.oa.mjs";
import { zimbraMemcachedClientTimeoutMillis } from "../LdapZimbra/zimbraMemcachedClientTimeoutMillis.oa.mjs";
import { zimbraMessageCacheSize } from "../LdapZimbra/zimbraMessageCacheSize.oa.mjs";
import { zimbraMessageChannelEnabled } from "../LdapZimbra/zimbraMessageChannelEnabled.oa.mjs";
import { zimbraMessageChannelPort } from "../LdapZimbra/zimbraMessageChannelPort.oa.mjs";
import { zimbraMilterBindAddress } from "../LdapZimbra/zimbraMilterBindAddress.oa.mjs";
import { zimbraMilterBindPort } from "../LdapZimbra/zimbraMilterBindPort.oa.mjs";
import { zimbraMilterMaxConnections } from "../LdapZimbra/zimbraMilterMaxConnections.oa.mjs";
import { zimbraMilterNumThreads } from "../LdapZimbra/zimbraMilterNumThreads.oa.mjs";
import { zimbraMilterServerEnabled } from "../LdapZimbra/zimbraMilterServerEnabled.oa.mjs";
import { zimbraMobileMaxMessageSize } from "../LdapZimbra/zimbraMobileMaxMessageSize.oa.mjs";
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
import { zimbraMtaBounceNoticeRecipient } from "../LdapZimbra/zimbraMtaBounceNoticeRecipient.oa.mjs";
import { zimbraMtaBounceQueueLifetime } from "../LdapZimbra/zimbraMtaBounceQueueLifetime.oa.mjs";
import { zimbraMtaBrokenSaslAuthClients } from "../LdapZimbra/zimbraMtaBrokenSaslAuthClients.oa.mjs";
import { zimbraMtaCommandDirectory } from "../LdapZimbra/zimbraMtaCommandDirectory.oa.mjs";
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
import { zimbraNotebookFolderCacheSize } from "../LdapZimbra/zimbraNotebookFolderCacheSize.oa.mjs";
import { zimbraNotebookMaxCachedTemplatesPerFolder } from "../LdapZimbra/zimbraNotebookMaxCachedTemplatesPerFolder.oa.mjs";
import { zimbraNotebookPageCacheSize } from "../LdapZimbra/zimbraNotebookPageCacheSize.oa.mjs";
import { zimbraNotes } from "../LdapZimbra/zimbraNotes.oa.mjs";
import { zimbraNotifyBindAddress } from "../LdapZimbra/zimbraNotifyBindAddress.oa.mjs";
import { zimbraNotifyBindPort } from "../LdapZimbra/zimbraNotifyBindPort.oa.mjs";
import { zimbraNotifySSLBindAddress } from "../LdapZimbra/zimbraNotifySSLBindAddress.oa.mjs";
import { zimbraNotifySSLBindPort } from "../LdapZimbra/zimbraNotifySSLBindPort.oa.mjs";
import { zimbraNotifySSLServerEnabled } from "../LdapZimbra/zimbraNotifySSLServerEnabled.oa.mjs";
import { zimbraNotifyServerEnabled } from "../LdapZimbra/zimbraNotifyServerEnabled.oa.mjs";
import { zimbraOpenidConsumerStatelessModeEnabled } from "../LdapZimbra/zimbraOpenidConsumerStatelessModeEnabled.oa.mjs";
import { zimbraPop3AdvertisedName } from "../LdapZimbra/zimbraPop3AdvertisedName.oa.mjs";
import { zimbraPop3BindAddress } from "../LdapZimbra/zimbraPop3BindAddress.oa.mjs";
import { zimbraPop3BindOnStartup } from "../LdapZimbra/zimbraPop3BindOnStartup.oa.mjs";
import { zimbraPop3BindPort } from "../LdapZimbra/zimbraPop3BindPort.oa.mjs";
import { zimbraPop3CleartextLoginEnabled } from "../LdapZimbra/zimbraPop3CleartextLoginEnabled.oa.mjs";
import { zimbraPop3ExposeVersionOnBanner } from "../LdapZimbra/zimbraPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraPop3MaxConnections } from "../LdapZimbra/zimbraPop3MaxConnections.oa.mjs";
import { zimbraPop3NumThreads } from "../LdapZimbra/zimbraPop3NumThreads.oa.mjs";
import { zimbraPop3ProxyBindPort } from "../LdapZimbra/zimbraPop3ProxyBindPort.oa.mjs";
import { zimbraPop3SSLBindAddress } from "../LdapZimbra/zimbraPop3SSLBindAddress.oa.mjs";
import { zimbraPop3SSLBindOnStartup } from "../LdapZimbra/zimbraPop3SSLBindOnStartup.oa.mjs";
import { zimbraPop3SSLBindPort } from "../LdapZimbra/zimbraPop3SSLBindPort.oa.mjs";
import { zimbraPop3SSLProxyBindPort } from "../LdapZimbra/zimbraPop3SSLProxyBindPort.oa.mjs";
import { zimbraPop3SSLServerEnabled } from "../LdapZimbra/zimbraPop3SSLServerEnabled.oa.mjs";
import { zimbraPop3SaslGssapiEnabled } from "../LdapZimbra/zimbraPop3SaslGssapiEnabled.oa.mjs";
import { zimbraPop3ServerEnabled } from "../LdapZimbra/zimbraPop3ServerEnabled.oa.mjs";
import { zimbraPop3ShutdownGraceSeconds } from "../LdapZimbra/zimbraPop3ShutdownGraceSeconds.oa.mjs";
import { zimbraPrevFoldersToTrackMax } from "../LdapZimbra/zimbraPrevFoldersToTrackMax.oa.mjs";
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
import { zimbraRemoteManagementCommand } from "../LdapZimbra/zimbraRemoteManagementCommand.oa.mjs";
import { zimbraRemoteManagementPort } from "../LdapZimbra/zimbraRemoteManagementPort.oa.mjs";
import { zimbraRemoteManagementPrivateKeyPath } from "../LdapZimbra/zimbraRemoteManagementPrivateKeyPath.oa.mjs";
import { zimbraRemoteManagementUser } from "../LdapZimbra/zimbraRemoteManagementUser.oa.mjs";
import { zimbraReverseProxyAcceptMutex } from "../LdapZimbra/zimbraReverseProxyAcceptMutex.oa.mjs";
import { zimbraReverseProxyAdminEnabled } from "../LdapZimbra/zimbraReverseProxyAdminEnabled.oa.mjs";
import { zimbraReverseProxyAvailableLookupTargets } from "../LdapZimbra/zimbraReverseProxyAvailableLookupTargets.oa.mjs";
import { zimbraReverseProxyClientCertCA } from "../LdapZimbra/zimbraReverseProxyClientCertCA.oa.mjs";
import { zimbraReverseProxyClientCertMode } from "../LdapZimbra/zimbraReverseProxyClientCertMode.oa.mjs";
import { zimbraReverseProxyConnectTimeout } from "../LdapZimbra/zimbraReverseProxyConnectTimeout.oa.mjs";
import { zimbraReverseProxyDefaultRealm } from "../LdapZimbra/zimbraReverseProxyDefaultRealm.oa.mjs";
import { zimbraReverseProxyDnsLookupInServerEnabled } from "../LdapZimbra/zimbraReverseProxyDnsLookupInServerEnabled.oa.mjs";
import { zimbraReverseProxyErrorHandlerURL } from "../LdapZimbra/zimbraReverseProxyErrorHandlerURL.oa.mjs";
import { zimbraReverseProxyExactServerVersionCheck } from "../LdapZimbra/zimbraReverseProxyExactServerVersionCheck.oa.mjs";
import { zimbraReverseProxyGenConfigPerVirtualHostname } from "../LdapZimbra/zimbraReverseProxyGenConfigPerVirtualHostname.oa.mjs";
import { zimbraReverseProxyHttpEnabled } from "../LdapZimbra/zimbraReverseProxyHttpEnabled.oa.mjs";
import { zimbraReverseProxyImapEnabledCapability } from "../LdapZimbra/zimbraReverseProxyImapEnabledCapability.oa.mjs";
import { zimbraReverseProxyImapExposeVersionOnBanner } from "../LdapZimbra/zimbraReverseProxyImapExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyImapSaslGssapiEnabled } from "../LdapZimbra/zimbraReverseProxyImapSaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyImapSaslPlainEnabled } from "../LdapZimbra/zimbraReverseProxyImapSaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyImapStartTlsMode } from "../LdapZimbra/zimbraReverseProxyImapStartTlsMode.oa.mjs";
import { zimbraReverseProxyInactivityTimeout } from "../LdapZimbra/zimbraReverseProxyInactivityTimeout.oa.mjs";
import { zimbraReverseProxyLogLevel } from "../LdapZimbra/zimbraReverseProxyLogLevel.oa.mjs";
import { zimbraReverseProxyLookupTarget } from "../LdapZimbra/zimbraReverseProxyLookupTarget.oa.mjs";
import { zimbraReverseProxyMailEnabled } from "../LdapZimbra/zimbraReverseProxyMailEnabled.oa.mjs";
import { zimbraReverseProxyMailImapEnabled } from "../LdapZimbra/zimbraReverseProxyMailImapEnabled.oa.mjs";
import { zimbraReverseProxyMailImapsEnabled } from "../LdapZimbra/zimbraReverseProxyMailImapsEnabled.oa.mjs";
import { zimbraReverseProxyMailMode } from "../LdapZimbra/zimbraReverseProxyMailMode.oa.mjs";
import { zimbraReverseProxyMailPop3Enabled } from "../LdapZimbra/zimbraReverseProxyMailPop3Enabled.oa.mjs";
import { zimbraReverseProxyMailPop3sEnabled } from "../LdapZimbra/zimbraReverseProxyMailPop3sEnabled.oa.mjs";
import { zimbraReverseProxyPassErrors } from "../LdapZimbra/zimbraReverseProxyPassErrors.oa.mjs";
import { zimbraReverseProxyPop3EnabledCapability } from "../LdapZimbra/zimbraReverseProxyPop3EnabledCapability.oa.mjs";
import { zimbraReverseProxyPop3ExposeVersionOnBanner } from "../LdapZimbra/zimbraReverseProxyPop3ExposeVersionOnBanner.oa.mjs";
import { zimbraReverseProxyPop3SaslGssapiEnabled } from "../LdapZimbra/zimbraReverseProxyPop3SaslGssapiEnabled.oa.mjs";
import { zimbraReverseProxyPop3SaslPlainEnabled } from "../LdapZimbra/zimbraReverseProxyPop3SaslPlainEnabled.oa.mjs";
import { zimbraReverseProxyPop3StartTlsMode } from "../LdapZimbra/zimbraReverseProxyPop3StartTlsMode.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeout } from "../LdapZimbra/zimbraReverseProxyRouteLookupTimeout.oa.mjs";
import { zimbraReverseProxyRouteLookupTimeoutCache } from "../LdapZimbra/zimbraReverseProxyRouteLookupTimeoutCache.oa.mjs";
import { zimbraReverseProxySSLProtocols } from "../LdapZimbra/zimbraReverseProxySSLProtocols.oa.mjs";
import { zimbraReverseProxySSLToUpstreamEnabled } from "../LdapZimbra/zimbraReverseProxySSLToUpstreamEnabled.oa.mjs";
import { zimbraReverseProxyUpstreamConnectTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamConnectTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamEwsServers } from "../LdapZimbra/zimbraReverseProxyUpstreamEwsServers.oa.mjs";
import { zimbraReverseProxyUpstreamLoginServers } from "../LdapZimbra/zimbraReverseProxyUpstreamLoginServers.oa.mjs";
import { zimbraReverseProxyUpstreamPollingTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamPollingTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamReadTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamReadTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamSendTimeout } from "../LdapZimbra/zimbraReverseProxyUpstreamSendTimeout.oa.mjs";
import { zimbraReverseProxyUpstreamServers } from "../LdapZimbra/zimbraReverseProxyUpstreamServers.oa.mjs";
import { zimbraReverseProxyWorkerConnections } from "../LdapZimbra/zimbraReverseProxyWorkerConnections.oa.mjs";
import { zimbraReverseProxyWorkerProcesses } from "../LdapZimbra/zimbraReverseProxyWorkerProcesses.oa.mjs";
import { zimbraSSLCertificate } from "../LdapZimbra/zimbraSSLCertificate.oa.mjs";
import { zimbraSSLPrivateKey } from "../LdapZimbra/zimbraSSLPrivateKey.oa.mjs";
import { zimbraSaslGssapiRequiresTls } from "../LdapZimbra/zimbraSaslGssapiRequiresTls.oa.mjs";
import { zimbraScheduledTaskNumThreads } from "../LdapZimbra/zimbraScheduledTaskNumThreads.oa.mjs";
import { zimbraServerVersion } from "../LdapZimbra/zimbraServerVersion.oa.mjs";
import { zimbraServerVersionBuild } from "../LdapZimbra/zimbraServerVersionBuild.oa.mjs";
import { zimbraServerVersionMajor } from "../LdapZimbra/zimbraServerVersionMajor.oa.mjs";
import { zimbraServerVersionMicro } from "../LdapZimbra/zimbraServerVersionMicro.oa.mjs";
import { zimbraServerVersionMinor } from "../LdapZimbra/zimbraServerVersionMinor.oa.mjs";
import { zimbraServerVersionType } from "../LdapZimbra/zimbraServerVersionType.oa.mjs";
import { zimbraServiceEnabled } from "../LdapZimbra/zimbraServiceEnabled.oa.mjs";
import { zimbraServiceHostname } from "../LdapZimbra/zimbraServiceHostname.oa.mjs";
import { zimbraServiceInstalled } from "../LdapZimbra/zimbraServiceInstalled.oa.mjs";
import { zimbraShareNotificationMtaAuthAccount } from "../LdapZimbra/zimbraShareNotificationMtaAuthAccount.oa.mjs";
import { zimbraShareNotificationMtaAuthPassword } from "../LdapZimbra/zimbraShareNotificationMtaAuthPassword.oa.mjs";
import { zimbraShareNotificationMtaAuthRequired } from "../LdapZimbra/zimbraShareNotificationMtaAuthRequired.oa.mjs";
import { zimbraShareNotificationMtaConnectionType } from "../LdapZimbra/zimbraShareNotificationMtaConnectionType.oa.mjs";
import { zimbraShareNotificationMtaEnabled } from "../LdapZimbra/zimbraShareNotificationMtaEnabled.oa.mjs";
import { zimbraShareNotificationMtaHostname } from "../LdapZimbra/zimbraShareNotificationMtaHostname.oa.mjs";
import { zimbraShareNotificationMtaPort } from "../LdapZimbra/zimbraShareNotificationMtaPort.oa.mjs";
import { zimbraSharingUpdatePublishInterval } from "../LdapZimbra/zimbraSharingUpdatePublishInterval.oa.mjs";
import { zimbraSmtpHostname } from "../LdapZimbra/zimbraSmtpHostname.oa.mjs";
import { zimbraSmtpPort } from "../LdapZimbra/zimbraSmtpPort.oa.mjs";
import { zimbraSmtpSendPartial } from "../LdapZimbra/zimbraSmtpSendPartial.oa.mjs";
import { zimbraSmtpTimeout } from "../LdapZimbra/zimbraSmtpTimeout.oa.mjs";
import { zimbraSoapExposeVersion } from "../LdapZimbra/zimbraSoapExposeVersion.oa.mjs";
import { zimbraSoapRequestMaxSize } from "../LdapZimbra/zimbraSoapRequestMaxSize.oa.mjs";
import { zimbraSpellAvailableDictionary } from "../LdapZimbra/zimbraSpellAvailableDictionary.oa.mjs";
import { zimbraSpellCheckURL } from "../LdapZimbra/zimbraSpellCheckURL.oa.mjs";
import { zimbraSpnegoAuthPrincipal } from "../LdapZimbra/zimbraSpnegoAuthPrincipal.oa.mjs";
import { zimbraSpnegoAuthTargetName } from "../LdapZimbra/zimbraSpnegoAuthTargetName.oa.mjs";
import { zimbraSshPublicKey } from "../LdapZimbra/zimbraSshPublicKey.oa.mjs";
import { zimbraStatThreadNamePrefix } from "../LdapZimbra/zimbraStatThreadNamePrefix.oa.mjs";
import { zimbraTableMaintenanceGrowthFactor } from "../LdapZimbra/zimbraTableMaintenanceGrowthFactor.oa.mjs";
import { zimbraTableMaintenanceMaxRows } from "../LdapZimbra/zimbraTableMaintenanceMaxRows.oa.mjs";
import { zimbraTableMaintenanceMinRows } from "../LdapZimbra/zimbraTableMaintenanceMinRows.oa.mjs";
import { zimbraTableMaintenanceOperation } from "../LdapZimbra/zimbraTableMaintenanceOperation.oa.mjs";
import { zimbraThreadMonitorEnabled } from "../LdapZimbra/zimbraThreadMonitorEnabled.oa.mjs";
import { zimbraThrottleSafeHosts } from "../LdapZimbra/zimbraThrottleSafeHosts.oa.mjs";
import { zimbraThrottleWhitelist } from "../LdapZimbra/zimbraThrottleWhitelist.oa.mjs";
import { zimbraUserServicesEnabled } from "../LdapZimbra/zimbraUserServicesEnabled.oa.mjs";
import { zimbraVirusDefinitionsUpdateFrequency } from "../LdapZimbra/zimbraVirusDefinitionsUpdateFrequency.oa.mjs";
import { zimbraWebClientURL } from "../LdapZimbra/zimbraWebClientURL.oa.mjs";
import { zimbraWebGzipEnabled } from "../LdapZimbra/zimbraWebGzipEnabled.oa.mjs";
import { zimbraXMPPEnabled } from "../LdapZimbra/zimbraXMPPEnabled.oa.mjs";
import { zimbraZimletJspEnabled } from "../LdapZimbra/zimbraZimletJspEnabled.oa.mjs";
import { zimbraZookeeperClientServerList } from "../LdapZimbra/zimbraZookeeperClientServerList.oa.mjs";
// export { id_oc_zimbraServer } from "../LdapZimbra/id-oc-zimbraServer.va.mjs";


/**
 * @summary zimbraServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminBindAddress
 *                               | zimbraAdminImapImportNumThreads
 *                               | zimbraAdminLocalBind
 *                               | zimbraAdminPort
 *                               | zimbraAdminProxyPort
 *                               | zimbraAdminURL
 *                               | zimbraAlwaysOnClusterId
 *                               | zimbraAmavisDSPAMEnabled
 *                               | zimbraAmavisEnableDKIMVerification
 *                               | zimbraAmavisFinalSpamDestiny
 *                               | zimbraAmavisLogLevel
 *                               | zimbraAmavisMaxServers
 *                               | zimbraAmavisOriginatingBypassSA
 *                               | zimbraAmavisSALogLevel
 *                               | zimbraAntispamExtractionBatchDelay
 *                               | zimbraAntispamExtractionBatchSize
 *                               | zimbraAttachmentsIndexedTextLimit
 *                               | zimbraAttachmentsScanEnabled
 *                               | zimbraAttachmentsScanURL
 *                               | zimbraAuthTokenNotificationInterval
 *                               | zimbraAutoProvPollingInterval
 *                               | zimbraAutoProvScheduledDomains
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
 *                               | zimbraCalendarCalDavClearTextPasswordEnabled
 *                               | zimbraCalendarCalDavDefaultCalendarId
 *                               | zimbraCalendarRecurrenceDailyMaxDays
 *                               | zimbraCalendarRecurrenceMaxInstances
 *                               | zimbraCalendarRecurrenceMonthlyMaxMonths
 *                               | zimbraCalendarRecurrenceOtherFrequencyMaxYears
 *                               | zimbraCalendarRecurrenceWeeklyMaxWeeks
 *                               | zimbraCalendarRecurrenceYearlyMaxYears
 *                               | zimbraClamAVBindAddress
 *                               | zimbraClamAVListenPort
 *                               | zimbraClamAVMaxThreads
 *                               | zimbraClusterType
 *                               | zimbraConfiguredServerIDForBlobDirEnabled
 *                               | zimbraContactHiddenAttributes
 *                               | zimbraContactRankingTableRefreshInterval
 *                               | zimbraConvertdURL
 *                               | zimbraCreateTimestamp
 *                               | zimbraDNSMasterIP
 *                               | zimbraDNSTCPUpstream
 *                               | zimbraDNSUseTCP
 *                               | zimbraDNSUseUDP
 *                               | zimbraDatabaseSlowSqlThreshold
 *                               | zimbraEmptyFolderOpTimeout
 *                               | zimbraExtensionBindAddress
 *                               | zimbraExternalAccountStatusCheckInterval
 *                               | zimbraFileUploadMaxSize
 *                               | zimbraFreebusyPropagationRetryInterval
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
 *                               | zimbraIMBindAddress
 *                               | zimbraIPMode
 *                               | zimbraImapAdvertisedName
 *                               | zimbraImapBindAddress
 *                               | zimbraImapBindOnStartup
 *                               | zimbraImapBindPort
 *                               | zimbraImapCleartextLoginEnabled
 *                               | zimbraImapDisabledCapability
 *                               | zimbraImapExposeVersionOnBanner
 *                               | zimbraImapMaxConnections
 *                               | zimbraImapMaxRequestSize
 *                               | zimbraImapNumThreads
 *                               | zimbraImapProxyBindPort
 *                               | zimbraImapSSLBindAddress
 *                               | zimbraImapSSLBindOnStartup
 *                               | zimbraImapSSLBindPort
 *                               | zimbraImapSSLDisabledCapability
 *                               | zimbraImapSSLProxyBindPort
 *                               | zimbraImapSSLServerEnabled
 *                               | zimbraImapSaslGssapiEnabled
 *                               | zimbraImapServerEnabled
 *                               | zimbraImapShutdownGraceSeconds
 *                               | zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating
 *                               | zimbraInvalidLoginFilterMaxFailedLogin
 *                               | zimbraInvalidLoginFilterMaxSizeOfFailedIpDb
 *                               | zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin
 *                               | zimbraIsMonitorHost
 *                               | zimbraItemActionBatchSize
 *                               | zimbraLastPurgeMaxDuration
 *                               | zimbraLmtpAdvertisedName
 *                               | zimbraLmtpBindAddress
 *                               | zimbraLmtpBindOnStartup
 *                               | zimbraLmtpBindPort
 *                               | zimbraLmtpExposeVersionOnBanner
 *                               | zimbraLmtpLHLORequired
 *                               | zimbraLmtpNumThreads
 *                               | zimbraLmtpPermanentFailureWhenOverQuota
 *                               | zimbraLmtpServerEnabled
 *                               | zimbraLmtpShutdownGraceSeconds
 *                               | zimbraLocale
 *                               | zimbraLogToSyslog
 *                               | zimbraLowestSupportedAuthVersion
 *                               | zimbraMailBindAddress
 *                               | zimbraMailClearTextPasswordEnabled
 *                               | zimbraMailContentMaxSize
 *                               | zimbraMailDiskStreamingThreshold
 *                               | zimbraMailEmptyFolderBatchSize
 *                               | zimbraMailEmptyFolderBatchThreshold
 *                               | zimbraMailFileDescriptorBufferSize
 *                               | zimbraMailFileDescriptorCacheSize
 *                               | zimbraMailKeepOutWebCrawlers
 *                               | zimbraMailLastPurgedMailboxId
 *                               | zimbraMailLocalBind
 *                               | zimbraMailMode
 *                               | zimbraMailPort
 *                               | zimbraMailProxyMaxFails
 *                               | zimbraMailProxyPort
 *                               | zimbraMailProxyReconnectTimeout
 *                               | zimbraMailPurgeBatchSize
 *                               | zimbraMailPurgeSleepInterval
 *                               | zimbraMailRedirectSetEnvelopeSender
 *                               | zimbraMailReferMode
 *                               | zimbraMailSSLBindAddress
 *                               | zimbraMailSSLClientCertBindAddress
 *                               | zimbraMailSSLClientCertMode
 *                               | zimbraMailSSLClientCertOCSPEnabled
 *                               | zimbraMailSSLClientCertPort
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
 *                               | zimbraMemcachedBindAddress
 *                               | zimbraMemcachedBindPort
 *                               | zimbraMemcachedClientBinaryProtocolEnabled
 *                               | zimbraMemcachedClientExpirySeconds
 *                               | zimbraMemcachedClientHashAlgorithm
 *                               | zimbraMemcachedClientServerList
 *                               | zimbraMemcachedClientTimeoutMillis
 *                               | zimbraMessageCacheSize
 *                               | zimbraMessageChannelEnabled
 *                               | zimbraMessageChannelPort
 *                               | zimbraMilterBindAddress
 *                               | zimbraMilterBindPort
 *                               | zimbraMilterMaxConnections
 *                               | zimbraMilterNumThreads
 *                               | zimbraMilterServerEnabled
 *                               | zimbraMobileMaxMessageSize
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
 *                               | zimbraMtaBounceNoticeRecipient
 *                               | zimbraMtaBounceQueueLifetime
 *                               | zimbraMtaBrokenSaslAuthClients
 *                               | zimbraMtaCommandDirectory
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
 *                               | zimbraNotebookFolderCacheSize
 *                               | zimbraNotebookMaxCachedTemplatesPerFolder
 *                               | zimbraNotebookPageCacheSize
 *                               | zimbraNotes
 *                               | zimbraNotifyBindAddress
 *                               | zimbraNotifyBindPort
 *                               | zimbraNotifySSLBindAddress
 *                               | zimbraNotifySSLBindPort
 *                               | zimbraNotifySSLServerEnabled
 *                               | zimbraNotifyServerEnabled
 *                               | zimbraOpenidConsumerStatelessModeEnabled
 *                               | zimbraPop3AdvertisedName
 *                               | zimbraPop3BindAddress
 *                               | zimbraPop3BindOnStartup
 *                               | zimbraPop3BindPort
 *                               | zimbraPop3CleartextLoginEnabled
 *                               | zimbraPop3ExposeVersionOnBanner
 *                               | zimbraPop3MaxConnections
 *                               | zimbraPop3NumThreads
 *                               | zimbraPop3ProxyBindPort
 *                               | zimbraPop3SSLBindAddress
 *                               | zimbraPop3SSLBindOnStartup
 *                               | zimbraPop3SSLBindPort
 *                               | zimbraPop3SSLProxyBindPort
 *                               | zimbraPop3SSLServerEnabled
 *                               | zimbraPop3SaslGssapiEnabled
 *                               | zimbraPop3ServerEnabled
 *                               | zimbraPop3ShutdownGraceSeconds
 *                               | zimbraPrevFoldersToTrackMax
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
 *                               | zimbraRemoteManagementCommand
 *                               | zimbraRemoteManagementPort
 *                               | zimbraRemoteManagementPrivateKeyPath
 *                               | zimbraRemoteManagementUser
 *                               | zimbraReverseProxyAcceptMutex
 *                               | zimbraReverseProxyAdminEnabled
 *                               | zimbraReverseProxyAvailableLookupTargets
 *                               | zimbraReverseProxyClientCertCA
 *                               | zimbraReverseProxyClientCertMode
 *                               | zimbraReverseProxyConnectTimeout
 *                               | zimbraReverseProxyDefaultRealm
 *                               | zimbraReverseProxyDnsLookupInServerEnabled
 *                               | zimbraReverseProxyErrorHandlerURL
 *                               | zimbraReverseProxyExactServerVersionCheck
 *                               | zimbraReverseProxyGenConfigPerVirtualHostname
 *                               | zimbraReverseProxyHttpEnabled
 *                               | zimbraReverseProxyImapEnabledCapability
 *                               | zimbraReverseProxyImapExposeVersionOnBanner
 *                               | zimbraReverseProxyImapSaslGssapiEnabled
 *                               | zimbraReverseProxyImapSaslPlainEnabled
 *                               | zimbraReverseProxyImapStartTlsMode
 *                               | zimbraReverseProxyInactivityTimeout
 *                               | zimbraReverseProxyLogLevel
 *                               | zimbraReverseProxyLookupTarget
 *                               | zimbraReverseProxyMailEnabled
 *                               | zimbraReverseProxyMailImapEnabled
 *                               | zimbraReverseProxyMailImapsEnabled
 *                               | zimbraReverseProxyMailMode
 *                               | zimbraReverseProxyMailPop3Enabled
 *                               | zimbraReverseProxyMailPop3sEnabled
 *                               | zimbraReverseProxyPassErrors
 *                               | zimbraReverseProxyPop3EnabledCapability
 *                               | zimbraReverseProxyPop3ExposeVersionOnBanner
 *                               | zimbraReverseProxyPop3SaslGssapiEnabled
 *                               | zimbraReverseProxyPop3SaslPlainEnabled
 *                               | zimbraReverseProxyPop3StartTlsMode
 *                               | zimbraReverseProxyRouteLookupTimeout
 *                               | zimbraReverseProxyRouteLookupTimeoutCache
 *                               | zimbraReverseProxySSLProtocols
 *                               | zimbraReverseProxySSLToUpstreamEnabled
 *                               | zimbraReverseProxyUpstreamConnectTimeout
 *                               | zimbraReverseProxyUpstreamEwsServers
 *                               | zimbraReverseProxyUpstreamLoginServers
 *                               | zimbraReverseProxyUpstreamPollingTimeout
 *                               | zimbraReverseProxyUpstreamReadTimeout
 *                               | zimbraReverseProxyUpstreamSendTimeout
 *                               | zimbraReverseProxyUpstreamServers
 *                               | zimbraReverseProxyWorkerConnections
 *                               | zimbraReverseProxyWorkerProcesses
 *                               | zimbraSSLCertificate
 *                               | zimbraSSLPrivateKey
 *                               | zimbraSaslGssapiRequiresTls
 *                               | zimbraScheduledTaskNumThreads
 *                               | zimbraServerVersion
 *                               | zimbraServerVersionBuild
 *                               | zimbraServerVersionMajor
 *                               | zimbraServerVersionMicro
 *                               | zimbraServerVersionMinor
 *                               | zimbraServerVersionType
 *                               | zimbraServiceEnabled
 *                               | zimbraServiceHostname
 *                               | zimbraServiceInstalled
 *                               | zimbraShareNotificationMtaAuthAccount
 *                               | zimbraShareNotificationMtaAuthPassword
 *                               | zimbraShareNotificationMtaAuthRequired
 *                               | zimbraShareNotificationMtaConnectionType
 *                               | zimbraShareNotificationMtaEnabled
 *                               | zimbraShareNotificationMtaHostname
 *                               | zimbraShareNotificationMtaPort
 *                               | zimbraSharingUpdatePublishInterval
 *                               | zimbraSmtpHostname
 *                               | zimbraSmtpPort
 *                               | zimbraSmtpSendPartial
 *                               | zimbraSmtpTimeout
 *                               | zimbraSoapExposeVersion
 *                               | zimbraSoapRequestMaxSize
 *                               | zimbraSpellAvailableDictionary
 *                               | zimbraSpellCheckURL
 *                               | zimbraSpnegoAuthPrincipal
 *                               | zimbraSpnegoAuthTargetName
 *                               | zimbraSshPublicKey
 *                               | zimbraStatThreadNamePrefix
 *                               | zimbraTableMaintenanceGrowthFactor
 *                               | zimbraTableMaintenanceMaxRows
 *                               | zimbraTableMaintenanceMinRows
 *                               | zimbraTableMaintenanceOperation
 *                               | zimbraThreadMonitorEnabled
 *                               | zimbraThrottleSafeHosts
 *                               | zimbraThrottleWhitelist
 *                               | zimbraUserServicesEnabled
 *                               | zimbraVirusDefinitionsUpdateFrequency
 *                               | zimbraWebClientURL
 *                               | zimbraWebGzipEnabled
 *                               | zimbraXMPPEnabled
 *                               | zimbraZimletJspEnabled
 *                               | zimbraZookeeperClientServerList }
 *   LDAP-NAME                 {"zimbraServer"}
 *   LDAP-DESC                 "Server in the cluster"
 *   ID                        id-oc-zimbraServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraServer: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraAdminBindAddress, zimbraAdminImapImportNumThreads, zimbraAdminLocalBind, zimbraAdminPort, zimbraAdminProxyPort, zimbraAdminURL, zimbraAlwaysOnClusterId, zimbraAmavisDSPAMEnabled, zimbraAmavisEnableDKIMVerification, zimbraAmavisFinalSpamDestiny, zimbraAmavisLogLevel, zimbraAmavisMaxServers, zimbraAmavisOriginatingBypassSA, zimbraAmavisSALogLevel, zimbraAntispamExtractionBatchDelay, zimbraAntispamExtractionBatchSize, zimbraAttachmentsIndexedTextLimit, zimbraAttachmentsScanEnabled, zimbraAttachmentsScanURL, zimbraAuthTokenNotificationInterval, zimbraAutoProvPollingInterval, zimbraAutoProvScheduledDomains, zimbraBackupAutoGroupedInterval, zimbraBackupAutoGroupedNumGroups, zimbraBackupAutoGroupedThrottled, zimbraBackupMinFreeSpace, zimbraBackupMode, zimbraBackupReportEmailRecipients, zimbraBackupReportEmailSender, zimbraBackupReportEmailSubjectPrefix, zimbraBackupSkipBlobs, zimbraBackupSkipHsmBlobs, zimbraBackupSkipSearchIndex, zimbraBackupTarget, zimbraCBPolicydAccessControlEnabled, zimbraCBPolicydAccountingEnabled, zimbraCBPolicydAmavisEnabled, zimbraCBPolicydBindPort, zimbraCBPolicydBypassMode, zimbraCBPolicydBypassTimeout, zimbraCBPolicydCheckHeloEnabled, zimbraCBPolicydCheckSPFEnabled, zimbraCBPolicydGreylistingBlacklistMsg, zimbraCBPolicydGreylistingDeferMsg, zimbraCBPolicydGreylistingEnabled, zimbraCBPolicydGreylistingTrainingEnabled, zimbraCBPolicydLogLevel, zimbraCBPolicydMaxRequests, zimbraCBPolicydMaxServers, zimbraCBPolicydMaxSpareServers, zimbraCBPolicydMinServers, zimbraCBPolicydMinSpareServers, zimbraCBPolicydQuotasEnabled, zimbraCBPolicydTimeoutBusy, zimbraCBPolicydTimeoutIdle, zimbraCalendarCalDavClearTextPasswordEnabled, zimbraCalendarCalDavDefaultCalendarId, zimbraCalendarRecurrenceDailyMaxDays, zimbraCalendarRecurrenceMaxInstances, zimbraCalendarRecurrenceMonthlyMaxMonths, zimbraCalendarRecurrenceOtherFrequencyMaxYears, zimbraCalendarRecurrenceWeeklyMaxWeeks, zimbraCalendarRecurrenceYearlyMaxYears, zimbraClamAVBindAddress, zimbraClamAVListenPort, zimbraClamAVMaxThreads, zimbraClusterType, zimbraConfiguredServerIDForBlobDirEnabled, zimbraContactHiddenAttributes, zimbraContactRankingTableRefreshInterval, zimbraConvertdURL, zimbraCreateTimestamp, zimbraDNSMasterIP, zimbraDNSTCPUpstream, zimbraDNSUseTCP, zimbraDNSUseUDP, zimbraDatabaseSlowSqlThreshold, zimbraEmptyFolderOpTimeout, zimbraExtensionBindAddress, zimbraExternalAccountStatusCheckInterval, zimbraFileUploadMaxSize, zimbraFreebusyPropagationRetryInterval, zimbraHsmAge, zimbraHsmBatchSize, zimbraHsmMovePreviousRevisions, zimbraHsmPolicy, zimbraHttpCompressionEnabled, zimbraHttpConnectorMaxIdleTimeMillis, zimbraHttpContextPathBasedThreadPoolBalancingFilterRules, zimbraHttpDebugHandlerEnabled, zimbraHttpDosFilterDelayMillis, zimbraHttpDosFilterMaxRequestsPerSec, zimbraHttpHeaderCacheSize, zimbraHttpMaxFormContentSize, zimbraHttpNumThreads, zimbraHttpOutputBufferSize, zimbraHttpProxyURL, zimbraHttpRequestHeaderSize, zimbraHttpResponseHeaderSize, zimbraHttpSSLNumThreads, zimbraHttpThreadPoolMaxIdleTimeMillis, zimbraHttpThrottleSafeIPs, zimbraIMBindAddress, zimbraIPMode, zimbraImapAdvertisedName, zimbraImapBindAddress, zimbraImapBindOnStartup, zimbraImapBindPort, zimbraImapCleartextLoginEnabled, zimbraImapDisabledCapability, zimbraImapExposeVersionOnBanner, zimbraImapMaxConnections, zimbraImapMaxRequestSize, zimbraImapNumThreads, zimbraImapProxyBindPort, zimbraImapSSLBindAddress, zimbraImapSSLBindOnStartup, zimbraImapSSLBindPort, zimbraImapSSLDisabledCapability, zimbraImapSSLProxyBindPort, zimbraImapSSLServerEnabled, zimbraImapSaslGssapiEnabled, zimbraImapServerEnabled, zimbraImapShutdownGraceSeconds, zimbraInvalidLoginFilterDelayInMinBetwnReqBeforeReinstating, zimbraInvalidLoginFilterMaxFailedLogin, zimbraInvalidLoginFilterMaxSizeOfFailedIpDb, zimbraInvalidLoginFilterReinstateIpTaskIntervalInMin, zimbraIsMonitorHost, zimbraItemActionBatchSize, zimbraLastPurgeMaxDuration, zimbraLmtpAdvertisedName, zimbraLmtpBindAddress, zimbraLmtpBindOnStartup, zimbraLmtpBindPort, zimbraLmtpExposeVersionOnBanner, zimbraLmtpLHLORequired, zimbraLmtpNumThreads, zimbraLmtpPermanentFailureWhenOverQuota, zimbraLmtpServerEnabled, zimbraLmtpShutdownGraceSeconds, zimbraLocale, zimbraLogToSyslog, zimbraLowestSupportedAuthVersion, zimbraMailBindAddress, zimbraMailClearTextPasswordEnabled, zimbraMailContentMaxSize, zimbraMailDiskStreamingThreshold, zimbraMailEmptyFolderBatchSize, zimbraMailEmptyFolderBatchThreshold, zimbraMailFileDescriptorBufferSize, zimbraMailFileDescriptorCacheSize, zimbraMailKeepOutWebCrawlers, zimbraMailLastPurgedMailboxId, zimbraMailLocalBind, zimbraMailMode, zimbraMailPort, zimbraMailProxyMaxFails, zimbraMailProxyPort, zimbraMailProxyReconnectTimeout, zimbraMailPurgeBatchSize, zimbraMailPurgeSleepInterval, zimbraMailRedirectSetEnvelopeSender, zimbraMailReferMode, zimbraMailSSLBindAddress, zimbraMailSSLClientCertBindAddress, zimbraMailSSLClientCertMode, zimbraMailSSLClientCertOCSPEnabled, zimbraMailSSLClientCertPort, zimbraMailSSLPort, zimbraMailSSLProxyClientCertPort, zimbraMailSSLProxyPort, zimbraMailTrustedIP, zimbraMailURL, zimbraMailUncompressedCacheMaxBytes, zimbraMailUncompressedCacheMaxFiles, zimbraMailUseDirectBuffers, zimbraMailboxMoveSkipBlobs, zimbraMailboxMoveSkipHsmBlobs, zimbraMailboxMoveSkipSearchIndex, zimbraMailboxMoveTempDir, zimbraMailboxdSSLProtocols, zimbraMemcachedBindAddress, zimbraMemcachedBindPort, zimbraMemcachedClientBinaryProtocolEnabled, zimbraMemcachedClientExpirySeconds, zimbraMemcachedClientHashAlgorithm, zimbraMemcachedClientServerList, zimbraMemcachedClientTimeoutMillis, zimbraMessageCacheSize, zimbraMessageChannelEnabled, zimbraMessageChannelPort, zimbraMilterBindAddress, zimbraMilterBindPort, zimbraMilterMaxConnections, zimbraMilterNumThreads, zimbraMilterServerEnabled, zimbraMobileMaxMessageSize, zimbraMobileMetadataRetentionPolicy, zimbraMtaAddressVerifyNegativeRefreshTime, zimbraMtaAddressVerifyPollCount, zimbraMtaAddressVerifyPollDelay, zimbraMtaAddressVerifyPositiveRefreshTime, zimbraMtaAliasMaps, zimbraMtaAlwaysAddMissingHeaders, zimbraMtaAntiSpamLockMethod, zimbraMtaAuthEnabled, zimbraMtaAuthHost, zimbraMtaAuthTarget, zimbraMtaAuthURL, zimbraMtaBounceNoticeRecipient, zimbraMtaBounceQueueLifetime, zimbraMtaBrokenSaslAuthClients, zimbraMtaCommandDirectory, zimbraMtaDaemonDirectory, zimbraMtaDefaultProcessLimit, zimbraMtaDelayWarningTime, zimbraMtaDnsLookupsEnabled, zimbraMtaEnableSmtpdPolicyd, zimbraMtaFallbackRelayHost, zimbraMtaHeaderChecks, zimbraMtaImportEnvironment, zimbraMtaInFlowDelay, zimbraMtaLmdbMapSize, zimbraMtaLmtpConnectionCacheDestinations, zimbraMtaLmtpConnectionCacheTimeLimit, zimbraMtaLmtpHostLookup, zimbraMtaLmtpTlsCAfile, zimbraMtaLmtpTlsCApath, zimbraMtaLmtpTlsCiphers, zimbraMtaLmtpTlsExcludeCiphers, zimbraMtaLmtpTlsLoglevel, zimbraMtaLmtpTlsMandatoryCiphers, zimbraMtaLmtpTlsProtocols, zimbraMtaLmtpTlsSecurityLevel, zimbraMtaMailqPath, zimbraMtaManpageDirectory, zimbraMtaMaxUse, zimbraMtaMaximalBackoffTime, zimbraMtaMilterCommandTimeout, zimbraMtaMilterConnectTimeout, zimbraMtaMilterContentTimeout, zimbraMtaMilterDefaultAction, zimbraMtaMinimalBackoffTime, zimbraMtaMyDestination, zimbraMtaMyHostname, zimbraMtaMyNetworks, zimbraMtaMyOrigin, zimbraMtaNewaliasesPath, zimbraMtaNonSmtpdMilters, zimbraMtaNotifyClasses, zimbraMtaPolicyTimeLimit, zimbraMtaPropagateUnmatchedExtensions, zimbraMtaQueueDirectory, zimbraMtaQueueRunDelay, zimbraMtaRelayHost, zimbraMtaRestriction, zimbraMtaSaslAuthEnable, zimbraMtaSaslSmtpdMechList, zimbraMtaSenderCanonicalMaps, zimbraMtaSendmailPath, zimbraMtaSmtpCnameOverridesServername, zimbraMtaSmtpGenericMaps, zimbraMtaSmtpHeloName, zimbraMtaSmtpSaslAuthEnable, zimbraMtaSmtpSaslMechanismFilter, zimbraMtaSmtpSaslPasswordMaps, zimbraMtaSmtpSaslSecurityOptions, zimbraMtaSmtpTlsCAfile, zimbraMtaSmtpTlsCApath, zimbraMtaSmtpTlsCiphers, zimbraMtaSmtpTlsLoglevel, zimbraMtaSmtpTlsMandatoryCiphers, zimbraMtaSmtpTlsProtocols, zimbraMtaSmtpTlsSecurityLevel, zimbraMtaSmtpdBanner, zimbraMtaSmtpdClientPortLogging, zimbraMtaSmtpdClientRestrictions, zimbraMtaSmtpdDataRestrictions, zimbraMtaSmtpdErrorSleepTime, zimbraMtaSmtpdHardErrorLimit, zimbraMtaSmtpdHeloRequired, zimbraMtaSmtpdMilters, zimbraMtaSmtpdProxyTimeout, zimbraMtaSmtpdRejectUnlistedRecipient, zimbraMtaSmtpdRejectUnlistedSender, zimbraMtaSmtpdSaslAuthenticatedHeader, zimbraMtaSmtpdSaslSecurityOptions, zimbraMtaSmtpdSaslTlsSecurityOptions, zimbraMtaSmtpdSenderLoginMaps, zimbraMtaSmtpdSenderRestrictions, zimbraMtaSmtpdTlsAskCcert, zimbraMtaSmtpdTlsCAfile, zimbraMtaSmtpdTlsCApath, zimbraMtaSmtpdTlsCcertVerifydepth, zimbraMtaSmtpdTlsCiphers, zimbraMtaSmtpdTlsExcludeCiphers, zimbraMtaSmtpdTlsLoglevel, zimbraMtaSmtpdTlsMandatoryCiphers, zimbraMtaSmtpdTlsProtocols, zimbraMtaSmtpdVirtualTransport, zimbraMtaStpdSoftErrorLimit, zimbraMtaTlsAppendDefaultCA, zimbraMtaTlsAuthOnly, zimbraMtaTlsSecurityLevel, zimbraMtaTransportMaps, zimbraMtaUnverifiedRecipientDeferCode, zimbraMtaVirtualAliasDomains, zimbraMtaVirtualAliasExpansionLimit, zimbraMtaVirtualAliasMaps, zimbraMtaVirtualMailboxDomains, zimbraMtaVirtualMailboxMaps, zimbraNotebookFolderCacheSize, zimbraNotebookMaxCachedTemplatesPerFolder, zimbraNotebookPageCacheSize, zimbraNotes, zimbraNotifyBindAddress, zimbraNotifyBindPort, zimbraNotifySSLBindAddress, zimbraNotifySSLBindPort, zimbraNotifySSLServerEnabled, zimbraNotifyServerEnabled, zimbraOpenidConsumerStatelessModeEnabled, zimbraPop3AdvertisedName, zimbraPop3BindAddress, zimbraPop3BindOnStartup, zimbraPop3BindPort, zimbraPop3CleartextLoginEnabled, zimbraPop3ExposeVersionOnBanner, zimbraPop3MaxConnections, zimbraPop3NumThreads, zimbraPop3ProxyBindPort, zimbraPop3SSLBindAddress, zimbraPop3SSLBindOnStartup, zimbraPop3SSLBindPort, zimbraPop3SSLProxyBindPort, zimbraPop3SSLServerEnabled, zimbraPop3SaslGssapiEnabled, zimbraPop3ServerEnabled, zimbraPop3ShutdownGraceSeconds, zimbraPrevFoldersToTrackMax, zimbraRedoLogArchiveDir, zimbraRedoLogCrashRecoveryLookbackSec, zimbraRedoLogDeleteOnRollover, zimbraRedoLogEnabled, zimbraRedoLogFsyncIntervalMS, zimbraRedoLogLogPath, zimbraRedoLogProvider, zimbraRedoLogRolloverFileSizeKB, zimbraRedoLogRolloverHardMaxFileSizeKB, zimbraRedoLogRolloverMinFileAge, zimbraRemoteManagementCommand, zimbraRemoteManagementPort, zimbraRemoteManagementPrivateKeyPath, zimbraRemoteManagementUser, zimbraReverseProxyAcceptMutex, zimbraReverseProxyAdminEnabled, zimbraReverseProxyAvailableLookupTargets, zimbraReverseProxyClientCertCA, zimbraReverseProxyClientCertMode, zimbraReverseProxyConnectTimeout, zimbraReverseProxyDefaultRealm, zimbraReverseProxyDnsLookupInServerEnabled, zimbraReverseProxyErrorHandlerURL, zimbraReverseProxyExactServerVersionCheck, zimbraReverseProxyGenConfigPerVirtualHostname, zimbraReverseProxyHttpEnabled, zimbraReverseProxyImapEnabledCapability, zimbraReverseProxyImapExposeVersionOnBanner, zimbraReverseProxyImapSaslGssapiEnabled, zimbraReverseProxyImapSaslPlainEnabled, zimbraReverseProxyImapStartTlsMode, zimbraReverseProxyInactivityTimeout, zimbraReverseProxyLogLevel, zimbraReverseProxyLookupTarget, zimbraReverseProxyMailEnabled, zimbraReverseProxyMailImapEnabled, zimbraReverseProxyMailImapsEnabled, zimbraReverseProxyMailMode, zimbraReverseProxyMailPop3Enabled, zimbraReverseProxyMailPop3sEnabled, zimbraReverseProxyPassErrors, zimbraReverseProxyPop3EnabledCapability, zimbraReverseProxyPop3ExposeVersionOnBanner, zimbraReverseProxyPop3SaslGssapiEnabled, zimbraReverseProxyPop3SaslPlainEnabled, zimbraReverseProxyPop3StartTlsMode, zimbraReverseProxyRouteLookupTimeout, zimbraReverseProxyRouteLookupTimeoutCache, zimbraReverseProxySSLProtocols, zimbraReverseProxySSLToUpstreamEnabled, zimbraReverseProxyUpstreamConnectTimeout, zimbraReverseProxyUpstreamEwsServers, zimbraReverseProxyUpstreamLoginServers, zimbraReverseProxyUpstreamPollingTimeout, zimbraReverseProxyUpstreamReadTimeout, zimbraReverseProxyUpstreamSendTimeout, zimbraReverseProxyUpstreamServers, zimbraReverseProxyWorkerConnections, zimbraReverseProxyWorkerProcesses, zimbraSSLCertificate, zimbraSSLPrivateKey, zimbraSaslGssapiRequiresTls, zimbraScheduledTaskNumThreads, zimbraServerVersion, zimbraServerVersionBuild, zimbraServerVersionMajor, zimbraServerVersionMicro, zimbraServerVersionMinor, zimbraServerVersionType, zimbraServiceEnabled, zimbraServiceHostname, zimbraServiceInstalled, zimbraShareNotificationMtaAuthAccount, zimbraShareNotificationMtaAuthPassword, zimbraShareNotificationMtaAuthRequired, zimbraShareNotificationMtaConnectionType, zimbraShareNotificationMtaEnabled, zimbraShareNotificationMtaHostname, zimbraShareNotificationMtaPort, zimbraSharingUpdatePublishInterval, zimbraSmtpHostname, zimbraSmtpPort, zimbraSmtpSendPartial, zimbraSmtpTimeout, zimbraSoapExposeVersion, zimbraSoapRequestMaxSize, zimbraSpellAvailableDictionary, zimbraSpellCheckURL, zimbraSpnegoAuthPrincipal, zimbraSpnegoAuthTargetName, zimbraSshPublicKey, zimbraStatThreadNamePrefix, zimbraTableMaintenanceGrowthFactor, zimbraTableMaintenanceMaxRows, zimbraTableMaintenanceMinRows, zimbraTableMaintenanceOperation, zimbraThreadMonitorEnabled, zimbraThrottleSafeHosts, zimbraThrottleWhitelist, zimbraUserServicesEnabled, zimbraVirusDefinitionsUpdateFrequency, zimbraWebClientURL, zimbraWebGzipEnabled, zimbraXMPPEnabled, zimbraZimletJspEnabled, zimbraZookeeperClientServerList, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Server in the cluster" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
