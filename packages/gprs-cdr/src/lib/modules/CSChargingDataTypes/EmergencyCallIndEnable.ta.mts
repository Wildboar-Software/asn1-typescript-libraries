/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EmergencyCallIndEnable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EmergencyCallIndEnable  ::=  BOOLEAN
 * ```
 */
export
type EmergencyCallIndEnable = BOOLEAN; // BooleanType

export
const _decode_EmergencyCallIndEnable: $.ASN1Decoder<EmergencyCallIndEnable> = $._decodeBoolean;

export
const _encode_EmergencyCallIndEnable: $.ASN1Encoder<EmergencyCallIndEnable> = $._encodeBoolean;

/* eslint-enable */
