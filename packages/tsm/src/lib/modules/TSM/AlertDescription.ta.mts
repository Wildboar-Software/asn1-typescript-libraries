/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AlertDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertDescription  ::=  ENUMERATED {
 * close-notify                (0),
 * unexpected-message            (10),
 * bad-record-mac                (20),
 * decryption-failed                (21),
 * record-overflow                (22),
 * decompression-failure            (30),
 * handshake-failure                (40),
 *                      -- 41 is not defined, for historical reasons
 * bad-certificate                (42),
 * unsupported-certificate        (43),
 * certificate-revoked            (44),
 * certificate-expired            (45),
 * certificate-unknown            (46),
 * illegal-parameter                (47),
 * unknown-ca                    (48),
 * access-denied                (49),
 * decode-error                (50),
 * decrypt-error                (51),
 * export-restriction            (60),
 * protocol-version                (70),
 * insufficient-security            (71),
 * internal-error                (80),
 * user-canceled                (90),
 * no-renegotiation                (100),
 * unsupported-extension            (110),
 * certificate-unobtainable        (111),
 * unrecognized-name                (112),
 * bad-certificate-status-response    (113),
 * bad-certificate-hash-value        (114),
 * unacceptable-model              (115),    -- Extension item for TSM
 * unacceptable-biometrics         (116),    -- Extension item for TSM
 * unsupported-biometrics            (117)     -- Extension item for TSM
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_AlertDescription {
    close_notify = 0,
    unexpected_message = 10,
    bad_record_mac = 20,
    decryption_failed = 21,
    record_overflow = 22,
    decompression_failure = 30,
    handshake_failure = 40,
    bad_certificate = 42,
    unsupported_certificate = 43,
    certificate_revoked = 44,
    certificate_expired = 45,
    certificate_unknown = 46,
    illegal_parameter = 47,
    unknown_ca = 48,
    access_denied = 49,
    decode_error = 50,
    decrypt_error = 51,
    export_restriction = 60,
    protocol_version = 70,
    insufficient_security = 71,
    internal_error = 80,
    user_canceled = 90,
    no_renegotiation = 100,
    unsupported_extension = 110,
    certificate_unobtainable = 111,
    unrecognized_name = 112,
    bad_certificate_status_response = 113,
    bad_certificate_hash_value = 114,
    unacceptable_model = 115,
    unacceptable_biometrics = 116,
    unsupported_biometrics = 117,
}

/**
 * @summary AlertDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertDescription  ::=  ENUMERATED {
 * close-notify                (0),
 * unexpected-message            (10),
 * bad-record-mac                (20),
 * decryption-failed                (21),
 * record-overflow                (22),
 * decompression-failure            (30),
 * handshake-failure                (40),
 *                      -- 41 is not defined, for historical reasons
 * bad-certificate                (42),
 * unsupported-certificate        (43),
 * certificate-revoked            (44),
 * certificate-expired            (45),
 * certificate-unknown            (46),
 * illegal-parameter                (47),
 * unknown-ca                    (48),
 * access-denied                (49),
 * decode-error                (50),
 * decrypt-error                (51),
 * export-restriction            (60),
 * protocol-version                (70),
 * insufficient-security            (71),
 * internal-error                (80),
 * user-canceled                (90),
 * no-renegotiation                (100),
 * unsupported-extension            (110),
 * certificate-unobtainable        (111),
 * unrecognized-name                (112),
 * bad-certificate-status-response    (113),
 * bad-certificate-hash-value        (114),
 * unacceptable-model              (115),    -- Extension item for TSM
 * unacceptable-biometrics         (116),    -- Extension item for TSM
 * unsupported-biometrics            (117)     -- Extension item for TSM
 * }
 * ```
 * 
 * @enum {number}
 */
export
type AlertDescription = _enum_for_AlertDescription;

/**
 * @summary AlertDescription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AlertDescription  ::=  ENUMERATED {
 * close-notify                (0),
 * unexpected-message            (10),
 * bad-record-mac                (20),
 * decryption-failed                (21),
 * record-overflow                (22),
 * decompression-failure            (30),
 * handshake-failure                (40),
 *                      -- 41 is not defined, for historical reasons
 * bad-certificate                (42),
 * unsupported-certificate        (43),
 * certificate-revoked            (44),
 * certificate-expired            (45),
 * certificate-unknown            (46),
 * illegal-parameter                (47),
 * unknown-ca                    (48),
 * access-denied                (49),
 * decode-error                (50),
 * decrypt-error                (51),
 * export-restriction            (60),
 * protocol-version                (70),
 * insufficient-security            (71),
 * internal-error                (80),
 * user-canceled                (90),
 * no-renegotiation                (100),
 * unsupported-extension            (110),
 * certificate-unobtainable        (111),
 * unrecognized-name                (112),
 * bad-certificate-status-response    (113),
 * bad-certificate-hash-value        (114),
 * unacceptable-model              (115),    -- Extension item for TSM
 * unacceptable-biometrics         (116),    -- Extension item for TSM
 * unsupported-biometrics            (117)     -- Extension item for TSM
 * }
 * ```
 * 
 * @enum {number}
 */
export
const AlertDescription = _enum_for_AlertDescription;

/**
 * @summary AlertDescription_close_notify
 * @constant
 * @type {number}
 */
export
const AlertDescription_close_notify: AlertDescription = AlertDescription.close_notify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary close_notify
 * @constant
 * @type {number}
 */
export
const close_notify: AlertDescription = AlertDescription.close_notify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unexpected_message
 * @constant
 * @type {number}
 */
export
const AlertDescription_unexpected_message: AlertDescription = AlertDescription.unexpected_message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected_message
 * @constant
 * @type {number}
 */
export
const unexpected_message: AlertDescription = AlertDescription.unexpected_message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_record_mac
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_record_mac: AlertDescription = AlertDescription.bad_record_mac; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_record_mac
 * @constant
 * @type {number}
 */
export
const bad_record_mac: AlertDescription = AlertDescription.bad_record_mac; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decryption_failed
 * @constant
 * @type {number}
 */
export
const AlertDescription_decryption_failed: AlertDescription = AlertDescription.decryption_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryption_failed
 * @constant
 * @type {number}
 */
export
const decryption_failed: AlertDescription = AlertDescription.decryption_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_record_overflow
 * @constant
 * @type {number}
 */
export
const AlertDescription_record_overflow: AlertDescription = AlertDescription.record_overflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary record_overflow
 * @constant
 * @type {number}
 */
export
const record_overflow: AlertDescription = AlertDescription.record_overflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decompression_failure
 * @constant
 * @type {number}
 */
export
const AlertDescription_decompression_failure: AlertDescription = AlertDescription.decompression_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decompression_failure
 * @constant
 * @type {number}
 */
export
const decompression_failure: AlertDescription = AlertDescription.decompression_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_handshake_failure
 * @constant
 * @type {number}
 */
export
const AlertDescription_handshake_failure: AlertDescription = AlertDescription.handshake_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handshake_failure
 * @constant
 * @type {number}
 */
export
const handshake_failure: AlertDescription = AlertDescription.handshake_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate: AlertDescription = AlertDescription.bad_certificate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate
 * @constant
 * @type {number}
 */
export
const bad_certificate: AlertDescription = AlertDescription.bad_certificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_certificate
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_certificate: AlertDescription = AlertDescription.unsupported_certificate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_certificate
 * @constant
 * @type {number}
 */
export
const unsupported_certificate: AlertDescription = AlertDescription.unsupported_certificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_revoked
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_revoked: AlertDescription = AlertDescription.certificate_revoked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_revoked
 * @constant
 * @type {number}
 */
export
const certificate_revoked: AlertDescription = AlertDescription.certificate_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_expired
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_expired: AlertDescription = AlertDescription.certificate_expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_expired
 * @constant
 * @type {number}
 */
export
const certificate_expired: AlertDescription = AlertDescription.certificate_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_unknown
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_unknown: AlertDescription = AlertDescription.certificate_unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_unknown
 * @constant
 * @type {number}
 */
export
const certificate_unknown: AlertDescription = AlertDescription.certificate_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_illegal_parameter
 * @constant
 * @type {number}
 */
export
const AlertDescription_illegal_parameter: AlertDescription = AlertDescription.illegal_parameter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary illegal_parameter
 * @constant
 * @type {number}
 */
export
const illegal_parameter: AlertDescription = AlertDescription.illegal_parameter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unknown_ca
 * @constant
 * @type {number}
 */
export
const AlertDescription_unknown_ca: AlertDescription = AlertDescription.unknown_ca; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown_ca
 * @constant
 * @type {number}
 */
export
const unknown_ca: AlertDescription = AlertDescription.unknown_ca; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_access_denied
 * @constant
 * @type {number}
 */
export
const AlertDescription_access_denied: AlertDescription = AlertDescription.access_denied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary access_denied
 * @constant
 * @type {number}
 */
export
const access_denied: AlertDescription = AlertDescription.access_denied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decode_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_decode_error: AlertDescription = AlertDescription.decode_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decode_error
 * @constant
 * @type {number}
 */
export
const decode_error: AlertDescription = AlertDescription.decode_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decrypt_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_decrypt_error: AlertDescription = AlertDescription.decrypt_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decrypt_error
 * @constant
 * @type {number}
 */
export
const decrypt_error: AlertDescription = AlertDescription.decrypt_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_export_restriction
 * @constant
 * @type {number}
 */
export
const AlertDescription_export_restriction: AlertDescription = AlertDescription.export_restriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary export_restriction
 * @constant
 * @type {number}
 */
export
const export_restriction: AlertDescription = AlertDescription.export_restriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_protocol_version
 * @constant
 * @type {number}
 */
export
const AlertDescription_protocol_version: AlertDescription = AlertDescription.protocol_version; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_version
 * @constant
 * @type {number}
 */
export
const protocol_version: AlertDescription = AlertDescription.protocol_version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_insufficient_security
 * @constant
 * @type {number}
 */
export
const AlertDescription_insufficient_security: AlertDescription = AlertDescription.insufficient_security; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficient_security
 * @constant
 * @type {number}
 */
export
const insufficient_security: AlertDescription = AlertDescription.insufficient_security; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_internal_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_internal_error: AlertDescription = AlertDescription.internal_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal_error
 * @constant
 * @type {number}
 */
export
const internal_error: AlertDescription = AlertDescription.internal_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_user_canceled
 * @constant
 * @type {number}
 */
export
const AlertDescription_user_canceled: AlertDescription = AlertDescription.user_canceled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_canceled
 * @constant
 * @type {number}
 */
export
const user_canceled: AlertDescription = AlertDescription.user_canceled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_no_renegotiation
 * @constant
 * @type {number}
 */
export
const AlertDescription_no_renegotiation: AlertDescription = AlertDescription.no_renegotiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_renegotiation
 * @constant
 * @type {number}
 */
export
const no_renegotiation: AlertDescription = AlertDescription.no_renegotiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_extension
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_extension: AlertDescription = AlertDescription.unsupported_extension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_extension
 * @constant
 * @type {number}
 */
export
const unsupported_extension: AlertDescription = AlertDescription.unsupported_extension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_unobtainable
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_unobtainable: AlertDescription = AlertDescription.certificate_unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_unobtainable
 * @constant
 * @type {number}
 */
export
const certificate_unobtainable: AlertDescription = AlertDescription.certificate_unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unrecognized_name
 * @constant
 * @type {number}
 */
export
const AlertDescription_unrecognized_name: AlertDescription = AlertDescription.unrecognized_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized_name
 * @constant
 * @type {number}
 */
export
const unrecognized_name: AlertDescription = AlertDescription.unrecognized_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate_status_response
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate_status_response: AlertDescription = AlertDescription.bad_certificate_status_response; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate_status_response
 * @constant
 * @type {number}
 */
export
const bad_certificate_status_response: AlertDescription = AlertDescription.bad_certificate_status_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate_hash_value
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate_hash_value: AlertDescription = AlertDescription.bad_certificate_hash_value; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate_hash_value
 * @constant
 * @type {number}
 */
export
const bad_certificate_hash_value: AlertDescription = AlertDescription.bad_certificate_hash_value; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unacceptable_model
 * @constant
 * @type {number}
 */
export
const AlertDescription_unacceptable_model: AlertDescription = AlertDescription.unacceptable_model; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_model
 * @constant
 * @type {number}
 */
export
const unacceptable_model: AlertDescription = AlertDescription.unacceptable_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unacceptable_biometrics
 * @constant
 * @type {number}
 */
export
const AlertDescription_unacceptable_biometrics: AlertDescription = AlertDescription.unacceptable_biometrics; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_biometrics
 * @constant
 * @type {number}
 */
export
const unacceptable_biometrics: AlertDescription = AlertDescription.unacceptable_biometrics; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_biometrics
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_biometrics: AlertDescription = AlertDescription.unsupported_biometrics; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_biometrics
 * @constant
 * @type {number}
 */
export
const unsupported_biometrics: AlertDescription = AlertDescription.unsupported_biometrics; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_AlertDescription = $._decodeEnumerated;
export const _encode_AlertDescription = $._encodeEnumerated;


/* eslint-enable */
