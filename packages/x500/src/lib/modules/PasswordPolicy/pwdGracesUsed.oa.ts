/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_oa_pwdGracesUsed } from "../PasswordPolicy/id-oa-pwdGracesUsed.va.js";
import { integer } from "../SelectedAttributeTypes/integer.oa.js";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.js";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_oa_pwdGracesUsed } from "../PasswordPolicy/id-oa-pwdGracesUsed.va.js";
export { integer } from "../SelectedAttributeTypes/integer.oa.js";
export { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.js";
export { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.js";

/* START_OF_SYMBOL_DEFINITION pwdGracesUsed */
/**
 * @summary pwdGracesUsed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * pwdGracesUsed ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER (0..MAX)
 *   EQUALITY MATCHING RULE   integerMatch
 *   ORDERING MATCHING RULE   integerOrderingMatch
 *   SINGLE VALUE             TRUE
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"pwdGracesUsed"}
 *   ID                       id-oa-pwdGracesUsed }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export const pwdGracesUsed: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["pwdGracesUsed"],
    "&id": id_oa_pwdGracesUsed /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION pwdGracesUsed */

/* eslint-enable */
