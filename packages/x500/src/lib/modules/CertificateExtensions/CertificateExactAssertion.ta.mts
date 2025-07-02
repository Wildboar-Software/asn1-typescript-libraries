/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
/**
 * @summary CertificateExactAssertion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CertificateExactAssertion ::= SEQUENCE {
 *   serialNumber  CertificateSerialNumber,
 *   issuer        Name,
 *   ... }
 * ```
 *
 */
export class CertificateExactAssertion {
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
        readonly issuer: Name,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CertificateExactAssertion
     * @description
     *
     * This takes an `object` and converts it to a `CertificateExactAssertion`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateExactAssertion`.
     * @returns {CertificateExactAssertion}
     */
    public static _from_object(
        _o: Partial<
            {
                [_K in keyof CertificateExactAssertion]: CertificateExactAssertion[_K];
            }
        >
    ): CertificateExactAssertion {
        return new CertificateExactAssertion(
            _o.serialNumber,
            _o.issuer,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
];

/**
 * @summary The Trailing Root Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of CertificateExactAssertion
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_CertificateExactAssertion: $.ComponentSpec[] = [];

let _cached_decoder_for_CertificateExactAssertion: $.ASN1Decoder<CertificateExactAssertion> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateExactAssertion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CertificateExactAssertion} The decoded data structure.
 */
export function _decode_CertificateExactAssertion(el: _Element): CertificateExactAssertion {
    if (!_cached_decoder_for_CertificateExactAssertion) {
        _cached_decoder_for_CertificateExactAssertion = function (
            el: _Element
        ): CertificateExactAssertion {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "CertificateExactAssertion contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "serialNumber";
            sequence[1].name = "issuer";
            let serialNumber!: CertificateSerialNumber;
            let issuer!: Name;
            serialNumber = _decode_CertificateSerialNumber(sequence[0]);
            issuer = _decode_Name(sequence[1]);
            return new CertificateExactAssertion(
                serialNumber,
                issuer,
                sequence.slice(2)
            );
        };
    }
    return _cached_decoder_for_CertificateExactAssertion(el);
}

let _cached_encoder_for_CertificateExactAssertion: $.ASN1Encoder<CertificateExactAssertion> | null = null;

/**
 * @summary Encodes a(n) CertificateExactAssertion into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateExactAssertion, encoded as an ASN.1 Element.
 */
export function _encode_CertificateExactAssertion(
    value: CertificateExactAssertion,
    elGetter: $.ASN1Encoder<CertificateExactAssertion>
): _Element {
    if (!_cached_encoder_for_CertificateExactAssertion) {
        _cached_encoder_for_CertificateExactAssertion = function (
            value: CertificateExactAssertion        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* REQUIRED   */ _encode_CertificateSerialNumber(
                                value.serialNumber,
                                $.DER
                            ),
                            /* REQUIRED   */ _encode_Name(value.issuer, $.DER),
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
    return _cached_encoder_for_CertificateExactAssertion(value, elGetter);
}


/* eslint-enable */
