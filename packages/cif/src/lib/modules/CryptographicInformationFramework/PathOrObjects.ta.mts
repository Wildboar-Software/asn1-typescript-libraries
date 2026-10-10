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
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";


/**
 * @summary PathOrObjects
 * @description
 * 
 * Sequence of objects either in another file (`path`) or inline in EF.OD
 * (`objects`). The referenced file is the concatenation of DER values of the
 * given type; any number of 'FF' or '00' octets may pad unused or deleted
 * space. The `path` alternative is strongly recommended. ISO/IEC 7816-15:2016
 * §8.2.7, §7.5.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathOrObjects {ObjectType}  ::=  CHOICE {
 *        path        Path,
 *        objects [0] SEQUENCE OF ObjectType,
 *        ... -- For future extensions
 * }
 * ```
 */
export
type PathOrObjects<ObjectType> =
    { path: Path } /* CHOICE_ALT_ROOT */
    | { objects: ObjectType[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PathOrObjects
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PathOrObjects<ObjectType>(_decode_ObjectType: $.ASN1Decoder<ObjectType>): $.ASN1Decoder<PathOrObjects<ObjectType>> {
    return $._decode_extensible_choice<PathOrObjects<ObjectType>>({
    "UNIVERSAL 16": [ "path", _decode_Path ],
    "CONTEXT 0": [ "objects", $._decode_implicit<ObjectType[]>(() => $._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)) ]
});
}


/**
 * @summary Returns a function that will encode a(n) PathOrObjects into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PathOrObjects as an ASN.1 element.
 */
export
function _get_encoder_for_PathOrObjects<ObjectType>(_encode_ObjectType: $.ASN1Encoder<ObjectType>): $.ASN1Encoder<PathOrObjects<ObjectType>> {
    return $._encode_choice<PathOrObjects<ObjectType>>({
    "path": _encode_Path,
    "objects": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectType>(() => _encode_ObjectType, $.BER), $.BER),
}, $.BER);
}

/* eslint-enable */
