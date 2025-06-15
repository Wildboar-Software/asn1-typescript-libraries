/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { serialNumber } from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/serialNumber.oa.mjs";
import { countryOfCitizenship } from "../PKCS-9/countryOfCitizenship.oa.mjs";
import { countryOfResidence } from "../PKCS-9/countryOfResidence.oa.mjs";
import { dateOfBirth } from "../PKCS-9/dateOfBirth.oa.mjs";
import { emailAddress } from "../PKCS-9/emailAddress.oa.mjs";
import { gender } from "../PKCS-9/gender.oa.mjs";
import { placeOfBirth } from "../PKCS-9/placeOfBirth.oa.mjs";
import { pseudonym } from "../PKCS-9/pseudonym.oa.mjs";
import { unstructuredAddress } from "../PKCS-9/unstructuredAddress.oa.mjs";
import { unstructuredName } from "../PKCS-9/unstructuredName.oa.mjs";


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

/* eslint-enable */
