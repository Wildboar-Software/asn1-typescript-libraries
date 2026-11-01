/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { type Uint32, _decode_Uint32, _encode_Uint32 } from "../NIS/Uint32.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary uidNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * uidNumber ATTRIBUTE ::= {
 *     WITH SYNTAX                 Uint32
 *     EQUALITY MATCHING RULE         integerMatch
 *     ORDERING MATCHING RULE      integerOrderingMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"uidNumber"}
 *     LDAP-DESC                    "An integer uniquely identifying a user in an administrative domain"
 *     ID { id-nis-at 0 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Uint32>}
 * @implements {ATTRIBUTE<Uint32>}
 */
export
const uidNumber: ATTRIBUTE<Uint32> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Uint32,
    },
    encoderFor: {
        "&Type": _encode_Uint32,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "uidNumber" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "An integer uniquely identifying a user in an administrative domain" /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([0,], id_nis_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

