/* eslint-disable */
import {
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


/**
 * @summary SCEFDeviceTriggerCancellation
 * @description
 * 
 * The IRI-POI in the SCEF shall generate an xIRI containing a
 * SCEFDeviceTriggerCancellation record when the IRI-POI present in the SCEF
 * detects that an SCS/AS has sent a Device triggering cancellation for a
 * previously sent Device triggering request to a UE matching one of the target
 * identifiers provided via LI_X1 to the IRI-POI in the SCEF. It cancels
 * previously submitted Device triggering request which has not yet been
 * delivered to the target UE.
 *
 * Accordingly, the IRI-POI in the SCEF generates the xIRI when any of the
 * following events is detected:
 *
 * - SCEF receives a Device triggering request (for a device trigger
 *   cancellation) from SCS/AS related to a previously received Device
 *   triggering request with MSISDN or External Identifier matching the target
 *   identifier (See TS 29.122 [63] clause 5.7).
 *
 * - SCEF sends a T4 Device-Trigger-Request (DTR) to SM-SC with Trigger-Action
 *   AVP set to RECALL and User-Identifier AVP matching the IMSI of the target
 *   UE as specified in TS 29.337 [60] clause 5.2.1.
 *
 * Table 7.8.3.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.8.3.1.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SCEFDeviceTriggerCancellation ::= SEQUENCE
 * {
 *     iMSI                     [1] IMSI OPTIONAL,
 *     mSISDN                   [2] MSISDN OPTIONAL,
 *     externalIdentifier       [3] NAI OPTIONAL,
 *     triggerId                [4] TriggerID
 * }
 * ```
 * 
 * @class
 */
export
class SCEFDeviceTriggerCancellation {
    /**
     * @summary `iMSI`.
     * @description
     *
     * IMSI associated with the target UE.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.4.
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
     * 3GPP TS 33.128, clause 7.8.3.1.4.
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
     * 3GPP TS 33.128, clause 7.8.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly externalIdentifier: OPTIONAL<NAI>;
    /**
     * @summary `triggerId`.
     * @description
     *
     * Identity of the corresponding device trigger to be cancelled.
     *
     * 3GPP TS 33.128, clause 7.8.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly triggerId: TriggerID;
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
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iMSI = iMSI;
        this.mSISDN = mSISDN;
        this.externalIdentifier = externalIdentifier;
        this.triggerId = triggerId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SCEFDeviceTriggerCancellation
     * @description
     * 
     * This takes an `object` and converts it to a `SCEFDeviceTriggerCancellation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SCEFDeviceTriggerCancellation`.
     * @returns {SCEFDeviceTriggerCancellation}
     */
    public static _from_object (_o: { [_K in keyof (SCEFDeviceTriggerCancellation)]: (SCEFDeviceTriggerCancellation)[_K] }): SCEFDeviceTriggerCancellation {
        return new SCEFDeviceTriggerCancellation(_o.iMSI, _o.mSISDN, _o.externalIdentifier, _o.triggerId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SCEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SCEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    new $.ComponentSpec("iMSI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("mSISDN", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("externalIdentifier", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SCEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SCEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SCEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SCEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SCEFDeviceTriggerCancellation: $.ASN1Decoder<SCEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SCEFDeviceTriggerCancellation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SCEFDeviceTriggerCancellation (el: _Element): SCEFDeviceTriggerCancellation {
    if (!_cached_decoder_for_SCEFDeviceTriggerCancellation) { _cached_decoder_for_SCEFDeviceTriggerCancellation = function (el: _Element): SCEFDeviceTriggerCancellation {
    let iMSI: OPTIONAL<IMSI>;
    let mSISDN: OPTIONAL<MSISDN>;
    let externalIdentifier: OPTIONAL<NAI>;
    let triggerId!: TriggerID;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iMSI": (_el: _Element): void => { iMSI = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "mSISDN": (_el: _Element): void => { mSISDN = $._decode_implicit<MSISDN>(() => _decode_MSISDN)(_el); },
        "externalIdentifier": (_el: _Element): void => { externalIdentifier = $._decode_implicit<NAI>(() => _decode_NAI)(_el); },
        "triggerId": (_el: _Element): void => { triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SCEFDeviceTriggerCancellation,
        _extension_additions_list_spec_for_SCEFDeviceTriggerCancellation,
        _root_component_type_list_2_spec_for_SCEFDeviceTriggerCancellation,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SCEFDeviceTriggerCancellation(
        iMSI,
        mSISDN,
        externalIdentifier,
        triggerId,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SCEFDeviceTriggerCancellation(el);
}

let _cached_encoder_for_SCEFDeviceTriggerCancellation: $.ASN1Encoder<SCEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Encodes a(n) SCEFDeviceTriggerCancellation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SCEFDeviceTriggerCancellation, encoded as an ASN.1 Element.
 */
export
function _encode_SCEFDeviceTriggerCancellation (value: SCEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SCEFDeviceTriggerCancellation) { _cached_encoder_for_SCEFDeviceTriggerCancellation = function (value: SCEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<SCEFDeviceTriggerCancellation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
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
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SCEFDeviceTriggerCancellation(value, elGetter);
}


/* eslint-enable */
