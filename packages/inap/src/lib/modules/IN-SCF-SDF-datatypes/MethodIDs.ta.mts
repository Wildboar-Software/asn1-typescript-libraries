/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";


/**
 * @summary MethodIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MethodIDs  ::=  METHOD.&id
 * ```
 */
export
type MethodIDs = OBJECT_IDENTIFIER; // ObjectClassFieldType

export
const _decode_MethodIDs: $.ASN1Decoder<MethodIDs> = $._decodeObjectIdentifier;

export
const _encode_MethodIDs: $.ASN1Encoder<MethodIDs> = $._encodeObjectIdentifier;

/* eslint-enable */
