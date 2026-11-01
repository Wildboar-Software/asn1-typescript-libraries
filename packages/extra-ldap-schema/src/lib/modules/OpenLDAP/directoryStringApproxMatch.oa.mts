/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";

/**
 * @summary directoryStringApproxMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * directoryStringApproxMatch MATCHING-RULE ::= {
 *     SYNTAX                  UnboundedDirectoryString
 *     LDAP-SYNTAX             directoryString.&id
 *     LDAP-NAME               {"directoryStringApproxMatch"}
 *     ID                      { 1 3 6 1 4 1 4203 666 4 4 }
 * }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<UnboundedDirectoryString>}
 * @implements {MATCHING_RULE<UnboundedDirectoryString>}
 */
export
const directoryStringApproxMatch: MATCHING_RULE<UnboundedDirectoryString> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&AssertionType": _encode_UnboundedDirectoryString,
    },
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "directoryStringApproxMatch" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 3, 6, 1, 4, 1, 4203, 666, 4, 4,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
