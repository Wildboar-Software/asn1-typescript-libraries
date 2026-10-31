/* eslint-disable */
// export { inetOrgPerson } from "../InetOrgPerson/inetOrgPerson.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_nf_inetOrgPersonNameForm } from "../InetOrgPerson/id-nf-inetOrgPersonNameForm.va.mjs";
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
const inetOrgPersonNameForm: NAME_FORM = undefined;

/* eslint-enable */
