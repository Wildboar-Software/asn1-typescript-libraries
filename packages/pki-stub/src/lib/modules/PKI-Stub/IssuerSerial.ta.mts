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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    GeneralNames,
    _decode_GeneralNames,
    _encode_GeneralNames,
} from "../PKI-Stub/GeneralNames.ta.mjs";
import {
    CertificateSerialNumber,
    _decode_CertificateSerialNumber,
    _encode_CertificateSerialNumber,
} from "../PKI-Stub/CertificateSerialNumber.ta.mjs";
import {
    UniqueIdentifier,
    _decode_UniqueIdentifier,
    _encode_UniqueIdentifier,
} from "../PKI-Stub/UniqueIdentifier.ta.mjs";

/**
 * @summary IssuerSerial
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IssuerSerial ::= SEQUENCE {
 *   issuer     GeneralNames,
 *   serial     CertificateSerialNumber,
 *   issuerUID  UniqueIdentifier OPTIONAL,
 *   ... }
 * ```
 *
 * @class
 */
export class IssuerSerial {
    constructor(
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: GeneralNames,
        /**
         * @summary `serial`.
         * @public
         * @readonly
         */
        readonly serial: CertificateSerialNumber,
        /**
         * @summary `issuerUID`.
         * @public
         * @readonly
         */
        readonly issuerUID?: OPTIONAL<UniqueIdentifier>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IssuerSerial
     * @description
     *
     * This takes an `object` and converts it to a `IssuerSerial`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IssuerSerial`.
     * @returns {IssuerSerial}
     */
    public static _from_object(
        _o: { [_K in keyof IssuerSerial]: IssuerSerial[_K] }
    ): IssuerSerial {
        return new IssuerSerial(
            _o.issuer,
            _o.serial,
            _o.issuerUID,
            _o._unrecognizedExtensionsList
        );
    }
}

/**
 * @summary The Leading Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_IssuerSerial: $.ComponentSpec[] =
    [
        new $.ComponentSpec(
            "issuer",
            false,
            $.hasTag(_TagClass.universal, 16)
        ),
        new $.ComponentSpec(
            "serial",
            false,
            $.hasTag(_TagClass.universal, 2)
        ),
        new $.ComponentSpec(
            "issuerUID",
            true,
            $.hasTag(_TagClass.universal, 3)
        ),
    ];

/**
 * @summary The Trailing Root Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_IssuerSerial: $.ComponentSpec[] =
    [];

/**
 * @summary The Extension Addition Component Types of IssuerSerial
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_IssuerSerial: $.ComponentSpec[] =
    [];

/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerial
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IssuerSerial} The decoded data structure.
 */
export function _decode_IssuerSerial(el: _Element): IssuerSerial {

    const elements = el.sequence;
    if (elements.length < 2) {
        throw new _ConstructionError("IssuerSerial contained only " + elements.length.toString() + " elements.");
    }
    let [ issuer_el, serial_el, issuerUID_el, ...extensions ] = elements;
    return new IssuerSerial(
        _decode_GeneralNames(issuer_el),
        _decode_CertificateSerialNumber(serial_el),
        issuerUID_el ? _decode_UniqueIdentifier(issuerUID_el) : undefined,
        extensions
    );
}

/**
 * @summary Encodes a(n) IssuerSerial into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerial, encoded as an ASN.1 Element.
 */
export function _encode_IssuerSerial(value: IssuerSerial,
    _elGetter: $.ASN1Encoder<IssuerSerial>): _Element {
    const components: _Element[] = [
        /* REQUIRED   */ _encode_GeneralNames(
            value.issuer,
            $.BER
        ),
        /* REQUIRED   */ _encode_CertificateSerialNumber(
            value.serial,
            $.BER
        ),
    ];
    if (value.issuerUID) {
        components.push(_encode_UniqueIdentifier(value.issuerUID, $.BER));
    }
    components.push(...value._unrecognizedExtensionsList);
    return $._encodeSequence(components, $.BER);
}


/* eslint-enable */
