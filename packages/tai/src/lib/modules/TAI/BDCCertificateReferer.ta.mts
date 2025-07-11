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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Name, _decode_Name, _encode_Name } from "@wildboar/x500/InformationFramework";
import { type CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "@wildboar/x500/AuthenticationFramework";
import { type KeyUsage, _decode_KeyUsage, _encode_KeyUsage } from "@wildboar/x500/CertificateExtensions";

/**
 * @summary BDCCertificateReferer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BDCCertificateReferer ::= SEQUENCE {
 *   bdcIssuer        Name,
 *   bdcSerialNumber  CertificateSerialNumber,
 *   bdcUsage         KeyUsage
 * }
 * ```
 * 
 */
export
class BDCCertificateReferer {
    constructor (
        /**
         * @summary `bdcIssuer`.
         * @public
         * @readonly
         */
        readonly bdcIssuer: Name,
        /**
         * @summary `bdcSerialNumber`.
         * @public
         * @readonly
         */
        readonly bdcSerialNumber: CertificateSerialNumber,
        /**
         * @summary `bdcUsage`.
         * @public
         * @readonly
         */
        readonly bdcUsage: KeyUsage
    ) {}

    /**
     * @summary Restructures an object into a BDCCertificateReferer
     * @description
     * 
     * This takes an `object` and converts it to a `BDCCertificateReferer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BDCCertificateReferer`.
     * @returns {BDCCertificateReferer}
     */
    public static _from_object (_o: { [_K in keyof (BDCCertificateReferer)]: (BDCCertificateReferer)[_K] }): BDCCertificateReferer {
        return new BDCCertificateReferer(_o.bdcIssuer, _o.bdcSerialNumber, _o.bdcUsage);
    }


}

/**
 * @summary The Leading Root Component Types of BDCCertificateReferer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BDCCertificateReferer: $.ComponentSpec[] = [
    new $.ComponentSpec("bdcIssuer", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("bdcSerialNumber", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("bdcUsage", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of BDCCertificateReferer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BDCCertificateReferer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BDCCertificateReferer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BDCCertificateReferer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BDCCertificateReferer: $.ASN1Decoder<BDCCertificateReferer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BDCCertificateReferer
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDCCertificateReferer} The decoded data structure.
 */
export
function _decode_BDCCertificateReferer (el: _Element): BDCCertificateReferer {
    if (!_cached_decoder_for_BDCCertificateReferer) { _cached_decoder_for_BDCCertificateReferer = function (el: _Element): BDCCertificateReferer {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("BDCCertificateReferer contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "bdcIssuer";
    sequence[1].name = "bdcSerialNumber";
    sequence[2].name = "bdcUsage";
    let bdcIssuer!: Name;
    let bdcSerialNumber!: CertificateSerialNumber;
    let bdcUsage!: KeyUsage;
    bdcIssuer = _decode_Name(sequence[0]);
    bdcSerialNumber = _decode_CertificateSerialNumber(sequence[1]);
    bdcUsage = _decode_KeyUsage(sequence[2]);
    return new BDCCertificateReferer(
        bdcIssuer,
        bdcSerialNumber,
        bdcUsage,

    );
}; }
    return _cached_decoder_for_BDCCertificateReferer(el);
}

let _cached_encoder_for_BDCCertificateReferer: $.ASN1Encoder<BDCCertificateReferer> | null = null;

/**
 * @summary Encodes a(n) BDCCertificateReferer into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDCCertificateReferer, encoded as an ASN.1 Element.
 */
export
function _encode_BDCCertificateReferer (value: BDCCertificateReferer, elGetter: $.ASN1Encoder<BDCCertificateReferer>): _Element {
    if (!_cached_encoder_for_BDCCertificateReferer) { _cached_encoder_for_BDCCertificateReferer = function (value: BDCCertificateReferer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Name(value.bdcIssuer, $.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.bdcSerialNumber, $.BER),
            /* REQUIRED   */ _encode_KeyUsage(value.bdcUsage, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BDCCertificateReferer(value, elGetter);
}


/* eslint-enable */
