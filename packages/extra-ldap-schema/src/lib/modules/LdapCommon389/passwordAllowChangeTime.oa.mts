/* eslint-disable */
import {
    type GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
import { id_at_passwordAllowChangeTime } from "../LdapCommon389/id-at-passwordAllowChangeTime.va.mjs";


/**
 * @summary passwordAllowChangeTime
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * passwordAllowChangeTime ATTRIBUTE ::= {
 *   WITH SYNTAX               GeneralizedTime
 *   SINGLE VALUE              TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               generalizedTime.&id
 *   LDAP-NAME                 {"passwordAllowChangeTime"}
 *   LDAP-DESC                 "Netscape defined password policy attribute type"
 *   ID                        id-at-passwordAllowChangeTime }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export
const passwordAllowChangeTime: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "passwordAllowChangeTime" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined password policy attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_passwordAllowChangeTime /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

