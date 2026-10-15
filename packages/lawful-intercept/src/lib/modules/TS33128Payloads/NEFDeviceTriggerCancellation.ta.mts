/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
// export { GPSI, _decode_GPSI, _encode_GPSI } from "../TS33128Payloads/GPSI.ta.mjs";
import { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";
// export { TriggerID, _decode_TriggerID, _encode_TriggerID } from "../TS33128Payloads/TriggerID.ta.mjs";


/**
 * @summary NEFDeviceTriggerCancellation
 * @description
 * 
 * The IRI-POI in the NEF shall generate an xIRI containing a
 * NEFDeviceTriggerCancellation record when the IRI-POI present in the NEF
 * detects that an AF has sent a Device trigger cancellation for a previously
 * sent Device trigger to a UE matching one of the target identifiers provided
 * via LI_X1 to the IRI-POI in the NEF. It cancels previously submitted Device
 * trigger message which has not yet been delivered to the target UE.
 *
 * Accordingly, the IRI-POI in the NEF generates the xIRI when any of the
 * following events is detected:
 *
 * - NEF receives a Nnef_Trigger_Delivery Request (for a device trigger
 *   cancellation) with GPSI matching the target identifier as described in TS
 *   29.522 [58] clause 4.4.3.
 *
 * - NEF sends a T4 Device-Trigger-Request (DTR) to SM-SC with Trigger-Action
 *   AVP set to RECALL and User-Identifier AVP matching the SUPI of the target
 *   UE as specified in TS 29.337 [60] clause 5.2.1.
 *
 * Table 7.7.3.2-1 gives the LI_HI2 IRI message type for this record as REPORT.
 *
 * 3GPP TS 33.128, clause 7.7.3.1.4.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFDeviceTriggerCancellation ::= SEQUENCE
 * {
 *     sUPI                  [1] SUPI,
 *     gPSI                  [2] GPSI,
 *     triggerId             [3] TriggerID
 * }
 * ```
 * 
 * @class
 */
export
class NEFDeviceTriggerCancellation {
    /**
     * @summary `sUPI`.
     * @description
     *
     * SUPI associated with the target UE.
     *
     * 3GPP TS 33.128, clause 7.7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly sUPI: SUPI;
    /**
     * @summary `gPSI`.
     * @description
     *
     * GPSI used with the target UE.
     *
     * 3GPP TS 33.128, clause 7.7.3.1.4.
     *
     * @public
     * @readonly
     */
    readonly gPSI: GPSI;
    /**
     * @summary `triggerId`.
     * @description
     *
     * Identity of the corresponding device trigger to be cancelled.
     *
     * 3GPP TS 33.128, clause 7.7.3.1.4.
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
        sUPI: SUPI,
        gPSI: GPSI,
        triggerId: TriggerID,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sUPI = sUPI;
        this.gPSI = gPSI;
        this.triggerId = triggerId;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a NEFDeviceTriggerCancellation
     * @description
     * 
     * This takes an `object` and converts it to a `NEFDeviceTriggerCancellation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFDeviceTriggerCancellation`.
     * @returns {NEFDeviceTriggerCancellation}
     */
    public static _from_object (_o: { [_K in keyof (NEFDeviceTriggerCancellation)]: (NEFDeviceTriggerCancellation)[_K] }): NEFDeviceTriggerCancellation {
        return new NEFDeviceTriggerCancellation(_o.sUPI, _o.gPSI, _o.triggerId, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFDeviceTriggerCancellation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFDeviceTriggerCancellation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFDeviceTriggerCancellation: $.ASN1Decoder<NEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFDeviceTriggerCancellation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFDeviceTriggerCancellation (el: _Element): NEFDeviceTriggerCancellation {
    if (!_cached_decoder_for_NEFDeviceTriggerCancellation) { _cached_decoder_for_NEFDeviceTriggerCancellation = function (el: _Element): NEFDeviceTriggerCancellation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("NEFDeviceTriggerCancellation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "gPSI";
    sequence[2].name = "triggerId";
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let triggerId!: TriggerID;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(sequence[2]);
    return new NEFDeviceTriggerCancellation(
        sUPI,
        gPSI,
        triggerId,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_NEFDeviceTriggerCancellation(el);
}

let _cached_encoder_for_NEFDeviceTriggerCancellation: $.ASN1Encoder<NEFDeviceTriggerCancellation> | null = null;

/**
 * @summary Encodes a(n) NEFDeviceTriggerCancellation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFDeviceTriggerCancellation, encoded as an ASN.1 Element.
 */
export
function _encode_NEFDeviceTriggerCancellation (value: NEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFDeviceTriggerCancellation) { _cached_encoder_for_NEFDeviceTriggerCancellation = function (value: NEFDeviceTriggerCancellation, elGetter: $.ASN1Encoder<NEFDeviceTriggerCancellation>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NEFDeviceTriggerCancellation(value, elGetter);
}


/* eslint-enable */
