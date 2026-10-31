/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_apple_service } from "../LdapSchema2ldifApple/id-oc-apple-service.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { apple_dnsname } from "./apple-dnsname.oa.mjs";
import { apple_keyword } from "./apple-keyword.oa.mjs";
import { apple_service_location } from "./apple-service-location.oa.mjs";
import { apple_service_port } from "./apple-service-port.oa.mjs";
import { apple_service_type } from "./apple-service-type.oa.mjs";
import { apple_service_url } from "./apple-service-url.oa.mjs";

/**
 * @summary apple_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * apple-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | apple-service-type }
 *   MAY CONTAIN               { ipHostNumber
 *                               | description
 *                               | apple-service-location
 *                               | apple-service-url
 *                               | apple-service-port
 *                               | apple-dnsname
 *                               | apple-keyword }
 *   LDAP-NAME                 {"apple-service"}
 *   ID                        id-oc-apple-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const apple_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, apple_service_type] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipHostNumber, description, apple_service_location, apple_service_url, apple_service_port, apple_dnsname, apple_keyword] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["apple-service"],
    "&id": id_oc_apple_service /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
