/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { fax } from "../SelectedAttributeTypes/fax.oa.mjs";
import { id_at_personalSignature } from "../LdapSchema2ldifCosine/id-at-personalSignature.va.mjs";

/**
 * @summary personalSignature
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personalSignature ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               fax.&id
 *   LDAP-NAME                 {"personalSignature"}
 *   LDAP-DESC                 "RFC1274: Personal Signature (G3 fax)"
 *   ID                        id-at-personalSignature }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const personalSignature: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": fax["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "personalSignature" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "RFC1274: Personal Signature (G3 fax)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_personalSignature /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
