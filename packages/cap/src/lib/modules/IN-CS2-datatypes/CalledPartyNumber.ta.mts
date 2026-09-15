/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
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
 * @summary CalledPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CalledPartyNumber{PARAMETERS-BOUND:bound}  ::= 
 *   OCTET STRING
 *     (SIZE (bound.&minCalledPartyNumberLength..
 *              bound.&maxCalledPartyNumberLength))
 * ```
 */
export
type CalledPartyNumber = OCTET_STRING; // OctetStringType
export const _decode_CalledPartyNumber = $._decodeOctetString;
export const _encode_CalledPartyNumber = $._encodeOctetString;


/* eslint-enable */
