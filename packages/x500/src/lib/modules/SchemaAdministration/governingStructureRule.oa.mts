/* eslint-disable */
import { INTEGER } from "asn1-ts";
import * as $ from "@wildboar/asn1/functional";
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_soa_governingStructureRule } from "../SchemaAdministration/id-soa-governingStructureRule.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
/**
 * @summary governingStructureRule
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * governingStructureRule ATTRIBUTE ::= {
 *   WITH SYNTAX             INTEGER
 *   EQUALITY MATCHING RULE  integerMatch
 *   SINGLE VALUE            TRUE
 *   NO USER MODIFICATION    TRUE
 *   USAGE                   directoryOperation
 *   LDAP-SYNTAX             integer.&id
 *   LDAP-NAME               {"governingStructureRule"}
 *   ID                      id-soa-governingStructureRule }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export const governingStructureRule: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["governingStructureRule"],
    "&id": id_soa_governingStructureRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
