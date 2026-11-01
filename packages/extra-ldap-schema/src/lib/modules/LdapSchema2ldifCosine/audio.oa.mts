/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_audio } from "../LdapSchema2ldifCosine/id-at-audio.va.mjs";


/**
 * @summary audio
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * audio ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..25000))
 *   LDAP-SYNTAX               { 1 3 6 1 4 1 1466 115 121 1 4 }
 *   LDAP-NAME                 {"audio"}
 *   LDAP-DESC                 "RFC1274: audio (u-law)"
 *   ID                        id-at-audio }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
const _decode_audio_Type = (el: _Element): OCTET_STRING => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 25000) {
        throw new ASN1SizeError("audio violates SIZE constraint");
    }
    return value;
};

export
const audio: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_audio_Type,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": _OID.fromParts([1, 3, 6, 1, 4, 1, 1466, 115, 121, 1, 4,]) /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "audio" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: audio (u-law)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_audio /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

