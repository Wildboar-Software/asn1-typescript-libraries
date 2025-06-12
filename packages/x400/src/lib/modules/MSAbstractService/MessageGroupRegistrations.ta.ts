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
    MessageGroupRegistrations_Item,
    _decode_MessageGroupRegistrations_Item,
    _encode_MessageGroupRegistrations_Item,
} from '../MSAbstractService/MessageGroupRegistrations-Item.ta.js';
export {
    MessageGroupRegistrations_Item,
    _decode_MessageGroupRegistrations_Item,
    _encode_MessageGroupRegistrations_Item,
} from '../MSAbstractService/MessageGroupRegistrations-Item.ta.js';

/* START_OF_SYMBOL_DEFINITION MessageGroupRegistrations */
/**
 * @summary MessageGroupRegistrations
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupRegistrations  ::=
 *   SEQUENCE SIZE (1..ub-default-registrations) OF
 *     CHOICE {register-group      [0]  MessageGroupNameAndDescriptor,
 *             deregister-group    [1]  MessageGroupName,
 *             change-descriptors  [2]  MessageGroupNameAndDescriptor}
 * ```
 */
export type MessageGroupRegistrations = MessageGroupRegistrations_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION MessageGroupRegistrations */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupRegistrations */
let _cached_decoder_for_MessageGroupRegistrations: $.ASN1Decoder<MessageGroupRegistrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupRegistrations */

/* START_OF_SYMBOL_DEFINITION _decode_MessageGroupRegistrations */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupRegistrations
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupRegistrations} The decoded data structure.
 */
export function _decode_MessageGroupRegistrations(el: _Element) {
    if (!_cached_decoder_for_MessageGroupRegistrations) {
        _cached_decoder_for_MessageGroupRegistrations = $._decodeSequenceOf<MessageGroupRegistrations_Item>(
            () => _decode_MessageGroupRegistrations_Item
        );
    }
    return _cached_decoder_for_MessageGroupRegistrations(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageGroupRegistrations */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupRegistrations */
let _cached_encoder_for_MessageGroupRegistrations: $.ASN1Encoder<MessageGroupRegistrations> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupRegistrations */

/* START_OF_SYMBOL_DEFINITION _encode_MessageGroupRegistrations */
/**
 * @summary Encodes a(n) MessageGroupRegistrations into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupRegistrations, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupRegistrations(
    value: MessageGroupRegistrations,
    elGetter: $.ASN1Encoder<MessageGroupRegistrations>
) {
    if (!_cached_encoder_for_MessageGroupRegistrations) {
        _cached_encoder_for_MessageGroupRegistrations = $._encodeSequenceOf<MessageGroupRegistrations_Item>(
            () => _encode_MessageGroupRegistrations_Item,
            $.BER
        );
    }
    return _cached_encoder_for_MessageGroupRegistrations(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageGroupRegistrations */

/* eslint-enable */
