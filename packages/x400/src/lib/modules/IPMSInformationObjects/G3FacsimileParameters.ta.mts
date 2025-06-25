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
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from '../MTSAbstractService/G3FacsimileNonBasicParameters.ta.mjs';
/**
 * @summary G3FacsimileParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * G3FacsimileParameters ::= SET {
 *   number-of-pages       [0]  INTEGER OPTIONAL,
 *   non-basic-parameters  [1]  G3FacsimileNonBasicParameters OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class G3FacsimileParameters {
    constructor(
        /**
         * @summary `number_of_pages`.
         * @public
         * @readonly
         */
        readonly number_of_pages: OPTIONAL<INTEGER>,
        /**
         * @summary `non_basic_parameters`.
         * @public
         * @readonly
         */
        readonly non_basic_parameters: OPTIONAL<G3FacsimileNonBasicParameters>
    ) {}

    /**
     * @summary Restructures an object into a G3FacsimileParameters
     * @description
     *
     * This takes an `object` and converts it to a `G3FacsimileParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `G3FacsimileParameters`.
     * @returns {G3FacsimileParameters}
     */
    public static _from_object(
        _o: { [_K in keyof G3FacsimileParameters]: G3FacsimileParameters[_K] }
    ): G3FacsimileParameters {
        return new G3FacsimileParameters(
            _o.number_of_pages,
            _o.non_basic_parameters
        );
    }
}

/**
 * @summary The Leading Root Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'number-of-pages',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'non-basic-parameters',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of G3FacsimileParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_G3FacsimileParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_G3FacsimileParameters: $.ASN1Decoder<G3FacsimileParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) G3FacsimileParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {G3FacsimileParameters} The decoded data structure.
 */
export function _decode_G3FacsimileParameters(el: _Element): G3FacsimileParameters {
    if (!_cached_decoder_for_G3FacsimileParameters) {
        _cached_decoder_for_G3FacsimileParameters = function (
            el: _Element
        ): G3FacsimileParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let number_of_pages: OPTIONAL<INTEGER>;
            let non_basic_parameters: OPTIONAL<G3FacsimileNonBasicParameters>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'number-of-pages': (_el: _Element): void => {
                    number_of_pages = $._decode_implicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                'non-basic-parameters': (_el: _Element): void => {
                    non_basic_parameters = $._decode_implicit<G3FacsimileNonBasicParameters>(
                        () => _decode_G3FacsimileNonBasicParameters
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_G3FacsimileParameters,
                _extension_additions_list_spec_for_G3FacsimileParameters,
                _root_component_type_list_2_spec_for_G3FacsimileParameters,
                undefined
            );
            return new G3FacsimileParameters /* SET_CONSTRUCTOR_CALL */(
                number_of_pages,
                non_basic_parameters
            );
        };
    }
    return _cached_decoder_for_G3FacsimileParameters(el);
}

let _cached_encoder_for_G3FacsimileParameters: $.ASN1Encoder<G3FacsimileParameters> | null = null;

/**
 * @summary Encodes a(n) G3FacsimileParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The G3FacsimileParameters, encoded as an ASN.1 Element.
 */
export function _encode_G3FacsimileParameters(
    value: G3FacsimileParameters,
    elGetter: $.ASN1Encoder<G3FacsimileParameters>
): _Element {
    if (!_cached_encoder_for_G3FacsimileParameters) {
        _cached_encoder_for_G3FacsimileParameters = function (
            value: G3FacsimileParameters        ): _Element {
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
                        /* IF_ABSENT  */ value.non_basic_parameters ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_G3FacsimileNonBasicParameters,
                                  $.BER
                              )(value.non_basic_parameters, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_G3FacsimileParameters(value, elGetter);
}


/* eslint-enable */
