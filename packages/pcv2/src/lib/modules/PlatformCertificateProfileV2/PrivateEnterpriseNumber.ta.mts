/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PrivateEnterpriseNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivateEnterpriseNumber  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type PrivateEnterpriseNumber = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_PrivateEnterpriseNumber: $.ASN1Decoder<PrivateEnterpriseNumber> = $._decodeObjectIdentifier;

export
const _encode_PrivateEnterpriseNumber: $.ASN1Encoder<PrivateEnterpriseNumber> = $._encodeObjectIdentifier;

/* eslint-enable */
