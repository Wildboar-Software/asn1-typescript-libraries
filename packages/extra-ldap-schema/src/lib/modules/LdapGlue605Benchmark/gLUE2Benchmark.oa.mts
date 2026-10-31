/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2Benchmark } from "../LdapGlue605Benchmark/id-oc-gLUE2Benchmark.va.mjs";


/**
 * @summary gLUE2Benchmark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Benchmark OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2BenchmarkID
 *                               | gLUE2BenchmarkType
 *                               | gLUE2BenchmarkValue }
 *   MAY CONTAIN               { gLUE2BenchmarkExecutionEnvironmentForeignKey
 *                               | gLUE2BenchmarkComputingManagerForeignKey }
 *   LDAP-NAME                 {"GLUE2Benchmark"}
 *   LDAP-DESC                 "Benchmark information about an entity providing computing capacity"
 *   ID                        id-oc-gLUE2Benchmark }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Benchmark: OBJECT_CLASS = undefined;

/* eslint-enable */
