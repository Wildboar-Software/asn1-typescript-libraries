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
} from "@wildboar/x500/AuthenticationFramework";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "@wildboar/x500/InformationFramework";


/**
 * @summary IssuerAndSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerAndSerialNumber ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  CertificateSerialNumber
 * }
 * ```
 *
 */
export class IssuerAndSerialNumber {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: Name,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber
    ) {}

    /**
     * @summary Restructures an object into a IssuerAndSerialNumber
     * @description
     *
     * This takes an `object` and converts it to a `IssuerAndSerialNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerAndSerialNumber`.
     * @returns {IssuerAndSerialNumber}
     */
    public static _from_object(
        _o: { [_K in keyof IssuerAndSerialNumber]: IssuerAndSerialNumber[_K] }
    ): IssuerAndSerialNumber {
        return new IssuerAndSerialNumber(_o.issuer, _o.serialNumber);
    }
}


/**
 * @summary The Leading Root Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2)
    ),
];


/**
 * @summary The Trailing Root Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [];


/**
 * @summary The Extension Addition Component Types of IssuerAndSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerAndSerialNumber: $.ComponentSpec[] = [];


let _cached_decoder_for_IssuerAndSerialNumber: $.ASN1Decoder<IssuerAndSerialNumber> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) IssuerAndSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerAndSerialNumber} The decoded data structure.
 */
export function _decode_IssuerAndSerialNumber(el: _Element): IssuerAndSerialNumber {
    if (!_cached_decoder_for_IssuerAndSerialNumber) {
        _cached_decoder_for_IssuerAndSerialNumber = function (
            el: _Element
        ): IssuerAndSerialNumber {
            const sequence: _Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new _ConstructionError(
                    "IssuerAndSerialNumber contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            sequence[0].name = "issuer";
            sequence[1].name = "serialNumber";
            let issuer!: Name;
            let serialNumber!: CertificateSerialNumber;
            issuer = _decode_Name(sequence[0]);
            serialNumber = _decode_CertificateSerialNumber(sequence[1]);
            return new IssuerAndSerialNumber(issuer, serialNumber);
        };
    }
    return _cached_decoder_for_IssuerAndSerialNumber(el);
}


let _cached_encoder_for_IssuerAndSerialNumber: $.ASN1Encoder<IssuerAndSerialNumber> | null = null;


/**
 * @summary Encodes a(n) IssuerAndSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerAndSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_IssuerAndSerialNumber(
    value: IssuerAndSerialNumber,
    elGetter: $.ASN1Encoder<IssuerAndSerialNumber>
): _Element {
    if (!_cached_encoder_for_IssuerAndSerialNumber) {
        _cached_encoder_for_IssuerAndSerialNumber = function (
            value: IssuerAndSerialNumber        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_Name(value.issuer, $.BER),
                        /* REQUIRED   */ _encode_CertificateSerialNumber(
                            value.serialNumber,
                            $.BER
                        ),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_IssuerAndSerialNumber(value, elGetter);
}


/* eslint-enable */
