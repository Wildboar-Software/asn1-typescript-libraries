/* eslint-disable */
import {
    type INTEGER,
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../TS33128Payloads/IMSI.ta.mjs";
import { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
// export { MSISDN, _decode_MSISDN, _encode_MSISDN } from "../TS33128Payloads/MSISDN.ta.mjs";
import { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
// export { NAI, _decode_NAI, _encode_NAI } from "../TS33128Payloads/NAI.ta.mjs";
import { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
// export { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
import { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
// export { SCSASID, _decode_SCSASID, _encode_SCSASID } from "../TS33128Payloads/SCSASID.ta.mjs";
import { TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
// export { TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
import { PriorityDT, _decode_PriorityDT, _encode_PriorityDT, _enum_for_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
// export { PriorityDT, _enum_for_PriorityDT, PriorityDT_noPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, noPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityDT_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityDT, _encode_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary SCEFDeviceTriggerReplace
 * @description
 * 
 * The IRI-POI in the SCEF shall generate an xIRI containing a
 * SCEFDeviceTriggerReplace record when the IRI-POI present in the SCEF detects
 * that an SCS/AS has sent a Device triggering replacement for a previously sent
 * Device triggering request to a UE matching one of the target identifiers
 * provided via LI_X1 to the IRI POI in the SCEF. It replaces a previously
 * submitted Device triggering request which has not yet been delivered to the
 * UE.
 *
 * Accordingly, the IRI-POI in the SCEF generates the xIRI when any of the
 * following events is detected:
 *
 * - SCEF receives a Device triggering request (for a Device trigger
 *   replacement) from an SCS/AS with MSISDN or External Identifier matching the
 *   target identifier (See TS 29.122 [63] clause 5.7).
 *
 * - SCEF sends a T4 Device-Trigger-Request (DTR) to SM-SC with Trigger-Action
 *   AVP set to REPLACE and User-Identifier AVP matching the IMSI of the target
 *   UE as specified in TS 29.337 [60] clause 5.2.1.
 *
 * Table 7.8.3.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFDeviceTriggerReplace ::= SEQUENCE
 * {
 *     iMSI                     [1] IMSI OPTIONAL,
 *     mSISDN                   [2] MSISDN OPTIONAL,
 *     externalIdentifier       [3] NAI OPTIONAL,
 *     triggerId                [4] TriggerID,
 *     sCSASID                  [5] SCSASID OPTIONAL,
 *     triggerPayload           [6] TriggerPayload OPTIONAL,
 *     validityPeriod           [7] INTEGER OPTIONAL,
 *     priorityDT               [8] PriorityDT OPTIONAL,
 *     sourcePortId             [9] PortNumber OPTIONAL,
 *     destinationPortId        [10] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SCEFDeviceTriggerReplace {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the target UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly iMSI: OPTIONAL<IMSI>;
    /**
     * @summary `mSISDN`.
     * @description
     *
     * MSISDN used with the target UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly mSISDN: OPTIONAL<MSISDN>;
    /**
     * @summary `externalIdentifier`.
     * @description
     *
     * External Identifier used with the target UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<NAI>;
    /**
     * @summary `triggerId`.
     * @description
     *
     * Identity of the corresponding Device trigger to be replaced.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly triggerId: TriggerID;
    /**
     * @summary `sCSASID`.
     * @description
     *
     * Identity of the SCS/AS replacing an existing Device trigger which has not
     * been delivered yet to the device (e.g. because the device is unreachable)
     * by a new Device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly sCSASID: OPTIONAL<SCSASID>;
    /**
     * @summary `triggerPayload`.
     * @description
     *
     * The device triggering payload.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
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
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly validityPeriod: OPTIONAL<INTEGER>;
    /**
     * @summary `priorityDT`.
     * @description
     *
     * The priority of the device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly priorityDT: OPTIONAL<PriorityDT>;
    /**
     * @summary `sourcePortId`.
     * @description
     *
     * Port on the SCSAS which delivers the device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
     *
     * @public
     * @readonly
     */
    readonly sourcePortId: OPTIONAL<PortNumber>;
    /**
     * @summary `destinationPortId`.
     * @description
     *
     * Port on the device which is the recipient of the device trigger.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.3.
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
        iMSI: OPTIONAL<IMSI>,
        mSISDN: OPTIONAL<MSISDN>,
        externalIdentifier: OPTIONAL<NAI>,
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
     * @summary Restructures an object into a SCEFDeviceTriggerReplace
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFDeviceTriggerReplace`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFDeviceTriggerReplace`.
     * @returns {SCEFDeviceTriggerReplace}
     */
    public static _from_object (_o: { [_K in keyof (SCEFDeviceTriggerReplace)]: (SCEFDeviceTriggerReplace)[_K] }): SCEFDeviceTriggerReplace {
        return new SCEFDeviceTriggerReplace(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.triggerId, _o.sCSASID, _o.triggerPayload, _o.validityPeriod, _o.priorityDT, _o.sourcePortId, _o.destinationPortId, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `priorityDT`
         * @public
         * @static
         */

    public static _enum_for_priorityDT = _enum_for_PriorityDT;
}

/**
 * @summary The Leading Root Component Types of SCEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFDeviceTriggerReplace: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("sCSASID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("triggerPayload", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("validityPeriod", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("priorityDT", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sourcePortId", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("destinationPortId", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of SCEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFDeviceTriggerReplace: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFDeviceTriggerReplace: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFDeviceTriggerReplace: $.ASN1Decoder<SCEFDeviceTriggerReplace> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFDeviceTriggerReplace
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFDeviceTriggerReplace (el: _Element): SCEFDeviceTriggerReplace {
    if (!_cached_decoder_for_SCEFDeviceTriggerReplace) { _cached_decoder_for_SCEFDeviceTriggerReplace = function (el: _Element): SCEFDeviceTriggerReplace {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
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
        _root_component_type_list_1_spec_for_SCEFDeviceTriggerReplace,
        _extension_additions_list_spec_for_SCEFDeviceTriggerReplace,
        _root_component_type_list_2_spec_for_SCEFDeviceTriggerReplace,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFDeviceTriggerReplace(
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
    return _cached_decoder_for_SCEFDeviceTriggerReplace(el);
}

let _cached_encoder_for_SCEFDeviceTriggerReplace: $.ASN1Encoder<SCEFDeviceTriggerReplace> | null = null;

/**
 * @summary Encodes a(n) SCEFDeviceTriggerReplace into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFDeviceTriggerReplace, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFDeviceTriggerReplace (value: SCEFDeviceTriggerReplace, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFDeviceTriggerReplace) { _cached_encoder_for_SCEFDeviceTriggerReplace = function (value: SCEFDeviceTriggerReplace, elGetter: $.ASN1Encoder<SCEFDeviceTriggerReplace>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iMSI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IMSI, $.BER)(value.iMSI, $.BER);
    }
    if (value.mSISDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_MSISDN, $.BER)(value.mSISDN, $.BER);
    }
    if (value.externalIdentifier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_NAI, $.BER)(value.externalIdentifier, $.BER);
    }
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
    return _cached_encoder_for_SCEFDeviceTriggerReplace(value, elGetter);
}


/* eslint-enable */
