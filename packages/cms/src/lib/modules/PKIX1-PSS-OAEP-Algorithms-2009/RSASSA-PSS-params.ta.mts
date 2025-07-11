/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    HashAlgorithm,
    _decode_HashAlgorithm,
    _encode_HashAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/HashAlgorithm.ta.mjs";
import {
    MaskGenAlgorithm,
    _decode_MaskGenAlgorithm,
    _encode_MaskGenAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/MaskGenAlgorithm.ta.mjs";
import { mgf1SHA1 } from "../PKIX1-PSS-OAEP-Algorithms-2009/mgf1SHA1.va.mjs";
import { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va.mjs";

/**
 * @summary RSASSA_PSS_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSASSA-PSS-params ::= SEQUENCE  {
 * hashAlgorithm    [0] HashAlgorithm DEFAULT sha1Identifier,
 * maskGenAlgorithm    [1] MaskGenAlgorithm DEFAULT mgf1SHA1,
 * saltLength        [2] INTEGER DEFAULT 20,
 * trailerField    [3] INTEGER DEFAULT 1
 * }
 * ```
 *
 */
export class RSASSA_PSS_params {
    constructor(
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: OPTIONAL<HashAlgorithm>,
        /**
         * @summary `maskGenAlgorithm`.
         * @public
         * @readonly
         */
        readonly maskGenAlgorithm: OPTIONAL<MaskGenAlgorithm>,
        /**
         * @summary `saltLength`.
         * @public
         * @readonly
         */
        readonly saltLength: OPTIONAL<INTEGER>,
        /**
         * @summary `trailerField`.
         * @public
         * @readonly
         */
        readonly trailerField: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a RSASSA_PSS_params
     * @description
     *
     * This takes an `object` and converts it to a `RSASSA_PSS_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSASSA_PSS_params`.
     * @returns {RSASSA_PSS_params}
     */
    public static _from_object(
        _o: { [_K in keyof RSASSA_PSS_params]: RSASSA_PSS_params[_K] }
    ): RSASSA_PSS_params {
        return new RSASSA_PSS_params(
            _o.hashAlgorithm,
            _o.maskGenAlgorithm,
            _o.saltLength,
            _o.trailerField
        );
    }

    /**
     * @summary Getter that returns the default value for `hashAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashAlgorithm(): HashAlgorithm {
        return sha1Identifier;
    }
    /**
     * @summary Getter that returns the default value for `maskGenAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_maskGenAlgorithm(): MaskGenAlgorithm {
        return mgf1SHA1;
    }
    /**
     * @summary Getter that returns the default value for `saltLength`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_saltLength(): INTEGER {
        return 20;
    }
    /**
     * @summary Getter that returns the default value for `trailerField`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_trailerField(): INTEGER {
        return 1;
    }
}


/**
 * @summary The Leading Root Component Types of RSASSA_PSS_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSASSA_PSS_params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashAlgorithm",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "maskGenAlgorithm",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "saltLength",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        "trailerField",
        true,
        $.hasTag(_TagClass.context, 3)
    ),
];


/**
 * @summary The Trailing Root Component Types of RSASSA_PSS_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSASSA_PSS_params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RSASSA_PSS_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSASSA_PSS_params: $.ComponentSpec[] = [];


let _cached_decoder_for_RSASSA_PSS_params: $.ASN1Decoder<RSASSA_PSS_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RSASSA_PSS_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSASSA_PSS_params} The decoded data structure.
 */
export function _decode_RSASSA_PSS_params(el: _Element): RSASSA_PSS_params {
    if (!_cached_decoder_for_RSASSA_PSS_params) {
        _cached_decoder_for_RSASSA_PSS_params = function (
            el: _Element
        ): RSASSA_PSS_params {
            let hashAlgorithm: OPTIONAL<HashAlgorithm> =
                RSASSA_PSS_params._default_value_for_hashAlgorithm;
            let maskGenAlgorithm: OPTIONAL<MaskGenAlgorithm> =
                RSASSA_PSS_params._default_value_for_maskGenAlgorithm;
            let saltLength: OPTIONAL<INTEGER> =
                RSASSA_PSS_params._default_value_for_saltLength;
            let trailerField: OPTIONAL<INTEGER> =
                RSASSA_PSS_params._default_value_for_trailerField;
            const callbacks: $.DecodingMap = {
                hashAlgorithm: (_el: _Element): void => {
                    hashAlgorithm = $._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenAlgorithm: (_el: _Element): void => {
                    maskGenAlgorithm = $._decode_explicit<MaskGenAlgorithm>(
                        () => _decode_MaskGenAlgorithm
                    )(_el);
                },
                saltLength: (_el: _Element): void => {
                    saltLength = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
                trailerField: (_el: _Element): void => {
                    trailerField = $._decode_explicit<INTEGER>(
                        () => $._decodeInteger
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSASSA_PSS_params,
                _extension_additions_list_spec_for_RSASSA_PSS_params,
                _root_component_type_list_2_spec_for_RSASSA_PSS_params,
                undefined
            );
            return new RSASSA_PSS_params (
                hashAlgorithm,
                maskGenAlgorithm,
                saltLength,
                trailerField
            );
        };
    }
    return _cached_decoder_for_RSASSA_PSS_params(el);
}


let _cached_encoder_for_RSASSA_PSS_params: $.ASN1Encoder<RSASSA_PSS_params> | null = null;


/**
 * @summary Encodes a(n) RSASSA_PSS_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSASSA_PSS_params, encoded as an ASN.1 Element.
 */
export function _encode_RSASSA_PSS_params(
    value: RSASSA_PSS_params,
    elGetter: $.ASN1Encoder<RSASSA_PSS_params>
): _Element {
    if (!_cached_encoder_for_RSASSA_PSS_params) {
        _cached_encoder_for_RSASSA_PSS_params = function (
            value: RSASSA_PSS_params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        $.deepEq(
                            value.hashAlgorithm,
                            RSASSA_PSS_params._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  $.DER
                              )(value.hashAlgorithm, $.DER),
                        /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                        $.deepEq(
                            value.maskGenAlgorithm,
                            RSASSA_PSS_params._default_value_for_maskGenAlgorithm
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  $.DER
                              )(value.maskGenAlgorithm, $.DER),
                        /* IF_DEFAULT */ value.saltLength === undefined ||
                        $.deepEq(
                            value.saltLength,
                            RSASSA_PSS_params._default_value_for_saltLength
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.saltLength, $.DER),
                        /* IF_DEFAULT */ value.trailerField === undefined ||
                        $.deepEq(
                            value.trailerField,
                            RSASSA_PSS_params._default_value_for_trailerField
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  3,
                                  () => $._encodeInteger,
                                  $.DER
                              )(value.trailerField, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_RSASSA_PSS_params(value, elGetter);
}


/* eslint-enable */
