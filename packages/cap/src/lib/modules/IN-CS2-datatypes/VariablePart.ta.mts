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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS2-datatypes/Integer4.ta.mjs";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary VariablePart
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VariablePart{PARAMETERS-BOUND:bound}  ::=  CHOICE {
 *   integer  [0]  Integer4,
 *   number   [1]  Digits{bound}, -- Generic digits
 *   time     [2]  OCTET STRING(SIZE (2)), -- HH:MM, BCD coded
 *   date     [3]  OCTET STRING(SIZE (3)), -- YYMMDD, BCD coded
 *   price    [4]  OCTET STRING(SIZE (4))
 * }
 * ```
 */
export
type VariablePart =
    { integer: Integer4 } /* CHOICE_ALT_ROOT */
    | { number_: Digits } /* CHOICE_ALT_ROOT */
    | { time: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { date: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { price: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VariablePart: $.ASN1Decoder<VariablePart> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VariablePart
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VariablePart (el: _Element): VariablePart {
    if (!_cached_decoder_for_VariablePart) { _cached_decoder_for_VariablePart = $._decode_inextensible_choice<VariablePart>({
    "CONTEXT 0": [ "integer", $._decode_implicit<Integer4>(() => _decode_Integer4) ],
    "CONTEXT 1": [ "number_", $._decode_implicit<Digits>(() => _decode_Digits) ],
    "CONTEXT 2": [ "time", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 3": [ "date", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "price", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_VariablePart(el);
}

let _cached_encoder_for_VariablePart: $.ASN1Encoder<VariablePart> | null = null;

/**
 * @summary Encodes a(n) VariablePart into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VariablePart, encoded as an ASN.1 Element.
 */
export
function _encode_VariablePart (value: VariablePart, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VariablePart) { _cached_encoder_for_VariablePart = $._encode_choice<VariablePart>({
    "integer": $._encode_implicit(_TagClass.context, 0, () => _encode_Integer4, $.BER),
    "number_": $._encode_implicit(_TagClass.context, 1, () => _encode_Digits, $.BER),
    "time": $._encode_implicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER),
    "date": $._encode_implicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER),
    "price": $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_VariablePart(value, elGetter);
}


/* eslint-enable */
