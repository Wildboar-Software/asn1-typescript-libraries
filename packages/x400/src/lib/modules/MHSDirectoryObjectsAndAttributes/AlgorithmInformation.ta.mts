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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    AlgorithmIdentifier,
    _decode_AlgorithmIdentifier,
    _encode_AlgorithmIdentifier,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/AlgorithmIdentifier.ta.mjs';
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/CertificateAssertion.ta.mjs';
/**
 * @summary AlgorithmInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AlgorithmInformation ::= SEQUENCE {
 *   algorithm-identifier             [0]  AlgorithmIdentifier,
 *   originator-certificate-selector  [1]  CertificateAssertion OPTIONAL,
 *   recipient-certificate-selector   [2]  CertificateAssertion OPTIONAL
 * }
 * ```
 *
 * @class
 */
export class AlgorithmInformation {
    constructor(
        /**
         * @summary `algorithm_identifier`.
         * @public
         * @readonly
         */
        readonly algorithm_identifier: AlgorithmIdentifier,
        /**
         * @summary `originator_certificate_selector`.
         * @public
         * @readonly
         */
        readonly originator_certificate_selector: OPTIONAL<CertificateAssertion>,
        /**
         * @summary `recipient_certificate_selector`.
         * @public
         * @readonly
         */
        readonly recipient_certificate_selector: OPTIONAL<CertificateAssertion>
    ) {}

    /**
     * @summary Restructures an object into a AlgorithmInformation
     * @description
     *
     * This takes an `object` and converts it to a `AlgorithmInformation`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AlgorithmInformation`.
     * @returns {AlgorithmInformation}
     */
    public static _from_object(
        _o: { [_K in keyof AlgorithmInformation]: AlgorithmInformation[_K] }
    ): AlgorithmInformation {
        return new AlgorithmInformation(
            _o.algorithm_identifier,
            _o.originator_certificate_selector,
            _o.recipient_certificate_selector
        );
    }
}

/**
 * @summary The Leading Root Component Types of AlgorithmInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AlgorithmInformation: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'algorithm-identifier',
        false,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'originator-certificate-selector',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'recipient-certificate-selector',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
];

/**
 * @summary The Trailing Root Component Types of AlgorithmInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AlgorithmInformation: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AlgorithmInformation
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AlgorithmInformation: $.ComponentSpec[] = [];

let _cached_decoder_for_AlgorithmInformation: $.ASN1Decoder<AlgorithmInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AlgorithmInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AlgorithmInformation} The decoded data structure.
 */
export function _decode_AlgorithmInformation(el: _Element) {
    if (!_cached_decoder_for_AlgorithmInformation) {
        _cached_decoder_for_AlgorithmInformation = function (
            el: _Element
        ): AlgorithmInformation {
            let algorithm_identifier!: AlgorithmIdentifier;
            let originator_certificate_selector: OPTIONAL<CertificateAssertion>;
            let recipient_certificate_selector: OPTIONAL<CertificateAssertion>;
            const callbacks: $.DecodingMap = {
                'algorithm-identifier': (_el: _Element): void => {
                    algorithm_identifier = $._decode_implicit<AlgorithmIdentifier>(
                        () => _decode_AlgorithmIdentifier
                    )(_el);
                },
                'originator-certificate-selector': (_el: _Element): void => {
                    originator_certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'recipient-certificate-selector': (_el: _Element): void => {
                    recipient_certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_AlgorithmInformation,
                _extension_additions_list_spec_for_AlgorithmInformation,
                _root_component_type_list_2_spec_for_AlgorithmInformation,
                undefined
            );
            return new AlgorithmInformation (
                algorithm_identifier,
                originator_certificate_selector,
                recipient_certificate_selector
            );
        };
    }
    return _cached_decoder_for_AlgorithmInformation(el);
}

let _cached_encoder_for_AlgorithmInformation: $.ASN1Encoder<AlgorithmInformation> | null = null;

/**
 * @summary Encodes a(n) AlgorithmInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AlgorithmInformation, encoded as an ASN.1 Element.
 */
export function _encode_AlgorithmInformation(
    value: AlgorithmInformation,
    elGetter: $.ASN1Encoder<AlgorithmInformation>
) {
    if (!_cached_encoder_for_AlgorithmInformation) {
        _cached_encoder_for_AlgorithmInformation = function (
            value: AlgorithmInformation        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            0,
                            () => _encode_AlgorithmIdentifier,
                            $.BER
                        )(value.algorithm_identifier, $.BER),
                        /* IF_ABSENT  */ value.originator_certificate_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.originator_certificate_selector, $.BER),
                        /* IF_ABSENT  */ value.recipient_certificate_selector ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_CertificateAssertion,
                                  $.BER
                              )(value.recipient_certificate_selector, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_AlgorithmInformation(value, elGetter);
}


/* eslint-enable */
