/* eslint-disable */
import { type SCF_SSF_BOUNDS } from "../IN-SSF-SCF-Classes/SCF-SSF-BOUNDS.oca.mjs";


/**
 * @summary networkSpecificB2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * networkSpecificB2 SCF-SSF-BOUNDS ::= {
 *   MINIMUM-FOR-DIGITS               1 --example value
 *   MAXIMUM-FOR-DIGITS               5 --example value
 *   MINIMUM-FOR-DISPLAY              1 --example value
 *   MAXIMUM-FOR-DISPLAY              5 --example value
 *   MINIMUM-FOR-GENERIC-NUMBER       1 --example value
 *   MAXIMUM-FOR-GENERIC-NUMBER       5 --example value
 *   MINIMUM-FOR-IP-AVAILABLE         1 --example value
 *   MAXIMUM-FOR-IP-AVAILABLE         5 --example value
 *   MINIMUM-FOR-IP-SSP-CAPABILITIES  1 --example value
 *   MAXIMUM-FOR-IP-SSP-CAPABILITIES  5 --example value
 *   MINIMUM-FOR-SCF-ID               1 --example value
 *   MAXIMUM-FOR-SCF-ID               5 --example value
 *   MINIMUM-FOR-SDSS-INFORMATION     1 --example value
 *   MAXIMUM-FOR-SDSS-INFORMATION     5 --example value
 *   NUM-OF-CSS                       2 --example value
 *   NUM-OF-GENERIC-NUMBERS           2
 *  --example value --}
 * ```
 * 
 * @constant
 * @type {SCF_SSF_BOUNDS}
 * @implements {SCF_SSF_BOUNDS}
 */
export
const networkSpecificB2: SCF_SSF_BOUNDS = {
    class: "SCF-SSF-BOUNDS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&minDigitsLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDigitsLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minDisplayInformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxDisplayInformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minGenericNumberLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxGenericNumberLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPAvailableLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPAvailableLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minIPSSPCapabilitiesLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxIPSSPCapabilitiesLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minScfIDLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxScfIDLength": 5 /* OBJECT_FIELD_SETTING */,
    "&minSDSSinformationLength": 1 /* OBJECT_FIELD_SETTING */,
    "&maxSDSSinformationLength": 5 /* OBJECT_FIELD_SETTING */,
    "&numOfCSs": 2 /* OBJECT_FIELD_SETTING */,
    "&numOfGenericNumbers": 2 /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
