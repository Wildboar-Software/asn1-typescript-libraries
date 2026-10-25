/* eslint-disable */
import {
    type ASN1Element as _Element,
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
 * Alert cause. Values 0–114 are TLS 1.1 / TLS-extension alerts
 * ([IETF RFC 4346], [IETF RFC 4366]). TSM adds 115–117, chosen to avoid
 * clashing with RFC 4366 (X.1084 §10.2). Appendix I lists further alerts
 * 118–122; those are not in Annex A and are not in this type.
 * ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
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
 * Alert cause. Values 0–114 are TLS 1.1 / TLS-extension alerts
 * ([IETF RFC 4346], [IETF RFC 4366]). TSM adds 115–117, chosen to avoid
 * clashing with RFC 4366 (X.1084 §10.2). Appendix I lists further alerts
 * 118–122; those are not in Annex A and are not in this type.
 * ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
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
 * Alert cause. Values 0–114 are TLS 1.1 / TLS-extension alerts
 * ([IETF RFC 4346], [IETF RFC 4366]). TSM adds 115–117, chosen to avoid
 * clashing with RFC 4366 (X.1084 §10.2). Appendix I lists further alerts
 * 118–122; those are not in Annex A and are not in this type.
 * ITU-T Rec. X.1084 (05/2008) §10.2, Annex A.
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
const AlertDescription: typeof _enum_for_AlertDescription = _enum_for_AlertDescription;

/**
 * @summary AlertDescription_close_notify
 * @constant
 * @type {number}
 */
export
const AlertDescription_close_notify: _enum_for_AlertDescription.close_notify = AlertDescription.close_notify; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary close_notify
 * @constant
 * @type {number}
 */
export
const close_notify: _enum_for_AlertDescription.close_notify = AlertDescription.close_notify; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unexpected_message
 * @constant
 * @type {number}
 */
export
const AlertDescription_unexpected_message: _enum_for_AlertDescription.unexpected_message = AlertDescription.unexpected_message; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unexpected_message
 * @constant
 * @type {number}
 */
export
const unexpected_message: _enum_for_AlertDescription.unexpected_message = AlertDescription.unexpected_message; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_record_mac
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_record_mac: _enum_for_AlertDescription.bad_record_mac = AlertDescription.bad_record_mac; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_record_mac
 * @constant
 * @type {number}
 */
export
const bad_record_mac: _enum_for_AlertDescription.bad_record_mac = AlertDescription.bad_record_mac; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decryption_failed
 * @constant
 * @type {number}
 */
export
const AlertDescription_decryption_failed: _enum_for_AlertDescription.decryption_failed = AlertDescription.decryption_failed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decryption_failed
 * @constant
 * @type {number}
 */
export
const decryption_failed: _enum_for_AlertDescription.decryption_failed = AlertDescription.decryption_failed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_record_overflow
 * @constant
 * @type {number}
 */
export
const AlertDescription_record_overflow: _enum_for_AlertDescription.record_overflow = AlertDescription.record_overflow; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary record_overflow
 * @constant
 * @type {number}
 */
export
const record_overflow: _enum_for_AlertDescription.record_overflow = AlertDescription.record_overflow; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decompression_failure
 * @constant
 * @type {number}
 */
export
const AlertDescription_decompression_failure: _enum_for_AlertDescription.decompression_failure = AlertDescription.decompression_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decompression_failure
 * @constant
 * @type {number}
 */
export
const decompression_failure: _enum_for_AlertDescription.decompression_failure = AlertDescription.decompression_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_handshake_failure
 * @constant
 * @type {number}
 */
export
const AlertDescription_handshake_failure: _enum_for_AlertDescription.handshake_failure = AlertDescription.handshake_failure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handshake_failure
 * @constant
 * @type {number}
 */
export
const handshake_failure: _enum_for_AlertDescription.handshake_failure = AlertDescription.handshake_failure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate: _enum_for_AlertDescription.bad_certificate = AlertDescription.bad_certificate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate
 * @constant
 * @type {number}
 */
export
const bad_certificate: _enum_for_AlertDescription.bad_certificate = AlertDescription.bad_certificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_certificate
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_certificate: _enum_for_AlertDescription.unsupported_certificate = AlertDescription.unsupported_certificate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_certificate
 * @constant
 * @type {number}
 */
export
const unsupported_certificate: _enum_for_AlertDescription.unsupported_certificate = AlertDescription.unsupported_certificate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_revoked
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_revoked: _enum_for_AlertDescription.certificate_revoked = AlertDescription.certificate_revoked; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_revoked
 * @constant
 * @type {number}
 */
export
const certificate_revoked: _enum_for_AlertDescription.certificate_revoked = AlertDescription.certificate_revoked; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_expired
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_expired: _enum_for_AlertDescription.certificate_expired = AlertDescription.certificate_expired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_expired
 * @constant
 * @type {number}
 */
export
const certificate_expired: _enum_for_AlertDescription.certificate_expired = AlertDescription.certificate_expired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_unknown
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_unknown: _enum_for_AlertDescription.certificate_unknown = AlertDescription.certificate_unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_unknown
 * @constant
 * @type {number}
 */
export
const certificate_unknown: _enum_for_AlertDescription.certificate_unknown = AlertDescription.certificate_unknown; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_illegal_parameter
 * @constant
 * @type {number}
 */
export
const AlertDescription_illegal_parameter: _enum_for_AlertDescription.illegal_parameter = AlertDescription.illegal_parameter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary illegal_parameter
 * @constant
 * @type {number}
 */
export
const illegal_parameter: _enum_for_AlertDescription.illegal_parameter = AlertDescription.illegal_parameter; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unknown_ca
 * @constant
 * @type {number}
 */
export
const AlertDescription_unknown_ca: _enum_for_AlertDescription.unknown_ca = AlertDescription.unknown_ca; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown_ca
 * @constant
 * @type {number}
 */
export
const unknown_ca: _enum_for_AlertDescription.unknown_ca = AlertDescription.unknown_ca; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_access_denied
 * @constant
 * @type {number}
 */
export
const AlertDescription_access_denied: _enum_for_AlertDescription.access_denied = AlertDescription.access_denied; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary access_denied
 * @constant
 * @type {number}
 */
export
const access_denied: _enum_for_AlertDescription.access_denied = AlertDescription.access_denied; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decode_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_decode_error: _enum_for_AlertDescription.decode_error = AlertDescription.decode_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decode_error
 * @constant
 * @type {number}
 */
export
const decode_error: _enum_for_AlertDescription.decode_error = AlertDescription.decode_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_decrypt_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_decrypt_error: _enum_for_AlertDescription.decrypt_error = AlertDescription.decrypt_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary decrypt_error
 * @constant
 * @type {number}
 */
export
const decrypt_error: _enum_for_AlertDescription.decrypt_error = AlertDescription.decrypt_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_export_restriction
 * @constant
 * @type {number}
 */
export
const AlertDescription_export_restriction: _enum_for_AlertDescription.export_restriction = AlertDescription.export_restriction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary export_restriction
 * @constant
 * @type {number}
 */
export
const export_restriction: _enum_for_AlertDescription.export_restriction = AlertDescription.export_restriction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_protocol_version
 * @constant
 * @type {number}
 */
export
const AlertDescription_protocol_version: _enum_for_AlertDescription.protocol_version = AlertDescription.protocol_version; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol_version
 * @constant
 * @type {number}
 */
export
const protocol_version: _enum_for_AlertDescription.protocol_version = AlertDescription.protocol_version; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_insufficient_security
 * @constant
 * @type {number}
 */
export
const AlertDescription_insufficient_security: _enum_for_AlertDescription.insufficient_security = AlertDescription.insufficient_security; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary insufficient_security
 * @constant
 * @type {number}
 */
export
const insufficient_security: _enum_for_AlertDescription.insufficient_security = AlertDescription.insufficient_security; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_internal_error
 * @constant
 * @type {number}
 */
export
const AlertDescription_internal_error: _enum_for_AlertDescription.internal_error = AlertDescription.internal_error; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary internal_error
 * @constant
 * @type {number}
 */
export
const internal_error: _enum_for_AlertDescription.internal_error = AlertDescription.internal_error; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_user_canceled
 * @constant
 * @type {number}
 */
export
const AlertDescription_user_canceled: _enum_for_AlertDescription.user_canceled = AlertDescription.user_canceled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary user_canceled
 * @constant
 * @type {number}
 */
export
const user_canceled: _enum_for_AlertDescription.user_canceled = AlertDescription.user_canceled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_no_renegotiation
 * @constant
 * @type {number}
 */
export
const AlertDescription_no_renegotiation: _enum_for_AlertDescription.no_renegotiation = AlertDescription.no_renegotiation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_renegotiation
 * @constant
 * @type {number}
 */
export
const no_renegotiation: _enum_for_AlertDescription.no_renegotiation = AlertDescription.no_renegotiation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_extension
 * @description
 *
 * RFC 4366 `unsupported_extension` (110). X.1084: fatal if the verifier
 * received the biometric handshake in an unsupported fashion. §10.2.
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_extension: _enum_for_AlertDescription.unsupported_extension = AlertDescription.unsupported_extension; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_extension
 * @description
 *
 * RFC 4366 `unsupported_extension` (110). X.1084: fatal if the verifier
 * received the biometric handshake in an unsupported fashion. §10.2.
 * @constant
 * @type {number}
 */
export
const unsupported_extension: _enum_for_AlertDescription.unsupported_extension = AlertDescription.unsupported_extension; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_certificate_unobtainable
 * @constant
 * @type {number}
 */
export
const AlertDescription_certificate_unobtainable: _enum_for_AlertDescription.certificate_unobtainable = AlertDescription.certificate_unobtainable; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary certificate_unobtainable
 * @constant
 * @type {number}
 */
export
const certificate_unobtainable: _enum_for_AlertDescription.certificate_unobtainable = AlertDescription.certificate_unobtainable; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unrecognized_name
 * @constant
 * @type {number}
 */
export
const AlertDescription_unrecognized_name: _enum_for_AlertDescription.unrecognized_name = AlertDescription.unrecognized_name; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unrecognized_name
 * @constant
 * @type {number}
 */
export
const unrecognized_name: _enum_for_AlertDescription.unrecognized_name = AlertDescription.unrecognized_name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate_status_response
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate_status_response: _enum_for_AlertDescription.bad_certificate_status_response = AlertDescription.bad_certificate_status_response; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate_status_response
 * @constant
 * @type {number}
 */
export
const bad_certificate_status_response: _enum_for_AlertDescription.bad_certificate_status_response = AlertDescription.bad_certificate_status_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_bad_certificate_hash_value
 * @constant
 * @type {number}
 */
export
const AlertDescription_bad_certificate_hash_value: _enum_for_AlertDescription.bad_certificate_hash_value = AlertDescription.bad_certificate_hash_value; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bad_certificate_hash_value
 * @constant
 * @type {number}
 */
export
const bad_certificate_hash_value: _enum_for_AlertDescription.bad_certificate_hash_value = AlertDescription.bad_certificate_hash_value; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unacceptable_model
 * @description
 *
 * TSM (115). Fatal: `BiometricClientHello` listed only models that do not
 * match the verifier's policy. X.1084 §10.1.3, §10.2.
 * @constant
 * @type {number}
 */
export
const AlertDescription_unacceptable_model: _enum_for_AlertDescription.unacceptable_model = AlertDescription.unacceptable_model; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_model
 * @description
 *
 * TSM (115). Fatal: `BiometricClientHello` listed only models that do not
 * match the verifier's policy. X.1084 §10.1.3, §10.2.
 * @constant
 * @type {number}
 */
export
const unacceptable_model: _enum_for_AlertDescription.unacceptable_model = AlertDescription.unacceptable_model; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unacceptable_biometrics
 * @description
 *
 * TSM (116). Fatal: only unacceptable modalities, algorithms, or devices
 * (not conforming to verifier policy). X.1084 §10.1.3, §10.2.
 * @constant
 * @type {number}
 */
export
const AlertDescription_unacceptable_biometrics: _enum_for_AlertDescription.unacceptable_biometrics = AlertDescription.unacceptable_biometrics; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unacceptable_biometrics
 * @description
 *
 * TSM (116). Fatal: only unacceptable modalities, algorithms, or devices
 * (not conforming to verifier policy). X.1084 §10.1.3, §10.2.
 * @constant
 * @type {number}
 */
export
const unacceptable_biometrics: _enum_for_AlertDescription.unacceptable_biometrics = AlertDescription.unacceptable_biometrics; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AlertDescription_unsupported_biometrics
 * @description
 *
 * TSM (117). Fatal in server-comparison models: algorithms the verifier
 * cannot run. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const AlertDescription_unsupported_biometrics: _enum_for_AlertDescription.unsupported_biometrics = AlertDescription.unsupported_biometrics; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsupported_biometrics
 * @description
 *
 * TSM (117). Fatal in server-comparison models: algorithms the verifier
 * cannot run. X.1084 §10.2.
 * @constant
 * @type {number}
 */
export
const unsupported_biometrics: _enum_for_AlertDescription.unsupported_biometrics = AlertDescription.unsupported_biometrics; /* SHORT_NAMED_ENUMERATED_VALUE */
export function _decode_AlertDescription(el: _Element): AlertDescription {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case AlertDescription.close_notify: return AlertDescription.close_notify;
        case AlertDescription.unexpected_message: return AlertDescription.unexpected_message;
        case AlertDescription.bad_record_mac: return AlertDescription.bad_record_mac;
        case AlertDescription.decryption_failed: return AlertDescription.decryption_failed;
        case AlertDescription.record_overflow: return AlertDescription.record_overflow;
        case AlertDescription.decompression_failure: return AlertDescription.decompression_failure;
        case AlertDescription.handshake_failure: return AlertDescription.handshake_failure;
        case AlertDescription.bad_certificate: return AlertDescription.bad_certificate;
        case AlertDescription.unsupported_certificate: return AlertDescription.unsupported_certificate;
        case AlertDescription.certificate_revoked: return AlertDescription.certificate_revoked;
        case AlertDescription.certificate_expired: return AlertDescription.certificate_expired;
        case AlertDescription.certificate_unknown: return AlertDescription.certificate_unknown;
        case AlertDescription.illegal_parameter: return AlertDescription.illegal_parameter;
        case AlertDescription.unknown_ca: return AlertDescription.unknown_ca;
        case AlertDescription.access_denied: return AlertDescription.access_denied;
        case AlertDescription.decode_error: return AlertDescription.decode_error;
        case AlertDescription.decrypt_error: return AlertDescription.decrypt_error;
        case AlertDescription.export_restriction: return AlertDescription.export_restriction;
        case AlertDescription.protocol_version: return AlertDescription.protocol_version;
        case AlertDescription.insufficient_security: return AlertDescription.insufficient_security;
        case AlertDescription.internal_error: return AlertDescription.internal_error;
        case AlertDescription.user_canceled: return AlertDescription.user_canceled;
        case AlertDescription.no_renegotiation: return AlertDescription.no_renegotiation;
        case AlertDescription.unsupported_extension: return AlertDescription.unsupported_extension;
        case AlertDescription.certificate_unobtainable: return AlertDescription.certificate_unobtainable;
        case AlertDescription.unrecognized_name: return AlertDescription.unrecognized_name;
        case AlertDescription.bad_certificate_status_response: return AlertDescription.bad_certificate_status_response;
        case AlertDescription.bad_certificate_hash_value: return AlertDescription.bad_certificate_hash_value;
        case AlertDescription.unacceptable_model: return AlertDescription.unacceptable_model;
        case AlertDescription.unacceptable_biometrics: return AlertDescription.unacceptable_biometrics;
        case AlertDescription.unsupported_biometrics: return AlertDescription.unsupported_biometrics;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for AlertDescription.",
                el,
            );
    }
}
export const _encode_AlertDescription: $.ASN1Encoder<AlertDescription> = $._encodeEnumerated as $.ASN1Encoder<AlertDescription>;


/* eslint-enable */
