/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuConfiguration } from "../LdapOx/id-oc-gluuConfiguration.va.mjs";
import { blowfishPassword } from "../LdapOx/blowfishPassword.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { gluuAdditionalBandwidth } from "../LdapOx/gluuAdditionalBandwidth.oa.mjs";
import { gluuAdditionalMemory } from "../LdapOx/gluuAdditionalMemory.oa.mjs";
import { gluuApplianceDnsServer } from "../LdapOx/gluuApplianceDnsServer.oa.mjs";
import { gluuAppliancePollingInterval } from "../LdapOx/gluuAppliancePollingInterval.oa.mjs";
import { gluuBandwidthRX } from "../LdapOx/gluuBandwidthRX.oa.mjs";
import { gluuBandwidthTX } from "../LdapOx/gluuBandwidthTX.oa.mjs";
import { gluuDSstatus } from "../LdapOx/gluuDSstatus.oa.mjs";
import { gluuFederationHostingEnabled } from "../LdapOx/gluuFederationHostingEnabled.oa.mjs";
import { gluuHTTPstatus } from "../LdapOx/gluuHTTPstatus.oa.mjs";
import { gluuHostname } from "../LdapOx/gluuHostname.oa.mjs";
import { gluuInvoiceNo } from "../LdapOx/gluuInvoiceNo.oa.mjs";
import { gluuLastUpdate } from "../LdapOx/gluuLastUpdate.oa.mjs";
import { gluuLifeRay } from "../LdapOx/gluuLifeRay.oa.mjs";
import { gluuManageIdentityPermission } from "../LdapOx/gluuManageIdentityPermission.oa.mjs";
import { gluuManager } from "../LdapOx/gluuManager.oa.mjs";
import { gluuMaxLogSize } from "../LdapOx/gluuMaxLogSize.oa.mjs";
import { gluuOrgProfileMgt } from "../LdapOx/gluuOrgProfileMgt.oa.mjs";
import { gluuPaidUntil } from "../LdapOx/gluuPaidUntil.oa.mjs";
import { gluuPaymentProcessorTimestamp } from "../LdapOx/gluuPaymentProcessorTimestamp.oa.mjs";
import { gluuPrivate } from "../LdapOx/gluuPrivate.oa.mjs";
import { gluuPublishIdpMetadata } from "../LdapOx/gluuPublishIdpMetadata.oa.mjs";
import { gluuResizeInitiated } from "../LdapOx/gluuResizeInitiated.oa.mjs";
import { gluuSPTR } from "../LdapOx/gluuSPTR.oa.mjs";
import { gluuScimEnabled } from "../LdapOx/gluuScimEnabled.oa.mjs";
import { gluuShibAssertionsIssued } from "../LdapOx/gluuShibAssertionsIssued.oa.mjs";
import { gluuShibFailedAuth } from "../LdapOx/gluuShibFailedAuth.oa.mjs";
import { gluuShibSecurityEvents } from "../LdapOx/gluuShibSecurityEvents.oa.mjs";
import { gluuShibSuccessfulAuths } from "../LdapOx/gluuShibSuccessfulAuths.oa.mjs";
import { oxTrustEmail } from "../LdapOx/oxTrustEmail.oa.mjs";
import { gluuSmtpFromEmailAddress } from "../LdapOx/gluuSmtpFromEmailAddress.oa.mjs";
import { gluuSmtpFromName } from "../LdapOx/gluuSmtpFromName.oa.mjs";
import { gluuSmtpHost } from "../LdapOx/gluuSmtpHost.oa.mjs";
import { gluuSmtpPassword } from "../LdapOx/gluuSmtpPassword.oa.mjs";
import { gluuSmtpPort } from "../LdapOx/gluuSmtpPort.oa.mjs";
import { gluuSmtpRequiresAuthentication } from "../LdapOx/gluuSmtpRequiresAuthentication.oa.mjs";
import { gluuSmtpRequiresSsl } from "../LdapOx/gluuSmtpRequiresSsl.oa.mjs";
import { gluuSmtpUserName } from "../LdapOx/gluuSmtpUserName.oa.mjs";
import { gluuSslExpiry } from "../LdapOx/gluuSslExpiry.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { gluuTargetRAM } from "../LdapOx/gluuTargetRAM.oa.mjs";
import { gluuUrl } from "../LdapOx/gluuUrl.oa.mjs";
import { gluuVDSenabled } from "../LdapOx/gluuVDSenabled.oa.mjs";
import { gluuVDSstatus } from "../LdapOx/gluuVDSstatus.oa.mjs";
import { gluuVdsCacheRefreshEnabled } from "../LdapOx/gluuVdsCacheRefreshEnabled.oa.mjs";
import { gluuVdsCacheRefreshLastUpdate } from "../LdapOx/gluuVdsCacheRefreshLastUpdate.oa.mjs";
import { gluuVdsCacheRefreshLastUpdateCount } from "../LdapOx/gluuVdsCacheRefreshLastUpdateCount.oa.mjs";
import { gluuVdsCacheRefreshPollingInterval } from "../LdapOx/gluuVdsCacheRefreshPollingInterval.oa.mjs";
import { gluuVdsCacheRefreshProblemCount } from "../LdapOx/gluuVdsCacheRefreshProblemCount.oa.mjs";
import { gluuWhitePagesEnabled } from "../LdapOx/gluuWhitePagesEnabled.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { inumFN } from "../LdapOx/inumFN.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { oxAuthenticationMode } from "../LdapOx/oxAuthenticationMode.oa.mjs";
import { oxTrustAuthenticationMode } from "../LdapOx/oxTrustAuthenticationMode.oa.mjs";
import { oxIDPAuthentication } from "../LdapOx/oxIDPAuthentication.oa.mjs";
import { oxLogViewerConfig } from "../LdapOx/oxLogViewerConfig.oa.mjs";
import { oxLogConfigLocation } from "../LdapOx/oxLogConfigLocation.oa.mjs";
import { oxSmtpConfiguration } from "../LdapOx/oxSmtpConfiguration.oa.mjs";
import { oxCacheConfiguration } from "../LdapOx/oxCacheConfiguration.oa.mjs";
import { oxDocumentStoreConfiguration } from "../LdapOx/oxDocumentStoreConfiguration.oa.mjs";
import { oxTrustStoreCert } from "../LdapOx/oxTrustStoreCert.oa.mjs";
import { oxTrustStoreConf } from "../LdapOx/oxTrustStoreConf.oa.mjs";
import { passwordResetAllowed } from "../LdapOx/passwordResetAllowed.oa.mjs";
import { softwareVersion } from "../LdapOx/softwareVersion.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { oxTrustCacheRefreshServerIpAddress } from "../LdapOx/oxTrustCacheRefreshServerIpAddress.oa.mjs";
import { gluuPassportEnabled } from "../LdapOx/gluuPassportEnabled.oa.mjs";
import { gluuRadiusEnabled } from "../LdapOx/gluuRadiusEnabled.oa.mjs";
import { gluuSamlEnabled } from "../LdapOx/gluuSamlEnabled.oa.mjs";
import { gluuSmtpServerTrust } from "../LdapOx/gluuSmtpServerTrust.oa.mjs";


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
const gluuConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ blowfishPassword, countryName, organizationalUnitName, description, displayName, gluuAdditionalBandwidth, gluuAdditionalMemory, gluuApplianceDnsServer, gluuAppliancePollingInterval, gluuBandwidthRX, gluuBandwidthTX, gluuDSstatus, gluuFederationHostingEnabled, gluuHTTPstatus, gluuHostname, gluuInvoiceNo, gluuLastUpdate, gluuLifeRay, gluuManageIdentityPermission, gluuManager, gluuMaxLogSize, gluuOrgProfileMgt, gluuPaidUntil, gluuPaymentProcessorTimestamp, gluuPrivate, gluuPublishIdpMetadata, gluuResizeInitiated, gluuSPTR, gluuScimEnabled, gluuShibAssertionsIssued, gluuShibFailedAuth, gluuShibSecurityEvents, gluuShibSuccessfulAuths, oxTrustEmail, gluuSmtpFromEmailAddress, gluuSmtpFromName, gluuSmtpHost, gluuSmtpPassword, gluuSmtpPort, gluuSmtpRequiresAuthentication, gluuSmtpRequiresSsl, gluuSmtpUserName, gluuSslExpiry, gluuStatus, gluuTargetRAM, gluuUrl, gluuVDSenabled, gluuVDSstatus, gluuVdsCacheRefreshEnabled, gluuVdsCacheRefreshLastUpdate, gluuVdsCacheRefreshLastUpdateCount, gluuVdsCacheRefreshPollingInterval, gluuVdsCacheRefreshProblemCount, gluuWhitePagesEnabled, iname, inum, inumFN, organizationName, oxAuthenticationMode, oxTrustAuthenticationMode, oxIDPAuthentication, oxLogViewerConfig, oxLogConfigLocation, oxSmtpConfiguration, oxCacheConfiguration, oxDocumentStoreConfiguration, oxTrustStoreCert, oxTrustStoreConf, passwordResetAllowed, softwareVersion, userPassword, oxTrustCacheRefreshServerIpAddress, gluuPassportEnabled, gluuRadiusEnabled, gluuSamlEnabled, gluuSmtpServerTrust, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuConfiguration" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuConfiguration /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

