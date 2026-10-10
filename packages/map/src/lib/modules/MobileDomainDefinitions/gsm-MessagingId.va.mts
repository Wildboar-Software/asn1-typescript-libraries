/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { mobileDomainId } from "../MobileDomainDefinitions/mobileDomainId.va.mjs";


/**
 * @summary gsm_MessagingId
 * @description
 *
 * `{mobileDomainId gsm-Messaging(4)}` as assigned in `MobileDomainDefinitions`.
 * TS 29.002 does not further define this arc (3GPP TS 29.002 V19.1.0 clause
 * 17.1.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gsm-MessagingId OBJECT IDENTIFIER ::= {mobileDomainId gsm-Messaging (4)}
 * ```
 * 
 * @constant
 */
export
const gsm_MessagingId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* gsm-Messaging */ 4,
], mobileDomainId);

/* eslint-enable */
