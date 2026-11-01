/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_apple_location } from "../LdapSchema2ldifApple/id-oc-apple-location.va.mjs";
import { apple_dns_domain } from "../LdapSchema2ldifApple/apple-dns-domain.oa.mjs";
import { apple_dns_nameserver } from "../LdapSchema2ldifApple/apple-dns-nameserver.oa.mjs";


/**
 * @summary apple_location
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-location OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { apple-dns-domain
 *                               | apple-dns-nameserver }
 *   LDAP-NAME                 {"apple-location"}
 *   ID                        id-oc-apple-location }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_location: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ apple_dns_domain, apple_dns_nameserver, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "apple-location" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_apple_location /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

