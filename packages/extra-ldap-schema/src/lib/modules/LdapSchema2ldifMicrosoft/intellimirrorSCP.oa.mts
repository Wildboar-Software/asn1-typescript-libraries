/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { serviceAdministrationPoint } from "../LdapSchema2ldifMicrosoft/serviceAdministrationPoint.oa.mjs";
// export { id_oc_intellimirrorSCP } from "../LdapSchema2ldifMicrosoft/id-oc-intellimirrorSCP.va.mjs";


/**
 * @summary intellimirrorSCP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * intellimirrorSCP OBJECT-CLASS ::= {
 *   SUBCLASS OF               { serviceAdministrationPoint }
 *   MAY CONTAIN               { netbootMachineFilePath
 *                               | netbootAllowNewClients
 *                               | netbootLimitClients
 *                               | netbootMaxClients
 *                               | netbootCurrentClientCount
 *                               | netbootAnswerRequests
 *                               | netbootAnswerOnlyValidClients
 *                               | netbootNewMachineNamingPolicy
 *                               | netbootNewMachineOU
 *                               | netbootIntelliMirrorOSes
 *                               | netbootTools
 *                               | netbootLocallyInstalledOSes
 *                               | netbootServer }
 *   LDAP-NAME                 {"intellimirrorSCP"}
 *   ID                        id-oc-intellimirrorSCP }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const intellimirrorSCP: OBJECT_CLASS = undefined;

/* eslint-enable */
