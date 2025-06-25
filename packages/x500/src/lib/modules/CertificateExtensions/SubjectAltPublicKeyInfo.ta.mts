/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
/**
 * @summary SubjectAltPublicKeyInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubjectAltPublicKeyInfo ::= SEQUENCE {
 *   algorithm              AlgorithmIdentifier{{SupportedAlgorithms}},
 *   subjectAltPublicKey    BIT STRING }
 * ```
 *
 * @class
 */
export class SubjectAltPublicKeyInfo {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: AlgorithmIdentifier,
        /**
         * @summary `subjectAltPublicKey`.
         * @public
         * @readonly
         */
        readonly subjectAltPublicKey: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a SubjectAltPublicKeyInfo
     * @description
     *
     * This takes an `object` and converts it to a `SubjectAltPublicKeyInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SubjectAltPublicKeyInfo`.
     * @returns {SubjectAltPublicKeyInfo}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof SubjectAltPublicKeyInfo]: SubjectAltPublicKeyInfo[_K];
            }
        >
    ): SubjectAltPublicKeyInfo {
        return new SubjectAltPublicKeyInfo(
            _o.algorithm,
            _o.subjectAltPublicKey
        );
    }
}

/**
 * @summary The Leading Root Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "subjectAltPublicKey",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SubjectAltPublicKeyInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SubjectAltPublicKeyInfo: $.ComponentSpec[] = [];

let _cached_decoder_for_SubjectAltPublicKeyInfo: $.ASN1Decoder<SubjectAltPublicKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubjectAltPublicKeyInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubjectAltPublicKeyInfo} The decoded data structure.
 */
export function _decode_SubjectAltPublicKeyInfo(el: _Element): SubjectAltPublicKeyInfo {
    if (!_cached_decoder_for_SubjectAltPublicKeyInfo) {
        _cached_decoder_for_SubjectAltPublicKeyInfo = function (
            el: _Element
        ): SubjectAltPublicKeyInfo {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SubjectAltPublicKeyInfo contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "subjectAltPublicKey";
            let algorithm!: AlgorithmIdentifier;
            let subjectAltPublicKey!: BIT_STRING;
            algorithm = _decode_AlgorithmIdentifier(sequence[0]);
            subjectAltPublicKey = $._decodeBitString(sequence[1]);
            return new SubjectAltPublicKeyInfo(algorithm, subjectAltPublicKey);
        };
    }
    return _cached_decoder_for_SubjectAltPublicKeyInfo(el);
}

let _cached_encoder_for_SubjectAltPublicKeyInfo: $.ASN1Encoder<SubjectAltPublicKeyInfo> | null = null;

/**
 * @summary Encodes a(n) SubjectAltPublicKeyInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubjectAltPublicKeyInfo, encoded as an ASN.1 Element.
 */
export function _encode_SubjectAltPublicKeyInfo(
    value: SubjectAltPublicKeyInfo,
    elGetter: $.ASN1Encoder<SubjectAltPublicKeyInfo>
): _Element {
    if (!_cached_encoder_for_SubjectAltPublicKeyInfo) {
        _cached_encoder_for_SubjectAltPublicKeyInfo = function (
            value: SubjectAltPublicKeyInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.subjectAltPublicKey,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_SubjectAltPublicKeyInfo(value, elGetter);
}


/* eslint-enable */
