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
    PortSignalRateAndMappingList_Item,
    _decode_PortSignalRateAndMappingList_Item,
    _encode_PortSignalRateAndMappingList_Item,
} from '../M3100ASN1TypeModule2/PortSignalRateAndMappingList-Item.ta';
export {
    PortSignalRateAndMappingList_Item,
    _decode_PortSignalRateAndMappingList_Item,
    _encode_PortSignalRateAndMappingList_Item,
} from '../M3100ASN1TypeModule2/PortSignalRateAndMappingList-Item.ta';

/* START_OF_SYMBOL_DEFINITION PortSignalRateAndMappingList */
/**
 * @summary PortSignalRateAndMappingList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PortSignalRateAndMappingList  ::=
 *   SET OF
 *     SEQUENCE {portId       NameType,
 *               signalRate   SignalRate,
 *               mappingList  MappingList OPTIONAL}
 * ```
 */
export type PortSignalRateAndMappingList = PortSignalRateAndMappingList_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PortSignalRateAndMappingList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PortSignalRateAndMappingList */
let _cached_decoder_for_PortSignalRateAndMappingList: $.ASN1Decoder<PortSignalRateAndMappingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PortSignalRateAndMappingList */

/* START_OF_SYMBOL_DEFINITION _decode_PortSignalRateAndMappingList */
/**
 * @summary Decodes an ASN.1 element into a(n) PortSignalRateAndMappingList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PortSignalRateAndMappingList} The decoded data structure.
 */
export function _decode_PortSignalRateAndMappingList(el: _Element) {
    if (!_cached_decoder_for_PortSignalRateAndMappingList) {
        _cached_decoder_for_PortSignalRateAndMappingList = $._decodeSetOf<PortSignalRateAndMappingList_Item>(
            () => _decode_PortSignalRateAndMappingList_Item
        );
    }
    return _cached_decoder_for_PortSignalRateAndMappingList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PortSignalRateAndMappingList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PortSignalRateAndMappingList */
let _cached_encoder_for_PortSignalRateAndMappingList: $.ASN1Encoder<PortSignalRateAndMappingList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PortSignalRateAndMappingList */

/* START_OF_SYMBOL_DEFINITION _encode_PortSignalRateAndMappingList */
/**
 * @summary Encodes a(n) PortSignalRateAndMappingList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PortSignalRateAndMappingList, encoded as an ASN.1 Element.
 */
export function _encode_PortSignalRateAndMappingList(
    value: PortSignalRateAndMappingList,
    elGetter: $.ASN1Encoder<PortSignalRateAndMappingList>
) {
    if (!_cached_encoder_for_PortSignalRateAndMappingList) {
        _cached_encoder_for_PortSignalRateAndMappingList = $._encodeSetOf<PortSignalRateAndMappingList_Item>(
            () => _encode_PortSignalRateAndMappingList_Item,
            $.BER
        );
    }
    return _cached_encoder_for_PortSignalRateAndMappingList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PortSignalRateAndMappingList */

/* eslint-enable */
