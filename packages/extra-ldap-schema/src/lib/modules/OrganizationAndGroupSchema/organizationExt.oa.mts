/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { id_oc_organizationExt } from "../OrganizationAndGroupSchema/id-oc-organizationExt.va.mjs";
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
import { ExtOrganizationalAttributes } from "./ExtOrganizationalAttributes.osa.mjs";

/**
 * @summary organizationExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationExt OBJECT-CLASS ::= {
 *     SUBCLASS OF            {organization}
 *     KIND                structural
 *     MAY CONTAIN            {ExtOrganizationalAttributes}
 *     LDAP-NAME            {"organizationExt"}
 *     LDAP-DESC            "An organization"
 *     ID                    id-oc-organizationExt
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const organizationExt: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [organization] /* OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [...ExtOrganizationalAttributes] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["organizationExt"],
    "&ldapDesc": "An organization" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_organizationExt /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
