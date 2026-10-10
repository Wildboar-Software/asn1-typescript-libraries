/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary pa_pk_as_rep
 * @description
 *
 * Pre-authentication type 17. In the AS-REP the padata-value is
 * the DER encoding of {@link PA_PK_AS_REP}.
 *
 * [RFC 4556, section 3.1.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pa-pk-as-rep INTEGER ::= 17
 * ```
 * 
 * @constant
 */
export
const pa_pk_as_rep: INTEGER = 17;

/* eslint-enable */
