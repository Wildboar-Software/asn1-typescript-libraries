/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";


/**
 * @summary ub_ml_expansion_history
 * @description
 *
 * Upper bound (64) on `MLExpansionHistory` sequence size; overflow should
 * be reported to a mail-list administrator ([RFC 2634 §4.4](https://datatracker.ietf.org/doc/html/rfc2634#section-4.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-ml-expansion-history INTEGER ::= 64
 * ```
 *
 * @constant
 */
export const ub_ml_expansion_history: INTEGER = 64;

/* eslint-enable */
