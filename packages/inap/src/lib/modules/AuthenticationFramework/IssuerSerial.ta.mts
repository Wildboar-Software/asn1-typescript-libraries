/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
import { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";
// export { UniqueIdentifier, _decode_UniqueIdentifier, _encode_UniqueIdentifier } from "../SelectedAttributeTypes/UniqueIdentifier.ta.mjs";


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
 *   issuerUID  UniqueIdentifier OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IssuerSerial {
    /**
     * @summary `issuer`.
     * @public
     * @readonly
     */
    readonly issuer: GeneralNames;
    /**
     * @summary `serial`.
     * @public
     * @readonly
     */
    readonly serial: CertificateSerialNumber;
    /**
     * @summary `issuerUID`.
     * @public
     * @readonly
     */
    readonly issuerUID: OPTIONAL<UniqueIdentifier>;

    constructor (
        issuer: GeneralNames,
        serial: CertificateSerialNumber,
        issuerUID: OPTIONAL<UniqueIdentifier>
    ) {
        this.issuer = issuer;
        this.serial = serial;
        this.issuerUID = issuerUID;
    }

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
    public static _from_object (_o: { [_K in keyof (IssuerSerial)]: (IssuerSerial)[_K] }): IssuerSerial {
        return new IssuerSerial(_o.issuer, _o.serial, _o.issuerUID);
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
export
const _root_component_type_list_1_spec_for_IssuerSerial: $.ComponentSpec[] = [
    /* FIXME: issuer COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("serial", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("issuerUID", true, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of IssuerSerial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IssuerSerial: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IssuerSerial
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IssuerSerial: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IssuerSerial: $.ASN1Decoder<IssuerSerial> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IssuerSerial
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IssuerSerial (el: _Element): IssuerSerial {
    if (!_cached_decoder_for_IssuerSerial) { _cached_decoder_for_IssuerSerial = function (el: _Element): IssuerSerial {
    let issuer!: GeneralNames;
    let serial!: CertificateSerialNumber;
    let issuerUID: OPTIONAL<UniqueIdentifier>;
    const callbacks: $.DecodingMap = {
        "issuer": (_el: _Element): void => { issuer = _decode_GeneralNames(_el); },
        "serial": (_el: _Element): void => { serial = _decode_CertificateSerialNumber(_el); },
        "issuerUID": (_el: _Element): void => { issuerUID = _decode_UniqueIdentifier(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IssuerSerial,
        _extension_additions_list_spec_for_IssuerSerial,
        _root_component_type_list_2_spec_for_IssuerSerial,
        undefined,
    );
    return new IssuerSerial(
        issuer,
        serial,
        issuerUID
    );
}; }
    return _cached_decoder_for_IssuerSerial(el);
}

let _cached_encoder_for_IssuerSerial: $.ASN1Encoder<IssuerSerial> | null = null;

/**
 * @summary Encodes a(n) IssuerSerial into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IssuerSerial, encoded as an ASN.1 Element.
 */
export
function _encode_IssuerSerial (value: IssuerSerial, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IssuerSerial) { _cached_encoder_for_IssuerSerial = function (value: IssuerSerial, elGetter: $.ASN1Encoder<IssuerSerial>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_GeneralNames(value.issuer, $.BER));
    _components.push(/* REQUIRED   */ _encode_CertificateSerialNumber(value.serial, $.BER));
    if (value.issuerUID !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_UniqueIdentifier(value.issuerUID, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IssuerSerial(value, elGetter);
}


/* eslint-enable */
