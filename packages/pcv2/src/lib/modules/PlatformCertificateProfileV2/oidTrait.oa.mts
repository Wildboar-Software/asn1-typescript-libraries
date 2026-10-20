/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_tr_ID_OID } from "../PlatformCertificateProfileV2/tcg-tr-ID-OID.va.mjs";
// export { tcg_tr_ID_OID } from "../PlatformCertificateProfileV2/tcg-tr-ID-OID.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary oidTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oidTrait TRAIT ::= {
 *     SYNTAX          OBJECT IDENTIFIER
 *     IDENTIFIED BY   tcg-tr-ID-OID
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<OBJECT_IDENTIFIER>}
 * @implements {TRAIT<OBJECT_IDENTIFIER>}
 */
export
const oidTrait: TRAIT<OBJECT_IDENTIFIER> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&TraitValueType": $._encodeObjectIdentifier,
    },
    "&id": tcg_tr_ID_OID /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
