/* eslint-disable */
import {
    ASN1Error,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { tcg_address_bluetoothmac } from "../PlatformCertificateProfileV2/tcg-address-bluetoothmac.va.mjs";
import { tcg_address_ethernetmac } from "../PlatformCertificateProfileV2/tcg-address-ethernetmac.va.mjs";
import { tcg_address_wlanmac } from "../PlatformCertificateProfileV2/tcg-address-wlanmac.va.mjs";



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

const _permitted_address_types: OBJECT_IDENTIFIER[] = [
    tcg_address_ethernetmac,
    tcg_address_wlanmac,
    tcg_address_bluetoothmac,
];

export
const _decode_AddressType: $.ASN1Decoder<AddressType> = (el) => {
    const value = $._decodeObjectIdentifier(el);
    if (!_permitted_address_types.some((oid) => oid.isEqualTo(value))) {
        throw new ASN1Error("AddressType is not a permitted object identifier");
    }
    return value;
};

export
const _encode_AddressType: $.ASN1Encoder<AddressType> = $._encodeObjectIdentifier;

/* eslint-enable */
