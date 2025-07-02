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
 * @summary SIGNATURE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNATURE ::= SEQUENCE {
 *   agorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature            BIT STRING,
 *   ... }
 * ```
 *
 */
export class SIGNATURE {
    constructor(
        /**
         * @summary `agorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly agorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SIGNATURE
     * @description
     *
     * This takes an `object` and converts it to a `SIGNATURE`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNATURE`.
     * @returns {SIGNATURE}
     */
    public static _from_object(
        _o: { [_K in keyof SIGNATURE]: SIGNATURE[_K] }
    ): SIGNATURE {
        return new SIGNATURE(
            _o.agorithmIdentifier,
            _o.signature,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNATURE: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "agorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary The Trailing Root Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNATURE: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of SIGNATURE
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNATURE: $.ComponentSpec[] = [];

let _cached_decoder_for_SIGNATURE: $.ASN1Decoder<SIGNATURE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SIGNATURE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SIGNATURE} The decoded data structure.
 */
export function _decode_SIGNATURE(el: _Element): SIGNATURE {
    if (!_cached_decoder_for_SIGNATURE) {
        _cached_decoder_for_SIGNATURE = function (el: _Element): SIGNATURE {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "SIGNATURE contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "agorithmIdentifier";
            sequence[1].name = "signature";
            let agorithmIdentifier!: AlgorithmIdentifier;
            let signature!: BIT_STRING;
            agorithmIdentifier = _decode_AlgorithmIdentifier(sequence[0]);
            signature = $._decodeBitString(sequence[1]);
            return new SIGNATURE(
                agorithmIdentifier,
                signature,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_SIGNATURE(el);
}

let _cached_encoder_for_SIGNATURE: $.ASN1Encoder<SIGNATURE> | null = null;

/**
 * @summary Encodes a(n) SIGNATURE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SIGNATURE, encoded as an ASN.1 Element.
 */
export function _encode_SIGNATURE(
    value: SIGNATURE,
    elGetter: $.ASN1Encoder<SIGNATURE>
): _Element {
    if (!_cached_encoder_for_SIGNATURE) {
        _cached_encoder_for_SIGNATURE = function (
            value: SIGNATURE        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.agorithmIdentifier,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeBitString(
                                value.signature,
                                $.DER
                            ),
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
    return _cached_encoder_for_SIGNATURE(value, elGetter);
}


/* eslint-enable */
