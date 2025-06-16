/* eslint-disable */
import { ASN1Element as _Element, ENUMERATED } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";

export enum _enum_for_WrpError {
    protocol_error = 0,
    invalid_signatureAlgorithm = 1,
    unexpected_version = 2,
    protected_protocol_not_supported = 3,
    duplicate_assoID = 4,
    invalid_time_value = 5,
    key_estab_algorithm_not_supported = 6,
    encr_mode_aead_not_supported = 7,
    encryption_not_supported = 8,
    encryption_required = 9,
    aead_algorithms_not_supported = 10,
    aead_is_required = 11,
    symmetricKey_algorithms_not_supported = 12,
    icv_algorithms_not_supported = 13,
    invalid_attribute_certificate = 14,
    alt_signature_not_allowed = 15,
    only_one_version = 16,
    invalid_key_estab_algorithm = 17,
    invalid_alt_key_estab_algorithm = 18,
    invalid_aead_algorithm = 19,
    aead_not_allowed = 20,
    invalid_symmetricKey_algorithm = 21,
    invalid_icv_algorithm = 22,
    dynamic_aead_algo_parms_required = 23,
    invalid_dynamic_aead_algo_parms = 24,
    dynamic_aead_algo_parms_not_required = 25,
    dynamic_symKey_algo_parms_required = 26,
    invalid_dynamic_symKey_algo_parms = 27,
    dynamic_symKey_algo_parms_not_required = 28,
    dynamic_icv_algo_parms_required = 29,
    invalid_dynamic_icv_algo_parms = 30,
    dynamic_icv_algo_parms_not_required = 31,
    unexpected_invokeID_received = 32,
    rekey_out_of_sequence = 33,
    invalid_dynamic_keyEst_algo_parms = 34,
    changedKey_out_of_sequence = 35,
}

/**
 * @summary WrpError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * WrpError  ::=  ENUMERATED {
 *   protocol-error                         (0),
 *   invalid-signatureAlgorithm             (1),
 *   unexpected-version                     (2),
 *   protected-protocol-not-supported       (3),
 *   duplicate-assoID                       (4),
 *   invalid-time-value                     (5),
 *   key-estab-algorithm-not-supported      (6),
 *   encr-mode-aead-not-supported           (7),
 *   encryption-not-supported               (8),
 *   encryption-required                    (9),
 *   aead-algorithms-not-supported          (10),
 *   aead-is-required                       (11),
 *   symmetricKey-algorithms-not-supported  (12),
 *   icv-algorithms-not-supported           (13),
 *   invalid-attribute-certificate          (14),
 *   alt-signature-not-allowed              (15),
 *   only-one-version                       (16),
 *   invalid-key-estab-algorithm            (17),
 *   invalid-alt-key-estab-algorithm        (18),
 *   invalid-aead-algorithm                 (19),
 *   aead-not-allowed                       (20),
 *   invalid-symmetricKey-algorithm         (21),
 *   invalid-icv-algorithm                  (22),
 *   dynamic-aead-algo-parms-required       (23),
 *   invalid-dynamic-aead-algo-parms        (24),
 *   dynamic-aead-algo-parms-not-required   (25),
 *   dynamic-symKey-algo-parms-required     (26),
 *   invalid-dynamic-symKey-algo-parms      (27),
 *   dynamic-symKey-algo-parms-not-required (28),
 *   dynamic-icv-algo-parms-required        (29),
 *   invalid-dynamic-icv-algo-parms         (30),
 *   dynamic-icv-algo-parms-not-required    (31),
 *   unexpected-invokeID-received           (32),
 *   rekey-out-of-sequence                  (33),
 *   invalid-dynamic-keyEst-algo-parms      (34),
 *   changedKey-out-of-sequence             (35),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type WrpError = _enum_for_WrpError | ENUMERATED;

/**
 * @summary WrpError_protocol_error
 * @constant
 * @type {number}
 */
export const WrpError_protocol_error: WrpError = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_error
 * @constant
 * @type {number}
 */
export const protocol_error: WrpError = WrpError_protocol_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_signatureAlgorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_signatureAlgorithm: WrpError = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_signatureAlgorithm
 * @constant
 * @type {number}
 */
