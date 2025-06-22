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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    MessageDeliveryEnvelope,
    _decode_MessageDeliveryEnvelope,
    _encode_MessageDeliveryEnvelope,
} from '../MTSAbstractService/MessageDeliveryEnvelope.ta.mjs';
import {
    Content,
    _decode_Content,
    _encode_Content,
} from '../MTSAbstractService/Content.ta.mjs';
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
import {
    _root_component_type_list_1_spec_for_MessageDeliveryEnvelope,
    _root_component_type_list_2_spec_for_MessageDeliveryEnvelope,
    _extension_additions_list_spec_for_MessageDeliveryEnvelope,
} from '../MTSAbstractService/MessageDeliveryEnvelope.ta.mjs';

/**
 * @summary MessageDeliveryArgument
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageDeliveryArgument ::= SEQUENCE {
 *   COMPONENTS OF MessageDeliveryEnvelope,
 *   content  Content
 * }
 * ```
 *
 * @class
 */
export class MessageDeliveryArgument implements MessageDeliveryEnvelope {
    constructor(
        /**
         * @summary `message_delivery_identifier`.
         * @public
         * @readonly
         */
        readonly message_delivery_identifier: MessageDeliveryIdentifier /* REPLICATED_COMPONENT */,
        /**
         * @summary `message_delivery_time`.
         * @public
         * @readonly
         */
        readonly message_delivery_time: MessageDeliveryTime /* REPLICATED_COMPONENT */,
        /**
         * @summary `other_fields`.
         * @public
         * @readonly
         */
        readonly other_fields: OtherMessageDeliveryFields /* REPLICATED_COMPONENT */,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: Content
    ) {}

    /**
     * @summary Restructures an object into a MessageDeliveryArgument
     * @description
     *
     * This takes an `object` and converts it to a `MessageDeliveryArgument`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageDeliveryArgument`.
     * @returns {MessageDeliveryArgument}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageDeliveryArgument]: MessageDeliveryArgument[_K];
        }
    ): MessageDeliveryArgument {
        return new MessageDeliveryArgument(
            _o.message_delivery_identifier,
            _o.message_delivery_time,
            _o.other_fields,
            _o.content
        );
    }
}

/**
 * @summary The Leading Root Component Types of MessageDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageDeliveryArgument: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_MessageDeliveryEnvelope,
    new $.ComponentSpec(
        'content',
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageDeliveryArgument: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageDeliveryArgument
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageDeliveryArgument: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageDeliveryArgument: $.ASN1Decoder<MessageDeliveryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageDeliveryArgument
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageDeliveryArgument} The decoded data structure.
 */
export function _decode_MessageDeliveryArgument(el: _Element) {
    if (!_cached_decoder_for_MessageDeliveryArgument) {
        _cached_decoder_for_MessageDeliveryArgument = function (
            el: _Element
        ): MessageDeliveryArgument {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let message_delivery_identifier!: MessageDeliveryIdentifier;
            let message_delivery_time!: MessageDeliveryTime;
            let other_fields!: OtherMessageDeliveryFields;
            let content!: Content;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-delivery-identifier': (_el: _Element): void => {
                    message_delivery_identifier = _decode_MessageDeliveryIdentifier(
                        _el
                    );
                },
                'message-delivery-time': (_el: _Element): void => {
                    message_delivery_time = _decode_MessageDeliveryTime(_el);
                },
                'other-fields': (_el: _Element): void => {
                    other_fields = _decode_OtherMessageDeliveryFields(_el);
                },
                content: (_el: _Element): void => {
                    content = _decode_Content(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageDeliveryArgument,
                _extension_additions_list_spec_for_MessageDeliveryArgument,
                _root_component_type_list_2_spec_for_MessageDeliveryArgument,
                undefined
            );
            return new MessageDeliveryArgument /* SEQUENCE_CONSTRUCTOR_CALL */(
                message_delivery_identifier,
                message_delivery_time,
                other_fields,
                content
            );
        };
    }
    return _cached_decoder_for_MessageDeliveryArgument(el);
}

let _cached_encoder_for_MessageDeliveryArgument: $.ASN1Encoder<MessageDeliveryArgument> | null = null;

/**
 * @summary Encodes a(n) MessageDeliveryArgument into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageDeliveryArgument, encoded as an ASN.1 Element.
 */
export function _encode_MessageDeliveryArgument(
    value: MessageDeliveryArgument,
    elGetter: $.ASN1Encoder<MessageDeliveryArgument>
) {
    if (!_cached_encoder_for_MessageDeliveryArgument) {
        _cached_encoder_for_MessageDeliveryArgument = function (
            value: MessageDeliveryArgument        ): _Element {
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
                        /* REQUIRED   */ _encode_Content(value.content, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageDeliveryArgument(value, elGetter);
}


/* eslint-enable */
