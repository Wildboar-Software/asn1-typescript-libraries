/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_mgrpAddHeader } from "../Ldapmigration50nsMail/id-at-mgrpAddHeader.va.mjs";

/**
 * @summary mgrpAddHeader
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mgrpAddHeader ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"mgrpAddHeader"}
 *   LDAP-DESC                 "Netscape Messaging Server 4.x defined attribute"
 *   ID                        id-at-mgrpAddHeader }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const mgrpAddHeader: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mgrpAddHeader" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape Messaging Server 4.x defined attribute" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mgrpAddHeader /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
