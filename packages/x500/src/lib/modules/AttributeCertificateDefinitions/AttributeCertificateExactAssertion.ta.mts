/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    AttCertIssuer,
    _decode_AttCertIssuer,
    _encode_AttCertIssuer,
} from "../AttributeCertificateDefinitions/AttCertIssuer.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
/**
 * @summary AttributeCertificateExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AttributeCertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        AttCertIssuer,
 *   ... }
 * ```
 *
 * @class
 */
export class AttributeCertificateExactAssertion {
    constructor(
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: AttCertIssuer,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AttributeCertificateExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `AttributeCertificateExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeCertificateExactAssertion`.
     * @returns {AttributeCertificateExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof AttributeCertificateExactAssertion]: AttributeCertificateExactAssertion[_K];
            }
        >
    ): AttributeCertificateExactAssertion {
        return new AttributeCertificateExactAssertion(
            _o.serialNumber,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec(
        "issuer",
        false,
        $.hasTag(_TagClass.context, 0)
    ),
];

/**
 * @summary The Trailing Root Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of AttributeCertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_AttributeCertificateExactAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_AttributeCertificateExactAssertion: $.ASN1Decoder<AttributeCertificateExactAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeCertificateExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AttributeCertificateExactAssertion} The decoded data structure.
 */
export function _decode_AttributeCertificateExactAssertion(el: _Element) {
    if (!_cached_decoder_for_AttributeCertificateExactAssertion) {
        _cached_decoder_for_AttributeCertificateExactAssertion = function (
            el: _Element
        ): AttributeCertificateExactAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "AttributeCertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: AttCertIssuer;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_AttCertIssuer(sequence[1]);
            return new AttributeCertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_AttributeCertificateExactAssertion(el);
}

let _cached_encoder_for_AttributeCertificateExactAssertion: $.ASN1Encoder<AttributeCertificateExactAssertion> | null = null;

/**
 * @summary Encodes a(n) AttributeCertificateExactAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeCertificateExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_AttributeCertificateExactAssertion(
    value: AttributeCertificateExactAssertion,
    elGetter: $.ASN1Encoder<AttributeCertificateExactAssertion>
) {
    if (!_cached_encoder_for_AttributeCertificateExactAssertion) {
        _cached_encoder_for_AttributeCertificateExactAssertion = function (
            value: AttributeCertificateExactAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_AttCertIssuer(
                                value.issuer,
                                $.DER
                            ),
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
    return _cached_encoder_for_AttributeCertificateExactAssertion(
        value,
        elGetter
    );
}


/* eslint-enable */
