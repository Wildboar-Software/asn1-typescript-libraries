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
import {
    Bandwidth_Item,
    _decode_Bandwidth_Item,
    _encode_Bandwidth_Item,
} from '../M3100ASN1TypeModule2/Bandwidth-Item.ta';
export {
    Bandwidth_Item,
    _decode_Bandwidth_Item,
    _encode_Bandwidth_Item,
} from '../M3100ASN1TypeModule2/Bandwidth-Item.ta';

/* START_OF_SYMBOL_DEFINITION Bandwidth */
/**
 * @summary Bandwidth
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Bandwidth  ::=  SEQUENCE OF SEQUENCE {ingress  INTEGER,
 *                                     egress   INTEGER}
 * ```
 */
export type Bandwidth = Bandwidth_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION Bandwidth */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Bandwidth */
let _cached_decoder_for_Bandwidth: $.ASN1Decoder<Bandwidth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Bandwidth */

/* START_OF_SYMBOL_DEFINITION _decode_Bandwidth */
/**
 * @summary Decodes an ASN.1 element into a(n) Bandwidth
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Bandwidth} The decoded data structure.
 */
export function _decode_Bandwidth(el: _Element) {
    if (!_cached_decoder_for_Bandwidth) {
        _cached_decoder_for_Bandwidth = $._decodeSequenceOf<Bandwidth_Item>(
            () => _decode_Bandwidth_Item
        );
    }
    return _cached_decoder_for_Bandwidth(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Bandwidth */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Bandwidth */
let _cached_encoder_for_Bandwidth: $.ASN1Encoder<Bandwidth> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Bandwidth */

/* START_OF_SYMBOL_DEFINITION _encode_Bandwidth */
/**
 * @summary Encodes a(n) Bandwidth into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Bandwidth, encoded as an ASN.1 Element.
 */
export function _encode_Bandwidth(
    value: Bandwidth,
    elGetter: $.ASN1Encoder<Bandwidth>
) {
    if (!_cached_encoder_for_Bandwidth) {
        _cached_encoder_for_Bandwidth = $._encodeSequenceOf<Bandwidth_Item>(
            () => _encode_Bandwidth_Item,
            $.BER
        );
    }
    return _cached_encoder_for_Bandwidth(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Bandwidth */

/* eslint-enable */
