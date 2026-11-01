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
import { id_at } from "../QMailSchema/id-at.va.mjs";


/**
 * @summary mailQuotaSize
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailQuotaSize ATTRIBUTE ::= {
 *     WITH SYNTAX                 INTEGER (0..MAX)
 *     EQUALITY MATCHING RULE         integerMatch
 *     ORDERING MATCHING RULE      integerOrderingMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"mailQuotaSize"}
 *     LDAP-DESC                   "The size of space the user can have until further messages get bounced."
 *     ID                          { id-at 15 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
const _decode_mailQuotaSize_Type = (el: _Element): INTEGER => {
    const value = $._decodeInteger(el);
    if ((typeof value === "bigint" ? value < 0n : value < 0)) {
        throw new ASN1OverflowError("mailQuotaSize violates INTEGER constraint");
    }
    return value;
};

export
const mailQuotaSize: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_mailQuotaSize_Type,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailQuotaSize" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "The size of space the user can have until further messages get bounced." /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([15,], id_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

