/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    type OPTIONAL,
    type BOOLEAN,
    type INTEGER,
    type BIT_STRING,
    type OCTET_STRING,
    type NULL,
    type OBJECT_IDENTIFIER,
    type ObjectDescriptor,
    type EXTERNAL,
    type REAL,
    type INSTANCE_OF,
    type ENUMERATED,
    type EMBEDDED_PDV,
    type UTF8String,
    type RELATIVE_OID,
    type SEQUENCE,
    type SEQUENCE_OF,
    type SET,
    type SET_OF,
    type GraphicString,
    type NumericString,
    type VisibleString,
    type PrintableString,
    type ISO646String,
    type TeletexString,
    type GeneralString,
    type T61String,
    type UniversalString,
    type VideotexString,
    type BMPString,
    type IA5String,
    type CharacterString,
    type UTCTime,
    type GeneralizedTime,
    type TIME,
    type DATE,
    type TIME_OF_DAY,
    type DATE_TIME,
    type DURATION,
    type OID_IRI,
    type RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    type TYPE_IDENTIFIER,
    type ABSTRACT_SYNTAX,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { id_oc_user } from "../MSUser/id-oc-user.va.mjs";

import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { businessCategory } from "../SelectedAttributeTypes/businessCategory.oa.mjs";
import { userCertificate } from "../AuthenticationFramework/userCertificate.oa.mjs";
import { givenName } from "../SelectedAttributeTypes/givenName.oa.mjs";
import { initials } from "../SelectedAttributeTypes/initials.oa.mjs";
import { uniqueIdentifier } from "../SelectedAttributeTypes/uniqueIdentifier.oa.mjs";
import { displayName } from "../InetOrgPerson/displayName.oa.mjs";
import { networkAddress } from "../MSUser/networkAddress.oa.mjs";
import { employeeNumber } from "../InetOrgPerson/employeeNumber.oa.mjs";
import { employeeType } from "../InetOrgPerson/employeeType.oa.mjs";
import { homePostalAddress } from "../LdapSchema2ldifCosine/homePostalAddress.oa.mjs";
import { userAccountControl } from "../MSUser/userAccountControl.oa.mjs";
import { badPwdCount } from "../MSUser/badPwdCount.oa.mjs";
import { codePage } from "../MSUser/codePage.oa.mjs";
import { homeDirectory } from "../NIS/homeDirectory.oa.mjs";
import { homeDrive } from "../MSUser/homeDrive.oa.mjs";
import { badPasswordTime } from "../MSUser/badPasswordTime.oa.mjs";
import { lastLogoff } from "../MSUser/lastLogoff.oa.mjs";
import { lastLogon } from "../MSUser/lastLogon.oa.mjs";
import { dBCSPwd } from "../MSUser/dBCSPwd.oa.mjs";
import { localeID } from "../MSUser/localeID.oa.mjs";
import { scriptPath } from "../MSUser/scriptPath.oa.mjs";
import { logonHours } from "../MSUser/logonHours.oa.mjs";
import { logonWorkstation } from "../MSUser/logonWorkstation.oa.mjs";
import { maxStorage } from "../MSUser/maxStorage.oa.mjs";
import { userWorkstations } from "../MSUser/userWorkstations.oa.mjs";
import { unicodePwd } from "../MSUser/unicodePwd.oa.mjs";
import { otherLoginWorkstations } from "../MSUser/otherLoginWorkstations.oa.mjs";
import { ntPwdHistory } from "../MSUser/ntPwdHistory.oa.mjs";
import { pwdLastSet } from "../MSUser/pwdLastSet.oa.mjs";
import { preferredOU } from "../MSUser/preferredOU.oa.mjs";
import { primaryGroupID } from "../MSUser/primaryGroupID.oa.mjs";
import { userParameters } from "../MSUser/userParameters.oa.mjs";
import { profilePath } from "../MSUser/profilePath.oa.mjs";
import { operatorCount } from "../MSUser/operatorCount.oa.mjs";
import { adminCount } from "../MSUser/adminCount.oa.mjs";
import { accountExpires } from "../MSUser/accountExpires.oa.mjs";
import { lmPwdHistory } from "../MSUser/lmPwdHistory.oa.mjs";
import { groupMembershipSAM } from "../MSUser/groupMembershipSAM.oa.mjs";
import { logonCount } from "../MSUser/logonCount.oa.mjs";
import { controlAccessRights } from "../MSUser/controlAccessRights.oa.mjs";
import { defaultClassStore } from "../MSUser/defaultClassStore.oa.mjs";
import { groupsToIgnore } from "../MSUser/groupsToIgnore.oa.mjs";
import { groupPriority } from "../MSUser/groupPriority.oa.mjs";
import { desktopProfile } from "../MSUser/desktopProfile.oa.mjs";
import { dynamicLDAPServer } from "../MSUser/dynamicLDAPServer.oa.mjs";
import { userPrincipalName } from "../MSUser/userPrincipalName.oa.mjs";
import { lockoutTime } from "../MSUser/lockoutTime.oa.mjs";
import { userSharedFolder } from "../MSUser/userSharedFolder.oa.mjs";
import { userSharedFolderOther } from "../MSUser/userSharedFolderOther.oa.mjs";
import { servicePrincipalName } from "../MSUser/servicePrincipalName.oa.mjs";
import { aCSPolicyName } from "../MSUser/aCSPolicyName.oa.mjs";
import { terminalServer } from "../MSUser/terminalServer.oa.mjs";
import { mSMQSignCertificates } from "../MSUser/mSMQSignCertificates.oa.mjs";
import { mSMQDigests } from "../MSUser/mSMQDigests.oa.mjs";
import { mSMQDigestsMig } from "../MSUser/mSMQDigestsMig.oa.mjs";
import { mSMQSignCertificatesMig } from "../MSUser/mSMQSignCertificatesMig.oa.mjs";
import { msNPAllowDialin } from "../MSUser/msNPAllowDialin.oa.mjs";
import { msNPCallingStationID } from "../MSUser/msNPCallingStationID.oa.mjs";
import { msNPSavedCallingStationID } from "../MSUser/msNPSavedCallingStationID.oa.mjs";
import { msRADIUSCallbackNumber } from "../MSUser/msRADIUSCallbackNumber.oa.mjs";
import { msRADIUSFramedIPAddress } from "../MSUser/msRADIUSFramedIPAddress.oa.mjs";
import { msRADIUSFramedRoute } from "../MSUser/msRADIUSFramedRoute.oa.mjs";
import { msRADIUSServiceType } from "../MSUser/msRADIUSServiceType.oa.mjs";
import { msRASSavedCallbackNumber } from "../MSUser/msRASSavedCallbackNumber.oa.mjs";
import { msRASSavedFramedIPAddress } from "../MSUser/msRASSavedFramedIPAddress.oa.mjs";
import { msRASSavedFramedRoute } from "../MSUser/msRASSavedFramedRoute.oa.mjs";
import { mS_DS_CreatorSID } from "../MSUser/mS-DS-CreatorSID.oa.mjs";
import { msCOM_UserPartitionSetLink } from "../MSUser/msCOM-UserPartitionSetLink.oa.mjs";
import { msDS_Cached_Membership } from "../MSUser/msDS-Cached-Membership.oa.mjs";
import { msDS_Cached_Membership_Time_Stamp } from "../MSUser/msDS-Cached-Membership-Time-Stamp.oa.mjs";
import { msDS_Site_Affinity } from "../MSUser/msDS-Site-Affinity.oa.mjs";
import { msDS_User_Account_Control_Computed } from "../MSUser/msDS-User-Account-Control-Computed.oa.mjs";
import { lastLogonTimestamp } from "../MSUser/lastLogonTimestamp.oa.mjs";
import { msIIS_FTPRoot } from "../MSUser/msIIS-FTPRoot.oa.mjs";
import { msIIS_FTPDir } from "../MSUser/msIIS-FTPDir.oa.mjs";
import { msDRM_IdentityCertificate } from "../MSUser/msDRM-IdentityCertificate.oa.mjs";
import { msDS_SourceObjectDN } from "../MSUser/msDS-SourceObjectDN.oa.mjs";
import { msPKIRoamingTimeStamp } from "../MSUser/msPKIRoamingTimeStamp.oa.mjs";
import { msPKIDPAPIMasterKeys } from "../MSUser/msPKIDPAPIMasterKeys.oa.mjs";
import { msPKIAccountCredentials } from "../MSUser/msPKIAccountCredentials.oa.mjs";
import { msRADIUS_FramedInterfaceId } from "../MSUser/msRADIUS-FramedInterfaceId.oa.mjs";
import { msRADIUS_SavedFramedInterfaceId } from "../MSUser/msRADIUS-SavedFramedInterfaceId.oa.mjs";
import { msRADIUS_FramedIpv6Prefix } from "../MSUser/msRADIUS-FramedIpv6Prefix.oa.mjs";
import { msRADIUS_SavedFramedIpv6Prefix } from "../MSUser/msRADIUS-SavedFramedIpv6Prefix.oa.mjs";
import { msRADIUS_FramedIpv6Route } from "../MSUser/msRADIUS-FramedIpv6Route.oa.mjs";
import { msRADIUS_SavedFramedIpv6Route } from "../MSUser/msRADIUS-SavedFramedIpv6Route.oa.mjs";
import { msDS_SecondaryKrbTgtNumber } from "../MSUser/msDS-SecondaryKrbTgtNumber.oa.mjs";
import { msDS_AuthenticatedAtDC } from "../MSUser/msDS-AuthenticatedAtDC.oa.mjs";
import { msDS_SupportedEncryptionTypes } from "../MSUser/msDS-SupportedEncryptionTypes.oa.mjs";
import { msDS_LastSuccessfulInteractiveLogonTime } from "../MSUser/msDS-LastSuccessfulInteractiveLogonTime.oa.mjs";
import { msDS_LastFailedInteractiveLogonTime } from "../MSUser/msDS-LastFailedInteractiveLogonTime.oa.mjs";
import { msDS_FailedInteractiveLogonCount } from "../MSUser/msDS-FailedInteractiveLogonCount.oa.mjs";
import { msDS_FailedInteractiveLogonCountAtLastSuccessfulLogon } from "../MSUser/msDS-FailedInteractiveLogonCountAtLastSuccessfulLogon.oa.mjs";
import { msTSProfilePath } from "../MSUser/msTSProfilePath.oa.mjs";
import { msTSHomeDirectory } from "../MSUser/msTSHomeDirectory.oa.mjs";
import { msTSHomeDrive } from "../MSUser/msTSHomeDrive.oa.mjs";
import { msTSAllowLogon } from "../MSUser/msTSAllowLogon.oa.mjs";
import { msTSRemoteControl } from "../MSUser/msTSRemoteControl.oa.mjs";
import { msTSMaxDisconnectionTime } from "../MSUser/msTSMaxDisconnectionTime.oa.mjs";
import { msTSMaxConnectionTime } from "../MSUser/msTSMaxConnectionTime.oa.mjs";
import { msTSMaxIdleTime } from "../MSUser/msTSMaxIdleTime.oa.mjs";
import { msTSReconnectionAction } from "../MSUser/msTSReconnectionAction.oa.mjs";
import { msTSBrokenConnectionAction } from "../MSUser/msTSBrokenConnectionAction.oa.mjs";
import { msTSConnectClientDrives } from "../MSUser/msTSConnectClientDrives.oa.mjs";
import { msTSConnectPrinterDrives } from "../MSUser/msTSConnectPrinterDrives.oa.mjs";
import { msTSDefaultToMainPrinter } from "../MSUser/msTSDefaultToMainPrinter.oa.mjs";
import { msTSWorkDirectory } from "../MSUser/msTSWorkDirectory.oa.mjs";
import { msTSInitialProgram } from "../MSUser/msTSInitialProgram.oa.mjs";
import { msTSProperty01 } from "../MSUser/msTSProperty01.oa.mjs";
import { msTSProperty02 } from "../MSUser/msTSProperty02.oa.mjs";
import { msTSExpireDate } from "../MSUser/msTSExpireDate.oa.mjs";
import { msTSLicenseVersion } from "../MSUser/msTSLicenseVersion.oa.mjs";
import { msTSManagingLS } from "../MSUser/msTSManagingLS.oa.mjs";
import { msDS_UserPasswordExpiryTimeComputed } from "../MSUser/msDS-UserPasswordExpiryTimeComputed.oa.mjs";
import { msTSExpireDate2 } from "../MSUser/msTSExpireDate2.oa.mjs";
import { msTSLicenseVersion2 } from "../MSUser/msTSLicenseVersion2.oa.mjs";
import { msTSManagingLS2 } from "../MSUser/msTSManagingLS2.oa.mjs";
import { msTSExpireDate3 } from "../MSUser/msTSExpireDate3.oa.mjs";
import { msTSLicenseVersion3 } from "../MSUser/msTSLicenseVersion3.oa.mjs";
import { msTSManagingLS3 } from "../MSUser/msTSManagingLS3.oa.mjs";
import { msTSExpireDate4 } from "../MSUser/msTSExpireDate4.oa.mjs";
import { msTSLicenseVersion4 } from "../MSUser/msTSLicenseVersion4.oa.mjs";
import { msTSManagingLS4 } from "../MSUser/msTSManagingLS4.oa.mjs";
import { msTSLSProperty01 } from "../MSUser/msTSLSProperty01.oa.mjs";
import { msTSLSProperty02 } from "../MSUser/msTSLSProperty02.oa.mjs";
import { msDS_ResultantPSO } from "../MSUser/msDS-ResultantPSO.oa.mjs";
import { msPKI_CredentialRoamingTokens } from "../MSUser/msPKI-CredentialRoamingTokens.oa.mjs";
import { msTSPrimaryDesktop } from "../MSUser/msTSPrimaryDesktop.oa.mjs";
import { msTSSecondaryDesktops } from "../MSUser/msTSSecondaryDesktops.oa.mjs";
import { msDS_PrimaryComputer } from "../MSUser/msDS-PrimaryComputer.oa.mjs";
import { msDS_SyncServerUrl } from "../MSUser/msDS-SyncServerUrl.oa.mjs";
import { msDS_AssignedAuthNPolicySilo } from "../MSUser/msDS-AssignedAuthNPolicySilo.oa.mjs";
import { msDS_AuthNPolicySiloMembersBL } from "../MSUser/msDS-AuthNPolicySiloMembersBL.oa.mjs";
import { msDS_AssignedAuthNPolicy } from "../MSUser/msDS-AssignedAuthNPolicy.oa.mjs";
import { userSMIMECertificate } from "../H323-X500-Schema/userSMIMECertificate.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { roomNumber } from "../LdapSchema2ldifCosine/roomNumber.oa.mjs";
import { photo } from "../LdapSchema2ldifCosine/photo.oa.mjs";
import { manager } from "../LdapSchema2ldifCosine/manager.oa.mjs";
import { homePhone } from "../LdapSchema2ldifCosine/homePhone.oa.mjs";
import { secretary } from "../LdapSchema2ldifCosine/secretary.oa.mjs";
import { mobile } from "../LdapSchema2ldifCosine/mobile.oa.mjs";
import { pager } from "../LdapSchema2ldifCosine/pager.oa.mjs";
import { audio } from "../LdapSchema2ldifCosine/audio.oa.mjs";
import { jpegPhoto } from "../LdapSchema2ldifInetorgperson/jpegPhoto.oa.mjs";
import { carLicense } from "../InetOrgPerson/carLicense.oa.mjs";
import { departmentNumber } from "../InetOrgPerson/departmentNumber.oa.mjs";
import { preferredLanguage } from "../InetOrgPerson/preferredLanguage.oa.mjs";
import { userPKCS12 } from "../PKCS-9/userPKCS12.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { msSFU30Name } from "../MSUser/msSFU30Name.oa.mjs";
import { msSFU30NisDomain } from "../MSUser/msSFU30NisDomain.oa.mjs";
import { mstop } from "../MSUser/mstop.oa.mjs";
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ mstop, organizationalPerson, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationName, businessCategory, userCertificate, givenName, initials, uniqueIdentifier, displayName, networkAddress, employeeNumber, employeeType, homePostalAddress, userAccountControl, badPwdCount, codePage, homeDirectory, homeDrive, badPasswordTime, lastLogoff, lastLogon, dBCSPwd, localeID, scriptPath, logonHours, logonWorkstation, maxStorage, userWorkstations, unicodePwd, otherLoginWorkstations, ntPwdHistory, pwdLastSet, preferredOU, primaryGroupID, userParameters, profilePath, operatorCount, adminCount, accountExpires, lmPwdHistory, groupMembershipSAM, logonCount, controlAccessRights, defaultClassStore, groupsToIgnore, groupPriority, desktopProfile, dynamicLDAPServer, userPrincipalName, lockoutTime, userSharedFolder, userSharedFolderOther, servicePrincipalName, aCSPolicyName, terminalServer, mSMQSignCertificates, mSMQDigests, mSMQDigestsMig, mSMQSignCertificatesMig, msNPAllowDialin, msNPCallingStationID, msNPSavedCallingStationID, msRADIUSCallbackNumber, msRADIUSFramedIPAddress, msRADIUSFramedRoute, msRADIUSServiceType, msRASSavedCallbackNumber, msRASSavedFramedIPAddress, msRASSavedFramedRoute, mS_DS_CreatorSID, msCOM_UserPartitionSetLink, msDS_Cached_Membership, msDS_Cached_Membership_Time_Stamp, msDS_Site_Affinity, msDS_User_Account_Control_Computed, lastLogonTimestamp, msIIS_FTPRoot, msIIS_FTPDir, msDRM_IdentityCertificate, msDS_SourceObjectDN, msPKIRoamingTimeStamp, msPKIDPAPIMasterKeys, msPKIAccountCredentials, msRADIUS_FramedInterfaceId, msRADIUS_SavedFramedInterfaceId, msRADIUS_FramedIpv6Prefix, msRADIUS_SavedFramedIpv6Prefix, msRADIUS_FramedIpv6Route, msRADIUS_SavedFramedIpv6Route, msDS_SecondaryKrbTgtNumber, msDS_AuthenticatedAtDC, msDS_SupportedEncryptionTypes, msDS_LastSuccessfulInteractiveLogonTime, msDS_LastFailedInteractiveLogonTime, msDS_FailedInteractiveLogonCount, msDS_FailedInteractiveLogonCountAtLastSuccessfulLogon, msTSProfilePath, msTSHomeDirectory, msTSHomeDrive, msTSAllowLogon, msTSRemoteControl, msTSMaxDisconnectionTime, msTSMaxConnectionTime, msTSMaxIdleTime, msTSReconnectionAction, msTSBrokenConnectionAction, msTSConnectClientDrives, msTSConnectPrinterDrives, msTSDefaultToMainPrinter, msTSWorkDirectory, msTSInitialProgram, msTSProperty01, msTSProperty02, msTSExpireDate, msTSLicenseVersion, msTSManagingLS, msDS_UserPasswordExpiryTimeComputed, msTSExpireDate2, msTSLicenseVersion2, msTSManagingLS2, msTSExpireDate3, msTSLicenseVersion3, msTSManagingLS3, msTSExpireDate4, msTSLicenseVersion4, msTSManagingLS4, msTSLSProperty01, msTSLSProperty02, msDS_ResultantPSO, msPKI_CredentialRoamingTokens, msTSPrimaryDesktop, msTSSecondaryDesktops, msDS_PrimaryComputer, msDS_SyncServerUrl, msDS_AssignedAuthNPolicySilo, msDS_AuthNPolicySiloMembersBL, msDS_AssignedAuthNPolicy, userSMIMECertificate, uid, mail, roomNumber, photo, manager, homePhone, secretary, mobile, pager, audio, jpegPhoto, carLicense, departmentNumber, preferredLanguage, userPKCS12, labeledURI, msSFU30Name, msSFU30NisDomain, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "user" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_user /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
