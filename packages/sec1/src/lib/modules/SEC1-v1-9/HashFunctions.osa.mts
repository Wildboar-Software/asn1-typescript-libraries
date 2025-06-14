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
import { HashFunctions_Union0_Intersection0_Element } from "../SEC1-v1-9/HashFunctions-Union0-Intersection0-Element.oa.mjs";
import { HashFunctions_Union1_Intersection0_Element } from "../SEC1-v1-9/HashFunctions-Union1-Intersection0-Element.oa.mjs";
import { HashFunctions_Union2_Intersection0_Element } from "../SEC1-v1-9/HashFunctions-Union2-Intersection0-Element.oa.mjs";
import { HashFunctions_Union3_Intersection0_Element } from "../SEC1-v1-9/HashFunctions-Union3-Intersection0-Element.oa.mjs";
import { HashFunctions_Union4_Intersection0_Element } from "../SEC1-v1-9/HashFunctions-Union4-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION HashFunctions */
/**
 * @summary HashFunctions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * HashFunctions ALGORITHM ::= {
 *     {OID sha-1 PARMS NULL } |
 *     {OID id-sha224 PARMS NULL } |
 *     {OID id-sha256 PARMS NULL } |
 *     {OID id-sha384 PARMS NULL } |
 *     {OID id-sha512 PARMS NULL } ,
 *     ... -- Additional hash functions may be added in the future
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const HashFunctions: (ALGORITHM)[] = [ HashFunctions_Union0_Intersection0_Element, HashFunctions_Union1_Intersection0_Element, HashFunctions_Union2_Intersection0_Element, HashFunctions_Union3_Intersection0_Element, HashFunctions_Union4_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION HashFunctions */

/* eslint-enable */
