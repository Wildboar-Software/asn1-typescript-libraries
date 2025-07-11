/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary extensionSyntax_Type
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * extensionSyntax-Type ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class extensionSyntax_Type {
    constructor(
        /**
         * @summary `mandatory`.
         * @public
         * @readonly
         */
        readonly mandatory: OPTIONAL<BOOLEAN>,
        /**
         * @summary `critical`.
         * @public
         * @readonly
         */
        readonly critical: OPTIONAL<BOOLEAN>,
        /**
         * @summary `ext`.
         * @public
         * @readonly
         */
        readonly ext: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a extensionSyntax_Type
     * @description
     *
     * This takes an `object` and converts it to a `extensionSyntax_Type`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `extensionSyntax_Type`.
     * @returns {extensionSyntax_Type}
     */
    public static _from_object(
        _o: { [_K in keyof extensionSyntax_Type]: extensionSyntax_Type[_K] }
    ): extensionSyntax_Type {
        return new extensionSyntax_Type(
            _o.mandatory,
            _o.critical,
            _o.ext,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `mandatory`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_mandatory(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `critical`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_critical(): BOOLEAN {
        return false;
    }
}

/**
 * @summary The Leading Root Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "mandatory",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "critical",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "ext",
        false,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of extensionSyntax_Type
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_extensionSyntax_Type: $.ComponentSpec[] = [];

let _cached_decoder_for_extensionSyntax_Type: $.ASN1Decoder<extensionSyntax_Type> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) extensionSyntax_Type
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {extensionSyntax_Type} The decoded data structure.
 */
export function _decode_extensionSyntax_Type(el: _Element): extensionSyntax_Type {
    if (!_cached_decoder_for_extensionSyntax_Type) {
        _cached_decoder_for_extensionSyntax_Type = function (
            el: _Element
        ): extensionSyntax_Type {
            let mandatory: OPTIONAL<BOOLEAN> =
                extensionSyntax_Type._default_value_for_mandatory;
            let critical: OPTIONAL<BOOLEAN> =
                extensionSyntax_Type._default_value_for_critical;
            let ext!: _Element;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                mandatory: (_el: _Element): void => {
                    mandatory = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                critical: (_el: _Element): void => {
                    critical = $._decode_explicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                ext: (_el: _Element): void => {
                    ext = $._decode_explicit<_Element>(() => $._decodeAny)(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_extensionSyntax_Type,
                _extension_additions_list_spec_for_extensionSyntax_Type,
                _root_component_type_list_2_spec_for_extensionSyntax_Type,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new extensionSyntax_Type(
                mandatory,
                critical,
                ext,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_extensionSyntax_Type(el);
}

let _cached_encoder_for_extensionSyntax_Type: $.ASN1Encoder<extensionSyntax_Type> | null = null;

/**
 * @summary Encodes a(n) extensionSyntax_Type into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The extensionSyntax_Type, encoded as an ASN.1 Element.
 */
export function _encode_extensionSyntax_Type(
    value: extensionSyntax_Type,
    elGetter: $.ASN1Encoder<extensionSyntax_Type>
): _Element {
    if (!_cached_encoder_for_extensionSyntax_Type) {
        _cached_encoder_for_extensionSyntax_Type = function (
            value: extensionSyntax_Type        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.mandatory === undefined ||
                            $.deepEq(
                                value.mandatory,
                                extensionSyntax_Type._default_value_for_mandatory
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.mandatory, $.DER),
                            /* IF_DEFAULT */ value.critical === undefined ||
                            $.deepEq(
                                value.critical,
                                extensionSyntax_Type._default_value_for_critical
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => $._encodeBoolean,
                                      $.DER
                                  )(value.critical, $.DER),
                            /* REQUIRED   */ $._encode_explicit(
                                _TagClass.context,
                                2,
                                () => $._encodeAny,
                                $.DER
                            )(value.ext, $.DER),
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
    return _cached_encoder_for_extensionSyntax_Type(value, elGetter);
}


/* eslint-enable */
