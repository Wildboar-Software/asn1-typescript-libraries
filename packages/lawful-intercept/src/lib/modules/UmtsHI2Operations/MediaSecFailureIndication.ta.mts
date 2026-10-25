/* eslint-disable */
import {
    type ENUMERATED
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
 * The procedure that retrieves encryption keys from the KMS failed. Optional on
 * the media-decryption REPORT ("May be provided in case of failure"). The only
 * named indication is a generic failure.
 * 
 * 3GPP TS 33.108, clause 7.5, table 7.2 and table 7.4; annex B.3.
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
 * Generic failure of the procedure that retrieves IMS media keys from the KMS.
 * Optional on the media-decryption REPORT. Annex B.3 defines no more specific
 * cause. 3GPP TS 33.108, clause 7.5, table 7.4.
 * 
 * @constant
 * @type {number}
 */
export
const MediaSecFailureIndication_genericFailure: _enum_for_MediaSecFailureIndication.genericFailure = _enum_for_MediaSecFailureIndication.genericFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary genericFailure
 * @description
 * 
 * Generic KMS key-retrieval failure on a media-decryption REPORT (3GPP TS
 * 33.108, table 7.4).
 * 
 * @constant
 * @type {number}
 */
export
const genericFailure: _enum_for_MediaSecFailureIndication.genericFailure = MediaSecFailureIndication_genericFailure; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MediaSecFailureIndication: $.ASN1Decoder<MediaSecFailureIndication> = $._decodeEnumerated;
export const _encode_MediaSecFailureIndication: $.ASN1Encoder<MediaSecFailureIndication> = $._encodeEnumerated;


/* eslint-enable */
