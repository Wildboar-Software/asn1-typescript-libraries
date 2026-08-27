/* eslint-disable */
import { type CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import { ContentEncryptionAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/ContentEncryptionAlgs.osa.mjs";

/**
 * @summary ContentEncryptionAlgorithmSet
 * @description
 *
 * Object set of content-encryption algorithms for CMS
 * ([RFC 6268](https://datatracker.ietf.org/doc/html/rfc6268)).
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
