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

/* START_OF_SYMBOL_DEFINITION OtherActions */
/**
 * @summary OtherActions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OtherActions  ::=  BIT STRING {redirected(0), dl-operation(1)
 * }(SIZE (0..ub-bit-options))
 * ```
 */
export type OtherActions = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION OtherActions */

/* START_OF_SYMBOL_DEFINITION OtherActions_redirected */
/**
 * @summary OtherActions_redirected
 * @constant
 */
export const OtherActions_redirected: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OtherActions_redirected */

/* START_OF_SYMBOL_DEFINITION redirected */
/**
 * @summary redirected
 * @constant
 */
export const redirected: number = OtherActions_redirected; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION redirected */

/* START_OF_SYMBOL_DEFINITION OtherActions_dl_operation */
/**
 * @summary OtherActions_dl_operation
 * @constant
 */
export const OtherActions_dl_operation: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION OtherActions_dl_operation */

/* START_OF_SYMBOL_DEFINITION dl_operation */
/**
 * @summary dl_operation
 * @constant
 */
export const dl_operation: number = OtherActions_dl_operation; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION dl_operation */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherActions */
let _cached_decoder_for_OtherActions: $.ASN1Decoder<OtherActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherActions */

/* START_OF_SYMBOL_DEFINITION _decode_OtherActions */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherActions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherActions} The decoded data structure.
 */
export function _decode_OtherActions(el: _Element) {
    if (!_cached_decoder_for_OtherActions) {
        _cached_decoder_for_OtherActions = $._decodeBitString;
    }
    return _cached_decoder_for_OtherActions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherActions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherActions */
let _cached_encoder_for_OtherActions: $.ASN1Encoder<OtherActions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherActions */

/* START_OF_SYMBOL_DEFINITION _encode_OtherActions */
/**
 * @summary Encodes a(n) OtherActions into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherActions, encoded as an ASN.1 Element.
 */
export function _encode_OtherActions(
    value: OtherActions,
    elGetter: $.ASN1Encoder<OtherActions>
) {
    if (!_cached_encoder_for_OtherActions) {
        _cached_encoder_for_OtherActions = $._encodeBitString;
    }
    return _cached_encoder_for_OtherActions(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherActions */

/* eslint-enable */
