/* eslint-disable */
import { pilotPerson } from "../Cosine/pilotPerson.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_pilotPersonNameForm } from "../Cosine/id-nf-pilotPersonNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary pilotPersonNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * pilotPersonNameForm NAME-FORM ::= {
 *     NAMES                pilotPerson
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"pilotPersonNameForm"}
 *     ID                    id-nf-pilotPersonNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const pilotPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": pilotPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "pilotPersonNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_pilotPersonNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

