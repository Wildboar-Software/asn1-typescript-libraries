/* eslint-disable */
import {
    UTCTime,
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Time
 * @description
 *
 * A time used in a public-key certificate {@link Validity} period: either
 * `UTCTime` or `GeneralizedTime`.
 *
 * Before comparing a `UTCTime` value, expand the two-digit year: 00–49 means
 * 2000–2049; 50–99 means 1950–1999. UTCTime shall not be used for dates after
 * 2049. Some older implementations cannot accept `GeneralizedTime` in
 * certificates.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  CHOICE {
 *   utcTime          UTCTime,
 *   generalizedTime  GeneralizedTime }
 * ```
 */
export type Time =
    | { utcTime: UTCTime } /* CHOICE_ALT_ROOT */
    | { generalizedTime: GeneralizedTime } /* CHOICE_ALT_ROOT */;

/**
 * @summary Decodes an ASN.1 element into a(n) Time
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Time} The decoded data structure.
 */
export const _decode_Time: $.ASN1Decoder<Time> = $._decode_inextensible_choice<Time>({
    "UNIVERSAL 23": ["utcTime", $._decodeUTCTime],
    "UNIVERSAL 24": ["generalizedTime", $._decodeGeneralizedTime],
});

/**
 * @summary Encodes a(n) Time into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Time, encoded as an ASN.1 Element.
 */
export const _encode_Time: $.ASN1Encoder<Time> = $._encode_choice<Time>(
    {
        utcTime: $._encodeUTCTime,
        generalizedTime: $._encodeGeneralizedTime,
    },
    $.DER
);

/* eslint-enable */
