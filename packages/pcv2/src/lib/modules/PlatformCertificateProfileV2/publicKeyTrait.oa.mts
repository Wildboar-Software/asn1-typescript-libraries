/* eslint-disable */
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../AuthenticationFramework/SubjectPublicKeyInfo.ta.mjs";
import { tcg_tr_ID_PublicKey } from "../PlatformCertificateProfileV2/tcg-tr-ID-PublicKey.va.mjs";
// export { tcg_tr_ID_PublicKey } from "../PlatformCertificateProfileV2/tcg-tr-ID-PublicKey.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary publicKeyTrait
 * @description
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
