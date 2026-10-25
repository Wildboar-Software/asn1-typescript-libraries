/* eslint-disable */
import { type DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
// export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "../InformationFramework/DistinguishedName.ta.mjs";
import { id_avc_assignment } from "../IN-object-identifiers/id-avc-assignment.va.mjs";
// export { id_avc_assignment } from "../IN-object-identifiers/id-avc-assignment.va.mjs";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


/**
 * @summary assignmentContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * assignmentContext CONTEXT ::= {
 *   WITH SYNTAX  DistinguishedName
 *   ID           id-avc-assignment
 * }
 * ```
 * 
 * @constant
 * @type {CONTEXT<DistinguishedName>}
 * @implements {CONTEXT<DistinguishedName>}
 */
export
const assignmentContext: CONTEXT<DistinguishedName> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_DistinguishedName,
        "&Assertion": undefined,
    },
    encoderFor: {
        "&Type": _encode_DistinguishedName,
        "&Assertion": undefined,
    },
    "&id": id_avc_assignment /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
