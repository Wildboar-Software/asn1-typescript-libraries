/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type INTEGER,
    type ASN1Element as _Element,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { duaConfSchemaOID } from "../DUAConf/duaConfSchemaOID.va.mjs";


/**
 * @summary profileTTL
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * profileTTL ATTRIBUTE ::= {
 *     WITH SYNTAX                 INTEGER (0..MAX)
 *     EQUALITY MATCHING RULE         integerMatch
 *     ORDERING MATCHING RULE        integerOrderingMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"profileTTL"}
 *     LDAP-DESC "Time to live, in seconds, before a client DUA should re-read this configuration profile"
 *     ID { duaConfSchemaOID 1 7 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
const _decode_profileTTL_Type = (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value < 0n : value < 0)) {
        throw new ASN1OverflowError("profileTTL violates INTEGER constraint");
    }
    return value;
};

export
const profileTTL: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_profileTTL_Type,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "profileTTL" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Time to live, in seconds, before a client DUA should re-read this configuration profile" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([1, 7,], duaConfSchemaOID) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

