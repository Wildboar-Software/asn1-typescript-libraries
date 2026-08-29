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
} from "@wildboar/asn1";
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { ECDSAAlgorithmSet } from "../SEC1-v1-9/ECDSAAlgorithmSet.osa.mjs";
import { ECDHAlgorithmSet } from "../SEC1-v1-9/ECDHAlgorithmSet.osa.mjs";
import { ECMQVAlgorithmSet } from "../SEC1-v1-9/ECMQVAlgorithmSet.osa.mjs";
import { ECIESAlgorithmSet } from "../SEC1-v1-9/ECIESAlgorithmSet.osa.mjs";
import { ECWKTAlgorithmSet } from "../SEC1-v1-9/ECWKTAlgorithmSet.osa.mjs";
/**
 * @summary ECCAlgorithmSet
 * @description
 * 
 * Union of ECDSA, ECDH, ECMQV, ECIES, and ECWKT algorithm identifiers. Used as
 * `ECCAlgorithm`. [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.5.
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

/* eslint-enable */
