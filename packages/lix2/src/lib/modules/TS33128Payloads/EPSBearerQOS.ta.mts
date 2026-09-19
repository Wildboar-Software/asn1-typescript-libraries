/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
// export { QCI, _decode_QCI, _encode_QCI } from "../TS33128Payloads/QCI.ta.mjs";
import { BitrateBinKBPS, _decode_BitrateBinKBPS, _encode_BitrateBinKBPS } from "../TS33128Payloads/BitrateBinKBPS.ta.mjs";
// export { BitrateBinKBPS, _decode_BitrateBinKBPS, _encode_BitrateBinKBPS } from "../TS33128Payloads/BitrateBinKBPS.ta.mjs";
import { EPSQOSPriority, _decode_EPSQOSPriority, _encode_EPSQOSPriority } from "../TS33128Payloads/EPSQOSPriority.ta.mjs";
// export { EPSQOSPriority, _decode_EPSQOSPriority, _encode_EPSQOSPriority } from "../TS33128Payloads/EPSQOSPriority.ta.mjs";


/**
 * @summary EPSBearerQOS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSBearerQOS ::= SEQUENCE
 * {
 *     qCI                       [1] QCI OPTIONAL,
 *     maximumUplinkBitRate      [2] BitrateBinKBPS OPTIONAL,
 *     maximumDownlinkBitRate    [3] BitrateBinKBPS OPTIONAL,
 *     guaranteedUplinkBitRate   [4] BitrateBinKBPS OPTIONAL,
 *     guaranteedDownlinkBitRate [5] BitrateBinKBPS OPTIONAL,
 *     priorityLevel             [6] EPSQOSPriority OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EPSBearerQOS {
    constructor (
        /**
         * @summary `qCI`.
         * @public
         * @readonly
         */
        readonly qCI: OPTIONAL<QCI>,
        /**
         * @summary `maximumUplinkBitRate`.
         * @public
         * @readonly
         */
        readonly maximumUplinkBitRate: OPTIONAL<BitrateBinKBPS>,
        /**
         * @summary `maximumDownlinkBitRate`.
         * @public
         * @readonly
         */
        readonly maximumDownlinkBitRate: OPTIONAL<BitrateBinKBPS>,
        /**
         * @summary `guaranteedUplinkBitRate`.
         * @public
         * @readonly
         */
        readonly guaranteedUplinkBitRate: OPTIONAL<BitrateBinKBPS>,
        /**
         * @summary `guaranteedDownlinkBitRate`.
         * @public
         * @readonly
         */
        readonly guaranteedDownlinkBitRate: OPTIONAL<BitrateBinKBPS>,
        /**
         * @summary `priorityLevel`.
         * @public
         * @readonly
         */
        readonly priorityLevel: OPTIONAL<EPSQOSPriority>
    ) {}

    /**
     * @summary Restructures an object into a EPSBearerQOS
     * @description
     * 
     * This takes an `object` and converts it to a `EPSBearerQOS`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EPSBearerQOS`.
     * @returns {EPSBearerQOS}
     */
    public static _from_object (_o: { [_K in keyof (EPSBearerQOS)]: (EPSBearerQOS)[_K] }): EPSBearerQOS {
        return new EPSBearerQOS(_o.qCI, _o.maximumUplinkBitRate, _o.maximumDownlinkBitRate, _o.guaranteedUplinkBitRate, _o.guaranteedDownlinkBitRate, _o.priorityLevel);
    }


}

/**
 * @summary The Leading Root Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    new $.ComponentSpec("qCI", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maximumUplinkBitRate", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("maximumDownlinkBitRate", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("guaranteedUplinkBitRate", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("guaranteedDownlinkBitRate", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("priorityLevel", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EPSBearerQOS
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EPSBearerQOS: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EPSBearerQOS: $.ASN1Decoder<EPSBearerQOS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSBearerQOS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSBearerQOS (el: _Element): EPSBearerQOS {
    if (!_cached_decoder_for_EPSBearerQOS) { _cached_decoder_for_EPSBearerQOS = function (el: _Element): EPSBearerQOS {
    let qCI: OPTIONAL<QCI>;
    let maximumUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let maximumDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let guaranteedUplinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let guaranteedDownlinkBitRate: OPTIONAL<BitrateBinKBPS>;
    let priorityLevel: OPTIONAL<EPSQOSPriority>;
    const callbacks: $.DecodingMap = {
        "qCI": (_el: _Element): void => { qCI = $._decode_implicit<QCI>(() => _decode_QCI)(_el); },
        "maximumUplinkBitRate": (_el: _Element): void => { maximumUplinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "maximumDownlinkBitRate": (_el: _Element): void => { maximumDownlinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "guaranteedUplinkBitRate": (_el: _Element): void => { guaranteedUplinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "guaranteedDownlinkBitRate": (_el: _Element): void => { guaranteedDownlinkBitRate = $._decode_implicit<BitrateBinKBPS>(() => _decode_BitrateBinKBPS)(_el); },
        "priorityLevel": (_el: _Element): void => { priorityLevel = $._decode_implicit<EPSQOSPriority>(() => _decode_EPSQOSPriority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EPSBearerQOS,
        _extension_additions_list_spec_for_EPSBearerQOS,
        _root_component_type_list_2_spec_for_EPSBearerQOS,
        undefined,
    );
    return new EPSBearerQOS(
        qCI,
        maximumUplinkBitRate,
        maximumDownlinkBitRate,
        guaranteedUplinkBitRate,
        guaranteedDownlinkBitRate,
        priorityLevel
    );
}; }
    return _cached_decoder_for_EPSBearerQOS(el);
}

let _cached_encoder_for_EPSBearerQOS: $.ASN1Encoder<EPSBearerQOS> | null = null;

/**
 * @summary Encodes a(n) EPSBearerQOS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSBearerQOS, encoded as an ASN.1 Element.
 */
export
function _encode_EPSBearerQOS (value: EPSBearerQOS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSBearerQOS) { _cached_encoder_for_EPSBearerQOS = function (value: EPSBearerQOS, elGetter: $.ASN1Encoder<EPSBearerQOS>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.qCI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_QCI, $.BER)(value.qCI, $.BER)),
            /* IF_ABSENT  */ ((value.maximumUplinkBitRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_BitrateBinKBPS, $.BER)(value.maximumUplinkBitRate, $.BER)),
            /* IF_ABSENT  */ ((value.maximumDownlinkBitRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_BitrateBinKBPS, $.BER)(value.maximumDownlinkBitRate, $.BER)),
            /* IF_ABSENT  */ ((value.guaranteedUplinkBitRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_BitrateBinKBPS, $.BER)(value.guaranteedUplinkBitRate, $.BER)),
            /* IF_ABSENT  */ ((value.guaranteedDownlinkBitRate === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_BitrateBinKBPS, $.BER)(value.guaranteedDownlinkBitRate, $.BER)),
            /* IF_ABSENT  */ ((value.priorityLevel === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EPSQOSPriority, $.BER)(value.priorityLevel, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EPSBearerQOS(value, elGetter);
}


/* eslint-enable */
