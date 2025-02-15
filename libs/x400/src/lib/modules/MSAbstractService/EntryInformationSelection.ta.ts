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
    AttributeSelection,
    _decode_AttributeSelection,
    _encode_AttributeSelection,
} from '../MSAbstractService/AttributeSelection.ta';
export {
    AttributeSelection,
    _decode_AttributeSelection,
    _encode_AttributeSelection,
} from '../MSAbstractService/AttributeSelection.ta';

/* START_OF_SYMBOL_DEFINITION EntryInformationSelection */
/**
 * @summary EntryInformationSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryInformationSelection  ::=  SET SIZE (0..ub-per-entry) OF AttributeSelection
 * ```
 */
export type EntryInformationSelection = AttributeSelection[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection */
let _cached_decoder_for_EntryInformationSelection: $.ASN1Decoder<EntryInformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryInformationSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryInformationSelection} The decoded data structure.
 */
export function _decode_EntryInformationSelection(el: _Element) {
    if (!_cached_decoder_for_EntryInformationSelection) {
        _cached_decoder_for_EntryInformationSelection = $._decodeSetOf<AttributeSelection>(
            () => _decode_AttributeSelection
        );
    }
    return _cached_decoder_for_EntryInformationSelection(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection */
let _cached_encoder_for_EntryInformationSelection: $.ASN1Encoder<EntryInformationSelection> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryInformationSelection */

/* START_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection */
/**
 * @summary Encodes a(n) EntryInformationSelection into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryInformationSelection, encoded as an ASN.1 Element.
 */
export function _encode_EntryInformationSelection(
    value: EntryInformationSelection,
    elGetter: $.ASN1Encoder<EntryInformationSelection>
) {
    if (!_cached_encoder_for_EntryInformationSelection) {
        _cached_encoder_for_EntryInformationSelection = $._encodeSetOf<AttributeSelection>(
            () => _encode_AttributeSelection,
            $.BER
        );
    }
    return _cached_encoder_for_EntryInformationSelection(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryInformationSelection */

/* eslint-enable */
