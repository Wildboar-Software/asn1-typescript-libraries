/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuOrganization } from "../LdapOx/id-oc-gluuOrganization.va.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { county } from "../LdapOx/county.oa.mjs";
import { deployedAppliances } from "../LdapOx/deployedAppliances.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { gluuAddPersonCapability } from "../LdapOx/gluuAddPersonCapability.oa.mjs";
import { gluuAdditionalUsers } from "../LdapOx/gluuAdditionalUsers.oa.mjs";
import { gluuApplianceUpdateRequestList } from "../LdapOx/gluuApplianceUpdateRequestList.oa.mjs";
import { gluuCustomMessage } from "../LdapOx/gluuCustomMessage.oa.mjs";
import { gluuFaviconImage } from "../LdapOx/gluuFaviconImage.oa.mjs";
import { gluuFederationHostingEnabled } from "../LdapOx/gluuFederationHostingEnabled.oa.mjs";
import { gluuInvoiceNo } from "../LdapOx/gluuInvoiceNo.oa.mjs";
import { gluuLogoImage } from "../LdapOx/gluuLogoImage.oa.mjs";
import { gluuManageIdentityPermission } from "../LdapOx/gluuManageIdentityPermission.oa.mjs";
import { gluuManager } from "../LdapOx/gluuManager.oa.mjs";
import { gluuManagerGroup } from "../LdapOx/gluuManagerGroup.oa.mjs";
import { gluuOrgShortName } from "../LdapOx/gluuOrgShortName.oa.mjs";
import { gluuPaidUntil } from "../LdapOx/gluuPaidUntil.oa.mjs";
import { gluuPaymentProcessorTimestamp } from "../LdapOx/gluuPaymentProcessorTimestamp.oa.mjs";
import { gluuProStoresUser } from "../LdapOx/gluuProStoresUser.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { gluuTempFaviconImage } from "../LdapOx/gluuTempFaviconImage.oa.mjs";
import { gluuThemeColor } from "../LdapOx/gluuThemeColor.oa.mjs";
import { gluuWhitePagesEnabled } from "../LdapOx/gluuWhitePagesEnabled.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { memberOf } from "../LdapOx/memberOf.oa.mjs";
import { nonProfit } from "../LdapOx/nonProfit.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { oxCreationTimestamp } from "../LdapOx/oxCreationTimestamp.oa.mjs";
import { oxLinkLinktrack } from "../LdapOx/oxLinkLinktrack.oa.mjs";
import { oxLinktrackEnabled } from "../LdapOx/oxLinktrackEnabled.oa.mjs";
import { oxLinktrackLogin } from "../LdapOx/oxLinktrackLogin.oa.mjs";
import { oxLinktrackPassword } from "../LdapOx/oxLinktrackPassword.oa.mjs";
import { oxRegistrationConfiguration } from "../LdapOx/oxRegistrationConfiguration.oa.mjs";
import { postalCode } from "../SelectedAttributeTypes/postalCode.oa.mjs";
import { proStoresToken } from "../LdapOx/proStoresToken.oa.mjs";
import { prostoresTimestamp } from "../LdapOx/prostoresTimestamp.oa.mjs";
import { scimAuthMode } from "../LdapOx/scimAuthMode.oa.mjs";
import { scimGroup } from "../LdapOx/scimGroup.oa.mjs";
import { scimStatus } from "../LdapOx/scimStatus.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { telephoneNumber } from "../SelectedAttributeTypes/telephoneNumber.oa.mjs";
import { title } from "../SelectedAttributeTypes/title.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { oxTrustLogoPath } from "../LdapOx/oxTrustLogoPath.oa.mjs";
import { oxTrustFaviconPath } from "../LdapOx/oxTrustFaviconPath.oa.mjs";
import { oxAuthLogoPath } from "../LdapOx/oxAuthLogoPath.oa.mjs";
import { oxAuthFaviconPath } from "../LdapOx/oxAuthFaviconPath.oa.mjs";
import { idpLogoPath } from "../LdapOx/idpLogoPath.oa.mjs";
import { idpFaviconPath } from "../LdapOx/idpFaviconPath.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ countryName, county, deployedAppliances, description, displayName, gluuAddPersonCapability, gluuAdditionalUsers, gluuApplianceUpdateRequestList, gluuCustomMessage, gluuFaviconImage, gluuFederationHostingEnabled, gluuInvoiceNo, gluuLogoImage, gluuManageIdentityPermission, gluuManager, gluuManagerGroup, gluuOrgShortName, gluuPaidUntil, gluuPaymentProcessorTimestamp, gluuProStoresUser, gluuStatus, gluuTempFaviconImage, gluuThemeColor, gluuWhitePagesEnabled, iname, inum, localityName, mail, memberOf, nonProfit, organizationName, oxCreationTimestamp, oxLinkLinktrack, oxLinktrackEnabled, oxLinktrackLogin, oxLinktrackPassword, oxRegistrationConfiguration, postalCode, proStoresToken, prostoresTimestamp, scimAuthMode, scimGroup, scimStatus, stateOrProvinceName, streetAddress, telephoneNumber, title, uid, userPassword, oxTrustLogoPath, oxTrustFaviconPath, oxAuthLogoPath, oxAuthFaviconPath, idpLogoPath, idpFaviconPath, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuOrganization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

