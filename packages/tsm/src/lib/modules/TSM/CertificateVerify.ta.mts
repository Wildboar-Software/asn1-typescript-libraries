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
import { Signature, _decode_Signature, _encode_Signature } from "../TSM/Signature.ta.mjs";



/**
 * @summary CertificateVerify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertificateVerify ::= SEQUENCE {
 * signature    Signature
 * }
 * ```
 * 
 * @class
 */
export
class CertificateVerify {
    constructor (
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: Signature
    ) {}

    /**
     * @summary Restructures an object into a CertificateVerify
     * @description
     * 
     * This takes an `object` and converts it to a `CertificateVerify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertificateVerify`.
     * @returns {CertificateVerify}
     */
    public static _from_object (_o: { [_K in keyof (CertificateVerify)]: (CertificateVerify)[_K] }): CertificateVerify {
        return new CertificateVerify(_o.signature);
    }


}

/**
 * @summary The Leading Root Component Types of CertificateVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertificateVerify: $.ComponentSpec[] = [
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CertificateVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertificateVerify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertificateVerify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertificateVerify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertificateVerify: $.ASN1Decoder<CertificateVerify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertificateVerify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertificateVerify (el: _Element): CertificateVerify {
    if (!_cached_decoder_for_CertificateVerify) { _cached_decoder_for_CertificateVerify = function (el: _Element): CertificateVerify {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("CertificateVerify contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "signature";
    let signature!: Signature;
    signature = _decode_Signature(sequence[0]);
    return new CertificateVerify(
        signature,

    );
}; }
    return _cached_decoder_for_CertificateVerify(el);
}

let _cached_encoder_for_CertificateVerify: $.ASN1Encoder<CertificateVerify> | null = null;

/**
 * @summary Encodes a(n) CertificateVerify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertificateVerify, encoded as an ASN.1 Element.
 */
export
function _encode_CertificateVerify (value: CertificateVerify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertificateVerify) { _cached_encoder_for_CertificateVerify = function (value: CertificateVerify): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Signature(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertificateVerify(value, elGetter);
}


/* eslint-enable */
