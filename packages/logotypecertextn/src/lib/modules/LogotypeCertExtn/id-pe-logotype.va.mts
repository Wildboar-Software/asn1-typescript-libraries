/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_pe_logotype
 * @description
 *
 * Object identifier of the logotype certificate extension,
 * `1.3.6.1.5.5.7.1.12`. The extension may appear in a public-key
 * certificate
 * ([RFC 3280](https://www.rfc-editor.org/rfc/rfc3280)) or an
 * attribute certificate
 * ([RFC 3281](https://www.rfc-editor.org/rfc/rfc3281)), and it is
 * non-critical. The extension value is {@link LogotypeExtn}.
 * Relying parties use it for human display after the certification
 * path has validated.
 *
 * [RFC 3709, section 4.1](https://www.rfc-editor.org/rfc/rfc3709#section-4.1)
 * and [section 5](https://www.rfc-editor.org/rfc/rfc3709#section-5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-pe-logotype  OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1)
 *      security(5) mechanisms(5) pkix(7) id-pe(1) 12 }
 * ```
 * 
 * @constant
 */
export
const id_pe_logotype: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    /* id-pe */ 1,
    12,
]);

/* eslint-enable */
