/* eslint-disable */
import {
    OPTIONAL,
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
    EDISupplementaryInformation,
    _decode_EDISupplementaryInformation,
    _encode_EDISupplementaryInformation,
} from '../EDIMSInformationObjects/EDISupplementaryInformation.ta.mjs';
/**
 * @summary MessageParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageParameters ::= SET {
 *   delivery-time      [0]  MessageDeliveryTime OPTIONAL,
 *   delivery-envelope  [1]  OtherMessageDeliveryFields OPTIONAL,
 *   other-parameters   [2]  EDISupplementaryInformation OPTIONAL
 * }
 * ```
 *
 */
export class MessageParameters {
    constructor(
        /**
         * @summary `delivery_time`.
         * @public
         * @readonly
         */
        readonly delivery_time: OPTIONAL<MessageDeliveryTime>,
        /**
         * @summary `delivery_envelope`.
         * @public
         * @readonly
         */
        readonly delivery_envelope: OPTIONAL<OtherMessageDeliveryFields>,
        /**
         * @summary `other_parameters`.
         * @public
         * @readonly
         */
        readonly other_parameters: OPTIONAL<EDISupplementaryInformation>
    ) {}

    /**
     * @summary Restructures an object into a MessageParameters
     * @description
     *
     * This takes an `object` and converts it to a `MessageParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessageParameters`.
     * @returns {MessageParameters}
     */
    public static _from_object(
        _o: { [_K in keyof MessageParameters]: MessageParameters[_K] }
    ): MessageParameters {
        return new MessageParameters(
            _o.delivery_time,
            _o.delivery_envelope,
            _o.other_parameters
        );
    }
}

/**
 * @summary The Leading Root Component Types of MessageParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessageParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'delivery-time',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'delivery-envelope',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'other-parameters',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessageParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessageParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessageParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessageParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_MessageParameters: $.ASN1Decoder<MessageParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessageParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageParameters} The decoded data structure.
 */
export function _decode_MessageParameters(el: _Element): MessageParameters {
    if (!_cached_decoder_for_MessageParameters) {
        _cached_decoder_for_MessageParameters = function (
            el: _Element
        ): MessageParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let delivery_time: OPTIONAL<MessageDeliveryTime>;
            let delivery_envelope: OPTIONAL<OtherMessageDeliveryFields>;
            let other_parameters: OPTIONAL<EDISupplementaryInformation>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'delivery-time': (_el: _Element): void => {
                    delivery_time = $._decode_implicit<MessageDeliveryTime>(
                        () => _decode_MessageDeliveryTime
                    )(_el);
                },
                'delivery-envelope': (_el: _Element): void => {
                    delivery_envelope = $._decode_implicit<OtherMessageDeliveryFields>(
                        () => _decode_OtherMessageDeliveryFields
                    )(_el);
                },
                'other-parameters': (_el: _Element): void => {
                    other_parameters = $._decode_implicit<EDISupplementaryInformation>(
                        () => _decode_EDISupplementaryInformation
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessageParameters,
                _extension_additions_list_spec_for_MessageParameters,
                _root_component_type_list_2_spec_for_MessageParameters,
                undefined
            );
            return new MessageParameters /* SET_CONSTRUCTOR_CALL */(
                delivery_time,
                delivery_envelope,
                other_parameters
            );
        };
    }
    return _cached_decoder_for_MessageParameters(el);
}

let _cached_encoder_for_MessageParameters: $.ASN1Encoder<MessageParameters> | null = null;

/**
 * @summary Encodes a(n) MessageParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageParameters, encoded as an ASN.1 Element.
 */
export function _encode_MessageParameters(
    value: MessageParameters,
    elGetter: $.ASN1Encoder<MessageParameters>
): _Element {
    if (!_cached_encoder_for_MessageParameters) {
        _cached_encoder_for_MessageParameters = function (
            value: MessageParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.delivery_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_MessageDeliveryTime,
                                  $.BER
                              )(value.delivery_time, $.BER),
                        /* IF_ABSENT  */ value.delivery_envelope === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_OtherMessageDeliveryFields,
                                  $.BER
                              )(value.delivery_envelope, $.BER),
                        /* IF_ABSENT  */ value.other_parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_EDISupplementaryInformation,
                                  $.BER
                              )(value.other_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessageParameters(value, elGetter);
}


/* eslint-enable */
