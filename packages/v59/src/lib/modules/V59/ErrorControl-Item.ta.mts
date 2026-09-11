/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError, ASN1OverflowError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ErrorControl_Item_protocolNegotiation, _enum_for_ErrorControl_Item_protocolNegotiation, _decode_ErrorControl_Item_protocolNegotiation, _encode_ErrorControl_Item_protocolNegotiation } from "../V59/ErrorControl-Item-protocolNegotiation.ta.mjs";

import { ErrorControl_Item_v42featureNegotiation, _decode_ErrorControl_Item_v42featureNegotiation, _encode_ErrorControl_Item_v42featureNegotiation } from "../V59/ErrorControl-Item-v42featureNegotiation.ta.mjs";

import { ErrorControl_Item_ecStatistics, _decode_ErrorControl_Item_ecStatistics, _encode_ErrorControl_Item_ecStatistics } from "../V59/ErrorControl-Item-ecStatistics.ta.mjs";

/**
 * @summary ErrorControl_Item
 * @description
 *
 * Negotiated V.42 features, frame/window sizes, and optional throughput/error
 * counters. ITU-T Rec. V.59 (11/2000) §6.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ErrorControl-Item ::= SEQUENCE {protocolNegotiation
 *                 ENUMERATED {disabled(0), lapm(1), v42annexA(2), ...
 *                             },
 *               v42featureNegotiation
 *                 BIT STRING {singleSREJ(0), multipleSREJ(1), hDLCBalMode(2),
 *                             testFrameSup(3), fcs16(4), fcs32(5),
 *                             v42phaseDetused(6), odpAdpbypassed(7),
 *                             v42fallbackDisc(8), v42fallbackBuf(9),
 *                             v42fallbackUnBuf(10)},
 *               txFrameSize            INTEGER(1..65535),
 *               rxFrameSize            INTEGER(1..65535),
 *               txWindow               INTEGER(1..65535),
 *               rxWindow               INTEGER(1..65535),
 *               linkTimeout            INTEGER(0..511) OPTIONAL,
 *               ecStatistics
 *                 SEQUENCE {framesSentAck          INTEGER(0..65535) OPTIONAL,
 *                           framesRetransmitted    INTEGER(0..65535) OPTIONAL,
 *                           framesReceivedAck      INTEGER(0..65535) OPTIONAL,
 *                           framesReceivedDiscard  INTEGER(0..65535) OPTIONAL
 *               },
 *               txErrors               INTEGER(0..65535) OPTIONAL,
 *               rxErrors               INTEGER(0..65535) OPTIONAL,
 *               txThroughput           INTEGER(0..32767) OPTIONAL,
 *               rxThroughput           INTEGER(0..32767) OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class ErrorControl_Item {
    constructor (
        /**
         * @summary `protocolNegotiation`.
         * @description
         *
         * Error-control protocol used (Table 18/V.59): `disabled`(0),
         * `lapm`(1), `v42annexA`(2). Tag-ID `2F01`. ITU-T Rec. V.59 (11/2000)
         * §6.12.
         * @public
         * @readonly
         */
        readonly protocolNegotiation: ErrorControl_Item_protocolNegotiation,
        /**
         * @summary `v42featureNegotiation`.
         * @description
         *
         * V.42 feature flags (Table 19/V.59). Bit 0 is LSB when displayed
         * (ITU-T Rec. V.59 Cor.1 (07/2001) §6.2.3). Tag-ID `2F02` (named
         * `v42featureNegotiation` per ITU-T Rec. V.59 Cor.2 (03/2002) clause
         * 4.3). ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly v42featureNegotiation: ErrorControl_Item_v42featureNegotiation,
        /**
         * @summary `txFrameSize`.
         * @description
         *
         * Negotiated transmitter frame size in octets (1..65535 in Annex A).
         * Tag-ID `2F03`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly txFrameSize: INTEGER,
        /**
         * @summary `rxFrameSize`.
         * @description
         *
         * Negotiated receive frame size in octets (1..65535). Tag-ID `2F04`.
         * ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly rxFrameSize: INTEGER,
        /**
         * @summary `txWindow`.
         * @description
         *
         * Transmit window size in octets (1..65535). Tag-ID `2F05`. ITU-T Rec.
         * V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly txWindow: INTEGER,
        /**
         * @summary `rxWindow`.
         * @description
         *
         * Receive window size in octets (1..65535). Tag-ID `2F06`. ITU-T Rec.
         * V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly rxWindow: INTEGER,
        /**
         * @summary `linkTimeout`.
         * @description
         *
         * Timeouts incurred by the end of the connection (0..511). Tag-ID
         * `2F07`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly linkTimeout: OPTIONAL<INTEGER>,
        /**
         * @summary `ecStatistics`.
         * @description
         *
         * V.42-style frame counters similar to §3.5/V.58. ITU-T Rec. V.59
         * (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly ecStatistics: ErrorControl_Item_ecStatistics,
        /**
         * @summary `txErrors`.
         * @description
         *
         * REJ, SREJ, or similar frames received from the remote end (0..65535).
         * Tag-ID `2F0C`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly txErrors: OPTIONAL<INTEGER>,
        /**
         * @summary `rxErrors`.
         * @description
         *
         * Errored frames received (bad FCS, unknown address, out of sequence,
         * etc.). Tag-ID `2F0D`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly rxErrors: OPTIONAL<INTEGER>,
        /**
         * @summary `txThroughput`.
         * @description
         *
         * Average throughput at the input to the error-control entity, rounded,
         * in bit/s. Annex A constrains 0..32767 (clause 6.12 prose allows a
         * larger range; ASN.1 governs per ITU-T Rec. V.59 Cor.2 (03/2002)).
         * Tag-ID `2F0E`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly txThroughput: OPTIONAL<INTEGER>,
        /**
         * @summary `rxThroughput`.
         * @description
         *
         * Average receive throughput, same definition as `txThroughput`. Tag-ID
         * `2F0F`. ITU-T Rec. V.59 (11/2000) §6.12.
         * @public
         * @readonly
         */
        readonly rxThroughput: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        {
                const _n = typeof this.txFrameSize === "bigint" ? Number(this.txFrameSize) : this.txFrameSize;
                if (_n < 1 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.txFrameSize violates INTEGER range");
                }
            }

        {
                const _n = typeof this.rxFrameSize === "bigint" ? Number(this.rxFrameSize) : this.rxFrameSize;
                if (_n < 1 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.rxFrameSize violates INTEGER range");
                }
            }

        {
                const _n = typeof this.txWindow === "bigint" ? Number(this.txWindow) : this.txWindow;
                if (_n < 1 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.txWindow violates INTEGER range");
                }
            }

        {
                const _n = typeof this.rxWindow === "bigint" ? Number(this.rxWindow) : this.rxWindow;
                if (_n < 1 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.rxWindow violates INTEGER range");
                }
            }

        if (this.linkTimeout !== undefined) {
                const _n = typeof this.linkTimeout === "bigint" ? Number(this.linkTimeout) : this.linkTimeout;
                if (_n < 0 || _n > 511) {
                    throw new ASN1OverflowError("ErrorControl_Item.linkTimeout violates INTEGER range");
                }
            }
        if (this.txErrors !== undefined) {
                const _n = typeof this.txErrors === "bigint" ? Number(this.txErrors) : this.txErrors;
                if (_n < 0 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.txErrors violates INTEGER range");
                }
            }

        if (this.rxErrors !== undefined) {
                const _n = typeof this.rxErrors === "bigint" ? Number(this.rxErrors) : this.rxErrors;
                if (_n < 0 || _n > 65535) {
                    throw new ASN1OverflowError("ErrorControl_Item.rxErrors violates INTEGER range");
                }
            }

        if (this.txThroughput !== undefined) {
                const _n = typeof this.txThroughput === "bigint" ? Number(this.txThroughput) : this.txThroughput;
                if (_n < 0 || _n > 32767) {
                    throw new ASN1OverflowError("ErrorControl_Item.txThroughput violates INTEGER range");
                }
            }

        if (this.rxThroughput !== undefined) {
                const _n = typeof this.rxThroughput === "bigint" ? Number(this.rxThroughput) : this.rxThroughput;
                if (_n < 0 || _n > 32767) {
                    throw new ASN1OverflowError("ErrorControl_Item.rxThroughput violates INTEGER range");
                }
            }}

    /**
     * @summary Restructures an object into a ErrorControl_Item
     * @description
     * 
     * This takes an `object` and converts it to a `ErrorControl_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ErrorControl_Item`.
     * @returns {ErrorControl_Item}
     */
    public static _from_object (_o: { [_K in keyof (ErrorControl_Item)]: (ErrorControl_Item)[_K] }): ErrorControl_Item {
        return new ErrorControl_Item(_o.protocolNegotiation, _o.v42featureNegotiation, _o.txFrameSize, _o.rxFrameSize, _o.txWindow, _o.rxWindow, _o.linkTimeout, _o.ecStatistics, _o.txErrors, _o.rxErrors, _o.txThroughput, _o.rxThroughput, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `protocolNegotiation`
         * @public
         * @static
         */

    public static _enum_for_protocolNegotiation = _enum_for_ErrorControl_Item_protocolNegotiation;
}

/**
 * @summary The Leading Root Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolNegotiation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("v42featureNegotiation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("txFrameSize", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("rxFrameSize", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("txWindow", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("rxWindow", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("linkTimeout", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("ecStatistics", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("txErrors", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("rxErrors", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("txThroughput", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("rxThroughput", true, $.hasTag(_TagClass.context, 11))
];

/**
 * @summary The Trailing Root Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ErrorControl_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ErrorControl_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ErrorControl_Item: $.ASN1Decoder<ErrorControl_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorControl_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ErrorControl_Item (el: _Element): ErrorControl_Item {
    if (!_cached_decoder_for_ErrorControl_Item) { _cached_decoder_for_ErrorControl_Item = function (el: _Element): ErrorControl_Item {
    let protocolNegotiation!: ErrorControl_Item_protocolNegotiation;
    let v42featureNegotiation!: ErrorControl_Item_v42featureNegotiation;
    let txFrameSize!: INTEGER;
    let rxFrameSize!: INTEGER;
    let txWindow!: INTEGER;
    let rxWindow!: INTEGER;
    let linkTimeout: OPTIONAL<INTEGER>;
    let ecStatistics!: ErrorControl_Item_ecStatistics;
    let txErrors: OPTIONAL<INTEGER>;
    let rxErrors: OPTIONAL<INTEGER>;
    let txThroughput: OPTIONAL<INTEGER>;
    let rxThroughput: OPTIONAL<INTEGER>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "protocolNegotiation": (_el: _Element): void => { protocolNegotiation = _decode_ErrorControl_Item_protocolNegotiation(_el); },
        "v42featureNegotiation": (_el: _Element): void => { v42featureNegotiation = _decode_ErrorControl_Item_v42featureNegotiation(_el); },
        "txFrameSize": (_el: _Element): void => { txFrameSize = $._decodeInteger(_el); },
        "rxFrameSize": (_el: _Element): void => { rxFrameSize = $._decodeInteger(_el); },
        "txWindow": (_el: _Element): void => { txWindow = $._decodeInteger(_el); },
        "rxWindow": (_el: _Element): void => { rxWindow = $._decodeInteger(_el); },
        "linkTimeout": (_el: _Element): void => { linkTimeout = $._decodeInteger(_el); },
        "ecStatistics": (_el: _Element): void => { ecStatistics = _decode_ErrorControl_Item_ecStatistics(_el); },
        "txErrors": (_el: _Element): void => { txErrors = $._decodeInteger(_el); },
        "rxErrors": (_el: _Element): void => { rxErrors = $._decodeInteger(_el); },
        "txThroughput": (_el: _Element): void => { txThroughput = $._decodeInteger(_el); },
        "rxThroughput": (_el: _Element): void => { rxThroughput = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ErrorControl_Item,
        _extension_additions_list_spec_for_ErrorControl_Item,
        _root_component_type_list_2_spec_for_ErrorControl_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ErrorControl_Item(
        protocolNegotiation,
        v42featureNegotiation,
        txFrameSize,
        rxFrameSize,
        txWindow,
        rxWindow,
        linkTimeout,
        ecStatistics,
        txErrors,
        rxErrors,
        txThroughput,
        rxThroughput,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ErrorControl_Item(el);
}

let _cached_encoder_for_ErrorControl_Item: $.ASN1Encoder<ErrorControl_Item> | null = null;

/**
 * @summary Encodes a(n) ErrorControl_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorControl_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ErrorControl_Item (value: ErrorControl_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ErrorControl_Item) { _cached_encoder_for_ErrorControl_Item = function (value: ErrorControl_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ErrorControl_Item_protocolNegotiation(value.protocolNegotiation, $.BER),
            /* REQUIRED   */ _encode_ErrorControl_Item_v42featureNegotiation(value.v42featureNegotiation, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txFrameSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxFrameSize, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txWindow, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxWindow, $.BER),
            /* IF_ABSENT  */ ((value.linkTimeout === undefined) ? undefined : $._encodeInteger(value.linkTimeout, $.BER)),
            /* REQUIRED   */ _encode_ErrorControl_Item_ecStatistics(value.ecStatistics, $.BER),
            /* IF_ABSENT  */ ((value.txErrors === undefined) ? undefined : $._encodeInteger(value.txErrors, $.BER)),
            /* IF_ABSENT  */ ((value.rxErrors === undefined) ? undefined : $._encodeInteger(value.rxErrors, $.BER)),
            /* IF_ABSENT  */ ((value.txThroughput === undefined) ? undefined : $._encodeInteger(value.txThroughput, $.BER)),
            /* IF_ABSENT  */ ((value.rxThroughput === undefined) ? undefined : $._encodeInteger(value.rxThroughput, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ErrorControl_Item(value, elGetter);
}

/* eslint-enable */
