/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { inum } from "../LdapOx/inum.oa.mjs";
import { id_oc_oxRadiusClient } from "../LdapRadius/id-oc-oxRadiusClient.va.mjs";
import { oxRadiusClientIpAddress } from "./oxRadiusClientIpAddress.oa.mjs";
import { oxRadiusClientName } from "./oxRadiusClientName.oa.mjs";
import { oxRadiusClientSecret } from "./oxRadiusClientSecret.oa.mjs";
import { oxRadiusClientSortPriority } from "./oxRadiusClientSortPriority.oa.mjs";

/**
 * @summary oxRadiusClient
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxRadiusClient OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { inum
 *                               | oxRadiusClientName
 *                               | oxRadiusClientIpAddress
 *                               | oxRadiusClientSecret
 *                               | oxRadiusClientSortPriority }
 *   LDAP-NAME                 {"oxRadiusClient"}
 *   ID                        id-oc-oxRadiusClient }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxRadiusClient: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [inum, oxRadiusClientName, oxRadiusClientIpAddress, oxRadiusClientSecret, oxRadiusClientSortPriority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["oxRadiusClient"],
    "&id": id_oc_oxRadiusClient /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
