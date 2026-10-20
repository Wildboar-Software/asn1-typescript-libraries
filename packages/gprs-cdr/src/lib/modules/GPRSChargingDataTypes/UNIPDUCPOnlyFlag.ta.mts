/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UNIPDUCPOnlyFlag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UNIPDUCPOnlyFlag  ::=  BOOLEAN
 * ```
 */
export
type UNIPDUCPOnlyFlag = BOOLEAN; // BooleanType

export
const _decode_UNIPDUCPOnlyFlag: $.ASN1Decoder<UNIPDUCPOnlyFlag> = $._decodeBoolean;

export
const _encode_UNIPDUCPOnlyFlag: $.ASN1Encoder<UNIPDUCPOnlyFlag> = $._encodeBoolean;

/* eslint-enable */
