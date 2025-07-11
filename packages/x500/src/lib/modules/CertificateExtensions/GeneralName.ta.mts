/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    IA5String,
    INSTANCE_OF,
    OBJECT_IDENTIFIER,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    EDIPartyName,
    _decode_EDIPartyName,
    _encode_EDIPartyName,
} from "../CertificateExtensions/EDIPartyName.ta.mjs";
import {
    Name,
    _decode_Name,
    _encode_Name,
} from "../InformationFramework/Name.ta.mjs";
import {
    ORAddress,
    _decode_ORAddress,
    _encode_ORAddress,
} from "../PkiPmiExternalDataTypes/ORAddress.ta.mjs";
/**
 * @summary GeneralName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GeneralName  ::=  CHOICE {
 *   otherName                  [0]  INSTANCE OF OTHER-NAME,
 *   rfc822Name                 [1]  IA5String,
 *   dNSName                    [2]  IA5String,
 *   x400Address                [3]  ORAddress,
 *   directoryName              [4]  Name,
 *   ediPartyName               [5]  EDIPartyName,
 *   uniformResourceIdentifier  [6]  IA5String,
 *   iPAddress                  [7]  OCTET STRING,
 *   registeredID               [8]  OBJECT IDENTIFIER,
 *   ... }
 * ```
 */
export type GeneralName =
    | { otherName: INSTANCE_OF } /* CHOICE_ALT_ROOT */
    | { rfc822Name: IA5String } /* CHOICE_ALT_ROOT */
    | { dNSName: IA5String } /* CHOICE_ALT_ROOT */
    | { x400Address: ORAddress } /* CHOICE_ALT_ROOT */
    | { directoryName: Name } /* CHOICE_ALT_ROOT */
    | { ediPartyName: EDIPartyName } /* CHOICE_ALT_ROOT */
    | { uniformResourceIdentifier: IA5String } /* CHOICE_ALT_ROOT */
    | { iPAddress: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { registeredID: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_GeneralName: $.ASN1Decoder<GeneralName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GeneralName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GeneralName} The decoded data structure.
 */
export function _decode_GeneralName(el: _Element): GeneralName {
    if (!_cached_decoder_for_GeneralName) {
        _cached_decoder_for_GeneralName = $._decode_extensible_choice<GeneralName>(
            {
                "CONTEXT 0": [
                    "otherName",
                    $._decode_implicit<INSTANCE_OF>(() => $._decodeInstanceOf),
                ],
                "CONTEXT 1": [
                    "rfc822Name",
                    $._decode_implicit<IA5String>(() => $._decodeIA5String),
                ],
                "CONTEXT 2": [
                    "dNSName",
                    $._decode_implicit<IA5String>(() => $._decodeIA5String),
                ],
                "CONTEXT 3": [
                    "x400Address",
                    $._decode_implicit<ORAddress>(() => _decode_ORAddress),
                ],
                "CONTEXT 4": [
                    "directoryName",
                    $._decode_explicit<Name>(() => _decode_Name),
                ],
                "CONTEXT 5": [
                    "ediPartyName",
                    $._decode_implicit<EDIPartyName>(
                        () => _decode_EDIPartyName
                    ),
                ],
                "CONTEXT 6": [
                    "uniformResourceIdentifier",
                    $._decode_implicit<IA5String>(() => $._decodeIA5String),
                ],
                "CONTEXT 7": [
                    "iPAddress",
                    $._decode_implicit<OCTET_STRING>(
                        () => $._decodeOctetString
                    ),
                ],
                "CONTEXT 8": [
                    "registeredID",
                    $._decode_implicit<OBJECT_IDENTIFIER>(
                        () => $._decodeObjectIdentifier
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_GeneralName(el);
}

let _cached_encoder_for_GeneralName: $.ASN1Encoder<GeneralName> | null = null;

/**
 * @summary Encodes a(n) GeneralName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GeneralName, encoded as an ASN.1 Element.
 */
export function _encode_GeneralName(
    value: GeneralName,
    elGetter: $.ASN1Encoder<GeneralName>
): _Element {
    if (!_cached_encoder_for_GeneralName) {
        _cached_encoder_for_GeneralName = $._encode_choice<GeneralName>(
            {
                otherName: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => $._encodeInstanceOf,
                    $.DER
                ),
                rfc822Name: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => $._encodeIA5String,
                    $.DER
                ),
                dNSName: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => $._encodeIA5String,
                    $.DER
                ),
                x400Address: $._encode_implicit(
                    _TagClass.context,
                    3,
                    () => _encode_ORAddress,
                    $.DER
                ),
                directoryName: $._encode_explicit(
                    _TagClass.context,
                    4,
                    () => _encode_Name,
                    $.DER
                ),
                ediPartyName: $._encode_implicit(
                    _TagClass.context,
                    5,
                    () => _encode_EDIPartyName,
                    $.DER
                ),
                uniformResourceIdentifier: $._encode_implicit(
                    _TagClass.context,
                    6,
                    () => $._encodeIA5String,
                    $.DER
                ),
                iPAddress: $._encode_implicit(
                    _TagClass.context,
                    7,
                    () => $._encodeOctetString,
                    $.DER
                ),
                registeredID: $._encode_implicit(
                    _TagClass.context,
                    8,
                    () => $._encodeObjectIdentifier,
                    $.DER
                ),
            },
            $.DER
        );
    }
    return _cached_encoder_for_GeneralName(value, elGetter);
}


/* eslint-enable */
