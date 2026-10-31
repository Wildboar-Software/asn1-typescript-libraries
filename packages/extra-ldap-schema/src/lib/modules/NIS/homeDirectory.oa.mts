/* eslint-disable */
import { ObjectIdentifier as _OID } from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import {
    type AbsoluteFilePath,
    _decode_AbsoluteFilePath,
    _encode_AbsoluteFilePath,
} from "../NIS/AbsoluteFilePath.ta.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary homeDirectory
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * homeDirectory ATTRIBUTE ::= {
 *     WITH SYNTAX                 AbsoluteFilePath
 *     EQUALITY MATCHING RULE         caseExactIA5Match
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 ia5String.&id
 *     LDAP-NAME                     {"homeDirectory"}
 *     LDAP-DESC                   "The absolute path to the home directory"
 *     ID { id-nis-at 3 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<AbsoluteFilePath>}
 * @implements {ATTRIBUTE<AbsoluteFilePath>}
 */
export
const homeDirectory: ATTRIBUTE<AbsoluteFilePath> = {
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
    "&ldapName": ["homeDirectory"],
    "&ldapDesc": "The absolute path to the home directory" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([
        3,
    ], id_nis_at) /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
