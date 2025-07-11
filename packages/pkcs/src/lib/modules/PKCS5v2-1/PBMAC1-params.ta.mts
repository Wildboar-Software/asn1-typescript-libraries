/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKCS5v2-1/AlgorithmIdentifier.ta.mjs";

/**
 * @summary PBMAC1_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBMAC1-params ::= SEQUENCE {
 *     keyDerivationFunc AlgorithmIdentifier {{PBMAC1-KDFs}},
 *     messageAuthScheme AlgorithmIdentifier {{PBMAC1-MACs}}
 * }
 * ```
 *
 */
export class PBMAC1_params {
    constructor(
        /**
         * @summary `keyDerivationFunc`.
         * @public
         * @readonly
         */
        readonly keyDerivationFunc: AlgorithmIdentifier,
        /**
         * @summary `messageAuthScheme`.
         * @public
         * @readonly
         */
        readonly messageAuthScheme: AlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a PBMAC1_params
     * @description
     *
     * This takes an `object` and converts it to a `PBMAC1_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PBMAC1_params`.
     * @returns {PBMAC1_params}
     */
    public static _from_object(
        _o: { [_K in keyof PBMAC1_params]: PBMAC1_params[_K] }
    ): PBMAC1_params {
        return new PBMAC1_params(_o.keyDerivationFunc, _o.messageAuthScheme);
    }
}


/**
 * @summary The Leading Root Component Types of PBMAC1_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PBMAC1_params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyDerivationFunc",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "messageAuthScheme",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PBMAC1_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PBMAC1_params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PBMAC1_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PBMAC1_params: $.ComponentSpec[] = [];


let _cached_decoder_for_PBMAC1_params: $.ASN1Decoder<PBMAC1_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBMAC1_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBMAC1_params} The decoded data structure.
 */
export function _decode_PBMAC1_params(el: _Element): PBMAC1_params {
    if (!_cached_decoder_for_PBMAC1_params) {
        _cached_decoder_for_PBMAC1_params = function (
            el: _Element
        ): PBMAC1_params {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PBMAC1-params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyDerivationFunc";
            sequence[1].name = "messageAuthScheme";
            let keyDerivationFunc!: AlgorithmIdentifier;
            let messageAuthScheme!: AlgorithmIdentifier;
            keyDerivationFunc = _decode_AlgorithmIdentifier(sequence[0]);
            messageAuthScheme = _decode_AlgorithmIdentifier(sequence[1]);
            return new PBMAC1_params(keyDerivationFunc, messageAuthScheme);
        };
    }
    return _cached_decoder_for_PBMAC1_params(el);
}


let _cached_encoder_for_PBMAC1_params: $.ASN1Encoder<PBMAC1_params> | null = null;


/**
 * @summary Encodes a(n) PBMAC1_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBMAC1_params, encoded as an ASN.1 Element.
 */
export function _encode_PBMAC1_params(
    value: PBMAC1_params,
    elGetter: $.ASN1Encoder<PBMAC1_params>
): _Element {
    if (!_cached_encoder_for_PBMAC1_params) {
        _cached_encoder_for_PBMAC1_params = function (
            value: PBMAC1_params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.keyDerivationFunc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.messageAuthScheme,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PBMAC1_params(value, elGetter);
}


/* eslint-enable */
