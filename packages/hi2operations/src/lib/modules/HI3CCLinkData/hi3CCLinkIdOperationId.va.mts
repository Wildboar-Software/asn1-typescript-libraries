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
