/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary td_invalid_certificates
 * @description
 *
 * Typed-data type 105. `data-value` is the DER encoding of
 * {@link TD_INVALID_CERTIFICATES}. Used with
 * `KDC_ERR_INVALID_CERTIFICATE` (71) and, for the same kind of
 * identification, with `KDC_ERR_REVOKED_CERTIFICATE` (72) and
 * `KDC_ERR_REVOCATION_STATUS_UNKNOWN` (73).
 *
 * [RFC 4556, section 3.1.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * td-invalid-certificates INTEGER ::= 105
 * ```
 * 
 * @constant
 */
export
const td_invalid_certificates: INTEGER = 105;

/* eslint-enable */
