/* eslint-disable */
import { ALGORITHM } from "@wildboar/x500/AuthenticationFramework";
import { alg_hMAC_SHA1 } from "../CryptographicMessageSyntaxAlgorithms-2009/alg-hMAC-SHA1.oa.mjs";

/**
 * @summary PBKDF2_PRFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBKDF2-PRFs ALGORITHM ::= { alg-hMAC-SHA1, ... }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export const PBKDF2_PRFs: ALGORITHM[] = [alg_hMAC_SHA1];

/* eslint-enable */
