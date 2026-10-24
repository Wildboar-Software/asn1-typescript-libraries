/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PendingNotification, _decode_PendingNotification, _encode_PendingNotification } from "../SGP32Definitions/PendingNotification.ta.mjs";
import { ProvideEimPackageResult, _decode_ProvideEimPackageResult, _encode_ProvideEimPackageResult } from "../SGP32Definitions/ProvideEimPackageResult.ta.mjs";


/**
 * @summary HandleNotificationEsipa
 * @description
 * 
 * ESipa.HandleNotification request. No response structure is defined. The IPA
 * reports that a Profile was installed, enabled, disabled, or deleted,
 * including a Fallback Profile, and MAY report disablement of an Emergency
 * Profile. It MAY also report a successful installation with a
 * `ProfileInstallationResult`, a `compactProfileInstallationResult`, or a
 * `ProfileDownloadTriggerResult`. Exactly one alternative is present.
 * 
 * Select `pendingNotification` to deliver one Notification, in full or compact
 * form, to a Notification Receiver. For an indirect Profile download, a
 * `ProfileInstallationResult` or `compactProfileInstallationResult` is
 * correlated to the earlier ESipa.GetBoundProfilePackage by the SM-DP+
 * TransactionID. For `OtherSignedNotification` or
 * `compactOtherSignedNotification`, the receiver address is the
 * NotificationAddress in the NotificationMetaData. The eIM restores a compact
 * Notification from data it already holds, then forwards the Notification.
 * 
 * Select `provideEimPackageResult` to deliver an eIM Package Result. In this
 * call that object SHALL NOT contain `ePRAndNotifications`. If it contains
 * `EuiccPackageResult`, the eIM verifies the eUICC signature with
 * PK.EUICC.ECDSA and discards the input when the signature is invalid or the
 * sequence number is not greater than the expected sequence number. Otherwise
 * it sets the expected sequence number to the received value and manages
 * pending eIM Packages. An `IpaEuiccDataResponse` is stored for later use. A
 * `profileDownloadTriggerResult` or `eimPackageError` causes the eIM to manage
 * pending eIM Packages.
 * 
 * SGP.32 v1.2, sections 5.14.7 and 6.3.2.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandleNotificationEsipa  ::=  [61] CHOICE { -- Tag 'BF3D'
 *     pendingNotification [0] PendingNotification, -- A Notification to be delivered to a Notification Receiver, possibly in compact format
 *     provideEimPackageResult [80] ProvideEimPackageResult -- Tag 'BF50'
 * }
 * ```
 */
export
type HandleNotificationEsipa =
    { pendingNotification: PendingNotification } /* CHOICE_ALT_ROOT */
    | { provideEimPackageResult: ProvideEimPackageResult } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_HandleNotificationEsipa: $.ASN1Decoder<HandleNotificationEsipa> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) HandleNotificationEsipa
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_HandleNotificationEsipa (el: _Element): HandleNotificationEsipa {
    if (!_cached_decoder_for_HandleNotificationEsipa) { _cached_decoder_for_HandleNotificationEsipa = $._decode_explicit<HandleNotificationEsipa>(() => $._decode_inextensible_choice<HandleNotificationEsipa>({
    "CONTEXT 0": [ "pendingNotification", $._decode_explicit<PendingNotification>(() => _decode_PendingNotification) ],
    "CONTEXT 80": [ "provideEimPackageResult", $._decode_implicit<ProvideEimPackageResult>(() => _decode_ProvideEimPackageResult) ]
})); }
    return _cached_decoder_for_HandleNotificationEsipa(el);
}

let _cached_encoder_for_HandleNotificationEsipa: $.ASN1Encoder<HandleNotificationEsipa> | null = null;

/**
 * @summary Encodes a(n) HandleNotificationEsipa into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The HandleNotificationEsipa, encoded as an ASN.1 Element.
 */
export
function _encode_HandleNotificationEsipa (value: HandleNotificationEsipa, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_HandleNotificationEsipa) { _cached_encoder_for_HandleNotificationEsipa = $._encode_explicit(_TagClass.context, 61, () => $._encode_choice<HandleNotificationEsipa>({
    "pendingNotification": $._encode_explicit(_TagClass.context, 0, () => _encode_PendingNotification, $.BER),
    "provideEimPackageResult": $._encode_implicit(_TagClass.context, 80, () => _encode_ProvideEimPackageResult, $.BER),
}, $.BER), $.BER); }
    return _cached_encoder_for_HandleNotificationEsipa(value, elGetter);
}


/* eslint-enable */
