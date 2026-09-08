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
import { CMSVersion, _decode_CMSVersion, _encode_CMSVersion } from "../X9-84-CMS/CMSVersion.ta.mjs";

import { SignerIdentifier, _decode_SignerIdentifier, _encode_SignerIdentifier } from "../X9-84-CMS/SignerIdentifier.ta.mjs";

import { DigestAlgorithmIdentifier, _decode_DigestAlgorithmIdentifier, _encode_DigestAlgorithmIdentifier } from "../X9-84-CMS/DigestAlgorithmIdentifier.ta.mjs";

import { SignatureAlgorithmIdentifier, _decode_SignatureAlgorithmIdentifier, _encode_SignatureAlgorithmIdentifier } from "../X9-84-CMS/SignatureAlgorithmIdentifier.ta.mjs";

import { SignatureValue, _decode_SignatureValue, _encode_SignatureValue } from "../X9-84-CMS/SignatureValue.ta.mjs";



/**
 * @summary SignerInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignerInfo ::= SEQUENCE {
 *    version             CMSVersion,
 *    sid                 SignerIdentifier,
 *    digestAlgorithm     DigestAlgorithmIdentifier,
 *    signatureAlgorithm  SignatureAlgorithmIdentifier,
 *    signature           SignatureValue
 * }
 * ```
 * 
 * @class
 */
export
class SignerInfo {
    constructor (
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: CMSVersion,
        /**
         * @summary `sid`.
         * @public
         * @readonly
         */
        readonly sid: SignerIdentifier,
        /**
         * @summary `digestAlgorithm`.
         * @public
         * @readonly
         */
        readonly digestAlgorithm: DigestAlgorithmIdentifier,
        /**
         * @summary `signatureAlgorithm`.
         * @public
         * @readonly
         */
        readonly signatureAlgorithm: SignatureAlgorithmIdentifier,
        /**
         * @summary `signature`.
         * @public
         * @readonly
         */
        readonly signature: SignatureValue
    ) {}

    /**
     * @summary Restructures an object into a SignerInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SignerInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SignerInfo`.
     * @returns {SignerInfo}
     */
    public static _from_object (_o: { [_K in keyof (SignerInfo)]: (SignerInfo)[_K] }): SignerInfo {
        return new SignerInfo(_o.version, _o.sid, _o.digestAlgorithm, _o.signatureAlgorithm, _o.signature);
    }


}

/**
 * @summary The Leading Root Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SignerInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("sid", false, $.hasAnyTag),
    new $.ComponentSpec("digestAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signatureAlgorithm", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("signature", false, $.hasTag(_TagClass.universal, 4))
];

/**
 * @summary The Trailing Root Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SignerInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SignerInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SignerInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SignerInfo: $.ASN1Decoder<SignerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SignerInfo (el: _Element): SignerInfo {
    if (!_cached_decoder_for_SignerInfo) { _cached_decoder_for_SignerInfo = function (el: _Element): SignerInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 5) {
        throw new _ConstructionError("SignerInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "version";
    sequence[1].name = "sid";
    sequence[2].name = "digestAlgorithm";
    sequence[3].name = "signatureAlgorithm";
    sequence[4].name = "signature";
    let version!: CMSVersion;
    let sid!: SignerIdentifier;
    let digestAlgorithm!: DigestAlgorithmIdentifier;
    let signatureAlgorithm!: SignatureAlgorithmIdentifier;
    let signature!: SignatureValue;
    version = _decode_CMSVersion(sequence[0]);
    sid = _decode_SignerIdentifier(sequence[1]);
    digestAlgorithm = _decode_DigestAlgorithmIdentifier(sequence[2]);
    signatureAlgorithm = _decode_SignatureAlgorithmIdentifier(sequence[3]);
    signature = _decode_SignatureValue(sequence[4]);
    return new SignerInfo(
        version,
        sid,
        digestAlgorithm,
        signatureAlgorithm,
        signature,

    );
}; }
    return _cached_decoder_for_SignerInfo(el);
}

let _cached_encoder_for_SignerInfo: $.ASN1Encoder<SignerInfo> | null = null;

/**
 * @summary Encodes a(n) SignerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SignerInfo (value: SignerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SignerInfo) { _cached_encoder_for_SignerInfo = function (value: SignerInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CMSVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_SignerIdentifier(value.sid, $.BER),
            /* REQUIRED   */ _encode_DigestAlgorithmIdentifier(value.digestAlgorithm, $.BER),
            /* REQUIRED   */ _encode_SignatureAlgorithmIdentifier(value.signatureAlgorithm, $.BER),
            /* REQUIRED   */ _encode_SignatureValue(value.signature, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SignerInfo(value, elGetter);
}


/* eslint-enable */
