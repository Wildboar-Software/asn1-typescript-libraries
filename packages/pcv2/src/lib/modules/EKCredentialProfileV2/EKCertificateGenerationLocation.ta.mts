/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKCertificateGenerationLocation
 * @description
 *
 * Party that generated the endorsement-key certificate.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKCertificateGenerationLocation {
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
 * @summary EKCertificateGenerationLocation
 * @description
 *
 * Party that generated the endorsement-key certificate.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKCertificateGenerationLocation = _enum_for_EKCertificateGenerationLocation;

/**
 * @summary EKCertificateGenerationLocation
 * @description
 *
 * Party that generated the endorsement-key certificate.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCertificateGenerationLocation  ::=  ENUMERATED {
 *     tpmManufacturer (0),
 *     platformManufacturer (1),
 *     ekCertSigner (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKCertificateGenerationLocation = _enum_for_EKCertificateGenerationLocation;

/**
 * @summary EKCertificateGenerationLocation_tpmManufacturer
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
const EKCertificateGenerationLocation_tpmManufacturer = EKCertificateGenerationLocation.tpmManufacturer satisfies EKCertificateGenerationLocation; /* LONG_NAMED_ENUMERATED_VALUE */

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
const tpmManufacturer = EKCertificateGenerationLocation.tpmManufacturer satisfies EKCertificateGenerationLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKCertificateGenerationLocation_platformManufacturer
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
const EKCertificateGenerationLocation_platformManufacturer = EKCertificateGenerationLocation.platformManufacturer satisfies EKCertificateGenerationLocation; /* LONG_NAMED_ENUMERATED_VALUE */

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
const platformManufacturer = EKCertificateGenerationLocation.platformManufacturer satisfies EKCertificateGenerationLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKCertificateGenerationLocation_ekCertSigner
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
const EKCertificateGenerationLocation_ekCertSigner = EKCertificateGenerationLocation.ekCertSigner satisfies EKCertificateGenerationLocation; /* LONG_NAMED_ENUMERATED_VALUE */

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
const ekCertSigner = EKCertificateGenerationLocation.ekCertSigner satisfies EKCertificateGenerationLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKCertificateGenerationLocation: $.ASN1Decoder<EKCertificateGenerationLocation> = $._decodeEnumerated;

export
const _encode_EKCertificateGenerationLocation: $.ASN1Encoder<EKCertificateGenerationLocation> = $._encodeEnumerated;

/* eslint-enable */
