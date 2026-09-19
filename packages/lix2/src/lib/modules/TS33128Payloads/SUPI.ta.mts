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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";


/**
 * @summary SUPI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPI  ::=  CHOICE
 * {
 *     iMSI        [1] IMSI,
 *     nAI         [2] NAI
 * }
 * ```
 */
export
type SUPI =
    { iMSI: IMSI } /* CHOICE_ALT_ROOT */
    | { nAI: NAI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SUPI: $.ASN1Decoder<SUPI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPI (el: _Element): SUPI {
    if (!_cached_decoder_for_SUPI) { _cached_decoder_for_SUPI = $._decode_inextensible_choice<SUPI>({
    "CONTEXT 1": [ "iMSI", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 2": [ "nAI", $._decode_implicit<NAI>(() => _decode_NAI) ]
}); }
    return _cached_decoder_for_SUPI(el);
}

let _cached_encoder_for_SUPI: $.ASN1Encoder<SUPI> | null = null;

/**
 * @summary Encodes a(n) SUPI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPI, encoded as an ASN.1 Element.
 */
export
function _encode_SUPI (value: SUPI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPI) { _cached_encoder_for_SUPI = $._encode_choice<SUPI>({
    "iMSI": $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER),
    "nAI": $._encode_implicit(_TagClass.context, 2, () => _encode_NAI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SUPI(value, elGetter);
}


/* eslint-enable */
