/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_nsYIMStatusGraphic } from "../LdapPresence/id-at-nsYIMStatusGraphic.va.mjs";


/**
 * @summary nsYIMStatusGraphic
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nsYIMStatusGraphic ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   NO USER MODIFICATION      TRUE
 *   USAGE                     directoryOperation
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 5 }
 *   LDAP-NAME                 {"nsYIMStatusGraphic"}
 *   LDAP-DESC                 "Netscape defined attribute type"
 *   ID                        id-at-nsYIMStatusGraphic }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const nsYIMStatusGraphic: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&no-user-modification": true /* OBJECT_FIELD_SETTING */,
    "&usage": directoryOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 5,]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "nsYIMStatusGraphic" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Netscape defined attribute type" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_nsYIMStatusGraphic /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

