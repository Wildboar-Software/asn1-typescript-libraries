/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AuthenticationLevel_basicLevels_level,
    _decode_AuthenticationLevel_basicLevels_level,
    _encode_AuthenticationLevel_basicLevels_level,
    _enum_for_AuthenticationLevel_basicLevels_level,
} from "../BasicAccessControl/AuthenticationLevel-basicLevels-level.ta.mjs";
/**
 * @summary AuthenticationLevel_basicLevels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AuthenticationLevel-basicLevels ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class AuthenticationLevel_basicLevels {
    constructor(
        /**
         * @summary `level`.
         * @public
         * @readonly
         */
        readonly level: AuthenticationLevel_basicLevels_level,
        /**
         * @summary `localQualifier`.
         * @public
         * @readonly
         */
        readonly localQualifier: OPTIONAL<INTEGER>,
        /**
         * @summary `signed`.
         * @public
         * @readonly
         */
        readonly signed: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthenticationLevel_basicLevels
     * @description
     *
     * This takes an `object` and converts it to a `AuthenticationLevel_basicLevels`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthenticationLevel_basicLevels`.
     * @returns {AuthenticationLevel_basicLevels}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AuthenticationLevel_basicLevels]: AuthenticationLevel_basicLevels[_K];
            }
        >
    ): AuthenticationLevel_basicLevels {
        return new AuthenticationLevel_basicLevels(
            _o.level,
            _o.localQualifier,
            _o.signed,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `signed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_signed(): BOOLEAN {
        return false;
    }
    /**
     * @summary The enum used as the type of the component `level`
     * @public
     * @static
     */

    public static _enum_for_level = _enum_for_AuthenticationLevel_basicLevels_level;
}

/**
 * @summary The Leading Root Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "level",
        false,
        $.hasTag(_TagClass.universal, 10)
    ),
    new $.ComponentSpec(
        "localQualifier",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "signed",
        true,
        $.hasTag(_TagClass.universal, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AuthenticationLevel_basicLevels
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AuthenticationLevel_basicLevels: $.ComponentSpec[] = [];

let _cached_decoder_for_AuthenticationLevel_basicLevels: $.ASN1Decoder<AuthenticationLevel_basicLevels> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationLevel_basicLevels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AuthenticationLevel_basicLevels} The decoded data structure.
 */
export function _decode_AuthenticationLevel_basicLevels(el: _Element): AuthenticationLevel_basicLevels {
    if (!_cached_decoder_for_AuthenticationLevel_basicLevels) {
        _cached_decoder_for_AuthenticationLevel_basicLevels = function (
            el: _Element
        ): AuthenticationLevel_basicLevels {
            let level!: AuthenticationLevel_basicLevels_level;
            let localQualifier: OPTIONAL<INTEGER>;
            let signed: OPTIONAL<BOOLEAN> =
                AuthenticationLevel_basicLevels._default_value_for_signed;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                level: (_el: _Element): void => {
                    level = _decode_AuthenticationLevel_basicLevels_level(_el);
                },
                localQualifier: (_el: _Element): void => {
                    localQualifier = $._decodeInteger(_el);
                },
                signed: (_el: _Element): void => {
                    signed = $._decodeBoolean(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AuthenticationLevel_basicLevels,
                _extension_additions_list_spec_for_AuthenticationLevel_basicLevels,
                _root_component_type_list_2_spec_for_AuthenticationLevel_basicLevels,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new AuthenticationLevel_basicLevels(
                level,
                localQualifier,
                signed,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_AuthenticationLevel_basicLevels(el);
}

let _cached_encoder_for_AuthenticationLevel_basicLevels: $.ASN1Encoder<AuthenticationLevel_basicLevels> | null = null;

/**
 * @summary Encodes a(n) AuthenticationLevel_basicLevels into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationLevel_basicLevels, encoded as an ASN.1 Element.
 */
export function _encode_AuthenticationLevel_basicLevels(
    value: AuthenticationLevel_basicLevels,
    elGetter: $.ASN1Encoder<AuthenticationLevel_basicLevels>
): _Element {
    if (!_cached_encoder_for_AuthenticationLevel_basicLevels) {
        _cached_encoder_for_AuthenticationLevel_basicLevels = function (
            value: AuthenticationLevel_basicLevels        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AuthenticationLevel_basicLevels_level(
                                value.level,
                                $.DER
                            ),
                            /* IF_ABSENT  */ value.localQualifier === undefined
                                ? undefined
                                : $._encodeInteger(value.localQualifier, $.DER),
                            /* IF_DEFAULT */ value.signed === undefined ||
                            $.deepEq(
                                value.signed,
                                AuthenticationLevel_basicLevels._default_value_for_signed
                            )
                                ? undefined
                                : $._encodeBoolean(value.signed, $.DER),
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
    return _cached_encoder_for_AuthenticationLevel_basicLevels(value, elGetter);
}


/* eslint-enable */
