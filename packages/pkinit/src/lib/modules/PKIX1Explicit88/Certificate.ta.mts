/* eslint-disable */
import {
    BIT_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TBSCertificate, _decode_TBSCertificate, _encode_TBSCertificate } from "../PKIX1Explicit88/TBSCertificate.ta.mjs";
// export { TBSCertificate, _decode_TBSCertificate, _encode_TBSCertificate } from "../PKIX1Explicit88/TBSCertificate.ta.mjs";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";


/**
 * @summary Certificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Certificate ::= SEQUENCE  {
 *      tbsCertificate       TBSCertificate,
 *      signatureAlgorithm   AlgorithmIdentifier,
 *      signature            BIT STRING  }
 * ```
 * 
 * @class
 */
export
class Certificate {
    constructor (
        /**
         * @summary `tbsCertificate`.
         * @public
         * @readonly
         */
        readonly tbsCertificate: TBSCertificate,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: AlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: BIT_STRING
    ) {}

    /**
     * @summary Restructures an object into a Certificate
     * @description
     * 
     * This takes an `object` and converts it to a `Certificate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Certificate`.
     * @returns {Certificate}
     */
    public static _from_object (_o: { [_K in keyof (Certificate)]: (Certificate)[_K] }): Certificate {
        return new Certificate(_o.tbsCertificate, _o.signatureAlgorithm, _o.signature);
    }


}

/**
 * @summary The Leading Root Component Types of Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Certificate: $.ComponentSpec[] = [
    new $.ComponentSpec("tbsCertificate", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 3))
];

/**
 * @summary The Trailing Root Component Types of Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Certificate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Certificate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Certificate: $.ASN1Decoder<Certificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Certificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Certificate (el: _Element): Certificate {
    if (!_cached_decoder_for_Certificate) { _cached_decoder_for_Certificate = function (el: _Element): Certificate {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("Certificate contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tbsCertificate";
    sequence[1].name = "signatureAlgorithm";
    sequence[2].name = "signature";
    let tbsCertificate!: TBSCertificate;
    let signatureAlgorithm!: AlgorithmIdentifier;
    let signature!: BIT_STRING;
    tbsCertificate = _decode_TBSCertificate(sequence[0]);
    signatureAlgorithm = _decode_AlgorithmIdentifier(sequence[1]);
    signature = $._decodeBitString(sequence[2]);
    return new Certificate(
        tbsCertificate,
        signatureAlgorithm,
        signature,

    );
}; }
    return _cached_decoder_for_Certificate(el);
}

let _cached_encoder_for_Certificate: $.ASN1Encoder<Certificate> | null = null;

/**
 * @summary Encodes a(n) Certificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Certificate, encoded as an ASN.1 Element.
 */
export
function _encode_Certificate (value: Certificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Certificate) { _cached_encoder_for_Certificate = function (value: Certificate, elGetter: $.ASN1Encoder<Certificate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TBSCertificate(value.tbsCertificate, $.BER),
            /* REQUIRED   */ _encode_AlgorithmIdentifier(value.signatureAlgorithm, $.BER),
            /* REQUIRED   */ $._encodeBitString(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Certificate(value, elGetter);
}


/* eslint-enable */
