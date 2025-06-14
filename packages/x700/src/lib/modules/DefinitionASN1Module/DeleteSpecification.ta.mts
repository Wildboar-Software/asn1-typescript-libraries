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
    DeleteSpecification_deleteModifier,
    _enum_for_DeleteSpecification_deleteModifier,
    _decode_DeleteSpecification_deleteModifier,
    _encode_DeleteSpecification_deleteModifier,
} from '../DefinitionASN1Module/DeleteSpecification-deleteModifier.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DeleteSpecification */
/**
 * @summary DeleteSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeleteSpecification ::= SEQUENCE {
 *   deleteModifier
 *     ENUMERATED {onlyIfNoContainedObjects(0), deletesContainedObjects(1)}
 *       OPTIONAL,
 *   parameter       TemplateList OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class DeleteSpecification {
    constructor(
        /**
         * @summary `deleteModifier`.
         * @public
         * @readonly
         */
        readonly deleteModifier: OPTIONAL<DeleteSpecification_deleteModifier>,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a DeleteSpecification
     * @description
     *
     * This takes an `object` and converts it to a `DeleteSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeleteSpecification`.
     * @returns {DeleteSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof DeleteSpecification]: DeleteSpecification[_K] }
    ): DeleteSpecification {
        return new DeleteSpecification(_o.deleteModifier, _o.parameter);
    }

    /**
     * @summary The enum used as the type of the component `deleteModifier`
     * @public
     * @static
     */

    public static _enum_for_deleteModifier = _enum_for_DeleteSpecification_deleteModifier;
}
/* END_OF_SYMBOL_DEFINITION DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteSpecification */
/**
 * @summary The Leading Root Component Types of DeleteSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DeleteSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'deleteModifier',
        true,
        $.hasTag(_TagClass.universal, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteSpecification */
/**
 * @summary The Trailing Root Component Types of DeleteSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteSpecification */
/**
 * @summary The Extension Addition Component Types of DeleteSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteSpecification: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteSpecification */
let _cached_decoder_for_DeleteSpecification: $.ASN1Decoder<DeleteSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _decode_DeleteSpecification */
/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteSpecification} The decoded data structure.
 */
export function _decode_DeleteSpecification(el: _Element) {
    if (!_cached_decoder_for_DeleteSpecification) {
        _cached_decoder_for_DeleteSpecification = function (
            el: _Element
        ): DeleteSpecification {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let deleteModifier: OPTIONAL<DeleteSpecification_deleteModifier>;
            let parameter: OPTIONAL<TemplateList>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                deleteModifier: (_el: _Element): void => {
                    deleteModifier = _decode_DeleteSpecification_deleteModifier(
                        _el
                    );
                },
                parameter: (_el: _Element): void => {
                    parameter = _decode_TemplateList(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteSpecification,
                _extension_additions_list_spec_for_DeleteSpecification,
                _root_component_type_list_2_spec_for_DeleteSpecification,
                undefined
            );
            return new DeleteSpecification /* SEQUENCE_CONSTRUCTOR_CALL */(
                deleteModifier,
                parameter
            );
        };
    }
    return _cached_decoder_for_DeleteSpecification(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteSpecification */
let _cached_encoder_for_DeleteSpecification: $.ASN1Encoder<DeleteSpecification> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeleteSpecification */

/* START_OF_SYMBOL_DEFINITION _encode_DeleteSpecification */
/**
 * @summary Encodes a(n) DeleteSpecification into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSpecification, encoded as an ASN.1 Element.
 */
export function _encode_DeleteSpecification(
    value: DeleteSpecification,
    elGetter: $.ASN1Encoder<DeleteSpecification>
) {
    if (!_cached_encoder_for_DeleteSpecification) {
        _cached_encoder_for_DeleteSpecification = function (
            value: DeleteSpecification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.deleteModifier === undefined
                            ? undefined
                            : _encode_DeleteSpecification_deleteModifier(
                                  value.deleteModifier,
                                  $.BER
                              ),
                        /* IF_ABSENT  */ value.parameter === undefined
                            ? undefined
                            : _encode_TemplateList(value.parameter, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DeleteSpecification(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeleteSpecification */

/* eslint-enable */
