/* eslint-disable */
import {
    type IA5String,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { caseExactIA5Match } from "../SelectedAttributeTypes/caseExactIA5Match.oa.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_tacacsFlag } from "../LdapTacacs/id-at-tacacsFlag.va.mjs";


/**
 * @summary tacacsFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tacacsFlag ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..40))
 *   EQUALITY MATCHING RULE    caseExactIA5Match
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"tacacsFlag"}
 *   LDAP-DESC                 "Arbitrary text, may be used by LDAP filters"
 *   ID                        id-at-tacacsFlag }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
const _decode_tacacsFlag_Type = (el: _Element): IA5String => {
    const value = $._decodeIA5String(el);
    if (value.length < 1 || value.length > 40) {
        throw new ASN1SizeError("tacacsFlag violates SIZE constraint");
    }
    return value;
};

export
const tacacsFlag: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_tacacsFlag_Type,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&equality-match": caseExactIA5Match /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "tacacsFlag" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Arbitrary text, may be used by LDAP filters" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_tacacsFlag /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

