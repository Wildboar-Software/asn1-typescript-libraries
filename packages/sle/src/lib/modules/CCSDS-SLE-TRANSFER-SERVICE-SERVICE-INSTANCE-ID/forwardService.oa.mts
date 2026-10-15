/* eslint-disable */
import { fsl_fg } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fsl-fg.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary forwardService
 * @description
 * 
 * Forward-service functional group. The printable name is `fsl-fg`.
 * The value is agreed between the user and the provider.
 * 
 * For an FCLTU space link session transfer service profile,
 * `functionalGroupId` is the functional-group identifier inserted as
 * the value of the functional-group component of the transfer service
 * instance identifier.
 * 
 * CCSDS 911.1-B-5, section A2.4. CCSDS 910.11-B-1, table 5-80.
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
