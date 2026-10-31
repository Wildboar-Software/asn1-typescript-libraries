/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_interSiteTransport } from "../LdapSchema2ldifMicrosoft/id-oc-interSiteTransport.va.mjs";
import { options } from "../MSUser/options.oa.mjs";
import { replInterval } from "../MSUser/replInterval.oa.mjs";
import { transportAddressAttribute } from "../MSUser/transportAddressAttribute.oa.mjs";
import { transportDLLName } from "../MSUser/transportDLLName.oa.mjs";

/**
 * @summary interSiteTransport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * interSiteTransport OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { transportDLLName
 *                               | transportAddressAttribute }
 *   MAY CONTAIN               { options
 *                               | replInterval }
 *   LDAP-NAME                 {"interSiteTransport"}
 *   ID                        id-oc-interSiteTransport }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const interSiteTransport: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [transportDLLName, transportAddressAttribute] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [options, replInterval] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["interSiteTransport"],
    "&id": id_oc_interSiteTransport /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
