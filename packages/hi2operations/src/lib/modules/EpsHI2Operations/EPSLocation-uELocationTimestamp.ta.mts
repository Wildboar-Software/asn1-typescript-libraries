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
import { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";
// export { TimeStamp, _decode_TimeStamp, _encode_TimeStamp } from "../HI2Operations/TimeStamp.ta.mjs";


/**
 * @summary EPSLocation_uELocationTimestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSLocation-uELocationTimestamp ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EPSLocation_uELocationTimestamp =
    { timestamp: TimeStamp } /* CHOICE_ALT_ROOT */
    | { timestampUnknown: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_EPSLocation_uELocationTimestamp: $.ASN1Decoder<EPSLocation_uELocationTimestamp> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSLocation_uELocationTimestamp
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSLocation_uELocationTimestamp (el: _Element): EPSLocation_uELocationTimestamp {
    if (!_cached_decoder_for_EPSLocation_uELocationTimestamp) { _cached_decoder_for_EPSLocation_uELocationTimestamp = $._decode_extensible_choice<EPSLocation_uELocationTimestamp>({
    "CONTEXT 0": [ "timestamp", $._decode_explicit<TimeStamp>(() => _decode_TimeStamp) ],
    "CONTEXT 1": [ "timestampUnknown", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_EPSLocation_uELocationTimestamp(el);
}

let _cached_encoder_for_EPSLocation_uELocationTimestamp: $.ASN1Encoder<EPSLocation_uELocationTimestamp> | null = null;

/**
 * @summary Encodes a(n) EPSLocation_uELocationTimestamp into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSLocation_uELocationTimestamp, encoded as an ASN.1 Element.
 */
export
function _encode_EPSLocation_uELocationTimestamp (value: EPSLocation_uELocationTimestamp, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSLocation_uELocationTimestamp) { _cached_encoder_for_EPSLocation_uELocationTimestamp = $._encode_choice<EPSLocation_uELocationTimestamp>({
    "timestamp": $._encode_explicit(_TagClass.context, 0, () => _encode_TimeStamp, $.BER),
    "timestampUnknown": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_EPSLocation_uELocationTimestamp(value, elGetter);
}


/* eslint-enable */
