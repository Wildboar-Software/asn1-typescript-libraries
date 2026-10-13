/* eslint-disable */
import { sagr } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/sagr.va.mjs";
// export { sagr } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/sagr.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary serviceAgreement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAgreement ATTRIBUTE ::= {  ID sagr  }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const serviceAgreement: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": sagr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
