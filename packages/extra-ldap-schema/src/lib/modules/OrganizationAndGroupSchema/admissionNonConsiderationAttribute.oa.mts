/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { objectIdentifierMatch } from "../InformationFramework/objectIdentifierMatch.oa.mjs";
import { oid } from "../SelectedAttributeTypes/oid.oa.mjs";

import { type AttributeType, _decode_AttributeType, _encode_AttributeType } from "../InformationFramework/AttributeType.ta.mjs";
/**
 * @summary admissionNonConsiderationAttribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * admissionNonConsiderationAttribute ATTRIBUTE ::= {
 *     WITH SYNTAX                    AttributeType
 *     EQUALITY MATCHING RULE        objectIdentifierMatch
 *     LDAP-SYNTAX                    oid.&id
 *     LDAP-NAME                    {"admissionNonConsiderationAttribute"}
 *     LDAP-DESC                    "Attribute type OID of an attribute NOT considered when deciding admission"
 *     ID                            id-at-admissionNonConsiderationAttribute
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AttributeType>}
 * @implements {ATTRIBUTE<AttributeType>}
 */
export
const admissionNonConsiderationAttribute: ATTRIBUTE<AttributeType> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AttributeType,
    },
    encoderFor: {
        "&Type": _encode_AttributeType,
    },
    "&equality-match": objectIdentifierMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": oid["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "admissionNonConsiderationAttribute" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Attribute type OID of an attribute NOT considered when deciding admission" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_admissionNonConsiderationAttribute /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
