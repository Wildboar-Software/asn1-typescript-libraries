/* eslint-disable */
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import { id_mr_attDescriptorMatch } from "../AttributeCertificateDefinitions/id-mr-attDescriptorMatch.va.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
/**
 * @summary attDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attDescriptor MATCHING-RULE ::= {
 *   SYNTAX  AttributeDescriptorSyntax
 *   ID      id-mr-attDescriptorMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<AttributeDescriptorSyntax>}
 * @implements {MATCHING_RULE<AttributeDescriptorSyntax>}
 */
export const attDescriptor: MATCHING_RULE<AttributeDescriptorSyntax> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&AssertionType": _encode_AttributeDescriptorSyntax,
    },
    "&id": id_mr_attDescriptorMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
