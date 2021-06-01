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
    EMailContentType,
    _decode_EMailContentType,
    _encode_EMailContentType,
} from '../MhsMTAAsn1Module/EMailContentType.ta';
export {
    EMailContentType,
    _decode_EMailContentType,
    _encode_EMailContentType,
} from '../MhsMTAAsn1Module/EMailContentType.ta';

/* START_OF_SYMBOL_DEFINITION EmailContentTypes */
/**
 * @summary EmailContentTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EmailContentTypes  ::=  SET OF EMailContentType
 * ```
 */
export type EmailContentTypes = EMailContentType[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION EmailContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EmailContentTypes */
let _cached_decoder_for_EmailContentTypes: $.ASN1Decoder<EmailContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EmailContentTypes */

/* START_OF_SYMBOL_DEFINITION _decode_EmailContentTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) EmailContentTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EmailContentTypes} The decoded data structure.
 */
export function _decode_EmailContentTypes(el: _Element) {
    if (!_cached_decoder_for_EmailContentTypes) {
        _cached_decoder_for_EmailContentTypes = $._decodeSetOf<EMailContentType>(
            () => _decode_EMailContentType
        );
    }
    return _cached_decoder_for_EmailContentTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EmailContentTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EmailContentTypes */
let _cached_encoder_for_EmailContentTypes: $.ASN1Encoder<EmailContentTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EmailContentTypes */

/* START_OF_SYMBOL_DEFINITION _encode_EmailContentTypes */
/**
 * @summary Encodes a(n) EmailContentTypes into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EmailContentTypes, encoded as an ASN.1 Element.
 */
export function _encode_EmailContentTypes(
    value: EmailContentTypes,
    elGetter: $.ASN1Encoder<EmailContentTypes>
) {
    if (!_cached_encoder_for_EmailContentTypes) {
        _cached_encoder_for_EmailContentTypes = $._encodeSetOf<EMailContentType>(
            () => _encode_EMailContentType,
            $.BER
        );
    }
    return _cached_encoder_for_EmailContentTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EmailContentTypes */

/* eslint-enable */
