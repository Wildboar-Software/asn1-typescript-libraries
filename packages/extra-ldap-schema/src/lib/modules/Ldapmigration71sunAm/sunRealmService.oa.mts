/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunRealmService } from "../Ldapmigration71sunAm/id-oc-sunRealmService.va.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { sunkeyvalue } from "../Ldapmigration70sunSchema2/sunkeyvalue.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary sunRealmService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunRealmService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { organizationName
 *                               | labeledURI
 *                               | sunkeyvalue
 *                               | sunxmlkeyvalue
 *                               | description }
 *   LDAP-NAME                 {"sunRealmService"}
 *   LDAP-DESC                 "object containing service information for realms"
 *   ID                        id-oc-sunRealmService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunRealmService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ organizationName, labeledURI, sunkeyvalue, sunxmlkeyvalue, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunRealmService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "object containing service information for realms" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunRealmService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

