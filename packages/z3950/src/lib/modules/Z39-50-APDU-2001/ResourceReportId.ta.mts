/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReportId
 * @description
 * 
 * Object identifier of a resource-report format (ANSI/NISO Z39.50-2003 Appendix
 * RSC). resource-1 is `{Z39-50-resourceReport 1}` and resource-2 is
 * `{Z39-50-resourceReport 2}`. The client may name a preferred format on
 * Trigger-resource-control, Resource-report, and Close.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportId  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type ResourceReportId = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_ResourceReportId: $.ASN1Decoder<ResourceReportId> = $._decodeObjectIdentifier;
export const _encode_ResourceReportId: $.ASN1Encoder<ResourceReportId> = $._encodeObjectIdentifier;


/* eslint-enable */
