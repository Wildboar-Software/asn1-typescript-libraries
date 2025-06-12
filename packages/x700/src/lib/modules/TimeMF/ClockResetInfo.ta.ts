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
    ClockValue,
    _decode_ClockValue,
    _encode_ClockValue,
} from '../TimeMF/ClockValue.ta.js';
export {
    ClockValue,
    _decode_ClockValue,
    _encode_ClockValue,
} from '../TimeMF/ClockValue.ta.js';

/* START_OF_SYMBOL_DEFINITION ClockResetInfo */
/**
 * @summary ClockResetInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockResetInfo  ::=  ClockValue
 * ```
 */
export type ClockResetInfo = ClockValue; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockResetInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockResetInfo */
let _cached_decoder_for_ClockResetInfo: $.ASN1Decoder<ClockResetInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockResetInfo */

/* START_OF_SYMBOL_DEFINITION _decode_ClockResetInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockResetInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockResetInfo} The decoded data structure.
 */
export function _decode_ClockResetInfo(el: _Element) {
    if (!_cached_decoder_for_ClockResetInfo) {
        _cached_decoder_for_ClockResetInfo = _decode_ClockValue;
    }
    return _cached_decoder_for_ClockResetInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockResetInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockResetInfo */
let _cached_encoder_for_ClockResetInfo: $.ASN1Encoder<ClockResetInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockResetInfo */

/* START_OF_SYMBOL_DEFINITION _encode_ClockResetInfo */
/**
 * @summary Encodes a(n) ClockResetInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockResetInfo, encoded as an ASN.1 Element.
 */
export function _encode_ClockResetInfo(
    value: ClockResetInfo,
    elGetter: $.ASN1Encoder<ClockResetInfo>
) {
    if (!_cached_encoder_for_ClockResetInfo) {
        _cached_encoder_for_ClockResetInfo = _encode_ClockValue;
    }
    return _cached_encoder_for_ClockResetInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockResetInfo */

/* eslint-enable */
