/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { octetStringMatch } from "../SelectedAttributeTypes/octetStringMatch.oa.mjs";
import { octetString } from "../SelectedAttributeTypes/octetString.oa.mjs";
import { id_at_zimbraExternalAccountProvisioningKey } from "../LdapZimbra/id-at-zimbraExternalAccountProvisioningKey.va.mjs";


/**
 * @summary zimbraExternalAccountProvisioningKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraExternalAccountProvisioningKey ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..128))
 *   EQUALITY MATCHING RULE    octetStringMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               octetString.&id
 *   LDAP-NAME                 {"zimbraExternalAccountProvisioningKey"}
 *   LDAP-DESC                 "Auth token secret key used for encrypting data/auth token in share URL when created for external users."
 *   ID                        id-at-zimbraExternalAccountProvisioningKey }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
const _decode_zimbraExternalAccountProvisioningKey_Type = (el: _Element): OCTET_STRING => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 128) {
        throw new ASN1SizeError("zimbraExternalAccountProvisioningKey violates SIZE constraint");
    }
    return value;
};

export
const zimbraExternalAccountProvisioningKey: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_zimbraExternalAccountProvisioningKey_Type,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&equality-match": octetStringMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": octetString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraExternalAccountProvisioningKey" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Auth token secret key used for encrypting data/auth token in share URL when created for external users." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraExternalAccountProvisioningKey /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

