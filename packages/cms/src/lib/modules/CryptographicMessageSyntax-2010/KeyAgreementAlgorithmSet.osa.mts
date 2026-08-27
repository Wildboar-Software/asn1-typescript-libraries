/* eslint-disable */
import { type KEY_AGREE } from "../AlgorithmInformation-2009/KEY-AGREE.oca.mjs";
import { KeyAgreementAlgs } from "../CryptographicMessageSyntaxAlgorithms-2009/KeyAgreementAlgs.osa.mjs";

/**
 * @summary KeyAgreementAlgorithmSet
 * @description
 *
 * Object set of key-agreement algorithms for `KeyAgreeRecipientInfo`
 * ([RFC 6268](https://datatracker.ietf.org/doc/html/rfc6268)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreementAlgorithmSet KEY-AGREE ::= { KeyAgreementAlgs, ... }
 * ```
 *
 * @constant
 * @type {KEY_AGREE[]}
 *
 */
export const KeyAgreementAlgorithmSet: KEY_AGREE[] = [...KeyAgreementAlgs];

/* eslint-enable */
