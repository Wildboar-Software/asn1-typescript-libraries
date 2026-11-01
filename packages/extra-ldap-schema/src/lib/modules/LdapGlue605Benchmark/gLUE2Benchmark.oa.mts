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
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2Benchmark } from "../LdapGlue605Benchmark/id-oc-gLUE2Benchmark.va.mjs";
import { gLUE2BenchmarkID } from "../LdapGlue605Benchmark/gLUE2BenchmarkID.oa.mjs";
import { gLUE2BenchmarkType } from "../LdapGlue605Benchmark/gLUE2BenchmarkType.oa.mjs";
import { gLUE2BenchmarkValue } from "../LdapGlue605Benchmark/gLUE2BenchmarkValue.oa.mjs";
import { gLUE2BenchmarkExecutionEnvironmentForeignKey } from "../LdapGlue605Benchmark/gLUE2BenchmarkExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2BenchmarkComputingManagerForeignKey } from "../LdapGlue605Benchmark/gLUE2BenchmarkComputingManagerForeignKey.oa.mjs";
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
