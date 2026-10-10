/* eslint-disable */
import {
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentationSelector
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentationSelector  ::=  [1] IMPLICIT OCTET STRING
 * ```
 */
export
type PresentationSelector = OCTET_STRING; // OctetStringType

export const _decode_PresentationSelector: $.ASN1Decoder<PresentationSelector> = $._decode_implicit<PresentationSelector>(() => $._decodeOctetString);
export const _encode_PresentationSelector: $.ASN1Encoder<PresentationSelector> = $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER);


/* eslint-enable */
