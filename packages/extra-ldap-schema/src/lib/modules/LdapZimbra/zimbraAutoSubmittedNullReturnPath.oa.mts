/* eslint-disable */
import { type BOOLEAN } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_zimbraAutoSubmittedNullReturnPath } from "../LdapZimbra/id-at-zimbraAutoSubmittedNullReturnPath.va.mjs";
import { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
import { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";

/**
 * @summary zimbraAutoSubmittedNullReturnPath
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoSubmittedNullReturnPath ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraAutoSubmittedNullReturnPath"}
 *   LDAP-DESC                 "Use null return path for envelope MAIL FROM when sending out of office and new mail notifications. If false, use account address for envelope"
 *   ID                        id-at-zimbraAutoSubmittedNullReturnPath }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BOOLEAN>}
 * @implements {ATTRIBUTE<BOOLEAN>}
 */
export
const zimbraAutoSubmittedNullReturnPath: ATTRIBUTE<BOOLEAN> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeBoolean,
    },
    encoderFor: {
        "&Type": $._encodeBoolean,
    },
    "&equality-match": booleanMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": boolean_["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAutoSubmittedNullReturnPath"],
    "&ldapDesc": "Use null return path for envelope MAIL FROM when sending out of office and new mail notifications. If false, use account address for envelope" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoSubmittedNullReturnPath /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
