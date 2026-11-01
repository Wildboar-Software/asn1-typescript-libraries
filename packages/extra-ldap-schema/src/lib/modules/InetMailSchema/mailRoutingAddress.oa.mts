/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_mailRoutingAddress } from "../InetMailSchema/id-at-mailRoutingAddress.va.mjs";
import { mail } from "../Cosine/mail.oa.mjs";


/**
 * @summary mailRoutingAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mailRoutingAddress ATTRIBUTE ::= {
 *     SUBTYPE OF                  mail
 *     LDAP-NAME                     {"mailRoutingAddress"}
 *     ID                          id-at-mailRoutingAddress
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const mailRoutingAddress: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": mail /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "mailRoutingAddress" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_mailRoutingAddress /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

