/* eslint-disable */
import { rsl_fg } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rsl-fg.va.mjs";
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";


/**
 * @summary returnService
 * @description
 * 
 * Return-service functional group. The printable name is `rsl-fg`.
 * The value is agreed between the user and the provider. The Return
 * Space Link Processing Functional Group produces the RAF service and
 * the Return Insert service.
 * 
 * For an offline RAF retrieval profile, `functionalGroupId` identifies
 * the data of one data flow, such as one symbol stream, and is
 * inserted as the functional-group component of the transfer service
 * instance identifier. A retrieval transfer service instance has
 * access to data stored with a matching `functionalGroupId`.
 * 
 * CCSDS 911.1-B-5, sections A2.4 and 2.4.1. CCSDS 910.11-B-1,
 * tables 5-94 and 5-23.
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
