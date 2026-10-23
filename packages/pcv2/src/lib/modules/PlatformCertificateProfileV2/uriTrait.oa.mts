/* eslint-disable */
import { URIReference, _decode_URIReference, _encode_URIReference } from "../EKCredentialProfileV2/URIReference.ta.mjs";
import { tcg_tr_ID_URI } from "../PlatformCertificateProfileV2/tcg-tr-ID-URI.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary uriTrait
 * @description
 *
 * Trait syntax for a `URIReference` to an external document about the trait's
 * subject. If either hash component is present, both are present. The profile
 * names this trait as a syntax for `platformConfigUri`, and permits it in
 * `tBBSecurityAssertions`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.17.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uriTrait TRAIT ::= {
 *     SYNTAX          URIReference
 *     IDENTIFIED BY   tcg-tr-ID-URI
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<URIReference>}
 * @implements {TRAIT<URIReference>}
 */
export
const uriTrait: TRAIT<URIReference> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_URIReference,
    },
    encoderFor: {
        "&TraitValueType": _encode_URIReference,
    },
    "&id": tcg_tr_ID_URI /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
