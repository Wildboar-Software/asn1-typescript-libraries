/* eslint-disable */
import { fsp } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fsp.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary fspService
 * @description
 * 
 * Service-name attribute. The printable name is `fsp`. The value is
 * `fsp` followed by an instance number.
 * 
 * CCSDS 911.1-B-5, section A2.4.
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
