/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
// export { id_oc_zimbraDomain } from "../LdapZimbra/id-oc-zimbraDomain.va.mjs";


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
const zimbraDomain: OBJECT_CLASS = undefined;

/* eslint-enable */
