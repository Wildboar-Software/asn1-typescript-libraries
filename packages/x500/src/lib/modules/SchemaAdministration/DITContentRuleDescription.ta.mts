/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import {
    DITContentRule,
    _root_component_type_list_1_spec_for_DITContentRule,
} from "../InformationFramework/DITContentRule.ta.mjs";

/**
 * @summary DITContentRuleDescription
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContentRuleDescription ::= SEQUENCE {
 *   COMPONENTS OF DITContentRule,
 *   name         [4]  SET SIZE (1..MAX) OF UnboundedDirectoryString OPTIONAL,
 *   description       UnboundedDirectoryString OPTIONAL,
 *   obsolete          BOOLEAN DEFAULT FALSE,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContentRuleDescription extends DITContentRule {
    constructor(
        /**
         * @summary `structuralObjectClass`.
         * @public
         * @readonly
         */
        override readonly structuralObjectClass: OBJECT_IDENTIFIER /* REPLICATED_COMPONENT */,
        /**
         * @summary `auxiliaries`.
         * @public
         * @readonly
         */
        override readonly auxiliaries?: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        override readonly mandatory?: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        override readonly optional?: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `precluded`.
         * @public
         * @readonly
         */
        override readonly precluded?: OPTIONAL<
            OBJECT_IDENTIFIER[]
        > /* REPLICATED_COMPONENT */,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name?: OPTIONAL<UnboundedDirectoryString[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description?: OPTIONAL<UnboundedDirectoryString>,
        /**
         * @summary `obsolete`.
         * @public
         * @readonly
         */
        readonly obsolete?: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        override readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        super(
            structuralObjectClass,
            auxiliaries,
            mandatory,
            optional,
            precluded,
        );
    }

    /**
     * @summary Restructures an object into a DITContentRuleDescription
     * @description
     *
     * This takes an `object` and converts it to a `DITContentRuleDescription`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRuleDescription`.
     * @returns {DITContentRuleDescription}
     */
    public static override _from_object(
        _o: Partial<
            {
                [_K in keyof DITContentRuleDescription]: DITContentRuleDescription[_K];
            }
        >
    ): DITContentRuleDescription {
        return new DITContentRuleDescription(
            _o.structuralObjectClass,
            _o.auxiliaries,
            _o.mandatory,
            _o.optional,
            _o.precluded,
            _o.name,
            _o.description,
            _o.obsolete,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `obsolete`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsolete(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [
    ..._root_component_type_list_1_spec_for_DITContentRule,
    new $.ComponentSpec(
        "name",
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'description',
        true,
        $.or(
            $.hasTag(_TagClass.universal, 20),
            $.hasTag(_TagClass.universal, 19),
            $.hasTag(_TagClass.universal, 30),
            $.hasTag(_TagClass.universal, 28),
            $.hasTag(_TagClass.universal, 12)
        )
    ),
    new $.ComponentSpec(
        "obsolete",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DITContentRuleDescription
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContentRuleDescription: $.ComponentSpec[] = [];

let _cached_decoder_for_DITContentRuleDescription: $.ASN1Decoder<DITContentRuleDescription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRuleDescription
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContentRuleDescription} The decoded data structure.
 */
export function _decode_DITContentRuleDescription(el: _Element): DITContentRuleDescription {
    if (!_cached_decoder_for_DITContentRuleDescription) {
        _cached_decoder_for_DITContentRuleDescription = function (
            el: _Element
        ): DITContentRuleDescription {
            let structuralObjectClass!: OBJECT_IDENTIFIER;
            let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let name: OPTIONAL<UnboundedDirectoryString[]>;
            let description: OPTIONAL<UnboundedDirectoryString>;
            let obsolete: OPTIONAL<BOOLEAN> =
                DITContentRuleDescription._default_value_for_obsolete;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                structuralObjectClass: (_el: _Element): void => {
                    structuralObjectClass = $._decodeObjectIdentifier(_el);
                },
                auxiliaries: (_el: _Element): void => {
                    auxiliaries = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                optional: (_el: _Element): void => {
                    optional = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                precluded: (_el: _Element): void => {
                    precluded = $._decode_explicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSetOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
                name: (_el: _Element): void => {
                    name = $._decode_explicit<UnboundedDirectoryString[]>(() =>
                        $._decodeSetOf<UnboundedDirectoryString>(
                            () => _decode_UnboundedDirectoryString
                        )
                    )(_el);
                },
                description: (_el: _Element): void => {
                    description = _decode_UnboundedDirectoryString(_el);
                },
                obsolete: (_el: _Element): void => {
                    obsolete = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContentRuleDescription,
                _extension_additions_list_spec_for_DITContentRuleDescription,
                _root_component_type_list_2_spec_for_DITContentRuleDescription,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRuleDescription(
                structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                name,
                description,
                obsolete,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRuleDescription(el);
}

let _cached_encoder_for_DITContentRuleDescription: $.ASN1Encoder<DITContentRuleDescription> | null = null;

/**
 * @summary Encodes a(n) DITContentRuleDescription into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRuleDescription, encoded as an ASN.1 Element.
 */
export function _encode_DITContentRuleDescription(
    value: DITContentRuleDescription,
    elGetter: $.ASN1Encoder<DITContentRuleDescription>
): _Element {
    if (!_cached_encoder_for_DITContentRuleDescription) {
        _cached_encoder_for_DITContentRuleDescription = function (
            value: DITContentRuleDescription        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.DER
                                  )(value.auxiliaries, $.DER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.mandatory, $.DER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.optional, $.DER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.precluded, $.DER),
                            /* IF_ABSENT  */ value.name === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      4,
                                      () =>
                                          $._encodeSetOf<UnboundedDirectoryString>(
                                              () =>
                                                  _encode_UnboundedDirectoryString,
                                              $.DER
                                          ),
                                      $.DER
                                  )(value.name, $.DER),
                            /* IF_ABSENT  */ value.description === undefined
                                ? undefined
                                : _encode_UnboundedDirectoryString(
                                      value.description,
                                      $.DER
                                  ),
                            /* IF_DEFAULT */ value.obsolete === undefined ||
                            $.deepEq(
                                value.obsolete,
                                DITContentRuleDescription._default_value_for_obsolete
                            )
                                ? undefined
                                : $._encodeBoolean(value.obsolete, $.DER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_DITContentRuleDescription(value, elGetter);
}


/* eslint-enable */
