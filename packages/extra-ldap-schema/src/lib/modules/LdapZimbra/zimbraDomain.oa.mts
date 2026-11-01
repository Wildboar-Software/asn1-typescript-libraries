/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
import { id_oc_zimbraDomain } from "../LdapZimbra/id-oc-zimbraDomain.va.mjs";

import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "../LdapZimbra/zimbraACE.oa.mjs";
import { zimbraAdminConsoleCatchAllAddressEnabled } from "../LdapZimbra/zimbraAdminConsoleCatchAllAddressEnabled.oa.mjs";
import { zimbraAdminConsoleDNSCheckEnabled } from "../LdapZimbra/zimbraAdminConsoleDNSCheckEnabled.oa.mjs";
import { zimbraAdminConsoleLDAPAuthEnabled } from "../LdapZimbra/zimbraAdminConsoleLDAPAuthEnabled.oa.mjs";
import { zimbraAdminConsoleLoginMessage } from "../LdapZimbra/zimbraAdminConsoleLoginMessage.oa.mjs";
import { zimbraAdminConsoleLoginURL } from "../LdapZimbra/zimbraAdminConsoleLoginURL.oa.mjs";
import { zimbraAdminConsoleLogoutURL } from "../LdapZimbra/zimbraAdminConsoleLogoutURL.oa.mjs";
import { zimbraAdminConsoleSkinEnabled } from "../LdapZimbra/zimbraAdminConsoleSkinEnabled.oa.mjs";
import { zimbraAggregateQuotaLastUsage } from "../LdapZimbra/zimbraAggregateQuotaLastUsage.oa.mjs";
import { zimbraAmavisDomainDisclaimerHTML } from "../LdapZimbra/zimbraAmavisDomainDisclaimerHTML.oa.mjs";
import { zimbraAmavisDomainDisclaimerText } from "../LdapZimbra/zimbraAmavisDomainDisclaimerText.oa.mjs";
import { zimbraAuthFallbackToLocal } from "../LdapZimbra/zimbraAuthFallbackToLocal.oa.mjs";
import { zimbraAuthKerberos5Realm } from "../LdapZimbra/zimbraAuthKerberos5Realm.oa.mjs";
import { zimbraAuthLdapBindDn } from "../LdapZimbra/zimbraAuthLdapBindDn.oa.mjs";
import { zimbraAuthLdapSearchBase } from "../LdapZimbra/zimbraAuthLdapSearchBase.oa.mjs";
import { zimbraAuthLdapSearchBindDn } from "../LdapZimbra/zimbraAuthLdapSearchBindDn.oa.mjs";
import { zimbraAuthLdapSearchBindPassword } from "../LdapZimbra/zimbraAuthLdapSearchBindPassword.oa.mjs";
import { zimbraAuthLdapSearchFilter } from "../LdapZimbra/zimbraAuthLdapSearchFilter.oa.mjs";
import { zimbraAuthLdapStartTlsEnabled } from "../LdapZimbra/zimbraAuthLdapStartTlsEnabled.oa.mjs";
import { zimbraAuthLdapURL } from "../LdapZimbra/zimbraAuthLdapURL.oa.mjs";
import { zimbraAuthMech } from "../LdapZimbra/zimbraAuthMech.oa.mjs";
import { zimbraAuthMechAdmin } from "../LdapZimbra/zimbraAuthMechAdmin.oa.mjs";
import { zimbraAutoProvAccountNameMap } from "../LdapZimbra/zimbraAutoProvAccountNameMap.oa.mjs";
import { zimbraAutoProvAttrMap } from "../LdapZimbra/zimbraAutoProvAttrMap.oa.mjs";
import { zimbraAutoProvAuthMech } from "../LdapZimbra/zimbraAutoProvAuthMech.oa.mjs";
import { zimbraAutoProvBatchSize } from "../LdapZimbra/zimbraAutoProvBatchSize.oa.mjs";
import { zimbraAutoProvLastPolledTimestamp } from "../LdapZimbra/zimbraAutoProvLastPolledTimestamp.oa.mjs";
import { zimbraAutoProvLdapAdminBindDn } from "../LdapZimbra/zimbraAutoProvLdapAdminBindDn.oa.mjs";
import { zimbraAutoProvLdapAdminBindPassword } from "../LdapZimbra/zimbraAutoProvLdapAdminBindPassword.oa.mjs";
import { zimbraAutoProvLdapBindDn } from "../LdapZimbra/zimbraAutoProvLdapBindDn.oa.mjs";
import { zimbraAutoProvLdapSearchBase } from "../LdapZimbra/zimbraAutoProvLdapSearchBase.oa.mjs";
import { zimbraAutoProvLdapSearchFilter } from "../LdapZimbra/zimbraAutoProvLdapSearchFilter.oa.mjs";
import { zimbraAutoProvLdapStartTlsEnabled } from "../LdapZimbra/zimbraAutoProvLdapStartTlsEnabled.oa.mjs";
import { zimbraAutoProvLdapURL } from "../LdapZimbra/zimbraAutoProvLdapURL.oa.mjs";
import { zimbraAutoProvListenerClass } from "../LdapZimbra/zimbraAutoProvListenerClass.oa.mjs";
import { zimbraAutoProvLock } from "../LdapZimbra/zimbraAutoProvLock.oa.mjs";
import { zimbraAutoProvMode } from "../LdapZimbra/zimbraAutoProvMode.oa.mjs";
import { zimbraAutoProvNotificationBody } from "../LdapZimbra/zimbraAutoProvNotificationBody.oa.mjs";
import { zimbraAutoProvNotificationFromAddress } from "../LdapZimbra/zimbraAutoProvNotificationFromAddress.oa.mjs";
import { zimbraAutoProvNotificationSubject } from "../LdapZimbra/zimbraAutoProvNotificationSubject.oa.mjs";
import { zimbraAvailableSkin } from "../LdapZimbra/zimbraAvailableSkin.oa.mjs";
import { zimbraBasicAuthRealm } from "../LdapZimbra/zimbraBasicAuthRealm.oa.mjs";
import { zimbraCalendarLocationDisabledFields } from "../LdapZimbra/zimbraCalendarLocationDisabledFields.oa.mjs";
import { zimbraChangePasswordURL } from "../LdapZimbra/zimbraChangePasswordURL.oa.mjs";
import { zimbraCommunityAPIClientID } from "../LdapZimbra/zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "../LdapZimbra/zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "../LdapZimbra/zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "../LdapZimbra/zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "../LdapZimbra/zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraCreateTimestamp } from "../LdapZimbra/zimbraCreateTimestamp.oa.mjs";
import { zimbraCsrfAllowedRefererHosts } from "../LdapZimbra/zimbraCsrfAllowedRefererHosts.oa.mjs";
import { zimbraDNSCheckHostname } from "../LdapZimbra/zimbraDNSCheckHostname.oa.mjs";
import { zimbraDomainAggregateQuota } from "../LdapZimbra/zimbraDomainAggregateQuota.oa.mjs";
import { zimbraDomainAggregateQuotaPolicy } from "../LdapZimbra/zimbraDomainAggregateQuotaPolicy.oa.mjs";
import { zimbraDomainAggregateQuotaWarnEmailRecipient } from "../LdapZimbra/zimbraDomainAggregateQuotaWarnEmailRecipient.oa.mjs";
import { zimbraDomainAggregateQuotaWarnPercent } from "../LdapZimbra/zimbraDomainAggregateQuotaWarnPercent.oa.mjs";
import { zimbraDomainAliasTargetId } from "../LdapZimbra/zimbraDomainAliasTargetId.oa.mjs";
import { zimbraDomainCOSMaxAccounts } from "../LdapZimbra/zimbraDomainCOSMaxAccounts.oa.mjs";
import { zimbraDomainDefaultCOSId } from "../LdapZimbra/zimbraDomainDefaultCOSId.oa.mjs";
import { zimbraDomainDefaultExternalUserCOSId } from "../LdapZimbra/zimbraDomainDefaultExternalUserCOSId.oa.mjs";
import { zimbraDomainFeatureMaxAccounts } from "../LdapZimbra/zimbraDomainFeatureMaxAccounts.oa.mjs";
import { zimbraDomainMandatoryMailSignatureEnabled } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureEnabled.oa.mjs";
import { zimbraDomainMandatoryMailSignatureHTML } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureHTML.oa.mjs";
import { zimbraDomainMandatoryMailSignatureText } from "../LdapZimbra/zimbraDomainMandatoryMailSignatureText.oa.mjs";
import { zimbraDomainMaxAccounts } from "../LdapZimbra/zimbraDomainMaxAccounts.oa.mjs";
import { zimbraDomainRenameInfo } from "../LdapZimbra/zimbraDomainRenameInfo.oa.mjs";
import { zimbraDomainStatus } from "../LdapZimbra/zimbraDomainStatus.oa.mjs";
import { zimbraErrorReportUrl } from "../LdapZimbra/zimbraErrorReportUrl.oa.mjs";
import { zimbraExternalGroupHandlerClass } from "../LdapZimbra/zimbraExternalGroupHandlerClass.oa.mjs";
import { zimbraExternalGroupLdapSearchBase } from "../LdapZimbra/zimbraExternalGroupLdapSearchBase.oa.mjs";
import { zimbraExternalGroupLdapSearchFilter } from "../LdapZimbra/zimbraExternalGroupLdapSearchFilter.oa.mjs";
import { zimbraExternalImapHostname } from "../LdapZimbra/zimbraExternalImapHostname.oa.mjs";
import { zimbraExternalImapPort } from "../LdapZimbra/zimbraExternalImapPort.oa.mjs";
import { zimbraExternalImapSSLHostname } from "../LdapZimbra/zimbraExternalImapSSLHostname.oa.mjs";
import { zimbraExternalImapSSLPort } from "../LdapZimbra/zimbraExternalImapSSLPort.oa.mjs";
import { zimbraExternalPop3Hostname } from "../LdapZimbra/zimbraExternalPop3Hostname.oa.mjs";
import { zimbraExternalPop3Port } from "../LdapZimbra/zimbraExternalPop3Port.oa.mjs";
import { zimbraExternalPop3SSLHostname } from "../LdapZimbra/zimbraExternalPop3SSLHostname.oa.mjs";
import { zimbraExternalPop3SSLPort } from "../LdapZimbra/zimbraExternalPop3SSLPort.oa.mjs";
import { zimbraExternalShareDomainWhitelistEnabled } from "../LdapZimbra/zimbraExternalShareDomainWhitelistEnabled.oa.mjs";
import { zimbraExternalShareInvitationUrlExpiration } from "../LdapZimbra/zimbraExternalShareInvitationUrlExpiration.oa.mjs";
import { zimbraExternalShareWhitelistDomain } from "../LdapZimbra/zimbraExternalShareWhitelistDomain.oa.mjs";
import { zimbraExternalSharingEnabled } from "../LdapZimbra/zimbraExternalSharingEnabled.oa.mjs";
import { zimbraFeatureCalendarReminderDeviceEmailEnabled } from "../LdapZimbra/zimbraFeatureCalendarReminderDeviceEmailEnabled.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "../LdapZimbra/zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFeatureSocialEnabled } from "../LdapZimbra/zimbraFeatureSocialEnabled.oa.mjs";
import { zimbraFeatureSocialExternalEnabled } from "../LdapZimbra/zimbraFeatureSocialExternalEnabled.oa.mjs";
import { zimbraFeatureSocialExternalURL } from "../LdapZimbra/zimbraFeatureSocialExternalURL.oa.mjs";
import { zimbraFeatureSocialName } from "../LdapZimbra/zimbraFeatureSocialName.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "../LdapZimbra/zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraForceClearCookies } from "../LdapZimbra/zimbraForceClearCookies.oa.mjs";
import { zimbraForeignName } from "../LdapZimbra/zimbraForeignName.oa.mjs";
import { zimbraForeignNameHandler } from "../LdapZimbra/zimbraForeignNameHandler.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "../LdapZimbra/zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "../LdapZimbra/zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "../LdapZimbra/zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "../LdapZimbra/zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "../LdapZimbra/zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeServerType } from "../LdapZimbra/zimbraFreebusyExchangeServerType.oa.mjs";
import { zimbraFreebusyExchangeURL } from "../LdapZimbra/zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "../LdapZimbra/zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraGalAccountId } from "../LdapZimbra/zimbraGalAccountId.oa.mjs";
import { zimbraGalAlwaysIncludeLocalCalendarResources } from "../LdapZimbra/zimbraGalAlwaysIncludeLocalCalendarResources.oa.mjs";
import { zimbraGalAutoCompleteLdapFilter } from "../LdapZimbra/zimbraGalAutoCompleteLdapFilter.oa.mjs";
import { zimbraGalDefinitionLastModifiedTime } from "../LdapZimbra/zimbraGalDefinitionLastModifiedTime.oa.mjs";
import { zimbraGalGroupIndicatorEnabled } from "../LdapZimbra/zimbraGalGroupIndicatorEnabled.oa.mjs";
import { zimbraGalInternalSearchBase } from "../LdapZimbra/zimbraGalInternalSearchBase.oa.mjs";
import { zimbraGalLdapAttrMap } from "../LdapZimbra/zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapAuthMech } from "../LdapZimbra/zimbraGalLdapAuthMech.oa.mjs";
import { zimbraGalLdapBindDn } from "../LdapZimbra/zimbraGalLdapBindDn.oa.mjs";
import { zimbraGalLdapBindPassword } from "../LdapZimbra/zimbraGalLdapBindPassword.oa.mjs";
import { zimbraGalLdapFilter } from "../LdapZimbra/zimbraGalLdapFilter.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "../LdapZimbra/zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapKerberos5Keytab } from "../LdapZimbra/zimbraGalLdapKerberos5Keytab.oa.mjs";
import { zimbraGalLdapKerberos5Principal } from "../LdapZimbra/zimbraGalLdapKerberos5Principal.oa.mjs";
import { zimbraGalLdapPageSize } from "../LdapZimbra/zimbraGalLdapPageSize.oa.mjs";
import { zimbraGalLdapSearchBase } from "../LdapZimbra/zimbraGalLdapSearchBase.oa.mjs";
import { zimbraGalLdapStartTlsEnabled } from "../LdapZimbra/zimbraGalLdapStartTlsEnabled.oa.mjs";
import { zimbraGalLdapURL } from "../LdapZimbra/zimbraGalLdapURL.oa.mjs";
import { zimbraGalLdapValueMap } from "../LdapZimbra/zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalMaxResults } from "../LdapZimbra/zimbraGalMaxResults.oa.mjs";
import { zimbraGalMode } from "../LdapZimbra/zimbraGalMode.oa.mjs";
import { zimbraGalSyncInternalSearchBase } from "../LdapZimbra/zimbraGalSyncInternalSearchBase.oa.mjs";
import { zimbraGalSyncLdapAuthMech } from "../LdapZimbra/zimbraGalSyncLdapAuthMech.oa.mjs";
import { zimbraGalSyncLdapBindDn } from "../LdapZimbra/zimbraGalSyncLdapBindDn.oa.mjs";
import { zimbraGalSyncLdapBindPassword } from "../LdapZimbra/zimbraGalSyncLdapBindPassword.oa.mjs";
import { zimbraGalSyncLdapFilter } from "../LdapZimbra/zimbraGalSyncLdapFilter.oa.mjs";
import { zimbraGalSyncLdapKerberos5Keytab } from "../LdapZimbra/zimbraGalSyncLdapKerberos5Keytab.oa.mjs";
import { zimbraGalSyncLdapKerberos5Principal } from "../LdapZimbra/zimbraGalSyncLdapKerberos5Principal.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "../LdapZimbra/zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncLdapSearchBase } from "../LdapZimbra/zimbraGalSyncLdapSearchBase.oa.mjs";
import { zimbraGalSyncLdapStartTlsEnabled } from "../LdapZimbra/zimbraGalSyncLdapStartTlsEnabled.oa.mjs";
import { zimbraGalSyncLdapURL } from "../LdapZimbra/zimbraGalSyncLdapURL.oa.mjs";
import { zimbraGalSyncMaxConcurrentClients } from "../LdapZimbra/zimbraGalSyncMaxConcurrentClients.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "../LdapZimbra/zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalTokenizeAutoCompleteKey } from "../LdapZimbra/zimbraGalTokenizeAutoCompleteKey.oa.mjs";
import { zimbraGalTokenizeSearchKey } from "../LdapZimbra/zimbraGalTokenizeSearchKey.oa.mjs";
import { zimbraHelpAdminURL } from "../LdapZimbra/zimbraHelpAdminURL.oa.mjs";
import { zimbraHelpAdvancedURL } from "../LdapZimbra/zimbraHelpAdvancedURL.oa.mjs";
import { zimbraHelpDelegatedURL } from "../LdapZimbra/zimbraHelpDelegatedURL.oa.mjs";
import { zimbraHelpStandardURL } from "../LdapZimbra/zimbraHelpStandardURL.oa.mjs";
import { zimbraInternalSendersDomain } from "../LdapZimbra/zimbraInternalSendersDomain.oa.mjs";
import { zimbraInternalSharingCrossDomainEnabled } from "../LdapZimbra/zimbraInternalSharingCrossDomainEnabled.oa.mjs";
import { zimbraInternalSharingDomain } from "../LdapZimbra/zimbraInternalSharingDomain.oa.mjs";
import { zimbraLdapGalSyncDisabled } from "../LdapZimbra/zimbraLdapGalSyncDisabled.oa.mjs";
import { zimbraLocale } from "../LdapZimbra/zimbraLocale.oa.mjs";
import { zimbraMailAddressValidationRegex } from "../LdapZimbra/zimbraMailAddressValidationRegex.oa.mjs";
import { zimbraMailDomainQuota } from "../LdapZimbra/zimbraMailDomainQuota.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMap } from "../LdapZimbra/zimbraMailSSLClientCertPrincipalMap.oa.mjs";
import { zimbraMailTrustedSenderListMaxNumEntries } from "../LdapZimbra/zimbraMailTrustedSenderListMaxNumEntries.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "../LdapZimbra/zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "../LdapZimbra/zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMyoneloginSamlSigningCert } from "../LdapZimbra/zimbraMyoneloginSamlSigningCert.oa.mjs";
import { zimbraNotebookAccount } from "../LdapZimbra/zimbraNotebookAccount.oa.mjs";
import { zimbraNotes } from "../LdapZimbra/zimbraNotes.oa.mjs";
import { zimbraOAuthConsumerCredentials } from "../LdapZimbra/zimbraOAuthConsumerCredentials.oa.mjs";
import { zimbraOpenidConsumerAllowedOPEndpointURL } from "../LdapZimbra/zimbraOpenidConsumerAllowedOPEndpointURL.oa.mjs";
import { zimbraPasswordChangeListener } from "../LdapZimbra/zimbraPasswordChangeListener.oa.mjs";
import { zimbraPreAuthKey } from "../LdapZimbra/zimbraPreAuthKey.oa.mjs";
import { zimbraPrefColorMessagesEnabled } from "../LdapZimbra/zimbraPrefColorMessagesEnabled.oa.mjs";
import { zimbraPrefMailTrustedSenderList } from "../LdapZimbra/zimbraPrefMailTrustedSenderList.oa.mjs";
import { zimbraPrefSkin } from "../LdapZimbra/zimbraPrefSkin.oa.mjs";
import { zimbraPrefSpellIgnoreWord } from "../LdapZimbra/zimbraPrefSpellIgnoreWord.oa.mjs";
import { zimbraPrefTimeZoneId } from "../LdapZimbra/zimbraPrefTimeZoneId.oa.mjs";
import { zimbraPublicServiceHostname } from "../LdapZimbra/zimbraPublicServiceHostname.oa.mjs";
import { zimbraPublicServicePort } from "../LdapZimbra/zimbraPublicServicePort.oa.mjs";
import { zimbraPublicServiceProtocol } from "../LdapZimbra/zimbraPublicServiceProtocol.oa.mjs";
import { zimbraPublicSharingEnabled } from "../LdapZimbra/zimbraPublicSharingEnabled.oa.mjs";
import { zimbraResponseHeader } from "../LdapZimbra/zimbraResponseHeader.oa.mjs";
import { zimbraReverseProxyClientCertCA } from "../LdapZimbra/zimbraReverseProxyClientCertCA.oa.mjs";
import { zimbraReverseProxyClientCertMode } from "../LdapZimbra/zimbraReverseProxyClientCertMode.oa.mjs";
import { zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "../LdapZimbra/zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.oa.mjs";
import { zimbraReverseProxyUseExternalRoute } from "../LdapZimbra/zimbraReverseProxyUseExternalRoute.oa.mjs";
import { zimbraReverseProxyUseExternalRouteIfAccountNotExist } from "../LdapZimbra/zimbraReverseProxyUseExternalRouteIfAccountNotExist.oa.mjs";
import { zimbraSMIMELdapAttribute } from "../LdapZimbra/zimbraSMIMELdapAttribute.oa.mjs";
import { zimbraSMIMELdapBindDn } from "../LdapZimbra/zimbraSMIMELdapBindDn.oa.mjs";
import { zimbraSMIMELdapBindPassword } from "../LdapZimbra/zimbraSMIMELdapBindPassword.oa.mjs";
import { zimbraSMIMELdapDiscoverSearchBaseEnabled } from "../LdapZimbra/zimbraSMIMELdapDiscoverSearchBaseEnabled.oa.mjs";
import { zimbraSMIMELdapFilter } from "../LdapZimbra/zimbraSMIMELdapFilter.oa.mjs";
import { zimbraSMIMELdapSearchBase } from "../LdapZimbra/zimbraSMIMELdapSearchBase.oa.mjs";
import { zimbraSMIMELdapStartTlsEnabled } from "../LdapZimbra/zimbraSMIMELdapStartTlsEnabled.oa.mjs";
import { zimbraSMIMELdapURL } from "../LdapZimbra/zimbraSMIMELdapURL.oa.mjs";
import { zimbraSSLCertificate } from "../LdapZimbra/zimbraSSLCertificate.oa.mjs";
import { zimbraSSLPrivateKey } from "../LdapZimbra/zimbraSSLPrivateKey.oa.mjs";
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
import { zimbraSmtpSendPartial } from "../LdapZimbra/zimbraSmtpSendPartial.oa.mjs";
import { zimbraSmtpTimeout } from "../LdapZimbra/zimbraSmtpTimeout.oa.mjs";
import { zimbraSpamTrashAlias } from "../LdapZimbra/zimbraSpamTrashAlias.oa.mjs";
import { zimbraStandardClientCustomPrefTab } from "../LdapZimbra/zimbraStandardClientCustomPrefTab.oa.mjs";
import { zimbraStandardClientCustomPrefTabsEnabled } from "../LdapZimbra/zimbraStandardClientCustomPrefTabsEnabled.oa.mjs";
import { zimbraUCServiceId } from "../LdapZimbra/zimbraUCServiceId.oa.mjs";
import { zimbraVirtualHostname } from "../LdapZimbra/zimbraVirtualHostname.oa.mjs";
import { zimbraVirtualIPAddress } from "../LdapZimbra/zimbraVirtualIPAddress.oa.mjs";
import { zimbraWebClientAdminReference } from "../LdapZimbra/zimbraWebClientAdminReference.oa.mjs";
import { zimbraWebClientLoginURL } from "../LdapZimbra/zimbraWebClientLoginURL.oa.mjs";
import { zimbraWebClientLoginURLAllowedIP } from "../LdapZimbra/zimbraWebClientLoginURLAllowedIP.oa.mjs";
import { zimbraWebClientLoginURLAllowedUA } from "../LdapZimbra/zimbraWebClientLoginURLAllowedUA.oa.mjs";
import { zimbraWebClientLogoutURL } from "../LdapZimbra/zimbraWebClientLogoutURL.oa.mjs";
import { zimbraWebClientLogoutURLAllowedIP } from "../LdapZimbra/zimbraWebClientLogoutURLAllowedIP.oa.mjs";
import { zimbraWebClientLogoutURLAllowedUA } from "../LdapZimbra/zimbraWebClientLogoutURLAllowedUA.oa.mjs";
import { zimbraWebClientMaxInputBufferLength } from "../LdapZimbra/zimbraWebClientMaxInputBufferLength.oa.mjs";
import { zimbraZimletDataSensitiveInMixedModeDisabled } from "../LdapZimbra/zimbraZimletDataSensitiveInMixedModeDisabled.oa.mjs";
import { zimbraZimletDomainAvailableZimlets } from "../LdapZimbra/zimbraZimletDomainAvailableZimlets.oa.mjs";
import { zimbraDomainName } from "../LdapZimbra/zimbraDomainName.oa.mjs";
import { zimbraDomainType } from "../LdapZimbra/zimbraDomainType.oa.mjs";
import { zimbraId } from "../LdapZimbra/zimbraId.oa.mjs";
/**
 * @summary zimbraDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { zimbraMailRecipient }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { zimbraDomainName
 *                               | zimbraDomainType
 *                               | zimbraId }
 *   MAY CONTAIN               { description
 *                               | zimbraACE
 *                               | zimbraAdminConsoleCatchAllAddressEnabled
 *                               | zimbraAdminConsoleDNSCheckEnabled
 *                               | zimbraAdminConsoleLDAPAuthEnabled
 *                               | zimbraAdminConsoleLoginMessage
 *                               | zimbraAdminConsoleLoginURL
 *                               | zimbraAdminConsoleLogoutURL
 *                               | zimbraAdminConsoleSkinEnabled
 *                               | zimbraAggregateQuotaLastUsage
 *                               | zimbraAmavisDomainDisclaimerHTML
 *                               | zimbraAmavisDomainDisclaimerText
 *                               | zimbraAuthFallbackToLocal
 *                               | zimbraAuthKerberos5Realm
 *                               | zimbraAuthLdapBindDn
 *                               | zimbraAuthLdapSearchBase
 *                               | zimbraAuthLdapSearchBindDn
 *                               | zimbraAuthLdapSearchBindPassword
 *                               | zimbraAuthLdapSearchFilter
 *                               | zimbraAuthLdapStartTlsEnabled
 *                               | zimbraAuthLdapURL
 *                               | zimbraAuthMech
 *                               | zimbraAuthMechAdmin
 *                               | zimbraAutoProvAccountNameMap
 *                               | zimbraAutoProvAttrMap
 *                               | zimbraAutoProvAuthMech
 *                               | zimbraAutoProvBatchSize
 *                               | zimbraAutoProvLastPolledTimestamp
 *                               | zimbraAutoProvLdapAdminBindDn
 *                               | zimbraAutoProvLdapAdminBindPassword
 *                               | zimbraAutoProvLdapBindDn
 *                               | zimbraAutoProvLdapSearchBase
 *                               | zimbraAutoProvLdapSearchFilter
 *                               | zimbraAutoProvLdapStartTlsEnabled
 *                               | zimbraAutoProvLdapURL
 *                               | zimbraAutoProvListenerClass
 *                               | zimbraAutoProvLock
 *                               | zimbraAutoProvMode
 *                               | zimbraAutoProvNotificationBody
 *                               | zimbraAutoProvNotificationFromAddress
 *                               | zimbraAutoProvNotificationSubject
 *                               | zimbraAvailableSkin
 *                               | zimbraBasicAuthRealm
 *                               | zimbraCalendarLocationDisabledFields
 *                               | zimbraChangePasswordURL
 *                               | zimbraCommunityAPIClientID
 *                               | zimbraCommunityAPIClientSecret
 *                               | zimbraCommunityBaseURL
 *                               | zimbraCommunityHomeURL
 *                               | zimbraCommunityUsernameMapping
 *                               | zimbraCreateTimestamp
 *                               | zimbraCsrfAllowedRefererHosts
 *                               | zimbraDNSCheckHostname
 *                               | zimbraDomainAggregateQuota
 *                               | zimbraDomainAggregateQuotaPolicy
 *                               | zimbraDomainAggregateQuotaWarnEmailRecipient
 *                               | zimbraDomainAggregateQuotaWarnPercent
 *                               | zimbraDomainAliasTargetId
 *                               | zimbraDomainCOSMaxAccounts
 *                               | zimbraDomainDefaultCOSId
 *                               | zimbraDomainDefaultExternalUserCOSId
 *                               | zimbraDomainFeatureMaxAccounts
 *                               | zimbraDomainMandatoryMailSignatureEnabled
 *                               | zimbraDomainMandatoryMailSignatureHTML
 *                               | zimbraDomainMandatoryMailSignatureText
 *                               | zimbraDomainMaxAccounts
 *                               | zimbraDomainRenameInfo
 *                               | zimbraDomainStatus
 *                               | zimbraErrorReportUrl
 *                               | zimbraExternalGroupHandlerClass
 *                               | zimbraExternalGroupLdapSearchBase
 *                               | zimbraExternalGroupLdapSearchFilter
 *                               | zimbraExternalImapHostname
 *                               | zimbraExternalImapPort
 *                               | zimbraExternalImapSSLHostname
 *                               | zimbraExternalImapSSLPort
 *                               | zimbraExternalPop3Hostname
 *                               | zimbraExternalPop3Port
 *                               | zimbraExternalPop3SSLHostname
 *                               | zimbraExternalPop3SSLPort
 *                               | zimbraExternalShareDomainWhitelistEnabled
 *                               | zimbraExternalShareInvitationUrlExpiration
 *                               | zimbraExternalShareWhitelistDomain
 *                               | zimbraExternalSharingEnabled
 *                               | zimbraFeatureCalendarReminderDeviceEmailEnabled
 *                               | zimbraFeatureDistributionListFolderEnabled
 *                               | zimbraFeatureSocialEnabled
 *                               | zimbraFeatureSocialExternalEnabled
 *                               | zimbraFeatureSocialExternalURL
 *                               | zimbraFeatureSocialName
 *                               | zimbraFileUploadMaxSizePerFile
 *                               | zimbraForceClearCookies
 *                               | zimbraForeignName
 *                               | zimbraForeignNameHandler
 *                               | zimbraFreebusyExchangeAuthPassword
 *                               | zimbraFreebusyExchangeAuthScheme
 *                               | zimbraFreebusyExchangeAuthUsername
 *                               | zimbraFreebusyExchangeCachedInterval
 *                               | zimbraFreebusyExchangeCachedIntervalStart
 *                               | zimbraFreebusyExchangeServerType
 *                               | zimbraFreebusyExchangeURL
 *                               | zimbraFreebusyExchangeUserOrg
 *                               | zimbraGalAccountId
 *                               | zimbraGalAlwaysIncludeLocalCalendarResources
 *                               | zimbraGalAutoCompleteLdapFilter
 *                               | zimbraGalDefinitionLastModifiedTime
 *                               | zimbraGalGroupIndicatorEnabled
 *                               | zimbraGalInternalSearchBase
 *                               | zimbraGalLdapAttrMap
 *                               | zimbraGalLdapAuthMech
 *                               | zimbraGalLdapBindDn
 *                               | zimbraGalLdapBindPassword
 *                               | zimbraGalLdapFilter
 *                               | zimbraGalLdapGroupHandlerClass
 *                               | zimbraGalLdapKerberos5Keytab
 *                               | zimbraGalLdapKerberos5Principal
 *                               | zimbraGalLdapPageSize
 *                               | zimbraGalLdapSearchBase
 *                               | zimbraGalLdapStartTlsEnabled
 *                               | zimbraGalLdapURL
 *                               | zimbraGalLdapValueMap
 *                               | zimbraGalMaxResults
 *                               | zimbraGalMode
 *                               | zimbraGalSyncInternalSearchBase
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
 *                               | zimbraGalSyncMaxConcurrentClients
 *                               | zimbraGalSyncTimestampFormat
 *                               | zimbraGalTokenizeAutoCompleteKey
 *                               | zimbraGalTokenizeSearchKey
 *                               | zimbraHelpAdminURL
 *                               | zimbraHelpAdvancedURL
 *                               | zimbraHelpDelegatedURL
 *                               | zimbraHelpStandardURL
 *                               | zimbraInternalSendersDomain
 *                               | zimbraInternalSharingCrossDomainEnabled
 *                               | zimbraInternalSharingDomain
 *                               | zimbraLdapGalSyncDisabled
 *                               | zimbraLocale
 *                               | zimbraMailAddressValidationRegex
 *                               | zimbraMailDomainQuota
 *                               | zimbraMailSSLClientCertPrincipalMap
 *                               | zimbraMailTrustedSenderListMaxNumEntries
 *                               | zimbraMobileItemsToTrackPerFolderMaxSize
 *                               | zimbraMobileMetadataMaxSizeEnabled
 *                               | zimbraMyoneloginSamlSigningCert
 *                               | zimbraNotebookAccount
 *                               | zimbraNotes
 *                               | zimbraOAuthConsumerCredentials
 *                               | zimbraOpenidConsumerAllowedOPEndpointURL
 *                               | zimbraPasswordChangeListener
 *                               | zimbraPreAuthKey
 *                               | zimbraPrefColorMessagesEnabled
 *                               | zimbraPrefMailTrustedSenderList
 *                               | zimbraPrefSkin
 *                               | zimbraPrefSpellIgnoreWord
 *                               | zimbraPrefTimeZoneId
 *                               | zimbraPublicServiceHostname
 *                               | zimbraPublicServicePort
 *                               | zimbraPublicServiceProtocol
 *                               | zimbraPublicSharingEnabled
 *                               | zimbraResponseHeader
 *                               | zimbraReverseProxyClientCertCA
 *                               | zimbraReverseProxyClientCertMode
 *                               | zimbraReverseProxyExternalRouteIncludeOriginalAuthusername
 *                               | zimbraReverseProxyUseExternalRoute
 *                               | zimbraReverseProxyUseExternalRouteIfAccountNotExist
 *                               | zimbraSMIMELdapAttribute
 *                               | zimbraSMIMELdapBindDn
 *                               | zimbraSMIMELdapBindPassword
 *                               | zimbraSMIMELdapDiscoverSearchBaseEnabled
 *                               | zimbraSMIMELdapFilter
 *                               | zimbraSMIMELdapSearchBase
 *                               | zimbraSMIMELdapStartTlsEnabled
 *                               | zimbraSMIMELdapURL
 *                               | zimbraSSLCertificate
 *                               | zimbraSSLPrivateKey
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
 *                               | zimbraSmtpSendPartial
 *                               | zimbraSmtpTimeout
 *                               | zimbraSpamTrashAlias
 *                               | zimbraStandardClientCustomPrefTab
 *                               | zimbraStandardClientCustomPrefTabsEnabled
 *                               | zimbraUCServiceId
 *                               | zimbraVirtualHostname
 *                               | zimbraVirtualIPAddress
 *                               | zimbraWebClientAdminReference
 *                               | zimbraWebClientLoginURL
 *                               | zimbraWebClientLoginURLAllowedIP
 *                               | zimbraWebClientLoginURLAllowedUA
 *                               | zimbraWebClientLogoutURL
 *                               | zimbraWebClientLogoutURLAllowedIP
 *                               | zimbraWebClientLogoutURLAllowedUA
 *                               | zimbraWebClientMaxInputBufferLength
 *                               | zimbraZimletDataSensitiveInMixedModeDisabled
 *                               | zimbraZimletDomainAvailableZimlets }
 *   LDAP-NAME                 {"zimbraDomain"}
 *   LDAP-DESC                 "Domain object"
 *   ID                        id-oc-zimbraDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraMailRecipient, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ zimbraDomainName, zimbraDomainType, zimbraId, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, zimbraACE, zimbraAdminConsoleCatchAllAddressEnabled, zimbraAdminConsoleDNSCheckEnabled, zimbraAdminConsoleLDAPAuthEnabled, zimbraAdminConsoleLoginMessage, zimbraAdminConsoleLoginURL, zimbraAdminConsoleLogoutURL, zimbraAdminConsoleSkinEnabled, zimbraAggregateQuotaLastUsage, zimbraAmavisDomainDisclaimerHTML, zimbraAmavisDomainDisclaimerText, zimbraAuthFallbackToLocal, zimbraAuthKerberos5Realm, zimbraAuthLdapBindDn, zimbraAuthLdapSearchBase, zimbraAuthLdapSearchBindDn, zimbraAuthLdapSearchBindPassword, zimbraAuthLdapSearchFilter, zimbraAuthLdapStartTlsEnabled, zimbraAuthLdapURL, zimbraAuthMech, zimbraAuthMechAdmin, zimbraAutoProvAccountNameMap, zimbraAutoProvAttrMap, zimbraAutoProvAuthMech, zimbraAutoProvBatchSize, zimbraAutoProvLastPolledTimestamp, zimbraAutoProvLdapAdminBindDn, zimbraAutoProvLdapAdminBindPassword, zimbraAutoProvLdapBindDn, zimbraAutoProvLdapSearchBase, zimbraAutoProvLdapSearchFilter, zimbraAutoProvLdapStartTlsEnabled, zimbraAutoProvLdapURL, zimbraAutoProvListenerClass, zimbraAutoProvLock, zimbraAutoProvMode, zimbraAutoProvNotificationBody, zimbraAutoProvNotificationFromAddress, zimbraAutoProvNotificationSubject, zimbraAvailableSkin, zimbraBasicAuthRealm, zimbraCalendarLocationDisabledFields, zimbraChangePasswordURL, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraCreateTimestamp, zimbraCsrfAllowedRefererHosts, zimbraDNSCheckHostname, zimbraDomainAggregateQuota, zimbraDomainAggregateQuotaPolicy, zimbraDomainAggregateQuotaWarnEmailRecipient, zimbraDomainAggregateQuotaWarnPercent, zimbraDomainAliasTargetId, zimbraDomainCOSMaxAccounts, zimbraDomainDefaultCOSId, zimbraDomainDefaultExternalUserCOSId, zimbraDomainFeatureMaxAccounts, zimbraDomainMandatoryMailSignatureEnabled, zimbraDomainMandatoryMailSignatureHTML, zimbraDomainMandatoryMailSignatureText, zimbraDomainMaxAccounts, zimbraDomainRenameInfo, zimbraDomainStatus, zimbraErrorReportUrl, zimbraExternalGroupHandlerClass, zimbraExternalGroupLdapSearchBase, zimbraExternalGroupLdapSearchFilter, zimbraExternalImapHostname, zimbraExternalImapPort, zimbraExternalImapSSLHostname, zimbraExternalImapSSLPort, zimbraExternalPop3Hostname, zimbraExternalPop3Port, zimbraExternalPop3SSLHostname, zimbraExternalPop3SSLPort, zimbraExternalShareDomainWhitelistEnabled, zimbraExternalShareInvitationUrlExpiration, zimbraExternalShareWhitelistDomain, zimbraExternalSharingEnabled, zimbraFeatureCalendarReminderDeviceEmailEnabled, zimbraFeatureDistributionListFolderEnabled, zimbraFeatureSocialEnabled, zimbraFeatureSocialExternalEnabled, zimbraFeatureSocialExternalURL, zimbraFeatureSocialName, zimbraFileUploadMaxSizePerFile, zimbraForceClearCookies, zimbraForeignName, zimbraForeignNameHandler, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeServerType, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraGalAccountId, zimbraGalAlwaysIncludeLocalCalendarResources, zimbraGalAutoCompleteLdapFilter, zimbraGalDefinitionLastModifiedTime, zimbraGalGroupIndicatorEnabled, zimbraGalInternalSearchBase, zimbraGalLdapAttrMap, zimbraGalLdapAuthMech, zimbraGalLdapBindDn, zimbraGalLdapBindPassword, zimbraGalLdapFilter, zimbraGalLdapGroupHandlerClass, zimbraGalLdapKerberos5Keytab, zimbraGalLdapKerberos5Principal, zimbraGalLdapPageSize, zimbraGalLdapSearchBase, zimbraGalLdapStartTlsEnabled, zimbraGalLdapURL, zimbraGalLdapValueMap, zimbraGalMaxResults, zimbraGalMode, zimbraGalSyncInternalSearchBase, zimbraGalSyncLdapAuthMech, zimbraGalSyncLdapBindDn, zimbraGalSyncLdapBindPassword, zimbraGalSyncLdapFilter, zimbraGalSyncLdapKerberos5Keytab, zimbraGalSyncLdapKerberos5Principal, zimbraGalSyncLdapPageSize, zimbraGalSyncLdapSearchBase, zimbraGalSyncLdapStartTlsEnabled, zimbraGalSyncLdapURL, zimbraGalSyncMaxConcurrentClients, zimbraGalSyncTimestampFormat, zimbraGalTokenizeAutoCompleteKey, zimbraGalTokenizeSearchKey, zimbraHelpAdminURL, zimbraHelpAdvancedURL, zimbraHelpDelegatedURL, zimbraHelpStandardURL, zimbraInternalSendersDomain, zimbraInternalSharingCrossDomainEnabled, zimbraInternalSharingDomain, zimbraLdapGalSyncDisabled, zimbraLocale, zimbraMailAddressValidationRegex, zimbraMailDomainQuota, zimbraMailSSLClientCertPrincipalMap, zimbraMailTrustedSenderListMaxNumEntries, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMyoneloginSamlSigningCert, zimbraNotebookAccount, zimbraNotes, zimbraOAuthConsumerCredentials, zimbraOpenidConsumerAllowedOPEndpointURL, zimbraPasswordChangeListener, zimbraPreAuthKey, zimbraPrefColorMessagesEnabled, zimbraPrefMailTrustedSenderList, zimbraPrefSkin, zimbraPrefSpellIgnoreWord, zimbraPrefTimeZoneId, zimbraPublicServiceHostname, zimbraPublicServicePort, zimbraPublicServiceProtocol, zimbraPublicSharingEnabled, zimbraResponseHeader, zimbraReverseProxyClientCertCA, zimbraReverseProxyClientCertMode, zimbraReverseProxyExternalRouteIncludeOriginalAuthusername, zimbraReverseProxyUseExternalRoute, zimbraReverseProxyUseExternalRouteIfAccountNotExist, zimbraSMIMELdapAttribute, zimbraSMIMELdapBindDn, zimbraSMIMELdapBindPassword, zimbraSMIMELdapDiscoverSearchBaseEnabled, zimbraSMIMELdapFilter, zimbraSMIMELdapSearchBase, zimbraSMIMELdapStartTlsEnabled, zimbraSMIMELdapURL, zimbraSSLCertificate, zimbraSSLPrivateKey, zimbraSkinBackgroundColor, zimbraSkinFavicon, zimbraSkinForegroundColor, zimbraSkinLogoAppBanner, zimbraSkinLogoLoginBanner, zimbraSkinLogoURL, zimbraSkinSecondaryColor, zimbraSkinSelectionColor, zimbraSmtpHostname, zimbraSmtpPort, zimbraSmtpSendPartial, zimbraSmtpTimeout, zimbraSpamTrashAlias, zimbraStandardClientCustomPrefTab, zimbraStandardClientCustomPrefTabsEnabled, zimbraUCServiceId, zimbraVirtualHostname, zimbraVirtualIPAddress, zimbraWebClientAdminReference, zimbraWebClientLoginURL, zimbraWebClientLoginURLAllowedIP, zimbraWebClientLoginURLAllowedUA, zimbraWebClientLogoutURL, zimbraWebClientLogoutURLAllowedIP, zimbraWebClientLogoutURLAllowedUA, zimbraWebClientMaxInputBufferLength, zimbraZimletDataSensitiveInMixedModeDisabled, zimbraZimletDomainAvailableZimlets, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Domain object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
