/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PKAuthenticator, _decode_PKAuthenticator, _encode_PKAuthenticator } from "../KerberosV5-PK-INIT-SPEC/PKAuthenticator.ta.mjs";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "@wildboar/pki-stub";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "@wildboar/pki-stub";
import { DHNonce, _decode_DHNonce, _encode_DHNonce } from "../KerberosV5-PK-INIT-SPEC/DHNonce.ta.mjs";
import { KDFAlgorithmId, _decode_KDFAlgorithmId, _encode_KDFAlgorithmId } from "../KerberosV5-PK-INIT-SPEC/KDFAlgorithmId.ta.mjs";


/**
 * @summary AuthPack
 * @description
 *
 * Signed content of {@link PA_PK_AS_REQ.signedAuthPack}.
 * `pkAuthenticator` shows that the client recently held the
 * signing key. `clientPublicValue` is included only when the
 * client wants the Diffie-Hellman reply-key method.
 *
 * [RFC 4556, section 3.2.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthPack ::= SEQUENCE {
 *     pkAuthenticator         [0] PKAuthenticator,
 *     clientPublicValue       [1] SubjectPublicKeyInfo OPTIONAL,
 *             -- Type SubjectPublicKeyInfo is defined in
 *             -- [RFC3280].
 *             -- Specifies Diffie-Hellman domain parameters
 *             -- and the client's public key value [IEEE1363].
 *             -- The DH public key value is encoded as a BIT
 *             -- STRING according to [RFC3279].
 *             -- This field is present only if the client wishes
 *             -- to use the Diffie-Hellman key agreement method.
 *     supportedCMSTypes       [2] SEQUENCE OF AlgorithmIdentifier
 *                                 OPTIONAL,
 *             -- Type AlgorithmIdentifier is defined in
 *             -- [RFC3280].
 *             -- List of CMS algorithm [RFC3370] identifiers
 *             -- that identify key transport algorithms, or
 *             -- content encryption algorithms, or signature
 *             -- algorithms supported by the client in order of
 *             -- (decreasing) preference.
 *     clientDHNonce           [3] DHNonce OPTIONAL,
 *             -- Present only if the client indicates that it
 *             -- wishes to reuse DH keys or to allow the KDC to
 *             -- do so.
 *     -- supportedKDFs added by RFC-8636 "PKINIT Algorithm Agility"
 *     supportedKDFs           [4] SEQUENCE OF KDFAlgorithmId OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class AuthPack {
    constructor (
        /**
         * Binds this signature to a fresh client timestamp and to
         * the AS-REQ body. See {@link PKAuthenticator}.
         *
         * [RFC 4556, section 3.2.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.1).
         * @public
         * @readonly
         */
        readonly pkAuthenticator: PKAuthenticator,
        /**
         * Present only when the client wants Diffie-Hellman key
         * agreement. `algorithm` carries the domain parameters
         * (IEEE 1363). The public value is the `subjectPublicKey`
         * bit string, encoded as in
         * [RFC 3279](https://www.rfc-editor.org/rfc/rfc3279).
         *
         * Implementations must support Oakley 1024-bit MODP group 2
         * and 2048-bit MODP group 14, and should support 4096-bit
         * MODP group 16. For MODP, exponents should have at least
         * twice as many bits as the symmetric keys derived from
         * them. If the KDC rejects the parameters it returns
         * `KDC_ERR_DH_KEY_PARAMETERS_NOT_ACCEPTED` (65) with
         * {@link TD_DH_PARAMETERS}.
         *
         * [RFC 4556, section 3.2.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.1).
         * @public
         * @readonly
         */
        readonly clientPublicValue: OPTIONAL<SubjectPublicKeyInfo>,
        /**
         * CMS algorithm identifiers the client supports, most
         * preferred first. Entries name a key-transport algorithm,
         * a content-encryption algorithm, or a signature algorithm.
         * Order among those three classes does not matter. Preference
         * here overrides CMS type numbers 9 through 15 in the
         * AS-REQ `etype` field. Those numbers are not Kerberos
         * enctypes and must not appear in `EncryptedData`. Clients
         * that want the algorithms in that table should still send
         * the old numbers.
         *
         * On the public-key delivery path, the KDC should pick the
         * first listed algorithm it supports. If it supports none,
         * it returns `KDC_ERR_ETYPE_NOSUPP`. An empty sequence may
         * be omitted or included.
         *
         * [RFC 4556, section 3.1.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.1.4)
         * and
         * [section 3.2.3.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.2).
         * @public
         * @readonly
         */
        readonly supportedCMSTypes: OPTIONAL<AlgorithmIdentifier[]>,
        /**
         * Present when the client is willing to reuse
         * Diffie-Hellman keys, or to let the KDC do so. It must be
         * chosen at random and be as long as the longest symmetric
         * key type the client supports. The KDC should
         * not reuse its keys unless this field is present. It is
         * concatenated into the reply-key seed when keys are
         * reused; see {@link DHRepInfo}.
         *
         * [RFC 4556, section 3.2.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.1)
         * and
         * [section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly clientDHNonce: OPTIONAL<DHNonce>,
        /**
         * Key-derivation functions the client offers. RFC 4556 does
         * not define this field. The module attributes it to
         * RFC 8636 and does not include that specification's
         * selection rules.
         * @public
         * @readonly
         */
        readonly supportedKDFs: OPTIONAL<KDFAlgorithmId[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a AuthPack
     * @description
     * 
     * This takes an `object` and converts it to a `AuthPack`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthPack`.
     * @returns {AuthPack}
     */
    public static _from_object (_o: { [_K in keyof (AuthPack)]: (AuthPack)[_K] }): AuthPack {
        return new AuthPack(_o.pkAuthenticator, _o.clientPublicValue, _o.supportedCMSTypes, _o.clientDHNonce, _o.supportedKDFs, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of AuthPack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthPack: $.ComponentSpec[] = [
    new $.ComponentSpec("pkAuthenticator", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("clientPublicValue", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("supportedCMSTypes", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("clientDHNonce", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("supportedKDFs", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AuthPack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthPack: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthPack
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthPack: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthPack: $.ASN1Decoder<AuthPack> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthPack
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthPack (el: _Element): AuthPack {
    if (!_cached_decoder_for_AuthPack) { _cached_decoder_for_AuthPack = function (el: _Element): AuthPack {
    let pkAuthenticator!: PKAuthenticator;
    let clientPublicValue: OPTIONAL<SubjectPublicKeyInfo>;
    let supportedCMSTypes: OPTIONAL<AlgorithmIdentifier[]>;
    let clientDHNonce: OPTIONAL<DHNonce>;
    let supportedKDFs: OPTIONAL<KDFAlgorithmId[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "pkAuthenticator": (_el: _Element): void => { pkAuthenticator = $._decode_explicit<PKAuthenticator>(() => _decode_PKAuthenticator)(_el); },
        "clientPublicValue": (_el: _Element): void => { clientPublicValue = $._decode_explicit<SubjectPublicKeyInfo>(() => _decode_SubjectPublicKeyInfo)(_el); },
        "supportedCMSTypes": (_el: _Element): void => { supportedCMSTypes = $._decode_explicit<AlgorithmIdentifier[]>(() => $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier))(_el); },
        "clientDHNonce": (_el: _Element): void => { clientDHNonce = $._decode_explicit<DHNonce>(() => _decode_DHNonce)(_el); },
        "supportedKDFs": (_el: _Element): void => { supportedKDFs = $._decode_explicit<KDFAlgorithmId[]>(() => $._decodeSequenceOf<KDFAlgorithmId>(() => _decode_KDFAlgorithmId))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthPack,
        _extension_additions_list_spec_for_AuthPack,
        _root_component_type_list_2_spec_for_AuthPack,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuthPack(
        pkAuthenticator,
        clientPublicValue,
        supportedCMSTypes,
        clientDHNonce,
        supportedKDFs,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_AuthPack(el);
}

let _cached_encoder_for_AuthPack: $.ASN1Encoder<AuthPack> | null = null;

/**
 * @summary Encodes a(n) AuthPack into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthPack, encoded as an ASN.1 Element.
 */
export
function _encode_AuthPack (value: AuthPack, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthPack) { _cached_encoder_for_AuthPack = function (value: AuthPack): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_PKAuthenticator, $.BER)(value.pkAuthenticator, $.BER),
            /* IF_ABSENT  */ ((value.clientPublicValue === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_SubjectPublicKeyInfo, $.BER)(value.clientPublicValue, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCMSTypes === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER), $.BER)(value.supportedCMSTypes, $.BER)),
            /* IF_ABSENT  */ ((value.clientDHNonce === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_DHNonce, $.BER)(value.clientDHNonce, $.BER)),
            /* IF_ABSENT  */ ((value.supportedKDFs === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeSequenceOf<KDFAlgorithmId>(() => _encode_KDFAlgorithmId, $.BER), $.BER)(value.supportedKDFs, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthPack(value, elGetter);
}


/* eslint-enable */
