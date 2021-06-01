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
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta';
export {
    RecipientSpecifier,
    _decode_RecipientSpecifier,
    _encode_RecipientSpecifier,
} from '../IPMSInformationObjects/RecipientSpecifier.ta';

/* START_OF_SYMBOL_DEFINITION PrimaryRecipientsSubfield */
/**
 * @summary PrimaryRecipientsSubfield
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryRecipientsSubfield  ::=  RecipientSpecifier
 * ```
 */
export type PrimaryRecipientsSubfield = RecipientSpecifier; // DefinedType
/* END_OF_SYMBOL_DEFINITION PrimaryRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryRecipientsSubfield */
let _cached_decoder_for_PrimaryRecipientsSubfield: $.ASN1Decoder<PrimaryRecipientsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PrimaryRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _decode_PrimaryRecipientsSubfield */
/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryRecipientsSubfield
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryRecipientsSubfield} The decoded data structure.
 */
export function _decode_PrimaryRecipientsSubfield(el: _Element) {
    if (!_cached_decoder_for_PrimaryRecipientsSubfield) {
        _cached_decoder_for_PrimaryRecipientsSubfield = _decode_RecipientSpecifier;
    }
    return _cached_decoder_for_PrimaryRecipientsSubfield(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PrimaryRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryRecipientsSubfield */
let _cached_encoder_for_PrimaryRecipientsSubfield: $.ASN1Encoder<PrimaryRecipientsSubfield> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PrimaryRecipientsSubfield */

/* START_OF_SYMBOL_DEFINITION _encode_PrimaryRecipientsSubfield */
/**
 * @summary Encodes a(n) PrimaryRecipientsSubfield into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryRecipientsSubfield, encoded as an ASN.1 Element.
 */
export function _encode_PrimaryRecipientsSubfield(
    value: PrimaryRecipientsSubfield,
    elGetter: $.ASN1Encoder<PrimaryRecipientsSubfield>
) {
    if (!_cached_encoder_for_PrimaryRecipientsSubfield) {
        _cached_encoder_for_PrimaryRecipientsSubfield = _encode_RecipientSpecifier;
    }
    return _cached_encoder_for_PrimaryRecipientsSubfield(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PrimaryRecipientsSubfield */

/* eslint-enable */
