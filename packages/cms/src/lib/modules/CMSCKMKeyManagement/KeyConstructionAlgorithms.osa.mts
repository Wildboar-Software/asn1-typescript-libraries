/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs";
import { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa.mjs";
import { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa.mjs";
import { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa.mjs";
import { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa.mjs";
export { ALGORITHM } from "../AlgorithmInformation-2009/ALGORITHM.oca.mjs";
export { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa.mjs";
export { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa.mjs";
export { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa.mjs";
export { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa.mjs";

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
