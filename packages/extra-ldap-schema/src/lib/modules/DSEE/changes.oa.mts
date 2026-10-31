/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { nsdsat } from "../DSEE/nsdsat.va.mjs";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    type UnboundedDirectoryString,
    _decode_UnboundedDirectoryString,
    _encode_UnboundedDirectoryString,
} from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetStringOrderingMatch } from "../SelectedAttributeTypes/octetStringOrderingMatch.oa.mjs";
import { octetStringSubstringsMatch } from "../SelectedAttributeTypes/octetStringSubstringsMatch.oa.mjs";

/**
 * @summary changes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * changes ATTRIBUTE ::= {
 *     WITH SYNTAX                 UnboundedDirectoryString
 *     EQUALITY MATCHING RULE         octetStringMatch
 *     ORDERING MATCHING RULE        octetStringOrderingMatch
 *     SUBSTRINGS MATCHING RULE     octetStringSubstringsMatch
 *     LDAP-SYNTAX                 octetString.&id
 *     LDAP-NAME                     {"changes"}
 *     ID { nsdsat 8 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const changes: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": octetStringOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": octetStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["changes"],
    "&id": _OID.fromParts([
        8,
    ], nsdsat) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
