/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFTrigger, _decode_SMFTrigger, _encode_SMFTrigger } from "../CHFChargingDataTypes/SMFTrigger.ta.mjs";
// export { SMFTrigger, SMFTrigger_startOfPDUSession /* IMPORTED_LONG_NAMED_INTEGER */, startOfPDUSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_startOfServiceDataFlowNoSession /* IMPORTED_LONG_NAMED_INTEGER */, startOfServiceDataFlowNoSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSChange /* IMPORTED_LONG_NAMED_INTEGER */, qoSChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_userLocationChange /* IMPORTED_LONG_NAMED_INTEGER */, userLocationChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_servingNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, servingNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_presenceReportingAreaChange /* IMPORTED_LONG_NAMED_INTEGER */, presenceReportingAreaChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_threeGPPPSDataOffStatusChange /* IMPORTED_LONG_NAMED_INTEGER */, threeGPPPSDataOffStatusChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_tariffTimeChange /* IMPORTED_LONG_NAMED_INTEGER */, tariffTimeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_uETimeZoneChange /* IMPORTED_LONG_NAMED_INTEGER */, uETimeZoneChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pLMNChange /* IMPORTED_LONG_NAMED_INTEGER */, pLMNChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_rATTypeChange /* IMPORTED_LONG_NAMED_INTEGER */, rATTypeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_sessionAMBRChange /* IMPORTED_LONG_NAMED_INTEGER */, sessionAMBRChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_additionOfUPF /* IMPORTED_LONG_NAMED_INTEGER */, additionOfUPF /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_removalOfUPF /* IMPORTED_LONG_NAMED_INTEGER */, removalOfUPF /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_gFBRGuaranteedStatusChange /* IMPORTED_LONG_NAMED_INTEGER */, gFBRGuaranteedStatusChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataEventLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataEventLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryChargingConditionChanges /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryChargingConditionChanges /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataEventLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataEventLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_timeThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, timeThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_volumeThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, volumeThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, unitThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_timeQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, timeQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_volumeQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, volumeQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, unitQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_expiryOfQuotaValidityTime /* IMPORTED_LONG_NAMED_INTEGER */, expiryOfQuotaValidityTime /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_reAuthorizationRequest /* IMPORTED_LONG_NAMED_INTEGER */, reAuthorizationRequest /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_startOfServiceDataFlowNoValidQuota /* IMPORTED_LONG_NAMED_INTEGER */, startOfServiceDataFlowNoValidQuota /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_otherQuotaType /* IMPORTED_LONG_NAMED_INTEGER */, otherQuotaType /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_terminationOfServiceDataFlow /* IMPORTED_LONG_NAMED_INTEGER */, terminationOfServiceDataFlow /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_managementIntervention /* IMPORTED_LONG_NAMED_INTEGER */, managementIntervention /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitCountInactivityTimer /* IMPORTED_LONG_NAMED_INTEGER */, unitCountInactivityTimer /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_endOfPDUSession /* IMPORTED_LONG_NAMED_INTEGER */, endOfPDUSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_cHFResponseWithSessionTermination /* IMPORTED_LONG_NAMED_INTEGER */, cHFResponseWithSessionTermination /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_cHFAbortRequest /* IMPORTED_LONG_NAMED_INTEGER */, cHFAbortRequest /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSFlowExpiryDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, qoSFlowExpiryDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSFlowExpiryDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, qoSFlowExpiryDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMFTrigger, _encode_SMFTrigger } from "../CHFChargingDataTypes/SMFTrigger.ta.mjs";


/**
 * @summary Trigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trigger     ::=  CHOICE {
 *    sMFTrigger     [0] IMPLICIT SMFTrigger}
 * ```
 */
export
type Trigger =
    { sMFTrigger: SMFTrigger } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Trigger: $.ASN1Decoder<Trigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Trigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Trigger (el: _Element): Trigger {
    if (!_cached_decoder_for_Trigger) { _cached_decoder_for_Trigger = $._decode_inextensible_choice<Trigger>({
    "CONTEXT 0": [ "sMFTrigger", $._decode_implicit<SMFTrigger>(() => _decode_SMFTrigger) ]
}); }
    return _cached_decoder_for_Trigger(el);
}

let _cached_encoder_for_Trigger: $.ASN1Encoder<Trigger> | null = null;

/**
 * @summary Encodes a(n) Trigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trigger, encoded as an ASN.1 Element.
 */
export
function _encode_Trigger (value: Trigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Trigger) { _cached_encoder_for_Trigger = $._encode_choice<Trigger>({
    "sMFTrigger": $._encode_implicit(_TagClass.context, 0, () => _encode_SMFTrigger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Trigger(value, elGetter);
}


/* eslint-enable */
