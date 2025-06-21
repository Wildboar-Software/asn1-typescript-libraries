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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    G3FacsimileNonBasicParameters,
    _decode_G3FacsimileNonBasicParameters,
    _encode_G3FacsimileNonBasicParameters,
} from '../MTSAbstractService/G3FacsimileNonBasicParameters.ta.mjs';
import {
    TeletexNonBasicParameters,
    _decode_TeletexNonBasicParameters,
    _encode_TeletexNonBasicParameters,
} from '../MTSAbstractService/TeletexNonBasicParameters.ta.mjs';
/**
 * @summary NonBasicParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NonBasicParameters ::= SET {
 *   g3-facsimile  [1]  G3FacsimileNonBasicParameters DEFAULT {},
 *   teletex       [2]  TeletexNonBasicParameters DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class NonBasicParameters {
    constructor(
        /**
         * @summary `g3_facsimile`.
         * @public
         * @readonly
         */
        readonly g3_facsimile: OPTIONAL<G3FacsimileNonBasicParameters>,
        /**
         * @summary `teletex`.
         * @public
         * @readonly
         */
        readonly teletex: OPTIONAL<TeletexNonBasicParameters>
    ) {}

    /**
     * @summary Restructures an object into a NonBasicParameters
     * @description
     *
     * This takes an `object` and converts it to a `NonBasicParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NonBasicParameters`.
     * @returns {NonBasicParameters}
     */
    public static _from_object(
        _o: { [_K in keyof NonBasicParameters]: NonBasicParameters[_K] }
    ): NonBasicParameters {
        return new NonBasicParameters(_o.g3_facsimile, _o.teletex);
    }

    /**
     * @summary Getter that returns the default value for `g3_facsimile`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_g3_facsimile() {
        return new Uint8ClampedArray([]);
    }
    /**
     * @summary Getter that returns the default value for `teletex`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_teletex() {
        return TeletexNonBasicParameters._from_object(new TeletexNonBasicParameters(
            undefined,
            undefined,
            undefined,
            undefined,
            undefined,
        ));
    }
}

/**
 * @summary The Leading Root Component Types of NonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NonBasicParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'g3-facsimile',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'teletex',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of NonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NonBasicParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NonBasicParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NonBasicParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_NonBasicParameters: $.ASN1Decoder<NonBasicParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NonBasicParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NonBasicParameters} The decoded data structure.
 */
export function _decode_NonBasicParameters(el: _Element) {
    if (!_cached_decoder_for_NonBasicParameters) {
        _cached_decoder_for_NonBasicParameters = function (
            el: _Element
        ): NonBasicParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let g3_facsimile: OPTIONAL<G3FacsimileNonBasicParameters> =
                NonBasicParameters._default_value_for_g3_facsimile;
            let teletex: OPTIONAL<TeletexNonBasicParameters> =
                NonBasicParameters._default_value_for_teletex;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'g3-facsimile': (_el: _Element): void => {
                    g3_facsimile = $._decode_implicit<G3FacsimileNonBasicParameters>(
                        () => _decode_G3FacsimileNonBasicParameters
                    )(_el);
                },
                teletex: (_el: _Element): void => {
                    teletex = $._decode_implicit<TeletexNonBasicParameters>(
                        () => _decode_TeletexNonBasicParameters
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NonBasicParameters,
                _extension_additions_list_spec_for_NonBasicParameters,
                _root_component_type_list_2_spec_for_NonBasicParameters,
                undefined
            );
            return new NonBasicParameters /* SET_CONSTRUCTOR_CALL */(
                g3_facsimile,
                teletex
            );
        };
    }
    return _cached_decoder_for_NonBasicParameters(el);
}

let _cached_encoder_for_NonBasicParameters: $.ASN1Encoder<NonBasicParameters> | null = null;

/**
 * @summary Encodes a(n) NonBasicParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NonBasicParameters, encoded as an ASN.1 Element.
 */
export function _encode_NonBasicParameters(
    value: NonBasicParameters,
    elGetter: $.ASN1Encoder<NonBasicParameters>
) {
    if (!_cached_encoder_for_NonBasicParameters) {
        _cached_encoder_for_NonBasicParameters = function (
            value: NonBasicParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.g3_facsimile === undefined ||
                        $.deepEq(
                            value.g3_facsimile,
                            NonBasicParameters._default_value_for_g3_facsimile
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_G3FacsimileNonBasicParameters,
                                  $.BER
                              )(value.g3_facsimile, $.BER),
                        /* IF_DEFAULT */ value.teletex === undefined ||
                        $.deepEq(
                            value.teletex,
                            NonBasicParameters._default_value_for_teletex
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_TeletexNonBasicParameters,
                                  $.BER
                              )(value.teletex, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_NonBasicParameters(value, elGetter);
}


/* eslint-enable */
