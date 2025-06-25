/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary DITContextUseInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DITContextUseInformation ::= SEQUENCE {
 *   mandatoryContexts  [1]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   optionalContexts   [2]  SET SIZE (1..MAX) OF CONTEXT.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class DITContextUseInformation {
    constructor(
        /**
         * @summary `mandatoryContexts`.
         * @public
         * @readonly
         */
        readonly mandatoryContexts?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `optionalContexts`.
         * @public
         * @readonly
         */
        readonly optionalContexts?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DITContextUseInformation
     * @description
     *
     * This takes an `object` and converts it to a `DITContextUseInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DITContextUseInformation`.
     * @returns {DITContextUseInformation}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof DITContextUseInformation]: DITContextUseInformation[_K];
            }
        >
    ): DITContextUseInformation {
        return new DITContextUseInformation(
            _o.mandatoryContexts,
            _o.optionalContexts,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DITContextUseInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatoryContexts",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "optionalContexts",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DITContextUseInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DITContextUseInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_DITContextUseInformation: $.ASN1Decoder<DITContextUseInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DITContextUseInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DITContextUseInformation} The decoded data structure.
 */
export function _decode_DITContextUseInformation(el: _Element): DITContextUseInformation {
    if (!_cached_decoder_for_DITContextUseInformation) {
        _cached_decoder_for_DITContextUseInformation = function (
            el: _Element
        ): DITContextUseInformation {
            let mandatoryContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let optionalContexts: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                mandatoryContexts: (_el: _Element): void => {
                    mandatoryContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
                optionalContexts: (_el: _Element): void => {
                    optionalContexts = $._decode_explicit<OBJECT_IDENTIFIER[]>(
                        () =>
                            $._decodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._decodeObjectIdentifier
                            )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DITContextUseInformation,
                _extension_additions_list_spec_for_DITContextUseInformation,
                _root_component_type_list_2_spec_for_DITContextUseInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DITContextUseInformation(
                mandatoryContexts,
                optionalContexts,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DITContextUseInformation(el);
}

let _cached_encoder_for_DITContextUseInformation: $.ASN1Encoder<DITContextUseInformation> | null = null;

/**
 * @summary Encodes a(n) DITContextUseInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DITContextUseInformation, encoded as an ASN.1 Element.
 */
export function _encode_DITContextUseInformation(
    value: DITContextUseInformation,
    elGetter: $.ASN1Encoder<DITContextUseInformation>
): _Element {
    if (!_cached_encoder_for_DITContextUseInformation) {
        _cached_encoder_for_DITContextUseInformation = function (
            value: DITContextUseInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.mandatoryContexts ===
                            undefined
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
                                  )(value.mandatoryContexts, $.DER),
                            /* IF_ABSENT  */ value.optionalContexts ===
                            undefined
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
                                  )(value.optionalContexts, $.DER),
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
    return _cached_encoder_for_DITContextUseInformation(value, elGetter);
}


/* eslint-enable */
