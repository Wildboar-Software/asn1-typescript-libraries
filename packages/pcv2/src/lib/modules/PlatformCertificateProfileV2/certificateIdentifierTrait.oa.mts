/* eslint-disable */
import { CertificateIdentifier, _decode_CertificateIdentifier, _encode_CertificateIdentifier } from "../PlatformCertificateProfileV2/CertificateIdentifier.ta.mjs";
// export { CertificateIdentifier, _decode_CertificateIdentifier, _encode_CertificateIdentifier } from "../PlatformCertificateProfileV2/CertificateIdentifier.ta.mjs";
import { tcg_tr_ID_certificateIdentifier } from "../PlatformCertificateProfileV2/tcg-tr-ID-certificateIdentifier.va.mjs";
// export { tcg_tr_ID_certificateIdentifier } from "../PlatformCertificateProfileV2/tcg-tr-ID-certificateIdentifier.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary certificateIdentifierTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * certificateIdentifierTrait TRAIT ::= {
 *     SYNTAX          CertificateIdentifier
 *     IDENTIFIED BY   tcg-tr-ID-certificateIdentifier
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<CertificateIdentifier>}
 * @implements {TRAIT<CertificateIdentifier>}
 */
export
const certificateIdentifierTrait: TRAIT<CertificateIdentifier> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_CertificateIdentifier,
    },
    encoderFor: {
        "&TraitValueType": _encode_CertificateIdentifier,
    },
    "&id": tcg_tr_ID_certificateIdentifier /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
