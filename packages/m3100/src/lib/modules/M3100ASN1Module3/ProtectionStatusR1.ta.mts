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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ProtectionStatusR1_Item,
    _decode_ProtectionStatusR1_Item,
    _encode_ProtectionStatusR1_Item,
} from '../M3100ASN1Module3/ProtectionStatusR1-Item.ta.mjs';

/**
 * @summary ProtectionStatusR1
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatusR1  ::=
 *   SET OF
 *     CHOICE {noRequest       [0]  NULL,
 *             doNotRevert     [1]  NULL,
 *             manualSwitch
 *               [2]  SEQUENCE {switchStatus  [1]  SwitchStatus,
 *                              relatedUnit   [2]  FromAndToProtectionUnit
 *             },
 *             autoSwitch
 *               [3]  SEQUENCE {switchStatus      [1]  SwitchStatus,
 *                              relatedUnit       [2]  FromAndToProtectionUnit,
 *                              autoSwitchReason  [3]  AutoSwitchReason},
 *             forcedSwitch
 *               [4]  SEQUENCE {switchStatus  [1]  SwitchStatus,
 *                              relatedUnit   [2]  FromAndToProtectionUnit
 *             },
 *             lockout
 *               [5]  CHOICE {switchStatus   [1]  SwitchStatus,
 *                            releaseFailed  [2]  NULL},
 *             releaseFailed   [6]  NULL,
 *             resourceFailed  [7]  NULL,
 *             lockedIn        [8]  NULL}
 * ```
 */
export type ProtectionStatusR1 = ProtectionStatusR1_Item[]; // SetOfType


let _cached_decoder_for_ProtectionStatusR1: $.ASN1Decoder<ProtectionStatusR1> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatusR1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatusR1} The decoded data structure.
 */
export function _decode_ProtectionStatusR1(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatusR1) {
        _cached_decoder_for_ProtectionStatusR1 = $._decodeSetOf<ProtectionStatusR1_Item>(
            () => _decode_ProtectionStatusR1_Item
        );
    }
    return _cached_decoder_for_ProtectionStatusR1(el);
}


let _cached_encoder_for_ProtectionStatusR1: $.ASN1Encoder<ProtectionStatusR1> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatusR1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatusR1, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatusR1(
    value: ProtectionStatusR1,
    elGetter: $.ASN1Encoder<ProtectionStatusR1>
) {
    if (!_cached_encoder_for_ProtectionStatusR1) {
        _cached_encoder_for_ProtectionStatusR1 = $._encodeSetOf<ProtectionStatusR1_Item>(
            () => _encode_ProtectionStatusR1_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionStatusR1(value, elGetter);
}


/* eslint-enable */
