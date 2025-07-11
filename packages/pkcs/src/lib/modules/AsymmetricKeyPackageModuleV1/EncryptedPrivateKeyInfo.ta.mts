/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EncryptedData,
    _decode_EncryptedData,
    _encode_EncryptedData,
} from "../AsymmetricKeyPackageModuleV1/EncryptedData.ta.mjs";
import {
    EncryptionAlgorithmIdentifier,
    _decode_EncryptionAlgorithmIdentifier,
    _encode_EncryptionAlgorithmIdentifier,
} from "../AsymmetricKeyPackageModuleV1/EncryptionAlgorithmIdentifier.ta.mjs";

/**
 * @summary EncryptedPrivateKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedPrivateKeyInfo ::= SEQUENCE {
 *     encryptionAlgorithm  EncryptionAlgorithmIdentifier,
 *     encryptedData        EncryptedData }
 * ```
 *
 */
export class EncryptedPrivateKeyInfo {
    constructor(
        /**
         * @summary `encryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly encryptionAlgorithm: EncryptionAlgorithmIdentifier,
        /**
         * @summary `encryptedData`.
         * @public
         * @readonly
         */
        readonly encryptedData: EncryptedData
    ) {}

    /**
     * @summary Restructures an object into a EncryptedPrivateKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedPrivateKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedPrivateKeyInfo`.
     * @returns {EncryptedPrivateKeyInfo}
     */
    public static _from_object(
        _o: {
            [_K in keyof EncryptedPrivateKeyInfo]: EncryptedPrivateKeyInfo[_K];
        }
    ): EncryptedPrivateKeyInfo {
        return new EncryptedPrivateKeyInfo(
            _o.encryptionAlgorithm,
            _o.encryptedData
        );
    }
}


/**
 * @summary The Leading Root Component Types of EncryptedPrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedPrivateKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "encryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "encryptedData",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
];


/**
 * @summary The Trailing Root Component Types of EncryptedPrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedPrivateKeyInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of EncryptedPrivateKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedPrivateKeyInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_EncryptedPrivateKeyInfo: $.ASN1Decoder<EncryptedPrivateKeyInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedPrivateKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedPrivateKeyInfo} The decoded data structure.
 */
export function _decode_EncryptedPrivateKeyInfo(el: _Element): EncryptedPrivateKeyInfo {
    if (!_cached_decoder_for_EncryptedPrivateKeyInfo) {
        _cached_decoder_for_EncryptedPrivateKeyInfo = function (
            el: _Element
        ): EncryptedPrivateKeyInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "EncryptedPrivateKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "encryptionAlgorithm";
            sequence[1].name = "encryptedData";
            let encryptionAlgorithm!: EncryptionAlgorithmIdentifier;
            let encryptedData!: EncryptedData;
            encryptionAlgorithm = _decode_EncryptionAlgorithmIdentifier(
                sequence[0]
            );
            encryptedData = _decode_EncryptedData(sequence[1]);
            return new EncryptedPrivateKeyInfo(
                encryptionAlgorithm,
                encryptedData
            );
        };
    }
    return _cached_decoder_for_EncryptedPrivateKeyInfo(el);
}


let _cached_encoder_for_EncryptedPrivateKeyInfo: $.ASN1Encoder<EncryptedPrivateKeyInfo> | null = null;


/**
 * @summary Encodes a(n) EncryptedPrivateKeyInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedPrivateKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedPrivateKeyInfo(
    value: EncryptedPrivateKeyInfo,
    elGetter: $.ASN1Encoder<EncryptedPrivateKeyInfo>
): _Element {
    if (!_cached_encoder_for_EncryptedPrivateKeyInfo) {
        _cached_encoder_for_EncryptedPrivateKeyInfo = function (
            value: EncryptedPrivateKeyInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_EncryptionAlgorithmIdentifier(
                            value.encryptionAlgorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_EncryptedData(
                            value.encryptedData,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_EncryptedPrivateKeyInfo(value, elGetter);
}


/* eslint-enable */
