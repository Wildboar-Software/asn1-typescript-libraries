/* eslint-disable */
import { pilotOrganization } from "../Cosine/pilotOrganization.oa.mjs";
// export { pilotOrganization } from "../Cosine/pilotOrganization.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
// export { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { id_nf_pilotOrganizationNameForm } from "../Cosine/id-nf-pilotOrganizationNameForm.va.mjs";
// export { id_nf_pilotOrganizationNameForm } from "../Cosine/id-nf-pilotOrganizationNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary pilotOrganizationNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotOrganizationNameForm NAME-FORM ::= {
 *     NAMES                pilotOrganization
 *     WITH ATTRIBUTES        {organizationName}
 *     LDAP-NAME            {"pilotOrganizationNameForm"}
 *     ID                    id-nf-pilotOrganizationNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const pilotOrganizationNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": pilotOrganization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotOrganizationNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_pilotOrganizationNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
