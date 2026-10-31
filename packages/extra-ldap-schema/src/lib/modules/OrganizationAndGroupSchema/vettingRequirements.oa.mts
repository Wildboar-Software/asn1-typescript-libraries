/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import {
    type VettingRequirements,
    _decode_VettingRequirements,
    _encode_VettingRequirements,
} from "../OrganizationAndGroupSchema/VettingRequirements.vsa.mjs";
import { id_at_vettingRequirements } from "../OrganizationAndGroupSchema/id-at-vettingRequirements.va.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";

/**
 * @summary vettingRequirements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * vettingRequirements ATTRIBUTE ::= {
 *     WITH SYNTAX                    VettingRequirements
 *     EQUALITY MATCHING RULE        objectIdentifierMatch
 *     LDAP-SYNTAX                    oid.&id
 *     LDAP-NAME                    {"vettingRequirements"}
 *     LDAP-DESC                    "The object identifier of a category of vetting procedures required"
 *     ID                            id-at-vettingRequirements
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<VettingRequirements>}
 * @implements {ATTRIBUTE<VettingRequirements>}
 */
export
const vettingRequirements: ATTRIBUTE<VettingRequirements> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_VettingRequirements,
    },
    encoderFor: {
        "&Type": _encode_VettingRequirements,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["vettingRequirements"],
    "&ldapDesc": "The object identifier of a category of vetting procedures required" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_vettingRequirements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
