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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

/**
 * @summary V42BisCompressionParameter
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * V42BisCompressionParameter ::= SEQUENCE {
 *   dictionary-size           [0]  INTEGER DEFAULT 12,
 *   largest-compressed-chain  [1]  INTEGER DEFAULT 512,
 *   last-entries-to-delete    [2]  INTEGER DEFAULT 256
 * }
 * ```
 *
 */
export class V42BisCompressionParameter {
    constructor(
        /**
         * @summary `dictionary_size`.
         * @public
         * @readonly
         */
        readonly dictionary_size: OPTIONAL<INTEGER>,
        /**
         * @summary `largest_compressed_chain`.
         * @public
         * @readonly
         */
        readonly largest_compressed_chain: OPTIONAL<INTEGER>,
        /**
         * @summary `last_entries_to_delete`.
         * @public
         * @readonly
         */
        readonly last_entries_to_delete: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a V42BisCompressionParameter
     * @description
     *
     * This takes an `object` and converts it to a `V42BisCompressionParameter`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V42BisCompressionParameter`.
     * @returns {V42BisCompressionParameter}
     */
    public static _from_object(
        _o: {
            [_K in keyof V42BisCompressionParameter]: V42BisCompressionParameter[_K];
        }
    ): V42BisCompressionParameter {
        return new V42BisCompressionParameter(
            _o.dictionary_size,
            _o.largest_compressed_chain,
            _o.last_entries_to_delete
        );
    }

    /**
     * @summary Getter that returns the default value for `dictionary_size`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dictionary_size(): INTEGER {
        return 12;
    }
    /**
     * @summary Getter that returns the default value for `largest_compressed_chain`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_largest_compressed_chain(): INTEGER {
        return 512;
    }
    /**
     * @summary Getter that returns the default value for `last_entries_to_delete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_last_entries_to_delete(): INTEGER {
        return 256;
    }
}

/**
 * @summary The Leading Root Component Types of V42BisCompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_V42BisCompressionParameter: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'dictionary-size',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'largest-compressed-chain',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'last-entries-to-delete',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of V42BisCompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_V42BisCompressionParameter: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of V42BisCompressionParameter
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_V42BisCompressionParameter: $.ComponentSpec[] = [];

let _cached_decoder_for_V42BisCompressionParameter: $.ASN1Decoder<V42BisCompressionParameter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V42BisCompressionParameter
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {V42BisCompressionParameter} The decoded data structure.
 */
export function _decode_V42BisCompressionParameter(el: _Element): V42BisCompressionParameter {
    if (!_cached_decoder_for_V42BisCompressionParameter) {
        _cached_decoder_for_V42BisCompressionParameter = function (
            el: _Element
        ): V42BisCompressionParameter {
            let dictionary_size: OPTIONAL<INTEGER> =
                V42BisCompressionParameter._default_value_for_dictionary_size;
            let largest_compressed_chain: OPTIONAL<INTEGER> =
                V42BisCompressionParameter._default_value_for_largest_compressed_chain;
            let last_entries_to_delete: OPTIONAL<INTEGER> =
                V42BisCompressionParameter._default_value_for_last_entries_to_delete;
            const callbacks: $.DecodingMap = {
                'dictionary-size': (_el: _Element): void => {
                    dictionary_size = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'largest-compressed-chain': (_el: _Element): void => {
                    largest_compressed_chain = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'last-entries-to-delete': (_el: _Element): void => {
                    last_entries_to_delete = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_V42BisCompressionParameter,
                _extension_additions_list_spec_for_V42BisCompressionParameter,
                _root_component_type_list_2_spec_for_V42BisCompressionParameter,
                undefined
            );
            return new V42BisCompressionParameter (
                dictionary_size,
                largest_compressed_chain,
                last_entries_to_delete
            );
        };
    }
    return _cached_decoder_for_V42BisCompressionParameter(el);
}

let _cached_encoder_for_V42BisCompressionParameter: $.ASN1Encoder<V42BisCompressionParameter> | null = null;

/**
 * @summary Encodes a(n) V42BisCompressionParameter into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V42BisCompressionParameter, encoded as an ASN.1 Element.
 */
export function _encode_V42BisCompressionParameter(
    value: V42BisCompressionParameter,
    elGetter: $.ASN1Encoder<V42BisCompressionParameter>
): _Element {
    if (!_cached_encoder_for_V42BisCompressionParameter) {
        _cached_encoder_for_V42BisCompressionParameter = function (
            value: V42BisCompressionParameter        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.dictionary_size === undefined ||
                        $.deepEq(
                            value.dictionary_size,
                            V42BisCompressionParameter._default_value_for_dictionary_size
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.dictionary_size, $.BER),
                        /* IF_DEFAULT */ value.largest_compressed_chain ===
                            undefined ||
                        $.deepEq(
                            value.largest_compressed_chain,
                            V42BisCompressionParameter._default_value_for_largest_compressed_chain
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.largest_compressed_chain, $.BER),
                        /* IF_DEFAULT */ value.last_entries_to_delete ===
                            undefined ||
                        $.deepEq(
                            value.last_entries_to_delete,
                            V42BisCompressionParameter._default_value_for_last_entries_to_delete
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.last_entries_to_delete, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_V42BisCompressionParameter(value, elGetter);
}


/* eslint-enable */
