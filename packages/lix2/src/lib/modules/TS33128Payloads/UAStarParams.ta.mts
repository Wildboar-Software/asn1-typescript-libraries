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
import { TLS12UAStarParams, _decode_TLS12UAStarParams, _encode_TLS12UAStarParams } from "../TS33128Payloads/TLS12UAStarParams.ta.mjs";
// export { TLS12UAStarParams, _decode_TLS12UAStarParams, _encode_TLS12UAStarParams } from "../TS33128Payloads/TLS12UAStarParams.ta.mjs";
import { GenericUAStarParams, _decode_GenericUAStarParams, _encode_GenericUAStarParams } from "../TS33128Payloads/GenericUAStarParams.ta.mjs";
// export { GenericUAStarParams, _decode_GenericUAStarParams, _encode_GenericUAStarParams } from "../TS33128Payloads/GenericUAStarParams.ta.mjs";
import { TLS13UAStarParams, _decode_TLS13UAStarParams, _encode_TLS13UAStarParams } from "../TS33128Payloads/TLS13UAStarParams.ta.mjs";
// export { TLS13UAStarParams, _decode_TLS13UAStarParams, _encode_TLS13UAStarParams } from "../TS33128Payloads/TLS13UAStarParams.ta.mjs";
import { DTLS12UAStarParams, _decode_DTLS12UAStarParams, _encode_DTLS12UAStarParams } from "../TS33128Payloads/DTLS12UAStarParams.ta.mjs";
// export { DTLS12UAStarParams, _decode_DTLS12UAStarParams, _encode_DTLS12UAStarParams } from "../TS33128Payloads/DTLS12UAStarParams.ta.mjs";
import { DTLS13UAStarParams, _decode_DTLS13UAStarParams, _encode_DTLS13UAStarParams } from "../TS33128Payloads/DTLS13UAStarParams.ta.mjs";
// export { DTLS13UAStarParams, _decode_DTLS13UAStarParams, _encode_DTLS13UAStarParams } from "../TS33128Payloads/DTLS13UAStarParams.ta.mjs";


/**
 * @summary UAStarParams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UAStarParams  ::=  CHOICE
 * {
 *     tls12                 [1] TLS12UAStarParams,
 *     generic               [2] GenericUAStarParams,
 *     tls13                 [3] TLS13UAStarParams,
 *     dtls12                [4] DTLS12UAStarParams,
 *     dtls13                [5] DTLS13UAStarParams
 * }
 * ```
 */
export
type UAStarParams =
    { tls12: TLS12UAStarParams } /* CHOICE_ALT_ROOT */
    | { generic: GenericUAStarParams } /* CHOICE_ALT_ROOT */
    | { tls13: TLS13UAStarParams } /* CHOICE_ALT_ROOT */
    | { dtls12: DTLS12UAStarParams } /* CHOICE_ALT_ROOT */
    | { dtls13: DTLS13UAStarParams } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UAStarParams: $.ASN1Decoder<UAStarParams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UAStarParams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UAStarParams (el: _Element): UAStarParams {
    if (!_cached_decoder_for_UAStarParams) { _cached_decoder_for_UAStarParams = $._decode_inextensible_choice<UAStarParams>({
    "CONTEXT 1": [ "tls12", $._decode_implicit<TLS12UAStarParams>(() => _decode_TLS12UAStarParams) ],
    "CONTEXT 2": [ "generic", $._decode_implicit<GenericUAStarParams>(() => _decode_GenericUAStarParams) ],
    "CONTEXT 3": [ "tls13", $._decode_implicit<TLS13UAStarParams>(() => _decode_TLS13UAStarParams) ],
    "CONTEXT 4": [ "dtls12", $._decode_implicit<DTLS12UAStarParams>(() => _decode_DTLS12UAStarParams) ],
    "CONTEXT 5": [ "dtls13", $._decode_implicit<DTLS13UAStarParams>(() => _decode_DTLS13UAStarParams) ]
}); }
    return _cached_decoder_for_UAStarParams(el);
}

let _cached_encoder_for_UAStarParams: $.ASN1Encoder<UAStarParams> | null = null;

/**
 * @summary Encodes a(n) UAStarParams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UAStarParams, encoded as an ASN.1 Element.
 */
export
function _encode_UAStarParams (value: UAStarParams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UAStarParams) { _cached_encoder_for_UAStarParams = $._encode_choice<UAStarParams>({
    "tls12": $._encode_implicit(_TagClass.context, 1, () => _encode_TLS12UAStarParams, $.BER),
    "generic": $._encode_implicit(_TagClass.context, 2, () => _encode_GenericUAStarParams, $.BER),
    "tls13": $._encode_implicit(_TagClass.context, 3, () => _encode_TLS13UAStarParams, $.BER),
    "dtls12": $._encode_implicit(_TagClass.context, 4, () => _encode_DTLS12UAStarParams, $.BER),
    "dtls13": $._encode_implicit(_TagClass.context, 5, () => _encode_DTLS13UAStarParams, $.BER),
}, $.BER); }
    return _cached_encoder_for_UAStarParams(value, elGetter);
}


/* eslint-enable */
