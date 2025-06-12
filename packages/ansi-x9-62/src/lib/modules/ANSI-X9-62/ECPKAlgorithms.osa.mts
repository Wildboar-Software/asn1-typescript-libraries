/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
import { ecPublicKeyType } from "../ANSI-X9-62/ecPublicKeyType.oa.mjs";
import { ecPublicKeyTypeRestricted } from "../ANSI-X9-62/ecPublicKeyTypeRestricted.oa.mjs";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca.mjs";
export { ecPublicKeyType } from "../ANSI-X9-62/ecPublicKeyType.oa.mjs";
export { ecPublicKeyTypeRestricted } from "../ANSI-X9-62/ecPublicKeyTypeRestricted.oa.mjs";

/* START_OF_SYMBOL_DEFINITION ECPKAlgorithms */
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
/* END_OF_SYMBOL_DEFINITION ECPKAlgorithms */

/* eslint-enable */
