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
    RelatedTOError_Item,
    _decode_RelatedTOError_Item,
    _encode_RelatedTOError_Item,
} from '../Test-ASN1Module/RelatedTOError-Item.ta';
export {
    RelatedTOError_Item,
    _decode_RelatedTOError_Item,
    _encode_RelatedTOError_Item,
} from '../Test-ASN1Module/RelatedTOError-Item.ta';

/* START_OF_SYMBOL_DEFINITION RelatedTOError */
/**
 * @summary RelatedTOError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RelatedTOError  ::=
 *   SEQUENCE OF CHOICE {ableToCreateTO    NULL,
 *                       unableToCreateTO  TONotCreated}
 * ```
 */
export type RelatedTOError = RelatedTOError_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION RelatedTOError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTOError */
let _cached_decoder_for_RelatedTOError: $.ASN1Decoder<RelatedTOError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RelatedTOError */

/* START_OF_SYMBOL_DEFINITION _decode_RelatedTOError */
/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTOError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RelatedTOError} The decoded data structure.
 */
export function _decode_RelatedTOError(el: _Element) {
    if (!_cached_decoder_for_RelatedTOError) {
        _cached_decoder_for_RelatedTOError = $._decodeSequenceOf<RelatedTOError_Item>(
            () => _decode_RelatedTOError_Item
        );
    }
    return _cached_decoder_for_RelatedTOError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RelatedTOError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTOError */
let _cached_encoder_for_RelatedTOError: $.ASN1Encoder<RelatedTOError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RelatedTOError */

/* START_OF_SYMBOL_DEFINITION _encode_RelatedTOError */
/**
 * @summary Encodes a(n) RelatedTOError into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTOError, encoded as an ASN.1 Element.
 */
export function _encode_RelatedTOError(
    value: RelatedTOError,
    elGetter: $.ASN1Encoder<RelatedTOError>
) {
    if (!_cached_encoder_for_RelatedTOError) {
        _cached_encoder_for_RelatedTOError = $._encodeSequenceOf<RelatedTOError_Item>(
            () => _encode_RelatedTOError_Item,
            $.BER
        );
    }
    return _cached_encoder_for_RelatedTOError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RelatedTOError */

/* eslint-enable */
