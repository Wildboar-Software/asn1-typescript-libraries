/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPCIoTEPSOptimisationIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPCIoTEPSOptimisationIndicator  ::=  BOOLEAN
 * ```
 */
export
type CPCIoTEPSOptimisationIndicator = BOOLEAN; // BooleanType

export
const _decode_CPCIoTEPSOptimisationIndicator: $.ASN1Decoder<CPCIoTEPSOptimisationIndicator> = $._decodeBoolean;

export
const _encode_CPCIoTEPSOptimisationIndicator: $.ASN1Encoder<CPCIoTEPSOptimisationIndicator> = $._encodeBoolean;

/* eslint-enable */
