/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { sunkeyvalue } from "../Ldapmigration70sunSchema2/sunkeyvalue.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { id_oc_sunservice } from "../Ldapmigration71sunAm/id-oc-sunservice.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { sunpluginschema } from "./sunpluginschema.oa.mjs";
import { sunserviceschema } from "./sunserviceschema.oa.mjs";

/**
 * @summary sunservice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunservice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { labeledURI
 *                               | sunserviceschema
 *                               | sunkeyvalue
 *                               | sunxmlkeyvalue
 *                               | sunpluginschema
 *                               | description }
 *   LDAP-NAME                 {"sunservice"}
 *   LDAP-DESC                 "object containing service information"
 *   ID                        id-oc-sunservice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunservice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [organizationalUnitName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [labeledURI, sunserviceschema, sunkeyvalue, sunxmlkeyvalue, sunpluginschema, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunservice"],
    "&ldapDesc": "object containing service information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunservice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
