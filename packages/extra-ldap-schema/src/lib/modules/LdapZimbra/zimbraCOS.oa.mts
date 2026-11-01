/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraCOS } from "../LdapZimbra/id-oc-zimbraCOS.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminAuthTokenLifetime } from "../LdapZimbra/zimbraAdminAuthTokenLifetime.oa.mjs";
import { zimbraAdminSavedSearches } from "../LdapZimbra/zimbraAdminSavedSearches.oa.mjs";
import { zimbraAllowAnyFromAddress } from "../LdapZimbra/zimbraAllowAnyFromAddress.oa.mjs";
import { zimbraArchiveAccountDateTemplate } from "../LdapZimbra/zimbraArchiveAccountDateTemplate.oa.mjs";
import { zimbraArchiveAccountNameTemplate } from "../LdapZimbra/zimbraArchiveAccountNameTemplate.oa.mjs";
import { zimbraArchiveEnabled } from "../LdapZimbra/zimbraArchiveEnabled.oa.mjs";
import { zimbraAttachmentsBlocked } from "../LdapZimbra/zimbraAttachmentsBlocked.oa.mjs";
import { zimbraAttachmentsIndexingEnabled } from "../LdapZimbra/zimbraAttachmentsIndexingEnabled.oa.mjs";
import { zimbraAttachmentsViewInHtmlOnly } from "../LdapZimbra/zimbraAttachmentsViewInHtmlOnly.oa.mjs";
import { zimbraAuthTokenLifetime } from "../LdapZimbra/zimbraAuthTokenLifetime.oa.mjs";
import { zimbraAvailableLocale } from "../LdapZimbra/zimbraAvailableLocale.oa.mjs";
import { zimbraAvailableSkin } from "../LdapZimbra/zimbraAvailableSkin.oa.mjs";
import { zimbraBatchedIndexingSize } from "../LdapZimbra/zimbraBatchedIndexingSize.oa.mjs";
import { zimbraCalendarCalDavSharedFolderCacheDuration } from "../LdapZimbra/zimbraCalendarCalDavSharedFolderCacheDuration.oa.mjs";
import { zimbraCalendarCalDavSyncEnd } from "../LdapZimbra/zimbraCalendarCalDavSyncEnd.oa.mjs";
import { zimbraCalendarCalDavSyncStart } from "../LdapZimbra/zimbraCalendarCalDavSyncStart.oa.mjs";
import { zimbraCalendarKeepExceptionsOnSeriesTimeChange } from "../LdapZimbra/zimbraCalendarKeepExceptionsOnSeriesTimeChange.oa.mjs";
import { zimbraCalendarLocationDisabledFields } from "../LdapZimbra/zimbraCalendarLocationDisabledFields.oa.mjs";
import { zimbraCalendarMaxRevisions } from "../LdapZimbra/zimbraCalendarMaxRevisions.oa.mjs";
import { zimbraCalendarResourceDoubleBookingAllowed } from "../LdapZimbra/zimbraCalendarResourceDoubleBookingAllowed.oa.mjs";
import { zimbraCalendarShowResourceTabs } from "../LdapZimbra/zimbraCalendarShowResourceTabs.oa.mjs";
import { zimbraCommunityAPIClientID } from "../LdapZimbra/zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "../LdapZimbra/zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "../LdapZimbra/zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "../LdapZimbra/zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "../LdapZimbra/zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraConstraint } from "../LdapZimbra/zimbraConstraint.oa.mjs";
import { zimbraContactAutoCompleteEmailFields } from "../LdapZimbra/zimbraContactAutoCompleteEmailFields.oa.mjs";
import { zimbraContactAutoCompleteMaxResults } from "../LdapZimbra/zimbraContactAutoCompleteMaxResults.oa.mjs";
import { zimbraContactEmailFields } from "../LdapZimbra/zimbraContactEmailFields.oa.mjs";
import { zimbraContactMaxNumEntries } from "../LdapZimbra/zimbraContactMaxNumEntries.oa.mjs";
import { zimbraContactRankingTableSize } from "../LdapZimbra/zimbraContactRankingTableSize.oa.mjs";
import { zimbraConverterHints } from "../LdapZimbra/zimbraConverterHints.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
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
import { zimbraExternalAccountLifetimeAfterDisabled } from "../LdapZimbra/zimbraExternalAccountLifetimeAfterDisabled.oa.mjs";
import { zimbraExternalShareDomainWhitelistEnabled } from "../LdapZimbra/zimbraExternalShareDomainWhitelistEnabled.oa.mjs";
import { zimbraExternalShareLifetime } from "../LdapZimbra/zimbraExternalShareLifetime.oa.mjs";
import { zimbraExternalShareWhitelistDomain } from "../LdapZimbra/zimbraExternalShareWhitelistDomain.oa.mjs";
import { zimbraExternalSharingEnabled } from "../LdapZimbra/zimbraExternalSharingEnabled.oa.mjs";
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
import { zimbraJunkMessagesIndexingEnabled } from "../LdapZimbra/zimbraJunkMessagesIndexingEnabled.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraLogOutFromAllServers } from "../LdapZimbra/zimbraLogOutFromAllServers.oa.mjs";
import { zimbraMailAllowReceiveButNotSendWhenOverQuota } from "../LdapZimbra/zimbraMailAllowReceiveButNotSendWhenOverQuota.oa.mjs";
import { zimbraMailBlacklistMaxNumEntries } from "../LdapZimbra/zimbraMailBlacklistMaxNumEntries.oa.mjs";
import { zimbraMailDumpsterLifetime } from "../LdapZimbra/zimbraMailDumpsterLifetime.oa.mjs";
import { zimbraMailForwardingAddressMaxLength } from "../LdapZimbra/zimbraMailForwardingAddressMaxLength.oa.mjs";
import { zimbraMailForwardingAddressMaxNumAddrs } from "../LdapZimbra/zimbraMailForwardingAddressMaxNumAddrs.oa.mjs";
import { zimbraMailHighlightObjectsMaxSize } from "../LdapZimbra/zimbraMailHighlightObjectsMaxSize.oa.mjs";
import { zimbraMailHostPool } from "../LdapZimbra/zimbraMailHostPool.oa.mjs";
import { zimbraMailIdleSessionTimeout } from "../LdapZimbra/zimbraMailIdleSessionTimeout.oa.mjs";
import { zimbraMailMessageLifetime } from "../LdapZimbra/zimbraMailMessageLifetime.oa.mjs";
import { zimbraMailMinPollingInterval } from "../LdapZimbra/zimbraMailMinPollingInterval.oa.mjs";
import { zimbraMailPurgeSystemPolicy } from "../LdapZimbra/zimbraMailPurgeSystemPolicy.oa.mjs";
import { zimbraMailPurgeUseChangeDateForSpam } from "../LdapZimbra/zimbraMailPurgeUseChangeDateForSpam.oa.mjs";
import { zimbraMailPurgeUseChangeDateForTrash } from "../LdapZimbra/zimbraMailPurgeUseChangeDateForTrash.oa.mjs";
import { zimbraMailQuota } from "../LdapZimbra/zimbraMailQuota.oa.mjs";
import { zimbraMailSignatureMaxLength } from "../LdapZimbra/zimbraMailSignatureMaxLength.oa.mjs";
import { zimbraMailSpamLifetime } from "../LdapZimbra/zimbraMailSpamLifetime.oa.mjs";
import { zimbraMailThreadingAlgorithm } from "../LdapZimbra/zimbraMailThreadingAlgorithm.oa.mjs";
import { zimbraMailTrashLifetime } from "../LdapZimbra/zimbraMailTrashLifetime.oa.mjs";
import { zimbraMailTrustedSenderListMaxNumEntries } from "../LdapZimbra/zimbraMailTrustedSenderListMaxNumEntries.oa.mjs";
import { zimbraMailWhitelistMaxNumEntries } from "../LdapZimbra/zimbraMailWhitelistMaxNumEntries.oa.mjs";
import { zimbraMaxContactsPerPage } from "../LdapZimbra/zimbraMaxContactsPerPage.oa.mjs";
import { zimbraMaxMailItemsPerPage } from "../LdapZimbra/zimbraMaxMailItemsPerPage.oa.mjs";
import { zimbraMaxVoiceItemsPerPage } from "../LdapZimbra/zimbraMaxVoiceItemsPerPage.oa.mjs";
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
import { zimbraPasswordLocked } from "../LdapZimbra/zimbraPasswordLocked.oa.mjs";
import { zimbraPasswordLockoutDuration } from "../LdapZimbra/zimbraPasswordLockoutDuration.oa.mjs";
import { zimbraPasswordLockoutEnabled } from "../LdapZimbra/zimbraPasswordLockoutEnabled.oa.mjs";
import { zimbraPasswordLockoutFailureLifetime } from "../LdapZimbra/zimbraPasswordLockoutFailureLifetime.oa.mjs";
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
import { zimbraPop3Enabled } from "../LdapZimbra/zimbraPop3Enabled.oa.mjs";
import { zimbraPortalName } from "../LdapZimbra/zimbraPortalName.oa.mjs";
import { zimbraPrefAccountTreeOpen } from "../LdapZimbra/zimbraPrefAccountTreeOpen.oa.mjs";
import { zimbraPrefAdminConsoleWarnOnExit } from "../LdapZimbra/zimbraPrefAdminConsoleWarnOnExit.oa.mjs";
import { zimbraPrefAdvancedClientEnforceMinDisplay } from "../LdapZimbra/zimbraPrefAdvancedClientEnforceMinDisplay.oa.mjs";
import { zimbraPrefAppleIcalDelegationEnabled } from "../LdapZimbra/zimbraPrefAppleIcalDelegationEnabled.oa.mjs";
import { zimbraPrefAutoAddAddressEnabled } from "../LdapZimbra/zimbraPrefAutoAddAddressEnabled.oa.mjs";
import { zimbraPrefAutoCompleteQuickCompletionOnComma } from "../LdapZimbra/zimbraPrefAutoCompleteQuickCompletionOnComma.oa.mjs";
import { zimbraPrefAutoSaveDraftInterval } from "../LdapZimbra/zimbraPrefAutoSaveDraftInterval.oa.mjs";
import { zimbraPrefAutocompleteAddressBubblesEnabled } from "../LdapZimbra/zimbraPrefAutocompleteAddressBubblesEnabled.oa.mjs";
import { zimbraPrefBriefcaseReadingPaneLocation } from "../LdapZimbra/zimbraPrefBriefcaseReadingPaneLocation.oa.mjs";
import { zimbraPrefCalendarAllowCancelEmailToSelf } from "../LdapZimbra/zimbraPrefCalendarAllowCancelEmailToSelf.oa.mjs";
import { zimbraPrefCalendarAllowForwardedInvite } from "../LdapZimbra/zimbraPrefCalendarAllowForwardedInvite.oa.mjs";
import { zimbraPrefCalendarAllowPublishMethodInvite } from "../LdapZimbra/zimbraPrefCalendarAllowPublishMethodInvite.oa.mjs";
import { zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply } from "../LdapZimbra/zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarAlwaysShowMiniCal } from "../LdapZimbra/zimbraPrefCalendarAlwaysShowMiniCal.oa.mjs";
import { zimbraPrefCalendarApptAllowAtendeeEdit } from "../LdapZimbra/zimbraPrefCalendarApptAllowAtendeeEdit.oa.mjs";
import { zimbraPrefCalendarApptReminderWarningTime } from "../LdapZimbra/zimbraPrefCalendarApptReminderWarningTime.oa.mjs";
import { zimbraPrefCalendarApptVisibility } from "../LdapZimbra/zimbraPrefCalendarApptVisibility.oa.mjs";
import { zimbraPrefCalendarAutoAddInvites } from "../LdapZimbra/zimbraPrefCalendarAutoAddInvites.oa.mjs";
import { zimbraPrefCalendarDayHourEnd } from "../LdapZimbra/zimbraPrefCalendarDayHourEnd.oa.mjs";
import { zimbraPrefCalendarDayHourStart } from "../LdapZimbra/zimbraPrefCalendarDayHourStart.oa.mjs";
import { zimbraPrefCalendarDefaultApptDuration } from "../LdapZimbra/zimbraPrefCalendarDefaultApptDuration.oa.mjs";
import { zimbraPrefCalendarFirstDayOfWeek } from "../LdapZimbra/zimbraPrefCalendarFirstDayOfWeek.oa.mjs";
import { zimbraPrefCalendarInitialView } from "../LdapZimbra/zimbraPrefCalendarInitialView.oa.mjs";
import { zimbraPrefCalendarNotifyDelegatedChanges } from "../LdapZimbra/zimbraPrefCalendarNotifyDelegatedChanges.oa.mjs";
import { zimbraPrefCalendarReminderDuration1 } from "../LdapZimbra/zimbraPrefCalendarReminderDuration1.oa.mjs";
import { zimbraPrefCalendarReminderDuration2 } from "../LdapZimbra/zimbraPrefCalendarReminderDuration2.oa.mjs";
import { zimbraPrefCalendarReminderFlashTitle } from "../LdapZimbra/zimbraPrefCalendarReminderFlashTitle.oa.mjs";
import { zimbraPrefCalendarReminderMobile } from "../LdapZimbra/zimbraPrefCalendarReminderMobile.oa.mjs";
import { zimbraPrefCalendarReminderSendEmail } from "../LdapZimbra/zimbraPrefCalendarReminderSendEmail.oa.mjs";
import { zimbraPrefCalendarReminderSoundsEnabled } from "../LdapZimbra/zimbraPrefCalendarReminderSoundsEnabled.oa.mjs";
import { zimbraPrefCalendarReminderYMessenger } from "../LdapZimbra/zimbraPrefCalendarReminderYMessenger.oa.mjs";
import { zimbraPrefCalendarSendInviteDeniedAutoReply } from "../LdapZimbra/zimbraPrefCalendarSendInviteDeniedAutoReply.oa.mjs";
import { zimbraPrefCalendarShowDeclinedMeetings } from "../LdapZimbra/zimbraPrefCalendarShowDeclinedMeetings.oa.mjs";
import { zimbraPrefCalendarShowPastDueReminders } from "../LdapZimbra/zimbraPrefCalendarShowPastDueReminders.oa.mjs";
import { zimbraPrefCalendarToasterEnabled } from "../LdapZimbra/zimbraPrefCalendarToasterEnabled.oa.mjs";
import { zimbraPrefCalendarUseQuickAdd } from "../LdapZimbra/zimbraPrefCalendarUseQuickAdd.oa.mjs";
import { zimbraPrefCalendarViewTimeInterval } from "../LdapZimbra/zimbraPrefCalendarViewTimeInterval.oa.mjs";
import { zimbraPrefCalendarWorkingHours } from "../LdapZimbra/zimbraPrefCalendarWorkingHours.oa.mjs";
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
import { zimbraPrefGalAutoCompleteEnabled } from "../LdapZimbra/zimbraPrefGalAutoCompleteEnabled.oa.mjs";
import { zimbraPrefGalSearchEnabled } from "../LdapZimbra/zimbraPrefGalSearchEnabled.oa.mjs";
import { zimbraPrefGetMailAction } from "../LdapZimbra/zimbraPrefGetMailAction.oa.mjs";
import { zimbraPrefGroupMailBy } from "../LdapZimbra/zimbraPrefGroupMailBy.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontColor } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontColor.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontFamily } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontFamily.oa.mjs";
import { zimbraPrefHtmlEditorDefaultFontSize } from "../LdapZimbra/zimbraPrefHtmlEditorDefaultFontSize.oa.mjs";
import { zimbraPrefIMAutoLogin } from "../LdapZimbra/zimbraPrefIMAutoLogin.oa.mjs";
import { zimbraPrefIMBuddyListSort } from "../LdapZimbra/zimbraPrefIMBuddyListSort.oa.mjs";
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
import { zimbraPrefImapSearchFoldersEnabled } from "../LdapZimbra/zimbraPrefImapSearchFoldersEnabled.oa.mjs";
import { zimbraPrefInboxReadLifetime } from "../LdapZimbra/zimbraPrefInboxReadLifetime.oa.mjs";
import { zimbraPrefInboxUnreadLifetime } from "../LdapZimbra/zimbraPrefInboxUnreadLifetime.oa.mjs";
import { zimbraPrefIncludeSharedItemsInSearch } from "../LdapZimbra/zimbraPrefIncludeSharedItemsInSearch.oa.mjs";
import { zimbraPrefIncludeSpamInSearch } from "../LdapZimbra/zimbraPrefIncludeSpamInSearch.oa.mjs";
import { zimbraPrefIncludeTrashInSearch } from "../LdapZimbra/zimbraPrefIncludeTrashInSearch.oa.mjs";
import { zimbraPrefItemsPerVirtualPage } from "../LdapZimbra/zimbraPrefItemsPerVirtualPage.oa.mjs";
import { zimbraPrefJunkLifetime } from "../LdapZimbra/zimbraPrefJunkLifetime.oa.mjs";
import { zimbraPrefListViewColumns } from "../LdapZimbra/zimbraPrefListViewColumns.oa.mjs";
import { zimbraPrefLocale } from "../LdapZimbra/zimbraPrefLocale.oa.mjs";
import { zimbraPrefMailDefaultCharset } from "../LdapZimbra/zimbraPrefMailDefaultCharset.oa.mjs";
import { zimbraPrefMailFlashIcon } from "../LdapZimbra/zimbraPrefMailFlashIcon.oa.mjs";
import { zimbraPrefMailFlashTitle } from "../LdapZimbra/zimbraPrefMailFlashTitle.oa.mjs";
import { zimbraPrefMailFoldersCheckedForNewMsgIndicator } from "../LdapZimbra/zimbraPrefMailFoldersCheckedForNewMsgIndicator.oa.mjs";
import { zimbraPrefMailInitialSearch } from "../LdapZimbra/zimbraPrefMailInitialSearch.oa.mjs";
import { zimbraPrefMailItemsPerPage } from "../LdapZimbra/zimbraPrefMailItemsPerPage.oa.mjs";
import { zimbraPrefMailPollingInterval } from "../LdapZimbra/zimbraPrefMailPollingInterval.oa.mjs";
import { zimbraPrefMailRequestReadReceipts } from "../LdapZimbra/zimbraPrefMailRequestReadReceipts.oa.mjs";
import { zimbraPrefMailSelectAfterDelete } from "../LdapZimbra/zimbraPrefMailSelectAfterDelete.oa.mjs";
import { zimbraPrefMailSendReadReceipts } from "../LdapZimbra/zimbraPrefMailSendReadReceipts.oa.mjs";
import { zimbraPrefMailSignatureStyle } from "../LdapZimbra/zimbraPrefMailSignatureStyle.oa.mjs";
import { zimbraPrefMailSoundsEnabled } from "../LdapZimbra/zimbraPrefMailSoundsEnabled.oa.mjs";
import { zimbraPrefMailToasterEnabled } from "../LdapZimbra/zimbraPrefMailToasterEnabled.oa.mjs";
import { zimbraPrefMailTrustedSenderList } from "../LdapZimbra/zimbraPrefMailTrustedSenderList.oa.mjs";
import { zimbraPrefMandatorySpellCheckEnabled } from "../LdapZimbra/zimbraPrefMandatorySpellCheckEnabled.oa.mjs";
import { zimbraPrefMarkMsgRead } from "../LdapZimbra/zimbraPrefMarkMsgRead.oa.mjs";
import { zimbraPrefMessageIdDedupingEnabled } from "../LdapZimbra/zimbraPrefMessageIdDedupingEnabled.oa.mjs";
import { zimbraPrefMessageViewHtmlPreferred } from "../LdapZimbra/zimbraPrefMessageViewHtmlPreferred.oa.mjs";
import { zimbraPrefOpenMailInNewWindow } from "../LdapZimbra/zimbraPrefOpenMailInNewWindow.oa.mjs";
import { zimbraPrefOutOfOfficeCacheDuration } from "../LdapZimbra/zimbraPrefOutOfOfficeCacheDuration.oa.mjs";
import { zimbraPrefOutOfOfficeStatusAlertOnLogin } from "../LdapZimbra/zimbraPrefOutOfOfficeStatusAlertOnLogin.oa.mjs";
import { zimbraPrefPop3DeleteOption } from "../LdapZimbra/zimbraPrefPop3DeleteOption.oa.mjs";
import { zimbraPrefPop3DownloadSince } from "../LdapZimbra/zimbraPrefPop3DownloadSince.oa.mjs";
import { zimbraPrefPop3IncludeSpam } from "../LdapZimbra/zimbraPrefPop3IncludeSpam.oa.mjs";
import { zimbraPrefReadingPaneEnabled } from "../LdapZimbra/zimbraPrefReadingPaneEnabled.oa.mjs";
import { zimbraPrefReadingPaneLocation } from "../LdapZimbra/zimbraPrefReadingPaneLocation.oa.mjs";
import { zimbraPrefReplyIncludeOriginalText } from "../LdapZimbra/zimbraPrefReplyIncludeOriginalText.oa.mjs";
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
import { zimbraPrefUseKeyboardShortcuts } from "../LdapZimbra/zimbraPrefUseKeyboardShortcuts.oa.mjs";
import { zimbraPrefUseRfc2231 } from "../LdapZimbra/zimbraPrefUseRfc2231.oa.mjs";
import { zimbraPrefUseSendMsgShortcut } from "../LdapZimbra/zimbraPrefUseSendMsgShortcut.oa.mjs";
import { zimbraPrefUseTimeZoneListInCalendar } from "../LdapZimbra/zimbraPrefUseTimeZoneListInCalendar.oa.mjs";
import { zimbraPrefVoiceItemsPerPage } from "../LdapZimbra/zimbraPrefVoiceItemsPerPage.oa.mjs";
import { zimbraPrefWarnOnExit } from "../LdapZimbra/zimbraPrefWarnOnExit.oa.mjs";
import { zimbraPrefZimletTreeOpen } from "../LdapZimbra/zimbraPrefZimletTreeOpen.oa.mjs";
import { zimbraPrefZimlets } from "../LdapZimbra/zimbraPrefZimlets.oa.mjs";
import { zimbraProxyAllowedDomains } from "../LdapZimbra/zimbraProxyAllowedDomains.oa.mjs";
import { zimbraProxyCacheableContentTypes } from "../LdapZimbra/zimbraProxyCacheableContentTypes.oa.mjs";
import { zimbraPublicShareLifetime } from "../LdapZimbra/zimbraPublicShareLifetime.oa.mjs";
import { zimbraPublicSharingEnabled } from "../LdapZimbra/zimbraPublicSharingEnabled.oa.mjs";
import { zimbraQuotaWarnInterval } from "../LdapZimbra/zimbraQuotaWarnInterval.oa.mjs";
import { zimbraQuotaWarnMessage } from "../LdapZimbra/zimbraQuotaWarnMessage.oa.mjs";
import { zimbraQuotaWarnPercent } from "../LdapZimbra/zimbraQuotaWarnPercent.oa.mjs";
import { zimbraShareLifetime } from "../LdapZimbra/zimbraShareLifetime.oa.mjs";
import { zimbraSignatureMaxNumEntries } from "../LdapZimbra/zimbraSignatureMaxNumEntries.oa.mjs";
import { zimbraSignatureMinNumEntries } from "../LdapZimbra/zimbraSignatureMinNumEntries.oa.mjs";
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
import { zimbraUCServiceId } from "../LdapZimbra/zimbraUCServiceId.oa.mjs";
import { zimbraWebClientOfflineSyncMaxDays } from "../LdapZimbra/zimbraWebClientOfflineSyncMaxDays.oa.mjs";
import { zimbraWebClientShowOfflineLink } from "../LdapZimbra/zimbraWebClientShowOfflineLink.oa.mjs";
import { zimbraZimletAvailableZimlets } from "../LdapZimbra/zimbraZimletAvailableZimlets.oa.mjs";
import { zimbraZimletLoadSynchronously } from "../LdapZimbra/zimbraZimletLoadSynchronously.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraAdminAuthTokenLifetime, zimbraAdminSavedSearches, zimbraAllowAnyFromAddress, zimbraArchiveAccountDateTemplate, zimbraArchiveAccountNameTemplate, zimbraArchiveEnabled, zimbraAttachmentsBlocked, zimbraAttachmentsIndexingEnabled, zimbraAttachmentsViewInHtmlOnly, zimbraAuthTokenLifetime, zimbraAvailableLocale, zimbraAvailableSkin, zimbraBatchedIndexingSize, zimbraCalendarCalDavSharedFolderCacheDuration, zimbraCalendarCalDavSyncEnd, zimbraCalendarCalDavSyncStart, zimbraCalendarKeepExceptionsOnSeriesTimeChange, zimbraCalendarLocationDisabledFields, zimbraCalendarMaxRevisions, zimbraCalendarResourceDoubleBookingAllowed, zimbraCalendarShowResourceTabs, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraConstraint, zimbraContactAutoCompleteEmailFields, zimbraContactAutoCompleteMaxResults, zimbraContactEmailFields, zimbraContactMaxNumEntries, zimbraContactRankingTableSize, zimbraConverterHints, zimbraCreateTimestamp, zimbraDataSourceCaldavPollingInterval, zimbraDataSourceCalendarPollingInterval, zimbraDataSourceGalPollingInterval, zimbraDataSourceImapPollingInterval, zimbraDataSourceImportOnLogin, zimbraDataSourceLivePollingInterval, zimbraDataSourceMaxNumEntries, zimbraDataSourceMinPollingInterval, zimbraDataSourcePollingInterval, zimbraDataSourcePop3PollingInterval, zimbraDataSourceRssPollingInterval, zimbraDataSourceYabPollingInterval, zimbraDefaultFolderFlags, zimbraDeviceAllowedPasscodeLockoutDuration, zimbraDeviceCalendarSoftDeleteExcludePattern, zimbraDeviceFileOpenWithEnabled, zimbraDeviceLockWhenInactive, zimbraDeviceOfflineCacheEnabled, zimbraDevicePasscodeEnabled, zimbraDevicePasscodeLockoutDuration, zimbraDomainAdminMaxMailQuota, zimbraDumpsterEnabled, zimbraDumpsterPurgeEnabled, zimbraDumpsterUserVisibleAge, zimbraExternalAccountLifetimeAfterDisabled, zimbraExternalShareDomainWhitelistEnabled, zimbraExternalShareLifetime, zimbraExternalShareWhitelistDomain, zimbraExternalSharingEnabled, zimbraFeatureAdminMailEnabled, zimbraFeatureAdvancedSearchEnabled, zimbraFeatureAntispamEnabled, zimbraFeatureBriefcaseDocsEnabled, zimbraFeatureBriefcaseSlidesEnabled, zimbraFeatureBriefcaseSpreadsheetEnabled, zimbraFeatureBriefcasesEnabled, zimbraFeatureCalendarEnabled, zimbraFeatureCalendarReminderDeviceEmailEnabled, zimbraFeatureCalendarUpsellEnabled, zimbraFeatureCalendarUpsellURL, zimbraFeatureChangePasswordEnabled, zimbraFeatureComposeInNewWindowEnabled, zimbraFeatureConfirmationPageEnabled, zimbraFeatureContactsDetailedSearchEnabled, zimbraFeatureContactsEnabled, zimbraFeatureContactsUpsellEnabled, zimbraFeatureContactsUpsellURL, zimbraFeatureConversationsEnabled, zimbraFeatureCrocodocEnabled, zimbraFeatureDiscardInFiltersEnabled, zimbraFeatureDistributionListExpandMembersEnabled, zimbraFeatureDistributionListFolderEnabled, zimbraFeatureEwsEnabled, zimbraFeatureExportFolderEnabled, zimbraFeatureExternalFeedbackEnabled, zimbraFeatureFiltersEnabled, zimbraFeatureFlaggingEnabled, zimbraFeatureFreeBusyViewEnabled, zimbraFeatureFromDisplayEnabled, zimbraFeatureGalAutoCompleteEnabled, zimbraFeatureGalEnabled, zimbraFeatureGalSyncEnabled, zimbraFeatureGroupCalendarEnabled, zimbraFeatureHtmlComposeEnabled, zimbraFeatureIMEnabled, zimbraFeatureIdentitiesEnabled, zimbraFeatureImapDataSourceEnabled, zimbraFeatureImportExportFolderEnabled, zimbraFeatureImportFolderEnabled, zimbraFeatureInitialSearchPreferenceEnabled, zimbraFeatureInstantNotify, zimbraFeatureMAPIConnectorEnabled, zimbraFeatureMailEnabled, zimbraFeatureMailForwardingEnabled, zimbraFeatureMailForwardingInFiltersEnabled, zimbraFeatureMailPollingIntervalPreferenceEnabled, zimbraFeatureMailPriorityEnabled, zimbraFeatureMailSendLaterEnabled, zimbraFeatureMailUpsellEnabled, zimbraFeatureMailUpsellURL, zimbraFeatureManageSMIMECertificateEnabled, zimbraFeatureManageZimlets, zimbraFeatureMobilePolicyEnabled, zimbraFeatureMobileSyncEnabled, zimbraFeatureNewAddrBookEnabled, zimbraFeatureNewMailNotificationEnabled, zimbraFeatureNotebookEnabled, zimbraFeatureOpenMailInNewWindowEnabled, zimbraFeatureOptionsEnabled, zimbraFeatureOutOfOfficeReplyEnabled, zimbraFeaturePeopleSearchEnabled, zimbraFeaturePop3DataSourceEnabled, zimbraFeaturePortalEnabled, zimbraFeaturePriorityInboxEnabled, zimbraFeatureReadReceiptsEnabled, zimbraFeatureSMIMEEnabled, zimbraFeatureSavedSearchesEnabled, zimbraFeatureSharingEnabled, zimbraFeatureShortcutAliasesEnabled, zimbraFeatureSignaturesEnabled, zimbraFeatureSkinChangeEnabled, zimbraFeatureSocialEnabled, zimbraFeatureSocialExternalEnabled, zimbraFeatureSocialExternalURL, zimbraFeatureSocialFiltersEnabled, zimbraFeatureSocialName, zimbraFeatureSocialcastEnabled, zimbraFeatureTaggingEnabled, zimbraFeatureTasksEnabled, zimbraFeatureTouchClientEnabled, zimbraFeatureViewInHtmlEnabled, zimbraFeatureVoiceChangePinEnabled, zimbraFeatureVoiceEnabled, zimbraFeatureVoiceUpsellEnabled, zimbraFeatureVoiceUpsellURL, zimbraFeatureWebClientOfflineAccessEnabled, zimbraFeatureWebSearchEnabled, zimbraFeatureZimbraAssistantEnabled, zimbraFileAndroidCrashReportingEnabled, zimbraFileDeletionNotificationBody, zimbraFileDeletionNotificationSubject, zimbraFileExpirationWarningBody, zimbraFileExpirationWarningSubject, zimbraFileExpirationWarningThreshold, zimbraFileExternalShareLifetime, zimbraFileIOSCrashReportingEnabled, zimbraFileLifetime, zimbraFilePreviewMaxSize, zimbraFilePublicShareLifetime, zimbraFileShareLifetime, zimbraFileUploadMaxSizePerFile, zimbraFileVersionLifetime, zimbraFileVersioningEnabled, zimbraFilterBatchSize, zimbraFilterSleepInterval, zimbraForceClearCookies, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraFreebusyLocalMailboxNotActive, zimbraGalSyncAccountBasedAutoCompleteEnabled, zimbraIMAvailableInteropGateways, zimbraIMService, zimbraIdentityMaxNumEntries, zimbraImapEnabled, zimbraInterceptAddress, zimbraInterceptBody, zimbraInterceptFrom, zimbraInterceptSendHeadersOnly, zimbraInterceptSubject, zimbraInternalSendersDomain, zimbraJunkMessagesIndexingEnabled, zimbraLocale, zimbraLogOutFromAllServers, zimbraMailAllowReceiveButNotSendWhenOverQuota, zimbraMailBlacklistMaxNumEntries, zimbraMailDumpsterLifetime, zimbraMailForwardingAddressMaxLength, zimbraMailForwardingAddressMaxNumAddrs, zimbraMailHighlightObjectsMaxSize, zimbraMailHostPool, zimbraMailIdleSessionTimeout, zimbraMailMessageLifetime, zimbraMailMinPollingInterval, zimbraMailPurgeSystemPolicy, zimbraMailPurgeUseChangeDateForSpam, zimbraMailPurgeUseChangeDateForTrash, zimbraMailQuota, zimbraMailSignatureMaxLength, zimbraMailSpamLifetime, zimbraMailThreadingAlgorithm, zimbraMailTrashLifetime, zimbraMailTrustedSenderListMaxNumEntries, zimbraMailWhitelistMaxNumEntries, zimbraMaxContactsPerPage, zimbraMaxMailItemsPerPage, zimbraMaxVoiceItemsPerPage, zimbraMobileAttachSkippedItemEnabled, zimbraMobileForceProtocol25, zimbraMobileForceSamsungProtocol25, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMobileNotificationAdminAddress, zimbraMobileNotificationEnabled, zimbraMobileOutlookSyncEnabled, zimbraMobilePolicyAllowBluetooth, zimbraMobilePolicyAllowBrowser, zimbraMobilePolicyAllowCamera, zimbraMobilePolicyAllowConsumerEmail, zimbraMobilePolicyAllowDesktopSync, zimbraMobilePolicyAllowHTMLEmail, zimbraMobilePolicyAllowInternetSharing, zimbraMobilePolicyAllowIrDA, zimbraMobilePolicyAllowNonProvisionableDevices, zimbraMobilePolicyAllowPOPIMAPEmail, zimbraMobilePolicyAllowPartialProvisioning, zimbraMobilePolicyAllowRemoteDesktop, zimbraMobilePolicyAllowSMIMEEncryptionAlgorithmNegotiation, zimbraMobilePolicyAllowSMIMESoftCerts, zimbraMobilePolicyAllowSimpleDevicePassword, zimbraMobilePolicyAllowStorageCard, zimbraMobilePolicyAllowTextMessaging, zimbraMobilePolicyAllowUnsignedApplications, zimbraMobilePolicyAllowUnsignedInstallationPackages, zimbraMobilePolicyAllowWiFi, zimbraMobilePolicyAlphanumericDevicePasswordRequired, zimbraMobilePolicyApprovedApplication, zimbraMobilePolicyApprovedApplicationList, zimbraMobilePolicyDeviceEncryptionEnabled, zimbraMobilePolicyDevicePasswordEnabled, zimbraMobilePolicyDevicePasswordExpiration, zimbraMobilePolicyDevicePasswordHistory, zimbraMobilePolicyMaxCalendarAgeFilter, zimbraMobilePolicyMaxDevicePasswordFailedAttempts, zimbraMobilePolicyMaxEmailAgeFilter, zimbraMobilePolicyMaxEmailBodyTruncationSize, zimbraMobilePolicyMaxEmailHTMLBodyTruncationSize, zimbraMobilePolicyMaxInactivityTimeDeviceLock, zimbraMobilePolicyMinDevicePasswordComplexCharacters, zimbraMobilePolicyMinDevicePasswordLength, zimbraMobilePolicyPasswordRecoveryEnabled, zimbraMobilePolicyRefreshInterval, zimbraMobilePolicyRequireDeviceEncryption, zimbraMobilePolicyRequireEncryptedSMIMEMessages, zimbraMobilePolicyRequireEncryptionSMIMEAlgorithm, zimbraMobilePolicyRequireManualSyncWhenRoaming, zimbraMobilePolicyRequireSignedSMIMEAlgorithm, zimbraMobilePolicyRequireSignedSMIMEMessages, zimbraMobilePolicyRequireStorageCardEncryption, zimbraMobilePolicySuppressDeviceEncryption, zimbraMobilePolicyUnapprovedInROMApplication, zimbraMobileShareContactEnabled, zimbraMobileSmartForwardRFC822Enabled, zimbraMobileSyncKeyFormatConvertedFolders, zimbraMobileSyncRedoMaxAttempts, zimbraMobileTombstoneEnabled, zimbraNewMailNotificationBody, zimbraNewMailNotificationFrom, zimbraNewMailNotificationSubject, zimbraNotebookMaxRevisions, zimbraNotebookSanitizeHtml, zimbraNotes, zimbraPasswordAllowedChars, zimbraPasswordAllowedPunctuationChars, zimbraPasswordEnforceHistory, zimbraPasswordLocked, zimbraPasswordLockoutDuration, zimbraPasswordLockoutEnabled, zimbraPasswordLockoutFailureLifetime, zimbraPasswordLockoutMaxFailures, zimbraPasswordMaxAge, zimbraPasswordMaxLength, zimbraPasswordMinAge, zimbraPasswordMinAlphaChars, zimbraPasswordMinDigitsOrPuncs, zimbraPasswordMinLength, zimbraPasswordMinLowerCaseChars, zimbraPasswordMinNumericChars, zimbraPasswordMinPunctuationChars, zimbraPasswordMinUpperCaseChars, zimbraPop3Enabled, zimbraPortalName, zimbraPrefAccountTreeOpen, zimbraPrefAdminConsoleWarnOnExit, zimbraPrefAdvancedClientEnforceMinDisplay, zimbraPrefAppleIcalDelegationEnabled, zimbraPrefAutoAddAddressEnabled, zimbraPrefAutoCompleteQuickCompletionOnComma, zimbraPrefAutoSaveDraftInterval, zimbraPrefAutocompleteAddressBubblesEnabled, zimbraPrefBriefcaseReadingPaneLocation, zimbraPrefCalendarAllowCancelEmailToSelf, zimbraPrefCalendarAllowForwardedInvite, zimbraPrefCalendarAllowPublishMethodInvite, zimbraPrefCalendarAllowedTargetsForInviteDeniedAutoReply, zimbraPrefCalendarAlwaysShowMiniCal, zimbraPrefCalendarApptAllowAtendeeEdit, zimbraPrefCalendarApptReminderWarningTime, zimbraPrefCalendarApptVisibility, zimbraPrefCalendarAutoAddInvites, zimbraPrefCalendarDayHourEnd, zimbraPrefCalendarDayHourStart, zimbraPrefCalendarDefaultApptDuration, zimbraPrefCalendarFirstDayOfWeek, zimbraPrefCalendarInitialView, zimbraPrefCalendarNotifyDelegatedChanges, zimbraPrefCalendarReminderDuration1, zimbraPrefCalendarReminderDuration2, zimbraPrefCalendarReminderFlashTitle, zimbraPrefCalendarReminderMobile, zimbraPrefCalendarReminderSendEmail, zimbraPrefCalendarReminderSoundsEnabled, zimbraPrefCalendarReminderYMessenger, zimbraPrefCalendarSendInviteDeniedAutoReply, zimbraPrefCalendarShowDeclinedMeetings, zimbraPrefCalendarShowPastDueReminders, zimbraPrefCalendarToasterEnabled, zimbraPrefCalendarUseQuickAdd, zimbraPrefCalendarViewTimeInterval, zimbraPrefCalendarWorkingHours, zimbraPrefClientType, zimbraPrefColorMessagesEnabled, zimbraPrefComposeDirection, zimbraPrefComposeFormat, zimbraPrefComposeInNewWindow, zimbraPrefContactsDisableAutocompleteOnContactGroupMembers, zimbraPrefContactsExpandAppleContactGroups, zimbraPrefContactsInitialView, zimbraPrefContactsPerPage, zimbraPrefConvReadingPaneLocation, zimbraPrefConvShowCalendar, zimbraPrefConversationOrder, zimbraPrefDedupeMessagesSentToSelf, zimbraPrefDefaultPrintFontSize, zimbraPrefDelegatedSendSaveTarget, zimbraPrefDeleteInviteOnReply, zimbraPrefDisabledZimlets, zimbraPrefDisplayExternalImages, zimbraPrefExternalSendersType, zimbraPrefFileSharingApplication, zimbraPrefFolderColorEnabled, zimbraPrefFolderTreeOpen, zimbraPrefFont, zimbraPrefFontSize, zimbraPrefForwardIncludeOriginalText, zimbraPrefForwardReplyFormat, zimbraPrefForwardReplyInOriginalFormat, zimbraPrefForwardReplyPrefixChar, zimbraPrefGalAutoCompleteEnabled, zimbraPrefGalSearchEnabled, zimbraPrefGetMailAction, zimbraPrefGroupMailBy, zimbraPrefHtmlEditorDefaultFontColor, zimbraPrefHtmlEditorDefaultFontFamily, zimbraPrefHtmlEditorDefaultFontSize, zimbraPrefIMAutoLogin, zimbraPrefIMBuddyListSort, zimbraPrefIMFlashIcon, zimbraPrefIMFlashTitle, zimbraPrefIMHideBlockedBuddies, zimbraPrefIMHideOfflineBuddies, zimbraPrefIMIdleStatus, zimbraPrefIMIdleTimeout, zimbraPrefIMInstantNotify, zimbraPrefIMLogChats, zimbraPrefIMLogChatsEnabled, zimbraPrefIMNotifyPresence, zimbraPrefIMNotifyStatus, zimbraPrefIMReportIdle, zimbraPrefIMSoundsEnabled, zimbraPrefIMToasterEnabled, zimbraPrefImapSearchFoldersEnabled, zimbraPrefInboxReadLifetime, zimbraPrefInboxUnreadLifetime, zimbraPrefIncludeSharedItemsInSearch, zimbraPrefIncludeSpamInSearch, zimbraPrefIncludeTrashInSearch, zimbraPrefItemsPerVirtualPage, zimbraPrefJunkLifetime, zimbraPrefListViewColumns, zimbraPrefLocale, zimbraPrefMailDefaultCharset, zimbraPrefMailFlashIcon, zimbraPrefMailFlashTitle, zimbraPrefMailFoldersCheckedForNewMsgIndicator, zimbraPrefMailInitialSearch, zimbraPrefMailItemsPerPage, zimbraPrefMailPollingInterval, zimbraPrefMailRequestReadReceipts, zimbraPrefMailSelectAfterDelete, zimbraPrefMailSendReadReceipts, zimbraPrefMailSignatureStyle, zimbraPrefMailSoundsEnabled, zimbraPrefMailToasterEnabled, zimbraPrefMailTrustedSenderList, zimbraPrefMandatorySpellCheckEnabled, zimbraPrefMarkMsgRead, zimbraPrefMessageIdDedupingEnabled, zimbraPrefMessageViewHtmlPreferred, zimbraPrefOpenMailInNewWindow, zimbraPrefOutOfOfficeCacheDuration, zimbraPrefOutOfOfficeStatusAlertOnLogin, zimbraPrefPop3DeleteOption, zimbraPrefPop3DownloadSince, zimbraPrefPop3IncludeSpam, zimbraPrefReadingPaneEnabled, zimbraPrefReadingPaneLocation, zimbraPrefReplyIncludeOriginalText, zimbraPrefSaveToSent, zimbraPrefSearchTreeOpen, zimbraPrefSentLifetime, zimbraPrefSentMailFolder, zimbraPrefSharedAddrBookAutoCompleteEnabled, zimbraPrefShortEmailAddress, zimbraPrefShortcuts, zimbraPrefShowCalendarWeek, zimbraPrefShowComposeDirection, zimbraPrefShowFragments, zimbraPrefShowSearchString, zimbraPrefShowSelectionCheckbox, zimbraPrefSkin, zimbraPrefSortOrder, zimbraPrefSpellDictionary, zimbraPrefSpellIgnoreAllCaps, zimbraPrefSpellIgnorePattern, zimbraPrefSpellIgnoreWord, zimbraPrefStandardClientAccessibilityMode, zimbraPrefTagTreeOpen, zimbraPrefTasksFilterBy, zimbraPrefTasksReadingPaneLocation, zimbraPrefTimeZoneId, zimbraPrefTrashLifetime, zimbraPrefUseKeyboardShortcuts, zimbraPrefUseRfc2231, zimbraPrefUseSendMsgShortcut, zimbraPrefUseTimeZoneListInCalendar, zimbraPrefVoiceItemsPerPage, zimbraPrefWarnOnExit, zimbraPrefZimletTreeOpen, zimbraPrefZimlets, zimbraProxyAllowedDomains, zimbraProxyCacheableContentTypes, zimbraPublicShareLifetime, zimbraPublicSharingEnabled, zimbraQuotaWarnInterval, zimbraQuotaWarnMessage, zimbraQuotaWarnPercent, zimbraShareLifetime, zimbraSignatureMaxNumEntries, zimbraSignatureMinNumEntries, zimbraSmtpEnableTrace, zimbraSmtpRestrictEnvelopeFrom, zimbraSocialcastURL, zimbraSpamApplyUserFilters, zimbraStandardClientCustomPrefTab, zimbraStandardClientCustomPrefTabsEnabled, zimbraSyncWindowSize, zimbraTextAnalyzer, zimbraTouchJSErrorTrackingEnabled, zimbraTouchJSErrorTrackingKey, zimbraUCServiceId, zimbraWebClientOfflineSyncMaxDays, zimbraWebClientShowOfflineLink, zimbraZimletAvailableZimlets, zimbraZimletLoadSynchronously, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraCOS" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Class of Service data" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraCOS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
