/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFTrigger, _decode_SMFTrigger, _encode_SMFTrigger } from "../CHFChargingDataTypes/SMFTrigger.ta.mjs";
// export { SMFTrigger, SMFTrigger_startOfPDUSession /* IMPORTED_LONG_NAMED_INTEGER */, startOfPDUSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_startOfServiceDataFlowNoSession /* IMPORTED_LONG_NAMED_INTEGER */, startOfServiceDataFlowNoSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSChange /* IMPORTED_LONG_NAMED_INTEGER */, qoSChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_userLocationChange /* IMPORTED_LONG_NAMED_INTEGER */, userLocationChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_servingNodeChange /* IMPORTED_LONG_NAMED_INTEGER */, servingNodeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_presenceReportingAreaChange /* IMPORTED_LONG_NAMED_INTEGER */, presenceReportingAreaChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_threeGPPPSDataOffStatusChange /* IMPORTED_LONG_NAMED_INTEGER */, threeGPPPSDataOffStatusChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_tariffTimeChange /* IMPORTED_LONG_NAMED_INTEGER */, tariffTimeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_uETimeZoneChange /* IMPORTED_LONG_NAMED_INTEGER */, uETimeZoneChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pLMNChange /* IMPORTED_LONG_NAMED_INTEGER */, pLMNChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_rATTypeChange /* IMPORTED_LONG_NAMED_INTEGER */, rATTypeChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_sessionAMBRChange /* IMPORTED_LONG_NAMED_INTEGER */, sessionAMBRChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_additionOfUPF /* IMPORTED_LONG_NAMED_INTEGER */, additionOfUPF /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_removalOfUPF /* IMPORTED_LONG_NAMED_INTEGER */, removalOfUPF /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_gFBRGuaranteedStatusChange /* IMPORTED_LONG_NAMED_INTEGER */, gFBRGuaranteedStatusChange /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryDataEventLimit /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryDataEventLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_pDUSessionExpiryChargingConditionChanges /* IMPORTED_LONG_NAMED_INTEGER */, pDUSessionExpiryChargingConditionChanges /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_ratingGroupDataEventLimit /* IMPORTED_LONG_NAMED_INTEGER */, ratingGroupDataEventLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_timeThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, timeThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_volumeThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, volumeThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitThresholdReached /* IMPORTED_LONG_NAMED_INTEGER */, unitThresholdReached /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_timeQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, timeQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_volumeQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, volumeQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitQuotaExhausted /* IMPORTED_LONG_NAMED_INTEGER */, unitQuotaExhausted /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_expiryOfQuotaValidityTime /* IMPORTED_LONG_NAMED_INTEGER */, expiryOfQuotaValidityTime /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_reAuthorizationRequest /* IMPORTED_LONG_NAMED_INTEGER */, reAuthorizationRequest /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_startOfServiceDataFlowNoValidQuota /* IMPORTED_LONG_NAMED_INTEGER */, startOfServiceDataFlowNoValidQuota /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_otherQuotaType /* IMPORTED_LONG_NAMED_INTEGER */, otherQuotaType /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_terminationOfServiceDataFlow /* IMPORTED_LONG_NAMED_INTEGER */, terminationOfServiceDataFlow /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_managementIntervention /* IMPORTED_LONG_NAMED_INTEGER */, managementIntervention /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_unitCountInactivityTimer /* IMPORTED_LONG_NAMED_INTEGER */, unitCountInactivityTimer /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_endOfPDUSession /* IMPORTED_LONG_NAMED_INTEGER */, endOfPDUSession /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_cHFResponseWithSessionTermination /* IMPORTED_LONG_NAMED_INTEGER */, cHFResponseWithSessionTermination /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_cHFAbortRequest /* IMPORTED_LONG_NAMED_INTEGER */, cHFAbortRequest /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_abnormalRelease /* IMPORTED_LONG_NAMED_INTEGER */, abnormalRelease /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSFlowExpiryDataTimeLimit /* IMPORTED_LONG_NAMED_INTEGER */, qoSFlowExpiryDataTimeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, SMFTrigger_qoSFlowExpiryDataVolumeLimit /* IMPORTED_LONG_NAMED_INTEGER */, qoSFlowExpiryDataVolumeLimit /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SMFTrigger, _encode_SMFTrigger } from "../CHFChargingDataTypes/SMFTrigger.ta.mjs";
import { TriggerCategory, _decode_TriggerCategory, _encode_TriggerCategory, _enum_for_TriggerCategory } from "../CHFChargingDataTypes/TriggerCategory.ta.mjs";
// export { TriggerCategory, _enum_for_TriggerCategory, TriggerCategory_immediateReport /* IMPORTED_LONG_ENUMERATION_ITEM */, immediateReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, TriggerCategory_deferredReport /* IMPORTED_LONG_ENUMERATION_ITEM */, deferredReport /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TriggerCategory, _encode_TriggerCategory } from "../CHFChargingDataTypes/TriggerCategory.ta.mjs";


