/* eslint-disable */
import {
    OCTET_STRING,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AuthenticationFramework/AlgorithmIdentifier.ta.mjs";


/**
 * @summary HashedCertificateIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HashedCertificateIdentifier ::= SEQUENCE {
 *     hashAlgorithm               AlgorithmIdentifier{{SupportedAlgorithms}},
 *     hashOverSignatureValue      OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class HashedCertificateIdentifier {
    /**
     * @summary `hashAlgorithm`.
     * @public
     * @readonly
     */
    readonly hashAlgorithm: AlgorithmIdentifier;
    /**
     * @summary `hashOverSignatureValue`.
     * @public
     * @readonly
     */
    readonly hashOverSignatureValue: OCTET_STRING;

    constructor (
        hashAlgorithm: AlgorithmIdentifier,
        hashOverSignatureValue: OCTET_STRING
    ) {
        this.hashAlgorithm = hashAlgorithm;
        this.hashOverSignatureValue = hashOverSignatureValue;
    }

    /**
     * @summary Restructures an object into a HashedCertificateIdentifier
     * @description
     * 
     * This takes an `object` and converts it to a `HashedCertificateIdentifier`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `HashedCertificateIdentifier`.
     * @returns {HashedCertificateIdentifier}
     */
    public static _from_object (_o: { [_K in keyof (HashedCertificateIdentifier)]: (HashedCertificateIdentifier)[_K] }): HashedCertificateIdentifier {
        return new HashedCertificateIdentifier(_o.hashAlgorithm, _o.hashOverSignatureValue);
    }


}

/**
 * @summary The Leading Root Component Types of HashedCertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_HashedCertificateIdentifier: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("hashOverSignatureValue", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of HashedCertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_HashedCertificateIdentifier: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of HashedCertificateIdentifier
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_HashedCertificateIdentifier: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_HashedCertificateIdentifier: $.ASN1Decoder<HashedCertificateIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HashedCertificateIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HashedCertificateIdentifier (el: _Element): HashedCertificateIdentifier {
    if (!_cached_decoder_for_HashedCertificateIdentifier) { _cached_decoder_for_HashedCertificateIdentifier = function (el: _Element): HashedCertificateIdentifier {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("HashedCertificateIdentifier contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hashAlgorithm";
    sequence[1].name = "hashOverSignatureValue";
    let hashAlgorithm!: AlgorithmIdentifier;
    let hashOverSignatureValue!: OCTET_STRING;
    hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
    hashOverSignatureValue = $._decodeOctetString(sequence[1]);
    return new HashedCertificateIdentifier(
        hashAlgorithm,
        hashOverSignatureValue,

    );
}; }
    return _cached_decoder_for_HashedCertificateIdentifier(el);
}

let _cached_encoder_for_HashedCertificateIdentifier: $.ASN1Encoder<HashedCertificateIdentifier> | null = null;

/**
 * @summary Encodes a(n) HashedCertificateIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HashedCertificateIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_HashedCertificateIdentifier (value: HashedCertificateIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HashedCertificateIdentifier) { _cached_encoder_for_HashedCertificateIdentifier = function (value: HashedCertificateIdentifier): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AlgorithmIdentifier(value.hashAlgorithm, $.BER),
        /* REQUIRED   */ $._encodeOctetString(value.hashOverSignatureValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_HashedCertificateIdentifier(value, elGetter);
}


/* eslint-enable */
