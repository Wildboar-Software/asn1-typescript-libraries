/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraCOS } from "../LdapZimbra/id-oc-zimbraCOS.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAdminAuthTokenLifetime } from "./zimbraAdminAuthTokenLifetime.oa.mjs";
import { zimbraAdminSavedSearches } from "./zimbraAdminSavedSearches.oa.mjs";
import { zimbraAllowAnyFromAddress } from "./zimbraAllowAnyFromAddress.oa.mjs";
import { zimbraArchiveAccountDateTemplate } from "./zimbraArchiveAccountDateTemplate.oa.mjs";
import { zimbraArchiveAccountNameTemplate } from "./zimbraArchiveAccountNameTemplate.oa.mjs";
import { zimbraArchiveEnabled } from "./zimbraArchiveEnabled.oa.mjs";
import { zimbraAttachmentsBlocked } from "./zimbraAttachmentsBlocked.oa.mjs";
import { zimbraAttachmentsIndexingEnabled } from "./zimbraAttachmentsIndexingEnabled.oa.mjs";
import { zimbraAttachmentsViewInHtmlOnly } from "./zimbraAttachmentsViewInHtmlOnly.oa.mjs";
import { zimbraAuthTokenLifetime } from "./zimbraAuthTokenLifetime.oa.mjs";
import { zimbraAvailableLocale } from "./zimbraAvailableLocale.oa.mjs";
import { zimbraAvailableSkin } from "./zimbraAvailableSkin.oa.mjs";
import { zimbraBatchedIndexingSize } from "./zimbraBatchedIndexingSize.oa.mjs";
import { zimbraCalendarCalDavSharedFolderCacheDuration } from "./zimbraCalendarCalDavSharedFolderCacheDuration.oa.mjs";
import { zimbraCalendarCalDavSyncEnd } from "./zimbraCalendarCalDavSyncEnd.oa.mjs";
import { zimbraCalendarCalDavSyncStart } from "./zimbraCalendarCalDavSyncStart.oa.mjs";
import { zimbraCalendarKeepExceptionsOnSeriesTimeChange } from "./zimbraCalendarKeepExceptionsOnSeriesTimeChange.oa.mjs";
import { zimbraCalendarLocationDisabledFields } from "./zimbraCalendarLocationDisabledFields.oa.mjs";
import { zimbraCalendarMaxRevisions } from "./zimbraCalendarMaxRevisions.oa.mjs";
import { zimbraCalendarResourceDoubleBookingAllowed } from "./zimbraCalendarResourceDoubleBookingAllowed.oa.mjs";
import { zimbraCalendarShowResourceTabs } from "./zimbraCalendarShowResourceTabs.oa.mjs";
import { zimbraCommunityAPIClientID } from "./zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "./zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "./zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "./zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "./zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraConstraint } from "./zimbraConstraint.oa.mjs";
import { zimbraContactAutoCompleteEmailFields } from "./zimbraContactAutoCompleteEmailFields.oa.mjs";
import { zimbraContactAutoCompleteMaxResults } from "./zimbraContactAutoCompleteMaxResults.oa.mjs";
import { zimbraContactEmailFields } from "./zimbraContactEmailFields.oa.mjs";
import { zimbraContactMaxNumEntries } from "./zimbraContactMaxNumEntries.oa.mjs";
import { zimbraContactRankingTableSize } from "./zimbraContactRankingTableSize.oa.mjs";
import { zimbraConverterHints } from "./zimbraConverterHints.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraDataSourceCaldavPollingInterval } from "./zimbraDataSourceCaldavPollingInterval.oa.mjs";
import { zimbraDataSourceCalendarPollingInterval } from "./zimbraDataSourceCalendarPollingInterval.oa.mjs";
import { zimbraDataSourceGalPollingInterval } from "./zimbraDataSourceGalPollingInterval.oa.mjs";
import { zimbraDataSourceImapPollingInterval } from "./zimbraDataSourceImapPollingInterval.oa.mjs";
import { zimbraDataSourceImportOnLogin } from "./zimbraDataSourceImportOnLogin.oa.mjs";
import { zimbraDataSourceLivePollingInterval } from "./zimbraDataSourceLivePollingInterval.oa.mjs";
import { zimbraDataSourceMaxNumEntries } from "./zimbraDataSourceMaxNumEntries.oa.mjs";
import { zimbraDataSourceMinPollingInterval } from "./zimbraDataSourceMinPollingInterval.oa.mjs";
import { zimbraDataSourcePollingInterval } from "./zimbraDataSourcePollingInterval.oa.mjs";
import { zimbraDataSourcePop3PollingInterval } from "./zimbraDataSourcePop3PollingInterval.oa.mjs";
import { zimbraDataSourceRssPollingInterval } from "./zimbraDataSourceRssPollingInterval.oa.mjs";
import { zimbraDataSourceYabPollingInterval } from "./zimbraDataSourceYabPollingInterval.oa.mjs";
import { zimbraDefaultFolderFlags } from "./zimbraDefaultFolderFlags.oa.mjs";
import { zimbraDeviceAllowedPasscodeLockoutDuration } from "./zimbraDeviceAllowedPasscodeLockoutDuration.oa.mjs";
import { zimbraDeviceCalendarSoftDeleteExcludePattern } from "./zimbraDeviceCalendarSoftDeleteExcludePattern.oa.mjs";
import { zimbraDeviceFileOpenWithEnabled } from "./zimbraDeviceFileOpenWithEnabled.oa.mjs";
import { zimbraDeviceLockWhenInactive } from "./zimbraDeviceLockWhenInactive.oa.mjs";
import { zimbraDeviceOfflineCacheEnabled } from "./zimbraDeviceOfflineCacheEnabled.oa.mjs";
import { zimbraDevicePasscodeEnabled } from "./zimbraDevicePasscodeEnabled.oa.mjs";
import { zimbraDevicePasscodeLockoutDuration } from "./zimbraDevicePasscodeLockoutDuration.oa.mjs";
import { zimbraDomainAdminMaxMailQuota } from "./zimbraDomainAdminMaxMailQuota.oa.mjs";
import { zimbraDumpsterEnabled } from "./zimbraDumpsterEnabled.oa.mjs";
import { zimbraDumpsterPurgeEnabled } from "./zimbraDumpsterPurgeEnabled.oa.mjs";
import { zimbraDumpsterUserVisibleAge } from "./zimbraDumpsterUserVisibleAge.oa.mjs";
import { zimbraExternalAccountLifetimeAfterDisabled } from "./zimbraExternalAccountLifetimeAfterDisabled.oa.mjs";
import { zimbraExternalShareDomainWhitelistEnabled } from "./zimbraExternalShareDomainWhitelistEnabled.oa.mjs";
import { zimbraExternalShareLifetime } from "./zimbraExternalShareLifetime.oa.mjs";
import { zimbraExternalShareWhitelistDomain } from "./zimbraExternalShareWhitelistDomain.oa.mjs";
import { zimbraExternalSharingEnabled } from "./zimbraExternalSharingEnabled.oa.mjs";
import { zimbraFeatureAdminMailEnabled } from "./zimbraFeatureAdminMailEnabled.oa.mjs";
import { zimbraFeatureAdvancedSearchEnabled } from "./zimbraFeatureAdvancedSearchEnabled.oa.mjs";
import { zimbraFeatureAntispamEnabled } from "./zimbraFeatureAntispamEnabled.oa.mjs";
import { zimbraFeatureBriefcaseDocsEnabled } from "./zimbraFeatureBriefcaseDocsEnabled.oa.mjs";
import { zimbraFeatureBriefcaseSlidesEnabled } from "./zimbraFeatureBriefcaseSlidesEnabled.oa.mjs";
import { zimbraFeatureBriefcaseSpreadsheetEnabled } from "./zimbraFeatureBriefcaseSpreadsheetEnabled.oa.mjs";
import { zimbraFeatureBriefcasesEnabled } from "./zimbraFeatureBriefcasesEnabled.oa.mjs";
import { zimbraFeatureCalendarEnabled } from "./zimbraFeatureCalendarEnabled.oa.mjs";
import { zimbraFeatureCalendarReminderDeviceEmailEnabled } from "./zimbraFeatureCalendarReminderDeviceEmailEnabled.oa.mjs";
import { zimbraFeatureCalendarUpsellEnabled } from "./zimbraFeatureCalendarUpsellEnabled.oa.mjs";
import { zimbraFeatureCalendarUpsellURL } from "./zimbraFeatureCalendarUpsellURL.oa.mjs";
import { zimbraFeatureChangePasswordEnabled } from "./zimbraFeatureChangePasswordEnabled.oa.mjs";
import { zimbraFeatureComposeInNewWindowEnabled } from "./zimbraFeatureComposeInNewWindowEnabled.oa.mjs";
import { zimbraFeatureConfirmationPageEnabled } from "./zimbraFeatureConfirmationPageEnabled.oa.mjs";
import { zimbraFeatureContactsDetailedSearchEnabled } from "./zimbraFeatureContactsDetailedSearchEnabled.oa.mjs";
import { zimbraFeatureContactsEnabled } from "./zimbraFeatureContactsEnabled.oa.mjs";
import { zimbraFeatureContactsUpsellEnabled } from "./zimbraFeatureContactsUpsellEnabled.oa.mjs";
import { zimbraFeatureContactsUpsellURL } from "./zimbraFeatureContactsUpsellURL.oa.mjs";
import { zimbraFeatureConversationsEnabled } from "./zimbraFeatureConversationsEnabled.oa.mjs";
import { zimbraFeatureCrocodocEnabled } from "./zimbraFeatureCrocodocEnabled.oa.mjs";
import { zimbraFeatureDiscardInFiltersEnabled } from "./zimbraFeatureDiscardInFiltersEnabled.oa.mjs";
import { zimbraFeatureDistributionListExpandMembersEnabled } from "./zimbraFeatureDistributionListExpandMembersEnabled.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "./zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFeatureEwsEnabled } from "./zimbraFeatureEwsEnabled.oa.mjs";
import { zimbraFeatureExportFolderEnabled } from "./zimbraFeatureExportFolderEnabled.oa.mjs";
import { zimbraFeatureExternalFeedbackEnabled } from "./zimbraFeatureExternalFeedbackEnabled.oa.mjs";
import { zimbraFeatureFiltersEnabled } from "./zimbraFeatureFiltersEnabled.oa.mjs";
import { zimbraFeatureFlaggingEnabled } from "./zimbraFeatureFlaggingEnabled.oa.mjs";
import { zimbraFeatureFreeBusyViewEnabled } from "./zimbraFeatureFreeBusyViewEnabled.oa.mjs";
import { zimbraFeatureFromDisplayEnabled } from "./zimbraFeatureFromDisplayEnabled.oa.mjs";
import { zimbraFeatureGalAutoCompleteEnabled } from "./zimbraFeatureGalAutoCompleteEnabled.oa.mjs";
import { zimbraFeatureGalEnabled } from "./zimbraFeatureGalEnabled.oa.mjs";
import { zimbraFeatureGalSyncEnabled } from "./zimbraFeatureGalSyncEnabled.oa.mjs";
import { zimbraFeatureGroupCalendarEnabled } from "./zimbraFeatureGroupCalendarEnabled.oa.mjs";
import { zimbraFeatureHtmlComposeEnabled } from "./zimbraFeatureHtmlComposeEnabled.oa.mjs";
import { zimbraFeatureIMEnabled } from "./zimbraFeatureIMEnabled.oa.mjs";
import { zimbraFeatureIdentitiesEnabled } from "./zimbraFeatureIdentitiesEnabled.oa.mjs";
import { zimbraFeatureImapDataSourceEnabled } from "./zimbraFeatureImapDataSourceEnabled.oa.mjs";
import { zimbraFeatureImportExportFolderEnabled } from "./zimbraFeatureImportExportFolderEnabled.oa.mjs";
import { zimbraFeatureImportFolderEnabled } from "./zimbraFeatureImportFolderEnabled.oa.mjs";
import { zimbraFeatureInitialSearchPreferenceEnabled } from "./zimbraFeatureInitialSearchPreferenceEnabled.oa.mjs";
import { zimbraFeatureInstantNotify } from "./zimbraFeatureInstantNotify.oa.mjs";
import { zimbraFeatureMAPIConnectorEnabled } from "./zimbraFeatureMAPIConnectorEnabled.oa.mjs";
import { zimbraFeatureMailEnabled } from "./zimbraFeatureMailEnabled.oa.mjs";
import { zimbraFeatureMailForwardingEnabled } from "./zimbraFeatureMailForwardingEnabled.oa.mjs";
import { zimbraFeatureMailForwardingInFiltersEnabled } from "./zimbraFeatureMailForwardingInFiltersEnabled.oa.mjs";
import { zimbraFeatureMailPollingIntervalPreferenceEnabled } from "./zimbraFeatureMailPollingIntervalPreferenceEnabled.oa.mjs";
import { zimbraFeatureMailPriorityEnabled } from "./zimbraFeatureMailPriorityEnabled.oa.mjs";
import { zimbraFeatureMailSendLaterEnabled } from "./zimbraFeatureMailSendLaterEnabled.oa.mjs";
import { zimbraFeatureMailUpsellEnabled } from "./zimbraFeatureMailUpsellEnabled.oa.mjs";
import { zimbraFeatureMailUpsellURL } from "./zimbraFeatureMailUpsellURL.oa.mjs";
import { zimbraFeatureManageSMIMECertificateEnabled } from "./zimbraFeatureManageSMIMECertificateEnabled.oa.mjs";
import { zimbraFeatureManageZimlets } from "./zimbraFeatureManageZimlets.oa.mjs";
import { zimbraFeatureMobilePolicyEnabled } from "./zimbraFeatureMobilePolicyEnabled.oa.mjs";
import { zimbraFeatureMobileSyncEnabled } from "./zimbraFeatureMobileSyncEnabled.oa.mjs";
import { zimbraFeatureNewAddrBookEnabled } from "./zimbraFeatureNewAddrBookEnabled.oa.mjs";
import { zimbraFeatureNewMailNotificationEnabled } from "./zimbraFeatureNewMailNotificationEnabled.oa.mjs";
import { zimbraFeatureNotebookEnabled } from "./zimbraFeatureNotebookEnabled.oa.mjs";
import { zimbraFeatureOpenMailInNewWindowEnabled } from "./zimbraFeatureOpenMailInNewWindowEnabled.oa.mjs";
import { zimbraFeatureOptionsEnabled } from "./zimbraFeatureOptionsEnabled.oa.mjs";
import { zimbraFeatureOutOfOfficeReplyEnabled } from "./zimbraFeatureOutOfOfficeReplyEnabled.oa.mjs";
import { zimbraFeaturePeopleSearchEnabled } from "./zimbraFeaturePeopleSearchEnabled.oa.mjs";
import { zimbraFeaturePop3DataSourceEnabled } from "./zimbraFeaturePop3DataSourceEnabled.oa.mjs";
import { zimbraFeaturePortalEnabled } from "./zimbraFeaturePortalEnabled.oa.mjs";
import { zimbraFeaturePriorityInboxEnabled } from "./zimbraFeaturePriorityInboxEnabled.oa.mjs";
import { zimbraFeatureReadReceiptsEnabled } from "./zimbraFeatureReadReceiptsEnabled.oa.mjs";
import { zimbraFeatureSMIMEEnabled } from "./zimbraFeatureSMIMEEnabled.oa.mjs";
import { zimbraFeatureSavedSearchesEnabled } from "./zimbraFeatureSavedSearchesEnabled.oa.mjs";
import { zimbraFeatureSharingEnabled } from "./zimbraFeatureSharingEnabled.oa.mjs";
import { zimbraFeatureShortcutAliasesEnabled } from "./zimbraFeatureShortcutAliasesEnabled.oa.mjs";
import { zimbraFeatureSignaturesEnabled } from "./zimbraFeatureSignaturesEnabled.oa.mjs";
import { zimbraFeatureSkinChangeEnabled } from "./zimbraFeatureSkinChangeEnabled.oa.mjs";
import { zimbraFeatureSocialEnabled } from "./zimbraFeatureSocialEnabled.oa.mjs";
import { zimbraFeatureSocialExternalEnabled } from "./zimbraFeatureSocialExternalEnabled.oa.mjs";
import { zimbraFeatureSocialExternalURL } from "./zimbraFeatureSocialExternalURL.oa.mjs";
import { zimbraFeatureSocialFiltersEnabled } from "./zimbraFeatureSocialFiltersEnabled.oa.mjs";
import { zimbraFeatureSocialName } from "./zimbraFeatureSocialName.oa.mjs";
import { zimbraFeatureSocialcastEnabled } from "./zimbraFeatureSocialcastEnabled.oa.mjs";
import { zimbraFeatureTaggingEnabled } from "./zimbraFeatureTaggingEnabled.oa.mjs";
import { zimbraFeatureTasksEnabled } from "./zimbraFeatureTasksEnabled.oa.mjs";
import { zimbraFeatureTouchClientEnabled } from "./zimbraFeatureTouchClientEnabled.oa.mjs";
import { zimbraFeatureViewInHtmlEnabled } from "./zimbraFeatureViewInHtmlEnabled.oa.mjs";
import { zimbraFeatureVoiceChangePinEnabled } from "./zimbraFeatureVoiceChangePinEnabled.oa.mjs";
import { zimbraFeatureVoiceEnabled } from "./zimbraFeatureVoiceEnabled.oa.mjs";
import { zimbraFeatureVoiceUpsellEnabled } from "./zimbraFeatureVoiceUpsellEnabled.oa.mjs";
import { zimbraFeatureVoiceUpsellURL } from "./zimbraFeatureVoiceUpsellURL.oa.mjs";
import { zimbraFeatureWebClientOfflineAccessEnabled } from "./zimbraFeatureWebClientOfflineAccessEnabled.oa.mjs";
import { zimbraFeatureWebSearchEnabled } from "./zimbraFeatureWebSearchEnabled.oa.mjs";
import { zimbraFeatureZimbraAssistantEnabled } from "./zimbraFeatureZimbraAssistantEnabled.oa.mjs";
import { zimbraFileAndroidCrashReportingEnabled } from "./zimbraFileAndroidCrashReportingEnabled.oa.mjs";
import { zimbraFileDeletionNotificationBody } from "./zimbraFileDeletionNotificationBody.oa.mjs";
import { zimbraFileDeletionNotificationSubject } from "./zimbraFileDeletionNotificationSubject.oa.mjs";
import { zimbraFileExpirationWarningBody } from "./zimbraFileExpirationWarningBody.oa.mjs";
import { zimbraFileExpirationWarningSubject } from "./zimbraFileExpirationWarningSubject.oa.mjs";
import { zimbraFileExpirationWarningThreshold } from "./zimbraFileExpirationWarningThreshold.oa.mjs";
import { zimbraFileExternalShareLifetime } from "./zimbraFileExternalShareLifetime.oa.mjs";
import { zimbraFileIOSCrashReportingEnabled } from "./zimbraFileIOSCrashReportingEnabled.oa.mjs";
import { zimbraFileLifetime } from "./zimbraFileLifetime.oa.mjs";
import { zimbraFilePreviewMaxSize } from "./zimbraFilePreviewMaxSize.oa.mjs";
import { zimbraFilePublicShareLifetime } from "./zimbraFilePublicShareLifetime.oa.mjs";
import { zimbraFileShareLifetime } from "./zimbraFileShareLifetime.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "./zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraFileVersionLifetime } from "./zimbraFileVersionLifetime.oa.mjs";
import { zimbraFileVersioningEnabled } from "./zimbraFileVersioningEnabled.oa.mjs";
import { zimbraFilterBatchSize } from "./zimbraFilterBatchSize.oa.mjs";
import { zimbraFilterSleepInterval } from "./zimbraFilterSleepInterval.oa.mjs";
import { zimbraForceClearCookies } from "./zimbraForceClearCookies.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "./zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "./zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "./zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "./zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "./zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeURL } from "./zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "./zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraFreebusyLocalMailboxNotActive } from "./zimbraFreebusyLocalMailboxNotActive.oa.mjs";
import { zimbraGalSyncAccountBasedAutoCompleteEnabled } from "./zimbraGalSyncAccountBasedAutoCompleteEnabled.oa.mjs";
import { zimbraIMAvailableInteropGateways } from "./zimbraIMAvailableInteropGateways.oa.mjs";
import { zimbraIMService } from "./zimbraIMService.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraIdentityMaxNumEntries } from "./zimbraIdentityMaxNumEntries.oa.mjs";
import { zimbraImapEnabled } from "./zimbraImapEnabled.oa.mjs";
import { zimbraInterceptAddress } from "./zimbraInterceptAddress.oa.mjs";
import { zimbraInterceptBody } from "./zimbraInterceptBody.oa.mjs";
import { zimbraInterceptFrom } from "./zimbraInterceptFrom.oa.mjs";
import { zimbraInterceptSendHeadersOnly } from "./zimbraInterceptSendHeadersOnly.oa.mjs";
import { zimbraInterceptSubject } from "./zimbraInterceptSubject.oa.mjs";
import { zimbraInternalSendersDomain } from "./zimbraInternalSendersDomain.oa.mjs";
import { zimbraJunkMessagesIndexingEnabled } from "./zimbraJunkMessagesIndexingEnabled.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraLogOutFromAllServers } from "./zimbraLogOutFromAllServers.oa.mjs";
import { zimbraMailAllowReceiveButNotSendWhenOverQuota } from "./zimbraMailAllowReceiveButNotSendWhenOverQuota.oa.mjs";
import { zimbraMailBlacklistMaxNumEntries } from "./zimbraMailBlacklistMaxNumEntries.oa.mjs";
import { zimbraMailDumpsterLifetime } from "./zimbraMailDumpsterLifetime.oa.mjs";
import { zimbraMailForwardingAddressMaxLength } from "./zimbraMailForwardingAddressMaxLength.oa.mjs";
import { zimbraMailForwardingAddressMaxNumAddrs } from "./zimbraMailForwardingAddressMaxNumAddrs.oa.mjs";
import { zimbraMailHighlightObjectsMaxSize } from "./zimbraMailHighlightObjectsMaxSize.oa.mjs";
import { zimbraMailHostPool } from "./zimbraMailHostPool.oa.mjs";
import { zimbraMailIdleSessionTimeout } from "./zimbraMailIdleSessionTimeout.oa.mjs";
import { zimbraMailMessageLifetime } from "./zimbraMailMessageLifetime.oa.mjs";
import { zimbraMailMinPollingInterval } from "./zimbraMailMinPollingInterval.oa.mjs";
import { zimbraMailPurgeSystemPolicy } from "./zimbraMailPurgeSystemPolicy.oa.mjs";
import { zimbraMailPurgeUseChangeDateForSpam } from "./zimbraMailPurgeUseChangeDateForSpam.oa.mjs";
import { zimbraMailPurgeUseChangeDateForTrash } from "./zimbraMailPurgeUseChangeDateForTrash.oa.mjs";
import { zimbraMailQuota } from "./zimbraMailQuota.oa.mjs";
import { zimbraMailSignatureMaxLength } from "./zimbraMailSignatureMaxLength.oa.mjs";
import { zimbraMailSpamLifetime } from "./zimbraMailSpamLifetime.oa.mjs";
import { zimbraMailThreadingAlgorithm } from "./zimbraMailThreadingAlgorithm.oa.mjs";
import { zimbraMailTrashLifetime } from "./zimbraMailTrashLifetime.oa.mjs";
import { zimbraMailTrustedSenderListMaxNumEntries } from "./zimbraMailTrustedSenderListMaxNumEntries.oa.mjs";
import { zimbraMailWhitelistMaxNumEntries } from "./zimbraMailWhitelistMaxNumEntries.oa.mjs";
import { zimbraMaxContactsPerPage } from "./zimbraMaxContactsPerPage.oa.mjs";
import { zimbraMaxMailItemsPerPage } from "./zimbraMaxMailItemsPerPage.oa.mjs";
import { zimbraMaxVoiceItemsPerPage } from "./zimbraMaxVoiceItemsPerPage.oa.mjs";
import { zimbraMobileAttachSkippedItemEnabled } from "./zimbraMobileAttachSkippedItemEnabled.oa.mjs";
import { zimbraMobileForceProtocol25 } from "./zimbraMobileForceProtocol25.oa.mjs";
import { zimbraMobileForceSamsungProtocol25 } from "./zimbraMobileForceSamsungProtocol25.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "./zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "./zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMobileNotificationAdminAddress } from "./zimbraMobileNotificationAdminAddress.oa.mjs";
import { zimbraMobileNotificationEnabled } from "./zimbraMobileNotificationEnabled.oa.mjs";
import { zimbraMobileOutlookSyncEnabled } from "./zimbraMobileOutlookSyncEnabled.oa.mjs";
import { zimbraMobilePolicyAllowBluetooth } from "./zimbraMobilePolicyAllowBluetooth.oa.mjs";
import { zimbraMobilePolicyAllowBrowser } from "./zimbraMobilePolicyAllowBrowser.oa.mjs";
import { zimbraMobilePolicyAllowCamera } from "./zimbraMobilePolicyAllowCamera.oa.mjs";
import { zimbraMobilePolicyAllowConsumerEmail } from "./zimbraMobilePolicyAllowConsumerEmail.oa.mjs";
import { zimbraMobilePolicyAllowDesktopSync } from "./zimbraMobilePolicyAllowDesktopSync.oa.mjs";
import { zimbraMobilePolicyAllowHTMLEmail } from "./zimbraMobilePolicyAllowHTMLEmail.oa.mjs";
import { zimbraMobilePolicyAllowInternetSharing } from "./zimbraMobilePolicyAllowInternetSharing.oa.mjs";
import { zimbraMobilePolicyAllowIrDA } from "./zimbraMobilePolicyAllowIrDA.oa.mjs";
import { zimbraMobilePolicyAllowNonProvisionableDevices } from "./zimbraMobilePolicyAllowNonProvisionableDevices.oa.mjs";
import { zimbraMobilePolicyAllowPOPIMAPEmail } from "./zimbraMobilePolicyAllowPOPIMAPEmail.oa.mjs";
import { zimbraMobilePolicyAllowPartialProvisioning } from "./zimbraMobilePolicyAllowPartialProvisioning.oa.mjs";
import { zimbraMobilePolicyAllowRemoteDesktop } from "./zimbraMobilePolicyAllowRemoteDesktop.oa.mjs";
import { zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation } from "./zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation.oa.mjs";
import { zimbraMobilePolicyAllowSMIMESoftCerts } from "./zimbraMobilePolicyAllowSMIMESoftCerts.oa.mjs";
import { zimbraMobilePolicyAllowSimpleDevicePassword } from "./zimbraMobilePolicyAllowSimpleDevicePassword.oa.mjs";
import { zimbraMobilePolicyAllowStorageCard } from "./zimbraMobilePolicyAllowStorageCard.oa.mjs";
import { zimbraMobilePolicyAllowTextMessaging } from "./zimbraMobilePolicyAllowTextMessaging.oa.mjs";
import { zimbraMobilePolicyAllowUnsignedApplications } from "./zimbraMobilePolicyAllowUnsignedApplications.oa.mjs";
import { zimbraMobilePolicyAllowUnsignedInstallationPackages } from "./zimbraMobilePolicyAllowUnsignedInstallationPackages.oa.mjs";
import { zimbraMobilePolicyAllowWiFi } from "./zimbraMobilePolicyAllowWiFi.oa.mjs";
import { zimbraMobilePolicyAlphanumericDevicePasswordRequired } from "./zimbraMobilePolicyAlphanumericDevicePasswordRequired.oa.mjs";
import { zimbraMobilePolicyApprovedApplication } from "./zimbraMobilePolicyApprovedApplication.oa.mjs";
import { zimbraMobilePolicyApprovedApplicationList } from "./zimbraMobilePolicyApprovedApplicationList.oa.mjs";
import { zimbraMobilePolicyDeviceEncryptionEnabled } from "./zimbraMobilePolicyDeviceEncryptionEnabled.oa.mjs";
import { zimbraMobilePolicyDevicePasswordEnabled } from "./zimbraMobilePolicyDevicePasswordEnabled.oa.mjs";
import { zimbraMobilePolicyDevicePasswordExpiration } from "./zimbraMobilePolicyDevicePasswordExpiration.oa.mjs";
import { zimbraMobilePolicyDevicePasswordHistory } from "./zimbraMobilePolicyDevicePasswordHistory.oa.mjs";
import { zimbraMobilePolicyMaxCalendarAgeFilter } from "./zimbraMobilePolicyMaxCalendarAgeFilter.oa.mjs";
import { zimbraMobilePolicyMaxDevicePasswordFailedAttempts } from "./zimbraMobilePolicyMaxDevicePasswordFailedAttempts.oa.mjs";
import { zimbraMobilePolicyMaxEmailAgeFilter } from "./zimbraMobilePolicyMaxEmailAgeFilter.oa.mjs";
import { zimbraMobilePolicyMaxEmailBodyTruncationSize } from "./zimbraMobilePolicyMaxEmailBodyTruncationSize.oa.mjs";
import { zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize } from "./zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize.oa.mjs";
import { zimbraMobilePolicyMaxInactivityTimeDeviceLock } from "./zimbraMobilePolicyMaxInactivityTimeDeviceLock.oa.mjs";
import { zimbraMobilePolicyMinDevicePasswordComplexCharacters } from "./zimbraMobilePolicyMinDevicePasswordComplexCharacters.oa.mjs";
import { zimbraMobilePolicyMinDevicePasswordLength } from "./zimbraMobilePolicyMinDevicePasswordLength.oa.mjs";
import { zimbraMobilePolicyPasswordRecoveryEnabled } from "./zimbraMobilePolicyPasswordRecoveryEnabled.oa.mjs";
import { zimbraMobilePolicyRefreshInterval } from "./zimbraMobilePolicyRefreshInterval.oa.mjs";
import { zimbraMobilePolicyRequireDeviceEncryption } from "./zimbraMobilePolicyRequireDeviceEncryption.oa.mjs";
import { zimbraMobilePolicyRequireEncryptedSMIMEMessages } from "./zimbraMobilePolicyRequireEncryptedSMIMEMessages.oa.mjs";
import { zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm } from "./zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm.oa.mjs";
import { zimbraMobilePolicyRequireManualSyncWhenRoaming } from "./zimbraMobilePolicyRequireManualSyncWhenRoaming.oa.mjs";
import { zimbraMobilePolicyRequireSignedSMIMEAlgorithm } from "./zimbraMobilePolicyRequireSignedSMIMEAlgorithm.oa.mjs";
import { zimbraMobilePolicyRequireSignedSMIMEMessages } from "./zimbraMobilePolicyRequireSignedSMIMEMessages.oa.mjs";
import { zimbraMobilePolicyRequireStorageCardEncryption } from "./zimbraMobilePolicyRequireStorageCardEncryption.oa.mjs";
import { zimbraMobilePolicySuppressDeviceEncryption } from "./zimbraMobilePolicySuppressDeviceEncryption.oa.mjs";
import { zimbraMobilePolicyUnapprovedInROMApplication } from "./zimbraMobilePolicyUnapprovedInROMApplication.oa.mjs";
import { zimbraMobileShareContactEnabled } from "./zimbraMobileShareContactEnabled.oa.mjs";
import { zimbraMobileSmartForwardRFC822Enabled } from "./zimbraMobileSmartForwardRFC822Enabled.oa.mjs";
import { zimbraMobileSyncKeyFormatConvertedFolders } from "./zimbraMobileSyncKeyFormatConvertedFolders.oa.mjs";
import { zimbraMobileSyncRedoMaxAttempts } from "./zimbraMobileSyncRedoMaxAttempts.oa.mjs";
import { zimbraMobileTombstoneEnabled } from "./zimbraMobileTombstoneEnabled.oa.mjs";
import { zimbraNewMailNotificationBody } from "./zimbraNewMailNotificationBody.oa.mjs";
import { zimbraNewMailNotificationFrom } from "./zimbraNewMailNotificationFrom.oa.mjs";
import { zimbraNewMailNotificationSubject } from "./zimbraNewMailNotificationSubject.oa.mjs";
import { zimbraNotebookMaxRevisions } from "./zimbraNotebookMaxRevisions.oa.mjs";
import { zimbraNotebookSanitizeHtml } from "./zimbraNotebookSanitizeHtml.oa.mjs";
import { zimbraNotes } from "./zimbraNotes.oa.mjs";
import { zimbraPasswordAllowedChars } from "./zimbraPasswordAllowedChars.oa.mjs";
import { zimbraPasswordAllowedPunctuationChars } from "./zimbraPasswordAllowedPunctuationChars.oa.mjs";
import { zimbraPasswordEnforceHistory } from "./zimbraPasswordEnforceHistory.oa.mjs";
import { zimbraPasswordLocked } from "./zimbraPasswordLocked.oa.mjs";
import { zimbraPasswordLockoutDuration } from "./zimbraPasswordLockoutDuration.oa.mjs";
import { zimbraPasswordLockoutEnabled } from "./zimbraPasswordLockoutEnabled.oa.mjs";
import { zimbraPasswordLockoutFailureLifetime } from "./zimbraPasswordLockoutFailureLifetime.oa.mjs";
import { zimbraPasswordLockoutMaxFailures } from "./zimbraPasswordLockoutMaxFailures.oa.mjs";
import { zimbraPasswordMaxAge } from "./zimbraPasswordMaxAge.oa.mjs";
import { zimbraPasswordMaxLength } from "./zimbraPasswordMaxLength.oa.mjs";
import { zimbraPasswordMinAge } from "./zimbraPasswordMinAge.oa.mjs";
import { zimbraPasswordMinAlphaChars } from "./zimbraPasswordMinAlphaChars.oa.mjs";
import { zimbraPasswordMinDigitsOrPuncs } from "./zimbraPasswordMinDigitsOrPuncs.oa.mjs";
import { zimbraPasswordMinLength } from "./zimbraPasswordMinLength.oa.mjs";
import { zimbraPasswordMinLowerCaseChars } from "./zimbraPasswordMinLowerCaseChars.oa.mjs";
import { zimbraPasswordMinNumericChars } from "./zimbraPasswordMinNumericChars.oa.mjs";
import { zimbraPasswordMinPunctuationChars } from "./zimbraPasswordMinPunctuationChars.oa.mjs";
import { zimbraPasswordMinUpperCaseChars } from "./zimbraPasswordMinUpperCaseChars.oa.mjs";
import { zimbraPop3Enabled } from "./zimbraPop3Enabled.oa.mjs";
import { zimbraPortalName } from "./zimbraPortalName.oa.mjs";
import { zimbraPrefAccountTreeOpen } from "./zimbraPrefAccountTreeOpen.oa.mjs";
import { zimbraPrefAdminConsoleWarnOnExit } from "./zimbraPrefAdminConsoleWarnOnExit.oa.mjs";
import { zimbraPrefAdvancedClientEnforceMinDisplay } from "./zimbraPrefAdvancedClientEnforceMinDisplay.oa.mjs";
import { zimbraPrefAppleIcalDelegationEnabled } from "./zimbraPrefAppleIcalDelegationEnabled.oa.mjs";
import { zimbraPrefAutoAddAddressEnabled } from "./zimbraPrefAutoAddAddressEnabled.oa.mjs";
import { zimbraPrefAutoCompleteQuickCompletionOnComma } from "./zimbraPrefAutoCompleteQuickCompletionOnComma.oa.mjs";
import { zimbraPrefAutoSaveDraftInterval } from "./zimbraPrefAutoSaveDraftInterval.oa.mjs";
import { zimbraPrefAutocompleteAddressBubblesEnabled } from "./zimbraPrefAutocompleteAddressBubblesEnabled.oa.mjs";
import { zimbraPrefBriefcaseReadingPaneLocation } from "./zimbraPrefBriefcaseReadingPaneLocation.oa.mjs";
import { zimbraPrefCalendarAllowCancelEmailToSelf } from "./zimbraPrefCalendarAllowCancelEmailToSelf.oa.mjs";
import { zimbraPrefCalendarAllowForwardedInvite } from "./zimbraPrefCalendarAllowForwardedInvite.oa.mjs";
import { zimbraPrefCalendarAllowPublishMethodInvite } from "./zimbraPrefCalendarAllowPublishMethodInvite.oa.mjs";
import { zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "./zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarAlwaysShowMiniCal } from "./zimbraPrefCalendarAlwaysShowMiniCal.oa.mjs";
import { zimbraPrefCalendarApptAllowAtendeeEdit } from "./zimbraPrefCalendarApptAllowAtendeeEdit.oa.mjs";
import { zimbraPrefCalendarApptReminderWarningTime } from "./zimbraPrefCalendarApptReminderWarningTime.oa.mjs";
import { zimbraPrefCalendarApptVisibility } from "./zimbraPrefCalendarApptVisibility.oa.mjs";
import { zimbraPrefCalendarAutoAddInvites } from "./zimbraPrefCalendarAutoAddInvites.oa.mjs";
import { zimbraPrefCalendarDayHourEnd } from "./zimbraPrefCalendarDayHourEnd.oa.mjs";
import { zimbraPrefCalendarDayHourStart } from "./zimbraPrefCalendarDayHourStart.oa.mjs";
import { zimbraPrefCalendarDefaultApptDuration } from "./zimbraPrefCalendarDefaultApptDuration.oa.mjs";
import { zimbraPrefCalendarFirstDayOfWeek } from "./zimbraPrefCalendarFirstDayOfWeek.oa.mjs";
import { zimbraPrefCalendarInitialView } from "./zimbraPrefCalendarInitialView.oa.mjs";
import { zimbraPrefCalendarNotifyDelegatedChanges } from "./zimbraPrefCalendarNotifyDelegatedChanges.oa.mjs";
import { zimbraPrefCalendarReminderDuration1 } from "./zimbraPrefCalendarReminderDuration1.oa.mjs";
import { zimbraPrefCalendarReminderDuration2 } from "./zimbraPrefCalendarReminderDuration2.oa.mjs";
import { zimbraPrefCalendarReminderFlashTitle } from "./zimbraPrefCalendarReminderFlashTitle.oa.mjs";
import { zimbraPrefCalendarReminderMobile } from "./zimbraPrefCalendarReminderMobile.oa.mjs";
import { zimbraPrefCalendarReminderSendEmail } from "./zimbraPrefCalendarReminderSendEmail.oa.mjs";
import { zimbraPrefCalendarReminderSoundsEnabled } from "./zimbraPrefCalendarReminderSoundsEnabled.oa.mjs";
import { zimbraPrefCalendarReminderYMessenger } from "./zimbraPrefCalendarReminderYMessenger.oa.mjs";
import { zimbraPrefCalendarSendInviteDeniedAutoReply } from "./zimbraPrefCalendarSendInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarShowDeclinedMeetings } from "./zimbraPrefCalendarShowDeclinedMeetings.oa.mjs";
import { zimbraPrefCalendarShowPastDueReminders } from "./zimbraPrefCalendarShowPastDueReminders.oa.mjs";
import { zimbraPrefCalendarToasterEnabled } from "./zimbraPrefCalendarToasterEnabled.oa.mjs";
import { zimbraPrefCalendarUseQuickAdd } from "./zimbraPrefCalendarUseQuickAdd.oa.mjs";
import { zimbraPrefCalendarViewTimeInterval } from "./zimbraPrefCalendarViewTimeInterval.oa.mjs";
import { zimbraPrefCalendarWorkingHours } from "./zimbraPrefCalendarWorkingHours.oa.mjs";
import { zimbraPrefClientType } from "./zimbraPrefClientType.oa.mjs";
import { zimbraPrefColorMessagesEnabled } from "./zimbraPrefColorMessagesEnabled.oa.mjs";
import { zimbraPrefComposeDirection } from "./zimbraPrefComposeDirection.oa.mjs";
import { zimbraPrefComposeFormat } from "./zimbraPrefComposeFormat.oa.mjs";
import { zimbraPrefComposeInNewWindow } from "./zimbraPrefComposeInNewWindow.oa.mjs";
import { zimbraPrefContactsDisableAutocompleteOnContactGroupMembers } from "./zimbraPrefContactsDisableAutocompleteOnContactGroupMembers.oa.mjs";
import { zimbraPrefContactsExpandAppleContactGroups } from "./zimbraPrefContactsExpandAppleContactGroups.oa.mjs";
import { zimbraPrefContactsInitialView } from "./zimbraPrefContactsInitialView.oa.mjs";
import { zimbraPrefContactsPerPage } from "./zimbraPrefContactsPerPage.oa.mjs";
import { zimbraPrefConvReadingPaneLocation } from "./zimbraPrefConvReadingPaneLocation.oa.mjs";
import { zimbraPrefConvShowCalendar } from "./zimbraPrefConvShowCalendar.oa.mjs";
import { zimbraPrefConversationOrder } from "./zimbraPrefConversationOrder.oa.mjs";
import { zimbraPrefDedupeMessagesSentToSelf } from "./zimbraPrefDedupeMessagesSentToSelf.oa.mjs";
import { zimbraPrefDefaultPrintFontSize } from "./zimbraPrefDefaultPrintFontSize.oa.mjs";
import { zimbraPrefDelegatedSendSaveTarget } from "./zimbraPrefDelegatedSendSaveTarget.oa.mjs";
import { zimbraPrefDeleteInviteOnReply } from "./zimbraPrefDeleteInviteOnReply.oa.mjs";
import { zimbraPrefDisabledZimlets } from "./zimbraPrefDisabledZimlets.oa.mjs";
import { zimbraPrefDisplayExternalImages } from "./zimbraPrefDisplayExternalImages.oa.mjs";
import { zimbraPrefExternalSendersType } from "./zimbraPrefExternalSendersType.oa.mjs";
import { zimbraPrefFileSharingApplication } from "./zimbraPrefFileSharingApplication.oa.mjs";
import { zimbraPrefFolderColorEnabled } from "./zimbraPrefFolderColorEnabled.oa.mjs";
import { zimbraPrefFolderTreeOpen } from "./zimbraPrefFolderTreeOpen.oa.mjs";
import { zimbraPrefFont } from "./zimbraPrefFont.oa.mjs";
import { zimbraPrefFontSize } from "./zimbraPrefFontSize.oa.mjs";
import { zimbraPrefForwardIncludeOriginalText } from "./zimbraPrefForwardIncludeOriginalText.oa.mjs";
import { zimbraPrefForwardReplyFormat } from "./zimbraPrefForwardReplyFormat.oa.mjs";
import { zimbraPrefForwardReplyInOriginalFormat } from "./zimbraPrefForwardReplyInOriginalFormat.oa.mjs";
import { zimbraPrefForwardReplyPrefixChar } from "./zimbraPrefForwardReplyPrefixChar.oa.mjs";
import { zimbraPrefGalAutoCompleteEnabled } from "./zimbraPrefGalAutoCompleteEnabled.oa.mjs";
import { zimbraPrefGalSearchEnabled } from "./zimbraPrefGalSearchEnabled.oa.mjs";
import { zimbraPrefGetMailAction } from "./zimbraPrefGetMailAction.oa.mjs";
import { zimbraPrefGroupMailBy } from "./zimbraPrefGroupMailBy.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontColor } from "./zimbraPrefHtmlEditorDefaultFontColor.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontFamily } from "./zimbraPrefHtmlEditorDefaultFontFamily.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontSize } from "./zimbraPrefHtmlEditorDefaultFontSize.oa.mjs";
import { zimbraPrefIMAutoLogin } from "./zimbraPrefIMAutoLogin.oa.mjs";
import { zimbraPrefIMBuddyListSort } from "./zimbraPrefIMBuddyListSort.oa.mjs";
import { zimbraPrefIMFlashIcon } from "./zimbraPrefIMFlashIcon.oa.mjs";
import { zimbraPrefIMFlashTitle } from "./zimbraPrefIMFlashTitle.oa.mjs";
import { zimbraPrefIMHideBlockedBuddies } from "./zimbraPrefIMHideBlockedBuddies.oa.mjs";
import { zimbraPrefIMHideOfflineBuddies } from "./zimbraPrefIMHideOfflineBuddies.oa.mjs";
import { zimbraPrefIMIdleStatus } from "./zimbraPrefIMIdleStatus.oa.mjs";
import { zimbraPrefIMIdleTimeout } from "./zimbraPrefIMIdleTimeout.oa.mjs";
import { zimbraPrefIMInstantNotify } from "./zimbraPrefIMInstantNotify.oa.mjs";
import { zimbraPrefIMLogChats } from "./zimbraPrefIMLogChats.oa.mjs";
import { zimbraPrefIMLogChatsEnabled } from "./zimbraPrefIMLogChatsEnabled.oa.mjs";
import { zimbraPrefIMNotifyPresence } from "./zimbraPrefIMNotifyPresence.oa.mjs";
import { zimbraPrefIMNotifyStatus } from "./zimbraPrefIMNotifyStatus.oa.mjs";
import { zimbraPrefIMReportIdle } from "./zimbraPrefIMReportIdle.oa.mjs";
import { zimbraPrefIMSoundsEnabled } from "./zimbraPrefIMSoundsEnabled.oa.mjs";
import { zimbraPrefIMToasterEnabled } from "./zimbraPrefIMToasterEnabled.oa.mjs";
import { zimbraPrefImapSearchFoldersEnabled } from "./zimbraPrefImapSearchFoldersEnabled.oa.mjs";
import { zimbraPrefInboxReadLifetime } from "./zimbraPrefInboxReadLifetime.oa.mjs";
import { zimbraPrefInboxUnreadLifetime } from "./zimbraPrefInboxUnreadLifetime.oa.mjs";
import { zimbraPrefIncludeSharedItemsInSearch } from "./zimbraPrefIncludeSharedItemsInSearch.oa.mjs";
import { zimbraPrefIncludeSpamInSearch } from "./zimbraPrefIncludeSpamInSearch.oa.mjs";
import { zimbraPrefIncludeTrashInSearch } from "./zimbraPrefIncludeTrashInSearch.oa.mjs";
import { zimbraPrefItemsPerVirtualPage } from "./zimbraPrefItemsPerVirtualPage.oa.mjs";
import { zimbraPrefJunkLifetime } from "./zimbraPrefJunkLifetime.oa.mjs";
import { zimbraPrefListViewColumns } from "./zimbraPrefListViewColumns.oa.mjs";
import { zimbraPrefLocale } from "./zimbraPrefLocale.oa.mjs";
import { zimbraPrefMailDefaultCharset } from "./zimbraPrefMailDefaultCharset.oa.mjs";
import { zimbraPrefMailFlashIcon } from "./zimbraPrefMailFlashIcon.oa.mjs";
import { zimbraPrefMailFlashTitle } from "./zimbraPrefMailFlashTitle.oa.mjs";
import { zimbraPrefMailFoldersCheckedForNewMsgIndicator } from "./zimbraPrefMailFoldersCheckedForNewMsgIndicator.oa.mjs";
import { zimbraPrefMailInitialSearch } from "./zimbraPrefMailInitialSearch.oa.mjs";
import { zimbraPrefMailItemsPerPage } from "./zimbraPrefMailItemsPerPage.oa.mjs";
import { zimbraPrefMailPollingInterval } from "./zimbraPrefMailPollingInterval.oa.mjs";
import { zimbraPrefMailRequestReadReceipts } from "./zimbraPrefMailRequestReadReceipts.oa.mjs";
import { zimbraPrefMailSelectAfterDelete } from "./zimbraPrefMailSelectAfterDelete.oa.mjs";
import { zimbraPrefMailSendReadReceipts } from "./zimbraPrefMailSendReadReceipts.oa.mjs";
import { zimbraPrefMailSignatureStyle } from "./zimbraPrefMailSignatureStyle.oa.mjs";
import { zimbraPrefMailSoundsEnabled } from "./zimbraPrefMailSoundsEnabled.oa.mjs";
import { zimbraPrefMailToasterEnabled } from "./zimbraPrefMailToasterEnabled.oa.mjs";
import { zimbraPrefMailTrustedSenderList } from "./zimbraPrefMailTrustedSenderList.oa.mjs";
import { zimbraPrefMandatorySpellCheckEnabled } from "./zimbraPrefMandatorySpellCheckEnabled.oa.mjs";
import { zimbraPrefMarkMsgRead } from "./zimbraPrefMarkMsgRead.oa.mjs";
import { zimbraPrefMessageIdDedupingEnabled } from "./zimbraPrefMessageIdDedupingEnabled.oa.mjs";
import { zimbraPrefMessageViewHtmlPreferred } from "./zimbraPrefMessageViewHtmlPreferred.oa.mjs";
import { zimbraPrefOpenMailInNewWindow } from "./zimbraPrefOpenMailInNewWindow.oa.mjs";
import { zimbraPrefOutOfOfficeCacheDuration } from "./zimbraPrefOutOfOfficeCacheDuration.oa.mjs";
import { zimbraPrefOutOfOfficeStatusAlertOnLogin } from "./zimbraPrefOutOfOfficeStatusAlertOnLogin.oa.mjs";
import { zimbraPrefPop3DeleteOption } from "./zimbraPrefPop3DeleteOption.oa.mjs";
import { zimbraPrefPop3DownloadSince } from "./zimbraPrefPop3DownloadSince.oa.mjs";
import { zimbraPrefPop3IncludeSpam } from "./zimbraPrefPop3IncludeSpam.oa.mjs";
import { zimbraPrefReadingPaneEnabled } from "./zimbraPrefReadingPaneEnabled.oa.mjs";
import { zimbraPrefReadingPaneLocation } from "./zimbraPrefReadingPaneLocation.oa.mjs";
import { zimbraPrefReplyIncludeOriginalText } from "./zimbraPrefReplyIncludeOriginalText.oa.mjs";
import { zimbraPrefSaveToSent } from "./zimbraPrefSaveToSent.oa.mjs";
import { zimbraPrefSearchTreeOpen } from "./zimbraPrefSearchTreeOpen.oa.mjs";
import { zimbraPrefSentLifetime } from "./zimbraPrefSentLifetime.oa.mjs";
import { zimbraPrefSentMailFolder } from "./zimbraPrefSentMailFolder.oa.mjs";
import { zimbraPrefSharedAddrBookAutoCompleteEnabled } from "./zimbraPrefSharedAddrBookAutoCompleteEnabled.oa.mjs";
import { zimbraPrefShortEmailAddress } from "./zimbraPrefShortEmailAddress.oa.mjs";
import { zimbraPrefShortcuts } from "./zimbraPrefShortcuts.oa.mjs";
import { zimbraPrefShowCalendarWeek } from "./zimbraPrefShowCalendarWeek.oa.mjs";
import { zimbraPrefShowComposeDirection } from "./zimbraPrefShowComposeDirection.oa.mjs";
import { zimbraPrefShowFragments } from "./zimbraPrefShowFragments.oa.mjs";
import { zimbraPrefShowSearchString } from "./zimbraPrefShowSearchString.oa.mjs";
import { zimbraPrefShowSelectionCheckbox } from "./zimbraPrefShowSelectionCheckbox.oa.mjs";
import { zimbraPrefSkin } from "./zimbraPrefSkin.oa.mjs";
import { zimbraPrefSortOrder } from "./zimbraPrefSortOrder.oa.mjs";
import { zimbraPrefSpellDictionary } from "./zimbraPrefSpellDictionary.oa.mjs";
import { zimbraPrefSpellIgnoreAllCaps } from "./zimbraPrefSpellIgnoreAllCaps.oa.mjs";
import { zimbraPrefSpellIgnorePattern } from "./zimbraPrefSpellIgnorePattern.oa.mjs";
import { zimbraPrefSpellIgnoreWord } from "./zimbraPrefSpellIgnoreWord.oa.mjs";
import { zimbraPrefStandardClientAccessibilityMode } from "./zimbraPrefStandardClientAccessibilityMode.oa.mjs";
import { zimbraPrefTagTreeOpen } from "./zimbraPrefTagTreeOpen.oa.mjs";
import { zimbraPrefTasksFilterBy } from "./zimbraPrefTasksFilterBy.oa.mjs";
import { zimbraPrefTasksReadingPaneLocation } from "./zimbraPrefTasksReadingPaneLocation.oa.mjs";
import { zimbraPrefTimeZoneId } from "./zimbraPrefTimeZoneId.oa.mjs";
import { zimbraPrefTrashLifetime } from "./zimbraPrefTrashLifetime.oa.mjs";
import { zimbraPrefUseKeyboardShortcuts } from "./zimbraPrefUseKeyboardShortcuts.oa.mjs";
import { zimbraPrefUseRfc2231 } from "./zimbraPrefUseRfc2231.oa.mjs";
import { zimbraPrefUseSendMsgShortcut } from "./zimbraPrefUseSendMsgShortcut.oa.mjs";
import { zimbraPrefUseTimeZoneListInCalendar } from "./zimbraPrefUseTimeZoneListInCalendar.oa.mjs";
import { zimbraPrefVoiceItemsPerPage } from "./zimbraPrefVoiceItemsPerPage.oa.mjs";
import { zimbraPrefWarnOnExit } from "./zimbraPrefWarnOnExit.oa.mjs";
import { zimbraPrefZimletTreeOpen } from "./zimbraPrefZimletTreeOpen.oa.mjs";
import { zimbraPrefZimlets } from "./zimbraPrefZimlets.oa.mjs";
import { zimbraProxyAllowedDomains } from "./zimbraProxyAllowedDomains.oa.mjs";
import { zimbraProxyCacheableContentTypes } from "./zimbraProxyCacheableContentTypes.oa.mjs";
import { zimbraPublicShareLifetime } from "./zimbraPublicShareLifetime.oa.mjs";
import { zimbraPublicSharingEnabled } from "./zimbraPublicSharingEnabled.oa.mjs";
import { zimbraQuotaWarnInterval } from "./zimbraQuotaWarnInterval.oa.mjs";
import { zimbraQuotaWarnMessage } from "./zimbraQuotaWarnMessage.oa.mjs";
import { zimbraQuotaWarnPercent } from "./zimbraQuotaWarnPercent.oa.mjs";
import { zimbraShareLifetime } from "./zimbraShareLifetime.oa.mjs";
import { zimbraSignatureMaxNumEntries } from "./zimbraSignatureMaxNumEntries.oa.mjs";
import { zimbraSignatureMinNumEntries } from "./zimbraSignatureMinNumEntries.oa.mjs";
import { zimbraSmtpEnableTrace } from "./zimbraSmtpEnableTrace.oa.mjs";
import { zimbraSmtpRestrictEnvelopeFrom } from "./zimbraSmtpRestrictEnvelopeFrom.oa.mjs";
import { zimbraSocialcastURL } from "./zimbraSocialcastURL.oa.mjs";
import { zimbraSpamApplyUserFilters } from "./zimbraSpamApplyUserFilters.oa.mjs";
import { zimbraStandardClientCustomPrefTab } from "./zimbraStandardClientCustomPrefTab.oa.mjs";
import { zimbraStandardClientCustomPrefTabsEnabled } from "./zimbraStandardClientCustomPrefTabsEnabled.oa.mjs";
import { zimbraSyncWindowSize } from "./zimbraSyncWindowSize.oa.mjs";
import { zimbraTextAnalyzer } from "./zimbraTextAnalyzer.oa.mjs";
import { zimbraTouchJSErrorTrackingEnabled } from "./zimbraTouchJSErrorTrackingEnabled.oa.mjs";
import { zimbraTouchJSErrorTrackingKey } from "./zimbraTouchJSErrorTrackingKey.oa.mjs";
import { zimbraUCServiceId } from "./zimbraUCServiceId.oa.mjs";
import { zimbraWebClientOfflineSyncMaxDays } from "./zimbraWebClientOfflineSyncMaxDays.oa.mjs";
import { zimbraWebClientShowOfflineLink } from "./zimbraWebClientShowOfflineLink.oa.mjs";
import { zimbraZimletAvailableZimlets } from "./zimbraZimletAvailableZimlets.oa.mjs";
import { zimbraZimletLoadSynchronously } from "./zimbraZimletLoadSynchronously.oa.mjs";

