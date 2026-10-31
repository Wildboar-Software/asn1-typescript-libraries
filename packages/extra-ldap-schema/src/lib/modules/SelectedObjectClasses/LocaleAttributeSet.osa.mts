/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
// export { localityName } from "../SelectedAttributeTypes/localityName.oa.mjs";
import { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
// export { stateOrProvinceName } from "../SelectedAttributeTypes/stateOrProvinceName.oa.mjs";
import { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";
// export { streetAddress } from "../SelectedAttributeTypes/streetAddress.oa.mjs";


/**
 * @summary LocaleAttributeSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocaleAttributeSet ATTRIBUTE ::= {localityName |
 *    stateOrProvinceName |
 *    streetAddress}
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const LocaleAttributeSet: (ATTRIBUTE)[] = [ localityName, stateOrProvinceName, streetAddress, ];

/* eslint-enable */
