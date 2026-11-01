/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_at_zimbraMailUncompressedCacheMaxFiles } from "../LdapZimbra/id-at-zimbraMailUncompressedCacheMaxFiles.va.mjs";

/**
 * @summary zimbraMailUncompressedCacheMaxFiles
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraMailUncompressedCacheMaxFiles ATTRIBUTE ::= {
 *   WITH SYNTAX               INTEGER
 *   EQUALITY MATCHING RULE    integerMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               integer.&id
 *   LDAP-NAME                 {"zimbraMailUncompressedCacheMaxFiles"}
 *   LDAP-DESC                 "Deprecated since: 6.0.7. Deprecated per bug 43497. The number of uncompressed files on disk will never exceed zimbraMailFileDescriptorCacheSize.. Orig desc: max number of files in the uncompressed blob cache on disk"
 *   ID                        id-at-zimbraMailUncompressedCacheMaxFiles }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export
const zimbraMailUncompressedCacheMaxFiles: ATTRIBUTE<INTEGER> = {
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
    "&ldapName": [ "zimbraMailUncompressedCacheMaxFiles" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Deprecated since: 6.0.7. Deprecated per bug 43497. The number of uncompressed files on disk will never exceed zimbraMailFileDescriptorCacheSize.. Orig desc: max number of files in the uncompressed blob cache on disk" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraMailUncompressedCacheMaxFiles /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
