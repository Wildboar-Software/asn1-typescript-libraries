/* eslint-disable */
import { type ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";
import { GeneralAttributes } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/GeneralAttributes.osa.mjs";
import { ServiceNames } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ServiceNames.osa.mjs";


/**
 * @summary ServiceInstanceAttributes
 * @description
 * 
 * Every attribute that may appear in a service instance identifier:
 * `GeneralAttributes` together with `ServiceNames`.
 * 
 * CCSDS 911.1-B-5, section A2.4.
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
