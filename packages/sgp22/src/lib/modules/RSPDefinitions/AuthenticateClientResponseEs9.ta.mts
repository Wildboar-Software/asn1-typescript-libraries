/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
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
import { AuthenticateClientOk, _decode_AuthenticateClientOk, _encode_AuthenticateClientOk } from "../RSPDefinitions/AuthenticateClientOk.ta.mjs";
// export { AuthenticateClientOk, _decode_AuthenticateClientOk, _encode_AuthenticateClientOk } from "../RSPDefinitions/AuthenticateClientOk.ta.mjs";
import { AuthenticateClientResponseEs9_authenticateClientError, AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused /* IMPORTED_LONG_NAMED_INTEGER */, matchingIdRefused /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_eidMismatch /* IMPORTED_LONG_NAMED_INTEGER */, eidMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile /* IMPORTED_LONG_NAMED_INTEGER */, noEligibleProfile /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired /* IMPORTED_LONG_NAMED_INTEGER */, downloadOrderExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateClientResponseEs9_authenticateClientError, _encode_AuthenticateClientResponseEs9_authenticateClientError } from "../RSPDefinitions/AuthenticateClientResponseEs9-authenticateClientError.ta.mjs";
// export { AuthenticateClientResponseEs9_authenticateClientError, AuthenticateClientResponseEs9_authenticateClientError_eumCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_eumCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_matchingIdRefused /* IMPORTED_LONG_NAMED_INTEGER */, matchingIdRefused /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_eidMismatch /* IMPORTED_LONG_NAMED_INTEGER */, eidMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_noEligibleProfile /* IMPORTED_LONG_NAMED_INTEGER */, noEligibleProfile /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_ciPKUnknown /* IMPORTED_LONG_NAMED_INTEGER */, ciPKUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_insufficientMemory /* IMPORTED_LONG_NAMED_INTEGER */, insufficientMemory /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_downloadOrderExpired /* IMPORTED_LONG_NAMED_INTEGER */, downloadOrderExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs9_authenticateClientError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateClientResponseEs9_authenticateClientError, _encode_AuthenticateClientResponseEs9_authenticateClientError } from "../RSPDefinitions/AuthenticateClientResponseEs9-authenticateClientError.ta.mjs";
import { AuthenticateClientOkAcr, _decode_AuthenticateClientOkAcr, _encode_AuthenticateClientOkAcr } from "../RSPDefinitions/AuthenticateClientOkAcr.ta.mjs";
// export { AuthenticateClientOkAcr, _decode_AuthenticateClientOkAcr, _encode_AuthenticateClientOkAcr } from "../RSPDefinitions/AuthenticateClientOkAcr.ta.mjs";


/**
 * @summary AuthenticateClientResponseEs9
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs9  ::=  [59] CHOICE {  -- Tag 'BF3B'
 *     authenticateClientOk [0] AuthenticateClientOk,
 *     authenticateClientError [1] INTEGER {
 *         eumCertificateInvalid(1),
 *         eumCertificateExpired(2),
 *         euiccCertificateInvalid(3),
 *         euiccCertificateExpired(4),
 *         euiccSignatureInvalid(5),
 *         matchingIdRefused(6),
 *         eidMismatch(7),
 *         noEligibleProfile(8),
 *         ciPKUnknown(9),
 *         invalidTransactionId(10),
 *         insufficientMemory(11),-- Note: values 12-17 are reserved for future versions of SGP.22
 *         downloadOrderExpired(18),
 *         undefinedError(127)
 *     },
 *     authenticateClientOkAcr [5] AuthenticateClientOkAcr
 * 
 * }
 * ```
 */
export
type AuthenticateClientResponseEs9 =
    { authenticateClientOk: AuthenticateClientOk } /* CHOICE_ALT_ROOT */
    | { authenticateClientError: AuthenticateClientResponseEs9_authenticateClientError } /* CHOICE_ALT_ROOT */
    | { authenticateClientOkAcr: AuthenticateClientOkAcr } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateClientResponseEs9: $.ASN1Decoder<AuthenticateClientResponseEs9> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEs9
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEs9 (el: _Element): AuthenticateClientResponseEs9 {
    if (!_cached_decoder_for_AuthenticateClientResponseEs9) { _cached_decoder_for_AuthenticateClientResponseEs9 = $._decode_explicit<AuthenticateClientResponseEs9>(() => $._decode_inextensible_choice<AuthenticateClientResponseEs9>({
    "CONTEXT 0": [ "authenticateClientOk", $._decode_implicit<AuthenticateClientOk>(() => _decode_AuthenticateClientOk) ],
    "CONTEXT 1": [ "authenticateClientError", $._decode_implicit<AuthenticateClientResponseEs9_authenticateClientError>(() => _decode_AuthenticateClientResponseEs9_authenticateClientError) ],
    "CONTEXT 5": [ "authenticateClientOkAcr", $._decode_implicit<AuthenticateClientOkAcr>(() => _decode_AuthenticateClientOkAcr) ]
})); }
    return _cached_decoder_for_AuthenticateClientResponseEs9(el);
}

let _cached_encoder_for_AuthenticateClientResponseEs9: $.ASN1Encoder<AuthenticateClientResponseEs9> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEs9 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEs9, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEs9 (value: AuthenticateClientResponseEs9, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEs9) { _cached_encoder_for_AuthenticateClientResponseEs9 = $._encode_explicit(_TagClass.context, 59, () => $._encode_choice<AuthenticateClientResponseEs9>({
    "authenticateClientOk": $._encode_implicit(_TagClass.context, 0, () => _encode_AuthenticateClientOk, $.BER),
    "authenticateClientError": $._encode_implicit(_TagClass.context, 1, () => _encode_AuthenticateClientResponseEs9_authenticateClientError, $.BER),
    "authenticateClientOkAcr": $._encode_implicit(_TagClass.context, 5, () => _encode_AuthenticateClientOkAcr, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateClientResponseEs9(value, elGetter);
}


/* eslint-enable */
