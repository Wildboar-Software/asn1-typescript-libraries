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
    NULL,
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
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { id_oc_user } from "../MSUser/id-oc-user.va.mjs";
// export { id_oc_user } from "../MSUser/id-oc-user.va.mjs";


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
    "&Superclasses": [ ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ..., ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "user" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_user /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
