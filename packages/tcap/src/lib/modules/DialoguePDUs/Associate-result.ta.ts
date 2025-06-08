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

/* START_OF_SYMBOL_DEFINITION Associate_result */
/**
 * @summary Associate_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Associate-result  ::=  INTEGER {accepted(0), reject-permanent(1)}
 * ```
 */
export type Associate_result = INTEGER;
/* END_OF_SYMBOL_DEFINITION Associate_result */

/* START_OF_SYMBOL_DEFINITION Associate_result_accepted */
/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const Associate_result_accepted: Associate_result = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_result_accepted */

/* START_OF_SYMBOL_DEFINITION accepted */
/**
 * @summary Associate_result_accepted
 * @constant
 * @type {number}
 */
export const accepted: Associate_result = Associate_result_accepted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION accepted */

/* START_OF_SYMBOL_DEFINITION Associate_result_reject_permanent */
/**
 * @summary Associate_result_reject_permanent
 * @constant
 * @type {number}
 */
export const Associate_result_reject_permanent: Associate_result = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION Associate_result_reject_permanent */

/* START_OF_SYMBOL_DEFINITION reject_permanent */
/**
 * @summary Associate_result_reject_permanent
 * @constant
 * @type {number}
 */
export const reject_permanent: Associate_result = Associate_result_reject_permanent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reject_permanent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_result */
let _cached_decoder_for_Associate_result: $.ASN1Decoder<Associate_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Associate_result */

/* START_OF_SYMBOL_DEFINITION _decode_Associate_result */
/**
 * @summary Decodes an ASN.1 element into a(n) Associate_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Associate_result} The decoded data structure.
 */
export function _decode_Associate_result(el: _Element) {
    if (!_cached_decoder_for_Associate_result) {
        _cached_decoder_for_Associate_result = $._decodeInteger;
    }
    return _cached_decoder_for_Associate_result(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Associate_result */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_result */
let _cached_encoder_for_Associate_result: $.ASN1Encoder<Associate_result> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Associate_result */

/* START_OF_SYMBOL_DEFINITION _encode_Associate_result */
/**
 * @summary Encodes a(n) Associate_result into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Associate_result, encoded as an ASN.1 Element.
 */
export function _encode_Associate_result(
    value: Associate_result,
    elGetter: $.ASN1Encoder<Associate_result>
) {
    if (!_cached_encoder_for_Associate_result) {
        _cached_encoder_for_Associate_result = $._encodeInteger;
    }
    return _cached_encoder_for_Associate_result(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Associate_result */

/* eslint-enable */
