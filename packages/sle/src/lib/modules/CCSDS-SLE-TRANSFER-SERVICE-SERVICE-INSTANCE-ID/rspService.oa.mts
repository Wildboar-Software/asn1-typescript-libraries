/* eslint-disable */
import { rsp } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rsp.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rspService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rspService ATTRIBUTE ::= {  ID rsp   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rspService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": rsp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
