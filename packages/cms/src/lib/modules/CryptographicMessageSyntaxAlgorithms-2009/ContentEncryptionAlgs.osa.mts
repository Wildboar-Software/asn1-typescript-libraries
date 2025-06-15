/* eslint-disable */
import { CONTENT_ENCRYPTION } from "../AlgorithmInformation-2009/CONTENT-ENCRYPTION.oca.mjs";
import { cea_3DES_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-3DES-cbc.oa.mjs";
import { cea_RC2_cbc } from "../CryptographicMessageSyntaxAlgorithms-2009/cea-RC2-cbc.oa.mjs";

/**
 * @summary ContentEncryptionAlgs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentEncryptionAlgs CONTENT-ENCRYPTION ::= { cea-3DES-cbc | cea-RC2-cbc, ... }
 * ```
 *
 * @constant
 * @type {CONTENT_ENCRYPTION[]}
 *
 */
export const ContentEncryptionAlgs: CONTENT_ENCRYPTION[] = [
    cea_3DES_cbc,
    cea_RC2_cbc,
];

/* eslint-enable */
