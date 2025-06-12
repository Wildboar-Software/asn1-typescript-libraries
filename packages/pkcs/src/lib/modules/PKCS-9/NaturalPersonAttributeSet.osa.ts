/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.js";
import { serialNumber } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/serialNumber.oa.js";
import { countryOfCitizenship } from "../PKCS-9/countryOfCitizenship.oa.js";
import { countryOfResidence } from "../PKCS-9/countryOfResidence.oa.js";
import { dateOfBirth } from "../PKCS-9/dateOfBirth.oa.js";
import { emailAddress } from "../PKCS-9/emailAddress.oa.js";
import { gender } from "../PKCS-9/gender.oa.js";
import { placeOfBirth } from "../PKCS-9/placeOfBirth.oa.js";
import { pseudonym } from "../PKCS-9/pseudonym.oa.js";
import { unstructuredAddress } from "../PKCS-9/unstructuredAddress.oa.js";
import { unstructuredName } from "../PKCS-9/unstructuredName.oa.js";

/* START_OF_SYMBOL_DEFINITION NaturalPersonAttributeSet */
/**
 * @summary NaturalPersonAttributeSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NaturalPersonAttributeSet ATTRIBUTE ::= {
 *         emailAddress |
 *         unstructuredName |
 *         unstructuredAddress |
 *         dateOfBirth |
 *         placeOfBirth |
 *         gender |
 *         countryOfCitizenship |
 *         countryOfResidence |
 *         pseudonym |
 *         serialNumber,
 *         ... -- For future extensions
 * }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE[]}
 *
 */
export const NaturalPersonAttributeSet: ATTRIBUTE[] = [
    emailAddress,
    unstructuredName,
    unstructuredAddress,
    dateOfBirth,
    placeOfBirth,
    gender,
    countryOfCitizenship,
    countryOfResidence,
    pseudonym,
    serialNumber,
];
/* END_OF_SYMBOL_DEFINITION NaturalPersonAttributeSet */

/* eslint-enable */
