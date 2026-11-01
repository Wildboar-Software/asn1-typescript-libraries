/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { id_oc_gluuPerson } from "../LdapOx/id-oc-gluuPerson.va.mjs";
import { oxAssociatedClient } from "../LdapOx/oxAssociatedClient.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { gluuManagedOrganizations } from "../LdapOx/gluuManagedOrganizations.oa.mjs";
import { gluuOptOuts } from "../LdapOx/gluuOptOuts.oa.mjs";
import { gluuStatus } from "../LdapOx/gluuStatus.oa.mjs";
import { gluuWhitePagesListed } from "../LdapOx/gluuWhitePagesListed.oa.mjs";
import { iname } from "../LdapOx/iname.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { gluuSLAManager } from "../LdapOx/gluuSLAManager.oa.mjs";
import { memberOf } from "../LdapOx/memberOf.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { oxAuthPersistentJWT } from "../LdapOx/oxAuthPersistentJWT.oa.mjs";
import { oxCreationTimestamp } from "../LdapOx/oxCreationTimestamp.oa.mjs";
import { oxExternalUid } from "../LdapOx/oxExternalUid.oa.mjs";
import { oxOTPCache } from "../LdapOx/oxOTPCache.oa.mjs";
import { oxLastLogonTime } from "../LdapOx/oxLastLogonTime.oa.mjs";
import { oxTrustActive } from "../LdapOx/oxTrustActive.oa.mjs";
import { oxTrustAddresses } from "../LdapOx/oxTrustAddresses.oa.mjs";
import { oxTrustEmail } from "../LdapOx/oxTrustEmail.oa.mjs";
import { oxTrustEntitlements } from "../LdapOx/oxTrustEntitlements.oa.mjs";
import { oxTrustExternalId } from "../LdapOx/oxTrustExternalId.oa.mjs";
import { oxTrustImsValue } from "../LdapOx/oxTrustImsValue.oa.mjs";
import { oxTrustMetaCreated } from "../LdapOx/oxTrustMetaCreated.oa.mjs";
import { oxTrustMetaLastModified } from "../LdapOx/oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "../LdapOx/oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "../LdapOx/oxTrustMetaVersion.oa.mjs";
import { oxTrustNameFormatted } from "../LdapOx/oxTrustNameFormatted.oa.mjs";
import { oxTrustPhoneValue } from "../LdapOx/oxTrustPhoneValue.oa.mjs";
import { oxTrustPhotos } from "../LdapOx/oxTrustPhotos.oa.mjs";
import { oxTrustProfileURL } from "../LdapOx/oxTrustProfileURL.oa.mjs";
import { oxTrustRole } from "../LdapOx/oxTrustRole.oa.mjs";
import { oxTrustTitle } from "../LdapOx/oxTrustTitle.oa.mjs";
import { oxTrustUserType } from "../LdapOx/oxTrustUserType.oa.mjs";
import { oxTrusthonorificPrefix } from "../LdapOx/oxTrusthonorificPrefix.oa.mjs";
import { oxTrusthonorificSuffix } from "../LdapOx/oxTrusthonorificSuffix.oa.mjs";
import { oxTrustx509Certificate } from "../LdapOx/oxTrustx509Certificate.oa.mjs";
import { oxPasswordExpirationDate } from "../LdapOx/oxPasswordExpirationDate.oa.mjs";
import { persistentId } from "../LdapOx/persistentId.oa.mjs";
import { middleName } from "../LdapOx/middleName.oa.mjs";
import { nickname } from "../LdapOx/nickname.oa.mjs";
import { preferredUsername } from "../LdapOx/preferredUsername.oa.mjs";
import { profile } from "../LdapOx/profile.oa.mjs";
import { picture } from "../LdapOx/picture.oa.mjs";
import { website } from "../LdapOx/website.oa.mjs";
import { emailVerified } from "../LdapOx/emailVerified.oa.mjs";
import { gender } from "../LdapOx/gender.oa.mjs";
import { birthdate } from "../LdapOx/birthdate.oa.mjs";
import { zoneinfo } from "../LdapOx/zoneinfo.oa.mjs";
import { locale } from "../LdapOx/locale.oa.mjs";
import { phoneNumberVerified } from "../LdapOx/phoneNumberVerified.oa.mjs";
import { address } from "../LdapOx/address.oa.mjs";
import { updatedAt } from "../LdapOx/updatedAt.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { role } from "../LdapOx/role.oa.mjs";
import { secretAnswer } from "../LdapOx/secretAnswer.oa.mjs";
import { secretQuestion } from "../LdapOx/secretQuestion.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { transientId } from "../LdapOx/transientId.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { oxCountInvalidLogin } from "../LdapOx/oxCountInvalidLogin.oa.mjs";
import { oxEnrollmentCode } from "../LdapOx/oxEnrollmentCode.oa.mjs";
import { gluuIMAPData } from "../LdapOx/gluuIMAPData.oa.mjs";
import { oxPPID } from "../LdapOx/oxPPID.oa.mjs";
import { oxGuid } from "../LdapOx/oxGuid.oa.mjs";
import { userRandomKey } from "../LdapOx/userRandomKey.oa.mjs";
import { oxPreferredMethod } from "../LdapOx/oxPreferredMethod.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { oxOTPDevices } from "../LdapOx/oxOTPDevices.oa.mjs";
import { oxMobileDevices } from "../LdapOx/oxMobileDevices.oa.mjs";
import { oxStrongAuthPolicy } from "../LdapOx/oxStrongAuthPolicy.oa.mjs";
import { oxTrustedDevicesInfo } from "../LdapOx/oxTrustedDevicesInfo.oa.mjs";
import { oxUnlinkedExternalUids } from "../LdapOx/oxUnlinkedExternalUids.oa.mjs";
import { oxAuthBackchannelDeviceRegistrationToken } from "../LdapOx/oxAuthBackchannelDeviceRegistrationToken.oa.mjs";
import { oxAuthBackchannelUserCode } from "../LdapOx/oxAuthBackchannelUserCode.oa.mjs";
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
const gluuPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ objectClass, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ oxAssociatedClient, countryName, displayName, givenName, gluuManagedOrganizations, gluuOptOuts, gluuStatus, gluuWhitePagesListed, iname, inum, mail, gluuSLAManager, memberOf, organizationName, oxAuthPersistentJWT, oxCreationTimestamp, oxExternalUid, oxOTPCache, oxLastLogonTime, oxTrustActive, oxTrustAddresses, oxTrustEmail, oxTrustEntitlements, oxTrustExternalId, oxTrustImsValue, oxTrustMetaCreated, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion, oxTrustNameFormatted, oxTrustPhoneValue, oxTrustPhotos, oxTrustProfileURL, oxTrustRole, oxTrustTitle, oxTrustUserType, oxTrusthonorificPrefix, oxTrusthonorificSuffix, oxTrustx509Certificate, oxPasswordExpirationDate, persistentId, middleName, nickname, preferredUsername, profile, picture, website, emailVerified, gender, birthdate, zoneinfo, locale, phoneNumberVerified, address, updatedAt, preferredLanguage, role, secretAnswer, secretQuestion, seeAlso, surname, commonName, transientId, uid, userPassword, stateOrProvinceName, streetAddress, localityName, oxCountInvalidLogin, oxEnrollmentCode, gluuIMAPData, oxPPID, oxGuid, userRandomKey, oxPreferredMethod, userCertificate, oxOTPDevices, oxMobileDevices, oxStrongAuthPolicy, oxTrustedDevicesInfo, oxUnlinkedExternalUids, oxAuthBackchannelDeviceRegistrationToken, oxAuthBackchannelUserCode, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gluuPerson" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gluuPerson /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
