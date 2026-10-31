/* eslint-disable */
// export { subentry } from "../InformationFramework/subentry.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_nf_subentryNameForm } from "../InformationFramework/id-nf-subentryNameForm.va.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary subentryNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * subentryNameForm NAME-FORM ::= {
 *   NAMES            subentry
 *   WITH ATTRIBUTES  {commonName}
 *   ID               id-nf-subentryNameForm }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const subentryNameForm: NAME_FORM = undefined;

/* eslint-enable */
