/* eslint-disable */
import {
    INTEGER,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NegoData, _decode_NegoData, _encode_NegoData } from "../CredSSP/NegoData.ta.mjs";


/**
 * @summary TSRequest
 * @description
 *
 * Every CredSSP message after the TLS handshake. TLS is only a
 * pipe: the client is anonymous, no common CA is required, and
 * session resumption is not used. All of the following is sent
 * on that channel.
 *
 * The exchange then runs in order
 * ([section 3.1.5](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/385a7489-d46b-464c-b224-f7340e308a5c)):
 *
 * 1. SPNEGO (or the Kerberos or NTLM messages it selected) in
 *    `negoTokens`, repeated until a confidentiality key exists.
 *    `authInfo` is absent. `pubKeyAuth` is absent except on the
 *    client's last token, which must carry both.
 * 2. The server's `pubKeyAuth` reply, binding that key to the
 *    certificate used in the TLS handshake. `authInfo` and
 *    `negoTokens` are absent. If the server does not support the
 *    requested version, it should set `errorCode` to
 *    `STATUS_NOT_SUPPORTED`.
 * 3. The client's `authInfo`: delegated credentials encrypted
 *    under the SPNEGO key. `pubKeyAuth` and `negoTokens` are
 *    absent.
 *
 * If SPNEGO fails on the server and the client offered version 3
 * or greater, the server should return `errorCode` and the
 * client must then stop. Section 2.2.1 names versions 3, 4, and
 * 6 for that failure report; section 3.1.5 says version 3 or
 * greater.
 *
 * The client encrypts each `TSRequest` as one block, split only
 * when TLS itself hits its maximum message length. A Windows
 * server expects the decrypted input to start with a complete
 * tag and length, and expects the whole message in that
 * encryption. Otherwise it returns an error.
 *
 * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSRequest ::= SEQUENCE {
 *     version           [0] INTEGER,
 *     negoTokens     [1] NegoData OPTIONAL,
 *     authInfo       [2] OCTET STRING OPTIONAL,
 *     pubKeyAuth     [3] OCTET STRING OPTIONAL,
 *     errorCode      [4] INTEGER OPTIONAL,
 *     clientNonce    [5] OCTET STRING OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class TSRequest {
    /**
     * CredSSP version this sender supports. Valid values are
     * 2, 3, 4, 5, and 6. A higher value than the receiver
     * understands means the peer is compatible with the
     * version the receiver implements.
     *
     * Versions 2, 3, and 4 bind the TLS certificate by
     * encrypting its public key. Versions 5 and 6 hash that
     * key with `clientNonce`. Section 5.1 advises
     * implementors to support version 5 or higher only.
     *
     * Windows XP SP3 through Windows Server 2012 implement
     * only version 2. Version 5 is in Windows Server version
     * 1803 and later, and in KB4088776. Group Policy can set
     * the minimum version a Windows client accepts.
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685)
     * and
     * [section 5.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/57c0f867-a053-4c11-b47f-dff91c647405).
     * @public
     * @readonly
     */
    public readonly version: INTEGER;
    /**
     * SPNEGO tokens, or the Kerberos or NTLM messages SPNEGO
     * negotiated. Present on every authentication round-trip.
     * The client's last authentication message must include
     * this field and `pubKeyAuth` together. Omitted from the
     * server's public-key reply and from the credential
     * message. See {@link NegoData}.
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685).
     * @public
     * @readonly
     */
    public readonly negoTokens: OPTIONAL<NegoData>;
    /**
     * Delegated user credentials. The plaintext is a DER-encoded
     * {@link TSCredentials} containing exactly one of
     * {@link TSPasswordCreds}, {@link TSSmartCardCreds}, or
     * {@link TSRemoteGuardCreds}. Those octets are encrypted
     * under the SPNEGO confidentiality key. This field is the
     * GSS message signature followed by that ciphertext.
     *
     * Sent only in the client's final message, after the
     * public-key check succeeds. That message omits
     * `negoTokens` and `pubKeyAuth`. If the plaintext is
     * {@link TSRemoteGuardCreds}, the TLS channel stays up for
     * redirected authentication
     * ([MS-RDPEAR](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rdpear/a32e17ec-5869-4fad-bdae-d35f342fcb6f)).
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685)
     * and
     * [section 3.1.5](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/385a7489-d46b-464c-b224-f7340e308a5c).
     * @public
     * @readonly
     */
    public readonly authInfo: OPTIONAL<OCTET_STRING>;
    /**
     * Proof that the TLS server certificate belongs to the
     * authenticated server, encrypted under the SPNEGO key.
     * The client sends it with the last `negoTokens`. The
     * server answers with this field alone. It is absent from
     * the credential message.
     *
     * The public key is the ASN.1 `SubjectPublicKey` inside
     * `SubjectPublicKeyInfo` of the server certificate
     * ([RFC 3280, section 4.1](https://www.rfc-editor.org/rfc/rfc3280#section-4.1)).
     *
     * The client encrypts with `GSS_WrapEx` of the negotiated
     * mechanism.
     *
     * Versions 2, 3, and 4: the client encrypts the public key.
     * The field is the GSS message signature, then the
     * ciphertext. The server checks the key, adds one to its
     * first byte, and encrypts the result. The increment stops
     * a replay of the client's message. The server's value
     * need not be valid ASN.1.
     *
     * Versions 5 and 6: each side encrypts a SHA-256 hash of
     * three values concatenated. The process defines the
     * client hash as
     * `SHA256(ClientServerHashMagic, clientNonce, SubjectPublicKey)`.
     * The magic string is `CredSSP Client-To-Server Binding Hash`
     * and the hash includes its terminating null. The server
     * hash uses `CredSSP Server-To-Client Binding Hash`, also
     * with its null, and the nonce from the request. The
     * sentence above that definition lists the public key
     * first.
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685)
     * and
     * [section 3.1.5](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/385a7489-d46b-464c-b224-f7340e308a5c).
     * @public
     * @readonly
     */
    public readonly pubKeyAuth: OPTIONAL<OCTET_STRING>;
    /**
     * NTSTATUS
     * ([MS-ERREF](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-erref/87fba13e-bf06-450e-83b1-9241dc81e781)
     * section 2.3) reporting why SPNEGO failed, so the client
     * can show it. A 32-bit value encoded as an `INTEGER`.
     *
     * Section 2.2.1 says to send this when the negotiated
     * version is 3, 4, or 6. Section 3.1.5 says to send it
     * when the client offered version 3 or greater. On receipt
     * the client must fail with that status and stop. The
     * server should use `STATUS_NOT_SUPPORTED` here when it
     * rejects the requested version.
     *
     * Windows XP SP3 through Windows Server 2012 do not
     * implement this field.
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685).
     * @public
     * @readonly
     */
    public readonly errorCode: OPTIONAL<INTEGER>;
    /**
     * 32 cryptographically random bytes, mixed into the
     * version 5 and version 6 public-key binding hash. The
     * client sets it before computing `pubKeyAuth`. Unused in
     * versions 2, 3, and 4. Section 3.1.5 calls this the nonce
     * field.
     *
     * [MS-CSSP, section 2.2.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/6aac4dea-08ef-47a6-8747-22ea7f6d8685).
     * @public
     * @readonly
     */
    public readonly clientNonce: OPTIONAL<OCTET_STRING>;

    constructor (
        version: INTEGER,
        negoTokens: OPTIONAL<NegoData>,
        authInfo: OPTIONAL<OCTET_STRING>,
        pubKeyAuth: OPTIONAL<OCTET_STRING>,
        errorCode: OPTIONAL<INTEGER>,
        clientNonce: OPTIONAL<OCTET_STRING>
    ) {
        this.version = version;
        this.negoTokens = negoTokens;
        this.authInfo = authInfo;
        this.pubKeyAuth = pubKeyAuth;
        this.errorCode = errorCode;
        this.clientNonce = clientNonce;
    }

    /**
     * @summary Restructures an object into a TSRequest
     * @description
     * 
     * This takes an `object` and converts it to a `TSRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSRequest`.
     * @returns {TSRequest}
     */
    public static _from_object (_o: { [_K in keyof (TSRequest)]: (TSRequest)[_K] }): TSRequest {
        return new TSRequest(_o.version, _o.negoTokens, _o.authInfo, _o.pubKeyAuth, _o.errorCode, _o.clientNonce);
    }


}

