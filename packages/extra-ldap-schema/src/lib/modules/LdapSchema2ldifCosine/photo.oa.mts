/* eslint-disable */
import { type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_photo } from "../LdapSchema2ldifCosine/id-at-photo.va.mjs";
import { fax } from "../SelectedAttributeTypes/fax.oa.mjs";

/**
 * @summary photo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * photo ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING (SIZE (1..25000))
 *   LDAP-SYNTAX               fax.&id
 *   LDAP-NAME                 {"photo"}
 *   LDAP-DESC                 "RFC1274: photo (G3 fax)"
 *   ID                        id-at-photo }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const photo: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": fax["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["photo"],
    "&ldapDesc": "RFC1274: photo (G3 fax)" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_photo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
