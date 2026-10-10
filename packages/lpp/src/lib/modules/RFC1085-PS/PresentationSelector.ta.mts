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
 * Presentation selector: an uninterpreted octet string, possibly
 * of length zero
 * ([RFC 1085 §5](https://datatracker.ietf.org/doc/html/rfc1085#section-5)).
 *
 * The provider preserves this value and otherwise ignores
 * selectors. Transport and session selectors are outside these
 * PDUs. The calling presentation address may be an ephemeral
 * address chosen locally
 * ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
 * item 1).
 *
 * The simplest directory mapping leaves the selector empty. A
 * local table may supply one so that a proxy agent can identify
 * a non-IP device; the table and the proxy agree on the octets
 * ([§11](https://datatracker.ietf.org/doc/html/rfc1085#section-11)).
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
