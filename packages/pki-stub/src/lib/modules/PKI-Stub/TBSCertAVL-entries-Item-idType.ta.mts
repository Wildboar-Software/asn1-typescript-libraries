/* eslint-disable */
import {
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
import {
    PKCertIdentifier,
    _decode_PKCertIdentifier,
    _encode_PKCertIdentifier,
} from "../PKI-Stub/PKCertIdentifier.ta.mjs";
import {
    DistinguishedName,
    _decode_DistinguishedName,
    _encode_DistinguishedName,
} from "../PKI-Stub/DistinguishedName.ta.mjs";

/**
 * @summary TBSCertAVL_entries_Item_idType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TBSCertAVL-entries-Item-idType ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TBSCertAVL_entries_Item_idType =
    | { certIdentifier: PKCertIdentifier } /* CHOICE_ALT_ROOT */
    | { entityGroup: DistinguishedName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Decoder<TBSCertAVL_entries_Item_idType> | null =
    null;

/**
 * @summary Decodes an ASN.1 element into a(n) TBSCertAVL_entries_Item_idType
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TBSCertAVL_entries_Item_idType} The decoded data structure.
 */
export function _decode_TBSCertAVL_entries_Item_idType(el: _Element): TBSCertAVL_entries_Item_idType {
    if (!_cached_decoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_decoder_for_TBSCertAVL_entries_Item_idType =
            $._decode_extensible_choice<TBSCertAVL_entries_Item_idType>({
                "CONTEXT 0": [
                    "certIdentifier",
                    $._decode_explicit<PKCertIdentifier>(
                        () => _decode_PKCertIdentifier
                    ),
                ],
                "UNIVERSAL 16": ["entityGroup", _decode_DistinguishedName],
            });
    }
    return _cached_decoder_for_TBSCertAVL_entries_Item_idType(el);
}

let _cached_encoder_for_TBSCertAVL_entries_Item_idType: $.ASN1Encoder<TBSCertAVL_entries_Item_idType> | null =
    null;

/**
 * @summary Encodes a(n) TBSCertAVL_entries_Item_idType into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TBSCertAVL_entries_Item_idType, encoded as an ASN.1 Element.
 */
export function _encode_TBSCertAVL_entries_Item_idType(value: TBSCertAVL_entries_Item_idType, elGetter: $.ASN1Encoder<TBSCertAVL_entries_Item_idType>): _Element {
    if (!_cached_encoder_for_TBSCertAVL_entries_Item_idType) {
        _cached_encoder_for_TBSCertAVL_entries_Item_idType =
            $._encode_choice<TBSCertAVL_entries_Item_idType>(
                {
                    certIdentifier: $._encode_explicit(
                        _TagClass.context,
                        0,
                        () => _encode_PKCertIdentifier,
                        $.BER
                    ),
                    entityGroup: _encode_DistinguishedName,
                },
                $.BER
            );
    }
    return _cached_encoder_for_TBSCertAVL_entries_Item_idType(value, elGetter);
}


/* eslint-enable */
