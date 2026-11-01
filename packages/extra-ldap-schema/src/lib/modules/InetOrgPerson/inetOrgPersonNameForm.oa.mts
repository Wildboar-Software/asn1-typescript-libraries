/* eslint-disable */
import { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_nf_inetOrgPersonNameForm } from "../InetOrgPerson/id-nf-inetOrgPersonNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary inetOrgPersonNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetOrgPersonNameForm NAME-FORM ::= {
 *     NAMES            inetOrgPerson
 *     WITH ATTRIBUTES {commonName}
 *     LDAP-NAME       {"inetOrgPersonNameForm"}
 *     ID                id-nf-inetOrgPersonNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const inetOrgPersonNameForm: NAME_FORM = {
    class: "NAME-FORM",
    decoderFor: {
    },
    encoderFor: {
    },
    "&namedObjectClass": inetOrgPerson /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetOrgPersonNameForm" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_nf_inetOrgPersonNameForm /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

