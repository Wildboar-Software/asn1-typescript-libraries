/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
// export { id_oc_user } from "../LdapSchema2ldifMicrosoft/id-oc-user.va.mjs";


/**
 * @summary user
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * user OBJECT-CLASS ::= {
 *   SUBCLASS OF               { organizationalPerson }
 *   MAY CONTAIN               { userCertificate
 *                               | networkAddress
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
 *                               | mS-DS-CreatorSID }
 *   LDAP-NAME                 {"user"}
 *   ID                        id-oc-user }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const user: OBJECT_CLASS = undefined;

/* eslint-enable */
