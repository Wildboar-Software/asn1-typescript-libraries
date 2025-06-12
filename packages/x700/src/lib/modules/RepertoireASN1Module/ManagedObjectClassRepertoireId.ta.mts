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
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';
export {
    GdmoObjectClass,
    _decode_GdmoObjectClass,
    _encode_GdmoObjectClass,
} from '../RepertoireASN1Module/GdmoObjectClass.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ManagedObjectClassRepertoireId */
/**
 * @summary ManagedObjectClassRepertoireId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ManagedObjectClassRepertoireId  ::=  GdmoObjectClass
 * ```
 */
export type ManagedObjectClassRepertoireId = GdmoObjectClass; // DefinedType
/* END_OF_SYMBOL_DEFINITION ManagedObjectClassRepertoireId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectClassRepertoireId */
let _cached_decoder_for_ManagedObjectClassRepertoireId: $.ASN1Decoder<ManagedObjectClassRepertoireId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ManagedObjectClassRepertoireId */

/* START_OF_SYMBOL_DEFINITION _decode_ManagedObjectClassRepertoireId */
/**
 * @summary Decodes an ASN.1 element into a(n) ManagedObjectClassRepertoireId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ManagedObjectClassRepertoireId} The decoded data structure.
 */
export function _decode_ManagedObjectClassRepertoireId(el: _Element) {
    if (!_cached_decoder_for_ManagedObjectClassRepertoireId) {
        _cached_decoder_for_ManagedObjectClassRepertoireId = _decode_GdmoObjectClass;
    }
    return _cached_decoder_for_ManagedObjectClassRepertoireId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ManagedObjectClassRepertoireId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectClassRepertoireId */
let _cached_encoder_for_ManagedObjectClassRepertoireId: $.ASN1Encoder<ManagedObjectClassRepertoireId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ManagedObjectClassRepertoireId */

/* START_OF_SYMBOL_DEFINITION _encode_ManagedObjectClassRepertoireId */
/**
 * @summary Encodes a(n) ManagedObjectClassRepertoireId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ManagedObjectClassRepertoireId, encoded as an ASN.1 Element.
 */
export function _encode_ManagedObjectClassRepertoireId(
    value: ManagedObjectClassRepertoireId,
    elGetter: $.ASN1Encoder<ManagedObjectClassRepertoireId>
) {
    if (!_cached_encoder_for_ManagedObjectClassRepertoireId) {
        _cached_encoder_for_ManagedObjectClassRepertoireId = _encode_GdmoObjectClass;
    }
    return _cached_encoder_for_ManagedObjectClassRepertoireId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ManagedObjectClassRepertoireId */

/* eslint-enable */
