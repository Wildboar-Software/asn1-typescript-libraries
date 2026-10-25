/* eslint-disable */
import {
    type OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AppSpecificData
 * @description
 *
 * One application-specific data block supplied by the application in the UE and
 * carried in a PF-DC-CDR. The content is defined by that application. When the
 * UE sends a block, the ProSe Function adds it to every open group CDR. The
 * block should say which groups it applies to and should identify the
 * chargeable events, so the billing domain can charge it once. Examples are
 * application-specific session floor control information and the
 * application-layer user IDs of the group members.
 *
 * 3GPP TS 32.277 V19.2.0 clauses 5.1.2.3, 5.2.3.1.2, and 6.1.3.4. Clause
 * 6.3.1.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AppSpecificData  ::=  OCTET STRING
 * ```
 */
export
type AppSpecificData = OCTET_STRING; // OctetStringType

export
const _decode_AppSpecificData: $.ASN1Decoder<AppSpecificData> = $._decodeOctetString;

export
const _encode_AppSpecificData: $.ASN1Encoder<AppSpecificData> = $._encodeOctetString;

/* eslint-enable */
