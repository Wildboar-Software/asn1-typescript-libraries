/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary td_trusted_certifiers
 * @description
 *
 * Typed-data type 104. `data-value` is the DER encoding of
 * {@link TD_TRUSTED_CERTIFIERS}, returned with
 * `KDC_ERR_CANT_VERIFY_CERTIFICATE` (70).
 *
 * [RFC 4556, section 3.1.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * td-trusted-certifiers INTEGER ::= 104
 * ```
 * 
 * @constant
 */
export
const td_trusted_certifiers: INTEGER = 104;

/* eslint-enable */
