/* eslint-disable */
import { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
import { ecPublicKeyType } from "../ANSI-X9-62/ecPublicKeyType.oa";
import { ecPublicKeyTypeRestricted } from "../ANSI-X9-62/ecPublicKeyTypeRestricted.oa";
export { ALGORITHM } from "../ANSI-X9-62/ALGORITHM.oca";
export { ecPublicKeyType } from "../ANSI-X9-62/ecPublicKeyType.oa";
export { ecPublicKeyTypeRestricted } from "../ANSI-X9-62/ecPublicKeyTypeRestricted.oa";

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
