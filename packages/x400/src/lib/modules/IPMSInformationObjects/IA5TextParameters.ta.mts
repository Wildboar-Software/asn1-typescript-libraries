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
    Repertoire,
    _enum_for_Repertoire,
    Repertoire_ia5 /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_Repertoire,
    _encode_Repertoire,
} from '../IPMSInformationObjects/Repertoire.ta.mjs';
/**
 * @summary IA5TextParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IA5TextParameters ::= SET {repertoire  [0]  Repertoire DEFAULT ia5
 * }
 * ```
 *
 */
export class IA5TextParameters {
    constructor(
        /**
         * @summary `repertoire`.
         * @public
         * @readonly
         */
        readonly repertoire: OPTIONAL<Repertoire>
    ) {}

    /**
     * @summary Restructures an object into a IA5TextParameters
     * @description
     *
     * This takes an `object` and converts it to a `IA5TextParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IA5TextParameters`.
     * @returns {IA5TextParameters}
     */
    public static _from_object(
        _o: { [_K in keyof IA5TextParameters]: IA5TextParameters[_K] }
    ): IA5TextParameters {
        return new IA5TextParameters(_o.repertoire);
    }

    /**
     * @summary Getter that returns the default value for `repertoire`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_repertoire(): Repertoire {
        return Repertoire_ia5;
    }
    /**
     * @summary The enum used as the type of the component `repertoire`
     * @public
     * @static
     */

    public static _enum_for_repertoire = _enum_for_Repertoire;
}

/**
 * @summary The Leading Root Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IA5TextParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'repertoire',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IA5TextParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of IA5TextParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IA5TextParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_IA5TextParameters: $.ASN1Decoder<IA5TextParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IA5TextParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IA5TextParameters} The decoded data structure.
 */
export function _decode_IA5TextParameters(el: _Element): IA5TextParameters {
    if (!_cached_decoder_for_IA5TextParameters) {
        _cached_decoder_for_IA5TextParameters = function (
            el: _Element
        ): IA5TextParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let repertoire: OPTIONAL<Repertoire> =
                IA5TextParameters._default_value_for_repertoire;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                repertoire: (_el: _Element): void => {
                    repertoire = $._decode_implicit<Repertoire>(
                        () => _decode_Repertoire
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_IA5TextParameters,
                _extension_additions_list_spec_for_IA5TextParameters,
                _root_component_type_list_2_spec_for_IA5TextParameters,
                undefined
            );
            return new IA5TextParameters /* SET_CONSTRUCTOR_CALL */(repertoire);
        };
    }
    return _cached_decoder_for_IA5TextParameters(el);
}

let _cached_encoder_for_IA5TextParameters: $.ASN1Encoder<IA5TextParameters> | null = null;

/**
 * @summary Encodes a(n) IA5TextParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IA5TextParameters, encoded as an ASN.1 Element.
 */
export function _encode_IA5TextParameters(
    value: IA5TextParameters,
    elGetter: $.ASN1Encoder<IA5TextParameters>
): _Element {
    if (!_cached_encoder_for_IA5TextParameters) {
        _cached_encoder_for_IA5TextParameters = function (
            value: IA5TextParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.repertoire === undefined ||
                        $.deepEq(
                            value.repertoire,
                            IA5TextParameters._default_value_for_repertoire
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Repertoire,
                                  $.BER
                              )(value.repertoire, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IA5TextParameters(value, elGetter);
}


/* eslint-enable */
