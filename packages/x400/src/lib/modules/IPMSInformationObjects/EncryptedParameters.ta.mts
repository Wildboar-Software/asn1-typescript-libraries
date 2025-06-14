/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
    ExtendedCertificates,
    _decode_ExtendedCertificates,
    _encode_ExtendedCertificates,
} from '../MTSAbstractService/ExtendedCertificates.ta.mjs';
/* START_OF_SYMBOL_DEFINITION EncryptedParameters */
/**
 * @summary EncryptedParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedParameters ::= SET {
 *   algorithm-identifier     AlgorithmIdentifier,
 *   originator-certificates  ExtendedCertificates OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class EncryptedParameters {
    constructor(
        /**
         * @summary `algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly algorithm_identifier: AlgorithmIdentifier,
        /**
         * @summary `originator_certificates`.
         * @public
         * @readonly
         */
        readonly originator_certificates: OPTIONAL<ExtendedCertificates>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncryptedParameters
     * @description
     *
     * This takes an `object` and converts it to a `EncryptedParameters`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncryptedParameters`.
     * @returns {EncryptedParameters}
     */
    public static _from_object(
        _o: { [_K in keyof EncryptedParameters]: EncryptedParameters[_K] }
    ): EncryptedParameters {
        return new EncryptedParameters(
            _o.algorithm_identifier,
            _o.originator_certificates,
            _o._unrecognizedExtensionsList
        );
    }
}
/* END_OF_SYMBOL_DEFINITION EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedParameters */
/**
 * @summary The Leading Root Component Types of EncryptedParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_EncryptedParameters: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithm-identifier',
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator-certificates',
        true,
        $.hasTag(_TagClass.universal, 17),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedParameters */
/**
 * @summary The Trailing Root Component Types of EncryptedParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_EncryptedParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedParameters */
/**
 * @summary The Extension Addition Component Types of EncryptedParameters
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_EncryptedParameters: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedParameters */
let _cached_decoder_for_EncryptedParameters: $.ASN1Decoder<EncryptedParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _decode_EncryptedParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) EncryptedParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EncryptedParameters} The decoded data structure.
 */
export function _decode_EncryptedParameters(el: _Element) {
    if (!_cached_decoder_for_EncryptedParameters) {
        _cached_decoder_for_EncryptedParameters = function (
            el: _Element
        ): EncryptedParameters {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let algorithm_identifier!: AlgorithmIdentifier;
            let originator_certificates: OPTIONAL<ExtendedCertificates>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'algorithm-identifier': (_el: _Element): void => {
                    algorithm_identifier = _decode_AlgorithmIdentifier(_el);
                },
                'originator-certificates': (_el: _Element): void => {
                    originator_certificates = _decode_ExtendedCertificates(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_EncryptedParameters,
                _extension_additions_list_spec_for_EncryptedParameters,
                _root_component_type_list_2_spec_for_EncryptedParameters,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new EncryptedParameters /* SET_CONSTRUCTOR_CALL */(
                algorithm_identifier,
                originator_certificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_EncryptedParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedParameters */
let _cached_encoder_for_EncryptedParameters: $.ASN1Encoder<EncryptedParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_EncryptedParameters */

/* START_OF_SYMBOL_DEFINITION _encode_EncryptedParameters */
/**
 * @summary Encodes a(n) EncryptedParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncryptedParameters, encoded as an ASN.1 Element.
 */
export function _encode_EncryptedParameters(
    value: EncryptedParameters,
    elGetter: $.ASN1Encoder<EncryptedParameters>
) {
    if (!_cached_encoder_for_EncryptedParameters) {
        _cached_encoder_for_EncryptedParameters = function (
            value: EncryptedParameters        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_AlgorithmIdentifier(
                                value.algorithm_identifier,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.originator_certificates ===
                            undefined
                                ? undefined
                                : _encode_ExtendedCertificates(
                                      value.originator_certificates,
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
    return _cached_encoder_for_EncryptedParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_EncryptedParameters */

/* eslint-enable */
