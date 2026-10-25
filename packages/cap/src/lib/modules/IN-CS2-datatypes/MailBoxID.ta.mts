/* eslint-disable */
import {
    type OCTET_STRING,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MailBoxID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MailBoxID{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minMailBoxIDLength..bound.&maxMailBoxIDLength))
 * ```
 */
export
type MailBoxID = OCTET_STRING; // OctetStringType
export const _decode_MailBoxID: $.ASN1Decoder<OCTET_STRING> = $._decodeOctetString;
export const _encode_MailBoxID: $.ASN1Encoder<OCTET_STRING> = $._encodeOctetString;


/* eslint-enable */
