/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    Certificate,
    _decode_Certificate,
    _encode_Certificate,
} from "@wildboar/x500/AuthenticationFramework";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "@wildboar/x500/AuthenticationFramework";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/InformationFramework";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";


/**
 * @summary X509CertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X509CertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { Certificate },
 *     subject  Name OPTIONAL,
 *     issuer [0] Name OPTIONAL,
 *     serialNumber CertificateSerialNumber OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class X509CertificateAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<Certificate>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<Name>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<Name>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a X509CertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `X509CertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `X509CertificateAttributes`.
     * @returns {X509CertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof X509CertificateAttributes]: X509CertificateAttributes[_K];
        }
    ): X509CertificateAttributes {
        return new X509CertificateAttributes(
            _o.value,
            _o.subject,
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of X509CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_X509CertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec("subject", true, $.hasAnyTag),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of X509CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_X509CertificateAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of X509CertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_X509CertificateAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_X509CertificateAttributes: $.ASN1Decoder<X509CertificateAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X509CertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X509CertificateAttributes} The decoded data structure.
 */
export function _decode_X509CertificateAttributes(el: _Element): X509CertificateAttributes {
    if (!_cached_decoder_for_X509CertificateAttributes) {
        _cached_decoder_for_X509CertificateAttributes = function (
            el: _Element
        ): X509CertificateAttributes {
            let value!: ObjectValue<Certificate>;
            let subject: OPTIONAL<Name>;
            let issuer: OPTIONAL<Name>;
            let serialNumber: OPTIONAL<CertificateSerialNumber>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<Certificate>(
                        _decode_Certificate
                    )(_el);
                },
                subject: (_el: _Element): void => {
                    subject = _decode_Name(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = $._decode_explicit<Name>(() => _decode_Name)(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_X509CertificateAttributes,
                _extension_additions_list_spec_for_X509CertificateAttributes,
                _root_component_type_list_2_spec_for_X509CertificateAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new X509CertificateAttributes(
                value,
                subject,
                issuer,
                serialNumber,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_X509CertificateAttributes(el);
}


let _cached_encoder_for_X509CertificateAttributes: $.ASN1Encoder<X509CertificateAttributes> | null = null;


/**
 * @summary Encodes a(n) X509CertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X509CertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_X509CertificateAttributes(
    value: X509CertificateAttributes,
    elGetter: $.ASN1Encoder<X509CertificateAttributes>
): _Element {
    if (!_cached_encoder_for_X509CertificateAttributes) {
        _cached_encoder_for_X509CertificateAttributes = function (
            value: X509CertificateAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<Certificate>(
                                _encode_Certificate
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.subject === undefined
                                ? undefined
                                : _encode_Name(value.subject, $.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_Name,
                                      $.BER
                                  )(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_CertificateSerialNumber(
                                      value.serialNumber,
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
    return _cached_encoder_for_X509CertificateAttributes(value, elGetter);
}


/* eslint-enable */
