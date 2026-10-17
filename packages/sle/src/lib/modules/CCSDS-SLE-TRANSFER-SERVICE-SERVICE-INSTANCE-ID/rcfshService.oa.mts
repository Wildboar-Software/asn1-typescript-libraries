/* eslint-disable */
import { rcfsh } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rcfsh.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary rcfshService
 * @description
 * 
 * Service-name attribute. The printable name is `rcfsh`. The value is
 * `onlc`, `onlt`, or `offl`, followed by an instance number.
 * 
 * CCSDS 911.1-B-5, section A2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * rcfshService ATTRIBUTE ::= {  ID rcfsh }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const rcfshService: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": rcfsh /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
