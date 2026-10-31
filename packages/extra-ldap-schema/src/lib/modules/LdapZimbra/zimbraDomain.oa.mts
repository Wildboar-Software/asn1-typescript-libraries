/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_zimbraDomain } from "../LdapZimbra/id-oc-zimbraDomain.va.mjs";
import { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";
import { zimbraAdminConsoleCatchAllAddressEnabled } from "./zimbraAdminConsoleCatchAllAddressEnabled.oa.mjs";
import { zimbraAdminConsoleDNSCheckEnabled } from "./zimbraAdminConsoleDNSCheckEnabled.oa.mjs";
import { zimbraAdminConsoleLDAPAuthEnabled } from "./zimbraAdminConsoleLDAPAuthEnabled.oa.mjs";
import { zimbraAdminConsoleLoginMessage } from "./zimbraAdminConsoleLoginMessage.oa.mjs";
import { zimbraAdminConsoleLoginURL } from "./zimbraAdminConsoleLoginURL.oa.mjs";
import { zimbraAdminConsoleLogoutURL } from "./zimbraAdminConsoleLogoutURL.oa.mjs";
import { zimbraAdminConsoleSkinEnabled } from "./zimbraAdminConsoleSkinEnabled.oa.mjs";
import { zimbraAggregateQuotaLastUsage } from "./zimbraAggregateQuotaLastUsage.oa.mjs";
import { zimbraAmavisDomainDisclaimerHTML } from "./zimbraAmavisDomainDisclaimerHTML.oa.mjs";
import { zimbraAmavisDomainDisclaimerText } from "./zimbraAmavisDomainDisclaimerText.oa.mjs";
import { zimbraAuthFallbackToLocal } from "./zimbraAuthFallbackToLocal.oa.mjs";
import { zimbraAuthKerberos5Realm } from "./zimbraAuthKerberos5Realm.oa.mjs";
import { zimbraAuthLdapBindDn } from "./zimbraAuthLdapBindDn.oa.mjs";
import { zimbraAuthLdapSearchBase } from "./zimbraAuthLdapSearchBase.oa.mjs";
import { zimbraAuthLdapSearchBindDn } from "./zimbraAuthLdapSearchBindDn.oa.mjs";
import { zimbraAuthLdapSearchBindPassword } from "./zimbraAuthLdapSearchBindPassword.oa.mjs";
import { zimbraAuthLdapSearchFilter } from "./zimbraAuthLdapSearchFilter.oa.mjs";
import { zimbraAuthLdapStartTlsEnabled } from "./zimbraAuthLdapStartTlsEnabled.oa.mjs";
import { zimbraAuthLdapURL } from "./zimbraAuthLdapURL.oa.mjs";
import { zimbraAuthMech } from "./zimbraAuthMech.oa.mjs";
import { zimbraAuthMechAdmin } from "./zimbraAuthMechAdmin.oa.mjs";
import { zimbraAutoProvAccountNameMap } from "./zimbraAutoProvAccountNameMap.oa.mjs";
import { zimbraAutoProvAttrMap } from "./zimbraAutoProvAttrMap.oa.mjs";
import { zimbraAutoProvAuthMech } from "./zimbraAutoProvAuthMech.oa.mjs";
import { zimbraAutoProvBatchSize } from "./zimbraAutoProvBatchSize.oa.mjs";
import { zimbraAutoProvLastPolledTimestamp } from "./zimbraAutoProvLastPolledTimestamp.oa.mjs";
import { zimbraAutoProvLdapAdminBindDn } from "./zimbraAutoProvLdapAdminBindDn.oa.mjs";
import { zimbraAutoProvLdapAdminBindPassword } from "./zimbraAutoProvLdapAdminBindPassword.oa.mjs";
import { zimbraAutoProvLdapBindDn } from "./zimbraAutoProvLdapBindDn.oa.mjs";
import { zimbraAutoProvLdapSearchBase } from "./zimbraAutoProvLdapSearchBase.oa.mjs";
import { zimbraAutoProvLdapSearchFilter } from "./zimbraAutoProvLdapSearchFilter.oa.mjs";
import { zimbraAutoProvLdapStartTlsEnabled } from "./zimbraAutoProvLdapStartTlsEnabled.oa.mjs";
import { zimbraAutoProvLdapURL } from "./zimbraAutoProvLdapURL.oa.mjs";
import { zimbraAutoProvListenerClass } from "./zimbraAutoProvListenerClass.oa.mjs";
import { zimbraAutoProvLock } from "./zimbraAutoProvLock.oa.mjs";
import { zimbraAutoProvMode } from "./zimbraAutoProvMode.oa.mjs";
import { zimbraAutoProvNotificationBody } from "./zimbraAutoProvNotificationBody.oa.mjs";
import { zimbraAutoProvNotificationFromAddress } from "./zimbraAutoProvNotificationFromAddress.oa.mjs";
import { zimbraAutoProvNotificationSubject } from "./zimbraAutoProvNotificationSubject.oa.mjs";
import { zimbraAvailableSkin } from "./zimbraAvailableSkin.oa.mjs";
import { zimbraBasicAuthRealm } from "./zimbraBasicAuthRealm.oa.mjs";
import { zimbraCalendarLocationDisabledFields } from "./zimbraCalendarLocationDisabledFields.oa.mjs";
import { zimbraChangePasswordURL } from "./zimbraChangePasswordURL.oa.mjs";
import { zimbraCommunityAPIClientID } from "./zimbraCommunityAPIClientID.oa.mjs";
import { zimbraCommunityAPIClientSecret } from "./zimbraCommunityAPIClientSecret.oa.mjs";
import { zimbraCommunityBaseURL } from "./zimbraCommunityBaseURL.oa.mjs";
import { zimbraCommunityHomeURL } from "./zimbraCommunityHomeURL.oa.mjs";
import { zimbraCommunityUsernameMapping } from "./zimbraCommunityUsernameMapping.oa.mjs";
import { zimbraCreateTimestamp } from "./zimbraCreateTimestamp.oa.mjs";
import { zimbraCsrfAllowedRefererHosts } from "./zimbraCsrfAllowedRefererHosts.oa.mjs";
import { zimbraDNSCheckHostname } from "./zimbraDNSCheckHostname.oa.mjs";
import { zimbraDomainAggregateQuota } from "./zimbraDomainAggregateQuota.oa.mjs";
import { zimbraDomainAggregateQuotaPolicy } from "./zimbraDomainAggregateQuotaPolicy.oa.mjs";
import { zimbraDomainAggregateQuotaWarnEmailRecipient } from "./zimbraDomainAggregateQuotaWarnEmailRecipient.oa.mjs";
import { zimbraDomainAggregateQuotaWarnPercent } from "./zimbraDomainAggregateQuotaWarnPercent.oa.mjs";
import { zimbraDomainAliasTargetId } from "./zimbraDomainAliasTargetId.oa.mjs";
import { zimbraDomainCOSMaxAccounts } from "./zimbraDomainCOSMaxAccounts.oa.mjs";
import { zimbraDomainDefaultCOSId } from "./zimbraDomainDefaultCOSId.oa.mjs";
import { zimbraDomainDefaultExternalUserCOSId } from "./zimbraDomainDefaultExternalUserCOSId.oa.mjs";
import { zimbraDomainFeatureMaxAccounts } from "./zimbraDomainFeatureMaxAccounts.oa.mjs";
import { zimbraDomainMandatoryMailSignatureEnabled } from "./zimbraDomainMandatoryMailSignatureEnabled.oa.mjs";
import { zimbraDomainMandatoryMailSignatureHTML } from "./zimbraDomainMandatoryMailSignatureHTML.oa.mjs";
import { zimbraDomainMandatoryMailSignatureText } from "./zimbraDomainMandatoryMailSignatureText.oa.mjs";
import { zimbraDomainMaxAccounts } from "./zimbraDomainMaxAccounts.oa.mjs";
import { zimbraDomainName } from "./zimbraDomainName.oa.mjs";
import { zimbraDomainRenameInfo } from "./zimbraDomainRenameInfo.oa.mjs";
import { zimbraDomainStatus } from "./zimbraDomainStatus.oa.mjs";
import { zimbraDomainType } from "./zimbraDomainType.oa.mjs";
import { zimbraErrorReportUrl } from "./zimbraErrorReportUrl.oa.mjs";
import { zimbraExternalGroupHandlerClass } from "./zimbraExternalGroupHandlerClass.oa.mjs";
import { zimbraExternalGroupLdapSearchBase } from "./zimbraExternalGroupLdapSearchBase.oa.mjs";
import { zimbraExternalGroupLdapSearchFilter } from "./zimbraExternalGroupLdapSearchFilter.oa.mjs";
import { zimbraExternalImapHostname } from "./zimbraExternalImapHostname.oa.mjs";
import { zimbraExternalImapPort } from "./zimbraExternalImapPort.oa.mjs";
import { zimbraExternalImapSSLHostname } from "./zimbraExternalImapSSLHostname.oa.mjs";
import { zimbraExternalImapSSLPort } from "./zimbraExternalImapSSLPort.oa.mjs";
import { zimbraExternalPop3Hostname } from "./zimbraExternalPop3Hostname.oa.mjs";
import { zimbraExternalPop3Port } from "./zimbraExternalPop3Port.oa.mjs";
import { zimbraExternalPop3SSLHostname } from "./zimbraExternalPop3SSLHostname.oa.mjs";
import { zimbraExternalPop3SSLPort } from "./zimbraExternalPop3SSLPort.oa.mjs";
import { zimbraExternalShareDomainWhitelistEnabled } from "./zimbraExternalShareDomainWhitelistEnabled.oa.mjs";
import { zimbraExternalShareInvitationUrlExpiration } from "./zimbraExternalShareInvitationUrlExpiration.oa.mjs";
import { zimbraExternalShareWhitelistDomain } from "./zimbraExternalShareWhitelistDomain.oa.mjs";
import { zimbraExternalSharingEnabled } from "./zimbraExternalSharingEnabled.oa.mjs";
import { zimbraFeatureCalendarReminderDeviceEmailEnabled } from "./zimbraFeatureCalendarReminderDeviceEmailEnabled.oa.mjs";
import { zimbraFeatureDistributionListFolderEnabled } from "./zimbraFeatureDistributionListFolderEnabled.oa.mjs";
import { zimbraFeatureSocialEnabled } from "./zimbraFeatureSocialEnabled.oa.mjs";
import { zimbraFeatureSocialExternalEnabled } from "./zimbraFeatureSocialExternalEnabled.oa.mjs";
import { zimbraFeatureSocialExternalURL } from "./zimbraFeatureSocialExternalURL.oa.mjs";
import { zimbraFeatureSocialName } from "./zimbraFeatureSocialName.oa.mjs";
import { zimbraFileUploadMaxSizePerFile } from "./zimbraFileUploadMaxSizePerFile.oa.mjs";
import { zimbraForceClearCookies } from "./zimbraForceClearCookies.oa.mjs";
import { zimbraForeignName } from "./zimbraForeignName.oa.mjs";
import { zimbraForeignNameHandler } from "./zimbraForeignNameHandler.oa.mjs";
import { zimbraFreebusyExchangeAuthPassword } from "./zimbraFreebusyExchangeAuthPassword.oa.mjs";
import { zimbraFreebusyExchangeAuthScheme } from "./zimbraFreebusyExchangeAuthScheme.oa.mjs";
import { zimbraFreebusyExchangeAuthUsername } from "./zimbraFreebusyExchangeAuthUsername.oa.mjs";
import { zimbraFreebusyExchangeCachedInterval } from "./zimbraFreebusyExchangeCachedInterval.oa.mjs";
import { zimbraFreebusyExchangeCachedIntervalStart } from "./zimbraFreebusyExchangeCachedIntervalStart.oa.mjs";
import { zimbraFreebusyExchangeServerType } from "./zimbraFreebusyExchangeServerType.oa.mjs";
import { zimbraFreebusyExchangeURL } from "./zimbraFreebusyExchangeURL.oa.mjs";
import { zimbraFreebusyExchangeUserOrg } from "./zimbraFreebusyExchangeUserOrg.oa.mjs";
import { zimbraGalAccountId } from "./zimbraGalAccountId.oa.mjs";
import { zimbraGalAlwaysIncludeLocalCalendarResources } from "./zimbraGalAlwaysIncludeLocalCalendarResources.oa.mjs";
import { zimbraGalAutoCompleteLdapFilter } from "./zimbraGalAutoCompleteLdapFilter.oa.mjs";
import { zimbraGalDefinitionLastModifiedTime } from "./zimbraGalDefinitionLastModifiedTime.oa.mjs";
import { zimbraGalGroupIndicatorEnabled } from "./zimbraGalGroupIndicatorEnabled.oa.mjs";
import { zimbraGalInternalSearchBase } from "./zimbraGalInternalSearchBase.oa.mjs";
import { zimbraGalLdapAttrMap } from "./zimbraGalLdapAttrMap.oa.mjs";
import { zimbraGalLdapAuthMech } from "./zimbraGalLdapAuthMech.oa.mjs";
import { zimbraGalLdapBindDn } from "./zimbraGalLdapBindDn.oa.mjs";
import { zimbraGalLdapBindPassword } from "./zimbraGalLdapBindPassword.oa.mjs";
import { zimbraGalLdapFilter } from "./zimbraGalLdapFilter.oa.mjs";
import { zimbraGalLdapGroupHandlerClass } from "./zimbraGalLdapGroupHandlerClass.oa.mjs";
import { zimbraGalLdapKerberos5Keytab } from "./zimbraGalLdapKerberos5Keytab.oa.mjs";
import { zimbraGalLdapKerberos5Principal } from "./zimbraGalLdapKerberos5Principal.oa.mjs";
import { zimbraGalLdapPageSize } from "./zimbraGalLdapPageSize.oa.mjs";
import { zimbraGalLdapSearchBase } from "./zimbraGalLdapSearchBase.oa.mjs";
import { zimbraGalLdapStartTlsEnabled } from "./zimbraGalLdapStartTlsEnabled.oa.mjs";
import { zimbraGalLdapURL } from "./zimbraGalLdapURL.oa.mjs";
import { zimbraGalLdapValueMap } from "./zimbraGalLdapValueMap.oa.mjs";
import { zimbraGalMaxResults } from "./zimbraGalMaxResults.oa.mjs";
import { zimbraGalMode } from "./zimbraGalMode.oa.mjs";
import { zimbraGalSyncInternalSearchBase } from "./zimbraGalSyncInternalSearchBase.oa.mjs";
import { zimbraGalSyncLdapAuthMech } from "./zimbraGalSyncLdapAuthMech.oa.mjs";
import { zimbraGalSyncLdapBindDn } from "./zimbraGalSyncLdapBindDn.oa.mjs";
import { zimbraGalSyncLdapBindPassword } from "./zimbraGalSyncLdapBindPassword.oa.mjs";
import { zimbraGalSyncLdapFilter } from "./zimbraGalSyncLdapFilter.oa.mjs";
import { zimbraGalSyncLdapKerberos5Keytab } from "./zimbraGalSyncLdapKerberos5Keytab.oa.mjs";
import { zimbraGalSyncLdapKerberos5Principal } from "./zimbraGalSyncLdapKerberos5Principal.oa.mjs";
import { zimbraGalSyncLdapPageSize } from "./zimbraGalSyncLdapPageSize.oa.mjs";
import { zimbraGalSyncLdapSearchBase } from "./zimbraGalSyncLdapSearchBase.oa.mjs";
import { zimbraGalSyncLdapStartTlsEnabled } from "./zimbraGalSyncLdapStartTlsEnabled.oa.mjs";
import { zimbraGalSyncLdapURL } from "./zimbraGalSyncLdapURL.oa.mjs";
import { zimbraGalSyncMaxConcurrentClients } from "./zimbraGalSyncMaxConcurrentClients.oa.mjs";
import { zimbraGalSyncTimestampFormat } from "./zimbraGalSyncTimestampFormat.oa.mjs";
import { zimbraGalTokenizeAutoCompleteKey } from "./zimbraGalTokenizeAutoCompleteKey.oa.mjs";
import { zimbraGalTokenizeSearchKey } from "./zimbraGalTokenizeSearchKey.oa.mjs";
import { zimbraHelpAdminURL } from "./zimbraHelpAdminURL.oa.mjs";
import { zimbraHelpAdvancedURL } from "./zimbraHelpAdvancedURL.oa.mjs";
import { zimbraHelpDelegatedURL } from "./zimbraHelpDelegatedURL.oa.mjs";
import { zimbraHelpStandardURL } from "./zimbraHelpStandardURL.oa.mjs";
import { zimbraId } from "./zimbraId.oa.mjs";
import { zimbraInternalSendersDomain } from "./zimbraInternalSendersDomain.oa.mjs";
import { zimbraInternalSharingCrossDomainEnabled } from "./zimbraInternalSharingCrossDomainEnabled.oa.mjs";
import { zimbraInternalSharingDomain } from "./zimbraInternalSharingDomain.oa.mjs";
import { zimbraLdapGalSyncDisabled } from "./zimbraLdapGalSyncDisabled.oa.mjs";
import { zimbraLocale } from "./zimbraLocale.oa.mjs";
import { zimbraMailAddressValidationRegex } from "./zimbraMailAddressValidationRegex.oa.mjs";
import { zimbraMailDomainQuota } from "./zimbraMailDomainQuota.oa.mjs";
import { zimbraMailSSLClientCertPrincipalMap } from "./zimbraMailSSLClientCertPrincipalMap.oa.mjs";
import { zimbraMailTrustedSenderListMaxNumEntries } from "./zimbraMailTrustedSenderListMaxNumEntries.oa.mjs";
import { zimbraMobileItemsToTrackPerFolderMaxSize } from "./zimbraMobileItemsToTrackPerFolderMaxSize.oa.mjs";
import { zimbraMobileMetadataMaxSizeEnabled } from "./zimbraMobileMetadataMaxSizeEnabled.oa.mjs";
import { zimbraMyoneloginSamlSigningCert } from "./zimbraMyoneloginSamlSigningCert.oa.mjs";
import { zimbraNotebookAccount } from "./zimbraNotebookAccount.oa.mjs";
import { zimbraNotes } from "./zimbraNotes.oa.mjs";
import { zimbraOAuthConsumerCredentials } from "./zimbraOAuthConsumerCredentials.oa.mjs";
import { zimbraOpenidConsumerAllowedOPEndpointURL } from "./zimbraOpenidConsumerAllowedOPEndpointURL.oa.mjs";
import { zimbraPasswordChangeListener } from "./zimbraPasswordChangeListener.oa.mjs";
import { zimbraPreAuthKey } from "./zimbraPreAuthKey.oa.mjs";
import { zimbraPrefColorMessagesEnabled } from "./zimbraPrefColorMessagesEnabled.oa.mjs";
import { zimbraPrefMailTrustedSenderList } from "./zimbraPrefMailTrustedSenderList.oa.mjs";
import { zimbraPrefSkin } from "./zimbraPrefSkin.oa.mjs";
import { zimbraPrefSpellIgnoreWord } from "./zimbraPrefSpellIgnoreWord.oa.mjs";
import { zimbraPrefTimeZoneId } from "./zimbraPrefTimeZoneId.oa.mjs";
import { zimbraPublicServiceHostname } from "./zimbraPublicServiceHostname.oa.mjs";
import { zimbraPublicServicePort } from "./zimbraPublicServicePort.oa.mjs";
import { zimbraPublicServiceProtocol } from "./zimbraPublicServiceProtocol.oa.mjs";
import { zimbraPublicSharingEnabled } from "./zimbraPublicSharingEnabled.oa.mjs";
import { zimbraResponseHeader } from "./zimbraResponseHeader.oa.mjs";
import { zimbraReverseProxyClientCertCA } from "./zimbraReverseProxyClientCertCA.oa.mjs";
import { zimbraReverseProxyClientCertMode } from "./zimbraReverseProxyClientCertMode.oa.mjs";
import { zimbraReverseProxyExternalRouteIncludeOriginalAuthusername } from "./zimbraReverseProxyExternalRouteIncludeOriginalAuthusername.oa.mjs";
import { zimbraReverseProxyUseExternalRoute } from "./zimbraReverseProxyUseExternalRoute.oa.mjs";
import { zimbraReverseProxyUseExternalRouteIfAccountNotExist } from "./zimbraReverseProxyUseExternalRouteIfAccountNotExist.oa.mjs";
import { zimbraSMIMELdapAttribute } from "./zimbraSMIMELdapAttribute.oa.mjs";
import { zimbraSMIMELdapBindDn } from "./zimbraSMIMELdapBindDn.oa.mjs";
import { zimbraSMIMELdapBindPassword } from "./zimbraSMIMELdapBindPassword.oa.mjs";
import { zimbraSMIMELdapDiscoverSearchBaseEnabled } from "./zimbraSMIMELdapDiscoverSearchBaseEnabled.oa.mjs";
import { zimbraSMIMELdapFilter } from "./zimbraSMIMELdapFilter.oa.mjs";
import { zimbraSMIMELdapSearchBase } from "./zimbraSMIMELdapSearchBase.oa.mjs";
import { zimbraSMIMELdapStartTlsEnabled } from "./zimbraSMIMELdapStartTlsEnabled.oa.mjs";
import { zimbraSMIMELdapURL } from "./zimbraSMIMELdapURL.oa.mjs";
import { zimbraSSLCertificate } from "./zimbraSSLCertificate.oa.mjs";
import { zimbraSSLPrivateKey } from "./zimbraSSLPrivateKey.oa.mjs";
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
import { zimbraSmtpSendPartial } from "./zimbraSmtpSendPartial.oa.mjs";
import { zimbraSmtpTimeout } from "./zimbraSmtpTimeout.oa.mjs";
import { zimbraSpamTrashAlias } from "./zimbraSpamTrashAlias.oa.mjs";
import { zimbraStandardClientCustomPrefTab } from "./zimbraStandardClientCustomPrefTab.oa.mjs";
import { zimbraStandardClientCustomPrefTabsEnabled } from "./zimbraStandardClientCustomPrefTabsEnabled.oa.mjs";
import { zimbraUCServiceId } from "./zimbraUCServiceId.oa.mjs";
import { zimbraVirtualHostname } from "./zimbraVirtualHostname.oa.mjs";
import { zimbraVirtualIPAddress } from "./zimbraVirtualIPAddress.oa.mjs";
import { zimbraWebClientAdminReference } from "./zimbraWebClientAdminReference.oa.mjs";
import { zimbraWebClientLoginURL } from "./zimbraWebClientLoginURL.oa.mjs";
import { zimbraWebClientLoginURLAllowedIP } from "./zimbraWebClientLoginURLAllowedIP.oa.mjs";
import { zimbraWebClientLoginURLAllowedUA } from "./zimbraWebClientLoginURLAllowedUA.oa.mjs";
import { zimbraWebClientLogoutURL } from "./zimbraWebClientLogoutURL.oa.mjs";
import { zimbraWebClientLogoutURLAllowedIP } from "./zimbraWebClientLogoutURLAllowedIP.oa.mjs";
import { zimbraWebClientLogoutURLAllowedUA } from "./zimbraWebClientLogoutURLAllowedUA.oa.mjs";
import { zimbraWebClientMaxInputBufferLength } from "./zimbraWebClientMaxInputBufferLength.oa.mjs";
import { zimbraZimletDataSensitiveInMixedModeDisabled } from "./zimbraZimletDataSensitiveInMixedModeDisabled.oa.mjs";
import { zimbraZimletDomainAvailableZimlets } from "./zimbraZimletDomainAvailableZimlets.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [zimbraMailRecipient] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [zimbraDomainName, zimbraDomainType, zimbraId] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE, zimbraAdminConsoleCatchAllAddressEnabled, zimbraAdminConsoleDNSCheckEnabled, zimbraAdminConsoleLDAPAuthEnabled, zimbraAdminConsoleLoginMessage, zimbraAdminConsoleLoginURL, zimbraAdminConsoleLogoutURL, zimbraAdminConsoleSkinEnabled, zimbraAggregateQuotaLastUsage, zimbraAmavisDomainDisclaimerHTML, zimbraAmavisDomainDisclaimerText, zimbraAuthFallbackToLocal, zimbraAuthKerberos5Realm, zimbraAuthLdapBindDn, zimbraAuthLdapSearchBase, zimbraAuthLdapSearchBindDn, zimbraAuthLdapSearchBindPassword, zimbraAuthLdapSearchFilter, zimbraAuthLdapStartTlsEnabled, zimbraAuthLdapURL, zimbraAuthMech, zimbraAuthMechAdmin, zimbraAutoProvAccountNameMap, zimbraAutoProvAttrMap, zimbraAutoProvAuthMech, zimbraAutoProvBatchSize, zimbraAutoProvLastPolledTimestamp, zimbraAutoProvLdapAdminBindDn, zimbraAutoProvLdapAdminBindPassword, zimbraAutoProvLdapBindDn, zimbraAutoProvLdapSearchBase, zimbraAutoProvLdapSearchFilter, zimbraAutoProvLdapStartTlsEnabled, zimbraAutoProvLdapURL, zimbraAutoProvListenerClass, zimbraAutoProvLock, zimbraAutoProvMode, zimbraAutoProvNotificationBody, zimbraAutoProvNotificationFromAddress, zimbraAutoProvNotificationSubject, zimbraAvailableSkin, zimbraBasicAuthRealm, zimbraCalendarLocationDisabledFields, zimbraChangePasswordURL, zimbraCommunityAPIClientID, zimbraCommunityAPIClientSecret, zimbraCommunityBaseURL, zimbraCommunityHomeURL, zimbraCommunityUsernameMapping, zimbraCreateTimestamp, zimbraCsrfAllowedRefererHosts, zimbraDNSCheckHostname, zimbraDomainAggregateQuota, zimbraDomainAggregateQuotaPolicy, zimbraDomainAggregateQuotaWarnEmailRecipient, zimbraDomainAggregateQuotaWarnPercent, zimbraDomainAliasTargetId, zimbraDomainCOSMaxAccounts, zimbraDomainDefaultCOSId, zimbraDomainDefaultExternalUserCOSId, zimbraDomainFeatureMaxAccounts, zimbraDomainMandatoryMailSignatureEnabled, zimbraDomainMandatoryMailSignatureHTML, zimbraDomainMandatoryMailSignatureText, zimbraDomainMaxAccounts, zimbraDomainRenameInfo, zimbraDomainStatus, zimbraErrorReportUrl, zimbraExternalGroupHandlerClass, zimbraExternalGroupLdapSearchBase, zimbraExternalGroupLdapSearchFilter, zimbraExternalImapHostname, zimbraExternalImapPort, zimbraExternalImapSSLHostname, zimbraExternalImapSSLPort, zimbraExternalPop3Hostname, zimbraExternalPop3Port, zimbraExternalPop3SSLHostname, zimbraExternalPop3SSLPort, zimbraExternalShareDomainWhitelistEnabled, zimbraExternalShareInvitationUrlExpiration, zimbraExternalShareWhitelistDomain, zimbraExternalSharingEnabled, zimbraFeatureCalendarReminderDeviceEmailEnabled, zimbraFeatureDistributionListFolderEnabled, zimbraFeatureSocialEnabled, zimbraFeatureSocialExternalEnabled, zimbraFeatureSocialExternalURL, zimbraFeatureSocialName, zimbraFileUploadMaxSizePerFile, zimbraForceClearCookies, zimbraForeignName, zimbraForeignNameHandler, zimbraFreebusyExchangeAuthPassword, zimbraFreebusyExchangeAuthScheme, zimbraFreebusyExchangeAuthUsername, zimbraFreebusyExchangeCachedInterval, zimbraFreebusyExchangeCachedIntervalStart, zimbraFreebusyExchangeServerType, zimbraFreebusyExchangeURL, zimbraFreebusyExchangeUserOrg, zimbraGalAccountId, zimbraGalAlwaysIncludeLocalCalendarResources, zimbraGalAutoCompleteLdapFilter, zimbraGalDefinitionLastModifiedTime, zimbraGalGroupIndicatorEnabled, zimbraGalInternalSearchBase, zimbraGalLdapAttrMap, zimbraGalLdapAuthMech, zimbraGalLdapBindDn, zimbraGalLdapBindPassword, zimbraGalLdapFilter, zimbraGalLdapGroupHandlerClass, zimbraGalLdapKerberos5Keytab, zimbraGalLdapKerberos5Principal, zimbraGalLdapPageSize, zimbraGalLdapSearchBase, zimbraGalLdapStartTlsEnabled, zimbraGalLdapURL, zimbraGalLdapValueMap, zimbraGalMaxResults, zimbraGalMode, zimbraGalSyncInternalSearchBase, zimbraGalSyncLdapAuthMech, zimbraGalSyncLdapBindDn, zimbraGalSyncLdapBindPassword, zimbraGalSyncLdapFilter, zimbraGalSyncLdapKerberos5Keytab, zimbraGalSyncLdapKerberos5Principal, zimbraGalSyncLdapPageSize, zimbraGalSyncLdapSearchBase, zimbraGalSyncLdapStartTlsEnabled, zimbraGalSyncLdapURL, zimbraGalSyncMaxConcurrentClients, zimbraGalSyncTimestampFormat, zimbraGalTokenizeAutoCompleteKey, zimbraGalTokenizeSearchKey, zimbraHelpAdminURL, zimbraHelpAdvancedURL, zimbraHelpDelegatedURL, zimbraHelpStandardURL, zimbraInternalSendersDomain, zimbraInternalSharingCrossDomainEnabled, zimbraInternalSharingDomain, zimbraLdapGalSyncDisabled, zimbraLocale, zimbraMailAddressValidationRegex, zimbraMailDomainQuota, zimbraMailSSLClientCertPrincipalMap, zimbraMailTrustedSenderListMaxNumEntries, zimbraMobileItemsToTrackPerFolderMaxSize, zimbraMobileMetadataMaxSizeEnabled, zimbraMyoneloginSamlSigningCert, zimbraNotebookAccount, zimbraNotes, zimbraOAuthConsumerCredentials, zimbraOpenidConsumerAllowedOPEndpointURL, zimbraPasswordChangeListener, zimbraPreAuthKey, zimbraPrefColorMessagesEnabled, zimbraPrefMailTrustedSenderList, zimbraPrefSkin, zimbraPrefSpellIgnoreWord, zimbraPrefTimeZoneId, zimbraPublicServiceHostname, zimbraPublicServicePort, zimbraPublicServiceProtocol, zimbraPublicSharingEnabled, zimbraResponseHeader, zimbraReverseProxyClientCertCA, zimbraReverseProxyClientCertMode, zimbraReverseProxyExternalRouteIncludeOriginalAuthusername, zimbraReverseProxyUseExternalRoute, zimbraReverseProxyUseExternalRouteIfAccountNotExist, zimbraSMIMELdapAttribute, zimbraSMIMELdapBindDn, zimbraSMIMELdapBindPassword, zimbraSMIMELdapDiscoverSearchBaseEnabled, zimbraSMIMELdapFilter, zimbraSMIMELdapSearchBase, zimbraSMIMELdapStartTlsEnabled, zimbraSMIMELdapURL, zimbraSSLCertificate, zimbraSSLPrivateKey, zimbraSkinBackgroundColor, zimbraSkinFavicon, zimbraSkinForegroundColor, zimbraSkinLogoAppBanner, zimbraSkinLogoLoginBanner, zimbraSkinLogoURL, zimbraSkinSecondaryColor, zimbraSkinSelectionColor, zimbraSmtpHostname, zimbraSmtpPort, zimbraSmtpSendPartial, zimbraSmtpTimeout, zimbraSpamTrashAlias, zimbraStandardClientCustomPrefTab, zimbraStandardClientCustomPrefTabsEnabled, zimbraUCServiceId, zimbraVirtualHostname, zimbraVirtualIPAddress, zimbraWebClientAdminReference, zimbraWebClientLoginURL, zimbraWebClientLoginURLAllowedIP, zimbraWebClientLoginURLAllowedUA, zimbraWebClientLogoutURL, zimbraWebClientLogoutURLAllowedIP, zimbraWebClientLogoutURLAllowedUA, zimbraWebClientMaxInputBufferLength, zimbraZimletDataSensitiveInMixedModeDisabled, zimbraZimletDomainAvailableZimlets] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraDomain"],
    "&ldapDesc": "Domain object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
