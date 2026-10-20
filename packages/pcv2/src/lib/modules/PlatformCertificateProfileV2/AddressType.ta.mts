/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddressType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressType  ::=  OBJECT IDENTIFIER (
 *     tcg-address-ethernetmac
 *     | tcg-address-wlanmac
 *     | tcg-address-bluetoothmac
 * )
 * ```
 */
export
type AddressType = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_AddressType: $.ASN1Decoder<AddressType> = $._decodeObjectIdentifier;

export
const _encode_AddressType: $.ASN1Encoder<AddressType> = $._encodeObjectIdentifier;

/* eslint-enable */
