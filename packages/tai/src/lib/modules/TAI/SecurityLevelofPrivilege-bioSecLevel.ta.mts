/* eslint-disable */
import {
    INTEGER,
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
import { UniqueIdentifierOfBioParaInfo, _decode_UniqueIdentifierOfBioParaInfo, _encode_UniqueIdentifierOfBioParaInfo } from "../TAI/UniqueIdentifierOfBioParaInfo.ta.mjs";
/**
 * @summary SecurityLevelofPrivilege_bioSecLevel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SecurityLevelofPrivilege-bioSecLevel ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SecurityLevelofPrivilege_bioSecLevel =
    { x520identifier: UniqueIdentifierOfBioParaInfo } /* CHOICE_ALT_ROOT */
    | { simpleidentifier: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SecurityLevelofPrivilege_bioSecLevel: $.ASN1Decoder<SecurityLevelofPrivilege_bioSecLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLevelofPrivilege_bioSecLevel
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLevelofPrivilege_bioSecLevel} The decoded data structure.
 */
export
function _decode_SecurityLevelofPrivilege_bioSecLevel (el: _Element) {
    if (!_cached_decoder_for_SecurityLevelofPrivilege_bioSecLevel) { _cached_decoder_for_SecurityLevelofPrivilege_bioSecLevel = $._decode_inextensible_choice<SecurityLevelofPrivilege_bioSecLevel>({
    "CONTEXT 0": [ "x520identifier", _decode_UniqueIdentifierOfBioParaInfo ],
    "CONTEXT 1": [ "simpleidentifier", $._decodeInteger ]
}); }
    return _cached_decoder_for_SecurityLevelofPrivilege_bioSecLevel(el);
}

let _cached_encoder_for_SecurityLevelofPrivilege_bioSecLevel: $.ASN1Encoder<SecurityLevelofPrivilege_bioSecLevel> | null = null;

/**
 * @summary Encodes a(n) SecurityLevelofPrivilege_bioSecLevel into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLevelofPrivilege_bioSecLevel, encoded as an ASN.1 Element.
 */
export
function _encode_SecurityLevelofPrivilege_bioSecLevel (value: SecurityLevelofPrivilege_bioSecLevel, elGetter: $.ASN1Encoder<SecurityLevelofPrivilege_bioSecLevel>) {
    if (!_cached_encoder_for_SecurityLevelofPrivilege_bioSecLevel) { _cached_encoder_for_SecurityLevelofPrivilege_bioSecLevel = $._encode_choice<SecurityLevelofPrivilege_bioSecLevel>({
    "x520identifier": _encode_UniqueIdentifierOfBioParaInfo,
    "simpleidentifier": $._encodeInteger,
}, $.BER); }
    return _cached_encoder_for_SecurityLevelofPrivilege_bioSecLevel(value, elGetter);
}


/* eslint-enable */
