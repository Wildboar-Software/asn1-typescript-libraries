/* eslint-disable */
import {
    type OCTET_STRING,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_teletexTerminalIdentifier } from "../LdapSchema2ldifCore/id-at-teletexTerminalIdentifier.va.mjs";

/**
 * @summary teletexTerminalIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * teletexTerminalIdentifier ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 51 }
 *   LDAP-NAME                 {"teletexTerminalIdentifier"}
 *   LDAP-DESC                 "RFC2256: Teletex Terminal Identifier"
 *   ID                        id-at-teletexTerminalIdentifier }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const teletexTerminalIdentifier: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": _OID.fromParts([
        1,
        3,
        6,
        1,
        4,
        1,
        1466,
        115,
        121,
        1,
        51,
    ]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["teletexTerminalIdentifier"],
    "&ldapDesc": "RFC2256: Teletex Terminal Identifier" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_teletexTerminalIdentifier /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
