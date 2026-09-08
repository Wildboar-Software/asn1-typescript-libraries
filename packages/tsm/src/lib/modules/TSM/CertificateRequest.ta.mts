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
import { ClientCertificateTypes, _decode_ClientCertificateTypes, _encode_ClientCertificateTypes } from "../TSM/ClientCertificateTypes.ta.mjs";

import { DistinguishedNames, _decode_DistinguishedNames, _encode_DistinguishedNames } from "../TSM/DistinguishedNames.ta.mjs";



/**
 * @summary CertificateRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateRequest ::= SEQUENCE {
 * certificate-types            ClientCertificateTypes,
 * certificate-authorities    DistinguishedNames
 * }
 * ```
 * 
 * @class
 */
export
class CertificateRequest {
    constructor (
        /**
         * @summary `certificate_types`.
         * @public
         * @readonly
         */
        readonly certificate_types: ClientCertificateTypes,
        /**
         * @summary `certificate_authorities`.
         * @public
         * @readonly
         */
        readonly certificate_authorities: DistinguishedNames
    ) {}

    /**
     * @summary Restructures an object into a CertificateRequest
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateRequest`.
     * @returns {CertificateRequest}
     */
    public static _from_object (_o: { [_K in keyof (CertificateRequest)]: (CertificateRequest)[_K] }): CertificateRequest {
        return new CertificateRequest(_o.certificate_types, _o.certificate_authorities);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("certificate-types", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("certificate-authorities", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CertificateRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateRequest: $.ASN1Decoder<CertificateRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateRequest (el: _Element): CertificateRequest {
    if (!_cached_decoder_for_CertificateRequest) { _cached_decoder_for_CertificateRequest = function (el: _Element): CertificateRequest {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CertificateRequest contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "certificate-types";
    sequence[1].name = "certificate-authorities";
    let certificate_types!: ClientCertificateTypes;
    let certificate_authorities!: DistinguishedNames;
    certificate_types = _decode_ClientCertificateTypes(sequence[0]);
    certificate_authorities = _decode_DistinguishedNames(sequence[1]);
    return new CertificateRequest(
        certificate_types,
        certificate_authorities,

    );
}; }
    return _cached_decoder_for_CertificateRequest(el);
}

let _cached_encoder_for_CertificateRequest: $.ASN1Encoder<CertificateRequest> | null = null;

/**
 * @summary Encodes a(n) CertificateRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateRequest, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateRequest (value: CertificateRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateRequest) { _cached_encoder_for_CertificateRequest = function (value: CertificateRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ClientCertificateTypes(value.certificate_types, $.BER),
            /* REQUIRED   */ _encode_DistinguishedNames(value.certificate_authorities, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateRequest(value, elGetter);
}


/* eslint-enable */
