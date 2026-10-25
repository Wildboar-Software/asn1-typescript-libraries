/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityLevel
 * @description
 *
 * FIPS 140 security level selected by `FIPSLevel.version`. The endorsement-key
 * profile's published examples of that version string are "140-1" and "140-2".
 * The platform profile's examples are "140-1", "140-2", and "140-3". Neither
 * profile restates the FIPS requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SecurityLevel {
    /**
     * FIPS security level 1.
     */
    level1 = 1,
    /**
     * FIPS security level 2.
     */
    level2 = 2,
    /**
     * FIPS security level 3.
     */
    level3 = 3,
    /**
     * FIPS security level 4.
     */
    level4 = 4,
}

/**
 * @summary SecurityLevel
 * @description
 *
 * FIPS 140 security level selected by `FIPSLevel.version`. The endorsement-key
 * profile's published examples of that version string are "140-1" and "140-2".
 * The platform profile's examples are "140-1", "140-2", and "140-3". Neither
 * profile restates the FIPS requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SecurityLevel = _enum_for_SecurityLevel;

/**
 * @summary SecurityLevel
 * @description
 *
 * FIPS 140 security level selected by `FIPSLevel.version`. The endorsement-key
 * profile's published examples of that version string are "140-1" and "140-2".
 * The platform profile's examples are "140-1", "140-2", and "140-3". Neither
 * profile restates the FIPS requirements for each level.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevel  ::=  ENUMERATED {
 *     level1 (1),
 *     level2 (2),
 *     level3 (3),
 *     level4 (4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SecurityLevel = _enum_for_SecurityLevel;

/**
 * @summary SecurityLevel_level1
 * @description
 *
 * FIPS security level 1.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level1 = SecurityLevel.level1 satisfies SecurityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level1
 * @description
 *
 * FIPS security level 1.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const level1 = SecurityLevel.level1 satisfies SecurityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level2
 * @description
 *
 * FIPS security level 2.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level2 = SecurityLevel.level2 satisfies SecurityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level2
 * @description
 *
 * FIPS security level 2.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const level2 = SecurityLevel.level2 satisfies SecurityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level3
 * @description
 *
 * FIPS security level 3.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level3 = SecurityLevel.level3 satisfies SecurityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level3
 * @description
 *
 * FIPS security level 3.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const level3 = SecurityLevel.level3 satisfies SecurityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SecurityLevel_level4
 * @description
 *
 * FIPS security level 4.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const SecurityLevel_level4 = SecurityLevel.level4 satisfies SecurityLevel; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary level4
 * @description
 *
 * FIPS security level 4.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 * TCG Platform Certificate Profile, Version 2.1, §4.2.6.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * @constant
 * @type {number}
 */
export
const level4 = SecurityLevel.level4 satisfies SecurityLevel; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_SecurityLevel: $.ASN1Decoder<SecurityLevel> = $._decodeEnumerated;

export
const _encode_SecurityLevel: $.ASN1Encoder<SecurityLevel> = $._encodeEnumerated;

/* eslint-enable */
