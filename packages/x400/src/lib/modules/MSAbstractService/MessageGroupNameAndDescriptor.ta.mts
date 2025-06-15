/* eslint-disable */
import {
    OPTIONAL,
    GeneralString,
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
    MessageGroupName,
    _decode_MessageGroupName,
    _encode_MessageGroupName,
} from '../MSAbstractService/MessageGroupName.ta.mjs';
/**
 * @summary MessageGroupNameAndDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupNameAndDescriptor ::= SET {
 *   message-group-name        [0]  MessageGroupName,
 *   message-group-descriptor
 *     [1]  GeneralString(SIZE (1..ub-group-descriptor-length)) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class MessageGroupNameAndDescriptor {
    constructor(
        /**
         * @summary `message_group_name`.
         * @public
         * @readonly
         */
        readonly message_group_name: MessageGroupName,
        /**
         * @summary `message_group_descriptor`.
         * @public
         * @readonly
         */
        readonly message_group_descriptor: OPTIONAL<GeneralString>
    ) {}

    /**
     * @summary Restructures an object into a MessageGroupNameAndDescriptor
     * @description
     *
     * This takes an `object` and converts it to a `MessageGroupNameAndDescriptor`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageGroupNameAndDescriptor`.
     * @returns {MessageGroupNameAndDescriptor}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageGroupNameAndDescriptor]: MessageGroupNameAndDescriptor[_K];
        }
    ): MessageGroupNameAndDescriptor {
        return new MessageGroupNameAndDescriptor(
            _o.message_group_name,
            _o.message_group_descriptor
        );
    }
}

/**
 * @summary The Leading Root Component Types of MessageGroupNameAndDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageGroupNameAndDescriptor: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'message-group-name',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'message-group-descriptor',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageGroupNameAndDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageGroupNameAndDescriptor: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageGroupNameAndDescriptor
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageGroupNameAndDescriptor: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageGroupNameAndDescriptor: $.ASN1Decoder<MessageGroupNameAndDescriptor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupNameAndDescriptor
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupNameAndDescriptor} The decoded data structure.
 */
export function _decode_MessageGroupNameAndDescriptor(el: _Element) {
    if (!_cached_decoder_for_MessageGroupNameAndDescriptor) {
        _cached_decoder_for_MessageGroupNameAndDescriptor = function (
            el: _Element
        ): MessageGroupNameAndDescriptor {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let message_group_name!: MessageGroupName;
            let message_group_descriptor: OPTIONAL<GeneralString>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'message-group-name': (_el: _Element): void => {
                    message_group_name = $._decode_explicit<MessageGroupName>(
                        () => _decode_MessageGroupName
                    )(_el);
                },
                'message-group-descriptor': (_el: _Element): void => {
                    message_group_descriptor = $._decode_explicit<GeneralString>(
                        () => $._decodeGeneralString
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageGroupNameAndDescriptor,
                _extension_additions_list_spec_for_MessageGroupNameAndDescriptor,
                _root_component_type_list_2_spec_for_MessageGroupNameAndDescriptor,
                undefined
            );
            return new MessageGroupNameAndDescriptor /* SET_CONSTRUCTOR_CALL */(
                message_group_name,
                message_group_descriptor
            );
        };
    }
    return _cached_decoder_for_MessageGroupNameAndDescriptor(el);
}

let _cached_encoder_for_MessageGroupNameAndDescriptor: $.ASN1Encoder<MessageGroupNameAndDescriptor> | null = null;

/**
 * @summary Encodes a(n) MessageGroupNameAndDescriptor into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupNameAndDescriptor, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupNameAndDescriptor(
    value: MessageGroupNameAndDescriptor,
    elGetter: $.ASN1Encoder<MessageGroupNameAndDescriptor>
) {
    if (!_cached_encoder_for_MessageGroupNameAndDescriptor) {
        _cached_encoder_for_MessageGroupNameAndDescriptor = function (
            value: MessageGroupNameAndDescriptor        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_explicit(
                            _TagClass.context,
                            0,
                            () => _encode_MessageGroupName,
                            $.BER
                        )(value.message_group_name, $.BER),
                        /* IF_ABSENT  */ value.message_group_descriptor ===
                        undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeGeneralString,
                                  $.BER
                              )(value.message_group_descriptor, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageGroupNameAndDescriptor(value, elGetter);
}


/* eslint-enable */
