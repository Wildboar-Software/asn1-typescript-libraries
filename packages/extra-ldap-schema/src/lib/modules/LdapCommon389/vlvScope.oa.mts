/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
// export { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_vlvScope } from "../LdapCommon389/id-at-vlvScope.va.mjs";
// export { id_at_vlvScope } from "../LdapCommon389/id-at-vlvScope.va.mjs";


/**
 * @summary vlvScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vlvScope ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"vlvScope"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-vlvScope }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const vlvScope: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "vlvScope" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_vlvScope /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
