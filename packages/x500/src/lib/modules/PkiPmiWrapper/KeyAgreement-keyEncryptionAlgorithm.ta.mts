/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
/**
 * @summary KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KeyAgreement-keyEncryptionAlgorithm ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class KeyAgreement_keyEncryptionAlgorithm {
    constructor(
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a KeyAgreement_keyEncryptionAlgorithm
     * @description
     *
     * This takes an `object` and converts it to a `KeyAgreement_keyEncryptionAlgorithm`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeyAgreement_keyEncryptionAlgorithm`.
     * @returns {KeyAgreement_keyEncryptionAlgorithm}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof KeyAgreement_keyEncryptionAlgorithm]: KeyAgreement_keyEncryptionAlgorithm[_K];
            }
        >
    ): KeyAgreement_keyEncryptionAlgorithm {
        return new KeyAgreement_keyEncryptionAlgorithm(
            _o.algorithm,
            _o.parameters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of KeyAgreement_keyEncryptionAlgorithm
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_KeyAgreement_keyEncryptionAlgorithm: $.ComponentSpec[] = [];

let _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Decoder<KeyAgreement_keyEncryptionAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeyAgreement_keyEncryptionAlgorithm
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {KeyAgreement_keyEncryptionAlgorithm} The decoded data structure.
 */
export function _decode_KeyAgreement_keyEncryptionAlgorithm(el: _Element): KeyAgreement_keyEncryptionAlgorithm {
    if (!_cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            el: _Element
        ): KeyAgreement_keyEncryptionAlgorithm {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "KeyAgreement-keyEncryptionAlgorithm contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "algorithm";
            sequence[1].name = "parameters";
            let algorithm!: OBJECT_IDENTIFIER;
            let parameters!: _Element;
            algorithm = $._decodeObjectIdentifier(sequence[0]);
            parameters = $._decodeAny(sequence[1]);
            return new KeyAgreement_keyEncryptionAlgorithm(
                algorithm,
                parameters,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_KeyAgreement_keyEncryptionAlgorithm(el);
}

let _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm> | null = null;

/**
 * @summary Encodes a(n) KeyAgreement_keyEncryptionAlgorithm into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeyAgreement_keyEncryptionAlgorithm, encoded as an ASN.1 Element.
 */
export function _encode_KeyAgreement_keyEncryptionAlgorithm(
    value: KeyAgreement_keyEncryptionAlgorithm,
    elGetter: $.ASN1Encoder<KeyAgreement_keyEncryptionAlgorithm>
): _Element {
    if (!_cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm) {
        _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm = function (
            value: KeyAgreement_keyEncryptionAlgorithm        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ $._encodeObjectIdentifier(
                                value.algorithm,
                                $.DER
                            ),
                            /* REQUIRED   */ $._encodeAny(
                                value.parameters,
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
    return _cached_encoder_for_KeyAgreement_keyEncryptionAlgorithm(
        value,
        elGetter
    );
}


/* eslint-enable */
