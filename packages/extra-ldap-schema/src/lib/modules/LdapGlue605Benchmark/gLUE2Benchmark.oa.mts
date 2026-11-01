/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Benchmark } from "../LdapGlue605Benchmark/id-oc-gLUE2Benchmark.va.mjs";
import { gLUE2BenchmarkID } from "../LdapGlue605Benchmark/gLUE2BenchmarkID.oa.mjs";
import { gLUE2BenchmarkType } from "../LdapGlue605Benchmark/gLUE2BenchmarkType.oa.mjs";
import { gLUE2BenchmarkValue } from "../LdapGlue605Benchmark/gLUE2BenchmarkValue.oa.mjs";
import { gLUE2BenchmarkExecutionEnvironmentForeignKey } from "../LdapGlue605Benchmark/gLUE2BenchmarkExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2BenchmarkComputingManagerForeignKey } from "../LdapGlue605Benchmark/gLUE2BenchmarkComputingManagerForeignKey.oa.mjs";


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
const gLUE2Benchmark: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ gLUE2Entity, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2BenchmarkID, gLUE2BenchmarkType, gLUE2BenchmarkValue, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gLUE2BenchmarkExecutionEnvironmentForeignKey, gLUE2BenchmarkComputingManagerForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Benchmark" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Benchmark information about an entity providing computing capacity" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Benchmark /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

