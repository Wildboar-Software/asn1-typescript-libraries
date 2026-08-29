/* eslint-disable */
import { type ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";

/**
 * @summary KEY_AGREEMENT
 * @description
 *
 * `ALGORITHM-ID` specialized to key-agreement scheme objects. Eight
 * parameterized schemes carry `SchemeParameters`; named schemes have
 * well-known SHA-1 parameters and omit PARMS. ANS X9.42-2003 §A.4.9.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KEY-AGREEMENT ::= ALGORITHM-ID
 * ```
 *
 * @interface
 */
export type KEY_AGREEMENT<Type> = ALGORITHM_ID<Type>;

/* eslint-enable */
