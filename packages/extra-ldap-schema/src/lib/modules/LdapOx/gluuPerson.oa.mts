/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { userPassword } from "../AuthenticationFramework/userPassword.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuPerson } from "../LdapOx/id-oc-gluuPerson.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { seeAlso } from "../SelectedAttributeTypes/seeAlso.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
import { surname } from "../SelectedAttributeTypes/surname.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { address } from "./address.oa.mjs";
import { birthdate } from "./birthdate.oa.mjs";
import { emailVerified } from "./emailVerified.oa.mjs";
import { gender } from "./gender.oa.mjs";
import { gluuIMAPData } from "./gluuIMAPData.oa.mjs";
import { gluuManagedOrganizations } from "./gluuManagedOrganizations.oa.mjs";
import { gluuOptOuts } from "./gluuOptOuts.oa.mjs";
import { gluuSLAManager } from "./gluuSLAManager.oa.mjs";
import { gluuStatus } from "./gluuStatus.oa.mjs";
import { gluuWhitePagesListed } from "./gluuWhitePagesListed.oa.mjs";
import { iname } from "./iname.oa.mjs";
import { inum } from "./inum.oa.mjs";
import { locale } from "./locale.oa.mjs";
import { memberOf } from "./memberOf.oa.mjs";
import { middleName } from "./middleName.oa.mjs";
import { nickname } from "./nickname.oa.mjs";
import { oxAssociatedClient } from "./oxAssociatedClient.oa.mjs";
import { oxAuthBackchannelDeviceRegistrationToken } from "./oxAuthBackchannelDeviceRegistrationToken.oa.mjs";
import { oxAuthBackchannelUserCode } from "./oxAuthBackchannelUserCode.oa.mjs";
import { oxAuthPersistentJWT } from "./oxAuthPersistentJWT.oa.mjs";
import { oxCountInvalidLogin } from "./oxCountInvalidLogin.oa.mjs";
import { oxCreationTimestamp } from "./oxCreationTimestamp.oa.mjs";
import { oxEnrollmentCode } from "./oxEnrollmentCode.oa.mjs";
import { oxExternalUid } from "./oxExternalUid.oa.mjs";
import { oxGuid } from "./oxGuid.oa.mjs";
import { oxLastLogonTime } from "./oxLastLogonTime.oa.mjs";
import { oxMobileDevices } from "./oxMobileDevices.oa.mjs";
import { oxOTPCache } from "./oxOTPCache.oa.mjs";
import { oxOTPDevices } from "./oxOTPDevices.oa.mjs";
import { oxPPID } from "./oxPPID.oa.mjs";
import { oxPasswordExpirationDate } from "./oxPasswordExpirationDate.oa.mjs";
import { oxPreferredMethod } from "./oxPreferredMethod.oa.mjs";
import { oxStrongAuthPolicy } from "./oxStrongAuthPolicy.oa.mjs";
import { oxTrustActive } from "./oxTrustActive.oa.mjs";
import { oxTrustAddresses } from "./oxTrustAddresses.oa.mjs";
import { oxTrustEmail } from "./oxTrustEmail.oa.mjs";
import { oxTrustEntitlements } from "./oxTrustEntitlements.oa.mjs";
import { oxTrustExternalId } from "./oxTrustExternalId.oa.mjs";
import { oxTrustImsValue } from "./oxTrustImsValue.oa.mjs";
import { oxTrustMetaCreated } from "./oxTrustMetaCreated.oa.mjs";
import { oxTrustMetaLastModified } from "./oxTrustMetaLastModified.oa.mjs";
import { oxTrustMetaLocation } from "./oxTrustMetaLocation.oa.mjs";
import { oxTrustMetaVersion } from "./oxTrustMetaVersion.oa.mjs";
import { oxTrustNameFormatted } from "./oxTrustNameFormatted.oa.mjs";
import { oxTrustPhoneValue } from "./oxTrustPhoneValue.oa.mjs";
import { oxTrustPhotos } from "./oxTrustPhotos.oa.mjs";
import { oxTrustProfileURL } from "./oxTrustProfileURL.oa.mjs";
import { oxTrustRole } from "./oxTrustRole.oa.mjs";
import { oxTrustTitle } from "./oxTrustTitle.oa.mjs";
import { oxTrustUserType } from "./oxTrustUserType.oa.mjs";
import { oxTrustedDevicesInfo } from "./oxTrustedDevicesInfo.oa.mjs";
import { oxTrusthonorificPrefix } from "./oxTrusthonorificPrefix.oa.mjs";
import { oxTrusthonorificSuffix } from "./oxTrusthonorificSuffix.oa.mjs";
import { oxTrustx509Certificate } from "./oxTrustx509Certificate.oa.mjs";
import { oxUnlinkedExternalUids } from "./oxUnlinkedExternalUids.oa.mjs";
import { persistentId } from "./persistentId.oa.mjs";
import { phoneNumberVerified } from "./phoneNumberVerified.oa.mjs";
import { picture } from "./picture.oa.mjs";
import { preferredUsername } from "./preferredUsername.oa.mjs";
import { profile } from "./profile.oa.mjs";
import { role } from "./role.oa.mjs";
import { secretAnswer } from "./secretAnswer.oa.mjs";
import { secretQuestion } from "./secretQuestion.oa.mjs";
import { transientId } from "./transientId.oa.mjs";
import { updatedAt } from "./updatedAt.oa.mjs";
import { userRandomKey } from "./userRandomKey.oa.mjs";
import { website } from "./website.oa.mjs";
import { zoneinfo } from "./zoneinfo.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [oxAssociatedClient, countryName, displayName, givenName, gluuManagedOrganizations, gluuOptOuts, gluuStatus, gluuWhitePagesListed, iname, inum, mail, gluuSLAManager, memberOf, organizationName, oxAuthPersistentJWT, oxCreationTimestamp, oxExternalUid, oxOTPCache, oxLastLogonTime, oxTrustActive, oxTrustAddresses, oxTrustEmail, oxTrustEntitlements, oxTrustExternalId, oxTrustImsValue, oxTrustMetaCreated, oxTrustMetaLastModified, oxTrustMetaLocation, oxTrustMetaVersion, oxTrustNameFormatted, oxTrustPhoneValue, oxTrustPhotos, oxTrustProfileURL, oxTrustRole, oxTrustTitle, oxTrustUserType, oxTrusthonorificPrefix, oxTrusthonorificSuffix, oxTrustx509Certificate, oxPasswordExpirationDate, persistentId, middleName, nickname, preferredUsername, profile, picture, website, emailVerified, gender, birthdate, zoneinfo, locale, phoneNumberVerified, address, updatedAt, preferredLanguage, role, secretAnswer, secretQuestion, seeAlso, surname, commonName, transientId, uid, userPassword, stateOrProvinceName, streetAddress, localityName, oxCountInvalidLogin, oxEnrollmentCode, gluuIMAPData, oxPPID, oxGuid, userRandomKey, oxPreferredMethod, userCertificate, oxOTPDevices, oxMobileDevices, oxStrongAuthPolicy, oxTrustedDevicesInfo, oxUnlinkedExternalUids, oxAuthBackchannelDeviceRegistrationToken, oxAuthBackchannelUserCode] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuPerson"],
    "&id": id_oc_gluuPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
