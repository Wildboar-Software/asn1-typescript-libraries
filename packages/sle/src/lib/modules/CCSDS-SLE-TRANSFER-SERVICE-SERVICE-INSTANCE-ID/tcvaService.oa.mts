/* eslint-disable */
import { tcva } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/tcva.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary tcvaService
 * @description
 * 
 * Service-name attribute. The printable name is `tcva`. The value is
 * `tcva` followed by an instance number.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcvaService ATTRIBUTE ::= {  ID tcva  }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const tcvaService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": tcva /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
