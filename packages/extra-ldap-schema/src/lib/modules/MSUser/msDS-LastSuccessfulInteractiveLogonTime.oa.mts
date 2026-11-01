/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_msDS_LastSuccessfulInteractiveLogonTime } from "../MSUser/id-at-msDS-LastSuccessfulInteractiveLogonTime.va.mjs";


/**
 * @summary msDS_LastSuccessfulInteractiveLogonTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msDS-LastSuccessfulInteractiveLogonTime ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"msDS-LastSuccessfulInteractiveLogonTime"}
 *   ID                        id-at-msDS-LastSuccessfulInteractiveLogonTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const msDS_LastSuccessfulInteractiveLogonTime: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msDS-LastSuccessfulInteractiveLogonTime" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_msDS_LastSuccessfulInteractiveLogonTime /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

