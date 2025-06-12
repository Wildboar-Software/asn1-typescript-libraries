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
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.js';
export {
    Controls,
    _decode_Controls,
    _encode_Controls,
} from '../MTSAbstractService/Controls.ta.js';

/* START_OF_SYMBOL_DEFINITION DeliveryControls */
/**
 * @summary DeliveryControls
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryControls  ::=  Controls
 * ```
 */
export type DeliveryControls = Controls; // DefinedType
/* END_OF_SYMBOL_DEFINITION DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls */
let _cached_decoder_for_DeliveryControls: $.ASN1Decoder<DeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryControls */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryControls
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryControls} The decoded data structure.
 */
export function _decode_DeliveryControls(el: _Element) {
    if (!_cached_decoder_for_DeliveryControls) {
        _cached_decoder_for_DeliveryControls = _decode_Controls;
    }
    return _cached_decoder_for_DeliveryControls(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls */
let _cached_encoder_for_DeliveryControls: $.ASN1Encoder<DeliveryControls> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryControls */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryControls */
/**
 * @summary Encodes a(n) DeliveryControls into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryControls, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryControls(
    value: DeliveryControls,
    elGetter: $.ASN1Encoder<DeliveryControls>
) {
    if (!_cached_encoder_for_DeliveryControls) {
        _cached_encoder_for_DeliveryControls = _encode_Controls;
    }
    return _cached_encoder_for_DeliveryControls(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryControls */

/* eslint-enable */
