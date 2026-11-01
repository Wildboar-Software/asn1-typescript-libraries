/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { UnboundedDirectoryString, _decode_UnboundedDirectoryString, _encode_UnboundedDirectoryString } from "../SelectedAttributeTypes/UnboundedDirectoryString.ta.mjs";
import { caseIgnoreMatch } from "../SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";
import { caseIgnoreSubstringsMatch } from "../SelectedAttributeTypes/caseIgnoreSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_at_zimbraReverseProxyAvailableLookupTargets } from "../LdapZimbra/id-at-zimbraReverseProxyAvailableLookupTargets.va.mjs";


/**
 * @summary zimbraReverseProxyAvailableLookupTargets
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraReverseProxyAvailableLookupTargets ATTRIBUTE ::= {
 *   WITH SYNTAX               UnboundedDirectoryString
 *   EQUALITY MATCHING RULE    caseIgnoreMatch
 *   SUBSTRINGS MATCHING RULE  caseIgnoreSubstringsMatch
 *   LDAP-SYNTAX               directoryString.&id
 *   LDAP-NAME                 {"zimbraReverseProxyAvailableLookupTargets"}
 *   LDAP-DESC                 "The servers to be included in the proxy lookup handlers list. Proxy will only use the servers specified here to do the lookup. Leaving empty means using all the servers whose zimbraReverseProxyLookupTarget is TRUE."
 *   ID                        id-at-zimbraReverseProxyAvailableLookupTargets }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UnboundedDirectoryString>}
 * @implements {ATTRIBUTE<UnboundedDirectoryString>}
 */
export
const zimbraReverseProxyAvailableLookupTargets: ATTRIBUTE<UnboundedDirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UnboundedDirectoryString,
    },
    encoderFor: {
        "&Type": _encode_UnboundedDirectoryString,
    },
    "&equality-match": caseIgnoreMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseIgnoreSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraReverseProxyAvailableLookupTargets" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The servers to be included in the proxy lookup handlers list. Proxy will only use the servers specified here to do the lookup. Leaving empty means using all the servers whose zimbraReverseProxyLookupTarget is TRUE." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraReverseProxyAvailableLookupTargets /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

