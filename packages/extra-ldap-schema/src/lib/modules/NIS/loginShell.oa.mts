/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type AbsoluteFilePath, _decode_AbsoluteFilePath, _encode_AbsoluteFilePath } from "../NIS/AbsoluteFilePath.ta.mjs";
// export { AbsoluteFilePath, _decode_AbsoluteFilePath, _encode_AbsoluteFilePath } from "../NIS/AbsoluteFilePath.ta.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
// export { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";
// export { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary loginShell
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * loginShell ATTRIBUTE ::= {
 *     WITH SYNTAX                 AbsoluteFilePath
 *     EQUALITY MATCHING RULE         caseExactIA5Match
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 ia5String.&id
 *     LDAP-NAME                     {"loginShell"}
 *     LDAP-DESC                   "The path to the login shell"
 *     ID { id-nis-at 4 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AbsoluteFilePath>}
 * @implements {ATTRIBUTE<AbsoluteFilePath>}
 */
export
const loginShell: ATTRIBUTE<AbsoluteFilePath> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_AbsoluteFilePath,
    },
    encoderFor: {
        "&Type": _encode_AbsoluteFilePath,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "loginShell" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The path to the login shell" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([4,], id_nis_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
