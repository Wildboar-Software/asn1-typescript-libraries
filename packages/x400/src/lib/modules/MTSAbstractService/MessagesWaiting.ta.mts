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
    DeliveryQueue,
    _decode_DeliveryQueue,
    _encode_DeliveryQueue,
} from '../MTSAbstractService/DeliveryQueue.ta.mjs';
/**
 * @summary MessagesWaiting
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessagesWaiting ::= SET {
 *   urgent      [0]  DeliveryQueue,
 *   normal      [1]  DeliveryQueue,
 *   non-urgent  [2]  DeliveryQueue
 * }
 * ```
 *
 * @class
 */
export class MessagesWaiting {
    constructor(
        /**
         * @summary `urgent`.
         * @public
         * @readonly
         */
        readonly urgent: DeliveryQueue,
        /**
         * @summary `normal`.
         * @public
         * @readonly
         */
        readonly normal: DeliveryQueue,
        /**
         * @summary `non_urgent`.
         * @public
         * @readonly
         */
        readonly non_urgent: DeliveryQueue
    ) {}

    /**
     * @summary Restructures an object into a MessagesWaiting
     * @description
     *
     * This takes an `object` and converts it to a `MessagesWaiting`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MessagesWaiting`.
     * @returns {MessagesWaiting}
     */
    public static _from_object(
        _o: { [_K in keyof MessagesWaiting]: MessagesWaiting[_K] }
    ): MessagesWaiting {
        return new MessagesWaiting(_o.urgent, _o.normal, _o.non_urgent);
    }
}

/**
 * @summary The Leading Root Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MessagesWaiting: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'urgent',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'normal',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'non-urgent',
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MessagesWaiting: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MessagesWaiting
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MessagesWaiting: $.ComponentSpec[] = [];

let _cached_decoder_for_MessagesWaiting: $.ASN1Decoder<MessagesWaiting> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MessagesWaiting
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessagesWaiting} The decoded data structure.
 */
export function _decode_MessagesWaiting(el: _Element): MessagesWaiting {
    if (!_cached_decoder_for_MessagesWaiting) {
        _cached_decoder_for_MessagesWaiting = function (
            el: _Element
        ): MessagesWaiting {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let urgent!: DeliveryQueue;
            let normal!: DeliveryQueue;
            let non_urgent!: DeliveryQueue;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                urgent: (_el: _Element): void => {
                    urgent = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
                normal: (_el: _Element): void => {
                    normal = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
                'non-urgent': (_el: _Element): void => {
                    non_urgent = $._decode_implicit<DeliveryQueue>(
                        () => _decode_DeliveryQueue
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_MessagesWaiting,
                _extension_additions_list_spec_for_MessagesWaiting,
                _root_component_type_list_2_spec_for_MessagesWaiting,
                undefined
            );
            return new MessagesWaiting /* SET_CONSTRUCTOR_CALL */(
                urgent,
                normal,
                non_urgent
            );
        };
    }
    return _cached_decoder_for_MessagesWaiting(el);
}

let _cached_encoder_for_MessagesWaiting: $.ASN1Encoder<MessagesWaiting> | null = null;

/**
 * @summary Encodes a(n) MessagesWaiting into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessagesWaiting, encoded as an ASN.1 Element.
 */
export function _encode_MessagesWaiting(
    value: MessagesWaiting,
    elGetter: $.ASN1Encoder<MessagesWaiting>
): _Element {
    if (!_cached_encoder_for_MessagesWaiting) {
        _cached_encoder_for_MessagesWaiting = function (
            value: MessagesWaiting        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.urgent, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.normal, $.BER),
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            2,
                            () => _encode_DeliveryQueue,
                            $.BER
                        )(value.non_urgent, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_MessagesWaiting(value, elGetter);
}


/* eslint-enable */
