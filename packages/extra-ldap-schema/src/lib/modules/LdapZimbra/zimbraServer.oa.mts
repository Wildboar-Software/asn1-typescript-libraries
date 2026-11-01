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
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraServer } from "../LdapZimbra/id-oc-zimbraServer.va.mjs";
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
    "&MandatoryAttributes": [ ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraServer" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Server in the cluster" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraServer /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
