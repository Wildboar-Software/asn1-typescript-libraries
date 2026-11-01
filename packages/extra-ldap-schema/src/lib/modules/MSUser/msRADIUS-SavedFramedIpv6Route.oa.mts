/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_msRADIUS_SavedFramedIpv6Route } from "../MSUser/id-at-msRADIUS-SavedFramedIpv6Route.va.mjs";


/**
 * @summary msRADIUS_SavedFramedIpv6Route
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * msRADIUS-SavedFramedIpv6Route ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"msRADIUS-SavedFramedIpv6Route"}
 *   ID                        id-at-msRADIUS-SavedFramedIpv6Route }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const msRADIUS_SavedFramedIpv6Route: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "msRADIUS-SavedFramedIpv6Route" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_msRADIUS_SavedFramedIpv6Route /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

