/* eslint-disable */
import type { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.mjs";
import { scrypt } from "../Scrypt-0/scrypt.oa.mjs";



/**
 * @summary PBES2_KDFs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2-KDFs ALGORITHM ::= { scrypt, ... }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const PBES2_KDFs: (ALGORITHM)[] = [ scrypt, ];

/* eslint-enable */
