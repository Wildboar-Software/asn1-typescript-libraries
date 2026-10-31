/* eslint-disable */
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";
import { carLicense } from "../InetOrgPerson/carLicense.oa.mjs";
import { departmentNumber } from "../InetOrgPerson/departmentNumber.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { audio } from "../LdapSchema2ldifCosine/audio.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { homePostalAddress } from "../LdapSchema2ldifCosine/homePostalAddress.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { photo } from "../LdapSchema2ldifCosine/photo.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { jpegPhoto } from "../LdapSchema2ldifInetorgperson/jpegPhoto.oa.mjs";
import { id_oc_user } from "../MSUser/id-oc-user.va.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { userPKCS12 } from "../PKCS-9/userPKCS12.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { aCSPolicyName } from "./aCSPolicyName.oa.mjs";
import { accountExpires } from "./accountExpires.oa.mjs";
import { adminCount } from "./adminCount.oa.mjs";
import { badPasswordTime } from "./badPasswordTime.oa.mjs";
import { badPwdCount } from "./badPwdCount.oa.mjs";
import { codePage } from "./codePage.oa.mjs";
import { controlAccessRights } from "./controlAccessRights.oa.mjs";
import { dBCSPwd } from "./dBCSPwd.oa.mjs";
import { defaultClassStore } from "./defaultClassStore.oa.mjs";
import { desktopProfile } from "./desktopProfile.oa.mjs";
import { dynamicLDAPServer } from "./dynamicLDAPServer.oa.mjs";
import { groupMembershipSAM } from "./groupMembershipSAM.oa.mjs";
import { groupPriority } from "./groupPriority.oa.mjs";
import { groupsToIgnore } from "./groupsToIgnore.oa.mjs";
import { homeDrive } from "./homeDrive.oa.mjs";
import { lastLogoff } from "./lastLogoff.oa.mjs";
import { lastLogon } from "./lastLogon.oa.mjs";
import { lastLogonTimestamp } from "./lastLogonTimestamp.oa.mjs";
import { lmPwdHistory } from "./lmPwdHistory.oa.mjs";
import { localeID } from "./localeID.oa.mjs";
import { lockoutTime } from "./lockoutTime.oa.mjs";
import { logonCount } from "./logonCount.oa.mjs";
import { logonHours } from "./logonHours.oa.mjs";
import { logonWorkstation } from "./logonWorkstation.oa.mjs";
import { mS_DS_CreatorSID } from "./mS-DS-CreatorSID.oa.mjs";
import { mSMQDigests } from "./mSMQDigests.oa.mjs";
import { mSMQDigestsMig } from "./mSMQDigestsMig.oa.mjs";
import { mSMQSignCertificates } from "./mSMQSignCertificates.oa.mjs";
import { mSMQSignCertificatesMig } from "./mSMQSignCertificatesMig.oa.mjs";
import { maxStorage } from "./maxStorage.oa.mjs";
import { msCOM_UserPartitionSetLink } from "./msCOM-UserPartitionSetLink.oa.mjs";
import { msDRM_IdentityCertificate } from "./msDRM-IdentityCertificate.oa.mjs";
import { msDS_AssignedAuthNPolicy } from "./msDS-AssignedAuthNPolicy.oa.mjs";
import { msDS_AssignedAuthNPolicySilo } from "./msDS-AssignedAuthNPolicySilo.oa.mjs";
import { msDS_AuthNPolicySiloMembersBL } from "./msDS-AuthNPolicySiloMembersBL.oa.mjs";
import { msDS_AuthenticatedAtDC } from "./msDS-AuthenticatedAtDC.oa.mjs";
import { msDS_Cached_Membership_Time_Stamp } from "./msDS-Cached-Membership-Time-Stamp.oa.mjs";
import { msDS_Cached_Membership } from "./msDS-Cached-Membership.oa.mjs";
import { msDS_FailedInteractiveLogonCount } from "./msDS-FailedInteractiveLogonCount.oa.mjs";
import { msDS_FailedInteractiveLogonCountAtLastSuccessfulLogon } from "./msDS-FailedInteractiveLogonCountAtLastSuccessfulLogon.oa.mjs";
import { msDS_LastFailedInteractiveLogonTime } from "./msDS-LastFailedInteractiveLogonTime.oa.mjs";
import { msDS_LastSuccessfulInteractiveLogonTime } from "./msDS-LastSuccessfulInteractiveLogonTime.oa.mjs";
import { msDS_PrimaryComputer } from "./msDS-PrimaryComputer.oa.mjs";
import { msDS_ResultantPSO } from "./msDS-ResultantPSO.oa.mjs";
import { msDS_SecondaryKrbTgtNumber } from "./msDS-SecondaryKrbTgtNumber.oa.mjs";
import { msDS_Site_Affinity } from "./msDS-Site-Affinity.oa.mjs";
import { msDS_SourceObjectDN } from "./msDS-SourceObjectDN.oa.mjs";
import { msDS_SupportedEncryptionTypes } from "./msDS-SupportedEncryptionTypes.oa.mjs";
import { msDS_SyncServerUrl } from "./msDS-SyncServerUrl.oa.mjs";
import { msDS_User_Account_Control_Computed } from "./msDS-User-Account-Control-Computed.oa.mjs";
import { msDS_UserPasswordExpiryTimeComputed } from "./msDS-UserPasswordExpiryTimeComputed.oa.mjs";
import { msIIS_FTPDir } from "./msIIS-FTPDir.oa.mjs";
import { msIIS_FTPRoot } from "./msIIS-FTPRoot.oa.mjs";
import { msNPAllowDialin } from "./msNPAllowDialin.oa.mjs";
import { msNPCallingStationID } from "./msNPCallingStationID.oa.mjs";
import { msNPSavedCallingStationID } from "./msNPSavedCallingStationID.oa.mjs";
import { msPKI_CredentialRoamingTokens } from "./msPKI-CredentialRoamingTokens.oa.mjs";
import { msPKIAccountCredentials } from "./msPKIAccountCredentials.oa.mjs";
import { msPKIDPAPIMasterKeys } from "./msPKIDPAPIMasterKeys.oa.mjs";
import { msPKIRoamingTimeStamp } from "./msPKIRoamingTimeStamp.oa.mjs";
import { msRADIUS_FramedInterfaceId } from "./msRADIUS-FramedInterfaceId.oa.mjs";
import { msRADIUS_FramedIpv6Prefix } from "./msRADIUS-FramedIpv6Prefix.oa.mjs";
import { msRADIUS_FramedIpv6Route } from "./msRADIUS-FramedIpv6Route.oa.mjs";
import { msRADIUS_SavedFramedInterfaceId } from "./msRADIUS-SavedFramedInterfaceId.oa.mjs";
import { msRADIUS_SavedFramedIpv6Prefix } from "./msRADIUS-SavedFramedIpv6Prefix.oa.mjs";
import { msRADIUS_SavedFramedIpv6Route } from "./msRADIUS-SavedFramedIpv6Route.oa.mjs";
import { msRADIUSCallbackNumber } from "./msRADIUSCallbackNumber.oa.mjs";
import { msRADIUSFramedIPAddress } from "./msRADIUSFramedIPAddress.oa.mjs";
import { msRADIUSFramedRoute } from "./msRADIUSFramedRoute.oa.mjs";
import { msRADIUSServiceType } from "./msRADIUSServiceType.oa.mjs";
import { msRASSavedCallbackNumber } from "./msRASSavedCallbackNumber.oa.mjs";
import { msRASSavedFramedIPAddress } from "./msRASSavedFramedIPAddress.oa.mjs";
import { msRASSavedFramedRoute } from "./msRASSavedFramedRoute.oa.mjs";
import { msSFU30Name } from "./msSFU30Name.oa.mjs";
import { msSFU30NisDomain } from "./msSFU30NisDomain.oa.mjs";
import { msTSAllowLogon } from "./msTSAllowLogon.oa.mjs";
import { msTSBrokenConnectionAction } from "./msTSBrokenConnectionAction.oa.mjs";
import { msTSConnectClientDrives } from "./msTSConnectClientDrives.oa.mjs";
import { msTSConnectPrinterDrives } from "./msTSConnectPrinterDrives.oa.mjs";
import { msTSDefaultToMainPrinter } from "./msTSDefaultToMainPrinter.oa.mjs";
import { msTSExpireDate } from "./msTSExpireDate.oa.mjs";
import { msTSExpireDate2 } from "./msTSExpireDate2.oa.mjs";
import { msTSExpireDate3 } from "./msTSExpireDate3.oa.mjs";
import { msTSExpireDate4 } from "./msTSExpireDate4.oa.mjs";
import { msTSHomeDirectory } from "./msTSHomeDirectory.oa.mjs";
import { msTSHomeDrive } from "./msTSHomeDrive.oa.mjs";
import { msTSInitialProgram } from "./msTSInitialProgram.oa.mjs";
import { msTSLSProperty01 } from "./msTSLSProperty01.oa.mjs";
import { msTSLSProperty02 } from "./msTSLSProperty02.oa.mjs";
import { msTSLicenseVersion } from "./msTSLicenseVersion.oa.mjs";
import { msTSLicenseVersion2 } from "./msTSLicenseVersion2.oa.mjs";
import { msTSLicenseVersion3 } from "./msTSLicenseVersion3.oa.mjs";
import { msTSLicenseVersion4 } from "./msTSLicenseVersion4.oa.mjs";
import { msTSManagingLS } from "./msTSManagingLS.oa.mjs";
import { msTSManagingLS2 } from "./msTSManagingLS2.oa.mjs";
import { msTSManagingLS3 } from "./msTSManagingLS3.oa.mjs";
import { msTSManagingLS4 } from "./msTSManagingLS4.oa.mjs";
import { msTSMaxConnectionTime } from "./msTSMaxConnectionTime.oa.mjs";
import { msTSMaxDisconnectionTime } from "./msTSMaxDisconnectionTime.oa.mjs";
import { msTSMaxIdleTime } from "./msTSMaxIdleTime.oa.mjs";
import { msTSPrimaryDesktop } from "./msTSPrimaryDesktop.oa.mjs";
import { msTSProfilePath } from "./msTSProfilePath.oa.mjs";
import { msTSProperty01 } from "./msTSProperty01.oa.mjs";
import { msTSProperty02 } from "./msTSProperty02.oa.mjs";
import { msTSReconnectionAction } from "./msTSReconnectionAction.oa.mjs";
import { msTSRemoteControl } from "./msTSRemoteControl.oa.mjs";
import { msTSSecondaryDesktops } from "./msTSSecondaryDesktops.oa.mjs";
import { msTSWorkDirectory } from "./msTSWorkDirectory.oa.mjs";
import { mstop } from "./mstop.oa.mjs";
import { networkAddress } from "./networkAddress.oa.mjs";
import { ntPwdHistory } from "./ntPwdHistory.oa.mjs";
import { operatorCount } from "./operatorCount.oa.mjs";
import { otherLoginWorkstations } from "./otherLoginWorkstations.oa.mjs";
import { preferredOU } from "./preferredOU.oa.mjs";
import { primaryGroupID } from "./primaryGroupID.oa.mjs";
import { profilePath } from "./profilePath.oa.mjs";
import { pwdLastSet } from "./pwdLastSet.oa.mjs";
import { scriptPath } from "./scriptPath.oa.mjs";
import { servicePrincipalName } from "./servicePrincipalName.oa.mjs";
import { terminalServer } from "./terminalServer.oa.mjs";
import { unicodePwd } from "./unicodePwd.oa.mjs";
import { userAccountControl } from "./userAccountControl.oa.mjs";
import { userParameters } from "./userParameters.oa.mjs";
import { userPrincipalName } from "./userPrincipalName.oa.mjs";
import { userSharedFolder } from "./userSharedFolder.oa.mjs";
import { userSharedFolderOther } from "./userSharedFolderOther.oa.mjs";
import { userWorkstations } from "./userWorkstations.oa.mjs";

