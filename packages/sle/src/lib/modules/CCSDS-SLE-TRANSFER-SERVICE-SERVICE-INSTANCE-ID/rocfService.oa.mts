/* eslint-disable */
import { rocf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rocf.va.mjs";
// export { rocf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rocf.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rocfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rocfService ATTRIBUTE ::= {  ID rocf  }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rocfService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": rocf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
