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
    RemoveTpsFromGtpInformation_Item,
    _decode_RemoveTpsFromGtpInformation_Item,
    _encode_RemoveTpsFromGtpInformation_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpInformation-Item.ta.mjs';
export {
    RemoveTpsFromGtpInformation_Item,
    _decode_RemoveTpsFromGtpInformation_Item,
    _encode_RemoveTpsFromGtpInformation_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromGtpInformation-Item.ta.mjs';

/* START_OF_SYMBOL_DEFINITION RemoveTpsFromGtpInformation */
/**
 * @summary RemoveTpsFromGtpInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromGtpInformation  ::=
 *   SEQUENCE OF SEQUENCE {fromGtp  ObjectInstance,
 *                         tps      SET OF ObjectInstance}
 * ```
 */
export type RemoveTpsFromGtpInformation = RemoveTpsFromGtpInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RemoveTpsFromGtpInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpInformation */
let _cached_decoder_for_RemoveTpsFromGtpInformation: $.ASN1Decoder<RemoveTpsFromGtpInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromGtpInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromGtpInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromGtpInformation} The decoded data structure.
 */
export function _decode_RemoveTpsFromGtpInformation(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromGtpInformation) {
        _cached_decoder_for_RemoveTpsFromGtpInformation = $._decodeSequenceOf<RemoveTpsFromGtpInformation_Item>(
            () => _decode_RemoveTpsFromGtpInformation_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromGtpInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromGtpInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpInformation */
let _cached_encoder_for_RemoveTpsFromGtpInformation: $.ASN1Encoder<RemoveTpsFromGtpInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromGtpInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpInformation */
/**
 * @summary Encodes a(n) RemoveTpsFromGtpInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromGtpInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromGtpInformation(
    value: RemoveTpsFromGtpInformation,
    elGetter: $.ASN1Encoder<RemoveTpsFromGtpInformation>
) {
    if (!_cached_encoder_for_RemoveTpsFromGtpInformation) {
        _cached_encoder_for_RemoveTpsFromGtpInformation = $._encodeSequenceOf<RemoveTpsFromGtpInformation_Item>(
            () => _encode_RemoveTpsFromGtpInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromGtpInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromGtpInformation */

/* eslint-enable */
