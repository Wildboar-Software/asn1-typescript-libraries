/* eslint-disable */
import { TRUE } from "@wildboar/asn1";
import { id_avc_attributeValueSecurityLabelContext } from "../EnhancedSecurity/id-avc-attributeValueSecurityLabelContext.va.mjs";
import {
    SignedSecurityLabel,
    _decode_SignedSecurityLabel,
    _encode_SignedSecurityLabel,
} from "../EnhancedSecurity/SignedSecurityLabel.ta.mjs";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
/**
 * @summary attributeValueSecurityLabelContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeValueSecurityLabelContext CONTEXT ::= {
 *   WITH SYNTAX    SignedSecurityLabel -- At most one security label context can
 *                                      -- be assigned to an attribute value
 *   ID             id-avc-attributeValueSecurityLabelContext }
 * ```
 *
 * @constant
 * @type {CONTEXT<SignedSecurityLabel>}
 * @implements {CONTEXT<SignedSecurityLabel>}
 */
export const attributeValueSecurityLabelContext: CONTEXT<SignedSecurityLabel> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_SignedSecurityLabel,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_SignedSecurityLabel,
        "&Assertion": undefined,
    },
    "&id": id_avc_attributeValueSecurityLabelContext /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&absentMatch": TRUE /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
