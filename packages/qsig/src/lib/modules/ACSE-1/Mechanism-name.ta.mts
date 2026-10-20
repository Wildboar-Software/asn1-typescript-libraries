/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Mechanism_name
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Mechanism-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type Mechanism_name = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_Mechanism_name: $.ASN1Decoder<Mechanism_name> = $._decodeObjectIdentifier;

export
const _encode_Mechanism_name: $.ASN1Encoder<Mechanism_name> = $._encodeObjectIdentifier;

/* eslint-enable */
