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
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ControlStatus.ta.js';
export {
    ControlStatus,
    _decode_ControlStatus,
    _encode_ControlStatus,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/ControlStatus.ta.js';

/* START_OF_SYMBOL_DEFINITION ControlStatusValue */
/**
 * @summary ControlStatusValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlStatusValue  ::=  ControlStatus(WITH COMPONENT (suspended))
 * ```
 */
export type ControlStatusValue = ControlStatus; // DefinedType
/* END_OF_SYMBOL_DEFINITION ControlStatusValue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatusValue */
let _cached_decoder_for_ControlStatusValue: $.ASN1Decoder<ControlStatusValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatusValue */

/* START_OF_SYMBOL_DEFINITION _decode_ControlStatusValue */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatusValue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatusValue} The decoded data structure.
 */
export function _decode_ControlStatusValue(el: _Element) {
    if (!_cached_decoder_for_ControlStatusValue) {
        _cached_decoder_for_ControlStatusValue = _decode_ControlStatus;
    }
    return _cached_decoder_for_ControlStatusValue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlStatusValue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatusValue */
let _cached_encoder_for_ControlStatusValue: $.ASN1Encoder<ControlStatusValue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatusValue */

/* START_OF_SYMBOL_DEFINITION _encode_ControlStatusValue */
/**
 * @summary Encodes a(n) ControlStatusValue into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatusValue, encoded as an ASN.1 Element.
 */
export function _encode_ControlStatusValue(
    value: ControlStatusValue,
    elGetter: $.ASN1Encoder<ControlStatusValue>
) {
    if (!_cached_encoder_for_ControlStatusValue) {
        _cached_encoder_for_ControlStatusValue = _encode_ControlStatus;
    }
    return _cached_encoder_for_ControlStatusValue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlStatusValue */

/* eslint-enable */
