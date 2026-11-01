/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
// export { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_replPropertyMetaData } from "../MSUser/id-at-replPropertyMetaData.va.mjs";
// export { id_at_replPropertyMetaData } from "../MSUser/id-at-replPropertyMetaData.va.mjs";


/**
 * @summary replPropertyMetaData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * replPropertyMetaData ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"replPropertyMetaData"}
 *   ID                        id-at-replPropertyMetaData }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const replPropertyMetaData: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "replPropertyMetaData" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_replPropertyMetaData /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
