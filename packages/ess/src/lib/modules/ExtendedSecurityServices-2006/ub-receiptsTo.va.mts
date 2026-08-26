/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";


/**
 * @summary ub_receiptsTo
 * @description
 *
 * Upper bound (16) on `ReceiptRequest.receiptsTo` sequence size
 * ([RFC 2634 §2.7](https://datatracker.ietf.org/doc/html/rfc2634#section-2.7)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-receiptsTo INTEGER ::= 16
 * ```
 *
 * @constant
 */
export const ub_receiptsTo: INTEGER = 16;

/* eslint-enable */
