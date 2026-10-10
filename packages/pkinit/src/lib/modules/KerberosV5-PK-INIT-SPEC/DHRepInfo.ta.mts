/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "@wildboar/cms";
import { DHNonce, _decode_DHNonce, _encode_DHNonce } from "../KerberosV5-PK-INIT-SPEC/DHNonce.ta.mjs";
import { KDFAlgorithmId, _decode_KDFAlgorithmId, _encode_KDFAlgorithmId } from "../KerberosV5-PK-INIT-SPEC/KDFAlgorithmId.ta.mjs";


/**
 * @summary DHRepInfo
 * @description
 *
 * KDC Diffie-Hellman reply, the `dhInfo` alternative of
 * {@link PA_PK_AS_REP}. The AS reply key is derived as follows.
 *
 * For MODP, `DHSharedSecret` is ZZ from
 * [RFC 2631, section 2.1.1](https://www.rfc-editor.org/rfc/rfc2631#section-2.1.1),
 * padded with leading zeros to the octet length of the modulus
 * and written big-endian. Let `K` be the key-generation seed
 * length of the selected reply-key enctype. Then:
 *
 * ```
 * octetstring2key(x) = random-to-key(K-truncate(
 *     SHA1(0x00 | x) | SHA1(0x01 | x) | SHA1(0x02 | x) | ...))
 * ```
 *
 * `|` is concatenation. Each counter is one octet.
 * `K-truncate` keeps the first `K` bits. `random-to-key` is the
 * operation in that enctype's profile. When keys are reused,
 * `n_c` is {@link AuthPack.clientDHNonce} and `n_k` is
 * `serverDHNonce`; otherwise both are empty octet strings. The
 * reply key is `octetstring2key(DHSharedSecret | n_c | n_k)`.
 *
 * Required reply-key enctypes are `aes128-cts-hmac-sha1-96` and
 * `aes256-cts-hmac-sha1-96`. Either party can cache
 * `(client public, KDC public, DHSharedSecret)` and reuse the
 * secret when both public values repeat.
 *
 * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DHRepInfo ::= SEQUENCE {
 *     dhSignedData            [0] ContentInfo, --IMPLICIT OCTET STRING,
 *             -- Contains a CMS type ContentInfo encoded according
 *             -- to [RFC3852].
 *             -- The contentType field of the type ContentInfo is
 *             -- id-signedData (1.2.840.113549.1.7.2), and the
 *             -- content field is a SignedData.
 *             -- The eContentType field for the type SignedData is
 *             -- id-pkinit-DHKeyData (1.3.6.1.5.2.3.2), and the
 *             -- eContent field contains the DER encoding of the
 *             -- type KDCDHKeyInfo.
 *             -- KDCDHKeyInfo is defined below.
 *     serverDHNonce           [1] DHNonce OPTIONAL,
 *             -- Present if and only if dhKeyExpiration is
 *             -- present.
 *    kdf                     [2] KDFAlgorithmId OPTIONAL,
 *    -- The KDF picked by the KDC.
 *    -- (added by RFC-8636 "PKINIT Algorithm Agility")
 *    ...
 * }
 * ```
 * 
 * @class
 */
export
class DHRepInfo {
    constructor (
        /**
         * CMS `ContentInfo` with `contentType` `id-signedData`
         * (`1.2.840.113549.1.7.2`) and content `SignedData`.
         * `eContentType` is {@link id_pkinit_DHKeyData}. `eContent`
         * is the DER encoding of {@link KDCDHKeyInfo}. One
         * `signerInfo` signs that value. The signed attribute
         * `content-type` must be present and equal
         * `id-pkinit-DHKeyData`.
         *
         * `certificates` should be enough for the client to build a
         * path from the KDC certificate to a trust anchor it
         * accepts, using `trustedCertifiers` as a hint, and must
         * not contain root CA certificates. The field may be empty
         * when the key named by {@link PA_PK_AS_REQ.kdcPkId} signed
         * this value. The KDC must be able to include such a set
         * when configured to do so.
         *
         * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly dhSignedData: ContentInfo,
        /**
         * Present if and only if
         * {@link KDCDHKeyInfo.dhKeyExpiration} is present. When the
         * KDC reuses Diffie-Hellman keys this must be at least as
         * long as the key that encrypts the AS-REP, and it is
         * concatenated into the reply-key seed. See the type
         * description.
         *
         * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly serverDHNonce: OPTIONAL<DHNonce>,
        /**
         * Key-derivation function the KDC selected. RFC 4556 does
         * not define this field and its reply-key calculation does
         * not use it. The module says RFC 8636 added the field.
         * This module does not include that specification's rules.
         * @public
         * @readonly
         */
        readonly kdf: OPTIONAL<KDFAlgorithmId>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DHRepInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DHRepInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DHRepInfo`.
     * @returns {DHRepInfo}
     */
    public static _from_object (_o: { [_K in keyof (DHRepInfo)]: (DHRepInfo)[_K] }): DHRepInfo {
        return new DHRepInfo(_o.dhSignedData, _o.serverDHNonce, _o.kdf, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DHRepInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("dhSignedData", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("serverDHNonce", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("kdf", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DHRepInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DHRepInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DHRepInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DHRepInfo: $.ASN1Decoder<DHRepInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DHRepInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DHRepInfo (el: _Element): DHRepInfo {
    if (!_cached_decoder_for_DHRepInfo) { _cached_decoder_for_DHRepInfo = function (el: _Element): DHRepInfo {
    let dhSignedData!: ContentInfo;
    let serverDHNonce: OPTIONAL<DHNonce>;
    let kdf: OPTIONAL<KDFAlgorithmId>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dhSignedData": (_el: _Element): void => { dhSignedData = $._decode_explicit<ContentInfo>(() => _decode_ContentInfo)(_el); },
        "serverDHNonce": (_el: _Element): void => { serverDHNonce = $._decode_explicit<DHNonce>(() => _decode_DHNonce)(_el); },
        "kdf": (_el: _Element): void => { kdf = $._decode_explicit<KDFAlgorithmId>(() => _decode_KDFAlgorithmId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DHRepInfo,
        _extension_additions_list_spec_for_DHRepInfo,
        _root_component_type_list_2_spec_for_DHRepInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new DHRepInfo(
        dhSignedData,
        serverDHNonce,
        kdf,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_DHRepInfo(el);
}

let _cached_encoder_for_DHRepInfo: $.ASN1Encoder<DHRepInfo> | null = null;

/**
 * @summary Encodes a(n) DHRepInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DHRepInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DHRepInfo (value: DHRepInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DHRepInfo) { _cached_encoder_for_DHRepInfo = function (value: DHRepInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ContentInfo, $.BER)(value.dhSignedData, $.BER),
            /* IF_ABSENT  */ ((value.serverDHNonce === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_DHNonce, $.BER)(value.serverDHNonce, $.BER)),
            /* IF_ABSENT  */ ((value.kdf === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_KDFAlgorithmId, $.BER)(value.kdf, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DHRepInfo(value, elGetter);
}


/* eslint-enable */