/**
 * @summary zimbraCOS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraCOS OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminAuthTokenLifetime
 *                               | zimbraAdminSavedSearches
 *                               | zimbraAllowAnyFromAddress
 *                               | zimbraArchiveAccountDateTemplate
 *                               | zimbraArchiveAccountNameTemplate
 *                               | zimbraArchiveEnabled
 *                               | zimbraAttachmentsBlocked
 *                               | zimbraAttachmentsIndexingEnabled
 *                               | zimbraAttachmentsViewInHtmlOnly
 *                               | zimbraAuthTokenLifetime
 *                               | zimbraAvailableLocale
 *                               | zimbraAvailableSkin
 *                               | zimbraBatchedIndexingSize
 *                               | zimbraCalendarCalDavSharedFolderCacheDuration
 *                               | zimbraCalendarCalDavSyncEnd
 *                               | zimbraCalendarCalDavSyncStart
 *                               | zimbraCalendarKeepExceptionsOnSeriesTimeChange
 *                               | zimbraCalendarLocationDisabledFields
 *                               | zimbraCalendarMaxRevisions
 *                               | zimbraCalendarResourceDoubleBookingAllowed
 *                               | zimbraCalendarShowResourceTabs
 *                               | zimbraCommunityAPIClientID
 *                               | zimbraCommunityAPIClientSecret
 *                               | zimbraCommunityBaseURL
 *                               | zimbraCommunityHomeURL
 *                               | zimbraCommunityUsernameMapping
 *                               | zimbraConstraint
 *                               | zimbraContactAutoCompleteEmailFields
 *                               | zimbraContactAutoCompleteMaxResults
 *                               | zimbraContactEmailFields
 *                               | zimbraContactMaxNumEntries
 *                               | zimbraContactRankingTableSize
 *                               | zimbraConverterHints
 *                               | zimbraCreateTimestamp
 *                               | zimbraDataSourceCaldavPollingInterval
 *                               | zimbraDataSourceCalendarPollingInterval
 *                               | zimbraDataSourceGalPollingInterval
 *                               | zimbraDataSourceImapPollingInterval
 *                               | zimbraDataSourceImportOnLogin
 *                               | zimbraDataSourceLivePollingInterval
 *                               | zimbraDataSourceMaxNumEntries
 *                               | zimbraDataSourceMinPollingInterval
 *                               | zimbraDataSourcePollingInterval
 *                               | zimbraDataSourcePop3PollingInterval
 *                               | zimbraDataSourceRssPollingInterval
 *                               | zimbraDataSourceYabPollingInterval
 *                               | zimbraDefaultFolderFlags
 *                               | zimbraDeviceAllowedPasscodeLockoutDuration
 *                               | zimbraDeviceCalendarSoftDeleteExcludePattern
 *                               | zimbraDeviceFileOpenWithEnabled
 *                               | zimbraDeviceLockWhenInactive
 *                               | zimbraDeviceOfflineCacheEnabled
 *                               | zimbraDevicePasscodeEnabled
 *                               | zimbraDevicePasscodeLockoutDuration
 *                               | zimbraDomainAdminMaxMailQuota
 *                               | zimbraDumpsterEnabled
 *                               | zimbraDumpsterPurgeEnabled
 *                               | zimbraDumpsterUserVisibleAge
 *                               | zimbraExternalAccountLifetimeAfterDisabled
 *                               | zimbraExternalShareDomainWhitelistEnabled
 *                               | zimbraExternalShareLifetime
 *                               | zimbraExternalShareWhitelistDomain
 *                               | zimbraExternalSharingEnabled
 *                               | zimbraFeatureAdminMailEnabled
 *                               | zimbraFeatureAdvancedSearchEnabled
 *                               | zimbraFeatureAntispamEnabled
 *                               | zimbraFeatureBriefcaseDocsEnabled
 *                               | zimbraFeatureBriefcaseSlidesEnabled
 *                               | zimbraFeatureBriefcaseSpreadsheetEnabled
 *                               | zimbraFeatureBriefcasesEnabled
 *                               | zimbraFeatureCalendarEnabled
 *                               | zimbraFeatureCalendarReminderDeviceEmailEnabled
 *                               | zimbraFeatureCalendarUpsellEnabled
 *                               | zimbraFeatureCalendarUpsellURL
 *                               | zimbraFeatureChangePasswordEnabled
 *                               | zimbraFeatureComposeInNewWindowEnabled
 *                               | zimbraFeatureConfirmationPageEnabled
 *                               | zimbraFeatureContactsDetailedSearchEnabled
 *                               | zimbraFeatureContactsEnabled
 *                               | zimbraFeatureContactsUpsellEnabled
 *                               | zimbraFeatureContactsUpsellURL
 *                               | zimbraFeatureConversationsEnabled
 *                               | zimbraFeatureCrocodocEnabled
 *                               | zimbraFeatureDiscardInFiltersEnabled
 *                               | zimbraFeatureDistributionListExpandMembersEnabled
 *                               | zimbraFeatureDistributionListFolderEnabled
 *                               | zimbraFeatureEwsEnabled
 *                               | zimbraFeatureExportFolderEnabled
 *                               | zimbraFeatureExternalFeedbackEnabled
 *                               | zimbraFeatureFiltersEnabled
 *                               | zimbraFeatureFlaggingEnabled
 *                               | zimbraFeatureFreeBusyViewEnabled
 *                               | zimbraFeatureFromDisplayEnabled
 *                               | zimbraFeatureGalAutoCompleteEnabled
 *                               | zimbraFeatureGalEnabled
 *                               | zimbraFeatureGalSyncEnabled
 *                               | zimbraFeatureGroupCalendarEnabled
 *                               | zimbraFeatureHtmlComposeEnabled
 *                               | zimbraFeatureIMEnabled
 *                               | zimbraFeatureIdentitiesEnabled
 *                               | zimbraFeatureImapDataSourceEnabled
 *                               | zimbraFeatureImportExportFolderEnabled
 *                               | zimbraFeatureImportFolderEnabled
 *                               | zimbraFeatureInitialSearchPreferenceEnabled
 *                               | zimbraFeatureInstantNotify
 *                               | zimbraFeatureMAPIConnectorEnabled
 *                               | zimbraFeatureMailEnabled
 *                               | zimbraFeatureMailForwardingEnabled
 *                               | zimbraFeatureMailForwardingInFiltersEnabled
 *                               | zimbraFeatureMailPollingIntervalPreferenceEnabled
 *                               | zimbraFeatureMailPriorityEnabled
 *                               | zimbraFeatureMailSendLaterEnabled
 *                               | zimbraFeatureMailUpsellEnabled
 *                               | zimbraFeatureMailUpsellURL
 *                               | zimbraFeatureManageSMIMECertificateEnabled
 *                               | zimbraFeatureManageZimlets
 *                               | zimbraFeatureMobilePolicyEnabled
 *                               | zimbraFeatureMobileSyncEnabled
 *                               | zimbraFeatureNewAddrBookEnabled
 *                               | zimbraFeatureNewMailNotificationEnabled
 *                               | zimbraFeatureNotebookEnabled
 *                               | zimbraFeatureOpenMailInNewWindowEnabled
 *                               | zimbraFeatureOptionsEnabled
 *                               | zimbraFeatureOutOfOfficeReplyEnabled
 *                               | zimbraFeaturePeopleSearchEnabled
 *                               | zimbraFeaturePop3DataSourceEnabled
 *                               | zimbraFeaturePortalEnabled
 *                               | zimbraFeaturePriorityInboxEnabled
 *                               | zimbraFeatureReadReceiptsEnabled
 *                               | zimbraFeatureSMIMEEnabled
 *                               | zimbraFeatureSavedSearchesEnabled
 *                               | zimbraFeatureSharingEnabled
 *                               | zimbraFeatureShortcutAliasesEnabled
 *                               | zimbraFeatureSignaturesEnabled
 *                               | zimbraFeatureSkinChangeEnabled
 *                               | zimbraFeatureSocialEnabled
 *                               | zimbraFeatureSocialExternalEnabled
 *                               | zimbraFeatureSocialExternalURL
 *                               | zimbraFeatureSocialFiltersEnabled
 *                               | zimbraFeatureSocialName
 *                               | zimbraFeatureSocialcastEnabled
 *                               | zimbraFeatureTaggingEnabled
 *                               | zimbraFeatureTasksEnabled
 *                               | zimbraFeatureTouchClientEnabled
 *                               | zimbraFeatureViewInHtmlEnabled
 *                               | zimbraFeatureVoiceChangePinEnabled
 *                               | zimbraFeatureVoiceEnabled
 *                               | zimbraFeatureVoiceUpsellEnabled
 *                               | zimbraFeatureVoiceUpsellURL
 *                               | zimbraFeatureWebClientOfflineAccessEnabled
 *                               | zimbraFeatureWebSearchEnabled
 *                               | zimbraFeatureZimbraAssistantEnabled
 *                               | zimbraFileAndroidCrashReportingEnabled
 *                               | zimbraFileDeletionNotificationBody
 *                               | zimbraFileDeletionNotificationSubject
 *                               | zimbraFileExpirationWarningBody
 *                               | zimbraFileExpirationWarningSubject
 *                               | zimbraFileExpirationWarningThreshold
 *                               | zimbraFileExternalShareLifetime
 *                               | zimbraFileIOSCrashReportingEnabled
 *                               | zimbraFileLifetime
 *                               | zimbraFilePreviewMaxSize
 *                               | zimbraFilePublicShareLifetime
 *                               | zimbraFileShareLifetime
 *                               | zimbraFileUploadMaxSizePerFile
 *                               | zimbraFileVersionLifetime
 *                               | zimbraFileVersioningEnabled
 *                               | zimbraFilterBatchSize
 *                               | zimbraFilterSleepInterval
 *                               | zimbraForceClearCookies
 *                               | zimbraFreebusyExchangeAuthPassword
 *                               | zimbraFreebusyExchangeAuthScheme
 *                               | zimbraFreebusyExchangeAuthUsername
 *                               | zimbraFreebusyExchangeCachedInterval
 *                               | zimbraFreebusyExchangeCachedIntervalStart
 *                               | zimbraFreebusyExchangeURL
 *                               | zimbraFreebusyExchangeUserOrg
 *                               | zimbraFreebusyLocalMailboxNotActive
 *                               | zimbraGalSyncAccountBasedAutoCompleteEnabled
 *                               | zimbraIMAvailableInteropGateways
 *                               | zimbraIMService
 *                               | zimbraIdentityMaxNumEntries
 *                               | zimbraImapEnabled
 *                               | zimbraInterceptAddress
 *                               | zimbraInterceptBody
 *                               | zimbraInterceptFrom
 *                               | zimbraInterceptSendHeadersOnly
 *                               | zimbraInterceptSubject
 *                               | zimbraInternalSendersDomain
 *                               | zimbraJunkMessagesIndexingEnabled
 *                               | zimbraLocale
 *                               | zimbraLogOutFromAllServers
 *                               | zimbraMailAllowReceiveButNotSendWhenOverQuota
 *                               | zimbraMailBlacklistMaxNumEntries
 *                               | zimbraMailDumpsterLifetime
 *                               | zimbraMailForwardingAddressMaxLength
 *                               | zimbraMailForwardingAddressMaxNumAddrs
 *                               | zimbraMailHighlightObjectsMaxSize
 *                               | zimbraMailHostPool
 *                               | zimbraMailIdleSessionTimeout
 *                               | zimbraMailMessageLifetime
 *                               | zimbraMailMinPollingInterval
 *                               | zimbraMailPurgeSystemPolicy
 *                               | zimbraMailPurgeUseChangeDateForSpam
 *                               | zimbraMailPurgeUseChangeDateForTrash
 *                               | zimbraMailQuota
 *                               | zimbraMailSignatureMaxLength
 *                               | zimbraMailSpamLifetime
 *                               | zimbraMailThreadingAlgorithm
 *                               | zimbraMailTrashLifetime
 *                               | zimbraMailTrustedSenderListMaxNumEntries
 *                               | zimbraMailWhitelistMaxNumEntries
 *                               | zimbraMaxContactsPerPage
 *                               | zimbraMaxMailItemsPerPage
 *                               | zimbraMaxVoiceItemsPerPage
 *                               | zimbraMobileAttachSkippedItemEnabled
 *                               | zimbraMobileForceProtocol25
 *                               | zimbraMobileForceSamsungProtocol25
 *                               | zimbraMobileItemsToTrackPerFolderMaxSize
 *                               | zimbraMobileMetadataMaxSizeEnabled
 *                               | zimbraMobileNotificationAdminAddress
 *                               | zimbraMobileNotificationEnabled
 *                               | zimbraMobileOutlookSyncEnabled
 *                               | zimbraMobilePolicyAllowBluetooth
 *                               | zimbraMobilePolicyAllowBrowser
 *                               | zimbraMobilePolicyAllowCamera
 *                               | zimbraMobilePolicyAllowConsumerEmail
 *                               | zimbraMobilePolicyAllowDesktopSync
 *                               | zimbraMobilePolicyAllowHTMLEmail
 *                               | zimbraMobilePolicyAllowInternetSharing
 *                               | zimbraMobilePolicyAllowIrDA
 *                               | zimbraMobilePolicyAllowNonProvisionableDevices
 *                               | zimbraMobilePolicyAllowPOPIMAPEmail
 *                               | zimbraMobilePolicyAllowPartialProvisioning
 *                               | zimbraMobilePolicyAllowRemoteDesktop
 *                               | zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation
 *                               | zimbraMobilePolicyAllowSMIMESoftCerts
 *                               | zimbraMobilePolicyAllowSimpleDevicePassword
 *                               | zimbraMobilePolicyAllowStorageCard
 *                               | zimbraMobilePolicyAllowTextMessaging
 *                               | zimbraMobilePolicyAllowUnsignedApplications
 *                               | zimbraMobilePolicyAllowUnsignedInstallationPackages
 *                               | zimbraMobilePolicyAllowWiFi
 *                               | zimbraMobilePolicyAlphanumericDevicePasswordRequired
 *                               | zimbraMobilePolicyApprovedApplication
 *                               | zimbraMobilePolicyApprovedApplicationList
 *                               | zimbraMobilePolicyDeviceEncryptionEnabled
 *                               | zimbraMobilePolicyDevicePasswordEnabled
 *                               | zimbraMobilePolicyDevicePasswordExpiration
 *                               | zimbraMobilePolicyDevicePasswordHistory
 *                               | zimbraMobilePolicyMaxCalendarAgeFilter
 *                               | zimbraMobilePolicyMaxDevicePasswordFailedAttempts
 *                               | zimbraMobilePolicyMaxEmailAgeFilter
 *                               | zimbraMobilePolicyMaxEmailBodyTruncationSize
 *                               | zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize
 *                               | zimbraMobilePolicyMaxInactivityTimeDeviceLock
 *                               | zimbraMobilePolicyMinDevicePasswordComplexCharacters
 *                               | zimbraMobilePolicyMinDevicePasswordLength
 *                               | zimbraMobilePolicyPasswordRecoveryEnabled
 *                               | zimbraMobilePolicyRefreshInterval
 *                               | zimbraMobilePolicyRequireDeviceEncryption
 *                               | zimbraMobilePolicyRequireEncryptedSMIMEMessages
 *                               | zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm
 *                               | zimbraMobilePolicyRequireManualSyncWhenRoaming
 *                               | zimbraMobilePolicyRequireSignedSMIMEAlgorithm
 *                               | zimbraMobilePolicyRequireSignedSMIMEMessages
 *                               | zimbraMobilePolicyRequireStorageCardEncryption
 *                               | zimbraMobilePolicySuppressDeviceEncryption
 *                               | zimbraMobilePolicyUnapprovedInROMApplication
 *                               | zimbraMobileShareContactEnabled
 *                               | zimbraMobileSmartForwardRFC822Enabled
 *                               | zimbraMobileSyncKeyFormatConvertedFolders
 *                               | zimbraMobileSyncRedoMaxAttempts
 *                               | zimbraMobileTombstoneEnabled
 *                               | zimbraNewMailNotificationBody
 *                               | zimbraNewMailNotificationFrom
 *                               | zimbraNewMailNotificationSubject
 *                               | zimbraNotebookMaxRevisions
 *                               | zimbraNotebookSanitizeHtml
 *                               | zimbraNotes
 *                               | zimbraPasswordAllowedChars
 *                               | zimbraPasswordAllowedPunctuationChars
 *                               | zimbraPasswordEnforceHistory
 *                               | zimbraPasswordLocked
 *                               | zimbraPasswordLockoutDuration
 *                               | zimbraPasswordLockoutEnabled
 *                               | zimbraPasswordLockoutFailureLifetime
 *                               | zimbraPasswordLockoutMaxFailures
 *                               | zimbraPasswordMaxAge
 *                               | zimbraPasswordMaxLength
 *                               | zimbraPasswordMinAge
 *                               | zimbraPasswordMinAlphaChars
 *                               | zimbraPasswordMinDigitsOrPuncs
 *                               | zimbraPasswordMinLength
 *                               | zimbraPasswordMinLowerCaseChars
 *                               | zimbraPasswordMinNumericChars
 *                               | zimbraPasswordMinPunctuationChars
 *                               | zimbraPasswordMinUpperCaseChars
 *                               | zimbraPop3Enabled
 *                               | zimbraPortalName
 *                               | zimbraPrefAccountTreeOpen
 *                               | zimbraPrefAdminConsoleWarnOnExit
 *                               | zimbraPrefAdvancedClientEnforceMinDisplay
 *                               | zimbraPrefAppleIcalDelegationEnabled
 *                               | zimbraPrefAutoAddAddressEnabled
 *                               | zimbraPrefAutoCompleteQuickCompletionOnComma
 *                               | zimbraPrefAutoSaveDraftInterval
 *                               | zimbraPrefAutocompleteAddressBubblesEnabled
 *                               | zimbraPrefBriefcaseReadingPaneLocation
 *                               | zimbraPrefCalendarAllowCancelEmailToSelf
 *                               | zimbraPrefCalendarAllowForwardedInvite
 *                               | zimbraPrefCalendarAllowPublishMethodInvite
 *                               | zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply
 *                               | zimbraPrefCalendarAlwaysShowMiniCal
 *                               | zimbraPrefCalendarApptAllowAtendeeEdit
 *                               | zimbraPrefCalendarApptReminderWarningTime
 *                               | zimbraPrefCalendarApptVisibility
 *                               | zimbraPrefCalendarAutoAddInvites
 *                               | zimbraPrefCalendarDayHourEnd
 *                               | zimbraPrefCalendarDayHourStart
 *                               | zimbraPrefCalendarDefaultApptDuration
 *                               | zimbraPrefCalendarFirstDayOfWeek
 *                               | zimbraPrefCalendarInitialView
 *                               | zimbraPrefCalendarNotifyDelegatedChanges
 *                               | zimbraPrefCalendarReminderDuration1
 *                               | zimbraPrefCalendarReminderDuration2
 *                               | zimbraPrefCalendarReminderFlashTitle
 *                               | zimbraPrefCalendarReminderMobile
 *                               | zimbraPrefCalendarReminderSendEmail
 *                               | zimbraPrefCalendarReminderSoundsEnabled
 *                               | zimbraPrefCalendarReminderYMessenger
 *                               | zimbraPrefCalendarSendInviteDeniedAutoReply
 *                               | zimbraPrefCalendarShowDeclinedMeetings
 *                               | zimbraPrefCalendarShowPastDueReminders
 *                               | zimbraPrefCalendarToasterEnabled
 *                               | zimbraPrefCalendarUseQuickAdd
 *                               | zimbraPrefCalendarViewTimeInterval
 *                               | zimbraPrefCalendarWorkingHours
 *                               | zimbraPrefClientType
 *                               | zimbraPrefColorMessagesEnabled
 *                               | zimbraPrefComposeDirection
 *                               | zimbraPrefComposeFormat
 *                               | zimbraPrefComposeInNewWindow
 *                               | zimbraPrefContactsDisableAutocompleteOnContactGroupMembers
 *                               | zimbraPrefContactsExpandAppleContactGroups
 *                               | zimbraPrefContactsInitialView
 *                               | zimbraPrefContactsPerPage
 *                               | zimbraPrefConvReadingPaneLocation
 *                               | zimbraPrefConvShowCalendar
 *                               | zimbraPrefConversationOrder
 *                               | zimbraPrefDedupeMessagesSentToSelf
 *                               | zimbraPrefDefaultPrintFontSize
 *                               | zimbraPrefDelegatedSendSaveTarget
 *                               | zimbraPrefDeleteInviteOnReply
 *                               | zimbraPrefDisabledZimlets
 *                               | zimbraPrefDisplayExternalImages
 *                               | zimbraPrefExternalSendersType
 *                               | zimbraPrefFileSharingApplication
 *                               | zimbraPrefFolderColorEnabled
 *                               | zimbraPrefFolderTreeOpen
 *                               | zimbraPrefFont
 *                               | zimbraPrefFontSize
 *                               | zimbraPrefForwardIncludeOriginalText
 *                               | zimbraPrefForwardReplyFormat
 *                               | zimbraPrefForwardReplyInOriginalFormat
 *                               | zimbraPrefForwardReplyPrefixChar
 *                               | zimbraPrefGalAutoCompleteEnabled
 *                               | zimbraPrefGalSearchEnabled
 *                               | zimbraPrefGetMailAction
 *                               | zimbraPrefGroupMailBy
 *                               | zimbraPrefHtmlEditorDefaultFontColor
 *                               | zimbraPrefHtmlEditorDefaultFontFamily
 *                               | zimbraPrefHtmlEditorDefaultFontSize
 *                               | zimbraPrefIMAutoLogin
 *                               | zimbraPrefIMBuddyListSort
 *                               | zimbraPrefIMFlashIcon
 *                               | zimbraPrefIMFlashTitle
 *                               | zimbraPrefIMHideBlockedBuddies
 *                               | zimbraPrefIMHideOfflineBuddies
 *                               | zimbraPrefIMIdleStatus
 *                               | zimbraPrefIMIdleTimeout
 *                               | zimbraPrefIMInstantNotify
 *                               | zimbraPrefIMLogChats
 *                               | zimbraPrefIMLogChatsEnabled
 *                               | zimbraPrefIMNotifyPresence
 *                               | zimbraPrefIMNotifyStatus
 *                               | zimbraPrefIMReportIdle
 *                               | zimbraPrefIMSoundsEnabled
 *                               | zimbraPrefIMToasterEnabled
 *                               | zimbraPrefImapSearchFoldersEnabled
 *                               | zimbraPrefInboxReadLifetime
 *                               | zimbraPrefInboxUnreadLifetime
 *                               | zimbraPrefIncludeSharedItemsInSearch
 *                               | zimbraPrefIncludeSpamInSearch
 *                               | zimbraPrefIncludeTrashInSearch
 *                               | zimbraPrefItemsPerVirtualPage
 *                               | zimbraPrefJunkLifetime
 *                               | zimbraPrefListViewColumns
 *                               | zimbraPrefLocale
 *                               | zimbraPrefMailDefaultCharset
 *                               | zimbraPrefMailFlashIcon
 *                               | zimbraPrefMailFlashTitle
 *                               | zimbraPrefMailFoldersCheckedForNewMsgIndicator
 *                               | zimbraPrefMailInitialSearch
 *                               | zimbraPrefMailItemsPerPage
 *                               | zimbraPrefMailPollingInterval
 *                               | zimbraPrefMailRequestReadReceipts
 *                               | zimbraPrefMailSelectAfterDelete
 *                               | zimbraPrefMailSendReadReceipts
 *                               | zimbraPrefMailSignatureStyle
 *                               | zimbraPrefMailSoundsEnabled
 *                               | zimbraPrefMailToasterEnabled
 *                               | zimbraPrefMailTrustedSenderList
 *                               | zimbraPrefMandatorySpellCheckEnabled
 *                               | zimbraPrefMarkMsgRead
 *                               | zimbraPrefMessageIdDedupingEnabled
 *                               | zimbraPrefMessageViewHtmlPreferred
 *                               | zimbraPrefOpenMailInNewWindow
 *                               | zimbraPrefOutOfOfficeCacheDuration
 *                               | zimbraPrefOutOfOfficeStatusAlertOnLogin
 *                               | zimbraPrefPop3DeleteOption
 *                               | zimbraPrefPop3DownloadSince
 *                               | zimbraPrefPop3IncludeSpam
 *                               | zimbraPrefReadingPaneEnabled
 *                               | zimbraPrefReadingPaneLocation
 *                               | zimbraPrefReplyIncludeOriginalText
 *                               | zimbraPrefSaveToSent
 *                               | zimbraPrefSearchTreeOpen
 *                               | zimbraPrefSentLifetime
 *                               | zimbraPrefSentMailFolder
 *                               | zimbraPrefSharedAddrBookAutoCompleteEnabled
 *                               | zimbraPrefShortEmailAddress
 *                               | zimbraPrefShortcuts
 *                               | zimbraPrefShowCalendarWeek
 *                               | zimbraPrefShowComposeDirection
 *                               | zimbraPrefShowFragments
 *                               | zimbraPrefShowSearchString
 *                               | zimbraPrefShowSelectionCheckbox
 *                               | zimbraPrefSkin
 *                               | zimbraPrefSortOrder
 *                               | zimbraPrefSpellDictionary
 *                               | zimbraPrefSpellIgnoreAllCaps
 *                               | zimbraPrefSpellIgnorePattern
 *                               | zimbraPrefSpellIgnoreWord
 *                               | zimbraPrefStandardClientAccessibilityMode
 *                               | zimbraPrefTagTreeOpen
 *                               | zimbraPrefTasksFilterBy
 *                               | zimbraPrefTasksReadingPaneLocation
 *                               | zimbraPrefTimeZoneId
 *                               | zimbraPrefTrashLifetime
 *                               | zimbraPrefUseKeyboardShortcuts
 *                               | zimbraPrefUseRfc2231
 *                               | zimbraPrefUseSendMsgShortcut
 *                               | zimbraPrefUseTimeZoneListInCalendar
 *                               | zimbraPrefVoiceItemsPerPage
 *                               | zimbraPrefWarnOnExit
 *                               | zimbraPrefZimletTreeOpen
 *                               | zimbraPrefZimlets
 *                               | zimbraProxyAllowedDomains
 *                               | zimbraProxyCacheableContentTypes
 *                               | zimbraPublicShareLifetime
 *                               | zimbraPublicSharingEnabled
 *                               | zimbraQuotaWarnInterval
 *                               | zimbraQuotaWarnMessage
 *                               | zimbraQuotaWarnPercent
 *                               | zimbraShareLifetime
 *                               | zimbraSignatureMaxNumEntries
 *                               | zimbraSignatureMinNumEntries
 *                               | zimbraSmtpEnableTrace
 *                               | zimbraSmtpRestrictEnvelopeFrom
 *                               | zimbraSocialcastURL
 *                               | zimbraSpamApplyUserFilters
 *                               | zimbraStandardClientCustomPrefTab
 *                               | zimbraStandardClientCustomPrefTabsEnabled
 *                               | zimbraSyncWindowSize
 *                               | zimbraTextAnalyzer
 *                               | zimbraTouchJSErrorTrackingEnabled
 *                               | zimbraTouchJSErrorTrackingKey
 *                               | zimbraUCServiceId
 *                               | zimbraWebClientOfflineSyncMaxDays
 *                               | zimbraWebClientShowOfflineLink
 *                               | zimbraZimletAvailableZimlets
 *                               | zimbraZimletLoadSynchronously }
 *   LDAP-NAME                 {"zimbraCOS"}
 *   LDAP-DESC                 "Class of Service data"
 *   ID                        id-oc-zimbraCOS }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraCOS: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraAdminAuthTokenLifetime, zimbraAdminSavedSearches, zimbraAllowAnyFromAddress, zimbraArchiveAccountDateTemplate, zimbraArchiveAccountNameTemplate, zimbraArchiveEnabled, zimbraAttachmentsBlocked, zimbraAttachmentsIndexingEnabled, zimbraAttachmentsViewInHtmlOnly, zimbraAuthTokenLifetime, zimbraAvailableLocale, zimbraAvailableSkin, zimbraBatchedIndexingSize, zimbraCalendarCalDavSharedFolderCacheDuration, zimbraCalendarCalDavSyncEnd, zimbraCalendarCalDavSyncStart, zimbraCalendarKeepExceptionsOnSeriesTimeChange, zimbraCalendarLocationDisabledFields, zimbraCalendarMaxRevisions, zimbraCalendarResourceDoubleBookingAllowed, zimbraCalendarShowResourceTabs, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraConstraint, zimbraContactAutoCompleteEmailFields, zimbraContactAutoCompleteMaxResults, zimbraContactEmailFields, zimbraContactMaxNumEntries, zimbraContactRankingTableSize, zimbraConverterHints, zimbraCreateTimestamp, zimbraDataSourceCaldavPollingInterval, zimbraDataSourceCalendarPollingInterval, zimbraDataSourceGalPollingInterval, zimbraDataSourceImapPollingInterval, zimbraDataSourceImportOnLogin, zimbraDataSourceLivePollingInterval, zimbraDataSourceMaxNumEntries, zimbraDataSourceMinPollingInterval, zimbraDataSourcePollingInterval, zimbraDataSourcePop3PollingInterval, zimbraDataSourceRssPollingInterval, zimbraDataSourceYabPollingInterval, zimbraDefaultFolderFlags, zimbraDeviceAllowedPasscodeLockoutDuration, zimbraDeviceCalendarSoftDeleteExcludePattern, zimbraDeviceFileOpenWithEnabled, zimbraDeviceLockWhenInactive, zimbraDeviceOfflineCacheEnabled, zimbraDevicePasscodeEnabled, zimbraDevicePasscodeLockoutDuration, zimbraDomainAdminMaxMailQuota, zimbraDumpsterEnabled, zimbraDumpsterPurgeEnabled, zimbraDumpsterUserVisibleAge, zimbraExternalAccountLifetimeAfterDisabled, zimbraExternalShareDomainWhitelistEnabled, zimbraExternalShareLifetime, zimbraExternalShareWhitelistDomain, zimbraExternalSharingEnabled, zimbraFeatureAdminMailEnabled, zimbraFeatureAdvancedSearchEnabled, zimbraFeatureAntispamEnabled, zimbraFeatureBriefcaseDocsEnabled, zimbraFeatureBriefcaseSlidesEnabled, zimbraFeatureBriefcaseSpreadsheetEnabled, zimbraFeatureBriefcasesEnabled, zimbraFeatureCalendarEnabled, zimbraFeatureCalendarReminderDeviceEmailEnabled, zimbraFeatureCalendarUpsellEnabled, zimbraFeatureCalendarUpsellURL, zimbraFeatureChangePasswordEnabled, zimbraFeatureComposeInNewWindowEnabled, zimbraFeatureConfirmationPageEnabled, zimbraFeatureContactsDetailedSearchEnabled, zimbraFeatureContactsEnabled, zimbraFeatureContactsUpsellEnabled, zimbraFeatureContactsUpsellURL, zimbraFeatureConversationsEnabled, zimbraFeatureCrocodocEnabled, zimbraFeatureDiscardInFiltersEnabled, zimbraFeatureDistributionListExpandMembersEnabled, zimbraFeatureDistributionListFolderEnabled, zimbraFeatureEwsEnabled, zimbraFeatureExportFolderEnabled, zimbraFeatureExternalFeedbackEnabled, zimbraFeatureFiltersEnabled, zimbraFeatureFlaggingEnabled, zimbraFeatureFreeBusyViewEnabled, zimbraFeatureFromDisplayEnabled, zimbraFeatureGalAutoCompleteEnabled, zimbraFeatureGalEnabled, zimbraFeatureGalSyncEnabled, zimbraFeatureGroupCalendarEnabled, zimbraFeatureHtmlComposeEnabled, zimbraFeatureIMEnabled, zimbraFeatureIdentitiesEnabled, zimbraFeatureImapDataSourceEnabled, zimbraFeatureImportExportFolderEnabled, zimbraFeatureImportFolderEnabled, zimbraFeatureInitialSearchPreferenceEnabled, zimbraFeatureInstantNotify, zimbraFeatureMAPIConnectorEnabled, zimbraFeatureMailEnabled, zimbraFeatureMailForwardingEnabled, zimbraFeatureMailForwardingInFiltersEnabled, zimbraFeatureMailPollingIntervalPreferenceEnabled, zimbraFeatureMailPriorityEnabled, zimbraFeatureMailSendLaterEnabled, zimbraFeatureMailUpsellEnabled, zimbraFeatureMailUpsellURL, zimbraFeatureManageSMIMECertificateEnabled, zimbraFeatureManageZimlets, zimbraFeatureMobilePolicyEnabled, zimbraFeatureMobileSyncEnabled, zimbraFeatureNewAddrBookEnabled, zimbraFeatureNewMailNotificationEnabled, zimbraFeatureNotebookEnabled, zimbraFeatureOpenMailInNewWindowEnabled, zimbraFeatureOptionsEnabled, zimbraFeatureOutOfOfficeReplyEnabled, zimbraFeaturePeopleSearchEnabled, zimbraFeaturePop3DataSourceEnabled, zimbraFeaturePortalEnabled, zimbraFeaturePriorityInboxEnabled, zimbraFeatureReadReceiptsEnabled, zimbraFeatureSMIMEEnabled, zimbraFeatureSavedSearchesEnabled, zimbraFeatureSharingEnabled, zimbraFeatureShortcutAliasesEnabled, zimbraFeatureSignaturesEnabled, zimbraFeatureSkinChangeEnabled, zimbraFeatureSocialEnabled, zimbraFeatureSocialExternalEnabled, zimbraFeatureSocialExternalURL, zimbraFeatureSocialFiltersEnabled, zimbraFeatureSocialName, zimbraFeatureSocialcastEnabled, zimbraFeatureTaggingEnabled, zimbraFeatureTasksEnabled, zimbraFeatureTouchClientEnabled, zimbraFeatureViewInHtmlEnabled, zimbraFeatureVoiceChangePinEnabled, zimbraFeatureVoiceEnabled, zimbraFeatureVoiceUpsellEnabled, zimbraFeatureVoiceUpsellURL, zimbraFeatureWebClientOfflineAccessEnabled, zimbraFeatureWebSearchEnabled, zimbraFeatureZimbraAssistantEnabled, zimbraFileAndroidCrashReportingEnabled, zimbraFileDeletionNotificationBody, zimbraFileDeletionNotificationSubject, zimbraFileExpirationWarningBody, zimbraFileExpirationWarningSubject, zimbraFileExpirationWarningThreshold, zimbraFileExternalShareLifetime, zimbraFileIOSCrashReportingEnabled, zimbraFileLifetime, zimbraFilePreviewMaxSize, zimbraFilePublicShareLifetime, zimbraFileShareLifetime, zimbraFileUploadMaxSizePerFile, zimbraFileVersionLifetime, zimbraFileVersioningEnabled, zimbraFilterBatchSize, zimbraFilterSleepInterval, zimbraForceClearCookies, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraFreebusyLocalMailboxNotActive, zimbraGalSyncAccountBasedAutoCompleteEnabled, zimbraIMAvailableInteropGateways, zimbraIMService, zimbraIdentityMaxNumEntries, zimbraImapEnabled, zimbraInterceptAddress, zimbraInterceptBody, zimbraInterceptFrom, zimbraInterceptSendHeadersOnly, zimbraInterceptSubject, zimbraInternalSendersDomain, zimbraJunkMessagesIndexingEnabled, zimbraLocale, zimbraLogOutFromAllServers, zimbraMailAllowReceiveButNotSendWhenOverQuota, zimbraMailBlacklistMaxNumEntries, zimbraMailDumpsterLifetime, zimbraMailForwardingAddressMaxLength, zimbraMailForwardingAddressMaxNumAddrs, zimbraMailHighlightObjectsMaxSize, zimbraMailHostPool, zimbraMailIdleSessionTimeout, zimbraMailMessageLifetime, zimbraMailMinPollingInterval, zimbraMailPurgeSystemPolicy, zimbraMailPurgeUseChangeDateForSpam, zimbraMailPurgeUseChangeDateForTrash, zimbraMailQuota, zimbraMailSignatureMaxLength, zimbraMailSpamLifetime, zimbraMailThreadingAlgorithm, zimbraMailTrashLifetime, zimbraMailTrustedSenderListMaxNumEntries, zimbraMailWhitelistMaxNumEntries, zimbraMaxContactsPerPage, zimbraMaxMailItemsPerPage, zimbraMaxVoiceItemsPerPage, zimbraMobileAttachSkippedItemEnabled, zimbraMobileForceProtocol25, zimbraMobileForceSamsungProtocol25, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMobileNotificationAdminAddress, zimbraMobileNotificationEnabled, zimbraMobileOutlookSyncEnabled, zimbraMobilePolicyAllowBluetooth, zimbraMobilePolicyAllowBrowser, zimbraMobilePolicyAllowCamera, zimbraMobilePolicyAllowConsumerEmail, zimbraMobilePolicyAllowDesktopSync, zimbraMobilePolicyAllowHTMLEmail, zimbraMobilePolicyAllowInternetSharing, zimbraMobilePolicyAllowIrDA, zimbraMobilePolicyAllowNonProvisionableDevices, zimbraMobilePolicyAllowPOPIMAPEmail, zimbraMobilePolicyAllowPartialProvisioning, zimbraMobilePolicyAllowRemoteDesktop, zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation, zimbraMobilePolicyAllowSMIMESoftCerts, zimbraMobilePolicyAllowSimpleDevicePassword, zimbraMobilePolicyAllowStorageCard, zimbraMobilePolicyAllowTextMessaging, zimbraMobilePolicyAllowUnsignedApplications, zimbraMobilePolicyAllowUnsignedInstallationPackages, zimbraMobilePolicyAllowWiFi, zimbraMobilePolicyAlphanumericDevicePasswordRequired, zimbraMobilePolicyApprovedApplication, zimbraMobilePolicyApprovedApplicationList, zimbraMobilePolicyDeviceEncryptionEnabled, zimbraMobilePolicyDevicePasswordEnabled, zimbraMobilePolicyDevicePasswordExpiration, zimbraMobilePolicyDevicePasswordHistory, zimbraMobilePolicyMaxCalendarAgeFilter, zimbraMobilePolicyMaxDevicePasswordFailedAttempts, zimbraMobilePolicyMaxEmailAgeFilter, zimbraMobilePolicyMaxEmailBodyTruncationSize, zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize, zimbraMobilePolicyMaxInactivityTimeDeviceLock, zimbraMobilePolicyMinDevicePasswordComplexCharacters, zimbraMobilePolicyMinDevicePasswordLength, zimbraMobilePolicyPasswordRecoveryEnabled, zimbraMobilePolicyRefreshInterval, zimbraMobilePolicyRequireDeviceEncryption, zimbraMobilePolicyRequireEncryptedSMIMEMessages, zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm, zimbraMobilePolicyRequireManualSyncWhenRoaming, zimbraMobilePolicyRequireSignedSMIMEAlgorithm, zimbraMobilePolicyRequireSignedSMIMEMessages, zimbraMobilePolicyRequireStorageCardEncryption, zimbraMobilePolicySuppressDeviceEncryption, zimbraMobilePolicyUnapprovedInROMApplication, zimbraMobileShareContactEnabled, zimbraMobileSmartForwardRFC822Enabled, zimbraMobileSyncKeyFormatConvertedFolders, zimbraMobileSyncRedoMaxAttempts, zimbraMobileTombstoneEnabled, zimbraNewMailNotificationBody, zimbraNewMailNotificationFrom, zimbraNewMailNotificationSubject, zimbraNotebookMaxRevisions, zimbraNotebookSanitizeHtml, zimbraNotes, zimbraPasswordAllowedChars, zimbraPasswordAllowedPunctuationChars, zimbraPasswordEnforceHistory, zimbraPasswordLocked, zimbraPasswordLockoutDuration, zimbraPasswordLockoutEnabled, zimbraPasswordLockoutFailureLifetime, zimbraPasswordLockoutMaxFailures, zimbraPasswordMaxAge, zimbraPasswordMaxLength, zimbraPasswordMinAge, zimbraPasswordMinAlphaChars, zimbraPasswordMinDigitsOrPuncs, zimbraPasswordMinLength, zimbraPasswordMinLowerCaseChars, zimbraPasswordMinNumericChars, zimbraPasswordMinPunctuationChars, zimbraPasswordMinUpperCaseChars, zimbraPop3Enabled, zimbraPortalName, zimbraPrefAccountTreeOpen, zimbraPrefAdminConsoleWarnOnExit, zimbraPrefAdvancedClientEnforceMinDisplay, zimbraPrefAppleIcalDelegationEnabled, zimbraPrefAutoAddAddressEnabled, zimbraPrefAutoCompleteQuickCompletionOnComma, zimbraPrefAutoSaveDraftInterval, zimbraPrefAutocompleteAddressBubblesEnabled, zimbraPrefBriefcaseReadingPaneLocation, zimbraPrefCalendarAllowCancelEmailToSelf, zimbraPrefCalendarAllowForwardedInvite, zimbraPrefCalendarAllowPublishMethodInvite, zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply, zimbraPrefCalendarAlwaysShowMiniCal, zimbraPrefCalendarApptAllowAtendeeEdit, zimbraPrefCalendarApptReminderWarningTime, zimbraPrefCalendarApptVisibility, zimbraPrefCalendarAutoAddInvites, zimbraPrefCalendarDayHourEnd, zimbraPrefCalendarDayHourStart, zimbraPrefCalendarDefaultApptDuration, zimbraPrefCalendarFirstDayOfWeek, zimbraPrefCalendarInitialView, zimbraPrefCalendarNotifyDelegatedChanges, zimbraPrefCalendarReminderDuration1, zimbraPrefCalendarReminderDuration2, zimbraPrefCalendarReminderFlashTitle, zimbraPrefCalendarReminderMobile, zimbraPrefCalendarReminderSendEmail, zimbraPrefCalendarReminderSoundsEnabled, zimbraPrefCalendarReminderYMessenger, zimbraPrefCalendarSendInviteDeniedAutoReply, zimbraPrefCalendarShowDeclinedMeetings, zimbraPrefCalendarShowPastDueReminders, zimbraPrefCalendarToasterEnabled, zimbraPrefCalendarUseQuickAdd, zimbraPrefCalendarViewTimeInterval, zimbraPrefCalendarWorkingHours, zimbraPrefClientType, zimbraPrefColorMessagesEnabled, zimbraPrefComposeDirection, zimbraPrefComposeFormat, zimbraPrefComposeInNewWindow, zimbraPrefContactsDisableAutocompleteOnContactGroupMembers, zimbraPrefContactsExpandAppleContactGroups, zimbraPrefContactsInitialView, zimbraPrefContactsPerPage, zimbraPrefConvReadingPaneLocation, zimbraPrefConvShowCalendar, zimbraPrefConversationOrder, zimbraPrefDedupeMessagesSentToSelf, zimbraPrefDefaultPrintFontSize, zimbraPrefDelegatedSendSaveTarget, zimbraPrefDeleteInviteOnReply, zimbraPrefDisabledZimlets, zimbraPrefDisplayExternalImages, zimbraPrefExternalSendersType, zimbraPrefFileSharingApplication, zimbraPrefFolderColorEnabled, zimbraPrefFolderTreeOpen, zimbraPrefFont, zimbraPrefFontSize, zimbraPrefForwardIncludeOriginalText, zimbraPrefForwardReplyFormat, zimbraPrefForwardReplyInOriginalFormat, zimbraPrefForwardReplyPrefixChar, zimbraPrefGalAutoCompleteEnabled, zimbraPrefGalSearchEnabled, zimbraPrefGetMailAction, zimbraPrefGroupMailBy, zimbraPrefHtmlEditorDefaultFontColor, zimbraPrefHtmlEditorDefaultFontFamily, zimbraPrefHtmlEditorDefaultFontSize, zimbraPrefIMAutoLogin, zimbraPrefIMBuddyListSort, zimbraPrefIMFlashIcon, zimbraPrefIMFlashTitle, zimbraPrefIMHideBlockedBuddies, zimbraPrefIMHideOfflineBuddies, zimbraPrefIMIdleStatus, zimbraPrefIMIdleTimeout, zimbraPrefIMInstantNotify, zimbraPrefIMLogChats, zimbraPrefIMLogChatsEnabled, zimbraPrefIMNotifyPresence, zimbraPrefIMNotifyStatus, zimbraPrefIMReportIdle, zimbraPrefIMSoundsEnabled, zimbraPrefIMToasterEnabled, zimbraPrefImapSearchFoldersEnabled, zimbraPrefInboxReadLifetime, zimbraPrefInboxUnreadLifetime, zimbraPrefIncludeSharedItemsInSearch, zimbraPrefIncludeSpamInSearch, zimbraPrefIncludeTrashInSearch, zimbraPrefItemsPerVirtualPage, zimbraPrefJunkLifetime, zimbraPrefListViewColumns, zimbraPrefLocale, zimbraPrefMailDefaultCharset, zimbraPrefMailFlashIcon, zimbraPrefMailFlashTitle, zimbraPrefMailFoldersCheckedForNewMsgIndicator, zimbraPrefMailInitialSearch, zimbraPrefMailItemsPerPage, zimbraPrefMailPollingInterval, zimbraPrefMailRequestReadReceipts, zimbraPrefMailSelectAfterDelete, zimbraPrefMailSendReadReceipts, zimbraPrefMailSignatureStyle, zimbraPrefMailSoundsEnabled, zimbraPrefMailToasterEnabled, zimbraPrefMailTrustedSenderList, zimbraPrefMandatorySpellCheckEnabled, zimbraPrefMarkMsgRead, zimbraPrefMessageIdDedupingEnabled, zimbraPrefMessageViewHtmlPreferred, zimbraPrefOpenMailInNewWindow, zimbraPrefOutOfOfficeCacheDuration, zimbraPrefOutOfOfficeStatusAlertOnLogin, zimbraPrefPop3DeleteOption, zimbraPrefPop3DownloadSince, zimbraPrefPop3IncludeSpam, zimbraPrefReadingPaneEnabled, zimbraPrefReadingPaneLocation, zimbraPrefReplyIncludeOriginalText, zimbraPrefSaveToSent, zimbraPrefSearchTreeOpen, zimbraPrefSentLifetime, zimbraPrefSentMailFolder, zimbraPrefSharedAddrBookAutoCompleteEnabled, zimbraPrefShortEmailAddress, zimbraPrefShortcuts, zimbraPrefShowCalendarWeek, zimbraPrefShowComposeDirection, zimbraPrefShowFragments, zimbraPrefShowSearchString, zimbraPrefShowSelectionCheckbox, zimbraPrefSkin, zimbraPrefSortOrder, zimbraPrefSpellDictionary, zimbraPrefSpellIgnoreAllCaps, zimbraPrefSpellIgnorePattern, zimbraPrefSpellIgnoreWord, zimbraPrefStandardClientAccessibilityMode, zimbraPrefTagTreeOpen, zimbraPrefTasksFilterBy, zimbraPrefTasksReadingPaneLocation, zimbraPrefTimeZoneId, zimbraPrefTrashLifetime, zimbraPrefUseKeyboardShortcuts, zimbraPrefUseRfc2231, zimbraPrefUseSendMsgShortcut, zimbraPrefUseTimeZoneListInCalendar, zimbraPrefVoiceItemsPerPage, zimbraPrefWarnOnExit, zimbraPrefZimletTreeOpen, zimbraPrefZimlets, zimbraProxyAllowedDomains, zimbraProxyCacheableContentTypes, zimbraPublicShareLifetime, zimbraPublicSharingEnabled, zimbraQuotaWarnInterval, zimbraQuotaWarnMessage, zimbraQuotaWarnPercent, zimbraShareLifetime, zimbraSignatureMaxNumEntries, zimbraSignatureMinNumEntries, zimbraSmtpEnableTrace, zimbraSmtpRestrictEnvelopeFrom, zimbraSocialcastURL, zimbraSpamApplyUserFilters, zimbraStandardClientCustomPrefTab, zimbraStandardClientCustomPrefTabsEnabled, zimbraSyncWindowSize, zimbraTextAnalyzer, zimbraTouchJSErrorTrackingEnabled, zimbraTouchJSErrorTrackingKey, zimbraUCServiceId, zimbraWebClientOfflineSyncMaxDays, zimbraWebClientShowOfflineLink, zimbraZimletAvailableZimlets, zimbraZimletLoadSynchronously] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraCOS"],
    "&ldapDesc": "Class of Service data" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraCOS /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
