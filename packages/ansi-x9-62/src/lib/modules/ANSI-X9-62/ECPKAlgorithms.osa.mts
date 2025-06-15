/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ecPublicKeyType } from "../ANSI-X9-62/ecPublicKeyType.oa.mjs";
import { ecPublicKeyTypeRestricted } from "../ANSI-X9-62/ecPublicKeyTypeRestricted.oa.mjs";
/**
 * @summary ECPKAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECPKAlgorithms ALGORITHM ::= {
 * ecPublicKeyType |
 * ecPublicKeyTypeRestricted,
 * ... -- Additional algorithm identifiers may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const ECPKAlgorithms: ALGORITHM[] = [
    ecPublicKeyType,
    ecPublicKeyTypeRestricted,
];

/* eslint-enable */
