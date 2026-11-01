/* eslint-disable */
import { organizationExt } from "../OrganizationAndGroupSchema/organizationExt.oa.mjs";
// export { organizationExt } from "../OrganizationAndGroupSchema/organizationExt.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary organizationExtNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * organizationExtNameForm NAME-FORM ::= {
 *     NAMES                organizationExt
 *     WITH ATTRIBUTES        orgNameForm.&MandatoryAttributes -- organizationName
 *     LDAP-NAME            {"organizationExtNameForm"}
 *     ID                    id-nf-organizationExtNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const organizationExtNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": organizationExt /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "organizationExtNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_organizationExtNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
