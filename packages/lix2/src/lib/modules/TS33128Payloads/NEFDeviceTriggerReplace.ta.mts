/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
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
import { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
// export { AFID, _decode_AFID, _encode_AFID } from "../TS33128Payloads/AFID.ta.mjs";
import { TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
// export { TriggerPayload, _decode_TriggerPayload, _encode_TriggerPayload } from "../TS33128Payloads/TriggerPayload.ta.mjs";
import { PriorityDT, _decode_PriorityDT, _encode_PriorityDT, _enum_for_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
// export { PriorityDT, _enum_for_PriorityDT, PriorityDT_noPriority /* IMPORTED_LONG_ENUMERATION_ITEM */, noPriority /* IMPORTED_SHORT_ENUMERATION_ITEM */, PriorityDT_priority /* IMPORTED_LONG_ENUMERATION_ITEM */, priority /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PriorityDT, _encode_PriorityDT } from "../TS33128Payloads/PriorityDT.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary NEFDeviceTriggerReplace
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NEFDeviceTriggerReplace ::= SEQUENCE
 * {
 *     sUPI                     [1] SUPI,
 *     gPSI                     [2] GPSI,
 *     triggerId                [3] TriggerID,
 *     aFID                     [4] AFID,
 *     triggerPayload           [5] TriggerPayload OPTIONAL,
 *     validityPeriod           [6] INTEGER OPTIONAL,
 *     priorityDT               [7] PriorityDT OPTIONAL,
 *     sourcePortId             [8] PortNumber OPTIONAL,
 *     destinationPortId        [9] PortNumber OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NEFDeviceTriggerReplace {
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
         * @summary `aFID`.
         * @public
         * @readonly
         */
        readonly aFID: AFID,
        /**
         * @summary `triggerPayload`.
         * @public
         * @readonly
         */
        readonly triggerPayload: OPTIONAL<TriggerPayload>,
        /**
         * @summary `validityPeriod`.
         * @public
         * @readonly
         */
        readonly validityPeriod: OPTIONAL<INTEGER>,
        /**
         * @summary `priorityDT`.
         * @public
         * @readonly
         */
        readonly priorityDT: OPTIONAL<PriorityDT>,
        /**
         * @summary `sourcePortId`.
         * @public
         * @readonly
         */
        readonly sourcePortId: OPTIONAL<PortNumber>,
        /**
         * @summary `destinationPortId`.
         * @public
         * @readonly
         */
        readonly destinationPortId: OPTIONAL<PortNumber>
    ) {}

    /**
     * @summary Restructures an object into a NEFDeviceTriggerReplace
     * @description
     * 
     * This takes an `object` and converts it to a `NEFDeviceTriggerReplace`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NEFDeviceTriggerReplace`.
     * @returns {NEFDeviceTriggerReplace}
     */
    public static _from_object (_o: { [_K in keyof (NEFDeviceTriggerReplace)]: (NEFDeviceTriggerReplace)[_K] }): NEFDeviceTriggerReplace {
        return new NEFDeviceTriggerReplace(_o.sUPI, _o.gPSI, _o.triggerId, _o.aFID, _o.triggerPayload, _o.validityPeriod, _o.priorityDT, _o.sourcePortId, _o.destinationPortId);
    }

        /**
         * @summary The enum used as the type of the component `priorityDT`
         * @public
         * @static
         */

    public static _enum_for_priorityDT = _enum_for_PriorityDT;
}

/**
 * @summary The Leading Root Component Types of NEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NEFDeviceTriggerReplace: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("gPSI", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("triggerId", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("aFID", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("triggerPayload", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("validityPeriod", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("priorityDT", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("sourcePortId", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("destinationPortId", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of NEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NEFDeviceTriggerReplace: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NEFDeviceTriggerReplace
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NEFDeviceTriggerReplace: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NEFDeviceTriggerReplace: $.ASN1Decoder<NEFDeviceTriggerReplace> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NEFDeviceTriggerReplace
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NEFDeviceTriggerReplace (el: _Element): NEFDeviceTriggerReplace {
    if (!_cached_decoder_for_NEFDeviceTriggerReplace) { _cached_decoder_for_NEFDeviceTriggerReplace = function (el: _Element): NEFDeviceTriggerReplace {
    let sUPI!: SUPI;
    let gPSI!: GPSI;
    let triggerId!: TriggerID;
    let aFID!: AFID;
    let triggerPayload: OPTIONAL<TriggerPayload>;
    let validityPeriod: OPTIONAL<INTEGER>;
    let priorityDT: OPTIONAL<PriorityDT>;
    let sourcePortId: OPTIONAL<PortNumber>;
    let destinationPortId: OPTIONAL<PortNumber>;
    const callbacks: $.DecodingMap = {
        "sUPI": (_el: _Element): void => { sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(_el); },
        "gPSI": (_el: _Element): void => { gPSI = $._decode_explicit<GPSI>(() => _decode_GPSI)(_el); },
        "triggerId": (_el: _Element): void => { triggerId = $._decode_implicit<TriggerID>(() => _decode_TriggerID)(_el); },
        "aFID": (_el: _Element): void => { aFID = $._decode_implicit<AFID>(() => _decode_AFID)(_el); },
        "triggerPayload": (_el: _Element): void => { triggerPayload = $._decode_implicit<TriggerPayload>(() => _decode_TriggerPayload)(_el); },
        "validityPeriod": (_el: _Element): void => { validityPeriod = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "priorityDT": (_el: _Element): void => { priorityDT = $._decode_implicit<PriorityDT>(() => _decode_PriorityDT)(_el); },
        "sourcePortId": (_el: _Element): void => { sourcePortId = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); },
        "destinationPortId": (_el: _Element): void => { destinationPortId = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NEFDeviceTriggerReplace,
        _extension_additions_list_spec_for_NEFDeviceTriggerReplace,
        _root_component_type_list_2_spec_for_NEFDeviceTriggerReplace,
        undefined,
    );
    return new NEFDeviceTriggerReplace(
        sUPI,
        gPSI,
        triggerId,
        aFID,
        triggerPayload,
        validityPeriod,
        priorityDT,
        sourcePortId,
        destinationPortId
    );
}; }
    return _cached_decoder_for_NEFDeviceTriggerReplace(el);
}

let _cached_encoder_for_NEFDeviceTriggerReplace: $.ASN1Encoder<NEFDeviceTriggerReplace> | null = null;

/**
 * @summary Encodes a(n) NEFDeviceTriggerReplace into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NEFDeviceTriggerReplace, encoded as an ASN.1 Element.
 */
export
function _encode_NEFDeviceTriggerReplace (value: NEFDeviceTriggerReplace, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NEFDeviceTriggerReplace) { _cached_encoder_for_NEFDeviceTriggerReplace = function (value: NEFDeviceTriggerReplace, elGetter: $.ASN1Encoder<NEFDeviceTriggerReplace>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_GPSI, $.BER)(value.gPSI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_TriggerID, $.BER)(value.triggerId, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_AFID, $.BER)(value.aFID, $.BER),
            /* IF_ABSENT  */ ((value.triggerPayload === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_TriggerPayload, $.BER)(value.triggerPayload, $.BER)),
            /* IF_ABSENT  */ ((value.validityPeriod === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeInteger, $.BER)(value.validityPeriod, $.BER)),
            /* IF_ABSENT  */ ((value.priorityDT === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_PriorityDT, $.BER)(value.priorityDT, $.BER)),
            /* IF_ABSENT  */ ((value.sourcePortId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_PortNumber, $.BER)(value.sourcePortId, $.BER)),
            /* IF_ABSENT  */ ((value.destinationPortId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_PortNumber, $.BER)(value.destinationPortId, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NEFDeviceTriggerReplace(value, elGetter);
}


/* eslint-enable */
