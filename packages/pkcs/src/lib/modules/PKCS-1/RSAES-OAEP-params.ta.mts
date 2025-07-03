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
} from "../PKCS-1/HashAlgorithm.ta.mjs";
import {
    MaskGenAlgorithm,
    _decode_MaskGenAlgorithm,
    _encode_MaskGenAlgorithm,
} from "../PKCS-1/MaskGenAlgorithm.ta.mjs";
import { mgf1SHA1 } from "../PKCS-1/mgf1SHA1.va.mjs";
import {
    PSourceAlgorithm,
    _decode_PSourceAlgorithm,
    _encode_PSourceAlgorithm,
} from "../PKCS-1/PSourceAlgorithm.ta.mjs";
import { pSpecifiedEmpty } from "../PKCS-1/pSpecifiedEmpty.va.mjs";
import { sha1 } from "../PKCS-1/sha1.va.mjs";

/**
 * @summary RSAES_OAEP_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RSAES-OAEP-params ::= SEQUENCE {
 *     hashAlgorithm      [0] HashAlgorithm     DEFAULT sha1,
 *     maskGenAlgorithm   [1] MaskGenAlgorithm  DEFAULT mgf1SHA1,
 *     pSourceAlgorithm   [2] PSourceAlgorithm  DEFAULT pSpecifiedEmpty
 * }
 * ```
 *
 */
export class RSAES_OAEP_params {
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
         * @summary `pSourceAlgorithm`.
         * @public
         * @readonly
         */
        readonly pSourceAlgorithm: OPTIONAL<PSourceAlgorithm>
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
            _o.hashAlgorithm,
            _o.maskGenAlgorithm,
            _o.pSourceAlgorithm
        );
    }

    /**
     * @summary Getter that returns the default value for `hashAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_hashAlgorithm(): HashAlgorithm {
        return sha1;
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
     * @summary Getter that returns the default value for `pSourceAlgorithm`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pSourceAlgorithm(): PSourceAlgorithm {
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
        "pSourceAlgorithm",
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
            let hashAlgorithm: OPTIONAL<HashAlgorithm> =
                RSAES_OAEP_params._default_value_for_hashAlgorithm;
            let maskGenAlgorithm: OPTIONAL<MaskGenAlgorithm> =
                RSAES_OAEP_params._default_value_for_maskGenAlgorithm;
            let pSourceAlgorithm: OPTIONAL<PSourceAlgorithm> =
                RSAES_OAEP_params._default_value_for_pSourceAlgorithm;
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
                pSourceAlgorithm: (_el: _Element): void => {
                    pSourceAlgorithm = $._decode_explicit<PSourceAlgorithm>(
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
            return new RSAES_OAEP_params(
                hashAlgorithm,
                maskGenAlgorithm,
                pSourceAlgorithm
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
                        /* IF_DEFAULT */ value.hashAlgorithm === undefined ||
                        $.deepEq(
                            value.hashAlgorithm,
                            RSAES_OAEP_params._default_value_for_hashAlgorithm
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_HashAlgorithm,
                                  $.BER
                              )(value.hashAlgorithm, $.BER),
                        /* IF_DEFAULT */ value.maskGenAlgorithm === undefined ||
                        $.deepEq(
                            value.maskGenAlgorithm,
                            RSAES_OAEP_params._default_value_for_maskGenAlgorithm
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_MaskGenAlgorithm,
                                  $.BER
                              )(value.maskGenAlgorithm, $.BER),
                        /* IF_DEFAULT */ value.pSourceAlgorithm === undefined ||
                        $.deepEq(
                            value.pSourceAlgorithm,
                            RSAES_OAEP_params._default_value_for_pSourceAlgorithm
                        )
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PSourceAlgorithm,
                                  $.BER
                              )(value.pSourceAlgorithm, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_RSAES_OAEP_params(value, elGetter);
}


/* eslint-enable */
