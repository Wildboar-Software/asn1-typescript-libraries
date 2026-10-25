/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_swb
 * @description
 *
 * SCVP WantBack arc, imported from the SCVP module.
 * [RFC 5276](https://www.rfc-editor.org/rfc/rfc5276)
 * assigns `{id-swb 15}` through `{id-swb 20}` under it
 * for partial certification paths and evidence records.
 *
 * [RFC 5055, §3.2.3](https://www.rfc-editor.org/rfc/rfc5055#section-3.2.3)
 * and
 * [RFC 5276, Appendix A](https://www.rfc-editor.org/rfc/rfc5276#appendix-A).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb OBJECT IDENTIFIER ::= { iso(1) identified-organization(3) dod(6) internet(1) security(5)
 *     mechanisms(5) pkix(7) 18 }
 * ```
 * 
 * @constant
 */
export
const id_swb: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* dod */ 6,
    /* internet */ 1,
    /* security */ 5,
    /* mechanisms */ 5,
    /* pkix */ 7,
    18,
]);

/* eslint-enable */
