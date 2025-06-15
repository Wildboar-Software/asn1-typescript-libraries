/* eslint-disable */
import { issuerAndSerialNumber } from "../PKCS-15/issuerAndSerialNumber.oa.mjs";
import { issuerAndSerialNumberHash } from "../PKCS-15/issuerAndSerialNumberHash.oa.mjs";
import { issuerKeyHash } from "../PKCS-15/issuerKeyHash.oa.mjs";
import { issuerNameHash } from "../PKCS-15/issuerNameHash.oa.mjs";
import { KEY_IDENTIFIER } from "../PKCS-15/KEY-IDENTIFIER.oca.mjs";
import { subjectKeyHash } from "../PKCS-15/subjectKeyHash.oa.mjs";
import { subjectKeyId } from "../PKCS-15/subjectKeyId.oa.mjs";
import { subjectNameHash } from "../PKCS-15/subjectNameHash.oa.mjs";

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

/* eslint-enable */
