/* eslint-disable */
import { fsp } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fsp.va.mjs";
// export { fsp } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fsp.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary fspService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fspService ATTRIBUTE ::= {  ID fsp   }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const fspService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": fsp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
