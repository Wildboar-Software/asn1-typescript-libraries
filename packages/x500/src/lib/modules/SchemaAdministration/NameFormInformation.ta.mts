/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary NameFormInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NameFormInformation ::= SEQUENCE {
 *   subordinate        OBJECT-CLASS.&id,
 *   namingMandatories  SET OF ATTRIBUTE.&id,
 *   namingOptionals    SET SIZE (1..MAX) OF ATTRIBUTE.&id OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class NameFormInformation {
    constructor(
        /**
         * @summary `subordinate`.
         * @public
         * @readonly
         */
        readonly subordinate: OBJECT_IDENTIFIER,
        /**
         * @summary `namingMandatories`.
         * @public
         * @readonly
         */
        readonly namingMandatories: OBJECT_IDENTIFIER[],
        /**
         * @summary `namingOptionals`.
         * @public
         * @readonly
         */
        readonly namingOptionals?: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NameFormInformation
     * @description
     *
     * This takes an `object` and converts it to a `NameFormInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameFormInformation`.
     * @returns {NameFormInformation}
     */
    public static _from_object(
        _o: { [_K in keyof NameFormInformation]: NameFormInformation[_K] }
    ): NameFormInformation {
        return new NameFormInformation(
            _o.subordinate,
            _o.namingMandatories,
            _o.namingOptionals,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_NameFormInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "subordinate",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "namingMandatories",
        false,
        $.hasTag(_TagClass.universal, 17)
    ),
    new $.ComponentSpec(
        "namingOptionals",
        true,
        $.hasTag(_TagClass.universal, 17)
    ),
];

/**
 * @summary The Trailing Root Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_NameFormInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of NameFormInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_NameFormInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_NameFormInformation: $.ASN1Decoder<NameFormInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameFormInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NameFormInformation} The decoded data structure.
 */
export function _decode_NameFormInformation(el: _Element): NameFormInformation {
    if (!_cached_decoder_for_NameFormInformation) {
        _cached_decoder_for_NameFormInformation = function (
            el: _Element
        ): NameFormInformation {
            let subordinate!: OBJECT_IDENTIFIER;
            let namingMandatories!: OBJECT_IDENTIFIER[];
            let namingOptionals: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                subordinate: (_el: _Element): void => {
                    subordinate = $._decodeObjectIdentifier(_el);
                },
                namingMandatories: (_el: _Element): void => {
                    namingMandatories = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
                namingOptionals: (_el: _Element): void => {
                    namingOptionals = $._decodeSetOf<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_NameFormInformation,
                _extension_additions_list_spec_for_NameFormInformation,
                _root_component_type_list_2_spec_for_NameFormInformation,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new NameFormInformation(
                subordinate,
                namingMandatories,
                namingOptionals,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_NameFormInformation(el);
}

let _cached_encoder_for_NameFormInformation: $.ASN1Encoder<NameFormInformation> | null = null;

/**
 * @summary Encodes a(n) NameFormInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameFormInformation, encoded as an ASN.1 Element.
 */
export function _encode_NameFormInformation(
    value: NameFormInformation,
    elGetter: $.ASN1Encoder<NameFormInformation>
): _Element {
    if (!_cached_encoder_for_NameFormInformation) {
        _cached_encoder_for_NameFormInformation = function (
            value: NameFormInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.subordinate,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeSetOf<OBJECT_IDENTIFIER>(
                                () => $._encodeObjectIdentifier,
                                $.DER
                            )(value.namingMandatories, $.DER),
                            /* IF_ABSENT  */ value.namingOptionals === undefined
                                ? undefined
                                : $._encodeSetOf<OBJECT_IDENTIFIER>(
                                      () => $._encodeObjectIdentifier,
                                      $.DER
                                  )(value.namingOptionals, $.DER),
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
    return _cached_encoder_for_NameFormInformation(value, elGetter);
}


/* eslint-enable */
