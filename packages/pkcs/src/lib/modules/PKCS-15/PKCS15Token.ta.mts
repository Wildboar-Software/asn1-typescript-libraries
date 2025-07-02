/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    KeyManagementInfo,
    _decode_KeyManagementInfo,
    _encode_KeyManagementInfo,
} from "../PKCS-15/KeyManagementInfo.ta.mjs";
import {
    PKCS15Objects,
    _decode_PKCS15Objects,
    _encode_PKCS15Objects,
} from "../PKCS-15/PKCS15Objects.ta.mjs";
import {
    PKCS15Token_version,
    _decode_PKCS15Token_version,
    _encode_PKCS15Token_version,
} from "../PKCS-15/PKCS15Token-version.ta.mjs";

/**
 * @summary PKCS15Token
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKCS15Token ::= SEQUENCE {
 *     version INTEGER {v1(0)} (v1,...),
 *     keyManagementInfo [0] KeyManagementInfo OPTIONAL,
 *     pkcs15Objects SEQUENCE OF PKCS15Objects
 * }
 * ```
 *
 */
export class PKCS15Token {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: PKCS15Token_version,
        /**
         * @summary `keyManagementInfo`.
         * @public
         * @readonly
         */
        readonly keyManagementInfo: OPTIONAL<KeyManagementInfo>,
        /**
         * @summary `pkcs15Objects`.
         * @public
         * @readonly
         */
        readonly pkcs15Objects: PKCS15Objects[]
    ) {}

    /**
     * @summary Restructures an object into a PKCS15Token
     * @description
     *
     * This takes an `object` and converts it to a `PKCS15Token`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKCS15Token`.
     * @returns {PKCS15Token}
     */
    public static _from_object(
        _o: { [_K in keyof PKCS15Token]: PKCS15Token[_K] }
    ): PKCS15Token {
        return new PKCS15Token(
            _o.version,
            _o.keyManagementInfo,
            _o.pkcs15Objects
        );
    }
}


/**
 * @summary The Leading Root Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKCS15Token: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "keyManagementInfo",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "pkcs15Objects",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKCS15Token: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PKCS15Token
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKCS15Token: $.ComponentSpec[] = [];


let _cached_decoder_for_PKCS15Token: $.ASN1Decoder<PKCS15Token> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PKCS15Token
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKCS15Token} The decoded data structure.
 */
export function _decode_PKCS15Token(el: _Element): PKCS15Token {
    if (!_cached_decoder_for_PKCS15Token) {
        _cached_decoder_for_PKCS15Token = function (el: _Element): PKCS15Token {
            let version!: PKCS15Token_version;
            let keyManagementInfo: OPTIONAL<KeyManagementInfo>;
            let pkcs15Objects!: PKCS15Objects[];
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_PKCS15Token_version(_el);
                },
                keyManagementInfo: (_el: _Element): void => {
                    keyManagementInfo = $._decode_implicit<KeyManagementInfo>(
                        () => _decode_KeyManagementInfo
                    )(_el);
                },
                pkcs15Objects: (_el: _Element): void => {
                    pkcs15Objects = $._decodeSequenceOf<PKCS15Objects>(
                        () => _decode_PKCS15Objects
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKCS15Token,
                _extension_additions_list_spec_for_PKCS15Token,
                _root_component_type_list_2_spec_for_PKCS15Token,
                undefined
            );
            return new PKCS15Token(
                version,
                keyManagementInfo,
                pkcs15Objects
            );
        };
    }
    return _cached_decoder_for_PKCS15Token(el);
}


let _cached_encoder_for_PKCS15Token: $.ASN1Encoder<PKCS15Token> | null = null;


/**
 * @summary Encodes a(n) PKCS15Token into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKCS15Token, encoded as an ASN.1 Element.
 */
export function _encode_PKCS15Token(
    value: PKCS15Token,
    elGetter: $.ASN1Encoder<PKCS15Token>
): _Element {
    if (!_cached_encoder_for_PKCS15Token) {
        _cached_encoder_for_PKCS15Token = function (
            value: PKCS15Token        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKCS15Token_version(
                            value.version,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.keyManagementInfo === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_KeyManagementInfo,
                                  $.BER
                              )(value.keyManagementInfo, $.BER),
                        /* REQUIRED   */ $._encodeSequenceOf<PKCS15Objects>(
                            () => _encode_PKCS15Objects,
                            $.BER
                        )(value.pkcs15Objects, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PKCS15Token(value, elGetter);
}


/* eslint-enable */
