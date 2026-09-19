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
import { GA_Polygon_Item, _decode_GA_Polygon_Item, _encode_GA_Polygon_Item } from "../HI2Operations/GA-Polygon-Item.ta.mjs";
// export { GA_Polygon_Item, _decode_GA_Polygon_Item, _encode_GA_Polygon_Item } from "../HI2Operations/GA-Polygon-Item.ta.mjs";


/**
 * @summary GA_Polygon
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GA-Polygon  ::=  SEQUENCE (SIZE (1..maxNrOfPoints)) OF
 *     SEQUENCE
 *     {
 *         geographicalCoordinates        GeographicalCoordinates,
 *         ...
 *     }
 * ```
 */
export
type GA_Polygon = GA_Polygon_Item[]; // SequenceOfType

let _cached_decoder_for_GA_Polygon: $.ASN1Decoder<GA_Polygon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GA_Polygon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GA_Polygon (el: _Element): GA_Polygon {
    if (!_cached_decoder_for_GA_Polygon) { _cached_decoder_for_GA_Polygon = $._decodeSequenceOf<GA_Polygon_Item>(() => _decode_GA_Polygon_Item); }
    return _cached_decoder_for_GA_Polygon(el);
}

let _cached_encoder_for_GA_Polygon: $.ASN1Encoder<GA_Polygon> | null = null;

/**
 * @summary Encodes a(n) GA_Polygon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GA_Polygon, encoded as an ASN.1 Element.
 */
export
function _encode_GA_Polygon (value: GA_Polygon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GA_Polygon) { _cached_encoder_for_GA_Polygon = $._encodeSequenceOf<GA_Polygon_Item>(() => _encode_GA_Polygon_Item, $.BER); }
    return _cached_encoder_for_GA_Polygon(value, elGetter);
}


/* eslint-enable */