/**
 * @summary user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { mstop
 *                               | organizationalPerson }
 *   MAY CONTAIN               { organizationName
 *                               | businessCategory
 *                               | userCertificate
 *                               | givenName
 *                               | initials
 *                               | uniqueIdentifier
 *                               | displayName
 *                               | networkAddress
 *                               | employeeNumber
 *                               | employeeType
 *                               | homePostalAddress
 *                               | userAccountControl
 *                               | badPwdCount
 *                               | codePage
 *                               | homeDirectory
 *                               | homeDrive
 *                               | badPasswordTime
 *                               | lastLogoff
 *                               | lastLogon
 *                               | dBCSPwd
 *                               | localeID
 *                               | scriptPath
 *                               | logonHours
 *                               | logonWorkstation
 *                               | maxStorage
 *                               | userWorkstations
 *                               | unicodePwd
 *                               | otherLoginWorkstations
 *                               | ntPwdHistory
 *                               | pwdLastSet
 *                               | preferredOU
 *                               | primaryGroupID
 *                               | userParameters
 *                               | profilePath
 *                               | operatorCount
 *                               | adminCount
 *                               | accountExpires
 *                               | lmPwdHistory
 *                               | groupMembershipSAM
 *                               | logonCount
 *                               | controlAccessRights
 *                               | defaultClassStore
 *                               | groupsToIgnore
 *                               | groupPriority
 *                               | desktopProfile
 *                               | dynamicLDAPServer
 *                               | userPrincipalName
 *                               | lockoutTime
 *                               | userSharedFolder
 *                               | userSharedFolderOther
 *                               | servicePrincipalName
 *                               | aCSPolicyName
 *                               | terminalServer
 *                               | mSMQSignCertificates
 *                               | mSMQDigests
 *                               | mSMQDigestsMig
 *                               | mSMQSignCertificatesMig
 *                               | msNPAllowDialin
 *                               | msNPCallingStationID
 *                               | msNPSavedCallingStationID
 *                               | msRADIUSCallbackNumber
 *                               | msRADIUSFramedIPAddress
 *                               | msRADIUSFramedRoute
 *                               | msRADIUSServiceType
 *                               | msRASSavedCallbackNumber
 *                               | msRASSavedFramedIPAddress
 *                               | msRASSavedFramedRoute
 *                               | mS-DS-CreatorSID
 *                               | msCOM-UserPartitionSetLink
 *                               | msDS-Cached-Membership
 *                               | msDS-Cached-Membership-Time-Stamp
 *                               | msDS-Site-Affinity
 *                               | msDS-User-Account-Control-Computed
 *                               | lastLogonTimestamp
 *                               | msIIS-FTPRoot
 *                               | msIIS-FTPDir
 *                               | msDRM-IdentityCertificate
 *                               | msDS-SourceObjectDN
 *                               | msPKIRoamingTimeStamp
 *                               | msPKIDPAPIMasterKeys
 *                               | msPKIAccountCredentials
 *                               | msRADIUS-FramedInterfaceId
 *                               | msRADIUS-SavedFramedInterfaceId
 *                               | msRADIUS-FramedIpv6Prefix
 *                               | msRADIUS-SavedFramedIpv6Prefix
 *                               | msRADIUS-FramedIpv6Route
 *                               | msRADIUS-SavedFramedIpv6Route
 *                               | msDS-SecondaryKrbTgtNumber
 *                               | msDS-AuthenticatedAtDC
 *                               | msDS-SupportedEncryptionTypes
 *                               | msDS-LastSuccessfulInteractiveLogonTime
 *                               | msDS-LastFailedInteractiveLogonTime
 *                               | msDS-FailedInteractiveLogonCount
 *                               | msDS-FailedInteractiveLogonCountAtLastSuccessfulLogon
 *                               | msTSProfilePath
 *                               | msTSHomeDirectory
 *                               | msTSHomeDrive
 *                               | msTSAllowLogon
 *                               | msTSRemoteControl
 *                               | msTSMaxDisconnectionTime
 *                               | msTSMaxConnectionTime
 *                               | msTSMaxIdleTime
 *                               | msTSReconnectionAction
 *                               | msTSBrokenConnectionAction
 *                               | msTSConnectClientDrives
 *                               | msTSConnectPrinterDrives
 *                               | msTSDefaultToMainPrinter
 *                               | msTSWorkDirectory
 *                               | msTSInitialProgram
 *                               | msTSProperty01
 *                               | msTSProperty02
 *                               | msTSExpireDate
 *                               | msTSLicenseVersion
 *                               | msTSManagingLS
 *                               | msDS-UserPasswordExpiryTimeComputed
 *                               | msTSExpireDate2
 *                               | msTSLicenseVersion2
 *                               | msTSManagingLS2
 *                               | msTSExpireDate3
 *                               | msTSLicenseVersion3
 *                               | msTSManagingLS3
 *                               | msTSExpireDate4
 *                               | msTSLicenseVersion4
 *                               | msTSManagingLS4
 *                               | msTSLSProperty01
 *                               | msTSLSProperty02
 *                               | msDS-ResultantPSO
 *                               | msPKI-CredentialRoamingTokens
 *                               | msTSPrimaryDesktop
 *                               | msTSSecondaryDesktops
 *                               | msDS-PrimaryComputer
 *                               | msDS-SyncServerUrl
 *                               | msDS-AssignedAuthNPolicySilo
 *                               | msDS-AuthNPolicySiloMembersBL
 *                               | msDS-AssignedAuthNPolicy
 *                               | userSMIMECertificate
 *                               | uid
 *                               | mail
 *                               | roomNumber
 *                               | photo
 *                               | manager
 *                               | homePhone
 *                               | secretary
 *                               | mobile
 *                               | pager
 *                               | audio
 *                               | jpegPhoto
 *                               | carLicense
 *                               | departmentNumber
 *                               | preferredLanguage
 *                               | userPKCS12
 *                               | labeledURI
 *                               | msSFU30Name
 *                               | msSFU30NisDomain }
 *   LDAP-NAME                 {"user"}
 *   ID                        id-oc-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const user: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [mstop, organizationalPerson] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationName, businessCategory, userCertificate, givenName, initials, uniqueIdentifier, displayName, networkAddress, employeeNumber, employeeType, homePostalAddress, userAccountControl, badPwdCount, codePage, homeDirectory, homeDrive, badPasswordTime, lastLogoff, lastLogon, dBCSPwd, localeID, scriptPath, logonHours, logonWorkstation, maxStorage, userWorkstations, unicodePwd, otherLoginWorkstations, ntPwdHistory, pwdLastSet, preferredOU, primaryGroupID, userParameters, profilePath, operatorCount, adminCount, accountExpires, lmPwdHistory, groupMembershipSAM, logonCount, controlAccessRights, defaultClassStore, groupsToIgnore, groupPriority, desktopProfile, dynamicLDAPServer, userPrincipalName, lockoutTime, userSharedFolder, userSharedFolderOther, servicePrincipalName, aCSPolicyName, terminalServer, mSMQSignCertificates, mSMQDigests, mSMQDigestsMig, mSMQSignCertificatesMig, msNPAllowDialin, msNPCallingStationID, msNPSavedCallingStationID, msRADIUSCallbackNumber, msRADIUSFramedIPAddress, msRADIUSFramedRoute, msRADIUSServiceType, msRASSavedCallbackNumber, msRASSavedFramedIPAddress, msRASSavedFramedRoute, mS_DS_CreatorSID, msCOM_UserPartitionSetLink, msDS_Cached_Membership, msDS_Cached_Membership_Time_Stamp, msDS_Site_Affinity, msDS_User_Account_Control_Computed, lastLogonTimestamp, msIIS_FTPRoot, msIIS_FTPDir, msDRM_IdentityCertificate, msDS_SourceObjectDN, msPKIRoamingTimeStamp, msPKIDPAPIMasterKeys, msPKIAccountCredentials, msRADIUS_FramedInterfaceId, msRADIUS_SavedFramedInterfaceId, msRADIUS_FramedIpv6Prefix, msRADIUS_SavedFramedIpv6Prefix, msRADIUS_FramedIpv6Route, msRADIUS_SavedFramedIpv6Route, msDS_SecondaryKrbTgtNumber, msDS_AuthenticatedAtDC, msDS_SupportedEncryptionTypes, msDS_LastSuccessfulInteractiveLogonTime, msDS_LastFailedInteractiveLogonTime, msDS_FailedInteractiveLogonCount, msDS_FailedInteractiveLogonCountAtLastSuccessfulLogon, msTSProfilePath, msTSHomeDirectory, msTSHomeDrive, msTSAllowLogon, msTSRemoteControl, msTSMaxDisconnectionTime, msTSMaxConnectionTime, msTSMaxIdleTime, msTSReconnectionAction, msTSBrokenConnectionAction, msTSConnectClientDrives, msTSConnectPrinterDrives, msTSDefaultToMainPrinter, msTSWorkDirectory, msTSInitialProgram, msTSProperty01, msTSProperty02, msTSExpireDate, msTSLicenseVersion, msTSManagingLS, msDS_UserPasswordExpiryTimeComputed, msTSExpireDate2, msTSLicenseVersion2, msTSManagingLS2, msTSExpireDate3, msTSLicenseVersion3, msTSManagingLS3, msTSExpireDate4, msTSLicenseVersion4, msTSManagingLS4, msTSLSProperty01, msTSLSProperty02, msDS_ResultantPSO, msPKI_CredentialRoamingTokens, msTSPrimaryDesktop, msTSSecondaryDesktops, msDS_PrimaryComputer, msDS_SyncServerUrl, msDS_AssignedAuthNPolicySilo, msDS_AuthNPolicySiloMembersBL, msDS_AssignedAuthNPolicy, userSMIMECertificate, uid, mail, roomNumber, photo, manager, homePhone, secretary, mobile, pager, audio, jpegPhoto, carLicense, departmentNumber, preferredLanguage, userPKCS12, labeledURI, msSFU30Name, msSFU30NisDomain] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["user"],
    "&id": id_oc_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
