/* eslint-disable */
import {
    AttributeDescriptorSyntax,
    _decode_AttributeDescriptorSyntax,
    _encode_AttributeDescriptorSyntax,
} from "../AttributeCertificateDefinitions/AttributeDescriptorSyntax.ta.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";
import { id_ce_attributeDescriptor } from "./id-ce-attributeDescriptor.va.mjs";

/**
 * @summary attributeDescriptor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * attributeDescriptor EXTENSION ::= {
 *   SYNTAX         AttributeDescriptorSyntax
 *   IDENTIFIED BY  id-ce-attributeDescriptor }
 * ```
 *
 * @constant
 * @type {EXTENSION<AttributeDescriptorSyntax>}
 * @implements {EXTENSION<AttributeDescriptorSyntax>}
 */
export const attributeDescriptor: EXTENSION<AttributeDescriptorSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributeDescriptorSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributeDescriptorSyntax,
    },
    "&id": id_ce_attributeDescriptor,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
