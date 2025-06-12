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
    DeliveredRecipientField,
    _decode_DeliveredRecipientField,
    _encode_DeliveredRecipientField,
} from '../MhsAcctAsn1Module/DeliveredRecipientField.ta.mjs';
export {
    DeliveredRecipientField,
    _decode_DeliveredRecipientField,
    _encode_DeliveredRecipientField,
} from '../MhsAcctAsn1Module/DeliveredRecipientField.ta.mjs';

/* START_OF_SYMBOL_DEFINITION DestinationDomainDeliveryList */
/**
 * @summary DestinationDomainDeliveryList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationDomainDeliveryList  ::=  SET OF DeliveredRecipientField
 * ```
 */
export type DestinationDomainDeliveryList = DeliveredRecipientField[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION DestinationDomainDeliveryList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationDomainDeliveryList */
let _cached_decoder_for_DestinationDomainDeliveryList: $.ASN1Decoder<DestinationDomainDeliveryList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationDomainDeliveryList */

/* START_OF_SYMBOL_DEFINITION _decode_DestinationDomainDeliveryList */
/**
 * @summary Decodes an ASN.1 element into a(n) DestinationDomainDeliveryList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestinationDomainDeliveryList} The decoded data structure.
 */
export function _decode_DestinationDomainDeliveryList(el: _Element) {
    if (!_cached_decoder_for_DestinationDomainDeliveryList) {
        _cached_decoder_for_DestinationDomainDeliveryList = $._decodeSetOf<DeliveredRecipientField>(
            () => _decode_DeliveredRecipientField
        );
    }
    return _cached_decoder_for_DestinationDomainDeliveryList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DestinationDomainDeliveryList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationDomainDeliveryList */
let _cached_encoder_for_DestinationDomainDeliveryList: $.ASN1Encoder<DestinationDomainDeliveryList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationDomainDeliveryList */

/* START_OF_SYMBOL_DEFINITION _encode_DestinationDomainDeliveryList */
/**
 * @summary Encodes a(n) DestinationDomainDeliveryList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationDomainDeliveryList, encoded as an ASN.1 Element.
 */
export function _encode_DestinationDomainDeliveryList(
    value: DestinationDomainDeliveryList,
    elGetter: $.ASN1Encoder<DestinationDomainDeliveryList>
) {
    if (!_cached_encoder_for_DestinationDomainDeliveryList) {
        _cached_encoder_for_DestinationDomainDeliveryList = $._encodeSetOf<DeliveredRecipientField>(
            () => _encode_DeliveredRecipientField,
            $.BER
        );
    }
    return _cached_encoder_for_DestinationDomainDeliveryList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DestinationDomainDeliveryList */

/* eslint-enable */
