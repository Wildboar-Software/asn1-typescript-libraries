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
    BodyPartSpecifier,
    _decode_BodyPartSpecifier,
    _encode_BodyPartSpecifier,
} from '../EDIMSInformationObjects/BodyPartSpecifier.ta';
export {
    BodyPartSpecifier,
    _decode_BodyPartSpecifier,
    _encode_BodyPartSpecifier,
} from '../EDIMSInformationObjects/BodyPartSpecifier.ta';

/* START_OF_SYMBOL_DEFINITION BodyPartSpecifiers */
/**
 * @summary BodyPartSpecifiers
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSpecifiers  ::=  SEQUENCE OF BodyPartSpecifier
 * ```
 */
export type BodyPartSpecifiers = BodyPartSpecifier[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BodyPartSpecifiers */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSpecifiers */
let _cached_decoder_for_BodyPartSpecifiers: $.ASN1Decoder<BodyPartSpecifiers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BodyPartSpecifiers */

/* START_OF_SYMBOL_DEFINITION _decode_BodyPartSpecifiers */
/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSpecifiers
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSpecifiers} The decoded data structure.
 */
export function _decode_BodyPartSpecifiers(el: _Element) {
    if (!_cached_decoder_for_BodyPartSpecifiers) {
        _cached_decoder_for_BodyPartSpecifiers = $._decodeSequenceOf<BodyPartSpecifier>(
            () => _decode_BodyPartSpecifier
        );
    }
    return _cached_decoder_for_BodyPartSpecifiers(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BodyPartSpecifiers */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSpecifiers */
let _cached_encoder_for_BodyPartSpecifiers: $.ASN1Encoder<BodyPartSpecifiers> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BodyPartSpecifiers */

/* START_OF_SYMBOL_DEFINITION _encode_BodyPartSpecifiers */
/**
 * @summary Encodes a(n) BodyPartSpecifiers into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSpecifiers, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSpecifiers(
    value: BodyPartSpecifiers,
    elGetter: $.ASN1Encoder<BodyPartSpecifiers>
) {
    if (!_cached_encoder_for_BodyPartSpecifiers) {
        _cached_encoder_for_BodyPartSpecifiers = $._encodeSequenceOf<BodyPartSpecifier>(
            () => _encode_BodyPartSpecifier,
            $.BER
        );
    }
    return _cached_encoder_for_BodyPartSpecifiers(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BodyPartSpecifiers */

/* eslint-enable */
