/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";
import { id_at_drugTestRequired } from "../OrganizationAndGroupSchema/id-at-drugTestRequired.va.mjs";

/**
 * @summary drugTestRequired
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * drugTestRequired ATTRIBUTE ::= {
 *     WITH SYNTAX                    DrugTestPanels
 *     EQUALITY MATCHING RULE        objectIdentifierMatch
 *     LDAP-SYNTAX                    oid.&id
 *     LDAP-NAME                    {"drugTestRequired"}
 *     LDAP-DESC                    "The object identifier of a passing drug test panel required for membership"
 *     ID                            id-at-drugTestRequired
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<DrugTestPanels>}
 * @implements {ATTRIBUTE<DrugTestPanels>}
 */
export
const drugTestRequired: ATTRIBUTE<DrugTestPanels> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DrugTestPanels,
    },
    encoderFor: {
        "&Type": _encode_DrugTestPanels,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "drugTestRequired" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The object identifier of a passing drug test panel required for membership" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_drugTestRequired /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
