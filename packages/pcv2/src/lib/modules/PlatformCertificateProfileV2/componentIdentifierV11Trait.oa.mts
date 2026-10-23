/* eslint-disable */
import { ComponentIdentifierV11, _decode_ComponentIdentifierV11, _encode_ComponentIdentifierV11 } from "../PlatformCertificateProfileV2/ComponentIdentifierV11.ta.mjs";
import { tcg_tr_ID_componentIdentifierV11 } from "../PlatformCertificateProfileV2/tcg-tr-ID-componentIdentifierV11.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary componentIdentifierV11Trait
 * @description
 *
 * Trait syntax for a version 1.1 `ComponentIdentifier` sequence. Category
 * `tcg-tr-cat-componentIdentifierV11`. When a `ComponentIdentifier` contains
 * this trait, it contains no other trait. `componentClass`,
 * `componentManufacturer`, and `componentSerial` are populated.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * componentIdentifierV11Trait TRAIT ::= {
 *     SYNTAX          ComponentIdentifierV11
 *     IDENTIFIED BY   tcg-tr-ID-componentIdentifierV11
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<ComponentIdentifierV11>}
 * @implements {TRAIT<ComponentIdentifierV11>}
 */
export
const componentIdentifierV11Trait: TRAIT<ComponentIdentifierV11> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_ComponentIdentifierV11,
    },
    encoderFor: {
        "&TraitValueType": _encode_ComponentIdentifierV11,
    },
    "&id": tcg_tr_ID_componentIdentifierV11 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
