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
import * as $ from '@wildboar/asn1/functional';
import {
    BodyPartNumber,
    _decode_BodyPartNumber,
    _encode_BodyPartNumber,
} from '../IPMSHeadingExtensions/BodyPartNumber.ta.mjs';
import {
    BodyPartSignature,
    _decode_BodyPartSignature,
    _encode_BodyPartSignature,
} from '../IPMSHeadingExtensions/BodyPartSignature.ta.mjs';
import {
    CertificateAssertion,
    _decode_CertificateAssertion,
    _encode_CertificateAssertion,
} from '@wildboar/x500/src/lib/modules/CertificateExtensions/CertificateAssertion.ta.mjs';
import {
    ExtendedCertificates,
    _decode_ExtendedCertificates,
    _encode_ExtendedCertificates,
} from '../MTSAbstractService/ExtendedCertificates.ta.mjs';
/**
 * @summary BodyPartSignatures_Item
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignatures-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 *
 * @class
 */
export class BodyPartSignatures_Item {
    constructor(
        /**
         * @summary `body_part_number`.
         * @public
         * @readonly
         */
        readonly body_part_number: BodyPartNumber,
        /**
         * @summary `body_part_signature`.
         * @public
         * @readonly
         */
        readonly body_part_signature: BodyPartSignature,
        /**
         * @summary `originator_certificate_selector`.
         * @public
         * @readonly
         */
        readonly originator_certificate_selector: OPTIONAL<CertificateAssertion>,
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
     * @summary Restructures an object into a BodyPartSignatures_Item
     * @description
     *
     * This takes an `object` and converts it to a `BodyPartSignatures_Item`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BodyPartSignatures_Item`.
     * @returns {BodyPartSignatures_Item}
     */
    public static _from_object(
        _o: {
            [_K in keyof BodyPartSignatures_Item]: BodyPartSignatures_Item[_K];
        }
    ): BodyPartSignatures_Item {
        return new BodyPartSignatures_Item(
            _o.body_part_number,
            _o.body_part_signature,
            _o.originator_certificate_selector,
            _o.originator_certificates,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of BodyPartSignatures_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_BodyPartSignatures_Item: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'body-part-number',
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        'body-part-signature',
        false,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        'originator-certificate-selector',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'originator-certificates',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of BodyPartSignatures_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_BodyPartSignatures_Item: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of BodyPartSignatures_Item
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_BodyPartSignatures_Item: $.ComponentSpec[] = [];

let _cached_decoder_for_BodyPartSignatures_Item: $.ASN1Decoder<BodyPartSignatures_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BodyPartSignatures_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BodyPartSignatures_Item} The decoded data structure.
 */
export function _decode_BodyPartSignatures_Item(el: _Element) {
    if (!_cached_decoder_for_BodyPartSignatures_Item) {
        _cached_decoder_for_BodyPartSignatures_Item = function (
            el: _Element
        ): BodyPartSignatures_Item {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let body_part_number!: BodyPartNumber;
            let body_part_signature!: BodyPartSignature;
            let originator_certificate_selector: OPTIONAL<CertificateAssertion>;
            let originator_certificates: OPTIONAL<ExtendedCertificates>;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'body-part-number': (_el: _Element): void => {
                    body_part_number = _decode_BodyPartNumber(_el);
                },
                'body-part-signature': (_el: _Element): void => {
                    body_part_signature = _decode_BodyPartSignature(_el);
                },
                'originator-certificate-selector': (_el: _Element): void => {
                    originator_certificate_selector = $._decode_implicit<CertificateAssertion>(
                        () => _decode_CertificateAssertion
                    )(_el);
                },
                'originator-certificates': (_el: _Element): void => {
                    originator_certificates = $._decode_implicit<ExtendedCertificates>(
                        () => _decode_ExtendedCertificates
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_BodyPartSignatures_Item,
                _extension_additions_list_spec_for_BodyPartSignatures_Item,
                _root_component_type_list_2_spec_for_BodyPartSignatures_Item,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new BodyPartSignatures_Item /* SET_CONSTRUCTOR_CALL */(
                body_part_number,
                body_part_signature,
                originator_certificate_selector,
                originator_certificates,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_BodyPartSignatures_Item(el);
}

let _cached_encoder_for_BodyPartSignatures_Item: $.ASN1Encoder<BodyPartSignatures_Item> | null = null;

/**
 * @summary Encodes a(n) BodyPartSignatures_Item into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BodyPartSignatures_Item, encoded as an ASN.1 Element.
 */
export function _encode_BodyPartSignatures_Item(
    value: BodyPartSignatures_Item,
    elGetter: $.ASN1Encoder<BodyPartSignatures_Item>
) {
    if (!_cached_encoder_for_BodyPartSignatures_Item) {
        _cached_encoder_for_BodyPartSignatures_Item = function (
            value: BodyPartSignatures_Item        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_BodyPartNumber(
                                value.body_part_number,
                                $.BER
                            ),
                            /* REQUIRED   */ _encode_BodyPartSignature(
                                value.body_part_signature,
                                $.BER
                            ),
                            /* IF_ABSENT  */ value.originator_certificate_selector ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_CertificateAssertion,
                                      $.BER
                                  )(
                                      value.originator_certificate_selector,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.originator_certificates ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_ExtendedCertificates,
                                      $.BER
                                  )(value.originator_certificates, $.BER),
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
    return _cached_encoder_for_BodyPartSignatures_Item(value, elGetter);
}


/* eslint-enable */
