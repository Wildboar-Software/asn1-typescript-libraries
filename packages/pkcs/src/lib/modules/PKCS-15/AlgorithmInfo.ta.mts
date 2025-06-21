/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    Reference,
    _decode_Reference,
    _encode_Reference,
} from "../PKCS-15/Reference.ta.mjs";

/**
 * @summary AlgorithmInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmInfo ::= SEQUENCE {
 *     reference  Reference,
 *     algorithm  PKCS15-ALGORITHM.&id({AlgorithmSet}),
 *     parameters PKCS15-ALGORITHM.&Parameters({AlgorithmSet}{@algorithm}),
 *     supportedOperations PKCS15-ALGORITHM.&Operations({AlgorithmSet}{@algorithm}),
 *     algId   PKCS15-ALGORITHM.&objectIdentifier({AlgorithmSet}{@algorithm}) OPTIONAL,
 *     algRef Reference OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlgorithmInfo {
    constructor(
        /**
         * @summary `reference`.
         * @public
         * @readonly
         */
        readonly reference: Reference,
        /**
         * @summary `algorithm`.
         * @public
         * @readonly
         */
        readonly algorithm: INTEGER,
        /**
         * @summary `parameters`.
         * @public
         * @readonly
         */
        readonly parameters: _Element,
        /**
         * @summary `supportedOperations`.
         * @public
         * @readonly
         */
        readonly supportedOperations: _Element,
        /**
         * @summary `algId`.
         * @public
         * @readonly
         */
        readonly algId: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `algRef`.
         * @public
         * @readonly
         */
        readonly algRef: OPTIONAL<Reference>
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmInfo
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmInfo`.
     * @returns {AlgorithmInfo}
     */
    public static _from_object(
        _o: { [_K in keyof AlgorithmInfo]: AlgorithmInfo[_K] }
    ): AlgorithmInfo {
        return new AlgorithmInfo(
            _o.reference,
            _o.algorithm,
            _o.parameters,
            _o.supportedOperations,
            _o.algId,
            _o.algRef
        );
    }
}


/**
 * @summary The Leading Root Component Types of AlgorithmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "reference",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "algorithm",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("parameters", false, $.hasAnyTag),
    new $.ComponentSpec(
        "supportedOperations",
        false,
        $.hasTag(_TagClass.universal, 3)
    ),
    new $.ComponentSpec(
        "algId",
        true,
        $.hasTag(_TagClass.universal, 6)
    ),
    new $.ComponentSpec(
        "algRef",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of AlgorithmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmInfo: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of AlgorithmInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmInfo: $.ComponentSpec[] = [];


let _cached_decoder_for_AlgorithmInfo: $.ASN1Decoder<AlgorithmInfo> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmInfo} The decoded data structure.
 */
export function _decode_AlgorithmInfo(el: _Element) {
    if (!_cached_decoder_for_AlgorithmInfo) {
        _cached_decoder_for_AlgorithmInfo = function (
            el: _Element
        ): AlgorithmInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let reference!: Reference;
            let algorithm!: INTEGER;
            let parameters!: _Element;
            let supportedOperations!: _Element;
            let algId: OPTIONAL<OBJECT_IDENTIFIER>;
            let algRef: OPTIONAL<Reference>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                reference: (_el: _Element): void => {
                    reference = _decode_Reference(_el);
                },
                algorithm: (_el: _Element): void => {
                    algorithm = $._decodeInteger(_el);
                },
                parameters: (_el: _Element): void => {
                    parameters = $._decodeAny(_el);
                },
                supportedOperations: (_el: _Element): void => {
                    supportedOperations = $._decodeAny(_el);
                },
                algId: (_el: _Element): void => {
                    algId = $._decodeObjectIdentifier(_el);
                },
                algRef: (_el: _Element): void => {
                    algRef = _decode_Reference(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmInfo,
                _extension_additions_list_spec_for_AlgorithmInfo,
                _root_component_type_list_2_spec_for_AlgorithmInfo,
                undefined
            );
            return new AlgorithmInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ reference,
                algorithm,
                parameters,
                supportedOperations,
                algId,
                algRef
            );
        };
    }
    return _cached_decoder_for_AlgorithmInfo(el);
}


let _cached_encoder_for_AlgorithmInfo: $.ASN1Encoder<AlgorithmInfo> | null = null;


/**
 * @summary Encodes a(n) AlgorithmInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmInfo, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmInfo(
    value: AlgorithmInfo,
    elGetter: $.ASN1Encoder<AlgorithmInfo>
) {
    if (!_cached_encoder_for_AlgorithmInfo) {
        _cached_encoder_for_AlgorithmInfo = function (
            value: AlgorithmInfo        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Reference(
                            value.reference,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeInteger(
                            value.algorithm,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeAny(value.parameters, $.BER),
                        /* REQUIRED   */ $._encodeAny(
                            value.supportedOperations,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.algId === undefined
                            ? undefined
                            : $._encodeObjectIdentifier(value.algId, $.BER),
                        /* IF_ABSENT  */ value.algRef === undefined
                            ? undefined
                            : _encode_Reference(value.algRef, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmInfo(value, elGetter);
}


/* eslint-enable */
