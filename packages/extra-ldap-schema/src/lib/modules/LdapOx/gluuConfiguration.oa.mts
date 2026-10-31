/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuConfiguration } from "../LdapOx/id-oc-gluuConfiguration.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { blowfishPassword } from "./blowfishPassword.oa.mjs";
import { gluuAdditionalBandwidth } from "./gluuAdditionalBandwidth.oa.mjs";
import { gluuAdditionalMemory } from "./gluuAdditionalMemory.oa.mjs";
import { gluuApplianceDnsServer } from "./gluuApplianceDnsServer.oa.mjs";
import { gluuAppliancePollingInterval } from "./gluuAppliancePollingInterval.oa.mjs";
import { gluuBandwidthRX } from "./gluuBandwidthRX.oa.mjs";
import { gluuBandwidthTX } from "./gluuBandwidthTX.oa.mjs";
import { gluuDSstatus } from "./gluuDSstatus.oa.mjs";
import { gluuFederationHostingEnabled } from "./gluuFederationHostingEnabled.oa.mjs";
import { gluuHTTPstatus } from "./gluuHTTPstatus.oa.mjs";
import { gluuHostname } from "./gluuHostname.oa.mjs";
import { gluuInvoiceNo } from "./gluuInvoiceNo.oa.mjs";
import { gluuLastUpdate } from "./gluuLastUpdate.oa.mjs";
import { gluuLifeRay } from "./gluuLifeRay.oa.mjs";
import { gluuManageIdentityPermission } from "./gluuManageIdentityPermission.oa.mjs";
import { gluuManager } from "./gluuManager.oa.mjs";
import { gluuMaxLogSize } from "./gluuMaxLogSize.oa.mjs";
import { gluuOrgProfileMgt } from "./gluuOrgProfileMgt.oa.mjs";
import { gluuPaidUntil } from "./gluuPaidUntil.oa.mjs";
import { gluuPassportEnabled } from "./gluuPassportEnabled.oa.mjs";
import { gluuPaymentProcessorTimestamp } from "./gluuPaymentProcessorTimestamp.oa.mjs";
import { gluuPrivate } from "./gluuPrivate.oa.mjs";
import { gluuPublishIdpMetadata } from "./gluuPublishIdpMetadata.oa.mjs";
import { gluuRadiusEnabled } from "./gluuRadiusEnabled.oa.mjs";
import { gluuResizeInitiated } from "./gluuResizeInitiated.oa.mjs";
import { gluuSPTR } from "./gluuSPTR.oa.mjs";
import { gluuSamlEnabled } from "./gluuSamlEnabled.oa.mjs";
import { gluuScimEnabled } from "./gluuScimEnabled.oa.mjs";
import { gluuShibAssertionsIssued } from "./gluuShibAssertionsIssued.oa.mjs";
import { gluuShibFailedAuth } from "./gluuShibFailedAuth.oa.mjs";
import { gluuShibSecurityEvents } from "./gluuShibSecurityEvents.oa.mjs";
import { gluuShibSuccessfulAuths } from "./gluuShibSuccessfulAuths.oa.mjs";
import { gluuSmtpFromEmailAddress } from "./gluuSmtpFromEmailAddress.oa.mjs";
import { gluuSmtpFromName } from "./gluuSmtpFromName.oa.mjs";
import { gluuSmtpHost } from "./gluuSmtpHost.oa.mjs";
import { gluuSmtpPassword } from "./gluuSmtpPassword.oa.mjs";
import { gluuSmtpPort } from "./gluuSmtpPort.oa.mjs";
import { gluuSmtpRequiresAuthentication } from "./gluuSmtpRequiresAuthentication.oa.mjs";
import { gluuSmtpRequiresSsl } from "./gluuSmtpRequiresSsl.oa.mjs";
import { gluuSmtpServerTrust } from "./gluuSmtpServerTrust.oa.mjs";
import { gluuSmtpUserName } from "./gluuSmtpUserName.oa.mjs";
import { gluuSslExpiry } from "./gluuSslExpiry.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { gluuTargetRAM } from "./gluuTargetRAM.oa.mjs";
import { gluuUrl } from "./gluuUrl.oa.mjs";
import { gluuVDSenabled } from "./gluuVDSenabled.oa.mjs";
import { gluuVDSstatus } from "./gluuVDSstatus.oa.mjs";
import { gluuVdsCacheRefreshEnabled } from "./gluuVdsCacheRefreshEnabled.oa.mjs";
import { gluuVdsCacheRefreshLastUpdate } from "./gluuVdsCacheRefreshLastUpdate.oa.mjs";
import { gluuVdsCacheRefreshLastUpdateCount } from "./gluuVdsCacheRefreshLastUpdateCount.oa.mjs";
import { gluuVdsCacheRefreshPollingInterval } from "./gluuVdsCacheRefreshPollingInterval.oa.mjs";
import { gluuVdsCacheRefreshProblemCount } from "./gluuVdsCacheRefreshProblemCount.oa.mjs";
import { gluuWhitePagesEnabled } from "./gluuWhitePagesEnabled.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { inumFN } from "./inumFN.oa.mjs";
import { oxAuthenticationMode } from "./oxAuthenticationMode.oa.mjs";
import { oxCacheConfiguration } from "./oxCacheConfiguration.oa.mjs";
import { oxDocumentStoreConfiguration } from "./oxDocumentStoreConfiguration.oa.mjs";
import { oxIDPAuthentication } from "./oxIDPAuthentication.oa.mjs";
import { oxLogConfigLocation } from "./oxLogConfigLocation.oa.mjs";
import { oxLogViewerConfig } from "./oxLogViewerConfig.oa.mjs";
import { oxSmtpConfiguration } from "./oxSmtpConfiguration.oa.mjs";
import { oxTrustAuthenticationMode } from "./oxTrustAuthenticationMode.oa.mjs";
import { oxTrustCacheRefreshServerIpAddress } from "./oxTrustCacheRefreshServerIpAddress.oa.mjs";
import { oxTrustEmail } from "./oxTrustEmail.oa.mjs";
import { oxTrustStoreCert } from "./oxTrustStoreCert.oa.mjs";
import { oxTrustStoreConf } from "./oxTrustStoreConf.oa.mjs";
import { passwordResetAllowed } from "./passwordResetAllowed.oa.mjs";
import { softwareVersion } from "./softwareVersion.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [blowfishPassword, countryName, organizationalUnitName, description, displayName, gluuAdditionalBandwidth, gluuAdditionalMemory, gluuApplianceDnsServer, gluuAppliancePollingInterval, gluuBandwidthRX, gluuBandwidthTX, gluuDSstatus, gluuFederationHostingEnabled, gluuHTTPstatus, gluuHostname, gluuInvoiceNo, gluuLastUpdate, gluuLifeRay, gluuManageIdentityPermission, gluuManager, gluuMaxLogSize, gluuOrgProfileMgt, gluuPaidUntil, gluuPaymentProcessorTimestamp, gluuPrivate, gluuPublishIdpMetadata, gluuResizeInitiated, gluuSPTR, gluuScimEnabled, gluuShibAssertionsIssued, gluuShibFailedAuth, gluuShibSecurityEvents, gluuShibSuccessfulAuths, oxTrustEmail, gluuSmtpFromEmailAddress, gluuSmtpFromName, gluuSmtpHost, gluuSmtpPassword, gluuSmtpPort, gluuSmtpRequiresAuthentication, gluuSmtpRequiresSsl, gluuSmtpUserName, gluuSslExpiry, gluuStatus, gluuTargetRAM, gluuUrl, gluuVDSenabled, gluuVDSstatus, gluuVdsCacheRefreshEnabled, gluuVdsCacheRefreshLastUpdate, gluuVdsCacheRefreshLastUpdateCount, gluuVdsCacheRefreshPollingInterval, gluuVdsCacheRefreshProblemCount, gluuWhitePagesEnabled, iname, inum, inumFN, organizationName, oxAuthenticationMode, oxTrustAuthenticationMode, oxIDPAuthentication, oxLogViewerConfig, oxLogConfigLocation, oxSmtpConfiguration, oxCacheConfiguration, oxDocumentStoreConfiguration, oxTrustStoreCert, oxTrustStoreConf, passwordResetAllowed, softwareVersion, userPassword, oxTrustCacheRefreshServerIpAddress, gluuPassportEnabled, gluuRadiusEnabled, gluuSamlEnabled, gluuSmtpServerTrust] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuConfiguration"],
    "&id": id_oc_gluuConfiguration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
