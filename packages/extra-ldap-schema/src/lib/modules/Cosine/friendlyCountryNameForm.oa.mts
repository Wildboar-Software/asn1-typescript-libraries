/* eslint-disable */
import { friendlyCountry } from "../Cosine/friendlyCountry.oa.mjs";
// export { friendlyCountry } from "../Cosine/friendlyCountry.oa.mjs";
import { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
// export { countryName } from "../SelectedAttributeTypes/countryName.oa.mjs";
import { id_nf_friendlyCountryNameForm } from "../Cosine/id-nf-friendlyCountryNameForm.va.mjs";
// export { id_nf_friendlyCountryNameForm } from "../Cosine/id-nf-friendlyCountryNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary friendlyCountryNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * friendlyCountryNameForm NAME-FORM ::= {
 *     NAMES                friendlyCountry
 *     WITH ATTRIBUTES        {countryName}
 *     LDAP-NAME            {"friendlyCountryNameForm"}
 *     ID                    id-nf-friendlyCountryNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const friendlyCountryNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": friendlyCountry /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ countryName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "friendlyCountryNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_friendlyCountryNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
