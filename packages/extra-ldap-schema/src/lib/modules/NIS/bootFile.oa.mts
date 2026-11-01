/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary bootFile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bootFile ATTRIBUTE ::= {
 *     WITH SYNTAX                 IA5String (SIZE (1..MAX))
 *     EQUALITY MATCHING RULE         caseExactIA5Match
 *     LDAP-SYNTAX                 ia5String.&id
 *     LDAP-NAME                     {"bootFile"}
 *     LDAP-DESC                   "Boot image name"
 *     ID { id-nis-at 24 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_bootFile_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1) {
        throw new ASN1SizeError("bootFile violates SIZE constraint");
    }
    return value;
};

export
const bootFile: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_bootFile_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "bootFile" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Boot image name" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([24,], id_nis_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