export const invalid_signatureAlgorithm: WrpError = WrpError_invalid_signatureAlgorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_unexpected_version
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_version: WrpError = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected_version
 * @constant
 * @type {number}
 */
export const unexpected_version: WrpError = WrpError_unexpected_version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_protected_protocol_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_protected_protocol_not_supported: WrpError = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protected_protocol_not_supported
 * @constant
 * @type {number}
 */
export const protected_protocol_not_supported: WrpError = WrpError_protected_protocol_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_duplicate_assoID
 * @constant
 * @type {number}
 */
export const WrpError_duplicate_assoID: WrpError = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary duplicate_assoID
 * @constant
 * @type {number}
 */
export const duplicate_assoID: WrpError = WrpError_duplicate_assoID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_time_value
 * @constant
 * @type {number}
 */
export const WrpError_invalid_time_value: WrpError = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_time_value
 * @constant
 * @type {number}
 */
export const invalid_time_value: WrpError = WrpError_invalid_time_value; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_key_estab_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_key_estab_algorithm_not_supported: WrpError = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary key_estab_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const key_estab_algorithm_not_supported: WrpError = WrpError_key_estab_algorithm_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_encr_mode_aead_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encr_mode_aead_not_supported: WrpError = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encr_mode_aead_not_supported
 * @constant
 * @type {number}
 */
export const encr_mode_aead_not_supported: WrpError = WrpError_encr_mode_aead_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_encryption_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_encryption_not_supported: WrpError = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encryption_not_supported
 * @constant
 * @type {number}
 */
export const encryption_not_supported: WrpError = WrpError_encryption_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_encryption_required
 * @constant
 * @type {number}
 */
export const WrpError_encryption_required: WrpError = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary encryption_required
 * @constant
 * @type {number}
 */
export const encryption_required: WrpError = WrpError_encryption_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_aead_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_aead_algorithms_not_supported: WrpError = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aead_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const aead_algorithms_not_supported: WrpError = WrpError_aead_algorithms_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_aead_is_required
 * @constant
 * @type {number}
 */
export const WrpError_aead_is_required: WrpError = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aead_is_required
 * @constant
 * @type {number}
 */
export const aead_is_required: WrpError = WrpError_aead_is_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_symmetricKey_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_symmetricKey_algorithms_not_supported: WrpError = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary symmetricKey_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const symmetricKey_algorithms_not_supported: WrpError = WrpError_symmetricKey_algorithms_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_icv_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const WrpError_icv_algorithms_not_supported: WrpError = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary icv_algorithms_not_supported
 * @constant
 * @type {number}
 */
export const icv_algorithms_not_supported: WrpError = WrpError_icv_algorithms_not_supported; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_attribute_certificate
 * @constant
 * @type {number}
 */
export const WrpError_invalid_attribute_certificate: WrpError = 14; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_attribute_certificate
 * @constant
 * @type {number}
 */
export const invalid_attribute_certificate: WrpError = WrpError_invalid_attribute_certificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_alt_signature_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_alt_signature_not_allowed: WrpError = 15; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alt_signature_not_allowed
 * @constant
 * @type {number}
 */
export const alt_signature_not_allowed: WrpError = WrpError_alt_signature_not_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_only_one_version
 * @constant
 * @type {number}
 */
export const WrpError_only_one_version: WrpError = 16; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary only_one_version
 * @constant
 * @type {number}
 */
export const only_one_version: WrpError = WrpError_only_one_version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_key_estab_algorithm: WrpError = 17; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const invalid_key_estab_algorithm: WrpError = WrpError_invalid_key_estab_algorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_alt_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_alt_key_estab_algorithm: WrpError = 18; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_alt_key_estab_algorithm
 * @constant
 * @type {number}
 */
export const invalid_alt_key_estab_algorithm: WrpError = WrpError_invalid_alt_key_estab_algorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_aead_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_aead_algorithm: WrpError = 19; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_aead_algorithm
 * @constant
 * @type {number}
 */
export const invalid_aead_algorithm: WrpError = WrpError_invalid_aead_algorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_aead_not_allowed
 * @constant
 * @type {number}
 */
export const WrpError_aead_not_allowed: WrpError = 20; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aead_not_allowed
 * @constant
 * @type {number}
 */
