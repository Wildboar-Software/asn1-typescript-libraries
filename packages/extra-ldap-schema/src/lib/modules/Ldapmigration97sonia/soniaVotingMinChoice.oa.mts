/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_soniaVotingMinChoice } from "../Ldapmigration97sonia/id-at-soniaVotingMinChoice.va.mjs";


/**
 * @summary soniaVotingMinChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaVotingMinChoice ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"soniaVotingMinChoice"}
 *   LDAP-DESC                 "Minimum Stimmen"
 *   ID                        id-at-soniaVotingMinChoice }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const soniaVotingMinChoice: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaVotingMinChoice" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Minimum Stimmen" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_soniaVotingMinChoice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

