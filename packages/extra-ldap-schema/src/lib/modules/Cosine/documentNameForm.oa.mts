/* eslint-disable */
import { document } from "../Cosine/document.oa.mjs";
import { documentIdentifier } from "../Cosine/documentIdentifier.oa.mjs";
import { id_nf_documentNameForm } from "../Cosine/id-nf-documentNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary documentNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * documentNameForm NAME-FORM ::= {
 *     NAMES                document
 *     WITH ATTRIBUTES        {documentIdentifier}
 *     LDAP-NAME            {"documentNameForm"}
 *     ID                    id-nf-documentNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const documentNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": document /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ documentIdentifier, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "documentNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_documentNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

