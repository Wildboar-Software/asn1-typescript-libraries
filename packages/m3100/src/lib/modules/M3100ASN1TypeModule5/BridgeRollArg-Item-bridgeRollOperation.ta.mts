/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';


export enum _enum_for_BridgeRollArg_Item_bridgeRollOperation {
    bridge = 0,
    roll = 1,
    releaseBridge = 2,
}


/**
 * @summary BridgeRollArg_Item_bridgeRollOperation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BridgeRollArg-Item-bridgeRollOperation ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export type BridgeRollArg_Item_bridgeRollOperation =
    | _enum_for_BridgeRollArg_Item_bridgeRollOperation
    | ENUMERATED;


/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_bridge
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_bridge: BridgeRollArg_Item_bridgeRollOperation = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary bridge
 * @constant
 * @type {number}
 */
export const bridge: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_bridge; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_roll
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_roll: BridgeRollArg_Item_bridgeRollOperation = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary roll
 * @constant
 * @type {number}
 */
export const roll: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_roll; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary BridgeRollArg_Item_bridgeRollOperation_releaseBridge
 * @constant
 * @type {number}
 */
export const BridgeRollArg_Item_bridgeRollOperation_releaseBridge: BridgeRollArg_Item_bridgeRollOperation = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary releaseBridge
 * @constant
 * @type {number}
 */
export const releaseBridge: BridgeRollArg_Item_bridgeRollOperation = BridgeRollArg_Item_bridgeRollOperation_releaseBridge; /* SHORT_NAMED_ENUMERATED_VALUE */


let _cached_decoder_for_BridgeRollArg_Item_bridgeRollOperation: $.ASN1Decoder<BridgeRollArg_Item_bridgeRollOperation> | null = null;


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


let _cached_encoder_for_BridgeRollArg_Item_bridgeRollOperation: $.ASN1Encoder<BridgeRollArg_Item_bridgeRollOperation> | null = null;


/**
 * @summary Encodes a(n) BridgeRollArg_Item_bridgeRollOperation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
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


/* eslint-enable */
