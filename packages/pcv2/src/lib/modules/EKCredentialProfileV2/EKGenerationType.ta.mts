/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKGenerationType
 * @description
 *
 * How the endorsement key in the TPM was created. The revocable alternatives
 * state whether the endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EKGenerationType {
    /**
     * The endorsement key was generated inside the TPM firmware.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    internal = 0,
    /**
     * The endorsement key was generated outside the TPM and inserted under a
     * controlled environment during manufacturing.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    injected = 1,
    /**
     * The endorsement key was generated inside the TPM firmware, and the
     * endorsement-key credential can be revoked.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    internalRevocable = 2,
    /**
     * The endorsement key was generated outside the TPM and inserted during
     * manufacturing, and the endorsement-key credential can be revoked.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    injectedRevocable = 3,
    /**
     * The endorsement key was produced by an entity, such as a TPM bootloader,
     * that measured the TPM firmware and bound the key to those measurements. A
     * DICE-based firmware-limited endorsement-key credential that includes TPM
     * security assertions uses this value, and also carries a
     * `tcg-dice-TcbInfo` or `tcg-dice-MultiTcbInfo` extension binding the key
     * to the measured firmware.
     *
     * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7,
     * §3.1.1 and §2.2.1.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
     */
    firmwareLimited = 4,
}

/**
 * @summary EKGenerationType
 * @description
 *
 * How the endorsement key in the TPM was created. The revocable alternatives
 * state whether the endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EKGenerationType = _enum_for_EKGenerationType;

/**
 * @summary EKGenerationType
 * @description
 *
 * How the endorsement key in the TPM was created. The revocable alternatives
 * state whether the endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKGenerationType  ::=  ENUMERATED {
 *     internal (0),
 *     injected (1),
 *     internalRevocable(2),
 *     injectedRevocable(3),
 *     firmwareLimited(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EKGenerationType = _enum_for_EKGenerationType;

/**
 * @summary EKGenerationType_internal
 * @description
 *
 * The endorsement key was generated inside the TPM firmware.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationType_internal = EKGenerationType.internal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal
 * @description
 *
 * The endorsement key was generated inside the TPM firmware.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const internal = EKGenerationType.internal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_injected
 * @description
 *
 * The endorsement key was generated outside the TPM and inserted under a
 * controlled environment during manufacturing.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationType_injected = EKGenerationType.injected; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary injected
 * @description
 *
 * The endorsement key was generated outside the TPM and inserted under a
 * controlled environment during manufacturing.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const injected = EKGenerationType.injected; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_internalRevocable
 * @description
 *
 * The endorsement key was generated inside the TPM firmware, and the
 * endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationType_internalRevocable = EKGenerationType.internalRevocable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internalRevocable
 * @description
 *
 * The endorsement key was generated inside the TPM firmware, and the
 * endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const internalRevocable = EKGenerationType.internalRevocable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_injectedRevocable
 * @description
 *
 * The endorsement key was generated outside the TPM and inserted during
 * manufacturing, and the endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationType_injectedRevocable = EKGenerationType.injectedRevocable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary injectedRevocable
 * @description
 *
 * The endorsement key was generated outside the TPM and inserted during
 * manufacturing, and the endorsement-key credential can be revoked.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const injectedRevocable = EKGenerationType.injectedRevocable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EKGenerationType_firmwareLimited
 * @description
 *
 * The endorsement key was produced by an entity, such as a TPM bootloader, that
 * measured the TPM firmware and bound the key to those measurements. A
 * DICE-based firmware-limited endorsement-key credential that includes TPM
 * security assertions uses this value, and also carries a `tcg-dice-TcbInfo` or
 * `tcg-dice-MultiTcbInfo` extension binding the key to the measured firmware.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1
 * and §2.2.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const EKGenerationType_firmwareLimited = EKGenerationType.firmwareLimited; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary firmwareLimited
 * @description
 *
 * The endorsement key was produced by an entity, such as a TPM bootloader, that
 * measured the TPM firmware and bound the key to those measurements. A
 * DICE-based firmware-limited endorsement-key credential that includes TPM
 * security assertions uses this value, and also carries a `tcg-dice-TcbInfo` or
 * `tcg-dice-MultiTcbInfo` extension binding the key to the measured firmware.
 *
 * TCG EK Credential Profile for TPM Family 2.0, Level 0, Version 2.7, §3.1.1
 * and §2.2.1.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG-EK-Credential-Profile-for-TPM-Family-2.0-Level-0-Version-2.7_Pub.pdf
 *
 * @constant
 * @type {number}
 */
export
const firmwareLimited = EKGenerationType.firmwareLimited; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_EKGenerationType: $.ASN1Decoder<EKGenerationType> = $._decodeEnumerated;

export
const _encode_EKGenerationType: $.ASN1Encoder<EKGenerationType> = $._encodeEnumerated;

/* eslint-enable */
