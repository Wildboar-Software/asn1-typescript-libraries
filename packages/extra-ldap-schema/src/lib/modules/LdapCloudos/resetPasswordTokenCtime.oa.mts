/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_resetPasswordTokenCtime } from "../LdapCloudos/id-at-resetPasswordTokenCtime.va.mjs";
// export { id_at_resetPasswordTokenCtime } from "../LdapCloudos/id-at-resetPasswordTokenCtime.va.mjs";


/**
 * @summary resetPasswordTokenCtime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * resetPasswordTokenCtime ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..256))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"resetPasswordTokenCtime"}
 *   LDAP-DESC                 "When was the reset token set"
 *   ID                        id-at-resetPasswordTokenCtime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const resetPasswordTokenCtime: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "resetPasswordTokenCtime" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "When was the reset token set" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_resetPasswordTokenCtime /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
