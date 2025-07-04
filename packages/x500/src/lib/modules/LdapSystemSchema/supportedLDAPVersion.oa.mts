/* eslint-disable */
import { INTEGER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_lat_supportedLDAPVersion } from "../LdapSystemSchema/id-lat-supportedLDAPVersion.va.mjs";
import { integer } from "../SelectedAttributeTypes/integer.oa.mjs";
/**
 * @summary supportedLDAPVersion
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * supportedLDAPVersion ATTRIBUTE ::= {
 *   WITH SYNTAX              INTEGER
 *   USAGE                    dSAOperation
 *   LDAP-SYNTAX              integer.&id
 *   LDAP-NAME                {"supportedLDAPVersion"}
 *   ID                       id-lat-supportedLDAPVersion }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<INTEGER>}
 * @implements {ATTRIBUTE<INTEGER>}
 */
export const supportedLDAPVersion: ATTRIBUTE<INTEGER> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeInteger,
    },
    encoderFor: {
        "&Type": $._encodeInteger,
    },
    "&usage": dSAOperation /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": integer["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["supportedLDAPVersion"],
    "&id": id_lat_supportedLDAPVersion /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
