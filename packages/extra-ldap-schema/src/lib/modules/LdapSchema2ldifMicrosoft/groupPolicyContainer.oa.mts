/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { container } from "../LdapSchema2ldifMicrosoft/container.oa.mjs";
// export { id_oc_groupPolicyContainer } from "../LdapSchema2ldifMicrosoft/id-oc-groupPolicyContainer.va.mjs";


/**
 * @summary groupPolicyContainer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * groupPolicyContainer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { container }
 *   MAY CONTAIN               { flags
 *                               | versionNumber
 *                               | gPCFunctionalityVersion
 *                               | gPCFileSysPath
 *                               | gPCMachineExtensionNames
 *                               | gPCUserExtensionNames }
 *   LDAP-NAME                 {"groupPolicyContainer"}
 *   ID                        id-oc-groupPolicyContainer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const groupPolicyContainer: OBJECT_CLASS = undefined;

/* eslint-enable */
