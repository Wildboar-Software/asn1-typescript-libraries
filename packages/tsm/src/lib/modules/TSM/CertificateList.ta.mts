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
import { Certificates, _decode_Certificates, _encode_Certificates } from "../TSM/Certificates.ta.mjs";



/**
 * @summary CertificateList
 * @description
 *
 * TLS Certificate handshake: chain of `X509Certificate`. ITU-T Rec.
 * X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateList ::= SEQUENCE {
 * certificates    Certificates
 * }
 * ```
 * 
 * @class
 */
export
class CertificateList {
    constructor (
        /**
         * @summary `certificates`.
         * @description
         *
         * Certificate chain, leaf first. X.1084 Annex A.
         *
         * @public
         * @readonly
         */
        readonly certificates: Certificates
    ) {}

    /**
     * @summary Restructures an object into a CertificateList
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateList`.
     * @returns {CertificateList}
     */
    public static _from_object (_o: { [_K in keyof (CertificateList)]: (CertificateList)[_K] }): CertificateList {
        return new CertificateList(_o.certificates);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateList: $.ComponentSpec[] = [
    new $.ComponentSpec("certificates", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateList: $.ASN1Decoder<CertificateList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateList (el: _Element): CertificateList {
    if (!_cached_decoder_for_CertificateList) { _cached_decoder_for_CertificateList = function (el: _Element): CertificateList {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CertificateList contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certificates";
    let certificates!: Certificates;
    certificates = _decode_Certificates(sequence[0]);
    return new CertificateList(
        certificates,

    );
}; }
    return _cached_decoder_for_CertificateList(el);
}

let _cached_encoder_for_CertificateList: $.ASN1Encoder<CertificateList> | null = null;

/**
 * @summary Encodes a(n) CertificateList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateList, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateList (value: CertificateList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateList) { _cached_encoder_for_CertificateList = function (value: CertificateList): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Certificates(value.certificates, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateList(value, elGetter);
}


/* eslint-enable */
