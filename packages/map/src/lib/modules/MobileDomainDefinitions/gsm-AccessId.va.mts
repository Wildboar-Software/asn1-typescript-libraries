/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mobileDomainId } from "../MobileDomainDefinitions/mobileDomainId.va.mjs";


/**
 * @summary gsm_AccessId
 * @description
 *
 * `{mobileDomainId gsm-Access(2)}` as assigned in `MobileDomainDefinitions`. TS
 * 29.002 does not further define this arc (3GPP TS 29.002 V19.1.0 clause
 * 17.1.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsm-AccessId OBJECT IDENTIFIER ::= {mobileDomainId gsm-Access (2)}
 * ```
 * 
 * @constant
 */
export
const gsm_AccessId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gsm-Access */ 2,
], mobileDomainId);

/* eslint-enable */
