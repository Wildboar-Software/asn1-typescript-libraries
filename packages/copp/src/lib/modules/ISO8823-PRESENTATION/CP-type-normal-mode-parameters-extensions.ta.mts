/* eslint-disable */
import {
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

/* START_OF_SYMBOL_DEFINITION CP_type_normal_mode_parameters_extensions */
/**
 * @summary CP_type_normal_mode_parameters_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CP-type-normal-mode-parameters-extensions ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class CP_type_normal_mode_parameters_extensions {
    constructor(
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CP_type_normal_mode_parameters_extensions
     * @description
     *
     * This takes an `object` and converts it to a `CP_type_normal_mode_parameters_extensions`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CP_type_normal_mode_parameters_extensions`.
     * @returns {CP_type_normal_mode_parameters_extensions}
     */
    public static _from_object(
        _o: {
            [_K in keyof CP_type_normal_mode_parameters_extensions]: CP_type_normal_mode_parameters_extensions[_K];
        }
    ): CP_type_normal_mode_parameters_extensions {
        return new CP_type_normal_mode_parameters_extensions(
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters_extensions */
/**
 * @summary The Leading Root Component Types of CP_type_normal_mode_parameters_extensions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters_extensions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters_extensions */
/**
 * @summary The Trailing Root Component Types of CP_type_normal_mode_parameters_extensions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters_extensions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CP_type_normal_mode_parameters_extensions */
/**
 * @summary The Extension Addition Component Types of CP_type_normal_mode_parameters_extensions
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CP_type_normal_mode_parameters_extensions: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CP_type_normal_mode_parameters_extensions */
let _cached_decoder_for_CP_type_normal_mode_parameters_extensions: $.ASN1Decoder<CP_type_normal_mode_parameters_extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _decode_CP_type_normal_mode_parameters_extensions */
/**
 * @summary Decodes an ASN.1 element into a(n) CP_type_normal_mode_parameters_extensions
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CP_type_normal_mode_parameters_extensions} The decoded data structure.
 */
export function _decode_CP_type_normal_mode_parameters_extensions(
    el: _Element
) {
    if (!_cached_decoder_for_CP_type_normal_mode_parameters_extensions) {
        _cached_decoder_for_CP_type_normal_mode_parameters_extensions = function (
            el: _Element
        ): CP_type_normal_mode_parameters_extensions {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {};
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_CP_type_normal_mode_parameters_extensions,
                _extension_additions_list_spec_for_CP_type_normal_mode_parameters_extensions,
                _root_component_type_list_2_spec_for_CP_type_normal_mode_parameters_extensions,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new CP_type_normal_mode_parameters_extensions /* SEQUENCE_CONSTRUCTOR_CALL */(
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_CP_type_normal_mode_parameters_extensions(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CP_type_normal_mode_parameters_extensions */
let _cached_encoder_for_CP_type_normal_mode_parameters_extensions: $.ASN1Encoder<CP_type_normal_mode_parameters_extensions> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CP_type_normal_mode_parameters_extensions */

/* START_OF_SYMBOL_DEFINITION _encode_CP_type_normal_mode_parameters_extensions */
/**
 * @summary Encodes a(n) CP_type_normal_mode_parameters_extensions into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CP_type_normal_mode_parameters_extensions, encoded as an ASN.1 Element.
 */
export function _encode_CP_type_normal_mode_parameters_extensions(
    value: CP_type_normal_mode_parameters_extensions,
    elGetter: $.ASN1Encoder<CP_type_normal_mode_parameters_extensions>
) {
    if (!_cached_encoder_for_CP_type_normal_mode_parameters_extensions) {
        _cached_encoder_for_CP_type_normal_mode_parameters_extensions = function (
            value: CP_type_normal_mode_parameters_extensions        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_CP_type_normal_mode_parameters_extensions(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_CP_type_normal_mode_parameters_extensions */

/* eslint-enable */
