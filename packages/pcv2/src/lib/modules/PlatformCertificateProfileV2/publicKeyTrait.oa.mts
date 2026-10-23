/* eslint-disable */
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { tcg_tr_ID_PublicKey } from "../PlatformCertificateProfileV2/tcg-tr-ID-PublicKey.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary publicKeyTrait
 * @description
 *
 * Trait syntax for a public key as RFC 5280 `SubjectPublicKeyInfo`. Category
 * `tcg-tr-cat-PublicKey`. Used when `cryptographicAnchors` references a key
 * rather than a certificate.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.21 and §3.3.15.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicKeyTrait TRAIT ::= {
 *     SYNTAX          SubjectPublicKeyInfo
 *     IDENTIFIED BY   tcg-tr-ID-PublicKey
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<SubjectPublicKeyInfo>}
 * @implements {TRAIT<SubjectPublicKeyInfo>}
 */
export
const publicKeyTrait: TRAIT<SubjectPublicKeyInfo> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_SubjectPublicKeyInfo,
    },
    encoderFor: {
        "&TraitValueType": _encode_SubjectPublicKeyInfo,
    },
    "&id": tcg_tr_ID_PublicKey /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
