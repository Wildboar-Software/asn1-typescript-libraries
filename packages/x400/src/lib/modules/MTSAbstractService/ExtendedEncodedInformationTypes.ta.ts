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
    ExtendedEncodedInformationType,
    _decode_ExtendedEncodedInformationType,
    _encode_ExtendedEncodedInformationType,
} from '../MTSAbstractService/ExtendedEncodedInformationType.ta.js';
export {
    ExtendedEncodedInformationType,
    _decode_ExtendedEncodedInformationType,
    _encode_ExtendedEncodedInformationType,
} from '../MTSAbstractService/ExtendedEncodedInformationType.ta.js';

/* START_OF_SYMBOL_DEFINITION ExtendedEncodedInformationTypes */
/**
 * @summary ExtendedEncodedInformationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ExtendedEncodedInformationTypes  ::=
 *   SET SIZE (1..ub-encoded-information-types) OF ExtendedEncodedInformationType
 * ```
 */
export type ExtendedEncodedInformationTypes = ExtendedEncodedInformationType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ExtendedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedEncodedInformationTypes */
let _cached_decoder_for_ExtendedEncodedInformationTypes: $.ASN1Decoder<ExtendedEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ExtendedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_ExtendedEncodedInformationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) ExtendedEncodedInformationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ExtendedEncodedInformationTypes} The decoded data structure.
 */
export function _decode_ExtendedEncodedInformationTypes(el: _Element) {
    if (!_cached_decoder_for_ExtendedEncodedInformationTypes) {
        _cached_decoder_for_ExtendedEncodedInformationTypes = $._decodeSetOf<ExtendedEncodedInformationType>(
            () => _decode_ExtendedEncodedInformationType
        );
    }
    return _cached_decoder_for_ExtendedEncodedInformationTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ExtendedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedEncodedInformationTypes */
let _cached_encoder_for_ExtendedEncodedInformationTypes: $.ASN1Encoder<ExtendedEncodedInformationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ExtendedEncodedInformationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_ExtendedEncodedInformationTypes */
/**
 * @summary Encodes a(n) ExtendedEncodedInformationTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtendedEncodedInformationTypes, encoded as an ASN.1 Element.
 */
export function _encode_ExtendedEncodedInformationTypes(
    value: ExtendedEncodedInformationTypes,
    elGetter: $.ASN1Encoder<ExtendedEncodedInformationTypes>
) {
    if (!_cached_encoder_for_ExtendedEncodedInformationTypes) {
        _cached_encoder_for_ExtendedEncodedInformationTypes = $._encodeSetOf<ExtendedEncodedInformationType>(
            () => _encode_ExtendedEncodedInformationType,
            $.BER
        );
    }
    return _cached_encoder_for_ExtendedEncodedInformationTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ExtendedEncodedInformationTypes */

/* eslint-enable */
