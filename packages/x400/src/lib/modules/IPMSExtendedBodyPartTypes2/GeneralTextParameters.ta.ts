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
    CharacterSetRegistration,
    _decode_CharacterSetRegistration,
    _encode_CharacterSetRegistration,
} from '../IPMSExtendedBodyPartTypes2/CharacterSetRegistration.ta.js';
export {
    CharacterSetRegistration,
    _decode_CharacterSetRegistration,
    _encode_CharacterSetRegistration,
} from '../IPMSExtendedBodyPartTypes2/CharacterSetRegistration.ta.js';

/* START_OF_SYMBOL_DEFINITION GeneralTextParameters */
/**
 * @summary GeneralTextParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralTextParameters  ::=  SET OF CharacterSetRegistration
 * ```
 */
export type GeneralTextParameters = CharacterSetRegistration[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION GeneralTextParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextParameters */
let _cached_decoder_for_GeneralTextParameters: $.ASN1Decoder<GeneralTextParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_GeneralTextParameters */

/* START_OF_SYMBOL_DEFINITION _decode_GeneralTextParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) GeneralTextParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralTextParameters} The decoded data structure.
 */
export function _decode_GeneralTextParameters(el: _Element) {
    if (!_cached_decoder_for_GeneralTextParameters) {
        _cached_decoder_for_GeneralTextParameters = $._decodeSetOf<CharacterSetRegistration>(
            () => _decode_CharacterSetRegistration
        );
    }
    return _cached_decoder_for_GeneralTextParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_GeneralTextParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextParameters */
let _cached_encoder_for_GeneralTextParameters: $.ASN1Encoder<GeneralTextParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_GeneralTextParameters */

/* START_OF_SYMBOL_DEFINITION _encode_GeneralTextParameters */
/**
 * @summary Encodes a(n) GeneralTextParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralTextParameters, encoded as an ASN.1 Element.
 */
export function _encode_GeneralTextParameters(
    value: GeneralTextParameters,
    elGetter: $.ASN1Encoder<GeneralTextParameters>
) {
    if (!_cached_encoder_for_GeneralTextParameters) {
        _cached_encoder_for_GeneralTextParameters = $._encodeSetOf<CharacterSetRegistration>(
            () => _encode_CharacterSetRegistration,
            $.BER
        );
    }
    return _cached_encoder_for_GeneralTextParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_GeneralTextParameters */

/* eslint-enable */
