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
import { AuthenticateClientOkEs11, _decode_AuthenticateClientOkEs11, _encode_AuthenticateClientOkEs11 } from "../RSPDefinitions/AuthenticateClientOkEs11.ta.mjs";
// export { AuthenticateClientOkEs11, _decode_AuthenticateClientOkEs11, _encode_AuthenticateClientOkEs11 } from "../RSPDefinitions/AuthenticateClientOkEs11.ta.mjs";
import { AuthenticateClientResponseEs11_authenticateClientError, AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown /* IMPORTED_LONG_NAMED_INTEGER */, eventIdUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateClientResponseEs11_authenticateClientError, _encode_AuthenticateClientResponseEs11_authenticateClientError } from "../RSPDefinitions/AuthenticateClientResponseEs11-authenticateClientError.ta.mjs";
// export { AuthenticateClientResponseEs11_authenticateClientError, AuthenticateClientResponseEs11_authenticateClientError_eumCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_eumCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, eumCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccCertificateExpired /* IMPORTED_LONG_NAMED_INTEGER */, euiccCertificateExpired /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_euiccSignatureInvalid /* IMPORTED_LONG_NAMED_INTEGER */, euiccSignatureInvalid /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_eventIdUnknown /* IMPORTED_LONG_NAMED_INTEGER */, eventIdUnknown /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_invalidTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, AuthenticateClientResponseEs11_authenticateClientError_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_AuthenticateClientResponseEs11_authenticateClientError, _encode_AuthenticateClientResponseEs11_authenticateClientError } from "../RSPDefinitions/AuthenticateClientResponseEs11-authenticateClientError.ta.mjs";


/**
 * @summary AuthenticateClientResponseEs11
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateClientResponseEs11  ::=  [64] CHOICE {  -- Tag 'BF40'
 *     authenticateClientOk AuthenticateClientOkEs11,
 *     authenticateClientError INTEGER {
 *         eumCertificateInvalid(1),
 *         eumCertificateExpired(2),
 *         euiccCertificateInvalid(3),
 *         euiccCertificateExpired(4),
 *         euiccSignatureInvalid(5),
 *         eventIdUnknown(6),
 *         invalidTransactionId(7),
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type AuthenticateClientResponseEs11 =
    { authenticateClientOk: AuthenticateClientOkEs11 } /* CHOICE_ALT_ROOT */
    | { authenticateClientError: AuthenticateClientResponseEs11_authenticateClientError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateClientResponseEs11: $.ASN1Decoder<AuthenticateClientResponseEs11> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateClientResponseEs11
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateClientResponseEs11 (el: _Element): AuthenticateClientResponseEs11 {
    if (!_cached_decoder_for_AuthenticateClientResponseEs11) { _cached_decoder_for_AuthenticateClientResponseEs11 = $._decode_explicit<AuthenticateClientResponseEs11>(() => $._decode_inextensible_choice<AuthenticateClientResponseEs11>({
    "CONTEXT 0": [ "authenticateClientOk", _decode_AuthenticateClientOkEs11 ],
    "CONTEXT 1": [ "authenticateClientError", _decode_AuthenticateClientResponseEs11_authenticateClientError ]
})); }
    return _cached_decoder_for_AuthenticateClientResponseEs11(el);
}

let _cached_encoder_for_AuthenticateClientResponseEs11: $.ASN1Encoder<AuthenticateClientResponseEs11> | null = null;

/**
 * @summary Encodes a(n) AuthenticateClientResponseEs11 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateClientResponseEs11, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateClientResponseEs11 (value: AuthenticateClientResponseEs11, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateClientResponseEs11) { _cached_encoder_for_AuthenticateClientResponseEs11 = $._encode_explicit(_TagClass.context, 64, () => $._encode_choice<AuthenticateClientResponseEs11>({
    "authenticateClientOk": _encode_AuthenticateClientOkEs11,
    "authenticateClientError": _encode_AuthenticateClientResponseEs11_authenticateClientError,
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateClientResponseEs11(value, elGetter);
}


/* eslint-enable */
