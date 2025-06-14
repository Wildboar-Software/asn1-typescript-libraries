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
    RegistrationTypes_standard_parameters,
    _decode_RegistrationTypes_standard_parameters,
    _encode_RegistrationTypes_standard_parameters,
} from '../MTSAbstractService/RegistrationTypes-standard-parameters.ta.mjs';
import {
    ExtensionType,
    _decode_ExtensionType,
    _encode_ExtensionType,
} from "./ExtensionType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION RegistrationTypes */
/**
 * @summary RegistrationTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RegistrationTypes ::= SEQUENCE {
 *   standard-parameters
 *     [0]  BIT STRING {user-name(0), user-address(1), deliverable-class(2),
 *                      default-delivery-controls(3), redirections(4),
 *                      restricted-delivery(5)} OPTIONAL,
 *   extensions
 *     [1]  SET OF EXTENSION.&id({RegisterExtensions}) OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class RegistrationTypes {
    constructor(
        /**
         * @summary `standard_parameters`.
         * @public
         * @readonly
         */
        readonly standard_parameters: OPTIONAL<RegistrationTypes_standard_parameters>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionType[]>
    ) {}

    /**
     * @summary Restructures an object into a RegistrationTypes
     * @description
     *
     * This takes an `object` and converts it to a `RegistrationTypes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RegistrationTypes`.
     * @returns {RegistrationTypes}
     */
    public static _from_object(
        _o: { [_K in keyof RegistrationTypes]: RegistrationTypes[_K] }
    ): RegistrationTypes {
        return new RegistrationTypes(_o.standard_parameters, _o.extensions);
    }
}
/* END_OF_SYMBOL_DEFINITION RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationTypes */
/**
 * @summary The Leading Root Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RegistrationTypes: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'standard-parameters',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationTypes */
/**
 * @summary The Trailing Root Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RegistrationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationTypes */
/**
 * @summary The Extension Addition Component Types of RegistrationTypes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RegistrationTypes: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes */
let _cached_decoder_for_RegistrationTypes: $.ASN1Decoder<RegistrationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _decode_RegistrationTypes */
/**
 * @summary Decodes an ASN.1 element into a(n) RegistrationTypes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RegistrationTypes} The decoded data structure.
 */
export function _decode_RegistrationTypes(el: _Element) {
    if (!_cached_decoder_for_RegistrationTypes) {
        _cached_decoder_for_RegistrationTypes = function (
            el: _Element
        ): RegistrationTypes {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let standard_parameters: OPTIONAL<RegistrationTypes_standard_parameters>;
            let extensions: OPTIONAL<ExtensionType[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'standard-parameters': (_el: _Element): void => {
                    standard_parameters = $._decode_implicit<RegistrationTypes_standard_parameters>(
                        () => _decode_RegistrationTypes_standard_parameters
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionType[]>(() =>
                        $._decodeSetOf<ExtensionType>(
                            () => _decode_ExtensionType
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RegistrationTypes,
                _extension_additions_list_spec_for_RegistrationTypes,
                _root_component_type_list_2_spec_for_RegistrationTypes,
                undefined
            );
            return new RegistrationTypes /* SEQUENCE_CONSTRUCTOR_CALL */(
                standard_parameters,
                extensions
            );
        };
    }
    return _cached_decoder_for_RegistrationTypes(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes */
let _cached_encoder_for_RegistrationTypes: $.ASN1Encoder<RegistrationTypes> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RegistrationTypes */

/* START_OF_SYMBOL_DEFINITION _encode_RegistrationTypes */
/**
 * @summary Encodes a(n) RegistrationTypes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RegistrationTypes, encoded as an ASN.1 Element.
 */
export function _encode_RegistrationTypes(
    value: RegistrationTypes,
    elGetter: $.ASN1Encoder<RegistrationTypes>
) {
    if (!_cached_encoder_for_RegistrationTypes) {
        _cached_encoder_for_RegistrationTypes = function (
            value: RegistrationTypes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.standard_parameters === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () =>
                                      _encode_RegistrationTypes_standard_parameters,
                                  $.BER
                              )(value.standard_parameters, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSetOf<ExtensionType>(
                                          () => _encode_ExtensionType,
                                          $.BER
                                      ),
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RegistrationTypes(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RegistrationTypes */

/* eslint-enable */
