/* eslint-disable */
// export { duaConfigProfile } from "../DUAConf/duaConfigProfile.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { type NAME_FORM } from "../InformationFramework/NAME-FORM.oca.mjs";


/**
 * @summary duaConfigProfileNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * duaConfigProfileNameForm NAME-FORM ::= {
 *     NAMES                duaConfigProfile
 *     WITH ATTRIBUTES        {commonName}
 *     LDAP-NAME            {"duaConfigProfileNameForm"}
 *     ID                    { id-nf 3 }
 * }
 * ```
 * 
 * @constant
 * @type {NAME_FORM}
 * @implements {NAME_FORM}
 */
export
const duaConfigProfileNameForm: NAME_FORM = undefined;

/* eslint-enable */
