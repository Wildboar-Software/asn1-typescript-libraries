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
    MessageGroupNameAndDescriptor,
    _decode_MessageGroupNameAndDescriptor,
    _encode_MessageGroupNameAndDescriptor,
} from '../MSAbstractService/MessageGroupNameAndDescriptor.ta.mjs';
export {
    MessageGroupNameAndDescriptor,
    _decode_MessageGroupNameAndDescriptor,
    _encode_MessageGroupNameAndDescriptor,
} from '../MSAbstractService/MessageGroupNameAndDescriptor.ta.mjs';
import {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta.mjs';
export {
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta.mjs';

/* START_OF_SYMBOL_DEFINITION MessageGroupRegistrations_Item */
/**
 * @summary MessageGroupRegistrations_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupRegistrations-Item ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type MessageGroupRegistrations_Item =
    | { register_group: MessageGroupNameAndDescriptor } /* CHOICE_ALT_ROOT */
    | { deregister_group: MessageGroupName } /* CHOICE_ALT_ROOT */
    | {
          change_descriptors: MessageGroupNameAndDescriptor;
      } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION MessageGroupRegistrations_Item */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupRegistrations_Item */
let _cached_decoder_for_MessageGroupRegistrations_Item: $.ASN1Decoder<MessageGroupRegistrations_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupRegistrations_Item */

/* START_OF_SYMBOL_DEFINITION _decode_MessageGroupRegistrations_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupRegistrations_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupRegistrations_Item} The decoded data structure.
 */
export function _decode_MessageGroupRegistrations_Item(el: _Element) {
    if (!_cached_decoder_for_MessageGroupRegistrations_Item) {
        _cached_decoder_for_MessageGroupRegistrations_Item = $._decode_inextensible_choice<MessageGroupRegistrations_Item>(
            {
                'CONTEXT 0': [
                    'register_group',
                    $._decode_implicit<MessageGroupNameAndDescriptor>(
                        () => _decode_MessageGroupNameAndDescriptor
                    ),
                ],
                'CONTEXT 1': [
                    'deregister_group',
                    $._decode_implicit<MessageGroupName>(
                        () => _decode_MessageGroupName
                    ),
                ],
                'CONTEXT 2': [
                    'change_descriptors',
                    $._decode_implicit<MessageGroupNameAndDescriptor>(
                        () => _decode_MessageGroupNameAndDescriptor
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_MessageGroupRegistrations_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageGroupRegistrations_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupRegistrations_Item */
let _cached_encoder_for_MessageGroupRegistrations_Item: $.ASN1Encoder<MessageGroupRegistrations_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupRegistrations_Item */

/* START_OF_SYMBOL_DEFINITION _encode_MessageGroupRegistrations_Item */
/**
 * @summary Encodes a(n) MessageGroupRegistrations_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupRegistrations_Item, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupRegistrations_Item(
    value: MessageGroupRegistrations_Item,
    elGetter: $.ASN1Encoder<MessageGroupRegistrations_Item>
) {
    if (!_cached_encoder_for_MessageGroupRegistrations_Item) {
        _cached_encoder_for_MessageGroupRegistrations_Item = $._encode_choice<MessageGroupRegistrations_Item>(
            {
                register_group: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MessageGroupNameAndDescriptor,
                    $.BER
                ),
                deregister_group: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_MessageGroupName,
                    $.BER
                ),
                change_descriptors: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_MessageGroupNameAndDescriptor,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_MessageGroupRegistrations_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageGroupRegistrations_Item */

/* eslint-enable */
