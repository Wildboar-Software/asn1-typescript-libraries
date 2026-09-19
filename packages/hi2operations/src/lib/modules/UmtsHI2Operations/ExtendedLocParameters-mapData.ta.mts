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



/**
 * @summary ExtendedLocParameters_mapData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedLocParameters-mapData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ExtendedLocParameters_mapData =
    { base64Map: PrintableString } /* CHOICE_ALT_ROOT */
    | { url: PrintableString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ExtendedLocParameters_mapData: $.ASN1Decoder<ExtendedLocParameters_mapData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedLocParameters_mapData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtendedLocParameters_mapData (el: _Element): ExtendedLocParameters_mapData {
    if (!_cached_decoder_for_ExtendedLocParameters_mapData) { _cached_decoder_for_ExtendedLocParameters_mapData = $._decode_inextensible_choice<ExtendedLocParameters_mapData>({
    "CONTEXT 0": [ "base64Map", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ],
    "CONTEXT 1": [ "url", $._decode_implicit<PrintableString>(() => $._decodePrintableString) ]
}); }
    return _cached_decoder_for_ExtendedLocParameters_mapData(el);
}

let _cached_encoder_for_ExtendedLocParameters_mapData: $.ASN1Encoder<ExtendedLocParameters_mapData> | null = null;

/**
 * @summary Encodes a(n) ExtendedLocParameters_mapData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedLocParameters_mapData, encoded as an ASN.1 Element.
 */
export
function _encode_ExtendedLocParameters_mapData (value: ExtendedLocParameters_mapData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtendedLocParameters_mapData) { _cached_encoder_for_ExtendedLocParameters_mapData = $._encode_choice<ExtendedLocParameters_mapData>({
    "base64Map": $._encode_implicit(_TagClass.context, 0, () => $._encodePrintableString, $.BER),
    "url": $._encode_implicit(_TagClass.context, 1, () => $._encodePrintableString, $.BER),
}, $.BER); }
    return _cached_encoder_for_ExtendedLocParameters_mapData(value, elGetter);
}


/* eslint-enable */
