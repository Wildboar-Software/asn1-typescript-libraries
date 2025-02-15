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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta';
export {
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta';

/* START_OF_SYMBOL_DEFINITION RepliedToIPMField */
/**
 * @summary RepliedToIPMField
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepliedToIPMField  ::=  IPMIdentifier
 * ```
 */
export type RepliedToIPMField = IPMIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION RepliedToIPMField */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RepliedToIPMField */
let _cached_decoder_for_RepliedToIPMField: $.ASN1Decoder<RepliedToIPMField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RepliedToIPMField */

/* START_OF_SYMBOL_DEFINITION _decode_RepliedToIPMField */
/**
 * @summary Decodes an ASN.1 element into a(n) RepliedToIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepliedToIPMField} The decoded data structure.
 */
export function _decode_RepliedToIPMField(el: _Element) {
    if (!_cached_decoder_for_RepliedToIPMField) {
        _cached_decoder_for_RepliedToIPMField = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_RepliedToIPMField(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RepliedToIPMField */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RepliedToIPMField */
let _cached_encoder_for_RepliedToIPMField: $.ASN1Encoder<RepliedToIPMField> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RepliedToIPMField */

/* START_OF_SYMBOL_DEFINITION _encode_RepliedToIPMField */
/**
 * @summary Encodes a(n) RepliedToIPMField into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepliedToIPMField, encoded as an ASN.1 Element.
 */
export function _encode_RepliedToIPMField(
    value: RepliedToIPMField,
    elGetter: $.ASN1Encoder<RepliedToIPMField>
) {
    if (!_cached_encoder_for_RepliedToIPMField) {
        _cached_encoder_for_RepliedToIPMField = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_RepliedToIPMField(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RepliedToIPMField */

/* eslint-enable */
