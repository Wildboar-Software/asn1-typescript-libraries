/* eslint-disable */
import { ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";
// export { ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";
import { GeneralAttributes } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/GeneralAttributes.osa.mjs";
// export { GeneralAttributes } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/GeneralAttributes.osa.mjs";
import { ServiceNames } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceNames.osa.mjs";
// export { ServiceNames } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceNames.osa.mjs";


/**
 * @summary ServiceInstanceAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceInstanceAttributes ATTRIBUTE ::= {  GeneralAttributes
 * |  ServiceNames
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const ServiceInstanceAttributes: (ATTRIBUTE)[] = [ ...GeneralAttributes, ...ServiceNames, ];

/* eslint-enable */
