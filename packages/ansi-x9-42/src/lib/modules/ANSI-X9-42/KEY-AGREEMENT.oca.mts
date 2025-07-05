/* eslint-disable */
import { type ALGORITHM_ID } from "../ANSI-X9-42/ALGORITHM-ID.oca.mjs";

/**
 * @summary KEY_AGREEMENT
 * @description
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
