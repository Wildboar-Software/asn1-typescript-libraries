/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OBJECT_IDENTIFIER,
    OPTIONAL,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttributeCertificate,
    _decode_AttributeCertificate,
    _encode_AttributeCertificate,
} from "@wildboar/x500/AttributeCertificateDefinitions";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "@wildboar/x500/AuthenticationFramework";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "@wildboar/x500/CertificateExtensions";
import {
    ObjectValue,
    _get_decoder_for_ObjectValue,
    _get_encoder_for_ObjectValue,
} from "../PKCS-15/ObjectValue.ta.mjs";


/**
 * @summary X509AttributeCertificateAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X509AttributeCertificateAttributes ::= SEQUENCE {
 *     value ObjectValue { AttributeCertificate },
 *     issuer GeneralNames OPTIONAL,
 *     serialNumber CertificateSerialNumber OPTIONAL,
 *     attrTypes [0] SEQUENCE OF OBJECT IDENTIFIER OPTIONAL,
 *     ... -- For future extensions
 * }
 * ```
 *
 */
export class X509AttributeCertificateAttributes {
    constructor(
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ObjectValue<AttributeCertificate>,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: OPTIONAL<GeneralNames>,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OPTIONAL<CertificateSerialNumber>,
        /**
         * @summary `attrTypes`.
         * @public
         * @readonly
         */
        readonly attrTypes: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a X509AttributeCertificateAttributes
     * @description
     *
     * This takes an `object` and converts it to a `X509AttributeCertificateAttributes`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `X509AttributeCertificateAttributes`.
     * @returns {X509AttributeCertificateAttributes}
     */
    public static _from_object(
        _o: {
            [_K in keyof X509AttributeCertificateAttributes]: X509AttributeCertificateAttributes[_K];
        }
    ): X509AttributeCertificateAttributes {
        return new X509AttributeCertificateAttributes(
            _o.value,
            _o.issuer,
            _o.serialNumber,
            _o.attrTypes,
            _o._unrecognizedExtensionsList
        );
    }
}


/**
 * @summary The Leading Root Component Types of X509AttributeCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_X509AttributeCertificateAttributes: $.ComponentSpec[] = [
    new $.ComponentSpec("value", false, $.hasAnyTag),
    new $.ComponentSpec(
        "issuer",
        true,
        $.hasTag(_TagClass.universal, 16)
    ),
    new $.ComponentSpec(
        "serialNumber",
        true,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "attrTypes",
        true,
        $.hasTag(_TagClass.context, 0)
    ),
];


/**
 * @summary The Trailing Root Component Types of X509AttributeCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_X509AttributeCertificateAttributes: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of X509AttributeCertificateAttributes
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_X509AttributeCertificateAttributes: $.ComponentSpec[] = [];


let _cached_decoder_for_X509AttributeCertificateAttributes: $.ASN1Decoder<X509AttributeCertificateAttributes> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) X509AttributeCertificateAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {X509AttributeCertificateAttributes} The decoded data structure.
 */
export function _decode_X509AttributeCertificateAttributes(el: _Element): X509AttributeCertificateAttributes {
    if (!_cached_decoder_for_X509AttributeCertificateAttributes) {
        _cached_decoder_for_X509AttributeCertificateAttributes = function (
            el: _Element
        ): X509AttributeCertificateAttributes {
            let value!: ObjectValue<AttributeCertificate>;
            let issuer: OPTIONAL<GeneralNames>;
            let serialNumber: OPTIONAL<CertificateSerialNumber>;
            let attrTypes: OPTIONAL<OBJECT_IDENTIFIER[]>;
            let _unrecognizedExtensionsList: _Element[] = [];
            const callbacks: $.DecodingMap = {
                value: (_el: _Element): void => {
                    value = _get_decoder_for_ObjectValue<AttributeCertificate>(
                        _decode_AttributeCertificate
                    )(_el);
                },
                issuer: (_el: _Element): void => {
                    issuer = _decode_GeneralNames(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = _decode_CertificateSerialNumber(_el);
                },
                attrTypes: (_el: _Element): void => {
                    attrTypes = $._decode_implicit<OBJECT_IDENTIFIER[]>(() =>
                        $._decodeSequenceOf<OBJECT_IDENTIFIER>(
                            () => $._decodeObjectIdentifier
                        )
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_X509AttributeCertificateAttributes,
                _extension_additions_list_spec_for_X509AttributeCertificateAttributes,
                _root_component_type_list_2_spec_for_X509AttributeCertificateAttributes,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new X509AttributeCertificateAttributes(
                value,
                issuer,
                serialNumber,
                attrTypes,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_X509AttributeCertificateAttributes(el);
}


let _cached_encoder_for_X509AttributeCertificateAttributes: $.ASN1Encoder<X509AttributeCertificateAttributes> | null = null;


/**
 * @summary Encodes a(n) X509AttributeCertificateAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The X509AttributeCertificateAttributes, encoded as an ASN.1 Element.
 */
export function _encode_X509AttributeCertificateAttributes(
    value: X509AttributeCertificateAttributes,
    elGetter: $.ASN1Encoder<X509AttributeCertificateAttributes>
): _Element {
    if (!_cached_encoder_for_X509AttributeCertificateAttributes) {
        _cached_encoder_for_X509AttributeCertificateAttributes = function (
            value: X509AttributeCertificateAttributes        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _get_encoder_for_ObjectValue<AttributeCertificate>(
                                _encode_AttributeCertificate
                            )(value.value, $.BER),
                            /* IF_ABSENT  */ value.issuer === undefined
                                ? undefined
                                : _encode_GeneralNames(value.issuer, $.BER),
                            /* IF_ABSENT  */ value.serialNumber === undefined
                                ? undefined
                                : _encode_CertificateSerialNumber(
                                      value.serialNumber,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.attrTypes === undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () =>
                                          $._encodeSequenceOf<OBJECT_IDENTIFIER>(
                                              () => $._encodeObjectIdentifier,
                                              $.BER
                                          ),
                                      $.BER
                                  )(value.attrTypes, $.BER),
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
    return _cached_encoder_for_X509AttributeCertificateAttributes(
        value,
        elGetter
    );
}


/* eslint-enable */
