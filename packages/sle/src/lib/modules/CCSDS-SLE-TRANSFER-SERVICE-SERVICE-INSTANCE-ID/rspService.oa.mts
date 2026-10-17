/* eslint-disable */
import { rsp } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rsp.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rspService
 * @description
 * 
 * Service-name attribute. The printable name is `rsp`. The value is
 * `onlc`, `onlt`, or `offl`, followed by an instance number.
 * 
 * CCSDS 911.1-B-5, section A2.4.
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
