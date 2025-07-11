/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    TRUE_BIT,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Credentials,
    _decode_Credentials,
    _encode_Credentials,
} from "../DirectoryAbstractService/Credentials.ta.mjs";
import {
    PwdResponseValue,
    _decode_PwdResponseValue,
    _encode_PwdResponseValue,
} from "../DirectoryAbstractService/PwdResponseValue.ta.mjs";
import {
    Versions,
    Versions_v1 /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Versions,
    _encode_Versions,
} from "../DirectoryAbstractService/Versions.ta.mjs";
/**
 * @summary DirectoryBindResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DirectoryBindResult ::= SET {
 *   credentials       [0]  Credentials OPTIONAL,
 *   versions          [1]  Versions DEFAULT {v1},
 *   ...,
 *   pwdResponseValue  [2]  PwdResponseValue OPTIONAL }
 * ```
 *
 */
export class DirectoryBindResult {
    constructor(
        /**
         * @summary `credentials`.
         * @public
         * @readonly
         */
        readonly credentials?: OPTIONAL<Credentials>,
        /**
         * @summary `versions`.
         * @public
         * @readonly
         */
        readonly versions?: OPTIONAL<Versions>,
        /**
         * @summary `pwdResponseValue`.
         * @public
         * @readonly
         */
        readonly pwdResponseValue?: OPTIONAL<PwdResponseValue>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DirectoryBindResult
     * @description
     *
     * This takes an `object` and converts it to a `DirectoryBindResult`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DirectoryBindResult`.
     * @returns {DirectoryBindResult}
     */
    public static _from_object(
        _o: { [_K in keyof DirectoryBindResult]: DirectoryBindResult[_K] }
    ): DirectoryBindResult {
        return new DirectoryBindResult(
            _o.credentials,
            _o.versions,
            _o.pwdResponseValue,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `versions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_versions(): Versions {
        return (() => {
            const _ret = new Uint8ClampedArray(2);
            _ret[Versions_v1] = TRUE_BIT;
            return _ret;
        })();
    }
}

/**
 * @summary The Leading Root Component Types of DirectoryBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DirectoryBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "credentials",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "versions",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
];

/**
 * @summary The Trailing Root Component Types of DirectoryBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DirectoryBindResult: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DirectoryBindResult
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DirectoryBindResult: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "pwdResponseValue",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

let _cached_decoder_for_DirectoryBindResult: $.ASN1Decoder<DirectoryBindResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DirectoryBindResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DirectoryBindResult} The decoded data structure.
 */
export function _decode_DirectoryBindResult(el: _Element): DirectoryBindResult {
    if (!_cached_decoder_for_DirectoryBindResult) {
        _cached_decoder_for_DirectoryBindResult = function (
            el: _Element
        ): DirectoryBindResult {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let credentials: OPTIONAL<Credentials>;
            let versions: OPTIONAL<Versions> =
                DirectoryBindResult._default_value_for_versions;
            let pwdResponseValue: OPTIONAL<PwdResponseValue>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                credentials: (_el: _Element): void => {
                    credentials = $._decode_explicit<Credentials>(
                        () => _decode_Credentials
                    )(_el);
                },
                versions: (_el: _Element): void => {
                    versions = $._decode_explicit<Versions>(
                        () => _decode_Versions
                    )(_el);
                },
                pwdResponseValue: (_el: _Element): void => {
                    pwdResponseValue = $._decode_explicit<PwdResponseValue>(
                        () => _decode_PwdResponseValue
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DirectoryBindResult,
                _extension_additions_list_spec_for_DirectoryBindResult,
                _root_component_type_list_2_spec_for_DirectoryBindResult,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DirectoryBindResult(
                /* SET_CONSTRUCTOR_CALL */ credentials,
                versions,
                pwdResponseValue,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DirectoryBindResult(el);
}

let _cached_encoder_for_DirectoryBindResult: $.ASN1Encoder<DirectoryBindResult> | null = null;

/**
 * @summary Encodes a(n) DirectoryBindResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DirectoryBindResult, encoded as an ASN.1 Element.
 */
export function _encode_DirectoryBindResult(
    value: DirectoryBindResult,
    elGetter: $.ASN1Encoder<DirectoryBindResult>
): _Element {
    if (!_cached_encoder_for_DirectoryBindResult) {
        _cached_encoder_for_DirectoryBindResult = function (
            value: DirectoryBindResult        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_ABSENT  */ value.credentials === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Credentials,
                                      $.BER
                                  )(value.credentials, $.BER),
                            /* IF_DEFAULT */ value.versions === undefined ||
                            $.deepEq(
                                value.versions,
                                DirectoryBindResult._default_value_for_versions
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_Versions,
                                      $.BER
                                  )(value.versions, $.BER),
                        ],
                        [
                            /* IF_ABSENT  */ value.pwdResponseValue ===
                            undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      2,
                                      () => _encode_PwdResponseValue,
                                      $.BER
                                  )(value.pwdResponseValue, $.BER),
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
    return _cached_encoder_for_DirectoryBindResult(value, elGetter);
}


/* eslint-enable */
