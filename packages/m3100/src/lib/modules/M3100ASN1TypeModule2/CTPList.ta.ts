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
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';
export {
    NWTPList,
    _decode_NWTPList,
    _encode_NWTPList,
} from '../M3100ASN1TypeModule2/NWTPList.ta';

/* START_OF_SYMBOL_DEFINITION CTPList */
/**
 * @summary CTPList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CTPList  ::=  NWTPList
 * ```
 */
export type CTPList = NWTPList; // DefinedType
/* END_OF_SYMBOL_DEFINITION CTPList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPList */
let _cached_decoder_for_CTPList: $.ASN1Decoder<CTPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CTPList */

/* START_OF_SYMBOL_DEFINITION _decode_CTPList */
/**
 * @summary Decodes an ASN.1 element into a(n) CTPList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CTPList} The decoded data structure.
 */
export function _decode_CTPList(el: _Element) {
    if (!_cached_decoder_for_CTPList) {
        _cached_decoder_for_CTPList = _decode_NWTPList;
    }
    return _cached_decoder_for_CTPList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CTPList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPList */
let _cached_encoder_for_CTPList: $.ASN1Encoder<CTPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CTPList */

/* START_OF_SYMBOL_DEFINITION _encode_CTPList */
/**
 * @summary Encodes a(n) CTPList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CTPList, encoded as an ASN.1 Element.
 */
export function _encode_CTPList(
    value: CTPList,
    elGetter: $.ASN1Encoder<CTPList>
) {
    if (!_cached_encoder_for_CTPList) {
        _cached_encoder_for_CTPList = _encode_NWTPList;
    }
    return _cached_encoder_for_CTPList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CTPList */

/* eslint-enable */
