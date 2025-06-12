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
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';
export {
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ON */
/**
 * @summary ON
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ON  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   other-notification-type-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type ON = IPN; // DefinedType
/* END_OF_SYMBOL_DEFINITION ON */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ON */
let _cached_decoder_for_ON: $.ASN1Decoder<ON> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ON */

/* START_OF_SYMBOL_DEFINITION _decode_ON */
/**
 * @summary Decodes an ASN.1 element into a(n) ON
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ON} The decoded data structure.
 */
export function _decode_ON(el: _Element) {
    if (!_cached_decoder_for_ON) {
        _cached_decoder_for_ON = _decode_IPN;
    }
    return _cached_decoder_for_ON(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ON */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ON */
let _cached_encoder_for_ON: $.ASN1Encoder<ON> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ON */

/* START_OF_SYMBOL_DEFINITION _encode_ON */
/**
 * @summary Encodes a(n) ON into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ON, encoded as an ASN.1 Element.
 */
export function _encode_ON(value: ON, elGetter: $.ASN1Encoder<ON>) {
    if (!_cached_encoder_for_ON) {
        _cached_encoder_for_ON = _encode_IPN;
    }
    return _cached_encoder_for_ON(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ON */

/* eslint-enable */
