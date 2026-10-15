/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3CCLinkId } from "../HI3CCLinkData/hi3CCLinkId.va.mjs";
// export { hi3CCLinkId } from "../HI3CCLinkData/hi3CCLinkId.va.mjs";


/**
 * @summary hi3CCLinkIdOperationId
 * @description
 * 
 * HI3 CC-link operation identifier: `hi3CCLinkId` plus `version4(4)`. UUS1
 * `domainID` is this value when the FTP delivery mechanism is used.
 * `hi3CCLinkId` is `hi3(2)` `ccLinkLI(4)` under `lawfulInterceptDomainId`.
 * 
 * 3GPP TS 33.108, annex J.1.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CCLinkIdOperationId OBJECT IDENTIFIER ::= {hi3CCLinkId version4(4)}
 * ```
 * 
 * @constant
 */
export
const hi3CCLinkIdOperationId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* version4 */ 4,
], hi3CCLinkId);

/* eslint-enable */
