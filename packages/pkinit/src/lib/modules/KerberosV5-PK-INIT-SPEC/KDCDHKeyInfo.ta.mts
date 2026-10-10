/* eslint-disable */
import {
    ASN1OverflowError,
    BIT_STRING,
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { KerberosTime, _decode_KerberosTime, _encode_KerberosTime } from "@wildboar/kerberos5";


/**
 * @summary KDCDHKeyInfo
 * @description
 *
 * KDC Diffie-Hellman public key, signed as the content of
 * {@link DHRepInfo.dhSignedData}. The client checks this
 * signature per CMS, and validates the KDC certificate as in
 * [section 3.2.4](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.4).
 * See {@link id_pkinit_san} and {@link id_pkinit_KPKdc}.
 *
 * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KDCDHKeyInfo ::= SEQUENCE {
 *     subjectPublicKey        [0] BIT STRING,
 *             -- The KDC's DH public key.
 *             -- The DH public key value is encoded as a BIT
 *             -- STRING according to [RFC3279].
 *     nonce                   [1] INTEGER (0..4294967295),
 *             -- Contains the nonce in the pkAuthenticator field
 *             -- in the request if the DH keys are NOT reused,
 *             -- 0 otherwise.
 *     dhKeyExpiration         [2] KerberosTime OPTIONAL,
 *             -- Expiration time for KDC's key pair,
 *             -- present if and only if the DH keys are reused.
 *             -- If present, the KDC's DH public key MUST not be
 *             -- used past the point of this expiration time.
 *             -- If this field is omitted then the serverDHNonce
 *             -- field MUST also be omitted.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class KDCDHKeyInfo {
    constructor (
        /**
         * KDC Diffie-Hellman public value, a bit string encoded as
         * in [RFC 3279](https://www.rfc-editor.org/rfc/rfc3279).
         * Must not be used after `dhKeyExpiration` when that field
         * is present.
         *
         * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly subjectPublicKey: BIT_STRING,
        /**
         * {@link PKAuthenticator.nonce} from the request when
         * Diffie-Hellman keys are not reused, and 0 when they are.
         *
         * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly nonce: INTEGER,
        /**
         * Expiration of the KDC's Diffie-Hellman key pair. Present
         * if and only if those keys are reused. After this time
         * RFC 4556 treats the signature over the DH reply as
         * invalid, and {@link DHRepInfo.serverDHNonce} must be
         * present. If this field is omitted, `serverDHNonce` must
         * be omitted too. The KDC should not reuse keys unless the
         * request included {@link AuthPack.clientDHNonce}.
         *
         * [RFC 4556, section 3.2.3.1](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.1).
         * @public
         * @readonly
         */
        readonly dhKeyExpiration: OPTIONAL<KerberosTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        const nonceNumber = typeof this.nonce === "bigint" ? Number(this.nonce) : this.nonce;
        if (nonceNumber < 0 || nonceNumber > 4294967295) {
            throw new ASN1OverflowError("KDCDHKeyInfo.nonce violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a KDCDHKeyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `KDCDHKeyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KDCDHKeyInfo`.
     * @returns {KDCDHKeyInfo}
     */
    public static _from_object (_o: { [_K in keyof (KDCDHKeyInfo)]: (KDCDHKeyInfo)[_K] }): KDCDHKeyInfo {
        return new KDCDHKeyInfo(_o.subjectPublicKey, _o.nonce, _o.dhKeyExpiration, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("subjectPublicKey", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("nonce", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dhKeyExpiration", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KDCDHKeyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KDCDHKeyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KDCDHKeyInfo: $.ASN1Decoder<KDCDHKeyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KDCDHKeyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KDCDHKeyInfo (el: _Element): KDCDHKeyInfo {
    if (!_cached_decoder_for_KDCDHKeyInfo) { _cached_decoder_for_KDCDHKeyInfo = function (el: _Element): KDCDHKeyInfo {
    let subjectPublicKey!: BIT_STRING;
    let nonce!: INTEGER;
    let dhKeyExpiration: OPTIONAL<KerberosTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "subjectPublicKey": (_el: _Element): void => { subjectPublicKey = $._decode_explicit<BIT_STRING>(() => $._decodeBitString)(_el); },
        "nonce": (_el: _Element): void => { nonce = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dhKeyExpiration": (_el: _Element): void => { dhKeyExpiration = $._decode_explicit<KerberosTime>(() => _decode_KerberosTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KDCDHKeyInfo,
        _extension_additions_list_spec_for_KDCDHKeyInfo,
        _root_component_type_list_2_spec_for_KDCDHKeyInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new KDCDHKeyInfo(
        subjectPublicKey,
        nonce,
        dhKeyExpiration,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_KDCDHKeyInfo(el);
}

let _cached_encoder_for_KDCDHKeyInfo: $.ASN1Encoder<KDCDHKeyInfo> | null = null;

/**
 * @summary Encodes a(n) KDCDHKeyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KDCDHKeyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_KDCDHKeyInfo (value: KDCDHKeyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KDCDHKeyInfo) { _cached_encoder_for_KDCDHKeyInfo = function (value: KDCDHKeyInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeBitString, $.BER)(value.subjectPublicKey, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.nonce, $.BER),
            /* IF_ABSENT  */ ((value.dhKeyExpiration === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_KerberosTime, $.BER)(value.dhKeyExpiration, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_KDCDHKeyInfo(value, elGetter);
}


/* eslint-enable */
