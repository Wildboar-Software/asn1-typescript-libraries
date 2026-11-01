/* eslint-disable */
import {
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_locationCode } from "../LdapUser/id-at-locationCode.va.mjs";


/**
 * @summary locationCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * locationCode ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"locationCode"}
 *   LDAP-DESC                 "identifies the location within an organization"
 *   ID                        id-at-locationCode }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const locationCode: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "locationCode" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "identifies the location within an organization" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_locationCode /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

