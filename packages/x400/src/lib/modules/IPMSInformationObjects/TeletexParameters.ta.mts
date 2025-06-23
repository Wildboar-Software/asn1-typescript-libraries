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
    TeletexNonBasicParameters,
    _decode_TeletexNonBasicParameters,
    _encode_TeletexNonBasicParameters,
} from '../MTSAbstractService/TeletexNonBasicParameters.ta.mjs';
/**
 * @summary TeletexParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TeletexParameters ::= SET {
 *   number-of-pages       [0]  INTEGER OPTIONAL,
 *   telex-compatible      [1]  BOOLEAN DEFAULT FALSE,
 *   non-basic-parameters  [2]  TeletexNonBasicParameters OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class TeletexParameters {
    constructor(
        /**
         * @summary `number_of_pages`.
         * @public
         * @readonly
         */
        readonly number_of_pages: OPTIONAL<INTEGER>,
        /**
         * @summary `telex_compatible`.
         * @public
         * @readonly
         */
        readonly telex_compatible: OPTIONAL<BOOLEAN>,
        /**
         * @summary `non_basic_parameters`.
         * @public
         * @readonly
         */
        readonly non_basic_parameters: OPTIONAL<TeletexNonBasicParameters>
    ) {}

    /**
     * @summary Restructures an object into a TeletexParameters
     * @description
     *
     * This takes an `object` and converts it to a `TeletexParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TeletexParameters`.
     * @returns {TeletexParameters}
     */
    public static _from_object(
        _o: { [_K in keyof TeletexParameters]: TeletexParameters[_K] }
    ): TeletexParameters {
        return new TeletexParameters(
            _o.number_of_pages,
            _o.telex_compatible,
            _o.non_basic_parameters
        );
    }

    /**
     * @summary Getter that returns the default value for `telex_compatible`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_telex_compatible() {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of TeletexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TeletexParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'number-of-pages',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'telex-compatible',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'non-basic-parameters',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of TeletexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TeletexParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of TeletexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TeletexParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_TeletexParameters: $.ASN1Decoder<TeletexParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TeletexParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TeletexParameters} The decoded data structure.
 */
export function _decode_TeletexParameters(el: _Element) {
    if (!_cached_decoder_for_TeletexParameters) {
        _cached_decoder_for_TeletexParameters = function (
            el: _Element
        ): TeletexParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let number_of_pages: OPTIONAL<INTEGER>;
            let telex_compatible: OPTIONAL<BOOLEAN> =
                TeletexParameters._default_value_for_telex_compatible;
            let non_basic_parameters: OPTIONAL<TeletexNonBasicParameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'number-of-pages': (_el: _Element): void => {
                    number_of_pages = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'telex-compatible': (_el: _Element): void => {
                    telex_compatible = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'non-basic-parameters': (_el: _Element): void => {
                    non_basic_parameters = $._decode_implicit<TeletexNonBasicParameters>(
                        () => _decode_TeletexNonBasicParameters
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TeletexParameters,
                _extension_additions_list_spec_for_TeletexParameters,
                _root_component_type_list_2_spec_for_TeletexParameters,
                undefined
            );
            return new TeletexParameters /* SET_CONSTRUCTOR_CALL */(
                number_of_pages,
                telex_compatible,
                non_basic_parameters
            );
        };
    }
    return _cached_decoder_for_TeletexParameters(el);
}

let _cached_encoder_for_TeletexParameters: $.ASN1Encoder<TeletexParameters> | null = null;

/**
 * @summary Encodes a(n) TeletexParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TeletexParameters, encoded as an ASN.1 Element.
 */
export function _encode_TeletexParameters(
    value: TeletexParameters,
    elGetter: $.ASN1Encoder<TeletexParameters>
) {
    if (!_cached_encoder_for_TeletexParameters) {
        _cached_encoder_for_TeletexParameters = function (
            value: TeletexParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.number_of_pages === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => $._encodeInteger,
                                  $.BER
                              )(value.number_of_pages, $.BER),
                        /* IF_DEFAULT */ value.telex_compatible === undefined ||
                        $.deepEq(
                            value.telex_compatible,
                            TeletexParameters._default_value_for_telex_compatible
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => $._encodeBoolean,
                                  $.BER
                              )(value.telex_compatible, $.BER),
                        /* IF_ABSENT  */ value.non_basic_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TeletexNonBasicParameters,
                                  $.BER
                              )(value.non_basic_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TeletexParameters(value, elGetter);
}


/* eslint-enable */
