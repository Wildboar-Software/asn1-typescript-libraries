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

/* START_OF_SYMBOL_DEFINITION TSelect */
/**
 * @summary TSelect
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSelect  ::=  OCTET STRING(SIZE (4))
 * ```
 */
export type TSelect = OCTET_STRING; // OctetStringType
/* END_OF_SYMBOL_DEFINITION TSelect */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSelect */
let _cached_decoder_for_TSelect: $.ASN1Decoder<TSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSelect */

/* START_OF_SYMBOL_DEFINITION _decode_TSelect */
/**
 * @summary Decodes an ASN.1 element into a(n) TSelect
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TSelect} The decoded data structure.
 */
export function _decode_TSelect(el: _Element) {
    if (!_cached_decoder_for_TSelect) {
        _cached_decoder_for_TSelect = $._decodeOctetString;
    }
    return _cached_decoder_for_TSelect(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TSelect */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSelect */
let _cached_encoder_for_TSelect: $.ASN1Encoder<TSelect> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSelect */

/* START_OF_SYMBOL_DEFINITION _encode_TSelect */
/**
 * @summary Encodes a(n) TSelect into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSelect, encoded as an ASN.1 Element.
 */
export function _encode_TSelect(
    value: TSelect,
    elGetter: $.ASN1Encoder<TSelect>
) {
    if (!_cached_encoder_for_TSelect) {
        _cached_encoder_for_TSelect = $._encodeOctetString;
    }
    return _cached_encoder_for_TSelect(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TSelect */

/* eslint-enable */
