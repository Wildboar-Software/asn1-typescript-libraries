/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "jsr:@wildboar/asn1@11";
import * as $ from "jsr:@wildboar/asn1@11/functional";
import { Name, _decode_Name, _encode_Name } from "../PKI-Stub/Name.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../PKI-Stub/CertificateSerialNumber.ta.mjs";

/**
 * @summary IssuerSerialNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerialNumber ::= SEQUENCE {
 *   issuer        Name,
 *   serialNumber  CertificateSerialNumber,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerialNumber {
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
        readonly serialNumber: CertificateSerialNumber,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerSerialNumber
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerialNumber`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerialNumber`.
     * @returns {IssuerSerialNumber}
     */
    public static _from_object(
        _o: { [_K in keyof IssuerSerialNumber]: IssuerSerialNumber[_K] }
    ): IssuerSerialNumber {
        return new IssuerSerialNumber(
            _o.issuer,
            _o.serialNumber,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerialNumber: $.ComponentSpec[] =
    [
        new $.ComponentSpec("issuer", false, $.hasAnyTag),
        new $.ComponentSpec(
            "serialNumber",
            false,
            $.hasTag(_TagClass.universal, 2)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerialNumber: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of IssuerSerialNumber
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerialNumber: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerialNumber
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerialNumber} The decoded data structure.
 */
export function _decode_IssuerSerialNumber(el: _Element): IssuerSerialNumber {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError(
            "IssuerSerialNumber contained only " +
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
    return new IssuerSerialNumber(
        issuer,
        serialNumber,
        sequence.slice(2)
    );
}

/**
 * @summary Encodes a(n) IssuerSerialNumber into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerialNumber, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerialNumber(value: IssuerSerialNumber) {
    const components: _Element[] = [
        _encode_Name(value.issuer, $.BER),
        _encode_CertificateSerialNumber(value.serialNumber, $.BER),
        ...value._unrecognizedExtensionsList ?? [],
    ];
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
