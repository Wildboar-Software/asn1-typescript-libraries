/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_MediaSecFailureIndication {
    genericFailure = 0,
}

/**
 * @summary MediaSecFailureIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MediaSecFailureIndication   ::=  ENUMERATED
 * {
 *     genericFailure  (0),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MediaSecFailureIndication = _enum_for_MediaSecFailureIndication | ENUMERATED;

/**
 * @summary MediaSecFailureIndication_genericFailure
 * @constant
 * @type {number}
 */
export
const MediaSecFailureIndication_genericFailure: MediaSecFailureIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericFailure
 * @constant
 * @type {number}
 */
export
const genericFailure: MediaSecFailureIndication = MediaSecFailureIndication_genericFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_MediaSecFailureIndication: $.ASN1Decoder<MediaSecFailureIndication> = $._decodeEnumerated;

export const _encode_MediaSecFailureIndication: $.ASN1Encoder<MediaSecFailureIndication> = $._encodeEnumerated;


/* eslint-enable */
