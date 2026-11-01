/* eslint-disable */
import { documentSeries } from "../Cosine/documentSeries.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_documentSeriesNameForm } from "../Cosine/id-nf-documentSeriesNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary documentSeriesNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * documentSeriesNameForm NAME-FORM ::= {
 *     NAMES                documentSeries
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"documentSeriesNameForm"}
 *     ID                    id-nf-documentSeriesNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const documentSeriesNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": documentSeries /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "documentSeriesNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_documentSeriesNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

