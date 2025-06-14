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
import { ECDSAAlgorithmSet } from "../SEC1-v1-9/ECDSAAlgorithmSet.osa.mjs";
import { ECDHAlgorithmSet } from "../SEC1-v1-9/ECDHAlgorithmSet.osa.mjs";
import { ECMQVAlgorithmSet } from "../SEC1-v1-9/ECMQVAlgorithmSet.osa.mjs";
import { ECIESAlgorithmSet } from "../SEC1-v1-9/ECIESAlgorithmSet.osa.mjs";
import { ECWKTAlgorithmSet } from "../SEC1-v1-9/ECWKTAlgorithmSet.osa.mjs";
/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet */
/**
 * @summary ECCAlgorithmSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECCAlgorithmSet ALGORITHM ::= {
 *     ECDSAAlgorithmSet |
 *     ECDHAlgorithmSet |
 *     ECMQVAlgorithmSet |
 *     ECIESAlgorithmSet |
 *     ECWKTAlgorithmSet ,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const ECCAlgorithmSet: (ALGORITHM)[] = [ ...ECDSAAlgorithmSet, ...ECDHAlgorithmSet, ...ECMQVAlgorithmSet, ...ECIESAlgorithmSet, ...ECWKTAlgorithmSet, ];
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet */

/* eslint-enable */
