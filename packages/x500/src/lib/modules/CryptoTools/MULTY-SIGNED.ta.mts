/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    MULTY_SIGNED_parmeters_sign,
    _get_decoder_for_MULTY_SIGNED_parmeters_sign,
    _get_encoder_for_MULTY_SIGNED_parmeters_sign,
} from "../CryptoTools/MULTY-SIGNED-parmeters-sign.ta.mjs";
/**
 * @summary MULTY_SIGNED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MULTY-SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned  ToBeSigned,
 *   algorithm   ALGORITHM.&id({multipleSignaturesAlgo}),
 *   parmeters     SEQUENCE SIZE (1..MAX) OF
 *     sign          SEQUENCE {
 *       algo          AlgorithmIdentifier{{SupportedSignatureAlgorithms}},
 *       signature     BIT STRING,
 *       ... },
 *   ... }
 * ```
 *
 */
export class MULTY_SIGNED<ToBeSigned> {
    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: OBJECT_IDENTIFIER,
        /**
         * @summary `parmeters`.
         * @public
         * @readonly
         */
        readonly parmeters: MULTY_SIGNED_parmeters_sign<ToBeSigned>[],
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a MULTY_SIGNED
     * @description
     *
     * This takes an `object` and converts it to a `MULTY_SIGNED`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MULTY_SIGNED`.
     * @returns {MULTY_SIGNED}
     */
    public static _from_object(
        _o: Partial<{ [_K in keyof MULTY_SIGNED<any>]: MULTY_SIGNED<any>[_K] }>
    ): MULTY_SIGNED<any> {
        return new MULTY_SIGNED(
            _o.toBeSigned,
            _o.algorithm,
            _o.parmeters,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag),
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "parmeters",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
];

/**
 * @summary The Trailing Root Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of MULTY_SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_MULTY_SIGNED: $.ComponentSpec[] = [];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) MULTY_SIGNED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_MULTY_SIGNED<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
): $.ASN1Decoder<MULTY_SIGNED<ToBeSigned>> {
    return function (el: _Element): MULTY_SIGNED<ToBeSigned> {
        const sequence: _Element[] = el.sequence;
        if (sequence.length < 3) {
            throw new _ConstructionError(
                "MULTY-SIGNED contained only " +
                    sequence.length.toString() +
                    " elements."
            );
        }
        sequence[0].name = "toBeSigned";
        sequence[1].name = "algorithm";
        sequence[2].name = "parmeters";
        let toBeSigned!: ToBeSigned;
        let algorithm!: OBJECT_IDENTIFIER;
        let parmeters!: MULTY_SIGNED_parmeters_sign<ToBeSigned>[];
        toBeSigned = _decode_ToBeSigned(sequence[0]);
        algorithm = $._decodeObjectIdentifier(sequence[1]);
        parmeters = $._decodeSequenceOf<
            MULTY_SIGNED_parmeters_sign<ToBeSigned>
        >(() =>
            _get_decoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
                _decode_ToBeSigned
            )
        )(sequence[2]);
        return new MULTY_SIGNED<ToBeSigned>(
            toBeSigned,
            algorithm,
            parmeters,
            sequence.slice(3)
        );
    };
}

/**
 * @summary Returns a function that will encode a(n) MULTY_SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) MULTY_SIGNED as an ASN.1 element.
 */
export function _get_encoder_for_MULTY_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
): $.ASN1Encoder<MULTY_SIGNED<ToBeSigned>> {
    return function (
        value: MULTY_SIGNED<ToBeSigned>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeObjectIdentifier(
                            value.algorithm,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeSequenceOf<
                            MULTY_SIGNED_parmeters_sign<ToBeSigned>
                        >(
                            () =>
                                _get_encoder_for_MULTY_SIGNED_parmeters_sign<ToBeSigned>(
                                    _encode_ToBeSigned
                                ),
                            $.DER
                        )(value.parmeters, $.DER),
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
