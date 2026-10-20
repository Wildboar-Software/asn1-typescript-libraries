/* eslint-disable */
import { _decode_AttributeStatus, _encode_AttributeStatus, AttributeStatus } from "../PlatformCertificateProfileV2/AttributeStatus.ta.mjs";
import { tcg_tr_ID_status } from "../PlatformCertificateProfileV2/tcg-tr-ID-status.va.mjs";
import { type TRAIT } from "../PlatformCertificateProfileV2/TRAIT.oca.mjs";


/**
 * @summary statusTrait
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * statusTrait TRAIT ::= {
 *     SYNTAX          AttributeStatus
 *     IDENTIFIED BY   tcg-tr-ID-status
 * }
 * ```
 * 
 * @constant
 * @type {TRAIT<AttributeStatus>}
 * @implements {TRAIT<AttributeStatus>}
 */
export
const statusTrait: TRAIT<AttributeStatus> = {
    class: "TRAIT",
    decoderFor: {
        "&TraitValueType": _decode_AttributeStatus,
    },
    encoderFor: {
        "&TraitValueType": _encode_AttributeStatus,
    },
    "&id": tcg_tr_ID_status /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&TraitValueType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
