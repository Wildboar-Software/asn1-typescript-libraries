/* eslint-disable */
import { ObjectIdentifier as _OID, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import { id_avc } from "../UsefulDefinitions/id-avc.va.mjs";
/**
 * @summary id_avc_attributeValueSecurityLabelContext
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-avc-attributeValueSecurityLabelContext OBJECT IDENTIFIER ::= {id-avc 3}
 * ```
 *
 * @constant
 */
export const id_avc_attributeValueSecurityLabelContext: OBJECT_IDENTIFIER = _OID.fromParts(
    [3],
    id_avc
);

/* eslint-enable */
