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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
// export { zimbraMailRecipient } from "../LdapZimbra/zimbraMailRecipient.oa.mjs";
import { id_oc_zimbraDomain } from "../LdapZimbra/id-oc-zimbraDomain.va.mjs";
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
const zimbraDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ zimbraMailRecipient, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ ..., ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraDomain" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Domain object" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
