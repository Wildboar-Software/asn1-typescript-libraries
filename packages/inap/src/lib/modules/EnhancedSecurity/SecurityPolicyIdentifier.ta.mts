/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SecurityPolicyIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityPolicyIdentifier  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type SecurityPolicyIdentifier = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_SecurityPolicyIdentifier: $.ASN1Decoder<SecurityPolicyIdentifier> = $._decodeObjectIdentifier;

export
const _encode_SecurityPolicyIdentifier: $.ASN1Encoder<SecurityPolicyIdentifier> = $._encodeObjectIdentifier;

/* eslint-enable */
