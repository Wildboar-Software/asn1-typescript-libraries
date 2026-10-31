/* eslint-disable */
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuOrganization } from "../LdapOx/id-oc-gluuOrganization.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { county } from "./county.oa.mjs";
import { deployedAppliances } from "./deployedAppliances.oa.mjs";
import { gluuAddPersonCapability } from "./gluuAddPersonCapability.oa.mjs";
import { gluuAdditionalUsers } from "./gluuAdditionalUsers.oa.mjs";
import { gluuApplianceUpdateRequestList } from "./gluuApplianceUpdateRequestList.oa.mjs";
import { gluuCustomMessage } from "./gluuCustomMessage.oa.mjs";
import { gluuFaviconImage } from "./gluuFaviconImage.oa.mjs";
import { gluuFederationHostingEnabled } from "./gluuFederationHostingEnabled.oa.mjs";
import { gluuInvoiceNo } from "./gluuInvoiceNo.oa.mjs";
import { gluuLogoImage } from "./gluuLogoImage.oa.mjs";
import { gluuManageIdentityPermission } from "./gluuManageIdentityPermission.oa.mjs";
import { gluuManager } from "./gluuManager.oa.mjs";
import { gluuManagerGroup } from "./gluuManagerGroup.oa.mjs";
import { gluuOrgShortName } from "./gluuOrgShortName.oa.mjs";
import { gluuPaidUntil } from "./gluuPaidUntil.oa.mjs";
import { gluuPaymentProcessorTimestamp } from "./gluuPaymentProcessorTimestamp.oa.mjs";
import { gluuProStoresUser } from "./gluuProStoresUser.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { gluuTempFaviconImage } from "./gluuTempFaviconImage.oa.mjs";
import { gluuThemeColor } from "./gluuThemeColor.oa.mjs";
import { gluuWhitePagesEnabled } from "./gluuWhitePagesEnabled.oa.mjs";
import { idpFaviconPath } from "./idpFaviconPath.oa.mjs";
import { idpLogoPath } from "./idpLogoPath.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { memberOf } from "./memberOf.oa.mjs";
import { nonProfit } from "./nonProfit.oa.mjs";
import { oxAuthFaviconPath } from "./oxAuthFaviconPath.oa.mjs";
import { oxAuthLogoPath } from "./oxAuthLogoPath.oa.mjs";
import { oxCreationTimestamp } from "./oxCreationTimestamp.oa.mjs";
import { oxLinkLinktrack } from "./oxLinkLinktrack.oa.mjs";
import { oxLinktrackEnabled } from "./oxLinktrackEnabled.oa.mjs";
import { oxLinktrackLogin } from "./oxLinktrackLogin.oa.mjs";
import { oxLinktrackPassword } from "./oxLinktrackPassword.oa.mjs";
import { oxRegistrationConfiguration } from "./oxRegistrationConfiguration.oa.mjs";
import { oxTrustFaviconPath } from "./oxTrustFaviconPath.oa.mjs";
import { oxTrustLogoPath } from "./oxTrustLogoPath.oa.mjs";
import { proStoresToken } from "./proStoresToken.oa.mjs";
import { prostoresTimestamp } from "./prostoresTimestamp.oa.mjs";
import { scimAuthMode } from "./scimAuthMode.oa.mjs";
import { scimGroup } from "./scimGroup.oa.mjs";
import { scimStatus } from "./scimStatus.oa.mjs";

/**
 * @summary gluuOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { countryName
 *                               | county
 *                               | deployedAppliances
 *                               | description
 *                               | displayName
 *                               | gluuAddPersonCapability
 *                               | gluuAdditionalUsers
 *                               | gluuApplianceUpdateRequestList
 *                               | gluuCustomMessage
 *                               | gluuFaviconImage
 *                               | gluuFederationHostingEnabled
 *                               | gluuInvoiceNo
 *                               | gluuLogoImage
 *                               | gluuManageIdentityPermission
 *                               | gluuManager
 *                               | gluuManagerGroup
 *                               | gluuOrgShortName
 *                               | gluuPaidUntil
 *                               | gluuPaymentProcessorTimestamp
 *                               | gluuProStoresUser
 *                               | gluuStatus
 *                               | gluuTempFaviconImage
 *                               | gluuThemeColor
 *                               | gluuWhitePagesEnabled
 *                               | iname
 *                               | inum
 *                               | localityName
 *                               | mail
 *                               | memberOf
 *                               | nonProfit
 *                               | organizationName
 *                               | oxCreationTimestamp
 *                               | oxLinkLinktrack
 *                               | oxLinktrackEnabled
 *                               | oxLinktrackLogin
 *                               | oxLinktrackPassword
 *                               | oxRegistrationConfiguration
 *                               | postalCode
 *                               | proStoresToken
 *                               | prostoresTimestamp
 *                               | scimAuthMode
 *                               | scimGroup
 *                               | scimStatus
 *                               | stateOrProvinceName
 *                               | streetAddress
 *                               | telephoneNumber
 *                               | title
 *                               | uid
 *                               | userPassword
 *                               | oxTrustLogoPath
 *                               | oxTrustFaviconPath
 *                               | oxAuthLogoPath
 *                               | oxAuthFaviconPath
 *                               | idpLogoPath
 *                               | idpFaviconPath }
 *   LDAP-NAME                 {"gluuOrganization"}
 *   ID                        id-oc-gluuOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [countryName, county, deployedAppliances, description, displayName, gluuAddPersonCapability, gluuAdditionalUsers, gluuApplianceUpdateRequestList, gluuCustomMessage, gluuFaviconImage, gluuFederationHostingEnabled, gluuInvoiceNo, gluuLogoImage, gluuManageIdentityPermission, gluuManager, gluuManagerGroup, gluuOrgShortName, gluuPaidUntil, gluuPaymentProcessorTimestamp, gluuProStoresUser, gluuStatus, gluuTempFaviconImage, gluuThemeColor, gluuWhitePagesEnabled, iname, inum, localityName, mail, memberOf, nonProfit, organizationName, oxCreationTimestamp, oxLinkLinktrack, oxLinktrackEnabled, oxLinktrackLogin, oxLinktrackPassword, oxRegistrationConfiguration, postalCode, proStoresToken, prostoresTimestamp, scimAuthMode, scimGroup, scimStatus, stateOrProvinceName, streetAddress, telephoneNumber, title, uid, userPassword, oxTrustLogoPath, oxTrustFaviconPath, oxAuthLogoPath, oxAuthFaviconPath, idpLogoPath, idpFaviconPath] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuOrganization"],
    "&id": id_oc_gluuOrganization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
