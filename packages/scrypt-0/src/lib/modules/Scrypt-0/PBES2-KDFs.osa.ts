/* eslint-disable */
import type { ALGORITHM } from "@wildboar/pki-stub/src/lib/modules/PKI-Stub/ALGORITHM.oca.js";
import { scrypt } from "../Scrypt-0/scrypt.oa.js";


/* START_OF_SYMBOL_DEFINITION PBES2_KDFs */
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
/* END_OF_SYMBOL_DEFINITION PBES2_KDFs */

/* eslint-enable */
