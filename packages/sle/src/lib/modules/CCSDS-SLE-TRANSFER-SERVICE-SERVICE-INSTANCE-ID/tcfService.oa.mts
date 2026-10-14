/* eslint-disable */
import { tcf } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/tcf.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary tcfService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcfService ATTRIBUTE ::= {  ID tcf   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const tcfService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": tcf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
