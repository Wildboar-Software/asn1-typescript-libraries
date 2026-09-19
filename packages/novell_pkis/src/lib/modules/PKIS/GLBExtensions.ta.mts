/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KeyQuality, _decode_KeyQuality, _encode_KeyQuality } from "../PKIS/KeyQuality.ta.mjs";
// export { KeyQuality, _decode_KeyQuality, _encode_KeyQuality } from "../PKIS/KeyQuality.ta.mjs";
import { CryptoProcessQuality, _decode_CryptoProcessQuality, _encode_CryptoProcessQuality } from "../PKIS/CryptoProcessQuality.ta.mjs";
// export { CryptoProcessQuality, _decode_CryptoProcessQuality, _encode_CryptoProcessQuality } from "../PKIS/CryptoProcessQuality.ta.mjs";
import { CertificateClass, _decode_CertificateClass, _encode_CertificateClass } from "../PKIS/CertificateClass.ta.mjs";
// export { CertificateClass, _decode_CertificateClass, _encode_CertificateClass } from "../PKIS/CertificateClass.ta.mjs";
import { EnterpriseId, _decode_EnterpriseId, _encode_EnterpriseId } from "../PKIS/EnterpriseId.ta.mjs";
// export { EnterpriseId, _decode_EnterpriseId, _encode_EnterpriseId } from "../PKIS/EnterpriseId.ta.mjs";


/**
 * @summary GLBExtensions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GLBExtensions ::= SEQUENCE{
 *   -- These are the extensions over which the
 *   -- Greatest Lower Bound is computed within NICI.
 *  keyQuality [0] IMPLICIT KeyQuality,
 *  cryptoProcessQuality [1] IMPLICIT CryptoProcessQuality,
 *  certificateClass [2] IMPLICIT CertificateClass,
 *  enterpriseId [3] IMPLICIT EnterpriseId
 * }
 * ```
 * 
 * @class
 */
export
class GLBExtensions {
    constructor (
        /**
         * @summary `keyQuality`.
         * @public
         * @readonly
         */
        readonly keyQuality: KeyQuality,
        /**
         * @summary `cryptoProcessQuality`.
         * @public
         * @readonly
         */
        readonly cryptoProcessQuality: CryptoProcessQuality,
        /**
         * @summary `certificateClass`.
         * @public
         * @readonly
         */
        readonly certificateClass: CertificateClass,
        /**
         * @summary `enterpriseId`.
         * @public
         * @readonly
         */
        readonly enterpriseId: EnterpriseId
    ) {}

    /**
     * @summary Restructures an object into a GLBExtensions
     * @description
     * 
     * This takes an `object` and converts it to a `GLBExtensions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GLBExtensions`.
     * @returns {GLBExtensions}
     */
    public static _from_object (_o: { [_K in keyof (GLBExtensions)]: (GLBExtensions)[_K] }): GLBExtensions {
        return new GLBExtensions(_o.keyQuality, _o.cryptoProcessQuality, _o.certificateClass, _o.enterpriseId);
    }


}

/**
 * @summary The Leading Root Component Types of GLBExtensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GLBExtensions: $.ComponentSpec[] = [
    new $.ComponentSpec("keyQuality", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cryptoProcessQuality", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("certificateClass", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("enterpriseId", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of GLBExtensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GLBExtensions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GLBExtensions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GLBExtensions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GLBExtensions: $.ASN1Decoder<GLBExtensions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GLBExtensions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GLBExtensions (el: _Element): GLBExtensions {
    if (!_cached_decoder_for_GLBExtensions) { _cached_decoder_for_GLBExtensions = function (el: _Element): GLBExtensions {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("GLBExtensions contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "keyQuality";
    sequence[1].name = "cryptoProcessQuality";
    sequence[2].name = "certificateClass";
    sequence[3].name = "enterpriseId";
    let keyQuality!: KeyQuality;
    let cryptoProcessQuality!: CryptoProcessQuality;
    let certificateClass!: CertificateClass;
    let enterpriseId!: EnterpriseId;
    keyQuality = $._decode_implicit<KeyQuality>(() => _decode_KeyQuality)(sequence[0]);
    cryptoProcessQuality = $._decode_implicit<CryptoProcessQuality>(() => _decode_CryptoProcessQuality)(sequence[1]);
    certificateClass = $._decode_implicit<CertificateClass>(() => _decode_CertificateClass)(sequence[2]);
    enterpriseId = $._decode_implicit<EnterpriseId>(() => _decode_EnterpriseId)(sequence[3]);
    return new GLBExtensions(
        keyQuality,
        cryptoProcessQuality,
        certificateClass,
        enterpriseId,

    );
}; }
    return _cached_decoder_for_GLBExtensions(el);
}

let _cached_encoder_for_GLBExtensions: $.ASN1Encoder<GLBExtensions> | null = null;

/**
 * @summary Encodes a(n) GLBExtensions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GLBExtensions, encoded as an ASN.1 Element.
 */
export
function _encode_GLBExtensions (value: GLBExtensions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GLBExtensions) { _cached_encoder_for_GLBExtensions = function (value: GLBExtensions, elGetter: $.ASN1Encoder<GLBExtensions>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_KeyQuality, $.BER)(value.keyQuality, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CryptoProcessQuality, $.BER)(value.cryptoProcessQuality, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CertificateClass, $.BER)(value.certificateClass, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_EnterpriseId, $.BER)(value.enterpriseId, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GLBExtensions(value, elGetter);
}


/* eslint-enable */
