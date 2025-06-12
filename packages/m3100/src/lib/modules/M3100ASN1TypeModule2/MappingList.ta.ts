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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    PayloadLevel,
    _decode_PayloadLevel,
    _encode_PayloadLevel,
} from '../M3100ASN1TypeModule2/PayloadLevel.ta.js';
export {
    PayloadLevel,
    _decode_PayloadLevel,
    _encode_PayloadLevel,
} from '../M3100ASN1TypeModule2/PayloadLevel.ta.js';

/* START_OF_SYMBOL_DEFINITION MappingList */
/**
 * @summary MappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MappingList  ::=  SEQUENCE OF PayloadLevel
 * ```
 */
export type MappingList = PayloadLevel[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MappingList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingList */
let _cached_decoder_for_MappingList: $.ASN1Decoder<MappingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MappingList */

/* START_OF_SYMBOL_DEFINITION _decode_MappingList */
/**
 * @summary Decodes an ASN.1 element into a(n) MappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MappingList} The decoded data structure.
 */
export function _decode_MappingList(el: _Element) {
    if (!_cached_decoder_for_MappingList) {
        _cached_decoder_for_MappingList = $._decodeSequenceOf<PayloadLevel>(
            () => _decode_PayloadLevel
        );
    }
    return _cached_decoder_for_MappingList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MappingList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingList */
let _cached_encoder_for_MappingList: $.ASN1Encoder<MappingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MappingList */

/* START_OF_SYMBOL_DEFINITION _encode_MappingList */
/**
 * @summary Encodes a(n) MappingList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MappingList, encoded as an ASN.1 Element.
 */
export function _encode_MappingList(
    value: MappingList,
    elGetter: $.ASN1Encoder<MappingList>
) {
    if (!_cached_encoder_for_MappingList) {
        _cached_encoder_for_MappingList = $._encodeSequenceOf<PayloadLevel>(
            () => _encode_PayloadLevel,
            $.BER
        );
    }
    return _cached_encoder_for_MappingList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MappingList */

/* eslint-enable */
