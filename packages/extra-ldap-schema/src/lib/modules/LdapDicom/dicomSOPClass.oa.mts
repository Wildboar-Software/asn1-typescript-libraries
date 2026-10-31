/* eslint-disable */
import { type OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { id_at_dicomSOPClass } from "../LdapDicom/id-at-dicomSOPClass.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";

/**
 * @summary dicomSOPClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomSOPClass ATTRIBUTE ::= {
 *   WITH SYNTAX               OBJECT IDENTIFIER
 *   EQUALITY MATCHING RULE    objectIdentifierMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               oid.&id
 *   LDAP-NAME                 {"dicomSOPClass"}
 *   LDAP-DESC                 "A SOP Class UID"
 *   ID                        id-at-dicomSOPClass }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OBJECT_IDENTIFIER>}
 * @implements {ATTRIBUTE<OBJECT_IDENTIFIER>}
 */
export
const dicomSOPClass: ATTRIBUTE<OBJECT_IDENTIFIER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeObjectIdentifier,
    },
    encoderFor: {
        "&Type": $._encodeObjectIdentifier,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomSOPClass"],
    "&ldapDesc": "A SOP Class UID" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_dicomSOPClass /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
