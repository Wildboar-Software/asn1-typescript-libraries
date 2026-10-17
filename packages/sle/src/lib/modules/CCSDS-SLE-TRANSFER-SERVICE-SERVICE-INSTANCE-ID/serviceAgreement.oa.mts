/* eslint-disable */
import { sagr } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/sagr.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary serviceAgreement
 * @description
 * 
 * Service-agreement attribute. The printable name is `sagr`. The
 * value is agreed between the user and the provider. Offline RAF
 * delivery should use one offline frame buffer for all service
 * instances associated with one service agreement.
 * 
 * A Service Agreement is the information agreed before a cross support
 * service is established. It bounds the service packages,
 * configuration profiles, and trajectory predictions of that
 * agreement.
 * 
 * CCSDS 911.1-B-5, sections A2.4 and 3.1.9.3.1. CCSDS 910.11-B-1,
 * sections 1.3.1 and 2.1.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serviceAgreement ATTRIBUTE ::= {  ID sagr  }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const serviceAgreement: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&id": sagr /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
