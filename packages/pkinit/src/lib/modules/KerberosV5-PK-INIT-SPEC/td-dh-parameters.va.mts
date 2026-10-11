/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary td_dh_parameters
 * @description
 *
 * Typed-data type 109. `data-value` is the DER encoding of
 * {@link TD_DH_PARAMETERS}, returned with
 * `KDC_ERR_DH_KEY_PARAMETERS_NOT_ACCEPTED` (65).
 *
 * [RFC 4556, section 3.1.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * td-dh-parameters INTEGER ::= 109
 * ```
 * 
 * @constant
 */
export
const td_dh_parameters: INTEGER = 109;

/* eslint-enable */
