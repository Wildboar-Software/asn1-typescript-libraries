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
    RemoveTpsFromTpPoolInformation_Item,
    _decode_RemoveTpsFromTpPoolInformation_Item,
    _encode_RemoveTpsFromTpPoolInformation_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromTpPoolInformation-Item.ta';
export {
    RemoveTpsFromTpPoolInformation_Item,
    _decode_RemoveTpsFromTpPoolInformation_Item,
    _encode_RemoveTpsFromTpPoolInformation_Item,
} from '../ASN1DefinedTypesModule/RemoveTpsFromTpPoolInformation-Item.ta';

/* START_OF_SYMBOL_DEFINITION RemoveTpsFromTpPoolInformation */
/**
 * @summary RemoveTpsFromTpPoolInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RemoveTpsFromTpPoolInformation  ::=
 *   SEQUENCE OF
 *     SEQUENCE {fromTpPool  ObjectInstance,
 *               tps         SET OF ObjectInstance}
 * ```
 */
export type RemoveTpsFromTpPoolInformation = RemoveTpsFromTpPoolInformation_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RemoveTpsFromTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromTpPoolInformation */
let _cached_decoder_for_RemoveTpsFromTpPoolInformation: $.ASN1Decoder<RemoveTpsFromTpPoolInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RemoveTpsFromTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromTpPoolInformation */
/**
 * @summary Decodes an ASN.1 element into a(n) RemoveTpsFromTpPoolInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RemoveTpsFromTpPoolInformation} The decoded data structure.
 */
export function _decode_RemoveTpsFromTpPoolInformation(el: _Element) {
    if (!_cached_decoder_for_RemoveTpsFromTpPoolInformation) {
        _cached_decoder_for_RemoveTpsFromTpPoolInformation = $._decodeSequenceOf<RemoveTpsFromTpPoolInformation_Item>(
            () => _decode_RemoveTpsFromTpPoolInformation_Item
        );
    }
    return _cached_decoder_for_RemoveTpsFromTpPoolInformation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RemoveTpsFromTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromTpPoolInformation */
let _cached_encoder_for_RemoveTpsFromTpPoolInformation: $.ASN1Encoder<RemoveTpsFromTpPoolInformation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RemoveTpsFromTpPoolInformation */

/* START_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromTpPoolInformation */
/**
 * @summary Encodes a(n) RemoveTpsFromTpPoolInformation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoveTpsFromTpPoolInformation, encoded as an ASN.1 Element.
 */
export function _encode_RemoveTpsFromTpPoolInformation(
    value: RemoveTpsFromTpPoolInformation,
    elGetter: $.ASN1Encoder<RemoveTpsFromTpPoolInformation>
) {
    if (!_cached_encoder_for_RemoveTpsFromTpPoolInformation) {
        _cached_encoder_for_RemoveTpsFromTpPoolInformation = $._encodeSequenceOf<RemoveTpsFromTpPoolInformation_Item>(
            () => _encode_RemoveTpsFromTpPoolInformation_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RemoveTpsFromTpPoolInformation(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RemoveTpsFromTpPoolInformation */

/* eslint-enable */
