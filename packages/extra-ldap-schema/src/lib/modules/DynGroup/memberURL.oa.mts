/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
// export { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
// export { caseExactMatch } from "../SelectedAttributeTypes/caseExactMatch.oa.mjs";
import { caseExactOrderingMatch } from "../SelectedAttributeTypes/caseExactOrderingMatch.oa.mjs";
// export { caseExactOrderingMatch } from "../SelectedAttributeTypes/caseExactOrderingMatch.oa.mjs";
import { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
// export { caseExactSubstringsMatch } from "../SelectedAttributeTypes/caseExactSubstringsMatch.oa.mjs";
import { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
// export { directoryString } from "../SelectedAttributeTypes/directoryString.oa.mjs";
import { id_nsdsat } from "../DynGroup/id-nsdsat.va.mjs";
// export { id_nsdsat } from "../DynGroup/id-nsdsat.va.mjs";


/**
 * @summary memberURL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * memberURL ATTRIBUTE ::= {
 *     SUBTYPE OF                  labeledURI
 *     EQUALITY MATCHING RULE         caseExactMatch
 *     ORDERING MATCHING RULE        caseExactOrderingMatch
 *     SUBSTRINGS MATCHING RULE     caseExactSubstringsMatch
 *     LDAP-SYNTAX                 directoryString.&id
 *     LDAP-NAME                   {"memberURL"}
 *     LDAP-DESC "Identifies an URL associated with each member of a group. Any type of labeled URL can be used."
 *     ID                          { id-nsdsat 198 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const memberURL: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": labeledURI /* OBJECT_FIELD_SETTING */,
    "&equality-match": caseExactMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": caseExactOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": caseExactSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": directoryString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "memberURL" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Identifies an URL associated with each member of a group. Any type of labeled URL can be used." /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([198,], id_nsdsat) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
