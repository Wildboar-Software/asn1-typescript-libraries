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
    ConnectResult_Item,
    _decode_ConnectResult_Item,
    _encode_ConnectResult_Item,
} from '../ASN1DefinedTypesModule/ConnectResult-Item.ta';
export {
    ConnectResult_Item,
    _decode_ConnectResult_Item,
    _encode_ConnectResult_Item,
} from '../ASN1DefinedTypesModule/ConnectResult-Item.ta';

/* START_OF_SYMBOL_DEFINITION ConnectResult */
/**
 * @summary ConnectResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectResult  ::=  SEQUENCE OF CHOICE {failed     Failed,
 *                                       connected  Connected}
 * ```
 */
export type ConnectResult = ConnectResult_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION ConnectResult */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult */
let _cached_decoder_for_ConnectResult: $.ASN1Decoder<ConnectResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ConnectResult */

/* START_OF_SYMBOL_DEFINITION _decode_ConnectResult */
/**
 * @summary Decodes an ASN.1 element into a(n) ConnectResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConnectResult} The decoded data structure.
 */
export function _decode_ConnectResult(el: _Element) {
    if (!_cached_decoder_for_ConnectResult) {
        _cached_decoder_for_ConnectResult = $._decodeSequenceOf<ConnectResult_Item>(
            () => _decode_ConnectResult_Item
        );
    }
    return _cached_decoder_for_ConnectResult(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ConnectResult */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult */
let _cached_encoder_for_ConnectResult: $.ASN1Encoder<ConnectResult> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ConnectResult */

/* START_OF_SYMBOL_DEFINITION _encode_ConnectResult */
/**
 * @summary Encodes a(n) ConnectResult into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectResult, encoded as an ASN.1 Element.
 */
export function _encode_ConnectResult(
    value: ConnectResult,
    elGetter: $.ASN1Encoder<ConnectResult>
) {
    if (!_cached_encoder_for_ConnectResult) {
        _cached_encoder_for_ConnectResult = $._encodeSequenceOf<ConnectResult_Item>(
            () => _encode_ConnectResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ConnectResult(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ConnectResult */

/* eslint-enable */
