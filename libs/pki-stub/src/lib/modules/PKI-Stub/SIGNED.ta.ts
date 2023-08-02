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
    DERElement,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "../PKI-Stub/AlgorithmIdentifier.ta";

/* START_OF_SYMBOL_DEFINITION SIGNED */
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
     * @summary The orignal DER encoding of the signed thing.
     * @description
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
/* END_OF_SYMBOL_DEFINITION SIGNED */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SIGNED */
/**
 * @summary The Leading Root Component Types of SIGNED
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_SIGNED: $.ComponentSpec[] = [
    new $.ComponentSpec("toBeSigned", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec(
        "algorithmIdentifier",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "signature",
        false,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_SIGNED */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SIGNED */
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
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_SIGNED */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SIGNED */
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
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "altSignature",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_SIGNED */

/* START_OF_SYMBOL_DEFINITION _get_decoder_for_SIGNED */
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
        /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
        /* START_OF_CALLBACKS_MAP */
        const callbacks: $.DecodingMap = {
            toBeSigned: (_el: _Element): void => {
                ret.originalDER = _el.toBytes();
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
        return ret;
    };
}
/* END_OF_SYMBOL_DEFINITION _get_decoder_for_SIGNED */

/* START_OF_SYMBOL_DEFINITION _get_encoder_for_SIGNED */
/**
 * @summary Returns a function that will encode a(n) SIGNED into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) SIGNED as an ASN.1 element.
 */
export function _get_encoder_for_SIGNED<ToBeSigned>(
    _encode_ToBeSigned: $.ASN1Encoder<ToBeSigned>
) {
    return function (
        value: SIGNED<ToBeSigned>,
        elGetter: $.ASN1Encoder<SIGNED<ToBeSigned>>
    ): _Element {
        return $._encodeSequence(
            ([] as (_Element | undefined)[])
                .concat(
                    [
                        value.originalDER
                            ? (() => {
                                const e = new DERElement();
                                e.fromBytes(value.originalDER);
                                return e;
                            })()
                            : /* REQUIRED   */ _encode_ToBeSigned(
                                value.toBeSigned,
                                $.BER
                            ),
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.algorithmIdentifier,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBitString(
                            value.signature,
                            $.BER
                        ),
                    ],
                    [
                        /* IF_ABSENT  */ value.altAlgorithmIdentifier ===
                        undefined
                            ? undefined
                            : _encode_AlgorithmIdentifier(
                                  value.altAlgorithmIdentifier,
                                  $.BER
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
            $.BER
        );
    };
}
/* END_OF_SYMBOL_DEFINITION _get_encoder_for_SIGNED */

/* eslint-enable */
