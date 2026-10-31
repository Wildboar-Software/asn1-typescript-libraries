/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { objectClass } from "../InformationFramework/objectClass.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gluuApplicationConfiguration } from "../LdapOx/id-oc-gluuApplicationConfiguration.va.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { gluuConfDynamic } from "./gluuConfDynamic.oa.mjs";
import { gluuConfStatic } from "./gluuConfStatic.oa.mjs";
import { oxRevision } from "./oxRevision.oa.mjs";

/**
 * @summary gluuApplicationConfiguration
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gluuApplicationConfiguration OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { organizationalUnitName
 *                               | gluuConfDynamic
 *                               | gluuConfStatic
 *                               | oxRevision }
 *   LDAP-NAME                 {"gluuApplicationConfiguration"}
 *   ID                        id-oc-gluuApplicationConfiguration }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gluuApplicationConfiguration: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [objectClass] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [organizationalUnitName, gluuConfDynamic, gluuConfStatic, oxRevision] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gluuApplicationConfiguration"],
    "&id": id_oc_gluuApplicationConfiguration /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
