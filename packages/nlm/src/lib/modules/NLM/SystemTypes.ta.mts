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
    SystemType,
    _enum_for_SystemType,
    SystemType_eS /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eS /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SystemType_iS /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iS /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SystemType,
    _encode_SystemType,
} from '../NLM/SystemType.ta.mjs';
export {
    SystemType,
    _enum_for_SystemType,
    SystemType_eS /* IMPORTED_LONG_ENUMERATION_ITEM */,
    eS /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SystemType_iS /* IMPORTED_LONG_ENUMERATION_ITEM */,
    iS /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SystemType,
    _encode_SystemType,
} from '../NLM/SystemType.ta.mjs';

/* START_OF_SYMBOL_DEFINITION SystemTypes */
/**
 * @summary SystemTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTypes  ::=  SET OF SystemType
 * ```
 */
export type SystemTypes = SystemType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SystemTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTypes */
let _cached_decoder_for_SystemTypes: $.ASN1Decoder<SystemTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTypes} The decoded data structure.
 */
export function _decode_SystemTypes(el: _Element) {
    if (!_cached_decoder_for_SystemTypes) {
        _cached_decoder_for_SystemTypes = $._decodeSetOf<SystemType>(
            () => _decode_SystemType
        );
    }
    return _cached_decoder_for_SystemTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTypes */
let _cached_encoder_for_SystemTypes: $.ASN1Encoder<SystemTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTypes */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTypes */
/**
 * @summary Encodes a(n) SystemTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTypes, encoded as an ASN.1 Element.
 */
export function _encode_SystemTypes(
    value: SystemTypes,
    elGetter: $.ASN1Encoder<SystemTypes>
) {
    if (!_cached_encoder_for_SystemTypes) {
        _cached_encoder_for_SystemTypes = $._encodeSetOf<SystemType>(
            () => _encode_SystemType,
            $.BER
        );
    }
    return _cached_encoder_for_SystemTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTypes */

/* eslint-enable */
