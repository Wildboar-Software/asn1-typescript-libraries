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
import { Patch, _decode_Patch, _encode_Patch } from '../SWMF/Patch.ta';
export { Patch, _decode_Patch, _encode_Patch } from '../SWMF/Patch.ta';

/* START_OF_SYMBOL_DEFINITION AppliedPatches */
/**
 * @summary AppliedPatches
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AppliedPatches  ::=  SEQUENCE OF Patch
 * ```
 */
export type AppliedPatches = Patch[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AppliedPatches */
let _cached_decoder_for_AppliedPatches: $.ASN1Decoder<AppliedPatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _decode_AppliedPatches */
/**
 * @summary Decodes an ASN.1 element into a(n) AppliedPatches
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AppliedPatches} The decoded data structure.
 */
export function _decode_AppliedPatches(el: _Element) {
    if (!_cached_decoder_for_AppliedPatches) {
        _cached_decoder_for_AppliedPatches = $._decodeSequenceOf<Patch>(
            () => _decode_Patch
        );
    }
    return _cached_decoder_for_AppliedPatches(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AppliedPatches */
let _cached_encoder_for_AppliedPatches: $.ASN1Encoder<AppliedPatches> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AppliedPatches */

/* START_OF_SYMBOL_DEFINITION _encode_AppliedPatches */
/**
 * @summary Encodes a(n) AppliedPatches into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AppliedPatches, encoded as an ASN.1 Element.
 */
export function _encode_AppliedPatches(
    value: AppliedPatches,
    elGetter: $.ASN1Encoder<AppliedPatches>
) {
    if (!_cached_encoder_for_AppliedPatches) {
        _cached_encoder_for_AppliedPatches = $._encodeSequenceOf<Patch>(
            () => _encode_Patch,
            $.BER
        );
    }
    return _cached_encoder_for_AppliedPatches(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AppliedPatches */

/* eslint-enable */
