/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary strmax
 * @description
 *
 * Upper bound on string lengths in these profiles. The value is 256. The bound
 * gives ASN.1 parsers a definite limit and caps certificate size. Profiles
 * require that this value not exceed 256.
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
 * strmax          INTEGER ::= 256
 * ```
 * 
 * @constant
 */
export
const strmax: INTEGER = 256;

/* eslint-enable */
