/* eslint-disable */
import {
    OPTIONAL,
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta.mjs";

/**
 * @summary SIGNED
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SIGNED{ToBeSigned} ::= SEQUENCE {
 *   toBeSigned              ToBeSigned,
 *   algorithmIdentifier     AlgorithmIdentifier{{SupportedAlgorithms}},
 *   signature               BIT STRING,
 *   ...,
 *   altAlgorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}} OPTIONAL,
 *   altSignature            BIT STRING OPTIONAL
 *   } (WITH COMPONENTS {..., altAlgorithmIdentifier PRESENT, altSignature PRESENT } |
 *      WITH COMPONENTS {..., altAlgorithmIdentifier ABSENT,  altSignature ABSENT } )
 * ```
 *
 * @class
 */
export class SIGNED<ToBeSigned> {
    /**
     * @summary The orignal DER encoding of the signed thing (not just the toBeSigned)
     * @description
     *
     * This is the original byte encoding of the signed thing, not just the
     * `toBeSigned` part alone. (Instead of preserving just the bytes of
     * `toBeSigned`, we preserve all bytes so that the entire certificate can
     * be hashed reliably, which is important for some applications.)
     *
     * This exists so that the original encoding element can be preserved for
     * the sake of validating the signature correctly.
     *
     * @public
     */
    public originalDER?: Uint8Array;

    constructor(
        /**
         * @summary `toBeSigned`.
         * @public
         * @readonly
         */
        readonly toBeSigned: ToBeSigned,
        /**
         * @summary `algorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly algorithmIdentifier: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING,
        /**
         * @summary `altAlgorithmIdentifier`.
         * @public
         * @readonly
         */
        readonly altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>,
        /**
         * @summary `altSignature`.
         * @public
         * @readonly
         */
        readonly altSignature: OPTIONAL<BIT_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = [],
        /**
         * @summary
         */
        originalDER?: _Element
    ) {
        this.originalDER = originalDER?.toBytes();
    }

    /**
     * @summary Restructures an object into a SIGNED
     * @description
     *
     * This takes an `object` and converts it to a `SIGNED`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SIGNED`.
     * @returns {SIGNED}
     */
    public static _from_object(
        _o: { [_K in keyof SIGNED<any>]: SIGNED<any>[_K] }
    ): SIGNED<any> {
        return new SIGNED(
            _o.toBeSigned,
            _o.algorithmIdentifier,
            _o.signature,
            _o.altAlgorithmIdentifier,
            _o.altSignature,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag),
    new $.ComponentSpec(
        "algorithmIdentifier",
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
 * @summary The Trailing Root Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_SIGNED: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "altAlgorithmIdentifier",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "altSignature",
        true,
        $.hasTag(_TagClass.universal, 3)
    ),
];

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) SIGNED
 * @function
 * @param {_Element} el The element being decoded.
 * @returns A function that will decode an ASN.1 element.
 */
export function _get_decoder_for_SIGNED<ToBeSigned>(
    _decode_ToBeSigned: $.ASN1Decoder<ToBeSigned>
) {
    return function (el: _Element): SIGNED<ToBeSigned> {
        /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        let toBeSigned!: ToBeSigned;
        let algorithmIdentifier!: AlgorithmIdentifier;
        let signature!: BIT_STRING;
        let altAlgorithmIdentifier: OPTIONAL<AlgorithmIdentifier>;
        let altSignature: OPTIONAL<BIT_STRING>;
        let _unrecognizedExtensionsList: _Element[] = [];
        const originalDER: Uint8Array = el.toBytes();
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeSigned: (_el: _Element): void => {
                toBeSigned = _decode_ToBeSigned(_el);
            },
            algorithmIdentifier: (_el: _Element): void => {
                algorithmIdentifier = _decode_AlgorithmIdentifier(_el);
            },
            signature: (_el: _Element): void => {
                signature = $._decodeBitString(_el);
            },
            altAlgorithmIdentifier: (_el: _Element): void => {
                altAlgorithmIdentifier = _decode_AlgorithmIdentifier(_el);
            },
            altSignature: (_el: _Element): void => {
                altSignature = $._decodeBitString(_el);
            },
        };
        /* END_OF_CALLBACKS_MAP */
        $._parse_sequence(
            el,
            callbacks,
            _root_component_type_list_1_spec_for_SIGNED,
            _extension_additions_list_spec_for_SIGNED,
            _root_component_type_list_2_spec_for_SIGNED,
            (ext: _Element): void => {
                _unrecognizedExtensionsList.push(ext);
            }
        );
        const ret = new SIGNED(
            /* SEQUENCE_CONSTRUCTOR_CALL */ toBeSigned,
            algorithmIdentifier,
            signature,
            altAlgorithmIdentifier,
            altSignature,
            _unrecognizedExtensionsList,
            el
        );
        ret.originalDER = originalDER;
        return ret;
    };
}

/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export function _get_encoder_for_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNED<ToBeSigned>    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        /* REQUIRED   */ _encode_ToBeSigned(
                            value.toBeSigned,
                            $.DER
                        ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.DER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.DER
                        ),
                    ],
                    [
                        /* IF_ABSENT  */ value.altAlgorithmIdentifier ===
                        undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.altAlgorithmIdentifier,
                                  $.DER
                              ),
                        /* IF_ABSENT  */ value.altSignature === undefined
                            ? undefined
                            : $._encodeBitString(value.altSignature, $.BER),
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
