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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    BridgeRollArg_Item,
    _decode_BridgeRollArg_Item,
    _encode_BridgeRollArg_Item,
} from '../M3100ASN1TypeModule5/BridgeRollArg-Item.ta';
export {
    BridgeRollArg_Item,
    _decode_BridgeRollArg_Item,
    _encode_BridgeRollArg_Item,
} from '../M3100ASN1TypeModule5/BridgeRollArg-Item.ta';

/* START_OF_SYMBOL_DEFINITION BridgeRollArg */
/**
 * @summary BridgeRollArg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollArg  ::=
 *   SEQUENCE OF
 *     SEQUENCE {xc                   ObjectInstance,
 *               bridgeRollFromTp     ObjectInstance,
 *               bridgeRollToTp       ObjectInstance,
 *               bridgeRollOperation
 *                 ENUMERATED {bridge(0), roll(1), releaseBridge(2), ...
 *                             },
 *               additionalInfo       SET OF ManagementExtension OPTIONAL
 *     }
 * ```
 */
export type BridgeRollArg = BridgeRollArg_Item[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BridgeRollArg */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg */
let _cached_decoder_for_BridgeRollArg: $.ASN1Decoder<BridgeRollArg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg */

/* START_OF_SYMBOL_DEFINITION _decode_BridgeRollArg */
/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollArg
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollArg} The decoded data structure.
 */
export function _decode_BridgeRollArg(el: _Element) {
    if (!_cached_decoder_for_BridgeRollArg) {
        _cached_decoder_for_BridgeRollArg = $._decodeSequenceOf<BridgeRollArg_Item>(
            () => _decode_BridgeRollArg_Item
        );
    }
    return _cached_decoder_for_BridgeRollArg(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BridgeRollArg */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg */
let _cached_encoder_for_BridgeRollArg: $.ASN1Encoder<BridgeRollArg> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg */

/* START_OF_SYMBOL_DEFINITION _encode_BridgeRollArg */
/**
 * @summary Encodes a(n) BridgeRollArg into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollArg, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollArg(
    value: BridgeRollArg,
    elGetter: $.ASN1Encoder<BridgeRollArg>
) {
    if (!_cached_encoder_for_BridgeRollArg) {
        _cached_encoder_for_BridgeRollArg = $._encodeSequenceOf<BridgeRollArg_Item>(
            () => _encode_BridgeRollArg_Item,
            $.BER
        );
    }
    return _cached_encoder_for_BridgeRollArg(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BridgeRollArg */

/* eslint-enable */
