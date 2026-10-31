/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_organizationalUnitExt } from "../OrganizationAndGroupSchema/id-oc-organizationalUnitExt.va.mjs";
import { organizationalUnit } from "../SelectedObjectClasses/organizationalUnit.oa.mjs";
import { ExtOrganizationalAttributes } from "./ExtOrganizationalAttributes.osa.mjs";

/**
 * @summary organizationalUnitExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationalUnitExt OBJECT-CLASS ::= {
 *     SUBCLASS OF         {organizationalUnit}
 *     KIND                structural
 *     MAY CONTAIN         {ExtOrganizationalAttributes}
 *     LDAP-NAME           {"organizationalUnitExt"}
 *     LDAP-DESC           "An organizational unit"
 *     ID                  id-oc-organizationalUnitExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationalUnitExt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organizationalUnit] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [...ExtOrganizationalAttributes] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationalUnitExt"],
    "&ldapDesc": "An organizational unit" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_organizationalUnitExt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
