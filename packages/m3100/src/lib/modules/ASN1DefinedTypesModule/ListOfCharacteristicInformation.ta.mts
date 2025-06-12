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
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';
export {
    CharacteristicInformation,
    _decode_CharacteristicInformation,
    _encode_CharacteristicInformation,
} from '../ASN1DefinedTypesModule/CharacteristicInformation.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ListOfCharacteristicInformation */
/**
 * @summary ListOfCharacteristicInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ListOfCharacteristicInformation  ::=  SET OF CharacteristicInformation
 * ```
 */
export type ListOfCharacteristicInformation = CharacteristicInformation[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ListOfCharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfCharacteristicInformation */
let _cached_decoder_for_ListOfCharacteristicInformation: $.ASN1Decoder<ListOfCharacteristicInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ListOfCharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _decode_ListOfCharacteristicInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) ListOfCharacteristicInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ListOfCharacteristicInformation} The decoded data structure.
 */
export function _decode_ListOfCharacteristicInformation(el: _Element) {
    if (!_cached_decoder_for_ListOfCharacteristicInformation) {
        _cached_decoder_for_ListOfCharacteristicInformation = $._decodeSetOf<CharacteristicInformation>(
            () => _decode_CharacteristicInformation
        );
    }
    return _cached_decoder_for_ListOfCharacteristicInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ListOfCharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfCharacteristicInformation */
let _cached_encoder_for_ListOfCharacteristicInformation: $.ASN1Encoder<ListOfCharacteristicInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ListOfCharacteristicInformation */

/* START_OF_SYMBOL_DEFINITION _encode_ListOfCharacteristicInformation */
/**
 * @summary Encodes a(n) ListOfCharacteristicInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListOfCharacteristicInformation, encoded as an ASN.1 Element.
 */
export function _encode_ListOfCharacteristicInformation(
    value: ListOfCharacteristicInformation,
    elGetter: $.ASN1Encoder<ListOfCharacteristicInformation>
) {
    if (!_cached_encoder_for_ListOfCharacteristicInformation) {
        _cached_encoder_for_ListOfCharacteristicInformation = $._encodeSetOf<CharacteristicInformation>(
            () => _encode_CharacteristicInformation,
            $.BER
        );
    }
    return _cached_encoder_for_ListOfCharacteristicInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ListOfCharacteristicInformation */

/* eslint-enable */
