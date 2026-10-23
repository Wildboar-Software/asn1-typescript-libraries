/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageID  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type MessageID = OBJECT_IDENTIFIER; // ObjectIdentifierType

export
const _decode_MessageID: $.ASN1Decoder<MessageID> = $._decodeObjectIdentifier;

export
const _encode_MessageID: $.ASN1Encoder<MessageID> = $._encodeObjectIdentifier;

/* eslint-enable */
