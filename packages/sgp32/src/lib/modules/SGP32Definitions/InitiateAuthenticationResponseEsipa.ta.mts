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
import { InitiateAuthenticationOkEsipa, _decode_InitiateAuthenticationOkEsipa, _encode_InitiateAuthenticationOkEsipa } from "../SGP32Definitions/InitiateAuthenticationOkEsipa.ta.mjs";
// export { InitiateAuthenticationOkEsipa, _decode_InitiateAuthenticationOkEsipa, _encode_InitiateAuthenticationOkEsipa } from "../SGP32Definitions/InitiateAuthenticationOkEsipa.ta.mjs";
import { InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress /* IMPORTED_LONG_NAMED_INTEGER */, invalidDpAddress /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp /* IMPORTED_LONG_NAMED_INTEGER */, euiccVersionNotSupportedByDp /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, ciPKIdNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch /* IMPORTED_LONG_NAMED_INTEGER */, smdpAddressMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch /* IMPORTED_LONG_NAMED_INTEGER */, smdpOidMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidEimTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, _encode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa } from "../SGP32Definitions/InitiateAuthenticationResponseEsipa-initiateAuthenticationErrorEsipa.ta.mjs";
// export { InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidDpAddress /* IMPORTED_LONG_NAMED_INTEGER */, invalidDpAddress /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_euiccVersionNotSupportedByDp /* IMPORTED_LONG_NAMED_INTEGER */, euiccVersionNotSupportedByDp /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_ciPKIdNotSupported /* IMPORTED_LONG_NAMED_INTEGER */, ciPKIdNotSupported /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpAddressMismatch /* IMPORTED_LONG_NAMED_INTEGER */, smdpAddressMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_smdpOidMismatch /* IMPORTED_LONG_NAMED_INTEGER */, smdpOidMismatch /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_invalidEimTransactionId /* IMPORTED_LONG_NAMED_INTEGER */, invalidEimTransactionId /* IMPORTED_SHORT_NAMED_INTEGER */, InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa, _encode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa } from "../SGP32Definitions/InitiateAuthenticationResponseEsipa-initiateAuthenticationErrorEsipa.ta.mjs";


/**
 * @summary InitiateAuthenticationResponseEsipa
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateAuthenticationResponseEsipa  ::=  [57] CHOICE { -- Tag 'BF39'
 *     initiateAuthenticationOkEsipa InitiateAuthenticationOkEsipa,
 *     initiateAuthenticationErrorEsipa INTEGER {
 *         invalidDpAddress(1),
 *         euiccVersionNotSupportedByDp(2),
 *         ciPKIdNotSupported(3),
 *         smdpAddressMismatch(50),
 *         smdpOidMismatch(51),
 *         invalidEimTransactionId(52),    
 *         undefinedError(127)
 *     }
 * }
 * ```
 */
export
type InitiateAuthenticationResponseEsipa =
    { initiateAuthenticationOkEsipa: InitiateAuthenticationOkEsipa } /* CHOICE_ALT_ROOT */
    | { initiateAuthenticationErrorEsipa: InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_InitiateAuthenticationResponseEsipa: $.ASN1Decoder<InitiateAuthenticationResponseEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateAuthenticationResponseEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateAuthenticationResponseEsipa (el: _Element): InitiateAuthenticationResponseEsipa {
    if (!_cached_decoder_for_InitiateAuthenticationResponseEsipa) { _cached_decoder_for_InitiateAuthenticationResponseEsipa = $._decode_explicit<InitiateAuthenticationResponseEsipa>(() => $._decode_inextensible_choice<InitiateAuthenticationResponseEsipa>({
    "CONTEXT 0": [ "initiateAuthenticationOkEsipa", _decode_InitiateAuthenticationOkEsipa ],
    "CONTEXT 1": [ "initiateAuthenticationErrorEsipa", _decode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa ]
})); }
    return _cached_decoder_for_InitiateAuthenticationResponseEsipa(el);
}

let _cached_encoder_for_InitiateAuthenticationResponseEsipa: $.ASN1Encoder<InitiateAuthenticationResponseEsipa> | null = null;

/**
 * @summary Encodes a(n) InitiateAuthenticationResponseEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateAuthenticationResponseEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateAuthenticationResponseEsipa (value: InitiateAuthenticationResponseEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateAuthenticationResponseEsipa) { _cached_encoder_for_InitiateAuthenticationResponseEsipa = $._encode_explicit(_TagClass.context, 57, () => $._encode_choice<InitiateAuthenticationResponseEsipa>({
    "initiateAuthenticationOkEsipa": _encode_InitiateAuthenticationOkEsipa,
    "initiateAuthenticationErrorEsipa": _encode_InitiateAuthenticationResponseEsipa_initiateAuthenticationErrorEsipa,
}, $.BER), $.BER); }
    return _cached_encoder_for_InitiateAuthenticationResponseEsipa(value, elGetter);
}


/* eslint-enable */
