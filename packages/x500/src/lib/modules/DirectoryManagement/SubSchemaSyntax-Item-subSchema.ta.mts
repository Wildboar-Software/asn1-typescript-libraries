/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeTypeDescription,
    _decode_AttributeTypeDescription,
    _encode_AttributeTypeDescription,
} from "../SchemaAdministration/AttributeTypeDescription.ta.mjs";
import {
    DITContentRuleDescription,
    _decode_DITContentRuleDescription,
    _encode_DITContentRuleDescription,
} from "../SchemaAdministration/DITContentRuleDescription.ta.mjs";
import {
    DITStructureRuleDescription,
    _decode_DITStructureRuleDescription,
    _encode_DITStructureRuleDescription,
} from "../SchemaAdministration/DITStructureRuleDescription.ta.mjs";
import {
    MatchingRuleDescription,
    _decode_MatchingRuleDescription,
    _encode_MatchingRuleDescription,
} from "../SchemaAdministration/MatchingRuleDescription.ta.mjs";
import {
    MatchingRuleUseDescription,
    _decode_MatchingRuleUseDescription,
    _encode_MatchingRuleUseDescription,
} from "../SchemaAdministration/MatchingRuleUseDescription.ta.mjs";
import {
    NameFormDescription,
    _decode_NameFormDescription,
    _encode_NameFormDescription,
} from "../SchemaAdministration/NameFormDescription.ta.mjs";
import {
    ObjectClassDescription,
    _decode_ObjectClassDescription,
    _encode_ObjectClassDescription,
} from "../SchemaAdministration/ObjectClassDescription.ta.mjs";
/**
 * @summary SubSchemaSyntax_Item_subSchema
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubSchemaSyntax-Item-subSchema ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class SubSchemaSyntax_Item_subSchema {
    constructor(
        /**
         * @summary `structureRules`.
         * @public
         * @readonly
         */
        readonly structureRules: OPTIONAL<DITStructureRuleDescription[]>,
        /**
         * @summary `contentRules`.
         * @public
         * @readonly
         */
        readonly contentRules: OPTIONAL<DITContentRuleDescription[]>,
        /**
         * @summary `matchingRules`.
         * @public
         * @readonly
         */
        readonly matchingRules: OPTIONAL<MatchingRuleDescription[]>,
        /**
         * @summary `attributeTypes`.
         * @public
         * @readonly
         */
        readonly attributeTypes: OPTIONAL<AttributeTypeDescription[]>,
        /**
         * @summary `objectClasses`.
         * @public
         * @readonly
         */
        readonly objectClasses: OPTIONAL<ObjectClassDescription[]>,
        /**
         * @summary `nameForms`.
         * @public
         * @readonly
         */
        readonly nameForms: OPTIONAL<NameFormDescription[]>,
        /**
         * @summary `matchRuleUses`.
         * @public
         * @readonly
         */
        readonly matchRuleUses: OPTIONAL<MatchingRuleUseDescription[]>
    ) {}

    /**
     * @summary Restructures an object into a SubSchemaSyntax_Item_subSchema
     * @description
     *
     * This takes an `object` and converts it to a `SubSchemaSyntax_Item_subSchema`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubSchemaSyntax_Item_subSchema`.
     * @returns {SubSchemaSyntax_Item_subSchema}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SubSchemaSyntax_Item_subSchema]: SubSchemaSyntax_Item_subSchema[_K];
            }
        >
    ): SubSchemaSyntax_Item_subSchema {
        return new SubSchemaSyntax_Item_subSchema(
            _o.structureRules,
            _o.contentRules,
            _o.matchingRules,
            _o.attributeTypes,
            _o.objectClasses,
            _o.nameForms,
            _o.matchRuleUses
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structureRules",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "contentRules",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "matchingRules",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        "attributeTypes",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        "objectClasses",
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        "nameForms",
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        "matchRuleUses",
        true,
        $.hasTag(_TagClass.context, 7)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubSchemaSyntax_Item_subSchema
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubSchemaSyntax_Item_subSchema: $.ComponentSpec[] = [];

let _cached_decoder_for_SubSchemaSyntax_Item_subSchema: $.ASN1Decoder<SubSchemaSyntax_Item_subSchema> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubSchemaSyntax_Item_subSchema
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubSchemaSyntax_Item_subSchema} The decoded data structure.
 */
