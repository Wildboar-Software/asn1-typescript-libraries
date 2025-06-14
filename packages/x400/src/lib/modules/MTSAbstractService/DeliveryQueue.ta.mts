/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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

/* START_OF_SYMBOL_DEFINITION DeliveryQueue */
/**
 * @summary DeliveryQueue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryQueue ::= SET {
 *   messages  [0]  INTEGER(0..ub-queue-size),
 *   octets    [1]  INTEGER(0..ub-content-length) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeliveryQueue {
    constructor(
        /**
         * @summary `messages`.
         * @public
         * @readonly
         */
        readonly messages: INTEGER,
        /**
         * @summary `octets`.
         * @public
         * @readonly
         */
        readonly octets: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DeliveryQueue
     * @description
     *
     * This takes an `object` and converts it to a `DeliveryQueue`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeliveryQueue`.
     * @returns {DeliveryQueue}
     */
    public static _from_object(
        _o: { [_K in keyof DeliveryQueue]: DeliveryQueue[_K] }
    ): DeliveryQueue {
        return new DeliveryQueue(_o.messages, _o.octets);
    }
}
/* END_OF_SYMBOL_DEFINITION DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryQueue */
/**
 * @summary The Leading Root Component Types of DeliveryQueue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeliveryQueue: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'messages',
        false,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'octets',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryQueue */
/**
 * @summary The Trailing Root Component Types of DeliveryQueue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeliveryQueue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryQueue */
/**
 * @summary The Extension Addition Component Types of DeliveryQueue
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeliveryQueue: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryQueue */
let _cached_decoder_for_DeliveryQueue: $.ASN1Decoder<DeliveryQueue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryQueue */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryQueue
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryQueue} The decoded data structure.
 */
export function _decode_DeliveryQueue(el: _Element) {
    if (!_cached_decoder_for_DeliveryQueue) {
        _cached_decoder_for_DeliveryQueue = function (
            el: _Element
        ): DeliveryQueue {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let messages!: INTEGER;
            let octets: OPTIONAL<INTEGER>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                messages: (_el: _Element): void => {
                    messages = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                octets: (_el: _Element): void => {
                    octets = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeliveryQueue,
                _extension_additions_list_spec_for_DeliveryQueue,
                _root_component_type_list_2_spec_for_DeliveryQueue,
                undefined
            );
            return new DeliveryQueue /* SET_CONSTRUCTOR_CALL */(
                messages,
                octets
            );
        };
    }
    return _cached_decoder_for_DeliveryQueue(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryQueue */
let _cached_encoder_for_DeliveryQueue: $.ASN1Encoder<DeliveryQueue> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryQueue */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryQueue */
/**
 * @summary Encodes a(n) DeliveryQueue into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryQueue, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryQueue(
    value: DeliveryQueue,
    elGetter: $.ASN1Encoder<DeliveryQueue>
) {
    if (!_cached_encoder_for_DeliveryQueue) {
        _cached_encoder_for_DeliveryQueue = function (
            value: DeliveryQueue        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeInteger,
                            $.BER
                        )(value.messages, $.BER),
                        /* IF_ABSENT  */ value.octets === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.octets, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeliveryQueue(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryQueue */

/* eslint-enable */
