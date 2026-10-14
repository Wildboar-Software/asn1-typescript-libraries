/* eslint-disable */
import { rcf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rcf.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rcfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rcfService ATTRIBUTE ::= {  ID rcf   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rcfService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": rcf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
