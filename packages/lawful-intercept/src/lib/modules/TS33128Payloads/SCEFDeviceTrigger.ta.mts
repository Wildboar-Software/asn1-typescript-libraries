/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { type MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { type NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { type TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
// export { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
import { type SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { type TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
// export { TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
import { PriorityDT, _decode_PriorityDT, _encode_PriorityDT, _enum_for_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
// export { PriorityDT, _enum_for_PriorityDT, PriorityDT_noPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, noPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityDT_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityDT, _encode_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
import { type PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary SCEFDeviceTrigger
 * @description
 * 
 * The IRI-POI in the SCEF shall generate an xIRI containing a SCEFDeviceTrigger
 * record when the IRI-POI present in the SCEF detects that an SCS/AS has sent a
 * Device triggering request to a target UE matching one of the target
 * identifiers.
 *
 * Accordingly, the IRI-POI in the SCEF generates the xIRI when any of the
 * following events is detected:
 *
 * - SCEF sends a Device triggering response to the SCS/AS to acknowledge the
 *   reception of a Device triggering request with MSISDN or External Identifier
 *   matching the target identifier (See TS 29.122 [63] clause 5.7).
 *
 * - SCEF sends a T4 Device-Trigger-Request (DTR) to SM-SC with Trigger-Action
 *   AVP set to TRIGGER and User-Identifier AVP matching the IMSI of the target
 *   UE as specified in TS 29.337 [60] clause 5.2.1.
 *
 * Table 7.8.3.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFDeviceTrigger ::= SEQUENCE
 * {
 *     iMSI                  [1] IMSI,
 *     mSISDN                [2] MSISDN,
 *     externalIdentifier    [3] NAI,
 *     triggerId             [4] TriggerID,
 *     sCSASID               [5] SCSASID OPTIONAL,
 *     triggerPayload        [6] TriggerPayload OPTIONAL,
 *     validityPeriod        [7] INTEGER OPTIONAL,
 *     priorityDT            [8] PriorityDT OPTIONAL,
 *     sourcePortId          [9] PortNumber OPTIONAL,
 *     destinationPortId     [10] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFDeviceTrigger {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly iMSI: IMSI;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN used with the UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: MSISDN;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * External Identifier used with the UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: NAI;
    /**
     * @summary `triggerId`.
     * @description
     *
     * Identity of the Device trigger that should be provided in the
     * deviceTriggeringDeliveryReportNotification IRI, Device trigger
     * replacement IRI and Device trigger cancellation IRI.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly triggerId: TriggerID;
    /**
     * @summary `sCSASID`.
     * @description
     *
     * The SCS/AS sending the Device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly sCSASID: OPTIONAL<SCSASID>;
    /**
     * @summary `triggerPayload`.
     * @description
     *
     * The Device triggering payload.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly triggerPayload: OPTIONAL<TriggerPayload>;
    /**
     * @summary `validityPeriod`.
     * @description
     *
     * The validity time in seconds for the specific action requested.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<INTEGER>;
    /**
     * @summary `priorityDT`.
     * @description
     *
     * The priority of the Device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly priorityDT: OPTIONAL<PriorityDT>;
    /**
     * @summary `sourcePortId`.
     * @description
     *
     * Application identity on the SCS/AS which delivers the Device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly sourcePortId: OPTIONAL<PortNumber>;
    /**
     * @summary `destinationPortId`.
     * @description
     *
     * Used to uniquely identify the triggering application addressed in the
     * device.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.2.
     *
     * @public
     * @readonly
     */
    readonly destinationPortId: OPTIONAL<PortNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iMSI: IMSI,
        mSISDN: MSISDN,
        externalIdentifier: NAI,
        triggerId: TriggerID,
        sCSASID?: OPTIONAL<SCSASID>,
        triggerPayload?: OPTIONAL<TriggerPayload>,
        validityPeriod?: OPTIONAL<INTEGER>,
        priorityDT?: OPTIONAL<PriorityDT>,
        sourcePortId?: OPTIONAL<PortNumber>,
        destinationPortId?: OPTIONAL<PortNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.mSISDN = mSISDN;
        this.externalIdentifier = externalIdentifier;
        this.triggerId = triggerId;
        this.sCSASID = sCSASID;
        this.triggerPayload = triggerPayload;
        this.validityPeriod = validityPeriod;
        this.priorityDT = priorityDT;
        this.sourcePortId = sourcePortId;
        this.destinationPortId = destinationPortId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCEFDeviceTrigger
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFDeviceTrigger`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFDeviceTrigger`.
     * @returns {SCEFDeviceTrigger}
     */
    public static _from_object (_o: { [_K in keyof (SCEFDeviceTrigger)]: (SCEFDeviceTrigger)[_K] }): SCEFDeviceTrigger {
        return new SCEFDeviceTrigger(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.triggerId, _o.sCSASID, _o.triggerPayload, _o.validityPeriod, _o.priorityDT, _o.sourcePortId, _o.destinationPortId, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `priorityDT`
         * @public
         * @static
         */

    public static _enum_for_priorityDT: typeof _enum_for_PriorityDT = _enum_for_PriorityDT;
}

/**
 * @summary The Leading Root Component Types of SCEFDeviceTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFDeviceTrigger: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sCSASID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("triggerPayload", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("validityPeriod", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("priorityDT", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sourcePortId", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("destinationPortId", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of SCEFDeviceTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFDeviceTrigger: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFDeviceTrigger
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFDeviceTrigger: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFDeviceTrigger: $.ASN1Decoder<SCEFDeviceTrigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFDeviceTrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFDeviceTrigger (el: _Element): SCEFDeviceTrigger {
    if (!_cached_decoder_for_SCEFDeviceTrigger) { _cached_decoder_for_SCEFDeviceTrigger = function (el: _Element): SCEFDeviceTrigger {
    let iMSI!: IMSI;
    let mSISDN!: MSISDN;
    let externalIdentifier!: NAI;
    let triggerId!: TriggerID;
    let sCSASID: OPTIONAL<SCSASID>;
    let triggerPayload: OPTIONAL<TriggerPayload>;
    let validityPeriod: OPTIONAL<INTEGER>;
    let priorityDT: OPTIONAL<PriorityDT>;
    let sourcePortId: OPTIONAL<PortNumber>;
    let destinationPortId: OPTIONAL<PortNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "triggerId": (_el: _Element): void => { triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(_el); },
        "sCSASID": (_el: _Element): void => { sCSASID = $._decode_implicit<SCSASID>(() => _decode_SCSASID)(_el); },
        "triggerPayload": (_el: _Element): void => { triggerPayload = $._decode_implicit<TriggerPayload>(() => _decode_TriggerPayload)(_el); },
        "validityPeriod": (_el: _Element): void => { validityPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "priorityDT": (_el: _Element): void => { priorityDT = $._decode_implicit<PriorityDT>(() => _decode_PriorityDT)(_el); },
        "sourcePortId": (_el: _Element): void => { sourcePortId = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPortId": (_el: _Element): void => { destinationPortId = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFDeviceTrigger,
        _extension_additions_list_spec_for_SCEFDeviceTrigger,
        _root_component_type_list_2_spec_for_SCEFDeviceTrigger,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFDeviceTrigger(
        iMSI,
        mSISDN,
        externalIdentifier,
        triggerId,
        sCSASID,
        triggerPayload,
        validityPeriod,
        priorityDT,
        sourcePortId,
        destinationPortId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCEFDeviceTrigger(el);
}

let _cached_encoder_for_SCEFDeviceTrigger: $.ASN1Encoder<SCEFDeviceTrigger> | null = null;

/**
 * @summary Encodes a(n) SCEFDeviceTrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFDeviceTrigger, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFDeviceTrigger (value: SCEFDeviceTrigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFDeviceTrigger) { _cached_encoder_for_SCEFDeviceTrigger = function (value: SCEFDeviceTrigger, elGetter: $.ASN1Encoder<SCEFDeviceTrigger>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER);
    if (value.sCSASID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_SCSASID, $.BER)(value.sCSASID, $.BER);
    }
    if (value.triggerPayload !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_TriggerPayload, $.BER)(value.triggerPayload, $.BER);
    }
    if (value.validityPeriod !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeInteger, $.BER)(value.validityPeriod, $.BER);
    }
    if (value.priorityDT !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_PriorityDT, $.BER)(value.priorityDT, $.BER);
    }
    if (value.sourcePortId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_PortNumber, $.BER)(value.sourcePortId, $.BER);
    }
    if (value.destinationPortId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_PortNumber, $.BER)(value.destinationPortId, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCEFDeviceTrigger(value, elGetter);
}


/* eslint-enable */