export function _decode_SubSchemaSyntax_Item_subSchema(el: _Element) {
    if (!_cached_decoder_for_SubSchemaSyntax_Item_subSchema) {
        _cached_decoder_for_SubSchemaSyntax_Item_subSchema = function (
            el: _Element
        ): SubSchemaSyntax_Item_subSchema {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let structureRules: OPTIONAL<DITStructureRuleDescription[]>;
            let contentRules: OPTIONAL<DITContentRuleDescription[]>;
            let matchingRules: OPTIONAL<MatchingRuleDescription[]>;
            let attributeTypes: OPTIONAL<AttributeTypeDescription[]>;
            let objectClasses: OPTIONAL<ObjectClassDescription[]>;
            let nameForms: OPTIONAL<NameFormDescription[]>;
            let matchRuleUses: OPTIONAL<MatchingRuleUseDescription[]>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                structureRules: (_el: _Element): void => {
                    structureRules = $._decode_explicit<
                        DITStructureRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<DITStructureRuleDescription>(
                            () => _decode_DITStructureRuleDescription
                        )
                    )(_el);
                },
                contentRules: (_el: _Element): void => {
                    contentRules = $._decode_explicit<
                        DITContentRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<DITContentRuleDescription>(
                            () => _decode_DITContentRuleDescription
                        )
                    )(_el);
                },
                matchingRules: (_el: _Element): void => {
                    matchingRules = $._decode_explicit<
                        MatchingRuleDescription[]
                    >(() =>
                        $._decodeSequenceOf<MatchingRuleDescription>(
                            () => _decode_MatchingRuleDescription
                        )
                    )(_el);
                },
                attributeTypes: (_el: _Element): void => {
                    attributeTypes = $._decode_explicit<
                        AttributeTypeDescription[]
                    >(() =>
                        $._decodeSequenceOf<AttributeTypeDescription>(
                            () => _decode_AttributeTypeDescription
                        )
                    )(_el);
                },
                objectClasses: (_el: _Element): void => {
                    objectClasses = $._decode_explicit<
                        ObjectClassDescription[]
                    >(() =>
                        $._decodeSequenceOf<ObjectClassDescription>(
                            () => _decode_ObjectClassDescription
                        )
                    )(_el);
                },
                nameForms: (_el: _Element): void => {
                    nameForms = $._decode_explicit<NameFormDescription[]>(() =>
                        $._decodeSequenceOf<NameFormDescription>(
                            () => _decode_NameFormDescription
                        )
                    )(_el);
                },
                matchRuleUses: (_el: _Element): void => {
                    matchRuleUses = $._decode_explicit<
                        MatchingRuleUseDescription[]
                    >(() =>
                        $._decodeSequenceOf<MatchingRuleUseDescription>(
                            () => _decode_MatchingRuleUseDescription
                        )
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_SubSchemaSyntax_Item_subSchema,
                _extension_additions_list_spec_for_SubSchemaSyntax_Item_subSchema,
                _root_component_type_list_2_spec_for_SubSchemaSyntax_Item_subSchema,
                undefined
            );
            return new SubSchemaSyntax_Item_subSchema(
                /* SEQUENCE_CONSTRUCTOR_CALL */ structureRules,
                contentRules,
                matchingRules,
                attributeTypes,
                objectClasses,
                nameForms,
                matchRuleUses
            );
        };
    }
    return _cached_decoder_for_SubSchemaSyntax_Item_subSchema(el);
}

let _cached_encoder_for_SubSchemaSyntax_Item_subSchema: $.ASN1Encoder<SubSchemaSyntax_Item_subSchema> | null = null;

/**
 * @summary Encodes a(n) SubSchemaSyntax_Item_subSchema into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubSchemaSyntax_Item_subSchema, encoded as an ASN.1 Element.
 */
export function _encode_SubSchemaSyntax_Item_subSchema(
    value: SubSchemaSyntax_Item_subSchema,
    elGetter: $.ASN1Encoder<SubSchemaSyntax_Item_subSchema>
) {
    if (!_cached_encoder_for_SubSchemaSyntax_Item_subSchema) {
        _cached_encoder_for_SubSchemaSyntax_Item_subSchema = function (
            value: SubSchemaSyntax_Item_subSchema        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.structureRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () =>
                                      $._encodeSequenceOf<DITStructureRuleDescription>(
                                          () =>
                                              _encode_DITStructureRuleDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.structureRules, $.DER),
                        /* IF_ABSENT  */ value.contentRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () =>
                                      $._encodeSequenceOf<DITContentRuleDescription>(
                                          () =>
                                              _encode_DITContentRuleDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.contentRules, $.DER),
                        /* IF_ABSENT  */ value.matchingRules === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () =>
                                      $._encodeSequenceOf<MatchingRuleDescription>(
                                          () => _encode_MatchingRuleDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.matchingRules, $.DER),
                        /* IF_ABSENT  */ value.attributeTypes === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  4,
                                  () =>
                                      $._encodeSequenceOf<AttributeTypeDescription>(
                                          () =>
                                              _encode_AttributeTypeDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.attributeTypes, $.DER),
                        /* IF_ABSENT  */ value.objectClasses === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  5,
                                  () =>
                                      $._encodeSequenceOf<ObjectClassDescription>(
                                          () => _encode_ObjectClassDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.objectClasses, $.DER),
                        /* IF_ABSENT  */ value.nameForms === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  6,
                                  () =>
                                      $._encodeSequenceOf<NameFormDescription>(
                                          () => _encode_NameFormDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.nameForms, $.DER),
                        /* IF_ABSENT  */ value.matchRuleUses === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  7,
                                  () =>
                                      $._encodeSequenceOf<MatchingRuleUseDescription>(
                                          () =>
                                              _encode_MatchingRuleUseDescription,
                                          $.DER
                                      ),
                                  $.DER
                              )(value.matchRuleUses, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SubSchemaSyntax_Item_subSchema(value, elGetter);
}


/* eslint-enable */
