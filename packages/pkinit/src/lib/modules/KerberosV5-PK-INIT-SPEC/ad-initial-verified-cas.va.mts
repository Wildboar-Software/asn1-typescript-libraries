/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary ad_initial_verified_cas
 * @description
 *
 * Authorization-data type 9. `ad-data` is the DER encoding of
 * {@link AD_INITIAL_VERIFIED_CAS}. The KDC must include an
 * element of this type in the initial ticket and set the
 * ticket's `initial` flag.
 *
 * [RFC 4556, section 3.2.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ad-initial-verified-cas INTEGER ::= 9
 * ```
 * 
 * @constant
 */
export
const ad_initial_verified_cas: INTEGER = 9;

/* eslint-enable */
