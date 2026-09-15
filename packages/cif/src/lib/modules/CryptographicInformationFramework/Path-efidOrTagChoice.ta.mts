/* eslint-disable */
import {
    OCTET_STRING,
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
import { Path_efidOrTagChoice_tagRef, _decode_Path_efidOrTagChoice_tagRef, _encode_Path_efidOrTagChoice_tagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-tagRef.ta.mjs";
// export { Path_efidOrTagChoice_tagRef, _decode_Path_efidOrTagChoice_tagRef, _encode_Path_efidOrTagChoice_tagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-tagRef.ta.mjs";
import { Path_efidOrTagChoice_appFileRef, _decode_Path_efidOrTagChoice_appFileRef, _encode_Path_efidOrTagChoice_appFileRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appFileRef.ta.mjs";
// export { Path_efidOrTagChoice_appFileRef, _decode_Path_efidOrTagChoice_appFileRef, _encode_Path_efidOrTagChoice_appFileRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appFileRef.ta.mjs";
import { Path_efidOrTagChoice_appTagRef, _decode_Path_efidOrTagChoice_appTagRef, _encode_Path_efidOrTagChoice_appTagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appTagRef.ta.mjs";
// export { Path_efidOrTagChoice_appTagRef, _decode_Path_efidOrTagChoice_appTagRef, _encode_Path_efidOrTagChoice_appTagRef } from "../CryptographicInformationFramework/Path-efidOrTagChoice-appTagRef.ta.mjs";


/**
 * @summary Path_efidOrTagChoice
 * @description
 * 
 * `efidOrPath` encoding: empty = no file; 1 byte = short EF identifier in the
 * most significant five bits (b3–b1 = 0); 2 bytes = file identifier; even
 * length > 2 = absolute or relative path (concatenation of Fids); odd length >
 * 2 = qualified path (ISO/IEC 7816-4). `aid`/`tag` address logical structures
 * in an application context. ISO/IEC 7816-15:2016 §8.2.5.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Path-efidOrTagChoice ::= CHOICE {
 *     efidOrPath      OCTET STRING,
 *     tagRef          [0] SEQUENCE {
 *         tag         OCTET STRING,
 *         efidOrPath  OCTET STRING OPTIONAL
 *     },
 *     appFileRef      [1] SEQUENCE {
 *         aid         [APPLICATION 15] OCTET STRING,
 *         efidOrpath  OCTET STRING
 *     },
 *     appTagRef       [2] SEQUENCE {
 *         aid         [APPLICATION 15] OCTET STRING,
 *         tag         OCTET STRING,
 *         efidOrPath  OCTET STRING OPTIONAL
 *     }
 * }
 * ```
 */
export
type Path_efidOrTagChoice =
    { efidOrPath: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { tagRef: Path_efidOrTagChoice_tagRef } /* CHOICE_ALT_ROOT */
    | { appFileRef: Path_efidOrTagChoice_appFileRef } /* CHOICE_ALT_ROOT */
    | { appTagRef: Path_efidOrTagChoice_appTagRef } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Path_efidOrTagChoice: $.ASN1Decoder<Path_efidOrTagChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Path_efidOrTagChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Path_efidOrTagChoice (el: _Element): Path_efidOrTagChoice {
    if (!_cached_decoder_for_Path_efidOrTagChoice) { _cached_decoder_for_Path_efidOrTagChoice = $._decode_inextensible_choice<Path_efidOrTagChoice>({
    "UNIVERSAL 4": [ "efidOrPath", $._decodeOctetString ],
    "CONTEXT 0": [ "tagRef", $._decode_implicit<Path_efidOrTagChoice_tagRef>(() => _decode_Path_efidOrTagChoice_tagRef) ],
    "CONTEXT 1": [ "appFileRef", $._decode_implicit<Path_efidOrTagChoice_appFileRef>(() => _decode_Path_efidOrTagChoice_appFileRef) ],
    "CONTEXT 2": [ "appTagRef", $._decode_implicit<Path_efidOrTagChoice_appTagRef>(() => _decode_Path_efidOrTagChoice_appTagRef) ]
}); }
    return _cached_decoder_for_Path_efidOrTagChoice(el);
}

let _cached_encoder_for_Path_efidOrTagChoice: $.ASN1Encoder<Path_efidOrTagChoice> | null = null;

/**
 * @summary Encodes a(n) Path_efidOrTagChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Path_efidOrTagChoice, encoded as an ASN.1 Element.
 */
export
function _encode_Path_efidOrTagChoice (value: Path_efidOrTagChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Path_efidOrTagChoice) { _cached_encoder_for_Path_efidOrTagChoice = $._encode_choice<Path_efidOrTagChoice>({
    "efidOrPath": $._encodeOctetString,
    "tagRef": $._encode_implicit(_TagClass.context, 0, () => _encode_Path_efidOrTagChoice_tagRef, $.BER),
    "appFileRef": $._encode_implicit(_TagClass.context, 1, () => _encode_Path_efidOrTagChoice_appFileRef, $.BER),
    "appTagRef": $._encode_implicit(_TagClass.context, 2, () => _encode_Path_efidOrTagChoice_appTagRef, $.BER),
}, $.BER); }
    return _cached_encoder_for_Path_efidOrTagChoice(value, elGetter);
}


/* eslint-enable */
