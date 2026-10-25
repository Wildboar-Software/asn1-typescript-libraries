/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";



/**
 * @summary urimax
 * @description
 *
 * Upper bound on a URI carried in these profiles. The value is 1024, chosen to
 * match the HTML SGML `LITLEN` limit for an `<A>` anchor (RFC 1866). The bound
 * gives ASN.1 parsers a definite limit and caps certificate size. Profiles
 * require that this value not exceed 1024.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * urimax          INTEGER ::= 1024
 * ```
 * 
 * @constant
 */
export
const urimax: INTEGER = 1024;

/* eslint-enable */
