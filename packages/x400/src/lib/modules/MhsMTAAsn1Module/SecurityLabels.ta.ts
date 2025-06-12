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
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.js';
export {
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.js';

/* START_OF_SYMBOL_DEFINITION SecurityLabels */
/**
 * @summary SecurityLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabels  ::=  SET OF SecurityLabel
 * ```
 */
export type SecurityLabels = SecurityLabel[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabels */
let _cached_decoder_for_SecurityLabels: $.ASN1Decoder<SecurityLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLabels */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabels} The decoded data structure.
 */
export function _decode_SecurityLabels(el: _Element) {
    if (!_cached_decoder_for_SecurityLabels) {
        _cached_decoder_for_SecurityLabels = $._decodeSetOf<SecurityLabel>(
            () => _decode_SecurityLabel
        );
    }
    return _cached_decoder_for_SecurityLabels(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabels */
let _cached_encoder_for_SecurityLabels: $.ASN1Encoder<SecurityLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLabels */
/**
 * @summary Encodes a(n) SecurityLabels into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabels, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabels(
    value: SecurityLabels,
    elGetter: $.ASN1Encoder<SecurityLabels>
) {
    if (!_cached_encoder_for_SecurityLabels) {
        _cached_encoder_for_SecurityLabels = $._encodeSetOf<SecurityLabel>(
            () => _encode_SecurityLabel,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabels(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLabels */

/* eslint-enable */
