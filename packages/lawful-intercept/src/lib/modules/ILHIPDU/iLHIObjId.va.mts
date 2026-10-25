/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";
// export { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";


/**
 * @summary iLHIObjId
 * @description
 *
 * Object identifier of this ILHI PDU module:
 * `{iLHIDomainId ilhiPdu(0) version2(2)}`. `ILHIPayload.iLHIObjId` carries
 * the identifier of the definition in use.
 *
 * Annex B of V1.1.1 assigns the same name as
 * `{iLHIDomainId ilhiPdu(0) version1(1)}`.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iLHIObjId         OBJECT IDENTIFIER ::= {iLHIDomainId ilhiPdu(0) version2(2)}
 * ```
 * 
 * @constant
 */
export
const iLHIObjId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* ilhiPdu */ 0,
    /* version2 */ 2,
], iLHIDomainId);

/* eslint-enable */
