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

/* START_OF_SYMBOL_DEFINITION _enum_for_BridgeRollArg_Item_bridgeRollOperation */
export enum _enum_for_BridgeRollArg_Item_bridgeRollOperation {
    bridge = 0,
    roll = 1,
    releaseBridge = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_BridgeRollArg_Item_bridgeRollOperation */

/* START_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation */
/**
 * @summary BridgeRollArg_Item_bridgeRollOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollArg-Item-bridgeRollOperation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```@enum {number}
 */
export type BridgeRollArg_Item_bridgeRollOperation =
    | _enum_for_BridgeRollArg_Item_bridgeRollOperation
    | ENUMERATED;
/* END_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation */

/* START_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_bridge */
/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_bridge
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_bridge: BridgeRollArg_Item_bridgeRollOperation = 0; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_bridge */

/* START_OF_SYMBOL_DEFINITION bridge */
/**
 * @summary bridge
 * @constant
 * @type {number}
 */
export const bridge: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_bridge; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION bridge */

/* START_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_roll */
/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_roll
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_roll: BridgeRollArg_Item_bridgeRollOperation = 1; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_roll */

/* START_OF_SYMBOL_DEFINITION roll */
/**
 * @summary roll
 * @constant
 * @type {number}
 */
export const roll: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_roll; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION roll */

/* START_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_releaseBridge */
/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_releaseBridge
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_releaseBridge: BridgeRollArg_Item_bridgeRollOperation = 2; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION BridgeRollArg_Item_bridgeRollOperation_releaseBridge */

/* START_OF_SYMBOL_DEFINITION releaseBridge */
/**
 * @summary releaseBridge
 * @constant
 * @type {number}
 */
export const releaseBridge: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_releaseBridge; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION releaseBridge */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation */
let _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation: $.ASN1Decoder<BridgeRollArg_Item_bridgeRollOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation */

/* START_OF_SYMBOL_DEFINITION _decode_BridgeRollArg_Item_bridgeRollOperation */
/**
 * @summary Decodes an ASN.1 element into a(n) BridgeRollArg_Item_bridgeRollOperation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BridgeRollArg_Item_bridgeRollOperation} The decoded data structure.
 */
export function _decode_BridgeRollArg_Item_bridgeRollOperation(el: _Element) {
    if (!_cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation) {
        _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation =
            $._decodeEnumerated;
    }
    return _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BridgeRollArg_Item_bridgeRollOperation */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation */
let _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation: $.ASN1Encoder<BridgeRollArg_Item_bridgeRollOperation> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation */

/* START_OF_SYMBOL_DEFINITION _encode_BridgeRollArg_Item_bridgeRollOperation */
/**
 * @summary Encodes a(n) BridgeRollArg_Item_bridgeRollOperation into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BridgeRollArg_Item_bridgeRollOperation, encoded as an ASN.1 Element.
 */
export function _encode_BridgeRollArg_Item_bridgeRollOperation(
    value: BridgeRollArg_Item_bridgeRollOperation,
    elGetter: $.ASN1Encoder<BridgeRollArg_Item_bridgeRollOperation>
) {
    if (!_cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation) {
        _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation =
            $._encodeEnumerated;
    }
    return _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_BridgeRollArg_Item_bridgeRollOperation */

/* eslint-enable */
