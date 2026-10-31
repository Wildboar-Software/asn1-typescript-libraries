/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_gluuConfiguration } from "../LdapOx/id-oc-gluuConfiguration.va.mjs";


/**
 * @summary gluuConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { blowfishPassword
 *                               | countryName
 *                               | organizationalUnitName
 *                               | description
 *                               | displayName
 *                               | gluuAdditionalBandwidth
 *                               | gluuAdditionalMemory
 *                               | gluuApplianceDnsServer
 *                               | gluuAppliancePollingInterval
 *                               | gluuBandwidthRX
 *                               | gluuBandwidthTX
 *                               | gluuDSstatus
 *                               | gluuFederationHostingEnabled
 *                               | gluuHTTPstatus
 *                               | gluuHostname
 *                               | gluuInvoiceNo
 *                               | gluuLastUpdate
 *                               | gluuLifeRay
 *                               | gluuManageIdentityPermission
 *                               | gluuManager
 *                               | gluuMaxLogSize
 *                               | gluuOrgProfileMgt
 *                               | gluuPaidUntil
 *                               | gluuPaymentProcessorTimestamp
 *                               | gluuPrivate
 *                               | gluuPublishIdpMetadata
 *                               | gluuResizeInitiated
 *                               | gluuSPTR
 *                               | gluuScimEnabled
 *                               | gluuShibAssertionsIssued
 *                               | gluuShibFailedAuth
 *                               | gluuShibSecurityEvents
 *                               | gluuShibSuccessfulAuths
 *                               | oxTrustEmail
 *                               | gluuSmtpFromEmailAddress
 *                               | gluuSmtpFromName
 *                               | gluuSmtpHost
 *                               | gluuSmtpPassword
 *                               | gluuSmtpPort
 *                               | gluuSmtpRequiresAuthentication
 *                               | gluuSmtpRequiresSsl
 *                               | gluuSmtpUserName
 *                               | gluuSslExpiry
 *                               | gluuStatus
 *                               | gluuTargetRAM
 *                               | gluuUrl
 *                               | gluuVDSenabled
 *                               | gluuVDSstatus
 *                               | gluuVdsCacheRefreshEnabled
 *                               | gluuVdsCacheRefreshLastUpdate
 *                               | gluuVdsCacheRefreshLastUpdateCount
 *                               | gluuVdsCacheRefreshPollingInterval
 *                               | gluuVdsCacheRefreshProblemCount
 *                               | gluuWhitePagesEnabled
 *                               | iname
 *                               | inum
 *                               | inumFN
 *                               | organizationName
 *                               | oxAuthenticationMode
 *                               | oxTrustAuthenticationMode
 *                               | oxIDPAuthentication
 *                               | oxLogViewerConfig
 *                               | oxLogConfigLocation
 *                               | oxSmtpConfiguration
 *                               | oxCacheConfiguration
 *                               | oxDocumentStoreConfiguration
 *                               | oxTrustStoreCert
 *                               | oxTrustStoreConf
 *                               | passwordResetAllowed
 *                               | softwareVersion
 *                               | userPassword
 *                               | oxTrustCacheRefreshServerIpAddress
 *                               | gluuPassportEnabled
 *                               | gluuRadiusEnabled
 *                               | gluuSamlEnabled
 *                               | gluuSmtpServerTrust }
 *   LDAP-NAME                 {"gluuConfiguration"}
 *   ID                        id-oc-gluuConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuConfiguration: OBJECT_CLASS = undefined;

/* eslint-enable */
