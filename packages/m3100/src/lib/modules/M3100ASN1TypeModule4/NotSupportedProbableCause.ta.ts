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
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';
export {
    ProbableCause,
    _decode_ProbableCause,
    _encode_ProbableCause,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ProbableCause.ta';

/* START_OF_SYMBOL_DEFINITION NotSupportedProbableCause */
/**
 * @summary NotSupportedProbableCause
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotSupportedProbableCause  ::=  SET OF ProbableCause
 * ```
 */
export type NotSupportedProbableCause = ProbableCause[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NotSupportedProbableCause */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NotSupportedProbableCause */
let _cached_decoder_for_NotSupportedProbableCause: $.ASN1Decoder<NotSupportedProbableCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NotSupportedProbableCause */

/* START_OF_SYMBOL_DEFINITION _decode_NotSupportedProbableCause */
/**
 * @summary Decodes an ASN.1 element into a(n) NotSupportedProbableCause
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotSupportedProbableCause} The decoded data structure.
 */
export function _decode_NotSupportedProbableCause(el: _Element) {
    if (!_cached_decoder_for_NotSupportedProbableCause) {
        _cached_decoder_for_NotSupportedProbableCause = $._decodeSetOf<ProbableCause>(
            () => _decode_ProbableCause
        );
    }
    return _cached_decoder_for_NotSupportedProbableCause(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NotSupportedProbableCause */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NotSupportedProbableCause */
let _cached_encoder_for_NotSupportedProbableCause: $.ASN1Encoder<NotSupportedProbableCause> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NotSupportedProbableCause */

/* START_OF_SYMBOL_DEFINITION _encode_NotSupportedProbableCause */
/**
 * @summary Encodes a(n) NotSupportedProbableCause into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotSupportedProbableCause, encoded as an ASN.1 Element.
 */
export function _encode_NotSupportedProbableCause(
    value: NotSupportedProbableCause,
    elGetter: $.ASN1Encoder<NotSupportedProbableCause>
) {
    if (!_cached_encoder_for_NotSupportedProbableCause) {
        _cached_encoder_for_NotSupportedProbableCause = $._encodeSetOf<ProbableCause>(
            () => _encode_ProbableCause,
            $.BER
        );
    }
    return _cached_encoder_for_NotSupportedProbableCause(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NotSupportedProbableCause */

/* eslint-enable */
