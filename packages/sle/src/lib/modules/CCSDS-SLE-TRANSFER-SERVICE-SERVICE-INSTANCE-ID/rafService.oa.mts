/* eslint-disable */
import { raf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/raf.va.mjs";
// export { raf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/raf.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rafService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rafService ATTRIBUTE ::= {  ID raf   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rafService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": raf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
