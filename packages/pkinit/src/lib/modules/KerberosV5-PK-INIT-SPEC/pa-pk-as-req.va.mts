/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary pa_pk_as_req
 * @description
 *
 * Pre-authentication type 16. In an AS-REQ the padata-value is
 * the DER encoding of {@link PA_PK_AS_REQ}. In
 * `KDC_ERR_PREAUTH_FAILED`, a zero-length value of this type
 * means the KDC supports PKINIT. Clients must ignore that
 * value, empty or not. If local policy requires PKINIT and the
 * request had none, the KDC should return
 * `KDC_ERR_PREAUTH_FAILED`.
 *
 * [RFC 4556, section 3.1.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.3)
 * and
 * [section 3.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-pk-as-req INTEGER ::= 16
 * ```
 * 
 * @constant
 */
export
const pa_pk_as_req: INTEGER = 16;

/* eslint-enable */
