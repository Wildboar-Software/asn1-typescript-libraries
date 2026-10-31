/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_gluuPerson } from "../LdapOx/id-oc-gluuPerson.va.mjs";


/**
 * @summary gluuPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { oxAssociatedClient
 *                               | countryName
 *                               | displayName
 *                               | givenName
 *                               | gluuManagedOrganizations
 *                               | gluuOptOuts
 *                               | gluuStatus
 *                               | gluuWhitePagesListed
 *                               | iname
 *                               | inum
 *                               | mail
 *                               | gluuSLAManager
 *                               | memberOf
 *                               | organizationName
 *                               | oxAuthPersistentJWT
 *                               | oxCreationTimestamp
 *                               | oxExternalUid
 *                               | oxOTPCache
 *                               | oxLastLogonTime
 *                               | oxTrustActive
 *                               | oxTrustAddresses
 *                               | oxTrustEmail
 *                               | oxTrustEntitlements
 *                               | oxTrustExternalId
 *                               | oxTrustImsValue
 *                               | oxTrustMetaCreated
 *                               | oxTrustMetaLastModified
 *                               | oxTrustMetaLocation
 *                               | oxTrustMetaVersion
 *                               | oxTrustNameFormatted
 *                               | oxTrustPhoneValue
 *                               | oxTrustPhotos
 *                               | oxTrustProfileURL
 *                               | oxTrustRole
 *                               | oxTrustTitle
 *                               | oxTrustUserType
 *                               | oxTrusthonorificPrefix
 *                               | oxTrusthonorificSuffix
 *                               | oxTrustx509Certificate
 *                               | oxPasswordExpirationDate
 *                               | persistentId
 *                               | middleName
 *                               | nickname
 *                               | preferredUsername
 *                               | profile
 *                               | picture
 *                               | website
 *                               | emailVerified
 *                               | gender
 *                               | birthdate
 *                               | zoneinfo
 *                               | locale
 *                               | phoneNumberVerified
 *                               | address
 *                               | updatedAt
 *                               | preferredLanguage
 *                               | role
 *                               | secretAnswer
 *                               | secretQuestion
 *                               | seeAlso
 *                               | surname
 *                               | commonName
 *                               | transientId
 *                               | uid
 *                               | userPassword
 *                               | stateOrProvinceName
 *                               | streetAddress
 *                               | localityName
 *                               | oxCountInvalidLogin
 *                               | oxEnrollmentCode
 *                               | gluuIMAPData
 *                               | oxPPID
 *                               | oxGuid
 *                               | userRandomKey
 *                               | oxPreferredMethod
 *                               | userCertificate
 *                               | oxOTPDevices
 *                               | oxMobileDevices
 *                               | oxStrongAuthPolicy
 *                               | oxTrustedDevicesInfo
 *                               | oxUnlinkedExternalUids
 *                               | oxAuthBackchannelDeviceRegistrationToken
 *                               | oxAuthBackchannelUserCode }
 *   LDAP-NAME                 {"gluuPerson"}
 *   ID                        id-oc-gluuPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuPerson: OBJECT_CLASS = undefined;

/* eslint-enable */
