/* eslint-disable */
import { cltu } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/cltu.va.mjs";
// export { cltu } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/cltu.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary cltuService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cltuService ATTRIBUTE ::= {  ID cltu  }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const cltuService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": cltu /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
