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
    SIGNED,
    _get_decoder_for_SIGNED,
    _get_encoder_for_SIGNED,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNED.ta.js';
import {
    TBSCirculationSignature,
    _decode_TBSCirculationSignature,
    _encode_TBSCirculationSignature,
} from '../IPMSHeadingExtensions/TBSCirculationSignature.ta.js';

/* START_OF_SYMBOL_DEFINITION CirculationSignature */
/**
 * @summary CirculationSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CirculationSignature  ::=  SIGNED{TBSCirculationSignature}
 * ```
 */
export type CirculationSignature = SIGNED<TBSCirculationSignature>; // DefinedType
/* END_OF_SYMBOL_DEFINITION CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationSignature */
let _cached_decoder_for_CirculationSignature: $.ASN1Decoder<CirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _decode_CirculationSignature */
/**
 * @summary Decodes an ASN.1 element into a(n) CirculationSignature
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CirculationSignature} The decoded data structure.
 */
export function _decode_CirculationSignature(el: _Element) {
    if (!_cached_decoder_for_CirculationSignature) {
        _cached_decoder_for_CirculationSignature = _get_decoder_for_SIGNED<TBSCirculationSignature>(
            _decode_TBSCirculationSignature
        );
    }
    return _cached_decoder_for_CirculationSignature(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationSignature */
let _cached_encoder_for_CirculationSignature: $.ASN1Encoder<CirculationSignature> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CirculationSignature */

/* START_OF_SYMBOL_DEFINITION _encode_CirculationSignature */
/**
 * @summary Encodes a(n) CirculationSignature into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CirculationSignature, encoded as an ASN.1 Element.
 */
export function _encode_CirculationSignature(
    value: CirculationSignature,
    elGetter: $.ASN1Encoder<CirculationSignature>
) {
    if (!_cached_encoder_for_CirculationSignature) {
        _cached_encoder_for_CirculationSignature = _get_encoder_for_SIGNED<TBSCirculationSignature>(
            _encode_TBSCirculationSignature
        );
    }
    return _cached_encoder_for_CirculationSignature(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CirculationSignature */

/* eslint-enable */
