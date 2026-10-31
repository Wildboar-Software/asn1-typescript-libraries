/* eslint-disable */
// export { AttributeOptionList, _decode_AttributeOptionList, _encode_AttributeOptionList } from "../SelectedAttributeTypes/AttributeOptionList.ta.mjs";
// export { id_avc_ldapAttributeOption } from "../SelectedAttributeTypes/id-avc-ldapAttributeOption.va.mjs";
import { type CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";


/**
 * @summary ldapAttributeOptionContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ldapAttributeOptionContext CONTEXT ::= {
 *   WITH SYNTAX  AttributeOptionList
 *   ASSERTED AS  AttributeOptionList
 *   ABSENT-MATCH FALSE
 *   ID           id-avc-ldapAttributeOption }
 * ```
 * 
 * @constant
 * @type {CONTEXT}
 * @implements {CONTEXT}
 */
export
const ldapAttributeOptionContext: CONTEXT = undefined;

/* eslint-enable */
