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
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';
export {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta';

/* START_OF_SYMBOL_DEFINITION EntryExitMTANames */
/**
 * @summary EntryExitMTANames
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EntryExitMTANames  ::=  SEQUENCE OF MTAName
 * ```
 */
export type EntryExitMTANames = MTAName[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION EntryExitMTANames */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryExitMTANames */
let _cached_decoder_for_EntryExitMTANames: $.ASN1Decoder<EntryExitMTANames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EntryExitMTANames */

/* START_OF_SYMBOL_DEFINITION _decode_EntryExitMTANames */
/**
 * @summary Decodes an ASN.1 element into a(n) EntryExitMTANames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EntryExitMTANames} The decoded data structure.
 */
export function _decode_EntryExitMTANames(el: _Element) {
    if (!_cached_decoder_for_EntryExitMTANames) {
        _cached_decoder_for_EntryExitMTANames = $._decodeSequenceOf<MTAName>(
            () => _decode_MTAName
        );
    }
    return _cached_decoder_for_EntryExitMTANames(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EntryExitMTANames */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryExitMTANames */
let _cached_encoder_for_EntryExitMTANames: $.ASN1Encoder<EntryExitMTANames> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EntryExitMTANames */

/* START_OF_SYMBOL_DEFINITION _encode_EntryExitMTANames */
/**
 * @summary Encodes a(n) EntryExitMTANames into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EntryExitMTANames, encoded as an ASN.1 Element.
 */
export function _encode_EntryExitMTANames(
    value: EntryExitMTANames,
    elGetter: $.ASN1Encoder<EntryExitMTANames>
) {
    if (!_cached_encoder_for_EntryExitMTANames) {
        _cached_encoder_for_EntryExitMTANames = $._encodeSequenceOf<MTAName>(
            () => _encode_MTAName,
            $.BER
        );
    }
    return _cached_encoder_for_EntryExitMTANames(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EntryExitMTANames */

/* eslint-enable */
