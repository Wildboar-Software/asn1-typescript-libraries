/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKGenerationLocation
 * @description
 *
 * Party that generated the endorsement key.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKGenerationLocation {
    /**
     * The TPM manufacturer.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    tpmManufacturer = 0,
    /**
     * The platform manufacturer.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    platformManufacturer = 1,
    /**
     * The signer of the endorsement-key certificate.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    ekCertSigner = 2,
}

/**
 * @summary EKGenerationLocation
 * @description
 *
 * Party that generated the endorsement key.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKGenerationLocation = _enum_for_EKGenerationLocation;

/**
 * @summary EKGenerationLocation
 * @description
 *
 * Party that generated the endorsement key.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKGenerationLocation = _enum_for_EKGenerationLocation;

/**
 * @summary EKGenerationLocation_tpmManufacturer
 * @description
 *
 * The TPM manufacturer.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_tpmManufacturer: EKGenerationLocation = EKGenerationLocation.tpmManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tpmManufacturer
 * @description
 *
 * The TPM manufacturer.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const tpmManufacturer: EKGenerationLocation = EKGenerationLocation.tpmManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationLocation_platformManufacturer
 * @description
 *
 * The platform manufacturer.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_platformManufacturer: EKGenerationLocation = EKGenerationLocation.platformManufacturer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary platformManufacturer
 * @description
 *
 * The platform manufacturer.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const platformManufacturer: EKGenerationLocation = EKGenerationLocation.platformManufacturer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationLocation_ekCertSigner
 * @description
 *
 * The signer of the endorsement-key certificate.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationLocation_ekCertSigner: EKGenerationLocation = EKGenerationLocation.ekCertSigner; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ekCertSigner
 * @description
 *
 * The signer of the endorsement-key certificate.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const ekCertSigner: EKGenerationLocation = EKGenerationLocation.ekCertSigner; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKGenerationLocation: $.ASN1Decoder<EKGenerationLocation> = $._decodeEnumerated;

export
const _encode_EKGenerationLocation: $.ASN1Encoder<EKGenerationLocation> = $._encodeEnumerated;

/* eslint-enable */
