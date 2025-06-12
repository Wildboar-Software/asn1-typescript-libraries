/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.js";
import { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa.js";
import { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa.js";
import { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa.js";
import { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa.js";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca.js";
export { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa.js";
export { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa.js";
export { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa.js";
export { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa.js";

/* START_OF_SYMBOL_DEFINITION KeyConstructionAlgorithms */
/**
 * @summary KeyConstructionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyConstructionAlgorithms ALGORITHM ::= {
 * symmetricConstruction             |
 * keyTransportConstruction             |
 * keyAgreeMultipleEncryptionConstruction |
 * keyAgreeHashConstruction,
 * ... -- Expect additional objects --
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const KeyConstructionAlgorithms: ALGORITHM[] = [
    symmetricConstruction,
    keyTransportConstruction,
    keyAgreeMultipleEncryptionConstruction,
    keyAgreeHashConstruction,
];
/* END_OF_SYMBOL_DEFINITION KeyConstructionAlgorithms */

/* eslint-enable */
