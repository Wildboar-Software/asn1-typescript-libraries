/* eslint-disable */
import { organization } from "../SelectedObjectClasses/organization.oa.mjs";
// export { organization } from "../SelectedObjectClasses/organization.oa.mjs";
import { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
// export { organizationName } from "../SelectedAttributeTypes/organizationName.oa.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
// export { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { id_euro_nf_orgNF } from "../ISSS-Schema/id-euro-nf-orgNF.va.mjs";
// export { id_euro_nf_orgNF } from "../ISSS-Schema/id-euro-nf-orgNF.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary euroOrgNF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroOrgNF NAME-FORM ::= {
 *     NAMES                   organization
 *     WITH ATTRIBUTES         { organizationName }
 *     AND OPTIONALLY          { serialNumber }
 *     LDAP-NAME               {"euroOrgNF"}
 *     ID                      id-euro-nf-orgNF }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const euroOrgNF: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": organization /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroOrgNF" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_nf_orgNF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
