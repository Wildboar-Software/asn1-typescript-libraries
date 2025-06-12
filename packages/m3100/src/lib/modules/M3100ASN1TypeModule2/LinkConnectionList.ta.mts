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
    ConnectionList,
    _decode_ConnectionList,
    _encode_ConnectionList,
} from '../M3100ASN1TypeModule2/ConnectionList.ta.mjs';
export {
    ConnectionList,
    _decode_ConnectionList,
    _encode_ConnectionList,
} from '../M3100ASN1TypeModule2/ConnectionList.ta.mjs';

/* START_OF_SYMBOL_DEFINITION LinkConnectionList */
/**
 * @summary LinkConnectionList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LinkConnectionList  ::=  ConnectionList
 * ```
 */
export type LinkConnectionList = ConnectionList; // DefinedType
/* END_OF_SYMBOL_DEFINITION LinkConnectionList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkConnectionList */
let _cached_decoder_for_LinkConnectionList: $.ASN1Decoder<LinkConnectionList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_LinkConnectionList */

/* START_OF_SYMBOL_DEFINITION _decode_LinkConnectionList */
/**
 * @summary Decodes an ASN.1 element into a(n) LinkConnectionList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LinkConnectionList} The decoded data structure.
 */
export function _decode_LinkConnectionList(el: _Element) {
    if (!_cached_decoder_for_LinkConnectionList) {
        _cached_decoder_for_LinkConnectionList = _decode_ConnectionList;
    }
    return _cached_decoder_for_LinkConnectionList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_LinkConnectionList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkConnectionList */
let _cached_encoder_for_LinkConnectionList: $.ASN1Encoder<LinkConnectionList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_LinkConnectionList */

/* START_OF_SYMBOL_DEFINITION _encode_LinkConnectionList */
/**
 * @summary Encodes a(n) LinkConnectionList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LinkConnectionList, encoded as an ASN.1 Element.
 */
export function _encode_LinkConnectionList(
    value: LinkConnectionList,
    elGetter: $.ASN1Encoder<LinkConnectionList>
) {
    if (!_cached_encoder_for_LinkConnectionList) {
        _cached_encoder_for_LinkConnectionList = _encode_ConnectionList;
    }
    return _cached_encoder_for_LinkConnectionList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_LinkConnectionList */

/* eslint-enable */
