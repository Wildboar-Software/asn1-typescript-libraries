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
} from "@wildboar/pki-stub";
/**
 * @summary MULTY_SIGNED_parmeters_sign
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MULTY-SIGNED-parmeters-sign ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 */
export class MULTY_SIGNED_parmeters_sign<_ToBeSigned> {
    constructor(
        /**
         * @summary `algo`.
         * @public
         * @readonly
         */
        readonly algo: AlgorithmIdentifier,
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
     * @summary Restructures an object into a MULTY_SIGNED_parmeters_sign
     * @description
     *
     * This takes an `object` and converts it to a `MULTY_SIGNED_parmeters_sign`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MULTY_SIGNED_parmeters_sign`.
     * @returns {MULTY_SIGNED_parmeters_sign}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof MULTY_SIGNED_parmeters_sign<any>]: MULTY_SIGNED_parmeters_sign<any>[_K];
            }
        >
    ): MULTY_SIGNED_parmeters_sign<any> {
        return new MULTY_SIGNED_parmeters_sign(
            _o.algo,
            _o.signature,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "algo",
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
 * @summary The Trailing Root Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MULTY_SIGNED_parmeters_sign
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MULTY_SIGNED_parmeters_sign: $.ComponentSpec[] = [];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) MULTY_SIGNED_parmeters_sign
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
): $.ASN1Decoder<MULTY_SIGNED_parmeters_sign<ToBeSigned>> {
    return function <ToBeSigned>(
        el: _Element
    ): MULTY_SIGNED_parmeters_sign<ToBeSigned> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 2) {
            throw new _ConstructionError(
                "MULTY-SIGNED-parmeters-sign contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "algo";
        sequence[1].name = "signature";
        let algo!: AlgorithmIdentifier;
        let signature!: BIT_STRING;
        algo = _decode_AlgorithmIdentifier(sequence[0]);
        signature = $._decodeBitString(sequence[1]);
        return new MULTY_SIGNED_parmeters_sign<ToBeSigned>(
            algo,
            signature,
            sequence.slice(2)
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) MULTY_SIGNED_parmeters_sign into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) MULTY_SIGNED_parmeters_sign as an ASN.1 element.
 */
export function _get_encoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
): $.ASN1Encoder<MULTY_SIGNED_parmeters_sign<ToBeSigned>> {
    return function (
        value: MULTY_SIGNED_parmeters_sign<ToBeSigned>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algo,
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

/* eslint-enable */
