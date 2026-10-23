/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary certstrmax
 * @description
 *
 * Upper bound on a string that holds a PEM-encoded certificate. The value is
 * 100000 (100 KB). The profile requires that this value not exceed 100 KB.
 * `pemCertStringTrait` uses it.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certstrmax      INTEGER ::= 100000
 * ```
 * 
 * @constant
 */
export
const certstrmax: INTEGER = 100000;

/* eslint-enable */
