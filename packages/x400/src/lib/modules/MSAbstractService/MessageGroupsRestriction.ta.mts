/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    TRUE,
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
 * @summary MessageGroupsRestriction
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupsRestriction ::= SET {
 *   parent-group                [0]  MessageGroupName OPTIONAL,
 *   immediate-descendants-only  [1]  BOOLEAN DEFAULT TRUE,
 *   omit-descriptors            [2]  BOOLEAN DEFAULT TRUE
 * }
 * ```
 *
 * @class
 */
export class MessageGroupsRestriction {
    constructor(
        /**
         * @summary `parent_group`.
         * @public
         * @readonly
         */
        readonly parent_group: OPTIONAL<MessageGroupName>,
        /**
         * @summary `immediate_descendants_only`.
         * @public
         * @readonly
         */
        readonly immediate_descendants_only: OPTIONAL<BOOLEAN>,
        /**
         * @summary `omit_descriptors`.
         * @public
         * @readonly
         */
        readonly omit_descriptors: OPTIONAL<BOOLEAN>
    ) {}

    /**
     * @summary Restructures an object into a MessageGroupsRestriction
     * @description
     *
     * This takes an `object` and converts it to a `MessageGroupsRestriction`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageGroupsRestriction`.
     * @returns {MessageGroupsRestriction}
     */
    public static _from_object(
        _o: {
            [_K in keyof MessageGroupsRestriction]: MessageGroupsRestriction[_K];
        }
    ): MessageGroupsRestriction {
        return new MessageGroupsRestriction(
            _o.parent_group,
            _o.immediate_descendants_only,
            _o.omit_descriptors
        );
    }

    /**
     * @summary Getter that returns the default value for `immediate_descendants_only`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_immediate_descendants_only(): BOOLEAN {
        return TRUE;
    }
    /**
     * @summary Getter that returns the default value for `omit_descriptors`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_omit_descriptors(): BOOLEAN {
        return TRUE;
    }
}

/**
 * @summary The Leading Root Component Types of MessageGroupsRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageGroupsRestriction: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'parent-group',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'immediate-descendants-only',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'omit-descriptors',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageGroupsRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageGroupsRestriction: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageGroupsRestriction
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageGroupsRestriction: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageGroupsRestriction: $.ASN1Decoder<MessageGroupsRestriction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupsRestriction
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupsRestriction} The decoded data structure.
 */
export function _decode_MessageGroupsRestriction(el: _Element) {
    if (!_cached_decoder_for_MessageGroupsRestriction) {
        _cached_decoder_for_MessageGroupsRestriction = function (
            el: _Element
        ): MessageGroupsRestriction {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let parent_group: OPTIONAL<MessageGroupName>;
            let immediate_descendants_only: OPTIONAL<BOOLEAN> =
                MessageGroupsRestriction._default_value_for_immediate_descendants_only;
            let omit_descriptors: OPTIONAL<BOOLEAN> =
                MessageGroupsRestriction._default_value_for_omit_descriptors;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'parent-group': (_el: _Element): void => {
                    parent_group = $._decode_explicit<MessageGroupName>(
                        () => _decode_MessageGroupName
                    )(_el);
                },
                'immediate-descendants-only': (_el: _Element): void => {
                    immediate_descendants_only = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'omit-descriptors': (_el: _Element): void => {
                    omit_descriptors = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageGroupsRestriction,
                _extension_additions_list_spec_for_MessageGroupsRestriction,
                _root_component_type_list_2_spec_for_MessageGroupsRestriction,
                undefined
            );
            return new MessageGroupsRestriction /* SET_CONSTRUCTOR_CALL */(
                parent_group,
                immediate_descendants_only,
                omit_descriptors
            );
        };
    }
    return _cached_decoder_for_MessageGroupsRestriction(el);
}

let _cached_encoder_for_MessageGroupsRestriction: $.ASN1Encoder<MessageGroupsRestriction> | null = null;

/**
 * @summary Encodes a(n) MessageGroupsRestriction into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupsRestriction, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupsRestriction(
    value: MessageGroupsRestriction,
    elGetter: $.ASN1Encoder<MessageGroupsRestriction>
) {
    if (!_cached_encoder_for_MessageGroupsRestriction) {
        _cached_encoder_for_MessageGroupsRestriction = function (
            value: MessageGroupsRestriction        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.parent_group === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_MessageGroupName,
                                  $.BER
                              )(value.parent_group, $.BER),
                        /* IF_DEFAULT */ value.immediate_descendants_only ===
                            undefined ||
                        $.deepEq(
                            value.immediate_descendants_only,
                            MessageGroupsRestriction._default_value_for_immediate_descendants_only
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.immediate_descendants_only, $.BER),
                        /* IF_DEFAULT */ value.omit_descriptors === undefined ||
                        $.deepEq(
                            value.omit_descriptors,
                            MessageGroupsRestriction._default_value_for_omit_descriptors
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.omit_descriptors, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageGroupsRestriction(value, elGetter);
}


/* eslint-enable */
