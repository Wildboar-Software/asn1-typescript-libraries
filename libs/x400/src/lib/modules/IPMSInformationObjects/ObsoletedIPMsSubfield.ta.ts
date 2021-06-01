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

/* START_OF_SYMBOL_DEFINITION ObsoletedIPMsSubfield */
/**
 * @summary ObsoletedIPMsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObsoletedIPMsSubfield  ::=  IPMIdentifier
 * ```
 */
export type ObsoletedIPMsSubfield = IPMIdentifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION ObsoletedIPMsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedIPMsSubfield */
let _cached_decoder_for_ObsoletedIPMsSubfield: $.ASN1Decoder<ObsoletedIPMsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ObsoletedIPMsSubfield */

/* START_OF_SYMBOL_DEFINITION _decode_ObsoletedIPMsSubfield */
/**
 * @summary Decodes an ASN.1 element into a(n) ObsoletedIPMsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObsoletedIPMsSubfield} The decoded data structure.
 */
export function _decode_ObsoletedIPMsSubfield(el: _Element) {
    if (!_cached_decoder_for_ObsoletedIPMsSubfield) {
        _cached_decoder_for_ObsoletedIPMsSubfield = _decode_IPMIdentifier;
    }
    return _cached_decoder_for_ObsoletedIPMsSubfield(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ObsoletedIPMsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedIPMsSubfield */
let _cached_encoder_for_ObsoletedIPMsSubfield: $.ASN1Encoder<ObsoletedIPMsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ObsoletedIPMsSubfield */

/* START_OF_SYMBOL_DEFINITION _encode_ObsoletedIPMsSubfield */
/**
 * @summary Encodes a(n) ObsoletedIPMsSubfield into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObsoletedIPMsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_ObsoletedIPMsSubfield(
    value: ObsoletedIPMsSubfield,
    elGetter: $.ASN1Encoder<ObsoletedIPMsSubfield>
) {
    if (!_cached_encoder_for_ObsoletedIPMsSubfield) {
        _cached_encoder_for_ObsoletedIPMsSubfield = _encode_IPMIdentifier;
    }
    return _cached_encoder_for_ObsoletedIPMsSubfield(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ObsoletedIPMsSubfield */

/* eslint-enable */
