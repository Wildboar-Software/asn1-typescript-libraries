/* eslint-disable */
import { type IA5String } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_entryUUID } from "../LdapCloudos/id-at-entryUUID.va.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";

/**
 * @summary entryUUID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * entryUUID ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String(SIZE (1..40))
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"entryUUID"}
 *   LDAP-DESC                 "The UUID of the object in the CloudOs system."
 *   ID                        id-at-entryUUID }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const entryUUID: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["entryUUID"],
    "&ldapDesc": "The UUID of the object in the CloudOs system." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_entryUUID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
