/* eslint-disable */
import {
    type OCTET_STRING,
    ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RecordingEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordingEntity  ::=  OCTET STRING ( SIZE( 1 .. 20 ) )
 * ```
 */
export
type RecordingEntity = OCTET_STRING; // OctetStringType

export const _decode_RecordingEntity = (el: _Element): RecordingEntity => {
    const value = $._decodeOctetString(el);
    if (value.length < 1 || value.length > 20) {
        throw new ASN1SizeError("RecordingEntity violates SIZE constraint");
    }
    return value;
};

export
const _encode_RecordingEntity: $.ASN1Encoder<RecordingEntity> = $._encodeOctetString;

/* eslint-enable */
