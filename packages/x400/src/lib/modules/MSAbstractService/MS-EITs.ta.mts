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
    MS_EIT,
    _decode_MS_EIT,
    _encode_MS_EIT,
} from '../MSAbstractService/MS-EIT.ta.mjs';
export {
    MS_EIT,
    _decode_MS_EIT,
    _encode_MS_EIT,
} from '../MSAbstractService/MS-EIT.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MS_EITs */
/**
 * @summary MS_EITs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MS-EITs  ::=  SET SIZE (1..ub-encoded-information-types) OF MS-EIT
 * ```
 */
export type MS_EITs = MS_EIT[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION MS_EITs */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MS_EITs */
let _cached_decoder_for_MS_EITs: $.ASN1Decoder<MS_EITs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MS_EITs */

/* START_OF_SYMBOL_DEFINITION _decode_MS_EITs */
/**
 * @summary Decodes an ASN.1 element into a(n) MS_EITs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MS_EITs} The decoded data structure.
 */
export function _decode_MS_EITs(el: _Element) {
    if (!_cached_decoder_for_MS_EITs) {
        _cached_decoder_for_MS_EITs = $._decodeSetOf<MS_EIT>(
            () => _decode_MS_EIT
        );
    }
    return _cached_decoder_for_MS_EITs(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MS_EITs */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MS_EITs */
let _cached_encoder_for_MS_EITs: $.ASN1Encoder<MS_EITs> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MS_EITs */

/* START_OF_SYMBOL_DEFINITION _encode_MS_EITs */
/**
 * @summary Encodes a(n) MS_EITs into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MS_EITs, encoded as an ASN.1 Element.
 */
export function _encode_MS_EITs(
    value: MS_EITs,
    elGetter: $.ASN1Encoder<MS_EITs>
) {
    if (!_cached_encoder_for_MS_EITs) {
        _cached_encoder_for_MS_EITs = $._encodeSetOf<MS_EIT>(
            () => _encode_MS_EIT,
            $.BER
        );
    }
    return _cached_encoder_for_MS_EITs(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MS_EITs */

/* eslint-enable */
