/* eslint-disable */
import { FALSE } from "asn1-ts";
import { CONTEXT } from "../InformationFramework/CONTEXT.oca.mjs";
import {
    AttributeOptionList,
    _decode_AttributeOptionList,
    _encode_AttributeOptionList,
} from "../SelectedAttributeTypes/AttributeOptionList.ta.mjs";
import { id_avc_ldapAttributeOption } from "../SelectedAttributeTypes/id-avc-ldapAttributeOption.va.mjs";
/* START_OF_SYMBOL_DEFINITION ldapAttributeOptionContext */
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
 * @type {CONTEXT<AttributeOptionList, AttributeOptionList>}
 * @implements {CONTEXT<AttributeOptionList, AttributeOptionList>}
 */
export const ldapAttributeOptionContext: CONTEXT<
    AttributeOptionList,
    AttributeOptionList
> = {
    class: "CONTEXT",
    decoderFor: {
        "&Type": _decode_AttributeOptionList,
        "&Assertion": _decode_AttributeOptionList,
    },
    encoderFor: {
        "&Type": _encode_AttributeOptionList,
        "&Assertion": _encode_AttributeOptionList,
    },
    "&absentMatch": FALSE /* OBJECT_FIELD_SETTING */,
    "&id": id_avc_ldapAttributeOption /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&Assertion": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ldapAttributeOptionContext */

/* eslint-enable */
