/* eslint-disable */
import { rsl_fg } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rsl-fg.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary returnService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * returnService ATTRIBUTE ::= {  ID rsl-fg   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const returnService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": rsl_fg /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
