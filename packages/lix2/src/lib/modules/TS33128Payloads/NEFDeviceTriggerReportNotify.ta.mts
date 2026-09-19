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
import { DeviceTriggerDeliveryResult, _decode_DeviceTriggerDeliveryResult, _encode_DeviceTriggerDeliveryResult, _enum_for_DeviceTriggerDeliveryResult } from "../TS33128Payloads/DeviceTriggerDeliveryResult.ta.mjs";
// export { DeviceTriggerDeliveryResult, _enum_for_DeviceTriggerDeliveryResult, DeviceTriggerDeliveryResult_success /* IMPORTED_LONG_ENUMERATION_ITEM */, success /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_failure /* IMPORTED_LONG_ENUMERATION_ITEM */, failure /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_triggered /* IMPORTED_LONG_ENUMERATION_ITEM */, triggered /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_expired /* IMPORTED_LONG_ENUMERATION_ITEM */, expired /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_unconfirmed /* IMPORTED_LONG_ENUMERATION_ITEM */, unconfirmed /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_replaced /* IMPORTED_LONG_ENUMERATION_ITEM */, replaced /* IMPORTED_SHORT_ENUMERATION_ITEM */, DeviceTriggerDeliveryResult_terminate /* IMPORTED_LONG_ENUMERATION_ITEM */, terminate /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_DeviceTriggerDeliveryResult, _encode_DeviceTriggerDeliveryResult } from "../TS33128Payloads/DeviceTriggerDeliveryResult.ta.mjs";


/**
 * @summary NEFDeviceTriggerReportNotify
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFDeviceTriggerReportNotify ::= SEQUENCE
 * {
 *     sUPI                             [1] SUPI,
 *     gPSI                             [2] GPSI,
 *     triggerId                        [3] TriggerID,
 *     deviceTriggerDeliveryResult      [4] DeviceTriggerDeliveryResult
 * }
 * ```
 * 
 * @class
 */
export
class NEFDeviceTriggerReportNotify {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `gPSI`.
         * @public
         * @readonly
         */
        readonly gPSI: GPSI,
        /**
         * @summary `triggerId`.
         * @public
         * @readonly
         */
        readonly triggerId: TriggerID,
        /**
         * @summary `deviceTriggerDeliveryResult`.
         * @public
         * @readonly
         */
        readonly deviceTriggerDeliveryResult: DeviceTriggerDeliveryResult
    ) {}

    /**
     * @summary Restructures an object into a NEFDeviceTriggerReportNotify
     * @description
     * 
     * This takes an `object` and converts it to a `NEFDeviceTriggerReportNotify`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFDeviceTriggerReportNotify`.
     * @returns {NEFDeviceTriggerReportNotify}
     */
    public static _from_object (_o: { [_K in keyof (NEFDeviceTriggerReportNotify)]: (NEFDeviceTriggerReportNotify)[_K] }): NEFDeviceTriggerReportNotify {
        return new NEFDeviceTriggerReportNotify(_o.sUPI, _o.gPSI, _o.triggerId, _o.deviceTriggerDeliveryResult);
    }

        /**
         * @summary The enum used as the type of the component `deviceTriggerDeliveryResult`
         * @public
         * @static
         */

    public static _enum_for_deviceTriggerDeliveryResult = _enum_for_DeviceTriggerDeliveryResult;
}

/**
 * @summary The Leading Root Component Types of NEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("deviceTriggerDeliveryResult", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of NEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFDeviceTriggerReportNotify
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFDeviceTriggerReportNotify: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFDeviceTriggerReportNotify: $.ASN1Decoder<NEFDeviceTriggerReportNotify> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFDeviceTriggerReportNotify
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFDeviceTriggerReportNotify (el: _Element): NEFDeviceTriggerReportNotify {
    if (!_cached_decoder_for_NEFDeviceTriggerReportNotify) { _cached_decoder_for_NEFDeviceTriggerReportNotify = function (el: _Element): NEFDeviceTriggerReportNotify {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("NEFDeviceTriggerReportNotify contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "gPSI";
    sequence[2].name = "triggerId";
    sequence[3].name = "deviceTriggerDeliveryResult";
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let triggerId!: TriggerID;
    let deviceTriggerDeliveryResult!: DeviceTriggerDeliveryResult;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(sequence[1]);
    triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(sequence[2]);
    deviceTriggerDeliveryResult = $._decode_implicit<DeviceTriggerDeliveryResult>(() => _decode_DeviceTriggerDeliveryResult)(sequence[3]);
    return new NEFDeviceTriggerReportNotify(
        sUPI,
        gPSI,
        triggerId,
        deviceTriggerDeliveryResult,

    );
}; }
    return _cached_decoder_for_NEFDeviceTriggerReportNotify(el);
}

let _cached_encoder_for_NEFDeviceTriggerReportNotify: $.ASN1Encoder<NEFDeviceTriggerReportNotify> | null = null;

/**
 * @summary Encodes a(n) NEFDeviceTriggerReportNotify into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFDeviceTriggerReportNotify, encoded as an ASN.1 Element.
 */
export
function _encode_NEFDeviceTriggerReportNotify (value: NEFDeviceTriggerReportNotify, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFDeviceTriggerReportNotify) { _cached_encoder_for_NEFDeviceTriggerReportNotify = function (value: NEFDeviceTriggerReportNotify, elGetter: $.ASN1Encoder<NEFDeviceTriggerReportNotify>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_DeviceTriggerDeliveryResult, $.BER)(value.deviceTriggerDeliveryResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFDeviceTriggerReportNotify(value, elGetter);
}


/* eslint-enable */
