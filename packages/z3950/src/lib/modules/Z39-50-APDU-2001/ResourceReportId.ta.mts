/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReportId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ResourceReportId = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ResourceReportId = $._decodeObjectIdentifier;
export const _encode_ResourceReportId = $._encodeObjectIdentifier;


/* eslint-enable */
