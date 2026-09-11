/* eslint-disable */
import {
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
import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary DTEDCE_Item
 * @description
 *
 * DTE/DCE flow control, transfer mode, speeds, throughput, and character
 * errors. ITU-T Rec. V.59 Cor.2 (03/2002) clause 2 says `txThroughput`,
 * `rxThroughput`, `txErrors`, and `rxErrors` should be OPTIONAL in Annex A
 * (they are derived); this module still encodes them as required. ITU-T Rec.
 * V.59 (11/2000) §6.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTEDCE-Item ::= SEQUENCE {txFlowControl  V59String,
 *               rxFlowControl  V59String,
 *               protocol       V59String,
 *               txSpeed        INTEGER(50..1677215),
 *               rxSpeed        INTEGER(50..1677215),
 *               txThroughput   INTEGER(50..1677215),
 *               rxThroughput   INTEGER(50..1677215),
 *               txErrors       INTEGER(0..65535),
 *               rxErrors       INTEGER(0..65535),
 *               ...}
 * ```
 * 
 * @class
 */
export
class DTEDCE_Item {
    constructor (
        /**
         * @summary `txFlowControl`.
         * @description
         *
         * Flow control used by the DCE transmitter (e.g. `XON/XOFF`, `105/133`,
         * `None`). IA5 `simpleText` (§6.2.1). Tag-ID `3101`. ITU-T Rec. V.59
         * (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly txFlowControl: V59String,
        /**
         * @summary `rxFlowControl`.
         * @description
         *
         * Flow control used by the DCE receiver (same tokens as
         * `txFlowControl`). IA5 `simpleText` (§6.2.1). Tag-ID `3102`. ITU-T
         * Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly rxFlowControl: V59String,
        /**
         * @summary `protocol`.
         * @description
         *
         * How data are transferred DTE/DCE (e.g. `8N1`, `7E2`, `Autosync`,
         * `X.32`, `V.80 framed`). IA5 `simpleText` (§6.2.1). Tag-ID `3103`.
         * ITU-T Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly protocol: V59String,
        /**
         * @summary `txSpeed`.
         * @description
         *
         * Data rate DTE→DCE in bit/s (50..1677215). Tag-ID `3104`. ITU-T Rec.
         * V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly txSpeed: INTEGER,
        /**
         * @summary `rxSpeed`.
         * @description
         *
         * Data rate DCE→DTE in bit/s (50..1677215 in Annex A). Tag-ID `3105`.
         * ITU-T Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly rxSpeed: INTEGER,
        /**
         * @summary `txThroughput`.
         * @description
         *
         * Average data rate DTE→DCE in bit/s. Clause 6.13 and ITU-T Rec. V.59
         * Cor.2 (03/2002) treat this as optional; Annex A in this module
         * requires it. Tag-ID `3106`. ITU-T Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly txThroughput: INTEGER,
        /**
         * @summary `rxThroughput`.
         * @description
         *
         * Average data rate DCE→DTE in bit/s. Optional in clause 6.13 / ITU-T
         * Rec. V.59 Cor.2 (03/2002); required here. Tag-ID `3107`. ITU-T Rec.
         * V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly rxThroughput: INTEGER,
        /**
         * @summary `txErrors`.
         * @description
         *
         * Errored characters received from the DTE (overruns, framing errors,
         * etc.). Optional in clause 6.13 / ITU-T Rec. V.59 Cor.2 (03/2002);
         * required here. Tag-ID `3108`. ITU-T Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly txErrors: INTEGER,
        /**
         * @summary `rxErrors`.
         * @description
         *
         * Characters known not to have been sent to the DTE. Optional in clause
         * 6.13 / ITU-T Rec. V.59 Cor.2 (03/2002); required here. Tag-ID `3109`.
         * ITU-T Rec. V.59 (11/2000) §6.13.
         * @public
         * @readonly
         */
        readonly rxErrors: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        {
                const _n = typeof this.txSpeed === "bigint" ? Number(this.txSpeed) : this.txSpeed;
                if (_n < 50 || _n > 1677215) {
                    throw new ASN1OverflowError("DTEDCE_Item.txSpeed violates INTEGER range");
                }
            }

        {
                const _n = typeof this.rxSpeed === "bigint" ? Number(this.rxSpeed) : this.rxSpeed;
                if (_n < 50 || _n > 1677215) {
                    throw new ASN1OverflowError("DTEDCE_Item.rxSpeed violates INTEGER range");
                }
            }

        {
                const _n = typeof this.txThroughput === "bigint" ? Number(this.txThroughput) : this.txThroughput;
                if (_n < 50 || _n > 1677215) {
                    throw new ASN1OverflowError("DTEDCE_Item.txThroughput violates INTEGER range");
                }
            }

        {
                const _n = typeof this.rxThroughput === "bigint" ? Number(this.rxThroughput) : this.rxThroughput;
                if (_n < 50 || _n > 1677215) {
                    throw new ASN1OverflowError("DTEDCE_Item.rxThroughput violates INTEGER range");
                }
            }

        {
                const _n = typeof this.txErrors === "bigint" ? Number(this.txErrors) : this.txErrors;
                if (_n < 0 || _n > 65535) {
                    throw new ASN1OverflowError("DTEDCE_Item.txErrors violates INTEGER range");
                }
            }

        {
                const _n = typeof this.rxErrors === "bigint" ? Number(this.rxErrors) : this.rxErrors;
                if (_n < 0 || _n > 65535) {
                    throw new ASN1OverflowError("DTEDCE_Item.rxErrors violates INTEGER range");
                }
            }}

    /**
     * @summary Restructures an object into a DTEDCE_Item
     * @description
     * 
     * This takes an `object` and converts it to a `DTEDCE_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DTEDCE_Item`.
     * @returns {DTEDCE_Item}
     */
    public static _from_object (_o: { [_K in keyof (DTEDCE_Item)]: (DTEDCE_Item)[_K] }): DTEDCE_Item {
        return new DTEDCE_Item(_o.txFlowControl, _o.rxFlowControl, _o.protocol, _o.txSpeed, _o.rxSpeed, _o.txThroughput, _o.rxThroughput, _o.txErrors, _o.rxErrors, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("txFlowControl", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rxFlowControl", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("protocol", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("txSpeed", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("rxSpeed", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("txThroughput", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("rxThroughput", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("txErrors", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("rxErrors", false, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DTEDCE_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DTEDCE_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DTEDCE_Item: $.ASN1Decoder<DTEDCE_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTEDCE_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTEDCE_Item (el: _Element): DTEDCE_Item {
    if (!_cached_decoder_for_DTEDCE_Item) { _cached_decoder_for_DTEDCE_Item = function (el: _Element): DTEDCE_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 9) {
        throw new _ConstructionError("DTEDCE-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "txFlowControl";
    sequence[1].name = "rxFlowControl";
    sequence[2].name = "protocol";
    sequence[3].name = "txSpeed";
    sequence[4].name = "rxSpeed";
    sequence[5].name = "txThroughput";
    sequence[6].name = "rxThroughput";
    sequence[7].name = "txErrors";
    sequence[8].name = "rxErrors";
    let txFlowControl!: V59String;
    let rxFlowControl!: V59String;
    let protocol!: V59String;
    let txSpeed!: INTEGER;
    let rxSpeed!: INTEGER;
    let txThroughput!: INTEGER;
    let rxThroughput!: INTEGER;
    let txErrors!: INTEGER;
    let rxErrors!: INTEGER;
    txFlowControl = _decode_V59String(sequence[0]);
    rxFlowControl = _decode_V59String(sequence[1]);
    protocol = _decode_V59String(sequence[2]);
    txSpeed = $._decodeInteger(sequence[3]);
    rxSpeed = $._decodeInteger(sequence[4]);
    txThroughput = $._decodeInteger(sequence[5]);
    rxThroughput = $._decodeInteger(sequence[6]);
    txErrors = $._decodeInteger(sequence[7]);
    rxErrors = $._decodeInteger(sequence[8]);
    return new DTEDCE_Item(
        txFlowControl,
        rxFlowControl,
        protocol,
        txSpeed,
        rxSpeed,
        txThroughput,
        rxThroughput,
        txErrors,
        rxErrors,
        sequence.slice(9),
    );
}; }
    return _cached_decoder_for_DTEDCE_Item(el);
}

let _cached_encoder_for_DTEDCE_Item: $.ASN1Encoder<DTEDCE_Item> | null = null;

/**
 * @summary Encodes a(n) DTEDCE_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEDCE_Item, encoded as an ASN.1 Element.
 */
export
function _encode_DTEDCE_Item (value: DTEDCE_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTEDCE_Item) { _cached_encoder_for_DTEDCE_Item = function (value: DTEDCE_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.txFlowControl, $.BER),
            /* REQUIRED   */ _encode_V59String(value.rxFlowControl, $.BER),
            /* REQUIRED   */ _encode_V59String(value.protocol, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txSpeed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxSpeed, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txThroughput, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxThroughput, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.txErrors, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.rxErrors, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DTEDCE_Item(value, elGetter);
}

/* eslint-enable */
