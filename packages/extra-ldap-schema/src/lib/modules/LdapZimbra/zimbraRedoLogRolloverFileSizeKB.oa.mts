/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraRedoLogRolloverFileSizeKB } from "../LdapZimbra/id-at-zimbraRedoLogRolloverFileSizeKB.va.mjs";


/**
 * @summary zimbraRedoLogRolloverFileSizeKB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraRedoLogRolloverFileSizeKB ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraRedoLogRolloverFileSizeKB"}
 *   LDAP-DESC                 "redo.log file becomes eligible for rollover over when it goes over this size"
 *   ID                        id-at-zimbraRedoLogRolloverFileSizeKB }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraRedoLogRolloverFileSizeKB: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraRedoLogRolloverFileSizeKB" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "redo.log file becomes eligible for rollover over when it goes over this size" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraRedoLogRolloverFileSizeKB /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

