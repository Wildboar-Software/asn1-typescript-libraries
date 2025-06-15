/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import { ContentEncryptionAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/ContentEncryptionAlgs.osa.mjs";

/**
 * @summary ContentEncryptionAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgorithmSet CONTENT-ENCRYPTION ::= { ContentEncryptionAlgs, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION[]}
 *
 */
export const ContentEncryptionAlgorithmSet: CONTENT_ENCRYPTION[] = [
    ...ContentEncryptionAlgs,
];

/* eslint-enable */
