/* eslint-disable */
import { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
// export { organizationalPerson } from "../SelectedObjectClasses/organizationalPerson.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
// export { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { id_euro_nf_orgPersNF } from "../ISSS-Schema/id-euro-nf-orgPersNF.va.mjs";
// export { id_euro_nf_orgPersNF } from "../ISSS-Schema/id-euro-nf-orgPersNF.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary euroOrgPersNF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroOrgPersNF NAME-FORM ::= {
 *     NAMES                   organizationalPerson
 *     WITH ATTRIBUTES         { commonName }
 *     AND OPTIONALLY          { serialNumber }
 *     LDAP-NAME               {"euroOrgPersNF"}
 *     ID                      id-euro-nf-orgPersNF }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const euroOrgPersNF: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": organizationalPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroOrgPersNF" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_nf_orgPersNF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
