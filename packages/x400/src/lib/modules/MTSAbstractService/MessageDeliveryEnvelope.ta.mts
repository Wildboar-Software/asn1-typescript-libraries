/* eslint-disable */
import {
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
    MessageDeliveryIdentifier,
    _decode_MessageDeliveryIdentifier,
    _encode_MessageDeliveryIdentifier,
} from '../MTSAbstractService/MessageDeliveryIdentifier.ta.mjs';
import {
    MessageDeliveryTime,
    _decode_MessageDeliveryTime,
    _encode_MessageDeliveryTime,
} from '../MTSAbstractService/MessageDeliveryTime.ta.mjs';
import {
    OtherMessageDeliveryFields,
    _decode_OtherMessageDeliveryFields,
    _encode_OtherMessageDeliveryFields,
} from '../MTSAbstractService/OtherMessageDeliveryFields.ta.mjs';
/* START_OF_SYMBOL_DEFINITION MessageDeliveryEnvelope */
/**
 * @summary MessageDeliveryEnvelope
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryEnvelope ::= SEQUENCE {
 *   message-delivery-identifier  MessageDeliveryIdentifier,
 *   message-delivery-time        MessageDeliveryTime,
 *   other-fields                 OtherMessageDeliveryFields
 * }
 * ```
 *
 * @class
 */
export class MessageDeliveryEnvelope {
    constructor(
        /**
         * @summary `message_delivery_identifier`.
         * @public
         * @readonly
         */
        readonly message_delivery_identifier: MessageDeliveryIdentifier,
        /**
         * @summary `message_delivery_time`.
         * @public
         * @readonly
         */
        readonly message_delivery_time: MessageDeliveryTime,
        /**
         * @summary `other_fields`.
         * @public
         * @readonly
         */
        readonly other_fields: OtherMessageDeliveryFields
    ) {}

    /**
     * @summary Restructures an object into a MessageDeliveryEnvelope
     * @description
     *
     * This takes an `object` and converts it to a `MessageDeliveryEnvelope`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageDeliveryEnvelope`.
     * @returns {MessageDeliveryEnvelope}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageDeliveryEnvelope]: MessageDeliveryEnvelope[_K];
        }
    ): MessageDeliveryEnvelope {
        return new MessageDeliveryEnvelope(
            _o.message_delivery_identifier,
            _o.message_delivery_time,
            _o.other_fields
        );
    }
}
/* END_OF_SYMBOL_DEFINITION MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageDeliveryEnvelope */
/**
 * @summary The Leading Root Component Types of MessageDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageDeliveryEnvelope: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-delivery-identifier',
        false,
        $.hasTag(_TagClass.application, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-delivery-time',
        false,
        $.hasTag(_TagClass.universal, 23),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'other-fields',
        false,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageDeliveryEnvelope */
/**
 * @summary The Trailing Root Component Types of MessageDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageDeliveryEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageDeliveryEnvelope */
/**
 * @summary The Extension Addition Component Types of MessageDeliveryEnvelope
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageDeliveryEnvelope: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryEnvelope */
let _cached_decoder_for_MessageDeliveryEnvelope: $.ASN1Decoder<MessageDeliveryEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _decode_MessageDeliveryEnvelope */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryEnvelope
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryEnvelope} The decoded data structure.
 */
export function _decode_MessageDeliveryEnvelope(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryEnvelope) {
        _cached_decoder_for_MessageDeliveryEnvelope = function (
            el: _Element
        ): MessageDeliveryEnvelope {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 3) {
                throw new _ConstructionError(
                    'MessageDeliveryEnvelope contained only ' +
                        sequence.length.toString() +
                        ' elements.'
                );
            }
            sequence[0].name = 'message-delivery-identifier';
            sequence[1].name = 'message-delivery-time';
            sequence[2].name = 'other-fields';
            let message_delivery_identifier!: MessageDeliveryIdentifier;
            let message_delivery_time!: MessageDeliveryTime;
            let other_fields!: OtherMessageDeliveryFields;
            message_delivery_identifier = _decode_MessageDeliveryIdentifier(
                sequence[0]
            );
            message_delivery_time = _decode_MessageDeliveryTime(sequence[1]);
            other_fields = _decode_OtherMessageDeliveryFields(sequence[2]);
            return new MessageDeliveryEnvelope(
                message_delivery_identifier,
                message_delivery_time,
                other_fields
            );
        };
    }
    return _cached_decoder_for_MessageDeliveryEnvelope(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryEnvelope */
let _cached_encoder_for_MessageDeliveryEnvelope: $.ASN1Encoder<MessageDeliveryEnvelope> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageDeliveryEnvelope */

/* START_OF_SYMBOL_DEFINITION _encode_MessageDeliveryEnvelope */
/**
 * @summary Encodes a(n) MessageDeliveryEnvelope into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryEnvelope, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryEnvelope(
    value: MessageDeliveryEnvelope,
    elGetter: $.ASN1Encoder<MessageDeliveryEnvelope>
) {
    if (!_cached_encoder_for_MessageDeliveryEnvelope) {
        _cached_encoder_for_MessageDeliveryEnvelope = function (
            value: MessageDeliveryEnvelope        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_MessageDeliveryIdentifier(
                            value.message_delivery_identifier,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MessageDeliveryTime(
                            value.message_delivery_time,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_OtherMessageDeliveryFields(
                            value.other_fields,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageDeliveryEnvelope(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageDeliveryEnvelope */

/* eslint-enable */
