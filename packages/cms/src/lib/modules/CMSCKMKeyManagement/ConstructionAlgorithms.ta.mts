/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CombinerAlgorithmIdentifier,
    _decode_CombinerAlgorithmIdentifier,
    _encode_CombinerAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/CombinerAlgorithmIdentifier.ta.mjs";
import {
    KeyEncryptionAlgorithmIdentifier,
    _decode_KeyEncryptionAlgorithmIdentifier,
    _encode_KeyEncryptionAlgorithmIdentifier,
} from "../CMSCKMKeyManagement/KeyEncryptionAlgorithmIdentifier.ta.mjs";

/**
 * @summary ConstructionAlgorithms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConstructionAlgorithms ::= SEQUENCE {
 * combiner            CombinerAlgorithmIdentifier,
 * keyEncryptionAlgorithm    KeyEncryptionAlgorithmIdentifier
 * }
 * ```
 *
 * @class
 */
export class ConstructionAlgorithms {
    constructor(
        /**
         * @summary `combiner`.
         * @public
         * @readonly
         */
        readonly combiner: CombinerAlgorithmIdentifier,
        /**
         * @summary `keyEncryptionAlgorithm`.
         * @public
         * @readonly
         */
        readonly keyEncryptionAlgorithm: KeyEncryptionAlgorithmIdentifier
    ) {}

    /**
     * @summary Restructures an object into a ConstructionAlgorithms
     * @description
     *
     * This takes an `object` and converts it to a `ConstructionAlgorithms`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConstructionAlgorithms`.
     * @returns {ConstructionAlgorithms}
     */
    public static _from_object(
        _o: { [_K in keyof ConstructionAlgorithms]: ConstructionAlgorithms[_K] }
    ): ConstructionAlgorithms {
        return new ConstructionAlgorithms(
            _o.combiner,
            _o.keyEncryptionAlgorithm
        );
    }
}


/**
 * @summary The Leading Root Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "combiner",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "keyEncryptionAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];


/**
 * @summary The Trailing Root Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of ConstructionAlgorithms
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_ConstructionAlgorithms: $.ComponentSpec[] = [];


let _cached_decoder_for_ConstructionAlgorithms: $.ASN1Decoder<ConstructionAlgorithms> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ConstructionAlgorithms
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ConstructionAlgorithms} The decoded data structure.
 */
export function _decode_ConstructionAlgorithms(el: _Element): ConstructionAlgorithms {
    if (!_cached_decoder_for_ConstructionAlgorithms) {
        _cached_decoder_for_ConstructionAlgorithms = function (
            el: _Element
        ): ConstructionAlgorithms {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "ConstructionAlgorithms contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "combiner";
            sequence[1].name = "keyEncryptionAlgorithm";
            let combiner!: CombinerAlgorithmIdentifier;
            let keyEncryptionAlgorithm!: KeyEncryptionAlgorithmIdentifier;
            combiner = _decode_CombinerAlgorithmIdentifier(sequence[0]);
            keyEncryptionAlgorithm = _decode_KeyEncryptionAlgorithmIdentifier(
                sequence[1]
            );
            return new ConstructionAlgorithms(combiner, keyEncryptionAlgorithm);
        };
    }
    return _cached_decoder_for_ConstructionAlgorithms(el);
}


let _cached_encoder_for_ConstructionAlgorithms: $.ASN1Encoder<ConstructionAlgorithms> | null = null;


/**
 * @summary Encodes a(n) ConstructionAlgorithms into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConstructionAlgorithms, encoded as an ASN.1 Element.
 */
export function _encode_ConstructionAlgorithms(
    value: ConstructionAlgorithms,
    elGetter: $.ASN1Encoder<ConstructionAlgorithms>
): _Element {
    if (!_cached_encoder_for_ConstructionAlgorithms) {
        _cached_encoder_for_ConstructionAlgorithms = function (
            value: ConstructionAlgorithms        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_CombinerAlgorithmIdentifier(
                            value.combiner,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_KeyEncryptionAlgorithmIdentifier(
                            value.keyEncryptionAlgorithm,
                            $.DER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.DER
            );
        };
    }
    return _cached_encoder_for_ConstructionAlgorithms(value, elGetter);
}


/* eslint-enable */
