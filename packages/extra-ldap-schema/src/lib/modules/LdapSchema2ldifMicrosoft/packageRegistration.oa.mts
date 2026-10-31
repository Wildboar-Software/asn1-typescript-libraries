/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_packageRegistration } from "../LdapSchema2ldifMicrosoft/id-oc-packageRegistration.va.mjs";


/**
 * @summary packageRegistration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * packageRegistration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { msiScriptPath
 *                               | cOMClassID
 *                               | cOMInterfaceID
 *                               | cOMProgID
 *                               | localeID
 *                               | machineArchitecture
 *                               | iconPath
 *                               | cOMTypelibId
 *                               | vendor
 *                               | packageType
 *                               | setupCommand
 *                               | packageName
 *                               | packageFlags
 *                               | versionNumberHi
 *                               | versionNumberLo
 *                               | lastUpdateSequence
 *                               | managedBy
 *                               | msiFileList
 *                               | categories
 *                               | upgradeProductCode
 *                               | msiScript
 *                               | canUpgradeScript
 *                               | fileExtPriority
 *                               | productCode
 *                               | msiScriptName
 *                               | msiScriptSize
 *                               | installUiLevel }
 *   LDAP-NAME                 {"packageRegistration"}
 *   ID                        id-oc-packageRegistration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const packageRegistration: OBJECT_CLASS = undefined;

/* eslint-enable */
