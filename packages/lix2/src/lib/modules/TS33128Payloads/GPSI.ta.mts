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
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary GPSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPSI  ::=  CHOICE
 * {
 *     mSISDN      [1] MSISDN,
 *     nAI         [2] NAI
 * }
 * ```
 */
export
type GPSI =
    { mSISDN: MSISDN } /* CHOICE_ALT_ROOT */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_GPSI: $.ASN1Decoder<GPSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPSI (el: _Element): GPSI {
    if (!_cached_decoder_for_GPSI) { _cached_decoder_for_GPSI = $._decode_inextensible_choice<GPSI>({
    "CONTEXT 1": [ "mSISDN", $._decode_implicit<MSISDN>(() => _decode_MSISDN) ],
    "CONTEXT 2": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
}); }
    return _cached_decoder_for_GPSI(el);
}

let _cached_encoder_for_GPSI: $.ASN1Encoder<GPSI> | null = null;

/**
 * @summary Encodes a(n) GPSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPSI, encoded as an ASN.1 Element.
 */
export
function _encode_GPSI (value: GPSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPSI) { _cached_encoder_for_GPSI = $._encode_choice<GPSI>({
    "mSISDN": $._encode_implicit(_TagClass.context, 1, () => _encode_MSISDN, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_GPSI(value, elGetter);
}


/* eslint-enable */
