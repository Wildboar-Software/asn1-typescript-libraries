/* eslint-disable */
import {
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
 * The procedure that retrieves encryption keys from the KMS failed. Clause 7
 * table 7.2 and table 7.4: optional, and may be provided on that failure. The
 * only named cause is generic.
 * 
 * 3GPP TS 33.108 (https://www.3gpp.org/DynaReport/33108.htm).
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
 * @description
 * 
 * Generic failure to obtain encryption keys from the KMS (clause 7, table 7.4).
 * The specification defines no more specific cause. Optional; may be provided
 * on failure.
 * @constant
 * @type {number}
 */
export
const MediaSecFailureIndication_genericFailure: MediaSecFailureIndication = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericFailure
 * @description
 * 
 * Generic failure to obtain keys from the KMS (clause 7).
 * @constant
 * @type {number}
 */
export
const genericFailure: MediaSecFailureIndication = MediaSecFailureIndication_genericFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MediaSecFailureIndication: $.ASN1Decoder<MediaSecFailureIndication> = $._decodeEnumerated;
export const _encode_MediaSecFailureIndication: $.ASN1Encoder<MediaSecFailureIndication> = $._encodeEnumerated;


/* eslint-enable */
