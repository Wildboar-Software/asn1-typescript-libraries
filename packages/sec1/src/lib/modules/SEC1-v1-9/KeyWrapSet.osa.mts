/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { KeyWrapSet_Union0_Intersection0_Element } from "../SEC1-v1-9/KeyWrapSet-Union0-Intersection0-Element.oa.mjs";
import { KeyWrapSet_Union1_Intersection0_Element } from "../SEC1-v1-9/KeyWrapSet-Union1-Intersection0-Element.oa.mjs";
import { KeyWrapSet_Union2_Intersection0_Element } from "../SEC1-v1-9/KeyWrapSet-Union2-Intersection0-Element.oa.mjs";
/**
 * @summary KeyWrapSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyWrapSet ALGORITHM ::= {
 *     { OID aes128-key-wrap } |
 *     { OID aes192-key-wrap } |
 *     { OID aes256-key-wrap } ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const KeyWrapSet: (ALGORITHM)[] = [ KeyWrapSet_Union0_Intersection0_Element, KeyWrapSet_Union1_Intersection0_Element, KeyWrapSet_Union2_Intersection0_Element, ];

/* eslint-enable */
