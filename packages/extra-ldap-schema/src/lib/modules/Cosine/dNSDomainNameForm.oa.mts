/* eslint-disable */
import { dNSDomain } from "../Cosine/dNSDomain.oa.mjs";
// export { dNSDomain } from "../Cosine/dNSDomain.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { id_nf_dNSDomainNameForm } from "../Cosine/id-nf-dNSDomainNameForm.va.mjs";
// export { id_nf_dNSDomainNameForm } from "../Cosine/id-nf-dNSDomainNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary dNSDomainNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dNSDomainNameForm NAME-FORM ::= {
 *     NAMES                dNSDomain
 *     WITH ATTRIBUTES        {dc}
 *     LDAP-NAME            {"dNSDomainNameForm"}
 *     ID                    id-nf-dNSDomainNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const dNSDomainNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": dNSDomain /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dc, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dNSDomainNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_dNSDomainNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
