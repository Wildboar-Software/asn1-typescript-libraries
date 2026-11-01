/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { id_at_nsds5replicaUpdateInProgress } from "../LdapCore389/id-at-nsds5replicaUpdateInProgress.va.mjs";


/**
 * @summary nsds5replicaUpdateInProgress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsds5replicaUpdateInProgress ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"nsds5replicaUpdateInProgress"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-nsds5replicaUpdateInProgress }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const nsds5replicaUpdateInProgress: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsds5replicaUpdateInProgress" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsds5replicaUpdateInProgress /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

