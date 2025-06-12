/* eslint-disable */
import { issuerAndSerialNumber } from "../PKCS-15/issuerAndSerialNumber.oa.js";
import { issuerAndSerialNumberHash } from "../PKCS-15/issuerAndSerialNumberHash.oa.js";
import { issuerKeyHash } from "../PKCS-15/issuerKeyHash.oa.js";
import { issuerNameHash } from "../PKCS-15/issuerNameHash.oa.js";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca.js";
import { subjectKeyHash } from "../PKCS-15/subjectKeyHash.oa.js";
import { subjectKeyId } from "../PKCS-15/subjectKeyId.oa.js";
import { subjectNameHash } from "../PKCS-15/subjectNameHash.oa.js";
export { issuerAndSerialNumber } from "../PKCS-15/issuerAndSerialNumber.oa.js";
export { issuerAndSerialNumberHash } from "../PKCS-15/issuerAndSerialNumberHash.oa.js";
export { issuerKeyHash } from "../PKCS-15/issuerKeyHash.oa.js";
export { issuerNameHash } from "../PKCS-15/issuerNameHash.oa.js";
export { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca.js";
export { subjectKeyHash } from "../PKCS-15/subjectKeyHash.oa.js";
export { subjectKeyId } from "../PKCS-15/subjectKeyId.oa.js";
export { subjectNameHash } from "../PKCS-15/subjectNameHash.oa.js";

/* START_OF_SYMBOL_DEFINITION KeyIdentifiers */
/**
 * @summary KeyIdentifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyIdentifiers KEY-IDENTIFIER ::= {
 *     issuerAndSerialNumber
 *     | issuerAndSerialNumberHash
 *     | subjectKeyId
 *     | subjectKeyHash
 *     | issuerKeyHash
 *     | issuerNameHash
 *     | subjectNameHash, ...
 * }
 * ```
 *
 * @constant
 * @type {KEY_IDENTIFIER[]}
 *
 */
export const KeyIdentifiers: KEY_IDENTIFIER[] = [
    issuerAndSerialNumber,
    issuerAndSerialNumberHash,
    subjectKeyId,
    subjectKeyHash,
    issuerKeyHash,
    issuerNameHash,
    subjectNameHash,
];
/* END_OF_SYMBOL_DEFINITION KeyIdentifiers */

/* eslint-enable */
