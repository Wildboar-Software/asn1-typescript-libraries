/* eslint-disable */
import {
    OCTET_STRING,
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
import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";



/**
 * @summary DigestInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DigestInfo ::= SEQUENCE {
 *    hashAlgorithm  DigestAlgorithmIdentifier,
 *    digest         OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class DigestInfo {
    constructor (
        /**
         * @summary `hashAlgorithm`.
         * @public
         * @readonly
         */
        readonly hashAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `digest`.
         * @public
         * @readonly
         */
        readonly digest: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a DigestInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DigestInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DigestInfo`.
     * @returns {DigestInfo}
     */
    public static _from_object (_o: { [_K in keyof (DigestInfo)]: (DigestInfo)[_K] }): DigestInfo {
        return new DigestInfo(_o.hashAlgorithm, _o.digest);
    }


}

/**
 * @summary The Leading Root Component Types of DigestInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DigestInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("hashAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("digest", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of DigestInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DigestInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DigestInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DigestInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DigestInfo: $.ASN1Decoder<DigestInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DigestInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DigestInfo (el: _Element): DigestInfo {
    if (!_cached_decoder_for_DigestInfo) { _cached_decoder_for_DigestInfo = function (el: _Element): DigestInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DigestInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hashAlgorithm";
    sequence[1].name = "digest";
    let hashAlgorithm!: DigestAlgorithmIdentifier;
    let digest!: OCTET_STRING;
    hashAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[0]);
    digest = $._decodeOctetString(sequence[1]);
    return new DigestInfo(
        hashAlgorithm,
        digest,

    );
}; }
    return _cached_decoder_for_DigestInfo(el);
}

let _cached_encoder_for_DigestInfo: $.ASN1Encoder<DigestInfo> | null = null;

/**
 * @summary Encodes a(n) DigestInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DigestInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DigestInfo (value: DigestInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DigestInfo) { _cached_encoder_for_DigestInfo = function (value: DigestInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.hashAlgorithm, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.digest, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DigestInfo(value, elGetter);
}


/* eslint-enable */
