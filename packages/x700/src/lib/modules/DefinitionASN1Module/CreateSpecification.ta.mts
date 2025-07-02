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
    CreateSpecification_createModifier,
    _decode_CreateSpecification_createModifier,
    _encode_CreateSpecification_createModifier,
} from '../DefinitionASN1Module/CreateSpecification-createModifier.ta.mjs';
import {
    TemplateList,
    _decode_TemplateList,
    _encode_TemplateList,
} from '../DefinitionASN1Module/TemplateList.ta.mjs';

/**
 * @summary CreateSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CreateSpecification ::= SEQUENCE {
 *   createModifier
 *     BIT STRING {withReferenceObject(0), withAutomaticInstanceNaming(1)}
 *       OPTIONAL,
 *   parameter       TemplateList OPTIONAL
 * }
 * ```
 *
 */
export class CreateSpecification {
    constructor(
        /**
         * @summary `createModifier`.
         * @public
         * @readonly
         */
        readonly createModifier: OPTIONAL<CreateSpecification_createModifier>,
        /**
         * @summary `parameter`.
         * @public
         * @readonly
         */
        readonly parameter: OPTIONAL<TemplateList>
    ) {}

    /**
     * @summary Restructures an object into a CreateSpecification
     * @description
     *
     * This takes an `object` and converts it to a `CreateSpecification`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateSpecification`.
     * @returns {CreateSpecification}
     */
    public static _from_object(
        _o: { [_K in keyof CreateSpecification]: CreateSpecification[_K] }
    ): CreateSpecification {
        return new CreateSpecification(_o.createModifier, _o.parameter);
    }
}


/**
 * @summary The Leading Root Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CreateSpecification: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'createModifier',
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        'parameter',
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];


/**
 * @summary The Trailing Root Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CreateSpecification: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of CreateSpecification
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CreateSpecification: $.ComponentSpec[] = [];


let _cached_decoder_for_CreateSpecification: $.ASN1Decoder<CreateSpecification> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) CreateSpecification
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CreateSpecification} The decoded data structure.
 */
export function _decode_CreateSpecification(el: _Element): CreateSpecification {
    if (!_cached_decoder_for_CreateSpecification) {
        _cached_decoder_for_CreateSpecification = function (
            el: _Element
        ): CreateSpecification {
            let createModifier: OPTIONAL<CreateSpecification_createModifier>;
            let parameter: OPTIONAL<TemplateList>;
            const callbacks: $.DecodingMap = {
                createModifier: (_el: _Element): void => {
                    createModifier = _decode_CreateSpecification_createModifier(
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
                _root_component_type_list_1_spec_for_CreateSpecification,
                _extension_additions_list_spec_for_CreateSpecification,
                _root_component_type_list_2_spec_for_CreateSpecification,
                undefined
            );
            return new CreateSpecification (
                createModifier,
                parameter
            );
        };
    }
    return _cached_decoder_for_CreateSpecification(el);
}


let _cached_encoder_for_CreateSpecification: $.ASN1Encoder<CreateSpecification> | null = null;


/**
 * @summary Encodes a(n) CreateSpecification into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateSpecification, encoded as an ASN.1 Element.
 */
export function _encode_CreateSpecification(
    value: CreateSpecification,
    elGetter: $.ASN1Encoder<CreateSpecification>
): _Element {
    if (!_cached_encoder_for_CreateSpecification) {
        _cached_encoder_for_CreateSpecification = function (
            value: CreateSpecification        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.createModifier === undefined
                            ? undefined
                            : _encode_CreateSpecification_createModifier(
                                  value.createModifier,
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
    return _cached_encoder_for_CreateSpecification(value, elGetter);
}


/* eslint-enable */
