/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
// export { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
import { id_oc_zimbraAccount } from "../LdapZimbra/id-oc-zimbraAccount.va.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { zimbraAccountStatus } from "../LdapZimbra/zimbraAccountStatus.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { co } from "../LdapSchema2ldifCosine/co.oa.mjs";
import { company } from "../MSUser/company.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { destinationIndicator } from "../SelectedAttributeTypes/destinationIndicator.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { physicalDeliveryOfficeName } from "../SelectedAttributeTypes/physicalDeliveryOfficeName.oa.mjs";
import { postOfficeBox } from "../SelectedAttributeTypes/postOfficeBox.oa.mjs";
import { postalAddress } from "../SelectedAttributeTypes/postalAddress.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { preferredDeliveryMethod } from "../SelectedAttributeTypes/preferredDeliveryMethod.oa.mjs";
import { registeredAddress } from "../SelectedAttributeTypes/registeredAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { teletexTerminalIdentifier } from "../LdapSchema2ldifCore/teletexTerminalIdentifier.oa.mjs";
import { telexNumber } from "../SelectedAttributeTypes/telexNumber.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";
import { x121Address } from "../SelectedAttributeTypes/x121Address.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAccountCalendarUserType } from "../LdapZimbra/zimbraAccountCalendarUserType.oa.mjs";
import { zimbraAdminAuthTokenLifetime } from "../LdapZimbra/zimbraAdminAuthTokenLifetime.oa.mjs";
import { zimbraAdminConsoleUIComponents } from "../LdapZimbra/zimbraAdminConsoleUIComponents.oa.mjs";
import { zimbraAdminSavedSearches } from "../LdapZimbra/zimbraAdminSavedSearches.oa.mjs";
import { zimbraAllowAnyFromAddress } from "../LdapZimbra/zimbraAllowAnyFromAddress.oa.mjs";
import { zimbraAllowFromAddress } from "../LdapZimbra/zimbraAllowFromAddress.oa.mjs";
import { zimbraArchiveAccount } from "../LdapZimbra/zimbraArchiveAccount.oa.mjs";
import { zimbraArchiveAccountDateTemplate } from "../LdapZimbra/zimbraArchiveAccountDateTemplate.oa.mjs";
import { zimbraArchiveAccountNameTemplate } from "../LdapZimbra/zimbraArchiveAccountNameTemplate.oa.mjs";
import { zimbraArchiveEnabled } from "../LdapZimbra/zimbraArchiveEnabled.oa.mjs";
import { zimbraAttachmentsBlocked } from "../LdapZimbra/zimbraAttachmentsBlocked.oa.mjs";
import { zimbraAttachmentsIndexingEnabled } from "../LdapZimbra/zimbraAttachmentsIndexingEnabled.oa.mjs";
import { zimbraAttachmentsViewInHtmlOnly } from "../LdapZimbra/zimbraAttachmentsViewInHtmlOnly.oa.mjs";
import { zimbraAuthLdapExternalDn } from "../LdapZimbra/zimbraAuthLdapExternalDn.oa.mjs";
import { zimbraAuthTokenLifetime } from "../LdapZimbra/zimbraAuthTokenLifetime.oa.mjs";
import { zimbraAuthTokenValidityValue } from "../LdapZimbra/zimbraAuthTokenValidityValue.oa.mjs";
import { zimbraAuthTokens } from "../LdapZimbra/zimbraAuthTokens.oa.mjs";
import { zimbraAvailableLocale } from "../LdapZimbra/zimbraAvailableLocale.oa.mjs";
import { zimbraAvailableSkin } from "../LdapZimbra/zimbraAvailableSkin.oa.mjs";
import { zimbraBatchedIndexingSize } from "../LdapZimbra/zimbraBatchedIndexingSize.oa.mjs";
import { zimbraCOSId } from "../LdapZimbra/zimbraCOSId.oa.mjs";
import { zimbraCalendarCalDavSharedFolderCacheDuration } from "../LdapZimbra/zimbraCalendarCalDavSharedFolderCacheDuration.oa.mjs";
import { zimbraCalendarCalDavSyncEnd } from "../LdapZimbra/zimbraCalendarCalDavSyncEnd.oa.mjs";
import { zimbraCalendarCalDavSyncStart } from "../LdapZimbra/zimbraCalendarCalDavSyncStart.oa.mjs";
import { zimbraCalendarKeepExceptionsOnSeriesTimeChange } from "../LdapZimbra/zimbraCalendarKeepExceptionsOnSeriesTimeChange.oa.mjs";
import { zimbraCalendarLocationDisabledFields } from "../LdapZimbra/zimbraCalendarLocationDisabledFields.oa.mjs";
import { zimbraCalendarMaxRevisions } from "../LdapZimbra/zimbraCalendarMaxRevisions.oa.mjs";
import { zimbraCalendarReminderDeviceEmail } from "../LdapZimbra/zimbraCalendarReminderDeviceEmail.oa.mjs";
import { zimbraCalendarResourceDoubleBookingAllowed } from "../LdapZimbra/zimbraCalendarResourceDoubleBookingAllowed.oa.mjs";
import { zimbraCalendarShowResourceTabs } from "../LdapZimbra/zimbraCalendarShowResourceTabs.oa.mjs";
import { zimbraChildAccount } from "../LdapZimbra/zimbraChildAccount.oa.mjs";
import { zimbraChildVisibleAccount } from "../LdapZimbra/zimbraChildVisibleAccount.oa.mjs";
import { zimbraCommunityAPIClientID } from "../LdapZimbra/zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "../LdapZimbra/zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "../LdapZimbra/zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "../LdapZimbra/zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityID } from "../LdapZimbra/zimbraCommunityID.oa.mjs";
import { zimbraCommunityUsernameMapping } from "../LdapZimbra/zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraContactAutoCompleteEmailFields } from "../LdapZimbra/zimbraContactAutoCompleteEmailFields.oa.mjs";
import { zimbraContactAutoCompleteMaxResults } from "../LdapZimbra/zimbraContactAutoCompleteMaxResults.oa.mjs";
import { zimbraContactEmailFields } from "../LdapZimbra/zimbraContactEmailFields.oa.mjs";
import { zimbraContactMaxNumEntries } from "../LdapZimbra/zimbraContactMaxNumEntries.oa.mjs";
import { zimbraContactRankingTableSize } from "../LdapZimbra/zimbraContactRankingTableSize.oa.mjs";
import { zimbraConverterHints } from "../LdapZimbra/zimbraConverterHints.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraCsrfTokenData } from "../LdapZimbra/zimbraCsrfTokenData.oa.mjs";
import { zimbraCustomerCareTier } from "../LdapZimbra/zimbraCustomerCareTier.oa.mjs";
import { zimbraDataSourceCaldavPollingInterval } from "../LdapZimbra/zimbraDataSourceCaldavPollingInterval.oa.mjs";
import { zimbraDataSourceCalendarPollingInterval } from "../LdapZimbra/zimbraDataSourceCalendarPollingInterval.oa.mjs";
import { zimbraDataSourceGalPollingInterval } from "../LdapZimbra/zimbraDataSourceGalPollingInterval.oa.mjs";
import { zimbraDataSourceImapPollingInterval } from "../LdapZimbra/zimbraDataSourceImapPollingInterval.oa.mjs";
import { zimbraDataSourceImportOnLogin } from "../LdapZimbra/zimbraDataSourceImportOnLogin.oa.mjs";
import { zimbraDataSourceLivePollingInterval } from "../LdapZimbra/zimbraDataSourceLivePollingInterval.oa.mjs";
import { zimbraDataSourceMaxNumEntries } from "../LdapZimbra/zimbraDataSourceMaxNumEntries.oa.mjs";
import { zimbraDataSourceMinPollingInterval } from "../LdapZimbra/zimbraDataSourceMinPollingInterval.oa.mjs";
import { zimbraDataSourcePollingInterval } from "../LdapZimbra/zimbraDataSourcePollingInterval.oa.mjs";
import { zimbraDataSourcePop3PollingInterval } from "../LdapZimbra/zimbraDataSourcePop3PollingInterval.oa.mjs";
import { zimbraDataSourceRssPollingInterval } from "../LdapZimbra/zimbraDataSourceRssPollingInterval.oa.mjs";
import { zimbraDataSourceYabPollingInterval } from "../LdapZimbra/zimbraDataSourceYabPollingInterval.oa.mjs";
import { zimbraDebugInfo } from "../LdapZimbra/zimbraDebugInfo.oa.mjs";
import { zimbraDefaultFolderFlags } from "../LdapZimbra/zimbraDefaultFolderFlags.oa.mjs";
import { zimbraDeviceAllowedPasscodeLockoutDuration } from "../LdapZimbra/zimbraDeviceAllowedPasscodeLockoutDuration.oa.mjs";
import { zimbraDeviceCalendarSoftDeleteExcludePattern } from "../LdapZimbra/zimbraDeviceCalendarSoftDeleteExcludePattern.oa.mjs";
import { zimbraDeviceFileOpenWithEnabled } from "../LdapZimbra/zimbraDeviceFileOpenWithEnabled.oa.mjs";
import { zimbraDeviceLockWhenInactive } from "../LdapZimbra/zimbraDeviceLockWhenInactive.oa.mjs";
import { zimbraDeviceOfflineCacheEnabled } from "../LdapZimbra/zimbraDeviceOfflineCacheEnabled.oa.mjs";
import { zimbraDevicePasscodeEnabled } from "../LdapZimbra/zimbraDevicePasscodeEnabled.oa.mjs";
import { zimbraDevicePasscodeLockoutDuration } from "../LdapZimbra/zimbraDevicePasscodeLockoutDuration.oa.mjs";
import { zimbraDomainAdminMaxMailQuota } from "../LdapZimbra/zimbraDomainAdminMaxMailQuota.oa.mjs";
import { zimbraDumpsterEnabled } from "../LdapZimbra/zimbraDumpsterEnabled.oa.mjs";
import { zimbraDumpsterPurgeEnabled } from "../LdapZimbra/zimbraDumpsterPurgeEnabled.oa.mjs";
import { zimbraDumpsterUserVisibleAge } from "../LdapZimbra/zimbraDumpsterUserVisibleAge.oa.mjs";
import { zimbraExcludeFromCMBSearch } from "../LdapZimbra/zimbraExcludeFromCMBSearch.oa.mjs";
import { zimbraExternalAccountDisabledTime } from "../LdapZimbra/zimbraExternalAccountDisabledTime.oa.mjs";
import { zimbraExternalAccountLifetimeAfterDisabled } from "../LdapZimbra/zimbraExternalAccountLifetimeAfterDisabled.oa.mjs";
import { zimbraExternalImapHostname } from "../LdapZimbra/zimbraExternalImapHostname.oa.mjs";
import { zimbraExternalImapPort } from "../LdapZimbra/zimbraExternalImapPort.oa.mjs";
import { zimbraExternalImapSSLHostname } from "../LdapZimbra/zimbraExternalImapSSLHostname.oa.mjs";
import { zimbraExternalImapSSLPort } from "../LdapZimbra/zimbraExternalImapSSLPort.oa.mjs";
import { zimbraExternalPop3Hostname } from "../LdapZimbra/zimbraExternalPop3Hostname.oa.mjs";
import { zimbraExternalPop3Port } from "../LdapZimbra/zimbraExternalPop3Port.oa.mjs";
import { zimbraExternalPop3SSLHostname } from "../LdapZimbra/zimbraExternalPop3SSLHostname.oa.mjs";
import { zimbraExternalPop3SSLPort } from "../LdapZimbra/zimbraExternalPop3SSLPort.oa.mjs";
import { zimbraExternalShareDomainWhitelistEnabled } from "../LdapZimbra/zimbraExternalShareDomainWhitelistEnabled.oa.mjs";
import { zimbraExternalShareLifetime } from "../LdapZimbra/zimbraExternalShareLifetime.oa.mjs";
import { zimbraExternalShareWhitelistDomain } from "../LdapZimbra/zimbraExternalShareWhitelistDomain.oa.mjs";
import { zimbraExternalSharingEnabled } from "../LdapZimbra/zimbraExternalSharingEnabled.oa.mjs";
import { zimbraExternalUserMailAddress } from "../LdapZimbra/zimbraExternalUserMailAddress.oa.mjs";
import { zimbraFeatureAdminMailEnabled } from "../LdapZimbra/zimbraFeatureAdminMailEnabled.oa.mjs";
import { zimbraFeatureAdvancedSearchEnabled } from "../LdapZimbra/zimbraFeatureAdvancedSearchEnabled.oa.mjs";
import { zimbraFeatureAntispamEnabled } from "../LdapZimbra/zimbraFeatureAntispamEnabled.oa.mjs";
import { zimbraFeatureBriefcaseDocsEnabled } from "../LdapZimbra/zimbraFeatureBriefcaseDocsEnabled.oa.mjs";
import { zimbraFeatureBriefcaseSlidesEnabled } from "../LdapZimbra/zimbraFeatureBriefcaseSlidesEnabled.oa.mjs";
import { zimbraFeatureBriefcaseSpreadsheetEnabled } from "../LdapZimbra/zimbraFeatureBriefcaseSpreadsheetEnabled.oa.mjs";
import { zimbraFeatureBriefcasesEnabled } from "../LdapZimbra/zimbraFeatureBriefcasesEnabled.oa.mjs";
import { zimbraFeatureCalendarEnabled } from "../LdapZimbra/zimbraFeatureCalendarEnabled.oa.mjs";
import { zimbraFeatureCalendarReminderDeviceEmailEnabled } from "../LdapZimbra/zimbraFeatureCalendarReminderDeviceEmailEnabled.oa.mjs";
import { zimbraFeatureCalendarUpsellEnabled } from "../LdapZimbra/zimbraFeatureCalendarUpsellEnabled.oa.mjs";
import { zimbraFeatureCalendarUpsellURL } from "../LdapZimbra/zimbraFeatureCalendarUpsellURL.oa.mjs";
import { zimbraFeatureChangePasswordEnabled } from "../LdapZimbra/zimbraFeatureChangePasswordEnabled.oa.mjs";
import { zimbraFeatureComposeInNewWindowEnabled } from "../LdapZimbra/zimbraFeatureComposeInNewWindowEnabled.oa.mjs";
import { zimbraFeatureConfirmationPageEnabled } from "../LdapZimbra/zimbraFeatureConfirmationPageEnabled.oa.mjs";
import { zimbraFeatureContactsDetailedSearchEnabled } from "../LdapZimbra/zimbraFeatureContactsDetailedSearchEnabled.oa.mjs";
import { zimbraFeatureContactsEnabled } from "../LdapZimbra/zimbraFeatureContactsEnabled.oa.mjs";
import { zimbraFeatureContactsUpsellEnabled } from "../LdapZimbra/zimbraFeatureContactsUpsellEnabled.oa.mjs";
import { zimbraFeatureContactsUpsellURL } from "../LdapZimbra/zimbraFeatureContactsUpsellURL.oa.mjs";
import { zimbraFeatureConversationsEnabled } from "../LdapZimbra/zimbraFeatureConversationsEnabled.oa.mjs";
import { zimbraFeatureCrocodocEnabled } from "../LdapZimbra/zimbraFeatureCrocodocEnabled.oa.mjs";
import { zimbraFeatureDiscardInFiltersEnabled } from "../LdapZimbra/zimbraFeatureDiscardInFiltersEnabled.oa.mjs";
import { zimbraFeatureDistributionListExpandMembersEnabled } from "../LdapZimbra/zimbraFeatureDistributionListExpandMembersEnabled.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "../LdapZimbra/zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFeatureEwsEnabled } from "../LdapZimbra/zimbraFeatureEwsEnabled.oa.mjs";
import { zimbraFeatureExportFolderEnabled } from "../LdapZimbra/zimbraFeatureExportFolderEnabled.oa.mjs";
import { zimbraFeatureExternalFeedbackEnabled } from "../LdapZimbra/zimbraFeatureExternalFeedbackEnabled.oa.mjs";
import { zimbraFeatureFiltersEnabled } from "../LdapZimbra/zimbraFeatureFiltersEnabled.oa.mjs";
import { zimbraFeatureFlaggingEnabled } from "../LdapZimbra/zimbraFeatureFlaggingEnabled.oa.mjs";
import { zimbraFeatureFreeBusyViewEnabled } from "../LdapZimbra/zimbraFeatureFreeBusyViewEnabled.oa.mjs";
import { zimbraFeatureFromDisplayEnabled } from "../LdapZimbra/zimbraFeatureFromDisplayEnabled.oa.mjs";
import { zimbraFeatureGalAutoCompleteEnabled } from "../LdapZimbra/zimbraFeatureGalAutoCompleteEnabled.oa.mjs";
import { zimbraFeatureGalEnabled } from "../LdapZimbra/zimbraFeatureGalEnabled.oa.mjs";
import { zimbraFeatureGalSyncEnabled } from "../LdapZimbra/zimbraFeatureGalSyncEnabled.oa.mjs";
import { zimbraFeatureGroupCalendarEnabled } from "../LdapZimbra/zimbraFeatureGroupCalendarEnabled.oa.mjs";
import { zimbraFeatureHtmlComposeEnabled } from "../LdapZimbra/zimbraFeatureHtmlComposeEnabled.oa.mjs";
import { zimbraFeatureIMEnabled } from "../LdapZimbra/zimbraFeatureIMEnabled.oa.mjs";
import { zimbraFeatureIdentitiesEnabled } from "../LdapZimbra/zimbraFeatureIdentitiesEnabled.oa.mjs";
import { zimbraFeatureImapDataSourceEnabled } from "../LdapZimbra/zimbraFeatureImapDataSourceEnabled.oa.mjs";
import { zimbraFeatureImportExportFolderEnabled } from "../LdapZimbra/zimbraFeatureImportExportFolderEnabled.oa.mjs";
import { zimbraFeatureImportFolderEnabled } from "../LdapZimbra/zimbraFeatureImportFolderEnabled.oa.mjs";
import { zimbraFeatureInitialSearchPreferenceEnabled } from "../LdapZimbra/zimbraFeatureInitialSearchPreferenceEnabled.oa.mjs";
import { zimbraFeatureInstantNotify } from "../LdapZimbra/zimbraFeatureInstantNotify.oa.mjs";
import { zimbraFeatureMAPIConnectorEnabled } from "../LdapZimbra/zimbraFeatureMAPIConnectorEnabled.oa.mjs";
import { zimbraFeatureMailEnabled } from "../LdapZimbra/zimbraFeatureMailEnabled.oa.mjs";
import { zimbraFeatureMailForwardingEnabled } from "../LdapZimbra/zimbraFeatureMailForwardingEnabled.oa.mjs";
import { zimbraFeatureMailForwardingInFiltersEnabled } from "../LdapZimbra/zimbraFeatureMailForwardingInFiltersEnabled.oa.mjs";
import { zimbraFeatureMailPollingIntervalPreferenceEnabled } from "../LdapZimbra/zimbraFeatureMailPollingIntervalPreferenceEnabled.oa.mjs";
import { zimbraFeatureMailPriorityEnabled } from "../LdapZimbra/zimbraFeatureMailPriorityEnabled.oa.mjs";
import { zimbraFeatureMailSendLaterEnabled } from "../LdapZimbra/zimbraFeatureMailSendLaterEnabled.oa.mjs";
import { zimbraFeatureMailUpsellEnabled } from "../LdapZimbra/zimbraFeatureMailUpsellEnabled.oa.mjs";
import { zimbraFeatureMailUpsellURL } from "../LdapZimbra/zimbraFeatureMailUpsellURL.oa.mjs";
import { zimbraFeatureManageSMIMECertificateEnabled } from "../LdapZimbra/zimbraFeatureManageSMIMECertificateEnabled.oa.mjs";
import { zimbraFeatureManageZimlets } from "../LdapZimbra/zimbraFeatureManageZimlets.oa.mjs";
import { zimbraFeatureMobilePolicyEnabled } from "../LdapZimbra/zimbraFeatureMobilePolicyEnabled.oa.mjs";
import { zimbraFeatureMobileSyncEnabled } from "../LdapZimbra/zimbraFeatureMobileSyncEnabled.oa.mjs";
import { zimbraFeatureNewAddrBookEnabled } from "../LdapZimbra/zimbraFeatureNewAddrBookEnabled.oa.mjs";
import { zimbraFeatureNewMailNotificationEnabled } from "../LdapZimbra/zimbraFeatureNewMailNotificationEnabled.oa.mjs";
import { zimbraFeatureNotebookEnabled } from "../LdapZimbra/zimbraFeatureNotebookEnabled.oa.mjs";
import { zimbraFeatureOpenMailInNewWindowEnabled } from "../LdapZimbra/zimbraFeatureOpenMailInNewWindowEnabled.oa.mjs";
import { zimbraFeatureOptionsEnabled } from "../LdapZimbra/zimbraFeatureOptionsEnabled.oa.mjs";
import { zimbraFeatureOutOfOfficeReplyEnabled } from "../LdapZimbra/zimbraFeatureOutOfOfficeReplyEnabled.oa.mjs";
import { zimbraFeaturePeopleSearchEnabled } from "../LdapZimbra/zimbraFeaturePeopleSearchEnabled.oa.mjs";
import { zimbraFeaturePop3DataSourceEnabled } from "../LdapZimbra/zimbraFeaturePop3DataSourceEnabled.oa.mjs";
import { zimbraFeaturePortalEnabled } from "../LdapZimbra/zimbraFeaturePortalEnabled.oa.mjs";
import { zimbraFeaturePriorityInboxEnabled } from "../LdapZimbra/zimbraFeaturePriorityInboxEnabled.oa.mjs";
import { zimbraFeatureReadReceiptsEnabled } from "../LdapZimbra/zimbraFeatureReadReceiptsEnabled.oa.mjs";
import { zimbraFeatureSMIMEEnabled } from "../LdapZimbra/zimbraFeatureSMIMEEnabled.oa.mjs";
import { zimbraFeatureSavedSearchesEnabled } from "../LdapZimbra/zimbraFeatureSavedSearchesEnabled.oa.mjs";
import { zimbraFeatureSharingEnabled } from "../LdapZimbra/zimbraFeatureSharingEnabled.oa.mjs";
import { zimbraFeatureShortcutAliasesEnabled } from "../LdapZimbra/zimbraFeatureShortcutAliasesEnabled.oa.mjs";
import { zimbraFeatureSignaturesEnabled } from "../LdapZimbra/zimbraFeatureSignaturesEnabled.oa.mjs";
import { zimbraFeatureSkinChangeEnabled } from "../LdapZimbra/zimbraFeatureSkinChangeEnabled.oa.mjs";
import { zimbraFeatureSocialEnabled } from "../LdapZimbra/zimbraFeatureSocialEnabled.oa.mjs";
import { zimbraFeatureSocialExternalEnabled } from "../LdapZimbra/zimbraFeatureSocialExternalEnabled.oa.mjs";
import { zimbraFeatureSocialExternalURL } from "../LdapZimbra/zimbraFeatureSocialExternalURL.oa.mjs";
import { zimbraFeatureSocialFiltersEnabled } from "../LdapZimbra/zimbraFeatureSocialFiltersEnabled.oa.mjs";
import { zimbraFeatureSocialName } from "../LdapZimbra/zimbraFeatureSocialName.oa.mjs";
import { zimbraFeatureSocialcastEnabled } from "../LdapZimbra/zimbraFeatureSocialcastEnabled.oa.mjs";
import { zimbraFeatureTaggingEnabled } from "../LdapZimbra/zimbraFeatureTaggingEnabled.oa.mjs";
import { zimbraFeatureTasksEnabled } from "../LdapZimbra/zimbraFeatureTasksEnabled.oa.mjs";
import { zimbraFeatureTouchClientEnabled } from "../LdapZimbra/zimbraFeatureTouchClientEnabled.oa.mjs";
import { zimbraFeatureViewInHtmlEnabled } from "../LdapZimbra/zimbraFeatureViewInHtmlEnabled.oa.mjs";
import { zimbraFeatureVoiceChangePinEnabled } from "../LdapZimbra/zimbraFeatureVoiceChangePinEnabled.oa.mjs";
import { zimbraFeatureVoiceEnabled } from "../LdapZimbra/zimbraFeatureVoiceEnabled.oa.mjs";
import { zimbraFeatureVoiceUpsellEnabled } from "../LdapZimbra/zimbraFeatureVoiceUpsellEnabled.oa.mjs";
import { zimbraFeatureVoiceUpsellURL } from "../LdapZimbra/zimbraFeatureVoiceUpsellURL.oa.mjs";
import { zimbraFeatureWebClientOfflineAccessEnabled } from "../LdapZimbra/zimbraFeatureWebClientOfflineAccessEnabled.oa.mjs";
import { zimbraFeatureWebSearchEnabled } from "../LdapZimbra/zimbraFeatureWebSearchEnabled.oa.mjs";
import { zimbraFeatureZimbraAssistantEnabled } from "../LdapZimbra/zimbraFeatureZimbraAssistantEnabled.oa.mjs";
import { zimbraFileAndroidCrashReportingEnabled } from "../LdapZimbra/zimbraFileAndroidCrashReportingEnabled.oa.mjs";
import { zimbraFileDeletionNotificationBody } from "../LdapZimbra/zimbraFileDeletionNotificationBody.oa.mjs";
import { zimbraFileDeletionNotificationSubject } from "../LdapZimbra/zimbraFileDeletionNotificationSubject.oa.mjs";
import { zimbraFileExpirationWarningBody } from "../LdapZimbra/zimbraFileExpirationWarningBody.oa.mjs";
import { zimbraFileExpirationWarningSubject } from "../LdapZimbra/zimbraFileExpirationWarningSubject.oa.mjs";
import { zimbraFileExpirationWarningThreshold } from "../LdapZimbra/zimbraFileExpirationWarningThreshold.oa.mjs";
import { zimbraFileExternalShareLifetime } from "../LdapZimbra/zimbraFileExternalShareLifetime.oa.mjs";
import { zimbraFileIOSCrashReportingEnabled } from "../LdapZimbra/zimbraFileIOSCrashReportingEnabled.oa.mjs";
import { zimbraFileLifetime } from "../LdapZimbra/zimbraFileLifetime.oa.mjs";
import { zimbraFilePreviewMaxSize } from "../LdapZimbra/zimbraFilePreviewMaxSize.oa.mjs";
import { zimbraFilePublicShareLifetime } from "../LdapZimbra/zimbraFilePublicShareLifetime.oa.mjs";
import { zimbraFileShareLifetime } from "../LdapZimbra/zimbraFileShareLifetime.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "../LdapZimbra/zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraFileVersionLifetime } from "../LdapZimbra/zimbraFileVersionLifetime.oa.mjs";
import { zimbraFileVersioningEnabled } from "../LdapZimbra/zimbraFileVersioningEnabled.oa.mjs";
import { zimbraFilterBatchSize } from "../LdapZimbra/zimbraFilterBatchSize.oa.mjs";
import { zimbraFilterSleepInterval } from "../LdapZimbra/zimbraFilterSleepInterval.oa.mjs";
import { zimbraForceClearCookies } from "../LdapZimbra/zimbraForceClearCookies.oa.mjs";
import { zimbraForeignPrincipal } from "../LdapZimbra/zimbraForeignPrincipal.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "../LdapZimbra/zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "../LdapZimbra/zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "../LdapZimbra/zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "../LdapZimbra/zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "../LdapZimbra/zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeURL } from "../LdapZimbra/zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "../LdapZimbra/zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraFreebusyLocalMailboxNotActive } from "../LdapZimbra/zimbraFreebusyLocalMailboxNotActive.oa.mjs";
import { zimbraGalSyncAccountBasedAutoCompleteEnabled } from "../LdapZimbra/zimbraGalSyncAccountBasedAutoCompleteEnabled.oa.mjs";
import { zimbraIMAvailableInteropGateways } from "../LdapZimbra/zimbraIMAvailableInteropGateways.oa.mjs";
import { zimbraIMService } from "../LdapZimbra/zimbraIMService.oa.mjs";
import { zimbraIdentityMaxNumEntries } from "../LdapZimbra/zimbraIdentityMaxNumEntries.oa.mjs";
import { zimbraImapEnabled } from "../LdapZimbra/zimbraImapEnabled.oa.mjs";
import { zimbraInterceptAddress } from "../LdapZimbra/zimbraInterceptAddress.oa.mjs";
import { zimbraInterceptBody } from "../LdapZimbra/zimbraInterceptBody.oa.mjs";
import { zimbraInterceptFrom } from "../LdapZimbra/zimbraInterceptFrom.oa.mjs";
import { zimbraInterceptSendHeadersOnly } from "../LdapZimbra/zimbraInterceptSendHeadersOnly.oa.mjs";
import { zimbraInterceptSubject } from "../LdapZimbra/zimbraInterceptSubject.oa.mjs";
import { zimbraInternalSendersDomain } from "../LdapZimbra/zimbraInternalSendersDomain.oa.mjs";
import { zimbraIsAdminAccount } from "../LdapZimbra/zimbraIsAdminAccount.oa.mjs";
import { zimbraIsCustomerCareAccount } from "../LdapZimbra/zimbraIsCustomerCareAccount.oa.mjs";
import { zimbraIsDelegatedAdminAccount } from "../LdapZimbra/zimbraIsDelegatedAdminAccount.oa.mjs";
import { zimbraIsDomainAdminAccount } from "../LdapZimbra/zimbraIsDomainAdminAccount.oa.mjs";
import { zimbraIsExternalVirtualAccount } from "../LdapZimbra/zimbraIsExternalVirtualAccount.oa.mjs";
import { zimbraIsSystemAccount } from "../LdapZimbra/zimbraIsSystemAccount.oa.mjs";
import { zimbraIsSystemResource } from "../LdapZimbra/zimbraIsSystemResource.oa.mjs";
import { zimbraJunkMessagesIndexingEnabled } from "../LdapZimbra/zimbraJunkMessagesIndexingEnabled.oa.mjs";
import { zimbraLastLogonTimestamp } from "../LdapZimbra/zimbraLastLogonTimestamp.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraLogOutFromAllServers } from "../LdapZimbra/zimbraLogOutFromAllServers.oa.mjs";
import { zimbraMailAllowReceiveButNotSendWhenOverQuota } from "../LdapZimbra/zimbraMailAllowReceiveButNotSendWhenOverQuota.oa.mjs";
import { zimbraMailBlacklistMaxNumEntries } from "../LdapZimbra/zimbraMailBlacklistMaxNumEntries.oa.mjs";
import { zimbraMailDumpsterLifetime } from "../LdapZimbra/zimbraMailDumpsterLifetime.oa.mjs";
import { zimbraMailForwardingAddressMaxLength } from "../LdapZimbra/zimbraMailForwardingAddressMaxLength.oa.mjs";
import { zimbraMailForwardingAddressMaxNumAddrs } from "../LdapZimbra/zimbraMailForwardingAddressMaxNumAddrs.oa.mjs";
import { zimbraMailHighlightObjectsMaxSize } from "../LdapZimbra/zimbraMailHighlightObjectsMaxSize.oa.mjs";
import { zimbraMailIdleSessionTimeout } from "../LdapZimbra/zimbraMailIdleSessionTimeout.oa.mjs";
import { zimbraMailMessageLifetime } from "../LdapZimbra/zimbraMailMessageLifetime.oa.mjs";
import { zimbraMailMinPollingInterval } from "../LdapZimbra/zimbraMailMinPollingInterval.oa.mjs";
import { zimbraMailOutgoingSieveScript } from "../LdapZimbra/zimbraMailOutgoingSieveScript.oa.mjs";
import { zimbraMailPurgeUseChangeDateForSpam } from "../LdapZimbra/zimbraMailPurgeUseChangeDateForSpam.oa.mjs";
import { zimbraMailPurgeUseChangeDateForTrash } from "../LdapZimbra/zimbraMailPurgeUseChangeDateForTrash.oa.mjs";
import { zimbraMailQuota } from "../LdapZimbra/zimbraMailQuota.oa.mjs";
import { zimbraMailSieveScript } from "../LdapZimbra/zimbraMailSieveScript.oa.mjs";
import { zimbraMailSignatureMaxLength } from "../LdapZimbra/zimbraMailSignatureMaxLength.oa.mjs";
import { zimbraMailSpamLifetime } from "../LdapZimbra/zimbraMailSpamLifetime.oa.mjs";
import { zimbraMailThreadingAlgorithm } from "../LdapZimbra/zimbraMailThreadingAlgorithm.oa.mjs";
import { zimbraMailTrashLifetime } from "../LdapZimbra/zimbraMailTrashLifetime.oa.mjs";
import { zimbraMailTrustedSenderListMaxNumEntries } from "../LdapZimbra/zimbraMailTrustedSenderListMaxNumEntries.oa.mjs";
import { zimbraMailWhitelistMaxNumEntries } from "../LdapZimbra/zimbraMailWhitelistMaxNumEntries.oa.mjs";
import { zimbraMailboxLocationBeforeMove } from "../LdapZimbra/zimbraMailboxLocationBeforeMove.oa.mjs";
import { zimbraMaxContactsPerPage } from "../LdapZimbra/zimbraMaxContactsPerPage.oa.mjs";
import { zimbraMaxMailItemsPerPage } from "../LdapZimbra/zimbraMaxMailItemsPerPage.oa.mjs";
import { zimbraMaxVoiceItemsPerPage } from "../LdapZimbra/zimbraMaxVoiceItemsPerPage.oa.mjs";
import { zimbraMemberOf } from "../LdapZimbra/zimbraMemberOf.oa.mjs";
import { zimbraMobileAttachSkippedItemEnabled } from "../LdapZimbra/zimbraMobileAttachSkippedItemEnabled.oa.mjs";
import { zimbraMobileForceProtocol25 } from "../LdapZimbra/zimbraMobileForceProtocol25.oa.mjs";
import { zimbraMobileForceSamsungProtocol25 } from "../LdapZimbra/zimbraMobileForceSamsungProtocol25.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "../LdapZimbra/zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "../LdapZimbra/zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMobileNotificationAdminAddress } from "../LdapZimbra/zimbraMobileNotificationAdminAddress.oa.mjs";
import { zimbraMobileNotificationEnabled } from "../LdapZimbra/zimbraMobileNotificationEnabled.oa.mjs";
import { zimbraMobileOutlookSyncEnabled } from "../LdapZimbra/zimbraMobileOutlookSyncEnabled.oa.mjs";
import { zimbraMobilePolicyAllowBluetooth } from "../LdapZimbra/zimbraMobilePolicyAllowBluetooth.oa.mjs";
import { zimbraMobilePolicyAllowBrowser } from "../LdapZimbra/zimbraMobilePolicyAllowBrowser.oa.mjs";
import { zimbraMobilePolicyAllowCamera } from "../LdapZimbra/zimbraMobilePolicyAllowCamera.oa.mjs";
import { zimbraMobilePolicyAllowConsumerEmail } from "../LdapZimbra/zimbraMobilePolicyAllowConsumerEmail.oa.mjs";
import { zimbraMobilePolicyAllowDesktopSync } from "../LdapZimbra/zimbraMobilePolicyAllowDesktopSync.oa.mjs";
import { zimbraMobilePolicyAllowHTMLEmail } from "../LdapZimbra/zimbraMobilePolicyAllowHTMLEmail.oa.mjs";
import { zimbraMobilePolicyAllowInternetSharing } from "../LdapZimbra/zimbraMobilePolicyAllowInternetSharing.oa.mjs";
import { zimbraMobilePolicyAllowIrDA } from "../LdapZimbra/zimbraMobilePolicyAllowIrDA.oa.mjs";
import { zimbraMobilePolicyAllowNonProvisionableDevices } from "../LdapZimbra/zimbraMobilePolicyAllowNonProvisionableDevices.oa.mjs";
import { zimbraMobilePolicyAllowPOPIMAPEmail } from "../LdapZimbra/zimbraMobilePolicyAllowPOPIMAPEmail.oa.mjs";
import { zimbraMobilePolicyAllowPartialProvisioning } from "../LdapZimbra/zimbraMobilePolicyAllowPartialProvisioning.oa.mjs";
import { zimbraMobilePolicyAllowRemoteDesktop } from "../LdapZimbra/zimbraMobilePolicyAllowRemoteDesktop.oa.mjs";
import { zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation } from "../LdapZimbra/zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation.oa.mjs";
import { zimbraMobilePolicyAllowSMIMESoftCerts } from "../LdapZimbra/zimbraMobilePolicyAllowSMIMESoftCerts.oa.mjs";
import { zimbraMobilePolicyAllowSimpleDevicePassword } from "../LdapZimbra/zimbraMobilePolicyAllowSimpleDevicePassword.oa.mjs";
import { zimbraMobilePolicyAllowStorageCard } from "../LdapZimbra/zimbraMobilePolicyAllowStorageCard.oa.mjs";
import { zimbraMobilePolicyAllowTextMessaging } from "../LdapZimbra/zimbraMobilePolicyAllowTextMessaging.oa.mjs";
import { zimbraMobilePolicyAllowUnsignedApplications } from "../LdapZimbra/zimbraMobilePolicyAllowUnsignedApplications.oa.mjs";
import { zimbraMobilePolicyAllowUnsignedInstallationPackages } from "../LdapZimbra/zimbraMobilePolicyAllowUnsignedInstallationPackages.oa.mjs";
import { zimbraMobilePolicyAllowWiFi } from "../LdapZimbra/zimbraMobilePolicyAllowWiFi.oa.mjs";
import { zimbraMobilePolicyAlphanumericDevicePasswordRequired } from "../LdapZimbra/zimbraMobilePolicyAlphanumericDevicePasswordRequired.oa.mjs";
import { zimbraMobilePolicyApprovedApplication } from "../LdapZimbra/zimbraMobilePolicyApprovedApplication.oa.mjs";
import { zimbraMobilePolicyApprovedApplicationList } from "../LdapZimbra/zimbraMobilePolicyApprovedApplicationList.oa.mjs";
import { zimbraMobilePolicyDeviceEncryptionEnabled } from "../LdapZimbra/zimbraMobilePolicyDeviceEncryptionEnabled.oa.mjs";
import { zimbraMobilePolicyDevicePasswordEnabled } from "../LdapZimbra/zimbraMobilePolicyDevicePasswordEnabled.oa.mjs";
import { zimbraMobilePolicyDevicePasswordExpiration } from "../LdapZimbra/zimbraMobilePolicyDevicePasswordExpiration.oa.mjs";
import { zimbraMobilePolicyDevicePasswordHistory } from "../LdapZimbra/zimbraMobilePolicyDevicePasswordHistory.oa.mjs";
import { zimbraMobilePolicyMaxCalendarAgeFilter } from "../LdapZimbra/zimbraMobilePolicyMaxCalendarAgeFilter.oa.mjs";
import { zimbraMobilePolicyMaxDevicePasswordFailedAttempts } from "../LdapZimbra/zimbraMobilePolicyMaxDevicePasswordFailedAttempts.oa.mjs";
import { zimbraMobilePolicyMaxEmailAgeFilter } from "../LdapZimbra/zimbraMobilePolicyMaxEmailAgeFilter.oa.mjs";
import { zimbraMobilePolicyMaxEmailBodyTruncationSize } from "../LdapZimbra/zimbraMobilePolicyMaxEmailBodyTruncationSize.oa.mjs";
import { zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize } from "../LdapZimbra/zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize.oa.mjs";
import { zimbraMobilePolicyMaxInactivityTimeDeviceLock } from "../LdapZimbra/zimbraMobilePolicyMaxInactivityTimeDeviceLock.oa.mjs";
import { zimbraMobilePolicyMinDevicePasswordComplexCharacters } from "../LdapZimbra/zimbraMobilePolicyMinDevicePasswordComplexCharacters.oa.mjs";
import { zimbraMobilePolicyMinDevicePasswordLength } from "../LdapZimbra/zimbraMobilePolicyMinDevicePasswordLength.oa.mjs";
import { zimbraMobilePolicyPasswordRecoveryEnabled } from "../LdapZimbra/zimbraMobilePolicyPasswordRecoveryEnabled.oa.mjs";
import { zimbraMobilePolicyRefreshInterval } from "../LdapZimbra/zimbraMobilePolicyRefreshInterval.oa.mjs";
import { zimbraMobilePolicyRequireDeviceEncryption } from "../LdapZimbra/zimbraMobilePolicyRequireDeviceEncryption.oa.mjs";
import { zimbraMobilePolicyRequireEncryptedSMIMEMessages } from "../LdapZimbra/zimbraMobilePolicyRequireEncryptedSMIMEMessages.oa.mjs";
import { zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm } from "../LdapZimbra/zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm.oa.mjs";
import { zimbraMobilePolicyRequireManualSyncWhenRoaming } from "../LdapZimbra/zimbraMobilePolicyRequireManualSyncWhenRoaming.oa.mjs";
import { zimbraMobilePolicyRequireSignedSMIMEAlgorithm } from "../LdapZimbra/zimbraMobilePolicyRequireSignedSMIMEAlgorithm.oa.mjs";
import { zimbraMobilePolicyRequireSignedSMIMEMessages } from "../LdapZimbra/zimbraMobilePolicyRequireSignedSMIMEMessages.oa.mjs";
import { zimbraMobilePolicyRequireStorageCardEncryption } from "../LdapZimbra/zimbraMobilePolicyRequireStorageCardEncryption.oa.mjs";
import { zimbraMobilePolicySuppressDeviceEncryption } from "../LdapZimbra/zimbraMobilePolicySuppressDeviceEncryption.oa.mjs";
import { zimbraMobilePolicyUnapprovedInROMApplication } from "../LdapZimbra/zimbraMobilePolicyUnapprovedInROMApplication.oa.mjs";
import { zimbraMobileShareContactEnabled } from "../LdapZimbra/zimbraMobileShareContactEnabled.oa.mjs";
import { zimbraMobileSmartForwardRFC822Enabled } from "../LdapZimbra/zimbraMobileSmartForwardRFC822Enabled.oa.mjs";
import { zimbraMobileSyncKeyFormatConvertedFolders } from "../LdapZimbra/zimbraMobileSyncKeyFormatConvertedFolders.oa.mjs";
import { zimbraMobileSyncRedoMaxAttempts } from "../LdapZimbra/zimbraMobileSyncRedoMaxAttempts.oa.mjs";
import { zimbraMobileTombstoneEnabled } from "../LdapZimbra/zimbraMobileTombstoneEnabled.oa.mjs";
import { zimbraNewMailNotificationBody } from "../LdapZimbra/zimbraNewMailNotificationBody.oa.mjs";
import { zimbraNewMailNotificationFrom } from "../LdapZimbra/zimbraNewMailNotificationFrom.oa.mjs";
import { zimbraNewMailNotificationSubject } from "../LdapZimbra/zimbraNewMailNotificationSubject.oa.mjs";
import { zimbraNotebookMaxRevisions } from "../LdapZimbra/zimbraNotebookMaxRevisions.oa.mjs";
import { zimbraNotebookSanitizeHtml } from "../LdapZimbra/zimbraNotebookSanitizeHtml.oa.mjs";
import { zimbraNotes } from "../LdapZimbra/zimbraNotes.oa.mjs";
import { zimbraPasswordAllowedChars } from "../LdapZimbra/zimbraPasswordAllowedChars.oa.mjs";
import { zimbraPasswordAllowedPunctuationChars } from "../LdapZimbra/zimbraPasswordAllowedPunctuationChars.oa.mjs";
import { zimbraPasswordEnforceHistory } from "../LdapZimbra/zimbraPasswordEnforceHistory.oa.mjs";
import { zimbraPasswordHistory } from "../LdapZimbra/zimbraPasswordHistory.oa.mjs";
import { zimbraPasswordLocked } from "../LdapZimbra/zimbraPasswordLocked.oa.mjs";
import { zimbraPasswordLockoutDuration } from "../LdapZimbra/zimbraPasswordLockoutDuration.oa.mjs";
import { zimbraPasswordLockoutEnabled } from "../LdapZimbra/zimbraPasswordLockoutEnabled.oa.mjs";
import { zimbraPasswordLockoutFailureLifetime } from "../LdapZimbra/zimbraPasswordLockoutFailureLifetime.oa.mjs";
import { zimbraPasswordLockoutFailureTime } from "../LdapZimbra/zimbraPasswordLockoutFailureTime.oa.mjs";
import { zimbraPasswordLockoutLockedTime } from "../LdapZimbra/zimbraPasswordLockoutLockedTime.oa.mjs";
import { zimbraPasswordLockoutMaxFailures } from "../LdapZimbra/zimbraPasswordLockoutMaxFailures.oa.mjs";
import { zimbraPasswordMaxAge } from "../LdapZimbra/zimbraPasswordMaxAge.oa.mjs";
import { zimbraPasswordMaxLength } from "../LdapZimbra/zimbraPasswordMaxLength.oa.mjs";
import { zimbraPasswordMinAge } from "../LdapZimbra/zimbraPasswordMinAge.oa.mjs";
import { zimbraPasswordMinAlphaChars } from "../LdapZimbra/zimbraPasswordMinAlphaChars.oa.mjs";
import { zimbraPasswordMinDigitsOrPuncs } from "../LdapZimbra/zimbraPasswordMinDigitsOrPuncs.oa.mjs";
import { zimbraPasswordMinLength } from "../LdapZimbra/zimbraPasswordMinLength.oa.mjs";
import { zimbraPasswordMinLowerCaseChars } from "../LdapZimbra/zimbraPasswordMinLowerCaseChars.oa.mjs";
import { zimbraPasswordMinNumericChars } from "../LdapZimbra/zimbraPasswordMinNumericChars.oa.mjs";
import { zimbraPasswordMinPunctuationChars } from "../LdapZimbra/zimbraPasswordMinPunctuationChars.oa.mjs";
import { zimbraPasswordMinUpperCaseChars } from "../LdapZimbra/zimbraPasswordMinUpperCaseChars.oa.mjs";
import { zimbraPasswordModifiedTime } from "../LdapZimbra/zimbraPasswordModifiedTime.oa.mjs";
import { zimbraPasswordMustChange } from "../LdapZimbra/zimbraPasswordMustChange.oa.mjs";
import { zimbraPhoneticCompany } from "../LdapZimbra/zimbraPhoneticCompany.oa.mjs";
import { zimbraPhoneticFirstName } from "../LdapZimbra/zimbraPhoneticFirstName.oa.mjs";
import { zimbraPhoneticLastName } from "../LdapZimbra/zimbraPhoneticLastName.oa.mjs";
import { zimbraPop3Enabled } from "../LdapZimbra/zimbraPop3Enabled.oa.mjs";
import { zimbraPortalName } from "../LdapZimbra/zimbraPortalName.oa.mjs";
import { zimbraPrefAccountTreeOpen } from "../LdapZimbra/zimbraPrefAccountTreeOpen.oa.mjs";
import { zimbraPrefAdminConsoleWarnOnExit } from "../LdapZimbra/zimbraPrefAdminConsoleWarnOnExit.oa.mjs";
import { zimbraPrefAdvancedClientEnforceMinDisplay } from "../LdapZimbra/zimbraPrefAdvancedClientEnforceMinDisplay.oa.mjs";
import { zimbraPrefAllowAddressForDelegatedSender } from "../LdapZimbra/zimbraPrefAllowAddressForDelegatedSender.oa.mjs";
import { zimbraPrefAppleIcalDelegationEnabled } from "../LdapZimbra/zimbraPrefAppleIcalDelegationEnabled.oa.mjs";
import { zimbraPrefAutoAddAddressEnabled } from "../LdapZimbra/zimbraPrefAutoAddAddressEnabled.oa.mjs";
import { zimbraPrefAutoCompleteQuickCompletionOnComma } from "../LdapZimbra/zimbraPrefAutoCompleteQuickCompletionOnComma.oa.mjs";
import { zimbraPrefAutoSaveDraftInterval } from "../LdapZimbra/zimbraPrefAutoSaveDraftInterval.oa.mjs";
import { zimbraPrefAutocompleteAddressBubblesEnabled } from "../LdapZimbra/zimbraPrefAutocompleteAddressBubblesEnabled.oa.mjs";
import { zimbraPrefBccAddress } from "../LdapZimbra/zimbraPrefBccAddress.oa.mjs";
import { zimbraPrefBriefcaseReadingPaneLocation } from "../LdapZimbra/zimbraPrefBriefcaseReadingPaneLocation.oa.mjs";
import { zimbraPrefCalendarAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAllowCancelEmailToSelf } from "../LdapZimbra/zimbraPrefCalendarAllowCancelEmailToSelf.oa.mjs";
import { zimbraPrefCalendarAllowForwardedInvite } from "../LdapZimbra/zimbraPrefCalendarAllowForwardedInvite.oa.mjs";
import { zimbraPrefCalendarAllowPublishMethodInvite } from "../LdapZimbra/zimbraPrefCalendarAllowPublishMethodInvite.oa.mjs";
import { zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "../LdapZimbra/zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarAlwaysShowMiniCal } from "../LdapZimbra/zimbraPrefCalendarAlwaysShowMiniCal.oa.mjs";
import { zimbraPrefCalendarApptAllowAtendeeEdit } from "../LdapZimbra/zimbraPrefCalendarApptAllowAtendeeEdit.oa.mjs";
import { zimbraPrefCalendarApptReminderWarningTime } from "../LdapZimbra/zimbraPrefCalendarApptReminderWarningTime.oa.mjs";
import { zimbraPrefCalendarApptVisibility } from "../LdapZimbra/zimbraPrefCalendarApptVisibility.oa.mjs";
import { zimbraPrefCalendarAutoAcceptSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoAcceptSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoAddInvites } from "../LdapZimbra/zimbraPrefCalendarAutoAddInvites.oa.mjs";
import { zimbraPrefCalendarAutoDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarAutoDenySignatureId } from "../LdapZimbra/zimbraPrefCalendarAutoDenySignatureId.oa.mjs";
import { zimbraPrefCalendarDayHourEnd } from "../LdapZimbra/zimbraPrefCalendarDayHourEnd.oa.mjs";
import { zimbraPrefCalendarDayHourStart } from "../LdapZimbra/zimbraPrefCalendarDayHourStart.oa.mjs";
import { zimbraPrefCalendarDeclineSignatureId } from "../LdapZimbra/zimbraPrefCalendarDeclineSignatureId.oa.mjs";
import { zimbraPrefCalendarDefaultApptDuration } from "../LdapZimbra/zimbraPrefCalendarDefaultApptDuration.oa.mjs";
import { zimbraPrefCalendarFirstDayOfWeek } from "../LdapZimbra/zimbraPrefCalendarFirstDayOfWeek.oa.mjs";
import { zimbraPrefCalendarForwardInvitesTo } from "../LdapZimbra/zimbraPrefCalendarForwardInvitesTo.oa.mjs";
import { zimbraPrefCalendarInitialCheckedCalendars } from "../LdapZimbra/zimbraPrefCalendarInitialCheckedCalendars.oa.mjs";
import { zimbraPrefCalendarInitialView } from "../LdapZimbra/zimbraPrefCalendarInitialView.oa.mjs";
import { zimbraPrefCalendarNotifyDelegatedChanges } from "../LdapZimbra/zimbraPrefCalendarNotifyDelegatedChanges.oa.mjs";
import { zimbraPrefCalendarReminderDeviceInfo } from "../LdapZimbra/zimbraPrefCalendarReminderDeviceInfo.oa.mjs";
import { zimbraPrefCalendarReminderDuration1 } from "../LdapZimbra/zimbraPrefCalendarReminderDuration1.oa.mjs";
import { zimbraPrefCalendarReminderDuration2 } from "../LdapZimbra/zimbraPrefCalendarReminderDuration2.oa.mjs";
import { zimbraPrefCalendarReminderEmail } from "../LdapZimbra/zimbraPrefCalendarReminderEmail.oa.mjs";
import { zimbraPrefCalendarReminderFlashTitle } from "../LdapZimbra/zimbraPrefCalendarReminderFlashTitle.oa.mjs";
import { zimbraPrefCalendarReminderMobile } from "../LdapZimbra/zimbraPrefCalendarReminderMobile.oa.mjs";
import { zimbraPrefCalendarReminderSendEmail } from "../LdapZimbra/zimbraPrefCalendarReminderSendEmail.oa.mjs";
import { zimbraPrefCalendarReminderSoundsEnabled } from "../LdapZimbra/zimbraPrefCalendarReminderSoundsEnabled.oa.mjs";
import { zimbraPrefCalendarReminderYMessenger } from "../LdapZimbra/zimbraPrefCalendarReminderYMessenger.oa.mjs";
import { zimbraPrefCalendarSendInviteDeniedAutoReply } from "../LdapZimbra/zimbraPrefCalendarSendInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarShowDeclinedMeetings } from "../LdapZimbra/zimbraPrefCalendarShowDeclinedMeetings.oa.mjs";
import { zimbraPrefCalendarShowPastDueReminders } from "../LdapZimbra/zimbraPrefCalendarShowPastDueReminders.oa.mjs";
import { zimbraPrefCalendarTentativeSignatureId } from "../LdapZimbra/zimbraPrefCalendarTentativeSignatureId.oa.mjs";
import { zimbraPrefCalendarToasterEnabled } from "../LdapZimbra/zimbraPrefCalendarToasterEnabled.oa.mjs";
import { zimbraPrefCalendarUseQuickAdd } from "../LdapZimbra/zimbraPrefCalendarUseQuickAdd.oa.mjs";
import { zimbraPrefCalendarViewTimeInterval } from "../LdapZimbra/zimbraPrefCalendarViewTimeInterval.oa.mjs";
import { zimbraPrefCalendarWorkingHours } from "../LdapZimbra/zimbraPrefCalendarWorkingHours.oa.mjs";
import { zimbraPrefChildVisibleAccount } from "../LdapZimbra/zimbraPrefChildVisibleAccount.oa.mjs";
import { zimbraPrefClientType } from "../LdapZimbra/zimbraPrefClientType.oa.mjs";
import { zimbraPrefColorMessagesEnabled } from "../LdapZimbra/zimbraPrefColorMessagesEnabled.oa.mjs";
import { zimbraPrefComposeDirection } from "../LdapZimbra/zimbraPrefComposeDirection.oa.mjs";
import { zimbraPrefComposeFormat } from "../LdapZimbra/zimbraPrefComposeFormat.oa.mjs";
import { zimbraPrefComposeInNewWindow } from "../LdapZimbra/zimbraPrefComposeInNewWindow.oa.mjs";
import { zimbraPrefContactsDisableAutocompleteOnContactGroupMembers } from "../LdapZimbra/zimbraPrefContactsDisableAutocompleteOnContactGroupMembers.oa.mjs";
import { zimbraPrefContactsExpandAppleContactGroups } from "../LdapZimbra/zimbraPrefContactsExpandAppleContactGroups.oa.mjs";
import { zimbraPrefContactsInitialView } from "../LdapZimbra/zimbraPrefContactsInitialView.oa.mjs";
import { zimbraPrefContactsPerPage } from "../LdapZimbra/zimbraPrefContactsPerPage.oa.mjs";
import { zimbraPrefConvReadingPaneLocation } from "../LdapZimbra/zimbraPrefConvReadingPaneLocation.oa.mjs";
import { zimbraPrefConvShowCalendar } from "../LdapZimbra/zimbraPrefConvShowCalendar.oa.mjs";
import { zimbraPrefConversationOrder } from "../LdapZimbra/zimbraPrefConversationOrder.oa.mjs";
import { zimbraPrefDedupeMessagesSentToSelf } from "../LdapZimbra/zimbraPrefDedupeMessagesSentToSelf.oa.mjs";
import { zimbraPrefDefaultPrintFontSize } from "../LdapZimbra/zimbraPrefDefaultPrintFontSize.oa.mjs";
import { zimbraPrefDefaultSignatureId } from "../LdapZimbra/zimbraPrefDefaultSignatureId.oa.mjs";
import { zimbraPrefDelegatedSendSaveTarget } from "../LdapZimbra/zimbraPrefDelegatedSendSaveTarget.oa.mjs";
import { zimbraPrefDeleteInviteOnReply } from "../LdapZimbra/zimbraPrefDeleteInviteOnReply.oa.mjs";
import { zimbraPrefDisabledZimlets } from "../LdapZimbra/zimbraPrefDisabledZimlets.oa.mjs";
import { zimbraPrefDisplayExternalImages } from "../LdapZimbra/zimbraPrefDisplayExternalImages.oa.mjs";
import { zimbraPrefExternalSendersType } from "../LdapZimbra/zimbraPrefExternalSendersType.oa.mjs";
import { zimbraPrefFileSharingApplication } from "../LdapZimbra/zimbraPrefFileSharingApplication.oa.mjs";
import { zimbraPrefFolderColorEnabled } from "../LdapZimbra/zimbraPrefFolderColorEnabled.oa.mjs";
import { zimbraPrefFolderTreeOpen } from "../LdapZimbra/zimbraPrefFolderTreeOpen.oa.mjs";
import { zimbraPrefFont } from "../LdapZimbra/zimbraPrefFont.oa.mjs";
import { zimbraPrefFontSize } from "../LdapZimbra/zimbraPrefFontSize.oa.mjs";
import { zimbraPrefForwardIncludeOriginalText } from "../LdapZimbra/zimbraPrefForwardIncludeOriginalText.oa.mjs";
import { zimbraPrefForwardReplyFormat } from "../LdapZimbra/zimbraPrefForwardReplyFormat.oa.mjs";
import { zimbraPrefForwardReplyInOriginalFormat } from "../LdapZimbra/zimbraPrefForwardReplyInOriginalFormat.oa.mjs";
import { zimbraPrefForwardReplyPrefixChar } from "../LdapZimbra/zimbraPrefForwardReplyPrefixChar.oa.mjs";
import { zimbraPrefForwardReplySignatureId } from "../LdapZimbra/zimbraPrefForwardReplySignatureId.oa.mjs";
import { zimbraPrefFromAddress } from "../LdapZimbra/zimbraPrefFromAddress.oa.mjs";
import { zimbraPrefFromAddressType } from "../LdapZimbra/zimbraPrefFromAddressType.oa.mjs";
import { zimbraPrefFromDisplay } from "../LdapZimbra/zimbraPrefFromDisplay.oa.mjs";
import { zimbraPrefGalAutoCompleteEnabled } from "../LdapZimbra/zimbraPrefGalAutoCompleteEnabled.oa.mjs";
import { zimbraPrefGalSearchEnabled } from "../LdapZimbra/zimbraPrefGalSearchEnabled.oa.mjs";
import { zimbraPrefGetMailAction } from "../LdapZimbra/zimbraPrefGetMailAction.oa.mjs";
import { zimbraPrefGroupMailBy } from "../LdapZimbra/zimbraPrefGroupMailBy.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontColor } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontColor.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontFamily } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontFamily.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontSize } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontSize.oa.mjs";
import { zimbraPrefIMAutoLogin } from "../LdapZimbra/zimbraPrefIMAutoLogin.oa.mjs";
import { zimbraPrefIMBuddyListSort } from "../LdapZimbra/zimbraPrefIMBuddyListSort.oa.mjs";
import { zimbraPrefIMCustomStatusMessage } from "../LdapZimbra/zimbraPrefIMCustomStatusMessage.oa.mjs";
import { zimbraPrefIMFlashIcon } from "../LdapZimbra/zimbraPrefIMFlashIcon.oa.mjs";
import { zimbraPrefIMFlashTitle } from "../LdapZimbra/zimbraPrefIMFlashTitle.oa.mjs";
import { zimbraPrefIMHideBlockedBuddies } from "../LdapZimbra/zimbraPrefIMHideBlockedBuddies.oa.mjs";
import { zimbraPrefIMHideOfflineBuddies } from "../LdapZimbra/zimbraPrefIMHideOfflineBuddies.oa.mjs";
import { zimbraPrefIMIdleStatus } from "../LdapZimbra/zimbraPrefIMIdleStatus.oa.mjs";
import { zimbraPrefIMIdleTimeout } from "../LdapZimbra/zimbraPrefIMIdleTimeout.oa.mjs";
import { zimbraPrefIMInstantNotify } from "../LdapZimbra/zimbraPrefIMInstantNotify.oa.mjs";
import { zimbraPrefIMLogChats } from "../LdapZimbra/zimbraPrefIMLogChats.oa.mjs";
import { zimbraPrefIMLogChatsEnabled } from "../LdapZimbra/zimbraPrefIMLogChatsEnabled.oa.mjs";
import { zimbraPrefIMNotifyPresence } from "../LdapZimbra/zimbraPrefIMNotifyPresence.oa.mjs";
import { zimbraPrefIMNotifyStatus } from "../LdapZimbra/zimbraPrefIMNotifyStatus.oa.mjs";
import { zimbraPrefIMReportIdle } from "../LdapZimbra/zimbraPrefIMReportIdle.oa.mjs";
import { zimbraPrefIMSoundsEnabled } from "../LdapZimbra/zimbraPrefIMSoundsEnabled.oa.mjs";
import { zimbraPrefIMToasterEnabled } from "../LdapZimbra/zimbraPrefIMToasterEnabled.oa.mjs";
import { zimbraPrefIMYahooId } from "../LdapZimbra/zimbraPrefIMYahooId.oa.mjs";
import { zimbraPrefIdentityName } from "../LdapZimbra/zimbraPrefIdentityName.oa.mjs";
import { zimbraPrefImapSearchFoldersEnabled } from "../LdapZimbra/zimbraPrefImapSearchFoldersEnabled.oa.mjs";
import { zimbraPrefInboxReadLifetime } from "../LdapZimbra/zimbraPrefInboxReadLifetime.oa.mjs";
import { zimbraPrefInboxUnreadLifetime } from "../LdapZimbra/zimbraPrefInboxUnreadLifetime.oa.mjs";
import { zimbraPrefIncludeSharedItemsInSearch } from "../LdapZimbra/zimbraPrefIncludeSharedItemsInSearch.oa.mjs";
import { zimbraPrefIncludeSpamInSearch } from "../LdapZimbra/zimbraPrefIncludeSpamInSearch.oa.mjs";
import { zimbraPrefIncludeTrashInSearch } from "../LdapZimbra/zimbraPrefIncludeTrashInSearch.oa.mjs";
import { zimbraPrefItemsPerVirtualPage } from "../LdapZimbra/zimbraPrefItemsPerVirtualPage.oa.mjs";
import { zimbraPrefJunkLifetime } from "../LdapZimbra/zimbraPrefJunkLifetime.oa.mjs";
import { zimbraPrefLabel } from "../LdapZimbra/zimbraPrefLabel.oa.mjs";
import { zimbraPrefListViewColumns } from "../LdapZimbra/zimbraPrefListViewColumns.oa.mjs";
import { zimbraPrefLocale } from "../LdapZimbra/zimbraPrefLocale.oa.mjs";
import { zimbraPrefMailDefaultCharset } from "../LdapZimbra/zimbraPrefMailDefaultCharset.oa.mjs";
import { zimbraPrefMailFlashIcon } from "../LdapZimbra/zimbraPrefMailFlashIcon.oa.mjs";
import { zimbraPrefMailFlashTitle } from "../LdapZimbra/zimbraPrefMailFlashTitle.oa.mjs";
import { zimbraPrefMailFoldersCheckedForNewMsgIndicator } from "../LdapZimbra/zimbraPrefMailFoldersCheckedForNewMsgIndicator.oa.mjs";
import { zimbraPrefMailForwardingAddress } from "../LdapZimbra/zimbraPrefMailForwardingAddress.oa.mjs";
import { zimbraPrefMailInitialSearch } from "../LdapZimbra/zimbraPrefMailInitialSearch.oa.mjs";
import { zimbraPrefMailItemsPerPage } from "../LdapZimbra/zimbraPrefMailItemsPerPage.oa.mjs";
import { zimbraPrefMailLocalDeliveryDisabled } from "../LdapZimbra/zimbraPrefMailLocalDeliveryDisabled.oa.mjs";
import { zimbraPrefMailPollingInterval } from "../LdapZimbra/zimbraPrefMailPollingInterval.oa.mjs";
import { zimbraPrefMailRequestReadReceipts } from "../LdapZimbra/zimbraPrefMailRequestReadReceipts.oa.mjs";
import { zimbraPrefMailSMIMECertificate } from "../LdapZimbra/zimbraPrefMailSMIMECertificate.oa.mjs";
import { zimbraPrefMailSelectAfterDelete } from "../LdapZimbra/zimbraPrefMailSelectAfterDelete.oa.mjs";
import { zimbraPrefMailSendReadReceipts } from "../LdapZimbra/zimbraPrefMailSendReadReceipts.oa.mjs";
import { zimbraPrefMailSignature } from "../LdapZimbra/zimbraPrefMailSignature.oa.mjs";
import { zimbraPrefMailSignatureContactId } from "../LdapZimbra/zimbraPrefMailSignatureContactId.oa.mjs";
import { zimbraPrefMailSignatureEnabled } from "../LdapZimbra/zimbraPrefMailSignatureEnabled.oa.mjs";
import { zimbraPrefMailSignatureHTML } from "../LdapZimbra/zimbraPrefMailSignatureHTML.oa.mjs";
import { zimbraPrefMailSignatureStyle } from "../LdapZimbra/zimbraPrefMailSignatureStyle.oa.mjs";
import { zimbraPrefMailSoundsEnabled } from "../LdapZimbra/zimbraPrefMailSoundsEnabled.oa.mjs";
import { zimbraPrefMailToasterEnabled } from "../LdapZimbra/zimbraPrefMailToasterEnabled.oa.mjs";
import { zimbraPrefMailTrustedSenderList } from "../LdapZimbra/zimbraPrefMailTrustedSenderList.oa.mjs";
import { zimbraPrefMandatorySpellCheckEnabled } from "../LdapZimbra/zimbraPrefMandatorySpellCheckEnabled.oa.mjs";
import { zimbraPrefMarkMsgRead } from "../LdapZimbra/zimbraPrefMarkMsgRead.oa.mjs";
import { zimbraPrefMessageIdDedupingEnabled } from "../LdapZimbra/zimbraPrefMessageIdDedupingEnabled.oa.mjs";
import { zimbraPrefMessageViewHtmlPreferred } from "../LdapZimbra/zimbraPrefMessageViewHtmlPreferred.oa.mjs";
import { zimbraPrefNewMailNotificationAddress } from "../LdapZimbra/zimbraPrefNewMailNotificationAddress.oa.mjs";
import { zimbraPrefNewMailNotificationEnabled } from "../LdapZimbra/zimbraPrefNewMailNotificationEnabled.oa.mjs";
import { zimbraPrefOpenMailInNewWindow } from "../LdapZimbra/zimbraPrefOpenMailInNewWindow.oa.mjs";
import { zimbraPrefOutOfOfficeCacheDuration } from "../LdapZimbra/zimbraPrefOutOfOfficeCacheDuration.oa.mjs";
import { zimbraPrefOutOfOfficeDirectAddress } from "../LdapZimbra/zimbraPrefOutOfOfficeDirectAddress.oa.mjs";
import { zimbraPrefOutOfOfficeExternalReply } from "../LdapZimbra/zimbraPrefOutOfOfficeExternalReply.oa.mjs";
import { zimbraPrefOutOfOfficeExternalReplyEnabled } from "../LdapZimbra/zimbraPrefOutOfOfficeExternalReplyEnabled.oa.mjs";
import { zimbraPrefOutOfOfficeFreeBusyStatus } from "../LdapZimbra/zimbraPrefOutOfOfficeFreeBusyStatus.oa.mjs";
import { zimbraPrefOutOfOfficeFromDate } from "../LdapZimbra/zimbraPrefOutOfOfficeFromDate.oa.mjs";
import { zimbraPrefOutOfOfficeReply } from "../LdapZimbra/zimbraPrefOutOfOfficeReply.oa.mjs";
import { zimbraPrefOutOfOfficeReplyEnabled } from "../LdapZimbra/zimbraPrefOutOfOfficeReplyEnabled.oa.mjs";
import { zimbraPrefOutOfOfficeStatusAlertOnLogin } from "../LdapZimbra/zimbraPrefOutOfOfficeStatusAlertOnLogin.oa.mjs";
import { zimbraPrefOutOfOfficeSuppressExternalReply } from "../LdapZimbra/zimbraPrefOutOfOfficeSuppressExternalReply.oa.mjs";
import { zimbraPrefOutOfOfficeUntilDate } from "../LdapZimbra/zimbraPrefOutOfOfficeUntilDate.oa.mjs";
import { zimbraPrefPop3DeleteOption } from "../LdapZimbra/zimbraPrefPop3DeleteOption.oa.mjs";
import { zimbraPrefPop3DownloadSince } from "../LdapZimbra/zimbraPrefPop3DownloadSince.oa.mjs";
import { zimbraPrefPop3IncludeSpam } from "../LdapZimbra/zimbraPrefPop3IncludeSpam.oa.mjs";
import { zimbraPrefQuickCommand } from "../LdapZimbra/zimbraPrefQuickCommand.oa.mjs";
import { zimbraPrefReadReceiptsToAddress } from "../LdapZimbra/zimbraPrefReadReceiptsToAddress.oa.mjs";
import { zimbraPrefReadingPaneEnabled } from "../LdapZimbra/zimbraPrefReadingPaneEnabled.oa.mjs";
import { zimbraPrefReadingPaneLocation } from "../LdapZimbra/zimbraPrefReadingPaneLocation.oa.mjs";
import { zimbraPrefReplyIncludeOriginalText } from "../LdapZimbra/zimbraPrefReplyIncludeOriginalText.oa.mjs";
import { zimbraPrefReplyToAddress } from "../LdapZimbra/zimbraPrefReplyToAddress.oa.mjs";
import { zimbraPrefReplyToDisplay } from "../LdapZimbra/zimbraPrefReplyToDisplay.oa.mjs";
import { zimbraPrefReplyToEnabled } from "../LdapZimbra/zimbraPrefReplyToEnabled.oa.mjs";
import { zimbraPrefSaveToSent } from "../LdapZimbra/zimbraPrefSaveToSent.oa.mjs";
import { zimbraPrefSearchTreeOpen } from "../LdapZimbra/zimbraPrefSearchTreeOpen.oa.mjs";
import { zimbraPrefSentLifetime } from "../LdapZimbra/zimbraPrefSentLifetime.oa.mjs";
import { zimbraPrefSentMailFolder } from "../LdapZimbra/zimbraPrefSentMailFolder.oa.mjs";
import { zimbraPrefSharedAddrBookAutoCompleteEnabled } from "../LdapZimbra/zimbraPrefSharedAddrBookAutoCompleteEnabled.oa.mjs";
import { zimbraPrefShortEmailAddress } from "../LdapZimbra/zimbraPrefShortEmailAddress.oa.mjs";
import { zimbraPrefShortcuts } from "../LdapZimbra/zimbraPrefShortcuts.oa.mjs";
import { zimbraPrefShowCalendarWeek } from "../LdapZimbra/zimbraPrefShowCalendarWeek.oa.mjs";
import { zimbraPrefShowComposeDirection } from "../LdapZimbra/zimbraPrefShowComposeDirection.oa.mjs";
import { zimbraPrefShowFragments } from "../LdapZimbra/zimbraPrefShowFragments.oa.mjs";
import { zimbraPrefShowSearchString } from "../LdapZimbra/zimbraPrefShowSearchString.oa.mjs";
import { zimbraPrefShowSelectionCheckbox } from "../LdapZimbra/zimbraPrefShowSelectionCheckbox.oa.mjs";
import { zimbraPrefSkin } from "../LdapZimbra/zimbraPrefSkin.oa.mjs";
import { zimbraPrefSortOrder } from "../LdapZimbra/zimbraPrefSortOrder.oa.mjs";
import { zimbraPrefSpellDictionary } from "../LdapZimbra/zimbraPrefSpellDictionary.oa.mjs";
import { zimbraPrefSpellIgnoreAllCaps } from "../LdapZimbra/zimbraPrefSpellIgnoreAllCaps.oa.mjs";
import { zimbraPrefSpellIgnorePattern } from "../LdapZimbra/zimbraPrefSpellIgnorePattern.oa.mjs";
import { zimbraPrefSpellIgnoreWord } from "../LdapZimbra/zimbraPrefSpellIgnoreWord.oa.mjs";
import { zimbraPrefStandardClientAccessibilityMode } from "../LdapZimbra/zimbraPrefStandardClientAccessibilityMode.oa.mjs";
import { zimbraPrefTagTreeOpen } from "../LdapZimbra/zimbraPrefTagTreeOpen.oa.mjs";
import { zimbraPrefTasksFilterBy } from "../LdapZimbra/zimbraPrefTasksFilterBy.oa.mjs";
import { zimbraPrefTasksReadingPaneLocation } from "../LdapZimbra/zimbraPrefTasksReadingPaneLocation.oa.mjs";
import { zimbraPrefTimeZoneId } from "../LdapZimbra/zimbraPrefTimeZoneId.oa.mjs";
import { zimbraPrefTrashLifetime } from "../LdapZimbra/zimbraPrefTrashLifetime.oa.mjs";
import { zimbraPrefUseDefaultIdentitySettings } from "../LdapZimbra/zimbraPrefUseDefaultIdentitySettings.oa.mjs";
import { zimbraPrefUseKeyboardShortcuts } from "../LdapZimbra/zimbraPrefUseKeyboardShortcuts.oa.mjs";
import { zimbraPrefUseRfc2231 } from "../LdapZimbra/zimbraPrefUseRfc2231.oa.mjs";
import { zimbraPrefUseSendMsgShortcut } from "../LdapZimbra/zimbraPrefUseSendMsgShortcut.oa.mjs";
import { zimbraPrefUseTimeZoneListInCalendar } from "../LdapZimbra/zimbraPrefUseTimeZoneListInCalendar.oa.mjs";
import { zimbraPrefVoiceItemsPerPage } from "../LdapZimbra/zimbraPrefVoiceItemsPerPage.oa.mjs";
import { zimbraPrefWarnOnExit } from "../LdapZimbra/zimbraPrefWarnOnExit.oa.mjs";
import { zimbraPrefWebClientOfflineBrowserKey } from "../LdapZimbra/zimbraPrefWebClientOfflineBrowserKey.oa.mjs";
import { zimbraPrefWhenInFolderIds } from "../LdapZimbra/zimbraPrefWhenInFolderIds.oa.mjs";
import { zimbraPrefWhenInFoldersEnabled } from "../LdapZimbra/zimbraPrefWhenInFoldersEnabled.oa.mjs";
import { zimbraPrefWhenSentToAddresses } from "../LdapZimbra/zimbraPrefWhenSentToAddresses.oa.mjs";
import { zimbraPrefWhenSentToEnabled } from "../LdapZimbra/zimbraPrefWhenSentToEnabled.oa.mjs";
import { zimbraPrefZimletTreeOpen } from "../LdapZimbra/zimbraPrefZimletTreeOpen.oa.mjs";
import { zimbraPrefZimlets } from "../LdapZimbra/zimbraPrefZimlets.oa.mjs";
import { zimbraProxyAllowedDomains } from "../LdapZimbra/zimbraProxyAllowedDomains.oa.mjs";
import { zimbraPublicShareLifetime } from "../LdapZimbra/zimbraPublicShareLifetime.oa.mjs";
import { zimbraPublicSharingEnabled } from "../LdapZimbra/zimbraPublicSharingEnabled.oa.mjs";
import { zimbraQuotaLastWarnTime } from "../LdapZimbra/zimbraQuotaLastWarnTime.oa.mjs";
import { zimbraQuotaWarnInterval } from "../LdapZimbra/zimbraQuotaWarnInterval.oa.mjs";
import { zimbraQuotaWarnMessage } from "../LdapZimbra/zimbraQuotaWarnMessage.oa.mjs";
import { zimbraQuotaWarnPercent } from "../LdapZimbra/zimbraQuotaWarnPercent.oa.mjs";
import { zimbraReverseProxyUseExternalRoute } from "../LdapZimbra/zimbraReverseProxyUseExternalRoute.oa.mjs";
import { zimbraShareInfo } from "../LdapZimbra/zimbraShareInfo.oa.mjs";
import { zimbraShareLifetime } from "../LdapZimbra/zimbraShareLifetime.oa.mjs";
import { zimbraSharedItem } from "../LdapZimbra/zimbraSharedItem.oa.mjs";
import { zimbraSignatureId } from "../LdapZimbra/zimbraSignatureId.oa.mjs";
import { zimbraSignatureMaxNumEntries } from "../LdapZimbra/zimbraSignatureMaxNumEntries.oa.mjs";
import { zimbraSignatureMinNumEntries } from "../LdapZimbra/zimbraSignatureMinNumEntries.oa.mjs";
import { zimbraSignatureName } from "../LdapZimbra/zimbraSignatureName.oa.mjs";
import { zimbraSmtpEnableTrace } from "../LdapZimbra/zimbraSmtpEnableTrace.oa.mjs";
import { zimbraSmtpRestrictEnvelopeFrom } from "../LdapZimbra/zimbraSmtpRestrictEnvelopeFrom.oa.mjs";
import { zimbraSocialcastURL } from "../LdapZimbra/zimbraSocialcastURL.oa.mjs";
import { zimbraSpamApplyUserFilters } from "../LdapZimbra/zimbraSpamApplyUserFilters.oa.mjs";
import { zimbraStandardClientCustomPrefTab } from "../LdapZimbra/zimbraStandardClientCustomPrefTab.oa.mjs";
import { zimbraStandardClientCustomPrefTabsEnabled } from "../LdapZimbra/zimbraStandardClientCustomPrefTabsEnabled.oa.mjs";
import { zimbraSyncWindowSize } from "../LdapZimbra/zimbraSyncWindowSize.oa.mjs";
import { zimbraTextAnalyzer } from "../LdapZimbra/zimbraTextAnalyzer.oa.mjs";
import { zimbraTouchJSErrorTrackingEnabled } from "../LdapZimbra/zimbraTouchJSErrorTrackingEnabled.oa.mjs";
import { zimbraTouchJSErrorTrackingKey } from "../LdapZimbra/zimbraTouchJSErrorTrackingKey.oa.mjs";
import { zimbraUCPassword } from "../LdapZimbra/zimbraUCPassword.oa.mjs";
import { zimbraUCServiceId } from "../LdapZimbra/zimbraUCServiceId.oa.mjs";
import { zimbraUCUsername } from "../LdapZimbra/zimbraUCUsername.oa.mjs";
import { zimbraVersion } from "../LdapZimbra/zimbraVersion.oa.mjs";
import { zimbraVirtualAccountInitialPasswordSet } from "../LdapZimbra/zimbraVirtualAccountInitialPasswordSet.oa.mjs";
import { zimbraWebClientOfflineSyncMaxDays } from "../LdapZimbra/zimbraWebClientOfflineSyncMaxDays.oa.mjs";
import { zimbraWebClientShowOfflineLink } from "../LdapZimbra/zimbraWebClientShowOfflineLink.oa.mjs";
import { zimbraYahooId } from "../LdapZimbra/zimbraYahooId.oa.mjs";
import { zimbraZimletAvailableZimlets } from "../LdapZimbra/zimbraZimletAvailableZimlets.oa.mjs";
import { zimbraZimletLoadSynchronously } from "../LdapZimbra/zimbraZimletLoadSynchronously.oa.mjs";
import { zimbraZimletUserProperties } from "../LdapZimbra/zimbraZimletUserProperties.oa.mjs";
// export { id_oc_zimbraAccount } from "../LdapZimbra/id-oc-zimbraAccount.va.mjs";


/**
 * @summary zimbraAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraMailRecipient }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { uid
 *                               | zimbraAccountStatus
 *                               | zimbraId }
 *   MAY CONTAIN               { countryName
 *                               | commonName
 *                               | co
 *                               | company
 *                               | description
 *                               | destinationIndicator
 *                               | displayName
 *                               | facsimileTelephoneNumber
 *                               | givenName
 *                               | homePhone
 *                               | initials
 *                               | internationalISDNNumber
 *                               | localityName
 *                               | mail
 *                               | mobile
 *                               | organizationName
 *                               | organizationalUnitName
 *                               | pager
 *                               | physicalDeliveryOfficeName
 *                               | postOfficeBox
 *                               | postalAddress
 *                               | postalCode
 *                               | preferredDeliveryMethod
 *                               | registeredAddress
 *                               | surname
 *                               | stateOrProvinceName
 *                               | streetAddress
 *                               | streetAddress
 *                               | telephoneNumber
 *                               | teletexTerminalIdentifier
 *                               | telexNumber
 *                               | title
 *                               | userCertificate
 *                               | userPassword
 *                               | userSMIMECertificate
 *                               | x121Address
 *                               | zimbraACE
 *                               | zimbraAccountCalendarUserType
 *                               | zimbraAdminAuthTokenLifetime
 *                               | zimbraAdminConsoleUIComponents
 *                               | zimbraAdminSavedSearches
 *                               | zimbraAllowAnyFromAddress
 *                               | zimbraAllowFromAddress
 *                               | zimbraArchiveAccount
 *                               | zimbraArchiveAccountDateTemplate
 *                               | zimbraArchiveAccountNameTemplate
 *                               | zimbraArchiveEnabled
 *                               | zimbraAttachmentsBlocked
 *                               | zimbraAttachmentsIndexingEnabled
 *                               | zimbraAttachmentsViewInHtmlOnly
 *                               | zimbraAuthLdapExternalDn
 *                               | zimbraAuthTokenLifetime
 *                               | zimbraAuthTokenValidityValue
 *                               | zimbraAuthTokens
 *                               | zimbraAvailableLocale
 *                               | zimbraAvailableSkin
 *                               | zimbraBatchedIndexingSize
 *                               | zimbraCOSId
 *                               | zimbraCalendarCalDavSharedFolderCacheDuration
 *                               | zimbraCalendarCalDavSyncEnd
 *                               | zimbraCalendarCalDavSyncStart
 *                               | zimbraCalendarKeepExceptionsOnSeriesTimeChange
 *                               | zimbraCalendarLocationDisabledFields
 *                               | zimbraCalendarMaxRevisions
 *                               | zimbraCalendarReminderDeviceEmail
 *                               | zimbraCalendarResourceDoubleBookingAllowed
 *                               | zimbraCalendarShowResourceTabs
 *                               | zimbraChildAccount
 *                               | zimbraChildVisibleAccount
 *                               | zimbraCommunityAPIClientID
 *                               | zimbraCommunityAPIClientSecret
 *                               | zimbraCommunityBaseURL
 *                               | zimbraCommunityHomeURL
 *                               | zimbraCommunityID
 *                               | zimbraCommunityUsernameMapping
 *                               | zimbraContactAutoCompleteEmailFields
 *                               | zimbraContactAutoCompleteMaxResults
 *                               | zimbraContactEmailFields
 *                               | zimbraContactMaxNumEntries
 *                               | zimbraContactRankingTableSize
 *                               | zimbraConverterHints
 *                               | zimbraCreateTimestamp
 *                               | zimbraCsrfTokenData
 *                               | zimbraCustomerCareTier
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
 *                               | zimbraDebugInfo
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
 *                               | zimbraExcludeFromCMBSearch
 *                               | zimbraExternalAccountDisabledTime
 *                               | zimbraExternalAccountLifetimeAfterDisabled
 *                               | zimbraExternalImapHostname
 *                               | zimbraExternalImapPort
 *                               | zimbraExternalImapSSLHostname
 *                               | zimbraExternalImapSSLPort
 *                               | zimbraExternalPop3Hostname
 *                               | zimbraExternalPop3Port
 *                               | zimbraExternalPop3SSLHostname
 *                               | zimbraExternalPop3SSLPort
 *                               | zimbraExternalShareDomainWhitelistEnabled
 *                               | zimbraExternalShareLifetime
 *                               | zimbraExternalShareWhitelistDomain
 *                               | zimbraExternalSharingEnabled
 *                               | zimbraExternalUserMailAddress
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
 *                               | zimbraForeignPrincipal
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
 *                               | zimbraIsAdminAccount
 *                               | zimbraIsCustomerCareAccount
 *                               | zimbraIsDelegatedAdminAccount
 *                               | zimbraIsDomainAdminAccount
 *                               | zimbraIsExternalVirtualAccount
 *                               | zimbraIsSystemAccount
 *                               | zimbraIsSystemResource
 *                               | zimbraJunkMessagesIndexingEnabled
 *                               | zimbraLastLogonTimestamp
 *                               | zimbraLocale
 *                               | zimbraLogOutFromAllServers
 *                               | zimbraMailAllowReceiveButNotSendWhenOverQuota
 *                               | zimbraMailBlacklistMaxNumEntries
 *                               | zimbraMailDumpsterLifetime
 *                               | zimbraMailForwardingAddressMaxLength
 *                               | zimbraMailForwardingAddressMaxNumAddrs
 *                               | zimbraMailHighlightObjectsMaxSize
 *                               | zimbraMailIdleSessionTimeout
 *                               | zimbraMailMessageLifetime
 *                               | zimbraMailMinPollingInterval
 *                               | zimbraMailOutgoingSieveScript
 *                               | zimbraMailPurgeUseChangeDateForSpam
 *                               | zimbraMailPurgeUseChangeDateForTrash
 *                               | zimbraMailQuota
 *                               | zimbraMailSieveScript
 *                               | zimbraMailSignatureMaxLength
 *                               | zimbraMailSpamLifetime
 *                               | zimbraMailThreadingAlgorithm
 *                               | zimbraMailTrashLifetime
 *                               | zimbraMailTrustedSenderListMaxNumEntries
 *                               | zimbraMailWhitelistMaxNumEntries
 *                               | zimbraMailboxLocationBeforeMove
 *                               | zimbraMaxContactsPerPage
 *                               | zimbraMaxMailItemsPerPage
 *                               | zimbraMaxVoiceItemsPerPage
 *                               | zimbraMemberOf
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
 *                               | zimbraPasswordHistory
 *                               | zimbraPasswordLocked
 *                               | zimbraPasswordLockoutDuration
 *                               | zimbraPasswordLockoutEnabled
 *                               | zimbraPasswordLockoutFailureLifetime
 *                               | zimbraPasswordLockoutFailureTime
 *                               | zimbraPasswordLockoutLockedTime
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
 *                               | zimbraPasswordModifiedTime
 *                               | zimbraPasswordMustChange
 *                               | zimbraPhoneticCompany
 *                               | zimbraPhoneticFirstName
 *                               | zimbraPhoneticLastName
 *                               | zimbraPop3Enabled
 *                               | zimbraPortalName
 *                               | zimbraPrefAccountTreeOpen
 *                               | zimbraPrefAdminConsoleWarnOnExit
 *                               | zimbraPrefAdvancedClientEnforceMinDisplay
 *                               | zimbraPrefAllowAddressForDelegatedSender
 *                               | zimbraPrefAppleIcalDelegationEnabled
 *                               | zimbraPrefAutoAddAddressEnabled
 *                               | zimbraPrefAutoCompleteQuickCompletionOnComma
 *                               | zimbraPrefAutoSaveDraftInterval
 *                               | zimbraPrefAutocompleteAddressBubblesEnabled
 *                               | zimbraPrefBccAddress
 *                               | zimbraPrefBriefcaseReadingPaneLocation
 *                               | zimbraPrefCalendarAcceptSignatureId
 *                               | zimbraPrefCalendarAllowCancelEmailToSelf
 *                               | zimbraPrefCalendarAllowForwardedInvite
 *                               | zimbraPrefCalendarAllowPublishMethodInvite
 *                               | zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply
 *                               | zimbraPrefCalendarAlwaysShowMiniCal
 *                               | zimbraPrefCalendarApptAllowAtendeeEdit
 *                               | zimbraPrefCalendarApptReminderWarningTime
 *                               | zimbraPrefCalendarApptVisibility
 *                               | zimbraPrefCalendarAutoAcceptSignatureId
 *                               | zimbraPrefCalendarAutoAddInvites
 *                               | zimbraPrefCalendarAutoDeclineSignatureId
 *                               | zimbraPrefCalendarAutoDenySignatureId
 *                               | zimbraPrefCalendarDayHourEnd
 *                               | zimbraPrefCalendarDayHourStart
 *                               | zimbraPrefCalendarDeclineSignatureId
 *                               | zimbraPrefCalendarDefaultApptDuration
 *                               | zimbraPrefCalendarFirstDayOfWeek
 *                               | zimbraPrefCalendarForwardInvitesTo
 *                               | zimbraPrefCalendarInitialCheckedCalendars
 *                               | zimbraPrefCalendarInitialView
 *                               | zimbraPrefCalendarNotifyDelegatedChanges
 *                               | zimbraPrefCalendarReminderDeviceInfo
 *                               | zimbraPrefCalendarReminderDuration1
 *                               | zimbraPrefCalendarReminderDuration2
 *                               | zimbraPrefCalendarReminderEmail
 *                               | zimbraPrefCalendarReminderFlashTitle
 *                               | zimbraPrefCalendarReminderMobile
 *                               | zimbraPrefCalendarReminderSendEmail
 *                               | zimbraPrefCalendarReminderSoundsEnabled
 *                               | zimbraPrefCalendarReminderYMessenger
 *                               | zimbraPrefCalendarSendInviteDeniedAutoReply
 *                               | zimbraPrefCalendarShowDeclinedMeetings
 *                               | zimbraPrefCalendarShowPastDueReminders
 *                               | zimbraPrefCalendarTentativeSignatureId
 *                               | zimbraPrefCalendarToasterEnabled
 *                               | zimbraPrefCalendarUseQuickAdd
 *                               | zimbraPrefCalendarViewTimeInterval
 *                               | zimbraPrefCalendarWorkingHours
 *                               | zimbraPrefChildVisibleAccount
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
 *                               | zimbraPrefDefaultSignatureId
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
 *                               | zimbraPrefForwardReplySignatureId
 *                               | zimbraPrefFromAddress
 *                               | zimbraPrefFromAddressType
 *                               | zimbraPrefFromDisplay
 *                               | zimbraPrefGalAutoCompleteEnabled
 *                               | zimbraPrefGalSearchEnabled
 *                               | zimbraPrefGetMailAction
 *                               | zimbraPrefGroupMailBy
 *                               | zimbraPrefHtmlEditorDefaultFontColor
 *                               | zimbraPrefHtmlEditorDefaultFontFamily
 *                               | zimbraPrefHtmlEditorDefaultFontSize
 *                               | zimbraPrefIMAutoLogin
 *                               | zimbraPrefIMBuddyListSort
 *                               | zimbraPrefIMCustomStatusMessage
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
 *                               | zimbraPrefIMYahooId
 *                               | zimbraPrefIdentityName
 *                               | zimbraPrefImapSearchFoldersEnabled
 *                               | zimbraPrefInboxReadLifetime
 *                               | zimbraPrefInboxUnreadLifetime
 *                               | zimbraPrefIncludeSharedItemsInSearch
 *                               | zimbraPrefIncludeSpamInSearch
 *                               | zimbraPrefIncludeTrashInSearch
 *                               | zimbraPrefItemsPerVirtualPage
 *                               | zimbraPrefJunkLifetime
 *                               | zimbraPrefLabel
 *                               | zimbraPrefListViewColumns
 *                               | zimbraPrefLocale
 *                               | zimbraPrefMailDefaultCharset
 *                               | zimbraPrefMailFlashIcon
 *                               | zimbraPrefMailFlashTitle
 *                               | zimbraPrefMailFoldersCheckedForNewMsgIndicator
 *                               | zimbraPrefMailForwardingAddress
 *                               | zimbraPrefMailInitialSearch
 *                               | zimbraPrefMailItemsPerPage
 *                               | zimbraPrefMailLocalDeliveryDisabled
 *                               | zimbraPrefMailPollingInterval
 *                               | zimbraPrefMailRequestReadReceipts
 *                               | zimbraPrefMailSMIMECertificate
 *                               | zimbraPrefMailSelectAfterDelete
 *                               | zimbraPrefMailSendReadReceipts
 *                               | zimbraPrefMailSignature
 *                               | zimbraPrefMailSignatureContactId
 *                               | zimbraPrefMailSignatureEnabled
 *                               | zimbraPrefMailSignatureHTML
 *                               | zimbraPrefMailSignatureStyle
 *                               | zimbraPrefMailSoundsEnabled
 *                               | zimbraPrefMailToasterEnabled
 *                               | zimbraPrefMailTrustedSenderList
 *                               | zimbraPrefMandatorySpellCheckEnabled
 *                               | zimbraPrefMarkMsgRead
 *                               | zimbraPrefMessageIdDedupingEnabled
 *                               | zimbraPrefMessageViewHtmlPreferred
 *                               | zimbraPrefNewMailNotificationAddress
 *                               | zimbraPrefNewMailNotificationEnabled
 *                               | zimbraPrefOpenMailInNewWindow
 *                               | zimbraPrefOutOfOfficeCacheDuration
 *                               | zimbraPrefOutOfOfficeDirectAddress
 *                               | zimbraPrefOutOfOfficeExternalReply
 *                               | zimbraPrefOutOfOfficeExternalReplyEnabled
 *                               | zimbraPrefOutOfOfficeFreeBusyStatus
 *                               | zimbraPrefOutOfOfficeFromDate
 *                               | zimbraPrefOutOfOfficeReply
 *                               | zimbraPrefOutOfOfficeReplyEnabled
 *                               | zimbraPrefOutOfOfficeStatusAlertOnLogin
 *                               | zimbraPrefOutOfOfficeSuppressExternalReply
 *                               | zimbraPrefOutOfOfficeUntilDate
 *                               | zimbraPrefPop3DeleteOption
 *                               | zimbraPrefPop3DownloadSince
 *                               | zimbraPrefPop3IncludeSpam
 *                               | zimbraPrefQuickCommand
 *                               | zimbraPrefReadReceiptsToAddress
 *                               | zimbraPrefReadingPaneEnabled
 *                               | zimbraPrefReadingPaneLocation
 *                               | zimbraPrefReplyIncludeOriginalText
 *                               | zimbraPrefReplyToAddress
 *                               | zimbraPrefReplyToDisplay
 *                               | zimbraPrefReplyToEnabled
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
 *                               | zimbraPrefUseDefaultIdentitySettings
 *                               | zimbraPrefUseKeyboardShortcuts
 *                               | zimbraPrefUseRfc2231
 *                               | zimbraPrefUseSendMsgShortcut
 *                               | zimbraPrefUseTimeZoneListInCalendar
 *                               | zimbraPrefVoiceItemsPerPage
 *                               | zimbraPrefWarnOnExit
 *                               | zimbraPrefWebClientOfflineBrowserKey
 *                               | zimbraPrefWhenInFolderIds
 *                               | zimbraPrefWhenInFoldersEnabled
 *                               | zimbraPrefWhenSentToAddresses
 *                               | zimbraPrefWhenSentToEnabled
 *                               | zimbraPrefZimletTreeOpen
 *                               | zimbraPrefZimlets
 *                               | zimbraProxyAllowedDomains
 *                               | zimbraPublicShareLifetime
 *                               | zimbraPublicSharingEnabled
 *                               | zimbraQuotaLastWarnTime
 *                               | zimbraQuotaWarnInterval
 *                               | zimbraQuotaWarnMessage
 *                               | zimbraQuotaWarnPercent
 *                               | zimbraReverseProxyUseExternalRoute
 *                               | zimbraShareInfo
 *                               | zimbraShareLifetime
 *                               | zimbraSharedItem
 *                               | zimbraSignatureId
 *                               | zimbraSignatureMaxNumEntries
 *                               | zimbraSignatureMinNumEntries
 *                               | zimbraSignatureName
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
 *                               | zimbraUCPassword
 *                               | zimbraUCServiceId
 *                               | zimbraUCUsername
 *                               | zimbraVersion
 *                               | zimbraVirtualAccountInitialPasswordSet
 *                               | zimbraWebClientOfflineSyncMaxDays
 *                               | zimbraWebClientShowOfflineLink
 *                               | zimbraYahooId
 *                               | zimbraZimletAvailableZimlets
 *                               | zimbraZimletLoadSynchronously
 *                               | zimbraZimletUserProperties }
 *   LDAP-NAME                 {"zimbraAccount"}
 *   LDAP-DESC                 "Account object"
 *   ID                        id-oc-zimbraAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraMailRecipient, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ uid, zimbraAccountStatus, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, commonName, co, company, description, destinationIndicator, displayName, facsimileTelephoneNumber, givenName, homePhone, initials, internationalISDNNumber, localityName, mail, mobile, organizationName, organizationalUnitName, pager, physicalDeliveryOfficeName, postOfficeBox, postalAddress, postalCode, preferredDeliveryMethod, registeredAddress, surname, stateOrProvinceName, streetAddress, streetAddress, telephoneNumber, teletexTerminalIdentifier, telexNumber, title, userCertificate, userPassword, userSMIMECertificate, x121Address, zimbraACE, zimbraAccountCalendarUserType, zimbraAdminAuthTokenLifetime, zimbraAdminConsoleUIComponents, zimbraAdminSavedSearches, zimbraAllowAnyFromAddress, zimbraAllowFromAddress, zimbraArchiveAccount, zimbraArchiveAccountDateTemplate, zimbraArchiveAccountNameTemplate, zimbraArchiveEnabled, zimbraAttachmentsBlocked, zimbraAttachmentsIndexingEnabled, zimbraAttachmentsViewInHtmlOnly, zimbraAuthLdapExternalDn, zimbraAuthTokenLifetime, zimbraAuthTokenValidityValue, zimbraAuthTokens, zimbraAvailableLocale, zimbraAvailableSkin, zimbraBatchedIndexingSize, zimbraCOSId, zimbraCalendarCalDavSharedFolderCacheDuration, zimbraCalendarCalDavSyncEnd, zimbraCalendarCalDavSyncStart, zimbraCalendarKeepExceptionsOnSeriesTimeChange, zimbraCalendarLocationDisabledFields, zimbraCalendarMaxRevisions, zimbraCalendarReminderDeviceEmail, zimbraCalendarResourceDoubleBookingAllowed, zimbraCalendarShowResourceTabs, zimbraChildAccount, zimbraChildVisibleAccount, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityID, zimbraCommunityUsernameMapping, zimbraContactAutoCompleteEmailFields, zimbraContactAutoCompleteMaxResults, zimbraContactEmailFields, zimbraContactMaxNumEntries, zimbraContactRankingTableSize, zimbraConverterHints, zimbraCreateTimestamp, zimbraCsrfTokenData, zimbraCustomerCareTier, zimbraDataSourceCaldavPollingInterval, zimbraDataSourceCalendarPollingInterval, zimbraDataSourceGalPollingInterval, zimbraDataSourceImapPollingInterval, zimbraDataSourceImportOnLogin, zimbraDataSourceLivePollingInterval, zimbraDataSourceMaxNumEntries, zimbraDataSourceMinPollingInterval, zimbraDataSourcePollingInterval, zimbraDataSourcePop3PollingInterval, zimbraDataSourceRssPollingInterval, zimbraDataSourceYabPollingInterval, zimbraDebugInfo, zimbraDefaultFolderFlags, zimbraDeviceAllowedPasscodeLockoutDuration, zimbraDeviceCalendarSoftDeleteExcludePattern, zimbraDeviceFileOpenWithEnabled, zimbraDeviceLockWhenInactive, zimbraDeviceOfflineCacheEnabled, zimbraDevicePasscodeEnabled, zimbraDevicePasscodeLockoutDuration, zimbraDomainAdminMaxMailQuota, zimbraDumpsterEnabled, zimbraDumpsterPurgeEnabled, zimbraDumpsterUserVisibleAge, zimbraExcludeFromCMBSearch, zimbraExternalAccountDisabledTime, zimbraExternalAccountLifetimeAfterDisabled, zimbraExternalImapHostname, zimbraExternalImapPort, zimbraExternalImapSSLHostname, zimbraExternalImapSSLPort, zimbraExternalPop3Hostname, zimbraExternalPop3Port, zimbraExternalPop3SSLHostname, zimbraExternalPop3SSLPort, zimbraExternalShareDomainWhitelistEnabled, zimbraExternalShareLifetime, zimbraExternalShareWhitelistDomain, zimbraExternalSharingEnabled, zimbraExternalUserMailAddress, zimbraFeatureAdminMailEnabled, zimbraFeatureAdvancedSearchEnabled, zimbraFeatureAntispamEnabled, zimbraFeatureBriefcaseDocsEnabled, zimbraFeatureBriefcaseSlidesEnabled, zimbraFeatureBriefcaseSpreadsheetEnabled, zimbraFeatureBriefcasesEnabled, zimbraFeatureCalendarEnabled, zimbraFeatureCalendarReminderDeviceEmailEnabled, zimbraFeatureCalendarUpsellEnabled, zimbraFeatureCalendarUpsellURL, zimbraFeatureChangePasswordEnabled, zimbraFeatureComposeInNewWindowEnabled, zimbraFeatureConfirmationPageEnabled, zimbraFeatureContactsDetailedSearchEnabled, zimbraFeatureContactsEnabled, zimbraFeatureContactsUpsellEnabled, zimbraFeatureContactsUpsellURL, zimbraFeatureConversationsEnabled, zimbraFeatureCrocodocEnabled, zimbraFeatureDiscardInFiltersEnabled, zimbraFeatureDistributionListExpandMembersEnabled, zimbraFeatureDistributionListFolderEnabled, zimbraFeatureEwsEnabled, zimbraFeatureExportFolderEnabled, zimbraFeatureExternalFeedbackEnabled, zimbraFeatureFiltersEnabled, zimbraFeatureFlaggingEnabled, zimbraFeatureFreeBusyViewEnabled, zimbraFeatureFromDisplayEnabled, zimbraFeatureGalAutoCompleteEnabled, zimbraFeatureGalEnabled, zimbraFeatureGalSyncEnabled, zimbraFeatureGroupCalendarEnabled, zimbraFeatureHtmlComposeEnabled, zimbraFeatureIMEnabled, zimbraFeatureIdentitiesEnabled, zimbraFeatureImapDataSourceEnabled, zimbraFeatureImportExportFolderEnabled, zimbraFeatureImportFolderEnabled, zimbraFeatureInitialSearchPreferenceEnabled, zimbraFeatureInstantNotify, zimbraFeatureMAPIConnectorEnabled, zimbraFeatureMailEnabled, zimbraFeatureMailForwardingEnabled, zimbraFeatureMailForwardingInFiltersEnabled, zimbraFeatureMailPollingIntervalPreferenceEnabled, zimbraFeatureMailPriorityEnabled, zimbraFeatureMailSendLaterEnabled, zimbraFeatureMailUpsellEnabled, zimbraFeatureMailUpsellURL, zimbraFeatureManageSMIMECertificateEnabled, zimbraFeatureManageZimlets, zimbraFeatureMobilePolicyEnabled, zimbraFeatureMobileSyncEnabled, zimbraFeatureNewAddrBookEnabled, zimbraFeatureNewMailNotificationEnabled, zimbraFeatureNotebookEnabled, zimbraFeatureOpenMailInNewWindowEnabled, zimbraFeatureOptionsEnabled, zimbraFeatureOutOfOfficeReplyEnabled, zimbraFeaturePeopleSearchEnabled, zimbraFeaturePop3DataSourceEnabled, zimbraFeaturePortalEnabled, zimbraFeaturePriorityInboxEnabled, zimbraFeatureReadReceiptsEnabled, zimbraFeatureSMIMEEnabled, zimbraFeatureSavedSearchesEnabled, zimbraFeatureSharingEnabled, zimbraFeatureShortcutAliasesEnabled, zimbraFeatureSignaturesEnabled, zimbraFeatureSkinChangeEnabled, zimbraFeatureSocialEnabled, zimbraFeatureSocialExternalEnabled, zimbraFeatureSocialExternalURL, zimbraFeatureSocialFiltersEnabled, zimbraFeatureSocialName, zimbraFeatureSocialcastEnabled, zimbraFeatureTaggingEnabled, zimbraFeatureTasksEnabled, zimbraFeatureTouchClientEnabled, zimbraFeatureViewInHtmlEnabled, zimbraFeatureVoiceChangePinEnabled, zimbraFeatureVoiceEnabled, zimbraFeatureVoiceUpsellEnabled, zimbraFeatureVoiceUpsellURL, zimbraFeatureWebClientOfflineAccessEnabled, zimbraFeatureWebSearchEnabled, zimbraFeatureZimbraAssistantEnabled, zimbraFileAndroidCrashReportingEnabled, zimbraFileDeletionNotificationBody, zimbraFileDeletionNotificationSubject, zimbraFileExpirationWarningBody, zimbraFileExpirationWarningSubject, zimbraFileExpirationWarningThreshold, zimbraFileExternalShareLifetime, zimbraFileIOSCrashReportingEnabled, zimbraFileLifetime, zimbraFilePreviewMaxSize, zimbraFilePublicShareLifetime, zimbraFileShareLifetime, zimbraFileUploadMaxSizePerFile, zimbraFileVersionLifetime, zimbraFileVersioningEnabled, zimbraFilterBatchSize, zimbraFilterSleepInterval, zimbraForceClearCookies, zimbraForeignPrincipal, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraFreebusyLocalMailboxNotActive, zimbraGalSyncAccountBasedAutoCompleteEnabled, zimbraIMAvailableInteropGateways, zimbraIMService, zimbraIdentityMaxNumEntries, zimbraImapEnabled, zimbraInterceptAddress, zimbraInterceptBody, zimbraInterceptFrom, zimbraInterceptSendHeadersOnly, zimbraInterceptSubject, zimbraInternalSendersDomain, zimbraIsAdminAccount, zimbraIsCustomerCareAccount, zimbraIsDelegatedAdminAccount, zimbraIsDomainAdminAccount, zimbraIsExternalVirtualAccount, zimbraIsSystemAccount, zimbraIsSystemResource, zimbraJunkMessagesIndexingEnabled, zimbraLastLogonTimestamp, zimbraLocale, zimbraLogOutFromAllServers, zimbraMailAllowReceiveButNotSendWhenOverQuota, zimbraMailBlacklistMaxNumEntries, zimbraMailDumpsterLifetime, zimbraMailForwardingAddressMaxLength, zimbraMailForwardingAddressMaxNumAddrs, zimbraMailHighlightObjectsMaxSize, zimbraMailIdleSessionTimeout, zimbraMailMessageLifetime, zimbraMailMinPollingInterval, zimbraMailOutgoingSieveScript, zimbraMailPurgeUseChangeDateForSpam, zimbraMailPurgeUseChangeDateForTrash, zimbraMailQuota, zimbraMailSieveScript, zimbraMailSignatureMaxLength, zimbraMailSpamLifetime, zimbraMailThreadingAlgorithm, zimbraMailTrashLifetime, zimbraMailTrustedSenderListMaxNumEntries, zimbraMailWhitelistMaxNumEntries, zimbraMailboxLocationBeforeMove, zimbraMaxContactsPerPage, zimbraMaxMailItemsPerPage, zimbraMaxVoiceItemsPerPage, zimbraMemberOf, zimbraMobileAttachSkippedItemEnabled, zimbraMobileForceProtocol25, zimbraMobileForceSamsungProtocol25, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMobileNotificationAdminAddress, zimbraMobileNotificationEnabled, zimbraMobileOutlookSyncEnabled, zimbraMobilePolicyAllowBluetooth, zimbraMobilePolicyAllowBrowser, zimbraMobilePolicyAllowCamera, zimbraMobilePolicyAllowConsumerEmail, zimbraMobilePolicyAllowDesktopSync, zimbraMobilePolicyAllowHTMLEmail, zimbraMobilePolicyAllowInternetSharing, zimbraMobilePolicyAllowIrDA, zimbraMobilePolicyAllowNonProvisionableDevices, zimbraMobilePolicyAllowPOPIMAPEmail, zimbraMobilePolicyAllowPartialProvisioning, zimbraMobilePolicyAllowRemoteDesktop, zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation, zimbraMobilePolicyAllowSMIMESoftCerts, zimbraMobilePolicyAllowSimpleDevicePassword, zimbraMobilePolicyAllowStorageCard, zimbraMobilePolicyAllowTextMessaging, zimbraMobilePolicyAllowUnsignedApplications, zimbraMobilePolicyAllowUnsignedInstallationPackages, zimbraMobilePolicyAllowWiFi, zimbraMobilePolicyAlphanumericDevicePasswordRequired, zimbraMobilePolicyApprovedApplication, zimbraMobilePolicyApprovedApplicationList, zimbraMobilePolicyDeviceEncryptionEnabled, zimbraMobilePolicyDevicePasswordEnabled, zimbraMobilePolicyDevicePasswordExpiration, zimbraMobilePolicyDevicePasswordHistory, zimbraMobilePolicyMaxCalendarAgeFilter, zimbraMobilePolicyMaxDevicePasswordFailedAttempts, zimbraMobilePolicyMaxEmailAgeFilter, zimbraMobilePolicyMaxEmailBodyTruncationSize, zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize, zimbraMobilePolicyMaxInactivityTimeDeviceLock, zimbraMobilePolicyMinDevicePasswordComplexCharacters, zimbraMobilePolicyMinDevicePasswordLength, zimbraMobilePolicyPasswordRecoveryEnabled, zimbraMobilePolicyRefreshInterval, zimbraMobilePolicyRequireDeviceEncryption, zimbraMobilePolicyRequireEncryptedSMIMEMessages, zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm, zimbraMobilePolicyRequireManualSyncWhenRoaming, zimbraMobilePolicyRequireSignedSMIMEAlgorithm, zimbraMobilePolicyRequireSignedSMIMEMessages, zimbraMobilePolicyRequireStorageCardEncryption, zimbraMobilePolicySuppressDeviceEncryption, zimbraMobilePolicyUnapprovedInROMApplication, zimbraMobileShareContactEnabled, zimbraMobileSmartForwardRFC822Enabled, zimbraMobileSyncKeyFormatConvertedFolders, zimbraMobileSyncRedoMaxAttempts, zimbraMobileTombstoneEnabled, zimbraNewMailNotificationBody, zimbraNewMailNotificationFrom, zimbraNewMailNotificationSubject, zimbraNotebookMaxRevisions, zimbraNotebookSanitizeHtml, zimbraNotes, zimbraPasswordAllowedChars, zimbraPasswordAllowedPunctuationChars, zimbraPasswordEnforceHistory, zimbraPasswordHistory, zimbraPasswordLocked, zimbraPasswordLockoutDuration, zimbraPasswordLockoutEnabled, zimbraPasswordLockoutFailureLifetime, zimbraPasswordLockoutFailureTime, zimbraPasswordLockoutLockedTime, zimbraPasswordLockoutMaxFailures, zimbraPasswordMaxAge, zimbraPasswordMaxLength, zimbraPasswordMinAge, zimbraPasswordMinAlphaChars, zimbraPasswordMinDigitsOrPuncs, zimbraPasswordMinLength, zimbraPasswordMinLowerCaseChars, zimbraPasswordMinNumericChars, zimbraPasswordMinPunctuationChars, zimbraPasswordMinUpperCaseChars, zimbraPasswordModifiedTime, zimbraPasswordMustChange, zimbraPhoneticCompany, zimbraPhoneticFirstName, zimbraPhoneticLastName, zimbraPop3Enabled, zimbraPortalName, zimbraPrefAccountTreeOpen, zimbraPrefAdminConsoleWarnOnExit, zimbraPrefAdvancedClientEnforceMinDisplay, zimbraPrefAllowAddressForDelegatedSender, zimbraPrefAppleIcalDelegationEnabled, zimbraPrefAutoAddAddressEnabled, zimbraPrefAutoCompleteQuickCompletionOnComma, zimbraPrefAutoSaveDraftInterval, zimbraPrefAutocompleteAddressBubblesEnabled, zimbraPrefBccAddress, zimbraPrefBriefcaseReadingPaneLocation, zimbraPrefCalendarAcceptSignatureId, zimbraPrefCalendarAllowCancelEmailToSelf, zimbraPrefCalendarAllowForwardedInvite, zimbraPrefCalendarAllowPublishMethodInvite, zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply, zimbraPrefCalendarAlwaysShowMiniCal, zimbraPrefCalendarApptAllowAtendeeEdit, zimbraPrefCalendarApptReminderWarningTime, zimbraPrefCalendarApptVisibility, zimbraPrefCalendarAutoAcceptSignatureId, zimbraPrefCalendarAutoAddInvites, zimbraPrefCalendarAutoDeclineSignatureId, zimbraPrefCalendarAutoDenySignatureId, zimbraPrefCalendarDayHourEnd, zimbraPrefCalendarDayHourStart, zimbraPrefCalendarDeclineSignatureId, zimbraPrefCalendarDefaultApptDuration, zimbraPrefCalendarFirstDayOfWeek, zimbraPrefCalendarForwardInvitesTo, zimbraPrefCalendarInitialCheckedCalendars, zimbraPrefCalendarInitialView, zimbraPrefCalendarNotifyDelegatedChanges, zimbraPrefCalendarReminderDeviceInfo, zimbraPrefCalendarReminderDuration1, zimbraPrefCalendarReminderDuration2, zimbraPrefCalendarReminderEmail, zimbraPrefCalendarReminderFlashTitle, zimbraPrefCalendarReminderMobile, zimbraPrefCalendarReminderSendEmail, zimbraPrefCalendarReminderSoundsEnabled, zimbraPrefCalendarReminderYMessenger, zimbraPrefCalendarSendInviteDeniedAutoReply, zimbraPrefCalendarShowDeclinedMeetings, zimbraPrefCalendarShowPastDueReminders, zimbraPrefCalendarTentativeSignatureId, zimbraPrefCalendarToasterEnabled, zimbraPrefCalendarUseQuickAdd, zimbraPrefCalendarViewTimeInterval, zimbraPrefCalendarWorkingHours, zimbraPrefChildVisibleAccount, zimbraPrefClientType, zimbraPrefColorMessagesEnabled, zimbraPrefComposeDirection, zimbraPrefComposeFormat, zimbraPrefComposeInNewWindow, zimbraPrefContactsDisableAutocompleteOnContactGroupMembers, zimbraPrefContactsExpandAppleContactGroups, zimbraPrefContactsInitialView, zimbraPrefContactsPerPage, zimbraPrefConvReadingPaneLocation, zimbraPrefConvShowCalendar, zimbraPrefConversationOrder, zimbraPrefDedupeMessagesSentToSelf, zimbraPrefDefaultPrintFontSize, zimbraPrefDefaultSignatureId, zimbraPrefDelegatedSendSaveTarget, zimbraPrefDeleteInviteOnReply, zimbraPrefDisabledZimlets, zimbraPrefDisplayExternalImages, zimbraPrefExternalSendersType, zimbraPrefFileSharingApplication, zimbraPrefFolderColorEnabled, zimbraPrefFolderTreeOpen, zimbraPrefFont, zimbraPrefFontSize, zimbraPrefForwardIncludeOriginalText, zimbraPrefForwardReplyFormat, zimbraPrefForwardReplyInOriginalFormat, zimbraPrefForwardReplyPrefixChar, zimbraPrefForwardReplySignatureId, zimbraPrefFromAddress, zimbraPrefFromAddressType, zimbraPrefFromDisplay, zimbraPrefGalAutoCompleteEnabled, zimbraPrefGalSearchEnabled, zimbraPrefGetMailAction, zimbraPrefGroupMailBy, zimbraPrefHtmlEditorDefaultFontColor, zimbraPrefHtmlEditorDefaultFontFamily, zimbraPrefHtmlEditorDefaultFontSize, zimbraPrefIMAutoLogin, zimbraPrefIMBuddyListSort, zimbraPrefIMCustomStatusMessage, zimbraPrefIMFlashIcon, zimbraPrefIMFlashTitle, zimbraPrefIMHideBlockedBuddies, zimbraPrefIMHideOfflineBuddies, zimbraPrefIMIdleStatus, zimbraPrefIMIdleTimeout, zimbraPrefIMInstantNotify, zimbraPrefIMLogChats, zimbraPrefIMLogChatsEnabled, zimbraPrefIMNotifyPresence, zimbraPrefIMNotifyStatus, zimbraPrefIMReportIdle, zimbraPrefIMSoundsEnabled, zimbraPrefIMToasterEnabled, zimbraPrefIMYahooId, zimbraPrefIdentityName, zimbraPrefImapSearchFoldersEnabled, zimbraPrefInboxReadLifetime, zimbraPrefInboxUnreadLifetime, zimbraPrefIncludeSharedItemsInSearch, zimbraPrefIncludeSpamInSearch, zimbraPrefIncludeTrashInSearch, zimbraPrefItemsPerVirtualPage, zimbraPrefJunkLifetime, zimbraPrefLabel, zimbraPrefListViewColumns, zimbraPrefLocale, zimbraPrefMailDefaultCharset, zimbraPrefMailFlashIcon, zimbraPrefMailFlashTitle, zimbraPrefMailFoldersCheckedForNewMsgIndicator, zimbraPrefMailForwardingAddress, zimbraPrefMailInitialSearch, zimbraPrefMailItemsPerPage, zimbraPrefMailLocalDeliveryDisabled, zimbraPrefMailPollingInterval, zimbraPrefMailRequestReadReceipts, zimbraPrefMailSMIMECertificate, zimbraPrefMailSelectAfterDelete, zimbraPrefMailSendReadReceipts, zimbraPrefMailSignature, zimbraPrefMailSignatureContactId, zimbraPrefMailSignatureEnabled, zimbraPrefMailSignatureHTML, zimbraPrefMailSignatureStyle, zimbraPrefMailSoundsEnabled, zimbraPrefMailToasterEnabled, zimbraPrefMailTrustedSenderList, zimbraPrefMandatorySpellCheckEnabled, zimbraPrefMarkMsgRead, zimbraPrefMessageIdDedupingEnabled, zimbraPrefMessageViewHtmlPreferred, zimbraPrefNewMailNotificationAddress, zimbraPrefNewMailNotificationEnabled, zimbraPrefOpenMailInNewWindow, zimbraPrefOutOfOfficeCacheDuration, zimbraPrefOutOfOfficeDirectAddress, zimbraPrefOutOfOfficeExternalReply, zimbraPrefOutOfOfficeExternalReplyEnabled, zimbraPrefOutOfOfficeFreeBusyStatus, zimbraPrefOutOfOfficeFromDate, zimbraPrefOutOfOfficeReply, zimbraPrefOutOfOfficeReplyEnabled, zimbraPrefOutOfOfficeStatusAlertOnLogin, zimbraPrefOutOfOfficeSuppressExternalReply, zimbraPrefOutOfOfficeUntilDate, zimbraPrefPop3DeleteOption, zimbraPrefPop3DownloadSince, zimbraPrefPop3IncludeSpam, zimbraPrefQuickCommand, zimbraPrefReadReceiptsToAddress, zimbraPrefReadingPaneEnabled, zimbraPrefReadingPaneLocation, zimbraPrefReplyIncludeOriginalText, zimbraPrefReplyToAddress, zimbraPrefReplyToDisplay, zimbraPrefReplyToEnabled, zimbraPrefSaveToSent, zimbraPrefSearchTreeOpen, zimbraPrefSentLifetime, zimbraPrefSentMailFolder, zimbraPrefSharedAddrBookAutoCompleteEnabled, zimbraPrefShortEmailAddress, zimbraPrefShortcuts, zimbraPrefShowCalendarWeek, zimbraPrefShowComposeDirection, zimbraPrefShowFragments, zimbraPrefShowSearchString, zimbraPrefShowSelectionCheckbox, zimbraPrefSkin, zimbraPrefSortOrder, zimbraPrefSpellDictionary, zimbraPrefSpellIgnoreAllCaps, zimbraPrefSpellIgnorePattern, zimbraPrefSpellIgnoreWord, zimbraPrefStandardClientAccessibilityMode, zimbraPrefTagTreeOpen, zimbraPrefTasksFilterBy, zimbraPrefTasksReadingPaneLocation, zimbraPrefTimeZoneId, zimbraPrefTrashLifetime, zimbraPrefUseDefaultIdentitySettings, zimbraPrefUseKeyboardShortcuts, zimbraPrefUseRfc2231, zimbraPrefUseSendMsgShortcut, zimbraPrefUseTimeZoneListInCalendar, zimbraPrefVoiceItemsPerPage, zimbraPrefWarnOnExit, zimbraPrefWebClientOfflineBrowserKey, zimbraPrefWhenInFolderIds, zimbraPrefWhenInFoldersEnabled, zimbraPrefWhenSentToAddresses, zimbraPrefWhenSentToEnabled, zimbraPrefZimletTreeOpen, zimbraPrefZimlets, zimbraProxyAllowedDomains, zimbraPublicShareLifetime, zimbraPublicSharingEnabled, zimbraQuotaLastWarnTime, zimbraQuotaWarnInterval, zimbraQuotaWarnMessage, zimbraQuotaWarnPercent, zimbraReverseProxyUseExternalRoute, zimbraShareInfo, zimbraShareLifetime, zimbraSharedItem, zimbraSignatureId, zimbraSignatureMaxNumEntries, zimbraSignatureMinNumEntries, zimbraSignatureName, zimbraSmtpEnableTrace, zimbraSmtpRestrictEnvelopeFrom, zimbraSocialcastURL, zimbraSpamApplyUserFilters, zimbraStandardClientCustomPrefTab, zimbraStandardClientCustomPrefTabsEnabled, zimbraSyncWindowSize, zimbraTextAnalyzer, zimbraTouchJSErrorTrackingEnabled, zimbraTouchJSErrorTrackingKey, zimbraUCPassword, zimbraUCServiceId, zimbraUCUsername, zimbraVersion, zimbraVirtualAccountInitialPasswordSet, zimbraWebClientOfflineSyncMaxDays, zimbraWebClientShowOfflineLink, zimbraYahooId, zimbraZimletAvailableZimlets, zimbraZimletLoadSynchronously, zimbraZimletUserProperties, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAccount" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Account object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAccount /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