/**
 * @summary RoamingTrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingTrigger ::= SEQUENCE {
 *    trigger                   [0] IMPLICIT SMFTrigger OPTIONAL,
 *    triggerCategory           [1] IMPLICIT TriggerCategory OPTIONAL,
 *    timeLimit                 [2] IMPLICIT INTEGER OPTIONAL,
 *    volumeLimit               [3] IMPLICIT INTEGER OPTIONAL,
 *    maxNbChargingConditions   [4] IMPLICIT INTEGER OPTIONAL}
 * ```
 * 
 * @class
 */
export
class RoamingTrigger {
    /**
     * @summary `trigger`.
     * @public
     * @readonly
     */
    readonly trigger: OPTIONAL<SMFTrigger>;
    /**
     * @summary `triggerCategory`.
     * @public
     * @readonly
     */
    readonly triggerCategory: OPTIONAL<TriggerCategory>;
    /**
     * @summary `timeLimit`.
     * @public
     * @readonly
     */
    readonly timeLimit: OPTIONAL<INTEGER>;
    /**
     * @summary `volumeLimit`.
     * @public
     * @readonly
     */
    readonly volumeLimit: OPTIONAL<INTEGER>;
    /**
     * @summary `maxNbChargingConditions`.
     * @public
     * @readonly
     */
    readonly maxNbChargingConditions: OPTIONAL<INTEGER>;

    constructor (
        trigger: OPTIONAL<SMFTrigger>,
        triggerCategory: OPTIONAL<TriggerCategory>,
        timeLimit: OPTIONAL<INTEGER>,
        volumeLimit: OPTIONAL<INTEGER>,
        maxNbChargingConditions: OPTIONAL<INTEGER>
    ) {
        this.trigger = trigger;
        this.triggerCategory = triggerCategory;
        this.timeLimit = timeLimit;
        this.volumeLimit = volumeLimit;
        this.maxNbChargingConditions = maxNbChargingConditions;
    }

    /**
     * @summary Restructures an object into a RoamingTrigger
     * @description
     * 
     * This takes an `object` and converts it to a `RoamingTrigger`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RoamingTrigger`.
     * @returns {RoamingTrigger}
     */
    public static _from_object (_o: { [_K in keyof (RoamingTrigger)]: (RoamingTrigger)[_K] }): RoamingTrigger {
        return new RoamingTrigger(_o.trigger, _o.triggerCategory, _o.timeLimit, _o.volumeLimit, _o.maxNbChargingConditions);
    }

        /**
         * @summary The enum used as the type of the component `triggerCategory`
         * @public
         * @static
         */

    public static _enum_for_triggerCategory = _enum_for_TriggerCategory;
}

/**
 * @summary The Leading Root Component Types of RoamingTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RoamingTrigger: $.ComponentSpec[] = [
    new $.ComponentSpec("trigger", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("triggerCategory", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("timeLimit", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("volumeLimit", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("maxNbChargingConditions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RoamingTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RoamingTrigger: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RoamingTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RoamingTrigger: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RoamingTrigger: $.ASN1Decoder<RoamingTrigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoamingTrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoamingTrigger (el: _Element): RoamingTrigger {
    if (!_cached_decoder_for_RoamingTrigger) { _cached_decoder_for_RoamingTrigger = function (el: _Element): RoamingTrigger {
    let trigger: OPTIONAL<SMFTrigger>;
    let triggerCategory: OPTIONAL<TriggerCategory>;
    let timeLimit: OPTIONAL<INTEGER>;
    let volumeLimit: OPTIONAL<INTEGER>;
    let maxNbChargingConditions: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "trigger": (_el: _Element): void => { trigger = $._decode_implicit<SMFTrigger>(() => _decode_SMFTrigger)(_el); },
        "triggerCategory": (_el: _Element): void => { triggerCategory = $._decode_implicit<TriggerCategory>(() => _decode_TriggerCategory)(_el); },
        "timeLimit": (_el: _Element): void => { timeLimit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "volumeLimit": (_el: _Element): void => { volumeLimit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "maxNbChargingConditions": (_el: _Element): void => { maxNbChargingConditions = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RoamingTrigger,
        _extension_additions_list_spec_for_RoamingTrigger,
        _root_component_type_list_2_spec_for_RoamingTrigger,
        undefined,
    );
    return new RoamingTrigger(
        trigger,
        triggerCategory,
        timeLimit,
        volumeLimit,
        maxNbChargingConditions
    );
}; }
    return _cached_decoder_for_RoamingTrigger(el);
}

let _cached_encoder_for_RoamingTrigger: $.ASN1Encoder<RoamingTrigger> | null = null;

/**
 * @summary Encodes a(n) RoamingTrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoamingTrigger, encoded as an ASN.1 Element.
 */
export
function _encode_RoamingTrigger (value: RoamingTrigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoamingTrigger) { _cached_encoder_for_RoamingTrigger = function (value: RoamingTrigger, _elGetter: $.ASN1Encoder<RoamingTrigger>): _Element {
    const _components: _Element[] = [];
    if (value.trigger !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_SMFTrigger, $.BER)(value.trigger, $.BER));
    }
    if (value.triggerCategory !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_TriggerCategory, $.BER)(value.triggerCategory, $.BER));
    }
    if (value.timeLimit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.timeLimit, $.BER));
    }
    if (value.volumeLimit !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.volumeLimit, $.BER));
    }
    if (value.maxNbChargingConditions !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.maxNbChargingConditions, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RoamingTrigger(value, elGetter);
}


/* eslint-enable */
