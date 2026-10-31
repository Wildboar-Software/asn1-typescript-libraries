/* eslint-disable */
import { type ATTRIBUTE} from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { admissionRate } from "../OrganizationAndGroupSchema/admissionRate.oa.mjs";
// export { admissionRate } from "../OrganizationAndGroupSchema/admissionRate.oa.mjs";
import { admissionRateForMales } from "../OrganizationAndGroupSchema/admissionRateForMales.oa.mjs";
// export { admissionRateForMales } from "../OrganizationAndGroupSchema/admissionRateForMales.oa.mjs";
import { admissionRateForFemales } from "../OrganizationAndGroupSchema/admissionRateForFemales.oa.mjs";
// export { admissionRateForFemales } from "../OrganizationAndGroupSchema/admissionRateForFemales.oa.mjs";
import { admissionRateForCollegeEducated } from "../OrganizationAndGroupSchema/admissionRateForCollegeEducated.oa.mjs";
// export { admissionRateForCollegeEducated } from "../OrganizationAndGroupSchema/admissionRateForCollegeEducated.oa.mjs";
import { admissionRateForMarried } from "../OrganizationAndGroupSchema/admissionRateForMarried.oa.mjs";
// export { admissionRateForMarried } from "../OrganizationAndGroupSchema/admissionRateForMarried.oa.mjs";
import { admissionRateForNonCollegeEducated } from "../OrganizationAndGroupSchema/admissionRateForNonCollegeEducated.oa.mjs";
// export { admissionRateForNonCollegeEducated } from "../OrganizationAndGroupSchema/admissionRateForNonCollegeEducated.oa.mjs";
import { admissionRateForNonMarried } from "../OrganizationAndGroupSchema/admissionRateForNonMarried.oa.mjs";
// export { admissionRateForNonMarried } from "../OrganizationAndGroupSchema/admissionRateForNonMarried.oa.mjs";


/**
 * @summary AdmissionRateStatAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdmissionRateStatAttributes ATTRIBUTE ::= {
 *     admissionRate
 *     | admissionRateForMales
 *     | admissionRateForFemales
 *     | admissionRateForCollegeEducated
 *     | admissionRateForMarried
 *     | admissionRateForNonCollegeEducated
 *     | admissionRateForNonMarried,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const AdmissionRateStatAttributes: (ATTRIBUTE)[] = [ admissionRate, admissionRateForMales, admissionRateForFemales, admissionRateForCollegeEducated, admissionRateForMarried, admissionRateForNonCollegeEducated, admissionRateForNonMarried, ];

/* eslint-enable */
