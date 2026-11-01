/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { Uint8, _decode_Uint8, _encode_Uint8 } from "../NIS/Uint8.ta.mjs";
import { integerMatch } from "../SelectedAttributeTypes/integerMatch.oa.mjs";
import { integerOrderingMatch } from "../SelectedAttributeTypes/integerOrderingMatch.oa.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
import { id_nis_at } from "../NIS/id-nis-at.va.mjs";


/**
 * @summary ipProtocolNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipProtocolNumber ATTRIBUTE ::= {
 *     WITH SYNTAX                 Uint8
 *     EQUALITY MATCHING RULE         integerMatch
 *     ORDERING MATCHING RULE      integerOrderingMatch
 *     SINGLE VALUE                TRUE
 *     LDAP-SYNTAX                 integer.&id
 *     LDAP-NAME                     {"ipProtocolNumber"}
 *     ID { id-nis-at 17 }
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<Uint8>}
 * @implements {ATTRIBUTE<Uint8>}
 */
export
const ipProtocolNumber: ATTRIBUTE<Uint8> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Uint8,
    },
    encoderFor: {
        "&Type": _encode_Uint8,
    },
    "&equality-match": integerMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": integerOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipProtocolNumber" ] /* OBJECT_FIELD_SETTING */,
    "&id": _OID.fromParts([17,], id_nis_at) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

