/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DHRepInfo, _decode_DHRepInfo, _encode_DHRepInfo } from "../KerberosV5-PK-INIT-SPEC/DHRepInfo.ta.mjs";
import { ContentInfo, _decode_ContentInfo, _encode_ContentInfo } from "@wildboar/cms";


/**
 * @summary PA_PK_AS_REP
 * @description
 *
 * DER-encoded padata-value for padata-type {@link pa_pk_as_rep}
 * (17) in the AS-REP. The alternative selects how the client
 * obtains the AS reply key, which encrypts `enc-part` of the
 * AS-REP.
 *
 * `dhInfo` is Diffie-Hellman, which every implementation must
 * support. `encKeyPack` is public-key encryption of the reply
 * key, which implementations should support. If the client
 * omitted {@link AuthPack.clientPublicValue} and the KDC cannot
 * do public-key delivery, the KDC returns
 * `KDC_ERR_PUBLIC_KEY_ENCRYPTION_NOT_SUPPORTED` (81) and no
 * e-data.
 *
 * The returned ticket's lifetime must not exceed the client's
 * public-private key pair. For this specification that lifetime
 * is the certificate validity period, unless configured
 * otherwise.
 *
 * `encKeyPack` is a CMS `ContentInfo` with `contentType`
 * `id-envelopedData` (`1.2.840.113549.1.7.3`). Its content is
 * `EnvelopedData`, whose content type is `id-signedData`. The
 * inner `SignedData`, once decrypted, has `eContentType`
 * {@link id_pkinit_rkeyData} and `eContent` equal to the DER
 * encoding of `ReplyKeyPack`. This module does not define
 * `ReplyKeyPack`. RFC 4556 gives it `replyKey`, the AS reply
 * key, and `asChecksum`, a checksum of the AS-REQ under that
 * key with key usage 6. For a "newer" enctype the checksum is
 * that enctype's required checksum. The client must verify
 * `asChecksum`. Key usage 6 is also the authenticator checksum
 * in a `PA-TGS-REQ`; RFC 4556 calls that overlap historical.
 *
 * `recipientInfos` contains exactly one
 * `KeyTransRecipientInfo`. Its `encryptedKey` is a temporary key
 * encrypted to the client's public key, and that temporary key
 * encrypts the `EnvelopedData` content. `unprotectedAttrs` and
 * `originatorInfo` may be present. The signed attribute
 * `content-type` must be `id-pkinit-rkeyData`. Certificate
 * rules match {@link DHRepInfo.dhSignedData}. On this path,
 * `rsaEncryption` (RSAES-PKCS1-v1_5) is required for key
 * transport and `des-ede3-cbc` is required for content
 * encryption. RSA keys of at least 2048 bits are recommended.
 * Using one RSA key pair for both encryption and signing is
 * permitted here and discouraged by RFC 4556.
 *
 * [RFC 4556, section 3.2.3](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3),
 * [section 3.2.3.2](https://www.rfc-editor.org/rfc/rfc4556#section-3.2.3.2),
 * and
 * [section 4](https://www.rfc-editor.org/rfc/rfc4556#section-4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PA-PK-AS-REP  ::=  CHOICE {
 *     dhInfo                  [0] DHRepInfo,
 *             -- Selected when Diffie-Hellman key exchange is
 *             -- used.
 *     encKeyPack              [1] ContentInfo, --IMPLICIT OCTET STRING,
 *             -- Selected when public key encryption is used.
 *             -- Contains a CMS type ContentInfo encoded
 *             -- according to [RFC3852].
 *             -- The contentType field of the type ContentInfo is
 *             -- id-envelopedData (1.2.840.113549.1.7.3).
 *             -- The content field is an EnvelopedData.
 *             -- The contentType field for the type EnvelopedData
 *             -- is id-signedData (1.2.840.113549.1.7.2).
 *             -- The eContentType field for the inner type
 *             -- SignedData (when unencrypted) is
 *             -- id-pkinit-rkeyData (1.3.6.1.5.2.3.3) and the
 *             -- eContent field contains the DER encoding of the
 *             -- type ReplyKeyPack.
 *             -- ReplyKeyPack is defined below.
 *     ...
 * }
 * ```
 */
export
type PA_PK_AS_REP =
    { dhInfo: DHRepInfo } /* CHOICE_ALT_ROOT */
    | { encKeyPack: ContentInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PA_PK_AS_REP: $.ASN1Decoder<PA_PK_AS_REP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PA_PK_AS_REP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PA_PK_AS_REP (el: _Element): PA_PK_AS_REP {
    if (!_cached_decoder_for_PA_PK_AS_REP) { _cached_decoder_for_PA_PK_AS_REP = $._decode_extensible_choice<PA_PK_AS_REP>({
    "CONTEXT 0": [ "dhInfo", $._decode_implicit<DHRepInfo>(() => _decode_DHRepInfo) ],
    "CONTEXT 1": [ "encKeyPack", $._decode_implicit<ContentInfo>(() => _decode_ContentInfo) ]
}); }
    return _cached_decoder_for_PA_PK_AS_REP(el);
}

let _cached_encoder_for_PA_PK_AS_REP: $.ASN1Encoder<PA_PK_AS_REP> | null = null;

/**
 * @summary Encodes a(n) PA_PK_AS_REP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_PK_AS_REP, encoded as an ASN.1 Element.
 */
export
function _encode_PA_PK_AS_REP (value: PA_PK_AS_REP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PA_PK_AS_REP) { _cached_encoder_for_PA_PK_AS_REP = $._encode_choice<PA_PK_AS_REP>({
    "dhInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_DHRepInfo, $.BER),
    "encKeyPack": $._encode_implicit(_TagClass.context, 1, () => _encode_ContentInfo, $.BER),
}, $.BER); }
    return _cached_encoder_for_PA_PK_AS_REP(value, elGetter);
}


/* eslint-enable */
