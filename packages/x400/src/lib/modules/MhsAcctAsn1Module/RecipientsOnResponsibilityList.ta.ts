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
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MhsAcctAsn1Module/RecipientName.ta';
export {
    RecipientName,
    _decode_RecipientName,
    _encode_RecipientName,
} from '../MhsAcctAsn1Module/RecipientName.ta';

/* START_OF_SYMBOL_DEFINITION RecipientsOnResponsibilityList */
/**
 * @summary RecipientsOnResponsibilityList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientsOnResponsibilityList  ::=  RecipientName
 * ```
 */
export type RecipientsOnResponsibilityList = RecipientName; // DefinedType
/* END_OF_SYMBOL_DEFINITION RecipientsOnResponsibilityList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientsOnResponsibilityList */
let _cached_decoder_for_RecipientsOnResponsibilityList: $.ASN1Decoder<RecipientsOnResponsibilityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientsOnResponsibilityList */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientsOnResponsibilityList */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientsOnResponsibilityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientsOnResponsibilityList} The decoded data structure.
 */
export function _decode_RecipientsOnResponsibilityList(el: _Element) {
    if (!_cached_decoder_for_RecipientsOnResponsibilityList) {
        _cached_decoder_for_RecipientsOnResponsibilityList = _decode_RecipientName;
    }
    return _cached_decoder_for_RecipientsOnResponsibilityList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientsOnResponsibilityList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientsOnResponsibilityList */
let _cached_encoder_for_RecipientsOnResponsibilityList: $.ASN1Encoder<RecipientsOnResponsibilityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientsOnResponsibilityList */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientsOnResponsibilityList */
/**
 * @summary Encodes a(n) RecipientsOnResponsibilityList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientsOnResponsibilityList, encoded as an ASN.1 Element.
 */
export function _encode_RecipientsOnResponsibilityList(
    value: RecipientsOnResponsibilityList,
    elGetter: $.ASN1Encoder<RecipientsOnResponsibilityList>
) {
    if (!_cached_encoder_for_RecipientsOnResponsibilityList) {
        _cached_encoder_for_RecipientsOnResponsibilityList = _encode_RecipientName;
    }
    return _cached_encoder_for_RecipientsOnResponsibilityList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientsOnResponsibilityList */

/* eslint-enable */
