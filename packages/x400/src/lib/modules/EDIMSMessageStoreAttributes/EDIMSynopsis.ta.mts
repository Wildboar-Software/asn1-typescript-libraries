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
    BodyPartSynopsis,
    _decode_BodyPartSynopsis,
    _encode_BodyPartSynopsis,
} from '../EDIMSMessageStoreAttributes/BodyPartSynopsis.ta.mjs';
export {
    BodyPartSynopsis,
    _decode_BodyPartSynopsis,
    _encode_BodyPartSynopsis,
} from '../EDIMSMessageStoreAttributes/BodyPartSynopsis.ta.mjs';

/* START_OF_SYMBOL_DEFINITION EDIMSynopsis */
/**
 * @summary EDIMSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSynopsis  ::=  SEQUENCE OF BodyPartSynopsis
 * ```
 */
export type EDIMSynopsis = BodyPartSynopsis[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION EDIMSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMSynopsis */
let _cached_decoder_for_EDIMSynopsis: $.ASN1Decoder<EDIMSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EDIMSynopsis */

/* START_OF_SYMBOL_DEFINITION _decode_EDIMSynopsis */
/**
 * @summary Decodes an ASN.1 element into a(n) EDIMSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMSynopsis} The decoded data structure.
 */
export function _decode_EDIMSynopsis(el: _Element) {
    if (!_cached_decoder_for_EDIMSynopsis) {
        _cached_decoder_for_EDIMSynopsis = $._decodeSequenceOf<BodyPartSynopsis>(
            () => _decode_BodyPartSynopsis
        );
    }
    return _cached_decoder_for_EDIMSynopsis(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EDIMSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMSynopsis */
let _cached_encoder_for_EDIMSynopsis: $.ASN1Encoder<EDIMSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EDIMSynopsis */

/* START_OF_SYMBOL_DEFINITION _encode_EDIMSynopsis */
/**
 * @summary Encodes a(n) EDIMSynopsis into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_EDIMSynopsis(
    value: EDIMSynopsis,
    elGetter: $.ASN1Encoder<EDIMSynopsis>
) {
    if (!_cached_encoder_for_EDIMSynopsis) {
        _cached_encoder_for_EDIMSynopsis = $._encodeSequenceOf<BodyPartSynopsis>(
            () => _encode_BodyPartSynopsis,
            $.BER
        );
    }
    return _cached_encoder_for_EDIMSynopsis(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EDIMSynopsis */

/* eslint-enable */
