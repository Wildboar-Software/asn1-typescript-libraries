/* eslint-disable */
import { domain } from "../Cosine/domain.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { id_nf_domainNameForm } from "../Cosine/id-nf-domainNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary domainNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * domainNameForm NAME-FORM ::= {
 *     NAMES                domain
 *     WITH ATTRIBUTES        {dc}
 *     LDAP-NAME            {"domainNameForm"}
 *     ID                    id-nf-domainNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const domainNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": domain /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "domainNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_domainNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

