/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2ApplicationEnvironment } from "../LdapGlue607ApplicationEnvironment/id-oc-gLUE2ApplicationEnvironment.va.mjs";


/**
 * @summary gLUE2ApplicationEnvironment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ApplicationEnvironment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ApplicationEnvironmentID
 *                               | gLUE2ApplicationEnvironmentAppName
 *                               | gLUE2ApplicationEnvironmentComputingManagerForeignKey }
 *   MAY CONTAIN               { gLUE2ApplicationEnvironmentAppVersion
 *                               | gLUE2ApplicationEnvironmentRepository
 *                               | gLUE2ApplicationEnvironmentState
 *                               | gLUE2ApplicationEnvironmentRemovalDate
 *                               | gLUE2ApplicationEnvironmentLicense
 *                               | gLUE2ApplicationEnvironmentDescription
 *                               | gLUE2ApplicationEnvironmentBestBenchmark
 *                               | gLUE2ApplicationEnvironmentParallelSupport
 *                               | gLUE2ApplicationEnvironmentMaxSlots
 *                               | gLUE2ApplicationEnvironmentMaxJobs
 *                               | gLUE2ApplicationEnvironmentMaxUserSeats
 *                               | gLUE2ApplicationEnvironmentFreeSlots
 *                               | gLUE2ApplicationEnvironmentFreeJobs
 *                               | gLUE2ApplicationEnvironmentFreeUserSeats
 *                               | gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey }
 *   LDAP-NAME                 {"GLUE2ApplicationEnvironment"}
 *   LDAP-DESC                 "Description of the application software or environment characteristic available within one or more execution environments"
 *   ID                        id-oc-gLUE2ApplicationEnvironment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ApplicationEnvironment: OBJECT_CLASS = undefined;

/* eslint-enable */
