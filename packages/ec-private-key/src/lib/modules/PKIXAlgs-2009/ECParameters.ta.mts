/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ECParameters
 * @description
 *
 * Elliptic curve domain parameters for PKIX algorithm identifiers
 * ([RFC 5480 §2.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1)).
 * Carried in module `PKIXAlgs-2009`
 * ([RFC 5912](https://datatracker.ietf.org/doc/html/rfc5912)) and
 * imported by `ECPrivateKey`
 * ([RFC 5915](https://datatracker.ietf.org/doc/html/rfc5915)).
 *
 * This implementation exposes only the `namedCurve` alternative. An
 * OBJECT IDENTIFIER names a full set of elliptic curve domain
 * parameters; that choice MUST be supported
 * ([RFC 5480 §2.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1),
 * [§2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1)).
 *
 * > -- implicitCurve and specifiedCurve MUST NOT be used in PKIX.
 * > -- Details for SpecifiedECDomain can be found in [X9.62].
 * > -- Any future additions to this CHOICE should be coordinated
 * > -- with ANSI X9.
 * >
 * > — [RFC 5480 §2.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECParameters  ::=  CHOICE {
 * namedCurve      CURVE.&id({NamedCurve})
 * -- implicitCurve   NULL
 * -- implicitCurve MUST NOT be used in PKIX
 * -- specifiedCurve  SpecifiedCurve
 * -- specifiedCurve MUST NOT be used in PKIX
 * -- Details for specifiedCurve can be found in [X9.62]
 * -- Any future additions to this CHOICE should be coordinated
 * -- with ANSI X.9.
 * }
 * ```
 */
export
type ECParameters =
    { namedCurve: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_ECParameters: $.ASN1Decoder<ECParameters> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ECParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECParameters} The decoded data structure.
 */
export
function _decode_ECParameters (el: _Element): ECParameters {
    if (!_cached_decoder_for_ECParameters) { _cached_decoder_for_ECParameters = $._decode_inextensible_choice<ECParameters>({
    "UNIVERSAL 6": [ "namedCurve", $._decodeObjectIdentifier ]
}); }
    return _cached_decoder_for_ECParameters(el);
}


let _cached_encoder_for_ECParameters: $.ASN1Encoder<ECParameters> | null = null;


/**
 * @summary Encodes a(n) ECParameters into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ECParameters (value: ECParameters, elGetter: $.ASN1Encoder<ECParameters>): _Element {
    if (!_cached_encoder_for_ECParameters) { _cached_encoder_for_ECParameters = $._encode_choice<ECParameters>({
    "namedCurve": $._encodeObjectIdentifier,
}, $.DER); }
    return _cached_encoder_for_ECParameters(value, elGetter);
}


/* eslint-enable */
