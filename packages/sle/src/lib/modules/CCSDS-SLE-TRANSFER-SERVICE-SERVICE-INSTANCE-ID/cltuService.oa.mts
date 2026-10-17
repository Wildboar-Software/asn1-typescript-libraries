/* eslint-disable */
import { cltu } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/cltu.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary cltuService
 * @description
 * 
 * Service-name attribute. The printable name is `cltu`. The value is
 * `cltu` followed by an instance number.
 * 
 * CCSDS 911.1-B-5, section A2.4.
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
