/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary DITContentRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContentRule ::= SEQUENCE {
 *   structuralObjectClass       OBJECT-CLASS.&id,
 *   auxiliaries                 SET SIZE (1..MAX) OF OBJECT-CLASS.&id OPTIONAL,
 *   mandatory              [1]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   optional               [2]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   precluded              [3]  SET SIZE (1..MAX) OF ATTRIBUTE.&id    OPTIONAL,
 *   ... }
 * ```
 *
 */
export class DITContentRule {
    constructor(
        /**
         * @summary `structuralObjectClass`.
         * @public
         * @readonly
         */
        readonly structuralObjectClass: OBJECT_IDENTIFIER,
        /**
         * @summary `auxiliaries`.
         * @public
         * @readonly
         */
        readonly auxiliaries?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optional`.
         * @public
         * @readonly
         */
        readonly optional?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `precluded`.
         * @public
         * @readonly
         */
        readonly precluded?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContentRule
     * @description
     *
     * This takes an `object` and converts it to a `DITContentRule`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContentRule`.
     * @returns {DITContentRule}
     */
    public static _from_object(
        _o: { [_K in keyof DITContentRule]: DITContentRule[_K] }
    ): DITContentRule {
        return new DITContentRule(
            _o.structuralObjectClass,
            _o.auxiliaries,
            _o.mandatory,
            _o.optional,
            _o.precluded,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContentRule: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "structuralObjectClass",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "auxiliaries",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "optional",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "precluded",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContentRule: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DITContentRule
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContentRule: $.ComponentSpec[] = [];

let _cached_decoder_for_DITContentRule: $.ASN1Decoder<DITContentRule> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITContentRule
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContentRule} The decoded data structure.
 */
export function _decode_DITContentRule(el: _Element): DITContentRule {
    if (!_cached_decoder_for_DITContentRule) {
        _cached_decoder_for_DITContentRule = function (
            el: _Element
        ): DITContentRule {
            let structuralObjectClass!: OBJECT_IDENTIFIER;
            let auxiliaries: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let mandatory: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optional: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let precluded: OPTIONAL<OBJECT_IDENTIFIER[]>;
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
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContentRule,
                _extension_additions_list_spec_for_DITContentRule,
                _root_component_type_list_2_spec_for_DITContentRule,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContentRule(
                structuralObjectClass,
                auxiliaries,
                mandatory,
                optional,
                precluded,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContentRule(el);
}

let _cached_encoder_for_DITContentRule: $.ASN1Encoder<DITContentRule> | null = null;

/**
 * @summary Encodes a(n) DITContentRule into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContentRule, encoded as an ASN.1 Element.
 */
export function _encode_DITContentRule(
    value: DITContentRule,
    elGetter: $.ASN1Encoder<DITContentRule>
): _Element {
    if (!_cached_encoder_for_DITContentRule) {
        _cached_encoder_for_DITContentRule = function (
            value: DITContentRule        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.structuralObjectClass,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.auxiliaries === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.BER
                                  )(value.auxiliaries, $.BER),
                            /* IF_ABSENT  */ value.mandatory === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.mandatory, $.BER),
                            /* IF_ABSENT  */ value.optional === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.optional, $.BER),
                            /* IF_ABSENT  */ value.precluded === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      3,
                                      () =>
                                          $._encodeSetOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.precluded, $.BER),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DITContentRule(value, elGetter);
}


/* eslint-enable */
