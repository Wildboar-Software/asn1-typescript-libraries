/* eslint-disable */
import { ATTRIBUTE } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/ATTRIBUTE.oca.mjs";
import { rafService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rafService.oa.mjs";
import { rcfService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rcfService.oa.mjs";
import { rcfshService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rcfshService.oa.mjs";
import { rocfService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rocfService.oa.mjs";
import { rspService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/rspService.oa.mjs";
import { cltuService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/cltuService.oa.mjs";
import { fspService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/fspService.oa.mjs";
import { tcfService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/tcfService.oa.mjs";
import { tcvaService } from "../CCSDS-SLE-TRANSFER-SERVICE-SERVICE-INSTANCE-ID/tcvaService.oa.mjs";


/**
 * @summary ServiceNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceNames ATTRIBUTE ::= {  rafService
 * |  rcfService
 * |  rcfshService
 * |  rocfService
 * |  rspService
 * |  cltuService
 * |  fspService
 * |  tcfService
 * |  tcvaService
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE[]}
 * 
 */
export
const ServiceNames: (ATTRIBUTE)[] = [ rafService, rcfService, rcfshService, rocfService, rspService, cltuService, fspService, tcfService, tcvaService, ];

/* eslint-enable */
