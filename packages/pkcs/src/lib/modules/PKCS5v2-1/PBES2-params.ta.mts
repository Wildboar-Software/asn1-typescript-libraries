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
 * @summary PBES2_params
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PBES2-params ::= SEQUENCE {
 *     keyDerivationFunc AlgorithmIdentifier {{PBES2-KDFs}},
 *     encryptionScheme AlgorithmIdentifier {{PBES2-Encs}}
 * }
 * ```
 *
 * @class
 */
export class PBES2_params {
    constructor(
        /**
         * @summary `keyDerivationFunc`.
         * @public
         * @readonly
         */
        readonly keyDerivationFunc: AlgorithmIdentifier,
        /**
         * @summary `encryptionScheme`.
         * @public
         * @readonly
         */
        readonly encryptionScheme: AlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a PBES2_params
     * @description
     *
     * This takes an `object` and converts it to a `PBES2_params`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PBES2_params`.
     * @returns {PBES2_params}
     */
    public static _from_object(
        _o: { [_K in keyof PBES2_params]: PBES2_params[_K] }
    ): PBES2_params {
        return new PBES2_params(_o.keyDerivationFunc, _o.encryptionScheme);
    }
}


/**
 * @summary The Leading Root Component Types of PBES2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PBES2_params: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "keyDerivationFunc",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptionScheme",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of PBES2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PBES2_params: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of PBES2_params
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PBES2_params: $.ComponentSpec[] = [];


let _cached_decoder_for_PBES2_params: $.ASN1Decoder<PBES2_params> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) PBES2_params
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PBES2_params} The decoded data structure.
 */
export function _decode_PBES2_params(el: _Element) {
    if (!_cached_decoder_for_PBES2_params) {
        _cached_decoder_for_PBES2_params = function (
            el: _Element
        ): PBES2_params {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "PBES2-params contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "keyDerivationFunc";
            sequence[1].name = "encryptionScheme";
            let keyDerivationFunc!: AlgorithmIdentifier;
            let encryptionScheme!: AlgorithmIdentifier;
            keyDerivationFunc = _decode_AlgorithmIdentifier(sequence[0]);
            encryptionScheme = _decode_AlgorithmIdentifier(sequence[1]);
            return new PBES2_params(keyDerivationFunc, encryptionScheme);
        };
    }
    return _cached_decoder_for_PBES2_params(el);
}


let _cached_encoder_for_PBES2_params: $.ASN1Encoder<PBES2_params> | null = null;


/**
 * @summary Encodes a(n) PBES2_params into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PBES2_params, encoded as an ASN.1 Element.
 */
export function _encode_PBES2_params(
    value: PBES2_params,
    elGetter: $.ASN1Encoder<PBES2_params>
) {
    if (!_cached_encoder_for_PBES2_params) {
        _cached_encoder_for_PBES2_params = function (
            value: PBES2_params        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.keyDerivationFunc,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.encryptionScheme,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PBES2_params(value, elGetter);
}


/* eslint-enable */
