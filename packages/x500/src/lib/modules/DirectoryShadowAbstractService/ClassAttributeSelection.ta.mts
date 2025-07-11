/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ClassAttributes,
    _decode_ClassAttributes,
    _encode_ClassAttributes,
} from "../DirectoryShadowAbstractService/ClassAttributes.ta.mjs";
/**
 * @summary ClassAttributeSelection
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClassAttributeSelection ::= SEQUENCE {
 *   class            OBJECT IDENTIFIER OPTIONAL,
 *   classAttributes  ClassAttributes DEFAULT allAttributes:NULL }
 * ```
 *
 */
export class ClassAttributeSelection {
    constructor(
        /**
         * @summary `class_`.
         * @public
         * @readonly
         */
        readonly class_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `classAttributes`.
         * @public
         * @readonly
         */
        readonly classAttributes: OPTIONAL<ClassAttributes>
    ) {}

    /**
     * @summary Restructures an object into a ClassAttributeSelection
     * @description
     *
     * This takes an `object` and converts it to a `ClassAttributeSelection`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ClassAttributeSelection`.
     * @returns {ClassAttributeSelection}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof ClassAttributeSelection]: ClassAttributeSelection[_K];
            }
        >
    ): ClassAttributeSelection {
        return new ClassAttributeSelection(_o.class_, _o.classAttributes);
    }

    /**
     * @summary Getter that returns the default value for `classAttributes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_classAttributes(): ClassAttributes {
        return { allAttributes: null };
    }
}

/**
 * @summary The Leading Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "class",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "classAttributes",
        true,
        $.not($.hasTag(_TagClass.universal, 6))
    ),
];

/**
 * @summary The Trailing Root Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of ClassAttributeSelection
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ClassAttributeSelection: $.ComponentSpec[] = [];

let _cached_decoder_for_ClassAttributeSelection: $.ASN1Decoder<ClassAttributeSelection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClassAttributeSelection
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClassAttributeSelection} The decoded data structure.
 */
export function _decode_ClassAttributeSelection(el: _Element): ClassAttributeSelection {
    if (!_cached_decoder_for_ClassAttributeSelection) {
        _cached_decoder_for_ClassAttributeSelection = function (
            el: _Element
        ): ClassAttributeSelection {
            let class_: OPTIONAL<OBJECT_IDENTIFIER>;
            let classAttributes: OPTIONAL<ClassAttributes> =
                ClassAttributeSelection._default_value_for_classAttributes;
            const callbacks: $.DecodingMap = {
                class: (_el: _Element): void => {
                    class_ = $._decodeObjectIdentifier(_el);
                },
                classAttributes: (_el: _Element): void => {
                    classAttributes = _decode_ClassAttributes(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_ClassAttributeSelection,
                _extension_additions_list_spec_for_ClassAttributeSelection,
                _root_component_type_list_2_spec_for_ClassAttributeSelection,
                undefined
            );
            return new ClassAttributeSelection(
                class_,
                classAttributes
            );
        };
    }
    return _cached_decoder_for_ClassAttributeSelection(el);
}

let _cached_encoder_for_ClassAttributeSelection: $.ASN1Encoder<ClassAttributeSelection> | null = null;

/**
 * @summary Encodes a(n) ClassAttributeSelection into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassAttributeSelection, encoded as an ASN.1 Element.
 */
export function _encode_ClassAttributeSelection(
    value: ClassAttributeSelection,
    elGetter: $.ASN1Encoder<ClassAttributeSelection>
): _Element {
    if (!_cached_encoder_for_ClassAttributeSelection) {
        _cached_encoder_for_ClassAttributeSelection = function (
            value: ClassAttributeSelection        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.class_ === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(value.class_, $.DER),
                        /* IF_DEFAULT */ value.classAttributes === undefined ||
                        $.deepEq(
                            value.classAttributes,
                            ClassAttributeSelection._default_value_for_classAttributes
                        )
                            ? undefined
                            : _encode_ClassAttributes(
                                  value.classAttributes,
                                  $.DER
                              ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ClassAttributeSelection(value, elGetter);
}


/* eslint-enable */
