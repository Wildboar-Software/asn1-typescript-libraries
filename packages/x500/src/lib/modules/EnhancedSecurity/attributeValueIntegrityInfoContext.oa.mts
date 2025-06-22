/* eslint-disable */
import { TRUE } from "@wildboar/asn1";
import {
    AttributeValueIntegrityInfo,
    _decode_AttributeValueIntegrityInfo,
    _encode_AttributeValueIntegrityInfo,
} from "../EnhancedSecurity/AttributeValueIntegrityInfo.ta.mjs";
import { id_avc_attributeValueIntegrityInfoContext } from "../EnhancedSecurity/id-avc-attributeValueIntegrityInfoContext.va.mjs";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
/**
 * @summary attributeValueIntegrityInfoContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueIntegrityInfoContext CONTEXT ::= {
 *   WITH SYNTAX  AttributeValueIntegrityInfo
 *   ID           id-avc-attributeValueIntegrityInfoContext }
 * ```
 *
 * @constant
 * @type {CONTEXT<AttributeValueIntegrityInfo>}
 * @implements {CONTEXT<AttributeValueIntegrityInfo>}
 */
export const attributeValueIntegrityInfoContext: CONTEXT<AttributeValueIntegrityInfo> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_AttributeValueIntegrityInfo,
        "&Assertion": undefined,
    },
    "&id": id_avc_attributeValueIntegrityInfoContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
