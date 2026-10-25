/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Version
 * @description
 *
 * Version of the `TPMSecurityAssertions` syntax. `v1` is 0. A later profile may
 * append fields at the end of `TPMSecurityAssertions` and identify that syntax
 * with a larger version.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Version  ::=  INTEGER { v1(0) }
 * ```
 */
export
type Version = INTEGER;

/**
 * @summary Version_v1
 * @description
 *
 * Version 1 of the `TPMSecurityAssertions` syntax, encoded as 0.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const Version_v1: 0 = 0 satisfies Version; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary Version_v1
 * @description
 *
 * Version 1 of the `TPMSecurityAssertions` syntax, encoded as 0.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const v1: 0 = Version_v1; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_Version: $.ASN1Decoder<Version> = $._decodeInteger;

export
const _encode_Version: $.ASN1Encoder<Version> = $._encodeInteger;

/* eslint-enable */
