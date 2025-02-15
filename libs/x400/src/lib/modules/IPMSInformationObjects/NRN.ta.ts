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
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta';
export {
    IPN,
    _decode_IPN,
    _encode_IPN,
} from '../IPMSInformationObjects/IPN.ta';

/* START_OF_SYMBOL_DEFINITION NRN */
/**
 * @summary NRN
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NRN  ::=
 *   IPN
 *     (WITH COMPONENTS {
 *        ...,
 *        choice  (WITH COMPONENTS {
 *                   non-receipt-fields  PRESENT
 *                 })
 *      })
 * ```
 */
export type NRN = IPN; // DefinedType
/* END_OF_SYMBOL_DEFINITION NRN */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NRN */
let _cached_decoder_for_NRN: $.ASN1Decoder<NRN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NRN */

/* START_OF_SYMBOL_DEFINITION _decode_NRN */
/**
 * @summary Decodes an ASN.1 element into a(n) NRN
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NRN} The decoded data structure.
 */
export function _decode_NRN(el: _Element) {
    if (!_cached_decoder_for_NRN) {
        _cached_decoder_for_NRN = _decode_IPN;
    }
    return _cached_decoder_for_NRN(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NRN */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NRN */
let _cached_encoder_for_NRN: $.ASN1Encoder<NRN> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NRN */

/* START_OF_SYMBOL_DEFINITION _encode_NRN */
/**
 * @summary Encodes a(n) NRN into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NRN, encoded as an ASN.1 Element.
 */
export function _encode_NRN(value: NRN, elGetter: $.ASN1Encoder<NRN>) {
    if (!_cached_encoder_for_NRN) {
        _cached_encoder_for_NRN = _encode_IPN;
    }
    return _cached_encoder_for_NRN(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NRN */

/* eslint-enable */
