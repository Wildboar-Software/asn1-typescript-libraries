/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
    OCTET_STRING,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from "@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs";
import {
    TypeOfBiometricData,
    _decode_TypeOfBiometricData,
    _encode_TypeOfBiometricData,
} from "../PKIXqualified97/TypeOfBiometricData.ta.mjs";


/**
 * @summary BiometricData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BiometricData ::= SEQUENCE {
 *     typeOfBiometricData TypeOfBiometricData,
 *     hashAlgorithm       AlgorithmIdentifier,
 *     biometricDataHash   OCTET STRING,
 *     sourceDataUri       IA5String OPTIONAL,
 *     ... -- For future extensions -- }
 * ```
 *
 * @class
 */
export class BiometricData {
    constructor(
        /**
         * @summary `typeOfBiometricData`.
         * @public
         * @readonly
         */
        readonly typeOfBiometricData: TypeOfBiometricData,
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `biometricDataHash`.
         * @public
         * @readonly
         */
        readonly biometricDataHash: OCTET_STRING,
        /**
         * @summary `sourceDataUri`.
         * @public
         * @readonly
         */
        readonly sourceDataUri: OPTIONAL<IA5String>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a BiometricData
     * @description
     *
     * This takes an `object` and converts it to a `BiometricData`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BiometricData`.
     * @returns {BiometricData}
     */
    public static _from_object(
        _o: { [_K in keyof BiometricData]: BiometricData[_K] }
    ): BiometricData {
        return new BiometricData(
            _o.typeOfBiometricData,
            _o.hashAlgorithm,
            _o.biometricDataHash,
            _o.sourceDataUri,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of BiometricData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BiometricData: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "typeOfBiometricData",
        false,
        $.hasAnyTag
    ),
    new $.ComponentSpec(
        "hashAlgorithm",
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "biometricDataHash",
        false,
        $.hasTag(_TagClass.universal, 4)
    ),
    new $.ComponentSpec(
        "sourceDataUri",
        true,
        $.hasTag(_TagClass.universal, 22)
    ),
];


/**
 * @summary The Trailing Root Component Types of BiometricData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BiometricData: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of BiometricData
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BiometricData: $.ComponentSpec[] = [];


let _cached_decoder_for_BiometricData: $.ASN1Decoder<BiometricData> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BiometricData
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BiometricData} The decoded data structure.
 */
export function _decode_BiometricData(el: _Element): BiometricData {
    if (!_cached_decoder_for_BiometricData) {
        _cached_decoder_for_BiometricData = function (
            el: _Element
        ): BiometricData {
            let typeOfBiometricData!: TypeOfBiometricData;
            let hashAlgorithm!: AlgorithmIdentifier;
            let biometricDataHash!: OCTET_STRING;
            let sourceDataUri: OPTIONAL<IA5String>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                typeOfBiometricData: (_el: _Element): void => {
                    typeOfBiometricData = _decode_TypeOfBiometricData(_el);
                },
                hashAlgorithm: (_el: _Element): void => {
                    hashAlgorithm = _decode_AlgorithmIdentifier(_el);
                },
                biometricDataHash: (_el: _Element): void => {
                    biometricDataHash = $._decodeOctetString(_el);
                },
                sourceDataUri: (_el: _Element): void => {
                    sourceDataUri = $._decodeIA5String(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BiometricData,
                _extension_additions_list_spec_for_BiometricData,
                _root_component_type_list_2_spec_for_BiometricData,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BiometricData(
                typeOfBiometricData,
                hashAlgorithm,
                biometricDataHash,
                sourceDataUri,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BiometricData(el);
}


let _cached_encoder_for_BiometricData: $.ASN1Encoder<BiometricData> | null = null;


/**
 * @summary Encodes a(n) BiometricData into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricData, encoded as an ASN.1 Element.
 */
export function _encode_BiometricData(
    value: BiometricData,
    elGetter: $.ASN1Encoder<BiometricData>
): _Element {
    if (!_cached_encoder_for_BiometricData) {
        _cached_encoder_for_BiometricData = function (
            value: BiometricData        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_TypeOfBiometricData(
                                value.typeOfBiometricData,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.hashAlgorithm,
                                $.BER
                            ),
                            /* REQUIRED   */ $._encodeOctetString(
                                value.biometricDataHash,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.sourceDataUri === undefined
                                ? undefined
                                : $._encodeIA5String(
                                      value.sourceDataUri,
                                      $.BER
                                  ),
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
    return _cached_encoder_for_BiometricData(value, elGetter);
}


/* eslint-enable */
