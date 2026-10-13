/* eslint-disable */
import { fsl_fg } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fsl-fg.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary forwardService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * forwardService ATTRIBUTE ::= {  ID fsl-fg   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const forwardService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": fsl_fg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
