/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_sunservice } from "../Ldapmigration71sunAm/id-oc-sunservice.va.mjs";
import { labeledURI } from "../OpenLDAPCoreSchema/labeledURI.oa.mjs";
import { sunserviceschema } from "../Ldapmigration71sunAm/sunserviceschema.oa.mjs";
import { sunkeyvalue } from "../Ldapmigration70sunSchema2/sunkeyvalue.oa.mjs";
import { sunxmlkeyvalue } from "../Ldapmigration70sunSchema2/sunxmlkeyvalue.oa.mjs";
import { sunpluginschema } from "../Ldapmigration71sunAm/sunpluginschema.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ labeledURI, sunserviceschema, sunkeyvalue, sunxmlkeyvalue, sunpluginschema, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunservice" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "object containing service information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunservice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

