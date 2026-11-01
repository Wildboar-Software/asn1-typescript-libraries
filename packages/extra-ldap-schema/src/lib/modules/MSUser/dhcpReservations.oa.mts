/* eslint-disable */
import {
    type PrintableString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { printableString } from "../SelectedAttributeTypes/printableString.oa.mjs";
import { id_at_dhcpReservations } from "../MSUser/id-at-dhcpReservations.va.mjs";


/**
 * @summary dhcpReservations
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dhcpReservations ATTRIBUTE ::= {
 *   WITH SYNTAX               PrintableString
 *   LDAP-SYNTAX               printableString.&id
 *   LDAP-NAME                 {"dhcpReservations"}
 *   ID                        id-at-dhcpReservations }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<PrintableString>}
 * @implements {ATTRIBUTE<PrintableString>}
 */
export
const dhcpReservations: ATTRIBUTE<PrintableString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodePrintableString,
    },
    encoderFor: {
        "&Type": $._encodePrintableString,
    },
    "&ldapSyntax": printableString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dhcpReservations" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dhcpReservations /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

