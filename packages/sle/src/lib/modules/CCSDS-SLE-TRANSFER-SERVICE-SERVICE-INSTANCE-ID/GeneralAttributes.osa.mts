/* eslint-disable */
import { ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";
import { serviceAgreement } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/serviceAgreement.oa.mjs";
import { servicePackage } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/servicePackage.oa.mjs";
import { forwardService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/forwardService.oa.mjs";
import { returnService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/returnService.oa.mjs";


/**
 * @summary GeneralAttributes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GeneralAttributes ATTRIBUTE ::= {  serviceAgreement
 * |  servicePackage
 * |  forwardService
 * |  returnService
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const GeneralAttributes: (ATTRIBUTE)[] = [ serviceAgreement, servicePackage, forwardService, returnService, ];

/* eslint-enable */
