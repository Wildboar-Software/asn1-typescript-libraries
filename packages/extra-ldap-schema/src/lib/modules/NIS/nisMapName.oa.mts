/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { name } from "../SelectedAttributeTypes/name.oa.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreOrderingMatch } from "../SelectedAttributeTypes/caseIgnoreOrderingMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary nisMapName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisMapName ATTRIBUTE ::= {
 *     SUBTYPE OF                  name
 *     EQUALITY MATCHING RULE      caseIgnoreMatch
 *     ORDERING MATCHING RULE      caseIgnoreOrderingMatch
 *     SUBSTRINGS MATCHING RULE    caseIgnoreSubstringsMatch
 *     LDAP-SYNTAX                 directoryString.&id
 *     LDAP-NAME                   {"nisMapName"}
 *     ID                          { id-nis-at 26 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const nisMapName: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": name /* OBJECT_FIELD_SETTING */,
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": caseIgnoreOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nisMapName" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([26,], id_nis_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

