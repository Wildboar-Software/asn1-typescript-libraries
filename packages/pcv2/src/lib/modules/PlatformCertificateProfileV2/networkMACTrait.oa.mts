/* eslint-disable */
import { ComponentAddress, _decode_ComponentAddress, _encode_ComponentAddress } from "../PlatformCertificateProfileV2/ComponentAddress.ta.mjs";
import { tcg_tr_ID_networkMAC } from "../PlatformCertificateProfileV2/tcg-tr-ID-networkMAC.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary networkMACTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkMACTrait TRAIT ::= {
 *     SYNTAX          ComponentAddress
 *     IDENTIFIED BY   tcg-tr-ID-networkMAC
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<ComponentAddress>}
 * @implements {TRAIT<ComponentAddress>}
 */
export
const networkMACTrait: TRAIT<ComponentAddress> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_ComponentAddress,
    },
    encoderFor: {
        "&TraitValueType": _encode_ComponentAddress,
    },
    "&id": tcg_tr_ID_networkMAC /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
