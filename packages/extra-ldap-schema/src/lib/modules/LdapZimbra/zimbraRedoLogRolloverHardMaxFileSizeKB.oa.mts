/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraRedoLogRolloverHardMaxFileSizeKB } from "../LdapZimbra/id-at-zimbraRedoLogRolloverHardMaxFileSizeKB.va.mjs";


/**
 * @summary zimbraRedoLogRolloverHardMaxFileSizeKB
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraRedoLogRolloverHardMaxFileSizeKB ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraRedoLogRolloverHardMaxFileSizeKB"}
 *   LDAP-DESC                 "redo.log file rolls over when it goes over this size, even if it does not meet the minimum file age requirement"
 *   ID                        id-at-zimbraRedoLogRolloverHardMaxFileSizeKB }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraRedoLogRolloverHardMaxFileSizeKB: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraRedoLogRolloverHardMaxFileSizeKB" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "redo.log file rolls over when it goes over this size, even if it does not meet the minimum file age requirement" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraRedoLogRolloverHardMaxFileSizeKB /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

