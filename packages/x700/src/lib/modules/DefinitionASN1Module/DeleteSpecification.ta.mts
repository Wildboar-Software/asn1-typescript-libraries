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
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of DeleteSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DeleteSpecification: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DeleteSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DeleteSpecification: $.ComponentSpec[] = [];

let _cached_decoder_for_DeleteSpecification: $.ASN1Decoder<DeleteSpecification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeleteSpecification} The decoded data structure.
 */
export function _decode_DeleteSpecification(el: _Element): DeleteSpecification {
    if (!_cached_decoder_for_DeleteSpecification) {
        _cached_decoder_for_DeleteSpecification = function (
            el: _Element
        ): DeleteSpecification {
            let deleteModifier: OPTIONAL<DeleteSpecification_deleteModifier>;
            let parameter: OPTIONAL<TemplateList>;
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
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DeleteSpecification,
                _extension_additions_list_spec_for_DeleteSpecification,
                _root_component_type_list_2_spec_for_DeleteSpecification,
                undefined
            );
            return new DeleteSpecification (
                deleteModifier,
                parameter
            );
        };
    }
    return _cached_decoder_for_DeleteSpecification(el);
}

let _cached_encoder_for_DeleteSpecification: $.ASN1Encoder<DeleteSpecification> | null = null;

/**
 * @summary Encodes a(n) DeleteSpecification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteSpecification, encoded as an ASN.1 Element.
 */
export function _encode_DeleteSpecification(
    value: DeleteSpecification,
    elGetter: $.ASN1Encoder<DeleteSpecification>
): _Element {
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


/* eslint-enable */
