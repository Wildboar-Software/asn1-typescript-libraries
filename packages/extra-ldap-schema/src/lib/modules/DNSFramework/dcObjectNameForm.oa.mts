/* eslint-disable */
// export { dcObject } from "../DNSFramework/dcObject.oa.mjs";
// export { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
// export { id_nf_dcObjectNameForm } from "../DNSFramework/id-nf-dcObjectNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary dcObjectNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dcObjectNameForm NAME-FORM ::= {
 *     NAMES               dcObject
 *     WITH ATTRIBUTES     {dc}
 *     LDAP-NAME           {"dcObjectNameForm"}
 *     ID                  id-nf-dcObjectNameForm
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const dcObjectNameForm: NAME_FORM = undefined;

/* eslint-enable */
