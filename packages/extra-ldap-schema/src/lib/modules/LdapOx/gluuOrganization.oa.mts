/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_gluuOrganization } from "../LdapOx/id-oc-gluuOrganization.va.mjs";


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
const gluuOrganization: OBJECT_CLASS = undefined;

/* eslint-enable */
