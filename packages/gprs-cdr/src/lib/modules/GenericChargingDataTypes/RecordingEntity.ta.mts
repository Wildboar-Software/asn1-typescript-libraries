/* eslint-disable */
import {
    OCTET_STRING
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

export
const _decode_RecordingEntity: $.ASN1Decoder<RecordingEntity> = $._decodeOctetString;

export
const _encode_RecordingEntity: $.ASN1Encoder<RecordingEntity> = $._encodeOctetString;

/* eslint-enable */
