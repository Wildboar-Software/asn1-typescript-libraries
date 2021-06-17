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
    IndividualSwitchOver,
    _decode_IndividualSwitchOver,
    _encode_IndividualSwitchOver,
} from '../ASN1DefinedTypesModule/IndividualSwitchOver.ta';
export {
    IndividualSwitchOver,
    _decode_IndividualSwitchOver,
    _encode_IndividualSwitchOver,
} from '../ASN1DefinedTypesModule/IndividualSwitchOver.ta';

/* START_OF_SYMBOL_DEFINITION SwitchOverInformation */
/**
 * @summary SwitchOverInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SwitchOverInformation  ::=  SEQUENCE OF IndividualSwitchOver
 * ```
 */
export type SwitchOverInformation = IndividualSwitchOver[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SwitchOverInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchOverInformation */
let _cached_decoder_for_SwitchOverInformation: $.ASN1Decoder<SwitchOverInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SwitchOverInformation */

/* START_OF_SYMBOL_DEFINITION _decode_SwitchOverInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) SwitchOverInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SwitchOverInformation} The decoded data structure.
 */
export function _decode_SwitchOverInformation(el: _Element) {
    if (!_cached_decoder_for_SwitchOverInformation) {
        _cached_decoder_for_SwitchOverInformation = $._decodeSequenceOf<IndividualSwitchOver>(
            () => _decode_IndividualSwitchOver
        );
    }
    return _cached_decoder_for_SwitchOverInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SwitchOverInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchOverInformation */
let _cached_encoder_for_SwitchOverInformation: $.ASN1Encoder<SwitchOverInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SwitchOverInformation */

/* START_OF_SYMBOL_DEFINITION _encode_SwitchOverInformation */
/**
 * @summary Encodes a(n) SwitchOverInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwitchOverInformation, encoded as an ASN.1 Element.
 */
export function _encode_SwitchOverInformation(
    value: SwitchOverInformation,
    elGetter: $.ASN1Encoder<SwitchOverInformation>
) {
    if (!_cached_encoder_for_SwitchOverInformation) {
        _cached_encoder_for_SwitchOverInformation = $._encodeSequenceOf<IndividualSwitchOver>(
            () => _encode_IndividualSwitchOver,
            $.BER
        );
    }
    return _cached_encoder_for_SwitchOverInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SwitchOverInformation */

/* eslint-enable */