/**
 * @summary The Leading Root Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("negoTokens", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("authInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("pubKeyAuth", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("errorCode", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("clientNonce", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSRequest: $.ASN1Decoder<TSRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSRequest (el: _Element): TSRequest {
    if (!_cached_decoder_for_TSRequest) { _cached_decoder_for_TSRequest = function (el: _Element): TSRequest {
    let version!: INTEGER;
    let negoTokens: OPTIONAL<NegoData>;
    let authInfo: OPTIONAL<OCTET_STRING>;
    let pubKeyAuth: OPTIONAL<OCTET_STRING>;
    let errorCode: OPTIONAL<INTEGER>;
    let clientNonce: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "version": (_el: _Element): void => { version = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "negoTokens": (_el: _Element): void => { negoTokens = $._decode_explicit<NegoData>(() => _decode_NegoData)(_el); },
        "authInfo": (_el: _Element): void => { authInfo = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "pubKeyAuth": (_el: _Element): void => { pubKeyAuth = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "errorCode": (_el: _Element): void => { errorCode = $._decode_explicit<INTEGER>(() => $._decodeInteger)(_el); },
        "clientNonce": (_el: _Element): void => { clientNonce = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TSRequest,
        _extension_additions_list_spec_for_TSRequest,
        _root_component_type_list_2_spec_for_TSRequest,
        undefined,
    );
    return new TSRequest(
        version,
        negoTokens,
        authInfo,
        pubKeyAuth,
        errorCode,
        clientNonce
    );
}; }
    return _cached_decoder_for_TSRequest(el);
}

let _cached_encoder_for_TSRequest: $.ASN1Encoder<TSRequest> | null = null;

/**
 * @summary Encodes a(n) TSRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSRequest, encoded as an ASN.1 Element.
 */
export
function _encode_TSRequest (value: TSRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSRequest) { _cached_encoder_for_TSRequest = function (value: TSRequest): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.version, $.BER),
            /* IF_ABSENT  */ ((value.negoTokens === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_NegoData, $.BER)(value.negoTokens, $.BER)),
            /* IF_ABSENT  */ ((value.authInfo === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => $._encodeOctetString, $.BER)(value.authInfo, $.BER)),
            /* IF_ABSENT  */ ((value.pubKeyAuth === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => $._encodeOctetString, $.BER)(value.pubKeyAuth, $.BER)),
            /* IF_ABSENT  */ ((value.errorCode === undefined) ? undefined : $._encode_explicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.errorCode, $.BER)),
            /* IF_ABSENT  */ ((value.clientNonce === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.clientNonce, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSRequest(value, elGetter);
}


/* eslint-enable */
