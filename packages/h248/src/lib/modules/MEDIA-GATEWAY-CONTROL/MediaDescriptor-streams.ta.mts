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
import { StreamParms, _decode_StreamParms, _encode_StreamParms } from "../MEDIA-GATEWAY-CONTROL/StreamParms.ta.mjs";
// export { StreamParms, _decode_StreamParms, _encode_StreamParms } from "../MEDIA-GATEWAY-CONTROL/StreamParms.ta.mjs";
import { StreamDescriptor, _decode_StreamDescriptor, _encode_StreamDescriptor } from "../MEDIA-GATEWAY-CONTROL/StreamDescriptor.ta.mjs";
// export { StreamDescriptor, _decode_StreamDescriptor, _encode_StreamDescriptor } from "../MEDIA-GATEWAY-CONTROL/StreamDescriptor.ta.mjs";


/**
 * @summary MediaDescriptor_streams
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaDescriptor-streams ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MediaDescriptor_streams =
    { oneStream: StreamParms } /* CHOICE_ALT_ROOT */
    | { multiStream: StreamDescriptor[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MediaDescriptor_streams: $.ASN1Decoder<MediaDescriptor_streams> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MediaDescriptor_streams
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MediaDescriptor_streams (el: _Element): MediaDescriptor_streams {
    if (!_cached_decoder_for_MediaDescriptor_streams) { _cached_decoder_for_MediaDescriptor_streams = $._decode_inextensible_choice<MediaDescriptor_streams>({
    "CONTEXT 0": [ "oneStream", $._decode_implicit<StreamParms>(() => _decode_StreamParms) ],
    "CONTEXT 1": [ "multiStream", $._decode_implicit<StreamDescriptor[]>(() => $._decodeSequenceOf<StreamDescriptor>(() => _decode_StreamDescriptor)) ]
}); }
    return _cached_decoder_for_MediaDescriptor_streams(el);
}

let _cached_encoder_for_MediaDescriptor_streams: $.ASN1Encoder<MediaDescriptor_streams> | null = null;

/**
 * @summary Encodes a(n) MediaDescriptor_streams into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MediaDescriptor_streams, encoded as an ASN.1 Element.
 */
export
function _encode_MediaDescriptor_streams (value: MediaDescriptor_streams, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MediaDescriptor_streams) { _cached_encoder_for_MediaDescriptor_streams = $._encode_choice<MediaDescriptor_streams>({
    "oneStream": $._encode_implicit(_TagClass.context, 0, () => _encode_StreamParms, $.BER),
    "multiStream": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<StreamDescriptor>(() => _encode_StreamDescriptor, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MediaDescriptor_streams(value, elGetter);
}


/* eslint-enable */
