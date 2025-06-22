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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ProtectionStatus_Item,
    _decode_ProtectionStatus_Item,
    _encode_ProtectionStatus_Item,
} from '../SDHProtASN1/ProtectionStatus-Item.ta.mjs';

/**
 * @summary ProtectionStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProtectionStatus  ::=
 *   SET OF
 *     CHOICE {noRequest                          [0]  NULL,
 *             doNotRevert                        [1]  NULL,
 *             manualSwitch
 *               [2]  SEQUENCE {requestSource   [0]  RequestSource OPTIONAL,
 *                              switchStatus    [1]  SwitchStatus,
 *                              relatedChannel  [2]  FromAndToProtectionUnit
 *             },
 *             autoSwitch
 *               [3]  SEQUENCE {requestSource     [0]  RequestSource OPTIONAL,
 *                              switchStatus      [1]  SwitchStatus,
 *                              relatedChannel    [2]  FromAndToProtectionUnit,
 *                              autoSwitchReason  [3]  AutoSwitchReason},
 *             forcedSwitch
 *               [4]  SEQUENCE {requestSource   [0]  RequestSource OPTIONAL,
 *                              switchStatus    [1]  SwitchStatus,
 *                              relatedChannel  [2]  FromAndToProtectionUnit
 *             },
 *             lockout
 *               [5]  SEQUENCE {requestSource  [0]  RequestSource OPTIONAL,
 *                              switchStatus   [1]  SwitchStatus},
 *             releaseFailed                      [6]  NULL,
 *             protectionFailCondApsInvalid       [7]  BOOLEAN,
 *             protectionFailCondChannelMismatch  [8]  BOOLEAN}
 * ```
 */
export type ProtectionStatus = ProtectionStatus_Item[]; // SetOfType


let _cached_decoder_for_ProtectionStatus: $.ASN1Decoder<ProtectionStatus> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ProtectionStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProtectionStatus} The decoded data structure.
 */
export function _decode_ProtectionStatus(el: _Element) {
    if (!_cached_decoder_for_ProtectionStatus) {
        _cached_decoder_for_ProtectionStatus = $._decodeSetOf<ProtectionStatus_Item>(
            () => _decode_ProtectionStatus_Item
        );
    }
    return _cached_decoder_for_ProtectionStatus(el);
}


let _cached_encoder_for_ProtectionStatus: $.ASN1Encoder<ProtectionStatus> | null = null;


/**
 * @summary Encodes a(n) ProtectionStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtectionStatus, encoded as an ASN.1 Element.
 */
export function _encode_ProtectionStatus(
    value: ProtectionStatus,
    elGetter: $.ASN1Encoder<ProtectionStatus>
) {
    if (!_cached_encoder_for_ProtectionStatus) {
        _cached_encoder_for_ProtectionStatus = $._encodeSetOf<ProtectionStatus_Item>(
            () => _encode_ProtectionStatus_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ProtectionStatus(value, elGetter);
}


/* eslint-enable */
