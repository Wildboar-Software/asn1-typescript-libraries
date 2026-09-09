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
import { TraceItem, _decode_TraceItem, _encode_TraceItem } from "../IN-CS2-datatypes/TraceItem.ta.mjs";
// export { TraceItem, _decode_TraceItem, _encode_TraceItem } from "../IN-CS2-datatypes/TraceItem.ta.mjs";


/**
 * @summary TraceInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TraceInformation{PARAMETERS-BOUND:bound}  ::=  SEQUENCE OF TraceItem{bound}
 * ```
 */
export
type TraceInformation = TraceItem[]; // SequenceOfType

let _cached_decoder_for_TraceInformation: $.ASN1Decoder<TraceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TraceInformation (el: _Element): TraceInformation {
    if (!_cached_decoder_for_TraceInformation) { _cached_decoder_for_TraceInformation = $._decodeSequenceOf<TraceItem>(() => _decode_TraceItem); }
    return _cached_decoder_for_TraceInformation(el);
}

let _cached_encoder_for_TraceInformation: $.ASN1Encoder<TraceInformation> | null = null;

/**
 * @summary Encodes a(n) TraceInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformation, encoded as an ASN.1 Element.
 */
export
function _encode_TraceInformation (value: TraceInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TraceInformation) { _cached_encoder_for_TraceInformation = $._encodeSequenceOf<TraceItem>(() => _encode_TraceItem, $.BER); }
    return _cached_encoder_for_TraceInformation(value, elGetter);
}


/* eslint-enable */
