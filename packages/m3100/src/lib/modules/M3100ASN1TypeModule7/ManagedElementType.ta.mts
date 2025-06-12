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
    ManagedElementType_Item,
    _decode_ManagedElementType_Item,
    _encode_ManagedElementType_Item,
} from '../M3100ASN1TypeModule7/ManagedElementType-Item.ta.mjs';
export {
    ManagedElementType_Item,
    _decode_ManagedElementType_Item,
    _encode_ManagedElementType_Item,
} from '../M3100ASN1TypeModule7/ManagedElementType-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ManagedElementType */
/**
 * @summary ManagedElementType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedElementType  ::=
 *   SET OF CHOICE {meTypeString  GraphicString,
 *                  meTypeOID     OBJECT IDENTIFIER}
 * ```
 */
export type ManagedElementType = ManagedElementType_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ManagedElementType */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedElementType */
let _cached_decoder_for_ManagedElementType: $.ASN1Decoder<ManagedElementType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedElementType */

/* START_OF_SYMBOL_DEFINITION _decode_ManagedElementType */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagedElementType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedElementType} The decoded data structure.
 */
export function _decode_ManagedElementType(el: _Element) {
    if (!_cached_decoder_for_ManagedElementType) {
        _cached_decoder_for_ManagedElementType = $._decodeSetOf<ManagedElementType_Item>(
            () => _decode_ManagedElementType_Item
        );
    }
    return _cached_decoder_for_ManagedElementType(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagedElementType */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedElementType */
let _cached_encoder_for_ManagedElementType: $.ASN1Encoder<ManagedElementType> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedElementType */

/* START_OF_SYMBOL_DEFINITION _encode_ManagedElementType */
/**
 * @summary Encodes a(n) ManagedElementType into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedElementType, encoded as an ASN.1 Element.
 */
export function _encode_ManagedElementType(
    value: ManagedElementType,
    elGetter: $.ASN1Encoder<ManagedElementType>
) {
    if (!_cached_encoder_for_ManagedElementType) {
        _cached_encoder_for_ManagedElementType = $._encodeSetOf<ManagedElementType_Item>(
            () => _encode_ManagedElementType_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ManagedElementType(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagedElementType */

/* eslint-enable */
