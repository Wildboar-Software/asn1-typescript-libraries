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
    VideotexSyntax,
    _decode_VideotexSyntax,
    _encode_VideotexSyntax,
} from '../IPMSInformationObjects/VideotexSyntax.ta.mjs';
/**
 * @summary VideotexParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * VideotexParameters ::= SET {syntax  [0]  VideotexSyntax OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class VideotexParameters {
    constructor(
        /**
         * @summary `syntax`.
         * @public
         * @readonly
         */
        readonly syntax: OPTIONAL<VideotexSyntax>
    ) {}

    /**
     * @summary Restructures an object into a VideotexParameters
     * @description
     *
     * This takes an `object` and converts it to a `VideotexParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `VideotexParameters`.
     * @returns {VideotexParameters}
     */
    public static _from_object(
        _o: { [_K in keyof VideotexParameters]: VideotexParameters[_K] }
    ): VideotexParameters {
        return new VideotexParameters(_o.syntax);
    }
}

/**
 * @summary The Leading Root Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_VideotexParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'syntax',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_VideotexParameters: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of VideotexParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_VideotexParameters: $.ComponentSpec[] = [];

let _cached_decoder_for_VideotexParameters: $.ASN1Decoder<VideotexParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VideotexParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {VideotexParameters} The decoded data structure.
 */
export function _decode_VideotexParameters(el: _Element) {
    if (!_cached_decoder_for_VideotexParameters) {
        _cached_decoder_for_VideotexParameters = function (
            el: _Element
        ): VideotexParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let syntax: OPTIONAL<VideotexSyntax>;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                syntax: (_el: _Element): void => {
                    syntax = $._decode_implicit<VideotexSyntax>(
                        () => _decode_VideotexSyntax
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_VideotexParameters,
                _extension_additions_list_spec_for_VideotexParameters,
                _root_component_type_list_2_spec_for_VideotexParameters,
                undefined
            );
            return new VideotexParameters /* SET_CONSTRUCTOR_CALL */(syntax);
        };
    }
    return _cached_decoder_for_VideotexParameters(el);
}

let _cached_encoder_for_VideotexParameters: $.ASN1Encoder<VideotexParameters> | null = null;

/**
 * @summary Encodes a(n) VideotexParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VideotexParameters, encoded as an ASN.1 Element.
 */
export function _encode_VideotexParameters(
    value: VideotexParameters,
    elGetter: $.ASN1Encoder<VideotexParameters>
) {
    if (!_cached_encoder_for_VideotexParameters) {
        _cached_encoder_for_VideotexParameters = function (
            value: VideotexParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.syntax === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_VideotexSyntax,
                                  $.BER
                              )(value.syntax, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_VideotexParameters(value, elGetter);
}


/* eslint-enable */