export const aead_not_allowed: WrpError = WrpError_aead_not_allowed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_symmetricKey_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_symmetricKey_algorithm: WrpError = 21; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_symmetricKey_algorithm
 * @constant
 * @type {number}
 */
export const invalid_symmetricKey_algorithm: WrpError = WrpError_invalid_symmetricKey_algorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_icv_algorithm
 * @constant
 * @type {number}
 */
export const WrpError_invalid_icv_algorithm: WrpError = 22; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_icv_algorithm
 * @constant
 * @type {number}
 */
export const invalid_icv_algorithm: WrpError = WrpError_invalid_icv_algorithm; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_aead_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_required: WrpError = 23; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_aead_algo_parms_required
 * @constant
 * @type {number}
 */
export const dynamic_aead_algo_parms_required: WrpError = WrpError_dynamic_aead_algo_parms_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_dynamic_aead_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_aead_algo_parms: WrpError = 24; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_dynamic_aead_algo_parms
 * @constant
 * @type {number}
 */
export const invalid_dynamic_aead_algo_parms: WrpError = WrpError_invalid_dynamic_aead_algo_parms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_aead_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_aead_algo_parms_not_required: WrpError = 25; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_aead_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const dynamic_aead_algo_parms_not_required: WrpError = WrpError_dynamic_aead_algo_parms_not_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_symKey_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_required: WrpError = 26; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_symKey_algo_parms_required
 * @constant
 * @type {number}
 */
export const dynamic_symKey_algo_parms_required: WrpError = WrpError_dynamic_symKey_algo_parms_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_dynamic_symKey_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_symKey_algo_parms: WrpError = 27; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_dynamic_symKey_algo_parms
 * @constant
 * @type {number}
 */
export const invalid_dynamic_symKey_algo_parms: WrpError = WrpError_invalid_dynamic_symKey_algo_parms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_symKey_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_symKey_algo_parms_not_required: WrpError = 28; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_symKey_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const dynamic_symKey_algo_parms_not_required: WrpError = WrpError_dynamic_symKey_algo_parms_not_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_icv_algo_parms_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_required: WrpError = 29; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_icv_algo_parms_required
 * @constant
 * @type {number}
 */
export const dynamic_icv_algo_parms_required: WrpError = WrpError_dynamic_icv_algo_parms_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_dynamic_icv_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_icv_algo_parms: WrpError = 30; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_dynamic_icv_algo_parms
 * @constant
 * @type {number}
 */
export const invalid_dynamic_icv_algo_parms: WrpError = WrpError_invalid_dynamic_icv_algo_parms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_dynamic_icv_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const WrpError_dynamic_icv_algo_parms_not_required: WrpError = 31; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dynamic_icv_algo_parms_not_required
 * @constant
 * @type {number}
 */
export const dynamic_icv_algo_parms_not_required: WrpError = WrpError_dynamic_icv_algo_parms_not_required; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_unexpected_invokeID_received
 * @constant
 * @type {number}
 */
export const WrpError_unexpected_invokeID_received: WrpError = 32; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected_invokeID_received
 * @constant
 * @type {number}
 */
export const unexpected_invokeID_received: WrpError = WrpError_unexpected_invokeID_received; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_rekey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_rekey_out_of_sequence: WrpError = 33; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rekey_out_of_sequence
 * @constant
 * @type {number}
 */
export const rekey_out_of_sequence: WrpError = WrpError_rekey_out_of_sequence; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_invalid_dynamic_keyEst_algo_parms
 * @constant
 * @type {number}
 */
export const WrpError_invalid_dynamic_keyEst_algo_parms: WrpError = 34; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary invalid_dynamic_keyEst_algo_parms
 * @constant
 * @type {number}
 */
export const invalid_dynamic_keyEst_algo_parms: WrpError = WrpError_invalid_dynamic_keyEst_algo_parms; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary WrpError_changedKey_out_of_sequence
 * @constant
 * @type {number}
 */
export const WrpError_changedKey_out_of_sequence: WrpError = 35; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changedKey_out_of_sequence
 * @constant
 * @type {number}
 */
export const changedKey_out_of_sequence: WrpError = WrpError_changedKey_out_of_sequence; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_WrpError = $._decodeEnumerated;


export const _encode_WrpError = $._encodeEnumerated;


/* eslint-enable */
