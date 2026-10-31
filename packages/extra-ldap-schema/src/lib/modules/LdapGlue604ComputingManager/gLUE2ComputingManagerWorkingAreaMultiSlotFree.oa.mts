/* eslint-disable */
import { type INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_gLUE2ComputingManagerWorkingAreaMultiSlotFree } from "../LdapGlue604ComputingManager/id-at-gLUE2ComputingManagerWorkingAreaMultiSlotFree.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";

/**
 * @summary gLUE2ComputingManagerWorkingAreaMultiSlotFree
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ComputingManagerWorkingAreaMultiSlotFree ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   ORDERING MATCHING RULE    integerOrderingMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"GLUE2ComputingManagerWorkingAreaMultiSlotFree"}
 *   LDAP-DESC                 "Free size of working area available to all the multi-slot Grid jobs either as a shared area across all the execution environments (WorkingAreaShared is true) or local to a certain execution environment (WorkingAreaShared is false); (even if individual quota per job is enforced, this is not advertised)"
 *   ID                        id-at-gLUE2ComputingManagerWorkingAreaMultiSlotFree }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const gLUE2ComputingManagerWorkingAreaMultiSlotFree: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ComputingManagerWorkingAreaMultiSlotFree"],
    "&ldapDesc": "Free size of working area available to all the multi-slot Grid jobs either as a shared area across all the execution environments (WorkingAreaShared is true) or local to a certain execution environment (WorkingAreaShared is false); (even if individual quota per job is enforced, this is not advertised)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_gLUE2ComputingManagerWorkingAreaMultiSlotFree /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
