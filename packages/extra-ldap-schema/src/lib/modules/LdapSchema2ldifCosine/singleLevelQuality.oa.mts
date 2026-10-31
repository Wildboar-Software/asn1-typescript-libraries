/* eslint-disable */
import {
    type OCTET_STRING,
    ObjectIdentifier as _OID,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_singleLevelQuality } from "../LdapSchema2ldifCosine/id-at-singleLevelQuality.va.mjs";

/**
 * @summary singleLevelQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * singleLevelQuality ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 13 }
 *   LDAP-NAME                 {"singleLevelQuality"}
 *   LDAP-DESC                 "RFC1274: Single Level Quality"
 *   ID                        id-at-singleLevelQuality }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const singleLevelQuality: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
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
        13,
    ]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["singleLevelQuality"],
    "&ldapDesc": "RFC1274: Single Level Quality" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_singleLevelQuality /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
