/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
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
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta.mjs';

/**
 * @summary NonStandardDPS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonStandardDPS ::= SEQUENCE {
 *   subscription          [0]  BOOLEAN,
 *   supportedPacketSizes  [1]  SET OF INTEGER OPTIONAL,
 *   selectedPacketSizes   [2]  BidirectionalValues OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class NonStandardDPS {
    constructor(
        /**
         * @summary `subscription`.
         * @public
         * @readonly
         */
        readonly subscription: BOOLEAN,
        /**
         * @summary `supportedPacketSizes`.
         * @public
         * @readonly
         */
        readonly supportedPacketSizes: OPTIONAL<INTEGER[]>,
        /**
         * @summary `selectedPacketSizes`.
         * @public
         * @readonly
         */
        readonly selectedPacketSizes: OPTIONAL<BidirectionalValues>
    ) {}

    /**
     * @summary Restructures an object into a NonStandardDPS
     * @description
     *
     * This takes an `object` and converts it to a `NonStandardDPS`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonStandardDPS`.
     * @returns {NonStandardDPS}
     */
    public static _from_object(
        _o: { [_K in keyof NonStandardDPS]: NonStandardDPS[_K] }
    ): NonStandardDPS {
        return new NonStandardDPS(
            _o.subscription,
            _o.supportedPacketSizes,
            _o.selectedPacketSizes
        );
    }
}


/**
 * @summary The Leading Root Component Types of NonStandardDPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonStandardDPS: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subscription',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'supportedPacketSizes',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'selectedPacketSizes',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of NonStandardDPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonStandardDPS: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of NonStandardDPS
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonStandardDPS: $.ComponentSpec[] = [];


let _cached_decoder_for_NonStandardDPS: $.ASN1Decoder<NonStandardDPS> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) NonStandardDPS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonStandardDPS} The decoded data structure.
 */
export function _decode_NonStandardDPS(el: _Element) {
    if (!_cached_decoder_for_NonStandardDPS) {
        _cached_decoder_for_NonStandardDPS = function (
            el: _Element
        ): NonStandardDPS {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subscription!: BOOLEAN;
            let supportedPacketSizes: OPTIONAL<INTEGER[]>;
            let selectedPacketSizes: OPTIONAL<BidirectionalValues>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subscription: (_el: _Element): void => {
                    subscription = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                supportedPacketSizes: (_el: _Element): void => {
                    supportedPacketSizes = $._decode_implicit<INTEGER[]>(() =>
                        $._decodeSetOf<INTEGER>(() => $._decodeInteger)
                    )(_el);
                },
                selectedPacketSizes: (_el: _Element): void => {
                    selectedPacketSizes = $._decode_implicit<BidirectionalValues>(
                        () => _decode_BidirectionalValues
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonStandardDPS,
                _extension_additions_list_spec_for_NonStandardDPS,
                _root_component_type_list_2_spec_for_NonStandardDPS,
                undefined
            );
            return new NonStandardDPS /* SEQUENCE_CONSTRUCTOR_CALL */(
                subscription,
                supportedPacketSizes,
                selectedPacketSizes
            );
        };
    }
    return _cached_decoder_for_NonStandardDPS(el);
}


let _cached_encoder_for_NonStandardDPS: $.ASN1Encoder<NonStandardDPS> | null = null;


/**
 * @summary Encodes a(n) NonStandardDPS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonStandardDPS, encoded as an ASN.1 Element.
 */
export function _encode_NonStandardDPS(
    value: NonStandardDPS,
    elGetter: $.ASN1Encoder<NonStandardDPS>
) {
    if (!_cached_encoder_for_NonStandardDPS) {
        _cached_encoder_for_NonStandardDPS = function (
            value: NonStandardDPS        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.subscription, $.BER),
                        /* IF_ABSENT  */ value.supportedPacketSizes ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<INTEGER>(
                                          () => $._encodeInteger,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.supportedPacketSizes, $.BER),
                        /* IF_ABSENT  */ value.selectedPacketSizes === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_BidirectionalValues,
                                  $.BER
                              )(value.selectedPacketSizes, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonStandardDPS(value, elGetter);
}


/* eslint-enable */
