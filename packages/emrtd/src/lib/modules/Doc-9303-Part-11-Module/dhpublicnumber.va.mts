/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary dhpublicnumber
 * @description
 *
 * Explicit Diffie-Hellman domain parameters in an `AlgorithmIdentifier`.
 * `{iso(1) member-body(2) us(840) ansi-x942(10046) number-type(2) 1}`.
 *
 * Do not use an id reserved for `standardizedDomainParameters`.
 *
 * Doc 9303-11, section 9.5.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhpublicnumber OBJECT IDENTIFIER ::= {
 *     iso(1) member-body(2) us(840) ansi-x942(10046) number-type(2) 1
 * }
 * ```
 * 
 * @constant
 */
export
const dhpublicnumber: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* ansi-x942 */ 10046,
    /* number-type */ 2,
    1,
]);

/* eslint-enable */
