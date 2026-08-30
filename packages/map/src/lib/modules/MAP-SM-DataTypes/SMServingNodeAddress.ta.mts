/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";
// export { NetworkNodeDiameterAddress, _decode_NetworkNodeDiameterAddress, _encode_NetworkNodeDiameterAddress } from "../MAP-CommonDataTypes/NetworkNodeDiameterAddress.ta.mjs";


/**
 * @summary SMServingNodeAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMServingNodeAddress  ::=  CHOICE {
 *     networkNode-Number    [0] ISDN-AddressString,
 *     diameterAddress    [1] NetworkNodeDiameterAddress
 *     }
 * ```
 */
export
type SMServingNodeAddress =
    { networkNode_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { diameterAddress: NetworkNodeDiameterAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SMServingNodeAddress: $.ASN1Decoder<SMServingNodeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMServingNodeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMServingNodeAddress (el: _Element): SMServingNodeAddress {
    if (!_cached_decoder_for_SMServingNodeAddress) { _cached_decoder_for_SMServingNodeAddress = $._decode_inextensible_choice<SMServingNodeAddress>({
    "CONTEXT 0": [ "networkNode_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ],
    "CONTEXT 1": [ "diameterAddress", $._decode_implicit<NetworkNodeDiameterAddress>(() => _decode_NetworkNodeDiameterAddress) ]
}); }
    return _cached_decoder_for_SMServingNodeAddress(el);
}

let _cached_encoder_for_SMServingNodeAddress: $.ASN1Encoder<SMServingNodeAddress> | null = null;

/**
 * @summary Encodes a(n) SMServingNodeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMServingNodeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_SMServingNodeAddress (value: SMServingNodeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMServingNodeAddress) { _cached_encoder_for_SMServingNodeAddress = $._encode_choice<SMServingNodeAddress>({
    "networkNode_Number": $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER),
    "diameterAddress": $._encode_implicit(_TagClass.context, 1, () => _encode_NetworkNodeDiameterAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_SMServingNodeAddress(value, elGetter);
}


/* eslint-enable */
