/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
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
import {
    PSourceAlgorithm,
    _decode_PSourceAlgorithm,
    _encode_PSourceAlgorithm,
} from "../PKIX1-PSS-OAEP-Algorithms-2009/PSourceAlgorithm.ta.mjs";
import { pSpecifiedEmpty } from "../PKIX1-PSS-OAEP-Algorithms-2009/pSpecifiedEmpty.va.mjs";
import { sha1Identifier } from "../PKIX1-PSS-OAEP-Algorithms-2009/sha1Identifier.va.mjs";

/**
 * @summary RSAES_OAEP_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAES-OAEP-params ::= SEQUENCE  {
 * hashFunc        [0] HashAlgorithm DEFAULT sha1Identifier,
 * maskGenFunc        [1] MaskGenAlgorithm DEFAULT mgf1SHA1,
 * pSourceFunc        [2] PSourceAlgorithm DEFAULT
 * pSpecifiedEmpty
 * }
 * ```
 *
 */
export class RSAES_OAEP_params {
    constructor(
        /**
         * @summary `hashFunc`.
         * @public
         * @readonly
         */
        readonly hashFunc: OPTIONAL<HashAlgorithm>,
        /**
         * @summary `maskGenFunc`.
         * @public
         * @readonly
         */
        readonly maskGenFunc: OPTIONAL<MaskGenAlgorithm>,
        /**
         * @summary `pSourceFunc`.
         * @public
         * @readonly
         */
        readonly pSourceFunc: OPTIONAL<PSourceAlgorithm>
    ) {}

    /**
     * @summary Restructures an object into a RSAES_OAEP_params
     * @description
     *
     * This takes an `object` and converts it to a `RSAES_OAEP_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RSAES_OAEP_params`.
     * @returns {RSAES_OAEP_params}
     */
    public static _from_object(
        _o: { [_K in keyof RSAES_OAEP_params]: RSAES_OAEP_params[_K] }
    ): RSAES_OAEP_params {
        return new RSAES_OAEP_params(
            _o.hashFunc,
            _o.maskGenFunc,
            _o.pSourceFunc
        );
    }

    /**
     * @summary Getter that returns the default value for `hashFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashFunc(): HashAlgorithm {
        return sha1Identifier;
    }
    /**
     * @summary Getter that returns the default value for `maskGenFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_maskGenFunc(): MaskGenAlgorithm {
        return mgf1SHA1;
    }
    /**
     * @summary Getter that returns the default value for `pSourceFunc`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pSourceFunc(): PSourceAlgorithm {
        return pSpecifiedEmpty;
    }
}


/**
 * @summary The Leading Root Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "hashFunc",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "maskGenFunc",
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        "pSourceFunc",
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of RSAES_OAEP_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_RSAES_OAEP_params: $.ComponentSpec[] = [];


let _cached_decoder_for_RSAES_OAEP_params: $.ASN1Decoder<RSAES_OAEP_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) RSAES_OAEP_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RSAES_OAEP_params} The decoded data structure.
 */
export function _decode_RSAES_OAEP_params(el: _Element): RSAES_OAEP_params {
    if (!_cached_decoder_for_RSAES_OAEP_params) {
        _cached_decoder_for_RSAES_OAEP_params = function (
            el: _Element
        ): RSAES_OAEP_params {
            let hashFunc: OPTIONAL<HashAlgorithm> =
                RSAES_OAEP_params._default_value_for_hashFunc;
            let maskGenFunc: OPTIONAL<MaskGenAlgorithm> =
                RSAES_OAEP_params._default_value_for_maskGenFunc;
            let pSourceFunc: OPTIONAL<PSourceAlgorithm> =
                RSAES_OAEP_params._default_value_for_pSourceFunc;
            const callbacks: $.DecodingMap = {
                hashFunc: (_el: _Element): void => {
                    hashFunc = $._decode_explicit<HashAlgorithm>(
                        () => _decode_HashAlgorithm
                    )(_el);
                },
                maskGenFunc: (_el: _Element): void => {
                    maskGenFunc = $._decode_explicit<MaskGenAlgorithm>(
                        () => _decode_MaskGenAlgorithm
                    )(_el);
                },
                pSourceFunc: (_el: _Element): void => {
                    pSourceFunc = $._decode_explicit<PSourceAlgorithm>(
                        () => _decode_PSourceAlgorithm
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_RSAES_OAEP_params,
                _extension_additions_list_spec_for_RSAES_OAEP_params,
                _root_component_type_list_2_spec_for_RSAES_OAEP_params,
                undefined
            );
            return new RSAES_OAEP_params (
                hashFunc,
                maskGenFunc,
                pSourceFunc
            );
        };
    }
    return _cached_decoder_for_RSAES_OAEP_params(el);
}


let _cached_encoder_for_RSAES_OAEP_params: $.ASN1Encoder<RSAES_OAEP_params> | null = null;


/**
 * @summary Encodes a(n) RSAES_OAEP_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RSAES_OAEP_params, encoded as an ASN.1 Element.
 */
export function _encode_RSAES_OAEP_params(
    value: RSAES_OAEP_params,
    elGetter: $.ASN1Encoder<RSAES_OAEP_params>
): _Element {
    if (!_cached_encoder_for_RSAES_OAEP_params) {
        _cached_encoder_for_RSAES_OAEP_params = function (
            value: RSAES_OAEP_params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* IF_DEFAULT */ value.hashFunc === undefined ||
                        $.deepEq(
                            value.hashFunc,
                            RSAES_OAEP_params._default_value_for_hashFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  $.DER
                              )(value.hashFunc, $.DER),
                        /* IF_DEFAULT */ value.maskGenFunc === undefined ||
                        $.deepEq(
                            value.maskGenFunc,
                            RSAES_OAEP_params._default_value_for_maskGenFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  $.DER
                              )(value.maskGenFunc, $.DER),
                        /* IF_DEFAULT */ value.pSourceFunc === undefined ||
                        $.deepEq(
                            value.pSourceFunc,
                            RSAES_OAEP_params._default_value_for_pSourceFunc
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PSourceAlgorithm,
                                  $.DER
                              )(value.pSourceFunc, $.DER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_RSAES_OAEP_params(value, elGetter);
}


/* eslint-enable */
