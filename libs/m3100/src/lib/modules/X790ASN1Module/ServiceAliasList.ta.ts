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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';

/* START_OF_SYMBOL_DEFINITION ServiceAliasList */
/**
 * @summary ServiceAliasList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ServiceAliasList  ::=  SET OF GraphicString(SIZE (0..64))
 * ```
 */
export type ServiceAliasList = GraphicString[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ServiceAliasList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceAliasList */
let _cached_decoder_for_ServiceAliasList: $.ASN1Decoder<ServiceAliasList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ServiceAliasList */

/* START_OF_SYMBOL_DEFINITION _decode_ServiceAliasList */
/**
 * @summary Decodes an ASN.1 element into a(n) ServiceAliasList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ServiceAliasList} The decoded data structure.
 */
export function _decode_ServiceAliasList(el: _Element) {
    if (!_cached_decoder_for_ServiceAliasList) {
        _cached_decoder_for_ServiceAliasList = $._decodeSetOf<GraphicString>(
            () => $._decodeGraphicString
        );
    }
    return _cached_decoder_for_ServiceAliasList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ServiceAliasList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceAliasList */
let _cached_encoder_for_ServiceAliasList: $.ASN1Encoder<ServiceAliasList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ServiceAliasList */

/* START_OF_SYMBOL_DEFINITION _encode_ServiceAliasList */
/**
 * @summary Encodes a(n) ServiceAliasList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceAliasList, encoded as an ASN.1 Element.
 */
export function _encode_ServiceAliasList(
    value: ServiceAliasList,
    elGetter: $.ASN1Encoder<ServiceAliasList>
) {
    if (!_cached_encoder_for_ServiceAliasList) {
        _cached_encoder_for_ServiceAliasList = $._encodeSetOf<GraphicString>(
            () => $._encodeGraphicString,
            $.BER
        );
    }
    return _cached_encoder_for_ServiceAliasList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ServiceAliasList */

/* eslint-enable */
