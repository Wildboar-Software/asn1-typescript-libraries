/* eslint-disable */
import { type OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_jpegPhoto } from "../LdapSchema2ldifInetorgperson/id-at-jpegPhoto.va.mjs";
import { jpeg } from "../SelectedAttributeTypes/jpeg.oa.mjs";

/**
 * @summary jpegPhoto
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * jpegPhoto ATTRIBUTE ::= {
 *   WITH SYNTAX               OCTET STRING
 *   LDAP-SYNTAX               jpeg.&id
 *   LDAP-NAME                 {"jpegPhoto"}
 *   LDAP-DESC                 "RFC2798: a JPEG image"
 *   ID                        id-at-jpegPhoto }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<OCTET_STRING>}
 * @implements {ATTRIBUTE<OCTET_STRING>}
 */
export
const jpegPhoto: ATTRIBUTE<OCTET_STRING> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeOctetString,
    },
    encoderFor: {
        "&Type": $._encodeOctetString,
    },
    "&ldapSyntax": jpeg["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["jpegPhoto"],
    "&ldapDesc": "RFC2798: a JPEG image" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_jpegPhoto /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
