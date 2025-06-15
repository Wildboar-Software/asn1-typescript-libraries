/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/src/lib/modules/AuthenticationFramework/ALGORITHM.oca.mjs";
import { keyAgreeHashConstruction } from "../CMSCKMKeyManagement/keyAgreeHashConstruction.oa.mjs";
import { keyAgreeMultipleEncryptionConstruction } from "../CMSCKMKeyManagement/keyAgreeMultipleEncryptionConstruction.oa.mjs";
import { keyTransportConstruction } from "../CMSCKMKeyManagement/keyTransportConstruction.oa.mjs";
import { symmetricConstruction } from "../CMSCKMKeyManagement/symmetricConstruction.oa.mjs";

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

/* eslint-enable */
