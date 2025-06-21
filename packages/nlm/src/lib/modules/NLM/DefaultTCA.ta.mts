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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta.mjs';

/**
 * @summary DefaultTCA
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DefaultTCA ::= SEQUENCE {
 *   subscription               [0]  BOOLEAN,
 *   supportedThroughClasses    [1]  SET OF INTEGER OPTIONAL,
 *   selectedThroughputClasses  [2]  BidirectionalValues OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DefaultTCA {
    constructor(
        /**
         * @summary `subscription`.
         * @public
         * @readonly
         */
        readonly subscription: BOOLEAN,
        /**
         * @summary `supportedThroughClasses`.
         * @public
         * @readonly
         */
        readonly supportedThroughClasses: OPTIONAL<INTEGER[]>,
        /**
         * @summary `selectedThroughputClasses`.
         * @public
         * @readonly
         */
        readonly selectedThroughputClasses: OPTIONAL<BidirectionalValues>
    ) {}

    /**
     * @summary Restructures an object into a DefaultTCA
     * @description
     *
     * This takes an `object` and converts it to a `DefaultTCA`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DefaultTCA`.
     * @returns {DefaultTCA}
     */
    public static _from_object(
        _o: { [_K in keyof DefaultTCA]: DefaultTCA[_K] }
    ): DefaultTCA {
        return new DefaultTCA(
            _o.subscription,
            _o.supportedThroughClasses,
            _o.selectedThroughputClasses
        );
    }
}


/**
 * @summary The Leading Root Component Types of DefaultTCA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DefaultTCA: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'subscription',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'supportedThroughClasses',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'selectedThroughputClasses',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of DefaultTCA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DefaultTCA: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of DefaultTCA
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DefaultTCA: $.ComponentSpec[] = [];


let _cached_decoder_for_DefaultTCA: $.ASN1Decoder<DefaultTCA> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DefaultTCA
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DefaultTCA} The decoded data structure.
 */
export function _decode_DefaultTCA(el: _Element) {
    if (!_cached_decoder_for_DefaultTCA) {
        _cached_decoder_for_DefaultTCA = function (el: _Element): DefaultTCA {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let subscription!: BOOLEAN;
            let supportedThroughClasses: OPTIONAL<INTEGER[]>;
            let selectedThroughputClasses: OPTIONAL<BidirectionalValues>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                subscription: (_el: _Element): void => {
                    subscription = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                supportedThroughClasses: (_el: _Element): void => {
                    supportedThroughClasses = $._decode_implicit<INTEGER[]>(
                        () => $._decodeSetOf<INTEGER>(() => $._decodeInteger)
                    )(_el);
                },
                selectedThroughputClasses: (_el: _Element): void => {
                    selectedThroughputClasses = $._decode_implicit<BidirectionalValues>(
                        () => _decode_BidirectionalValues
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DefaultTCA,
                _extension_additions_list_spec_for_DefaultTCA,
                _root_component_type_list_2_spec_for_DefaultTCA,
                undefined
            );
            return new DefaultTCA /* SEQUENCE_CONSTRUCTOR_CALL */(
                subscription,
                supportedThroughClasses,
                selectedThroughputClasses
            );
        };
    }
    return _cached_decoder_for_DefaultTCA(el);
}


let _cached_encoder_for_DefaultTCA: $.ASN1Encoder<DefaultTCA> | null = null;


/**
 * @summary Encodes a(n) DefaultTCA into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DefaultTCA, encoded as an ASN.1 Element.
 */
export function _encode_DefaultTCA(
    value: DefaultTCA,
    elGetter: $.ASN1Encoder<DefaultTCA>
) {
    if (!_cached_encoder_for_DefaultTCA) {
        _cached_encoder_for_DefaultTCA = function (
            value: DefaultTCA        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => $._encodeBoolean,
                            $.BER
                        )(value.subscription, $.BER),
                        /* IF_ABSENT  */ value.supportedThroughClasses ===
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
                              )(value.supportedThroughClasses, $.BER),
                        /* IF_ABSENT  */ value.selectedThroughputClasses ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_BidirectionalValues,
                                  $.BER
                              )(value.selectedThroughputClasses, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DefaultTCA(value, elGetter);
}


/* eslint-enable */
