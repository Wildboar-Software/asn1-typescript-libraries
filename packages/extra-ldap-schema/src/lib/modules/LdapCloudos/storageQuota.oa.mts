/* eslint-disable */
import {
    type NumericString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_storageQuota } from "../LdapCloudos/id-at-storageQuota.va.mjs";

/**
 * @summary storageQuota
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * storageQuota ATTRIBUTE ::= {
 *   WITH SYNTAX               NumericString(SIZE (1..50))
 *   LDAP-SYNTAX               numericString.&id
 *   LDAP-NAME                 {"storageQuota"}
 *   LDAP-DESC                 "Storage quota in bytes. Should be larger than mailQuota"
 *   ID                        id-at-storageQuota }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<NumericString>}
 * @implements {ATTRIBUTE<NumericString>}
 */
export
const storageQuota: ATTRIBUTE<NumericString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeNumericString,
    },
    encoderFor: {
        "&Type": $._encodeNumericString,
    },
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "storageQuota" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Storage quota in bytes. Should be larger than mailQuota" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_storageQuota /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
