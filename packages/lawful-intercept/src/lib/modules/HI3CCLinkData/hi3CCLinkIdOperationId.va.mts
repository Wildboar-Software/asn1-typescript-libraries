/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { hi3CCLinkId } from "../HI3CCLinkData/hi3CCLinkId.va.mjs";
// export { hi3CCLinkId } from "../HI3CCLinkData/hi3CCLinkId.va.mjs";


/**
 * @summary hi3CCLinkIdOperationId
 * @description
 *
 * `version4(4)` under `hi3CCLinkId`. `domainID` in `UUS1-Content` is
 * constrained to this value when the FTP delivery mechanism is used. The module
 * object identifier is the same version.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.8.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
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
