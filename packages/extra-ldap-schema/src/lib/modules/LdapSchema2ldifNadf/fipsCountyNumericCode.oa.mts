/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
// export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_fipsCountyNumericCode } from "../LdapSchema2ldifNadf/id-at-fipsCountyNumericCode.va.mjs";
// export { id_at_fipsCountyNumericCode } from "../LdapSchema2ldifNadf/id-at-fipsCountyNumericCode.va.mjs";


/**
 * @summary fipsCountyNumericCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fipsCountyNumericCode ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..5))
 *   EQUALITY MATCHING RULE    numericStringMatch
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"fipsCountyNumericCode"}
 *   ID                        id-at-fipsCountyNumericCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const fipsCountyNumericCode: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fipsCountyNumericCode" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_fipsCountyNumericCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
