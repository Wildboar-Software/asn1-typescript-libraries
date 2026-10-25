/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";
// export { iLHIDomainId } from "../ILHIPDU/iLHIDomainId.va.mjs";


/**
 * @summary preagreedObjId
 * @description
 *
 * `{iLHIDomainId identifiers(1) preagreed(0)}`.
 *
 * `EncapsulationPayload.identifier` shall be this value when the content is
 * a pre-agreed payload that cannot be given an object identifier. The
 * encoding of that content is left to bilateral agreement.
 *
 * ETSI TS 103 462 V1.1.1 (2018-07), clause 8.1, annex B.
 * https://www.etsi.org/deliver/etsi_ts/103400_103499/103462/01.01.01_60/ts_103462v010101p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * preagreedObjId     OBJECT IDENTIFIER ::= {iLHIDomainId identifiers(1) preagreed(0)}
 * ```
 * 
 * @constant
 */
export
const preagreedObjId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* identifiers */ 1,
    /* preagreed */ 0,
], iLHIDomainId);

/* eslint-enable */
