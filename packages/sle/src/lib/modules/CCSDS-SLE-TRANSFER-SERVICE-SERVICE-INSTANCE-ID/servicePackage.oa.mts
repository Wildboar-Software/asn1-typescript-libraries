/* eslint-disable */
import { spack } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/spack.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary servicePackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * servicePackage ATTRIBUTE ::= {  ID spack }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const servicePackage: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": spack /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
