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
import { HoldingsAndCircData, _decode_HoldingsAndCircData, _encode_HoldingsAndCircData } from "../RecordSyntax-opac/HoldingsAndCircData.ta.mjs";
// export { HoldingsAndCircData, _decode_HoldingsAndCircData, _encode_HoldingsAndCircData } from "../RecordSyntax-opac/HoldingsAndCircData.ta.mjs";


/**
 * @summary HoldingsRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HoldingsRecord  ::=   CHOICE {
 *    marcHoldingsRecord     [1] IMPLICIT EXTERNAL,
 *    holdingsAndCirc        [2] IMPLICIT HoldingsAndCircData}
 * ```
 */
export
type HoldingsRecord =
    { marcHoldingsRecord: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { holdingsAndCirc: HoldingsAndCircData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HoldingsRecord: $.ASN1Decoder<HoldingsRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HoldingsRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HoldingsRecord (el: _Element): HoldingsRecord {
    if (!_cached_decoder_for_HoldingsRecord) { _cached_decoder_for_HoldingsRecord = $._decode_inextensible_choice<HoldingsRecord>({
    "CONTEXT 1": [ "marcHoldingsRecord", $._decode_implicit<EXTERNAL>(() => $._decodeExternal) ],
    "CONTEXT 2": [ "holdingsAndCirc", $._decode_implicit<HoldingsAndCircData>(() => _decode_HoldingsAndCircData) ]
}); }
    return _cached_decoder_for_HoldingsRecord(el);
}

let _cached_encoder_for_HoldingsRecord: $.ASN1Encoder<HoldingsRecord> | null = null;

/**
 * @summary Encodes a(n) HoldingsRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HoldingsRecord, encoded as an ASN.1 Element.
 */
export
function _encode_HoldingsRecord (value: HoldingsRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HoldingsRecord) { _cached_encoder_for_HoldingsRecord = $._encode_choice<HoldingsRecord>({
    "marcHoldingsRecord": $._encode_implicit(_TagClass.context, 1, () => $._encodeExternal, $.BER),
    "holdingsAndCirc": $._encode_implicit(_TagClass.context, 2, () => _encode_HoldingsAndCircData, $.BER),
}, $.BER); }
    return _cached_encoder_for_HoldingsRecord(value, elGetter);
}


/* eslint-enable */
