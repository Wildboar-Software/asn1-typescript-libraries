/* eslint-disable */
import { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.mjs";
// export { residentialPerson } from "../SelectedObjectClasses/residentialPerson.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
// export { serialNumber } from "../SelectedAttributeTypes/serialNumber.oa.mjs";
import { id_euro_nf_resPersNF } from "../ISSS-Schema/id-euro-nf-resPersNF.va.mjs";
// export { id_euro_nf_resPersNF } from "../ISSS-Schema/id-euro-nf-resPersNF.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary euroResPersNF
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * euroResPersNF NAME-FORM ::= {
 *     NAMES                   residentialPerson
 *     WITH ATTRIBUTES         { commonName }
 *     AND OPTIONALLY          { serialNumber }
 *     LDAP-NAME               {"euroResPersNF"}
 *     ID                      id-euro-nf-resPersNF }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const euroResPersNF: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": residentialPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ serialNumber, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "euroResPersNF" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_euro_nf_resPersNF /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
