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
import { type ALGORITHM } from "../X9-84-CMS/ALGORITHM.oca.mjs";
import { SHA_Algorithms } from "../X9-84-CMS/X9-84-Identifiers.va.mjs";



/**
 * @summary DigestAlgorithms
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestAlgorithms ALGORITHM ::= {
 *    SHA-Algorithms,
 * 
 *    ... -- Expect other digest algorithms  --
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const DigestAlgorithms: (ALGORITHM)[] = [ ...SHA_Algorithms, ];

/* eslint-enable */
