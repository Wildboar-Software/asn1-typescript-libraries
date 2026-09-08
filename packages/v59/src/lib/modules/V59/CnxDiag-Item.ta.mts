/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
 * @summary CnxDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CnxDiag-Item ::= SEQUENCE {txCarrier         V59String,
 *               rxCarrier         V59String,
 *               carrierLosses     INTEGER(0..256),
 *               renegRequests     INTEGER(0..256),
 *               renegSuccesses    INTEGER(0..256),
 *               retrainRequests   INTEGER(0..256),
 *               retrainSuccesses  INTEGER(0..256),
 *               callWaiting       INTEGER(0..256) OPTIONAL,
 *               duration          V59String OPTIONAL,
 *               caller            BOOLEAN,
 *               reverseRoles      BOOLEAN OPTIONAL,
 *               ...}
 * ```
 * 
 * @class
 */
export
class CnxDiag_Item {
    constructor (
        /**
         * @summary `txCarrier`.
         * @public
         * @readonly
         */
        readonly txCarrier: V59String,
        /**
         * @summary `rxCarrier`.
         * @public
         * @readonly
         */
        readonly rxCarrier: V59String,
        /**
         * @summary `carrierLosses`.
         * @public
         * @readonly
         */
        readonly carrierLosses: INTEGER,
        /**
         * @summary `renegRequests`.
         * @public
         * @readonly
         */
        readonly renegRequests: INTEGER,
        /**
         * @summary `renegSuccesses`.
         * @public
         * @readonly
         */
        readonly renegSuccesses: INTEGER,
        /**
         * @summary `retrainRequests`.
         * @public
         * @readonly
         */
        readonly retrainRequests: INTEGER,
        /**
         * @summary `retrainSuccesses`.
         * @public
         * @readonly
         */
        readonly retrainSuccesses: INTEGER,
        /**
         * @summary `callWaiting`.
         * @public
         * @readonly
         */
        readonly callWaiting: OPTIONAL<INTEGER>,
        /**
         * @summary `duration`.
         * @public
         * @readonly
         */
        readonly duration: OPTIONAL<V59String>,
        /**
         * @summary `caller`.
         * @public
         * @readonly
         */
        readonly caller: BOOLEAN,
        /**
         * @summary `reverseRoles`.
         * @public
         * @readonly
         */
        readonly reverseRoles: OPTIONAL<BOOLEAN>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {
        {
                const _n = typeof this.carrierLosses === "bigint" ? Number(this.carrierLosses) : this.carrierLosses;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.carrierLosses violates INTEGER range");
                }
            }

        {
                const _n = typeof this.renegRequests === "bigint" ? Number(this.renegRequests) : this.renegRequests;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.renegRequests violates INTEGER range");
                }
            }

        {
                const _n = typeof this.renegSuccesses === "bigint" ? Number(this.renegSuccesses) : this.renegSuccesses;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.renegSuccesses violates INTEGER range");
                }
            }

        {
                const _n = typeof this.retrainRequests === "bigint" ? Number(this.retrainRequests) : this.retrainRequests;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.retrainRequests violates INTEGER range");
                }
            }

        {
                const _n = typeof this.retrainSuccesses === "bigint" ? Number(this.retrainSuccesses) : this.retrainSuccesses;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.retrainSuccesses violates INTEGER range");
                }
            }

        if (this.callWaiting !== undefined) {
                const _n = typeof this.callWaiting === "bigint" ? Number(this.callWaiting) : this.callWaiting;
                if (_n < 0 || _n > 256) {
                    throw new ASN1OverflowError("CnxDiag_Item.callWaiting violates INTEGER range");
                }
            }}

    /**
     * @summary Restructures an object into a CnxDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `CnxDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CnxDiag_Item`.
     * @returns {CnxDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (CnxDiag_Item)]: (CnxDiag_Item)[_K] }): CnxDiag_Item {
        return new CnxDiag_Item(_o.txCarrier, _o.rxCarrier, _o.carrierLosses, _o.renegRequests, _o.renegSuccesses, _o.retrainRequests, _o.retrainSuccesses, _o.callWaiting, _o.duration, _o.caller, _o.reverseRoles, _o._unrecognizedExtensionsList);
    }

}

/**
 * @summary The Leading Root Component Types of CnxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CnxDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("txCarrier", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("rxCarrier", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("carrierLosses", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("renegRequests", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("renegSuccesses", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("retrainRequests", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("retrainSuccesses", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("callWaiting", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("duration", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("caller", false, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("reverseRoles", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of CnxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CnxDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CnxDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CnxDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CnxDiag_Item: $.ASN1Decoder<CnxDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CnxDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CnxDiag_Item (el: _Element): CnxDiag_Item {
    if (!_cached_decoder_for_CnxDiag_Item) { _cached_decoder_for_CnxDiag_Item = function (el: _Element): CnxDiag_Item {
    let txCarrier!: V59String;
    let rxCarrier!: V59String;
    let carrierLosses!: INTEGER;
    let renegRequests!: INTEGER;
    let renegSuccesses!: INTEGER;
    let retrainRequests!: INTEGER;
    let retrainSuccesses!: INTEGER;
    let callWaiting: OPTIONAL<INTEGER>;
    let duration: OPTIONAL<V59String>;
    let caller!: BOOLEAN;
    let reverseRoles: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "txCarrier": (_el: _Element): void => { txCarrier = _decode_V59String(_el); },
        "rxCarrier": (_el: _Element): void => { rxCarrier = _decode_V59String(_el); },
        "carrierLosses": (_el: _Element): void => { carrierLosses = $._decodeInteger(_el); },
        "renegRequests": (_el: _Element): void => { renegRequests = $._decodeInteger(_el); },
        "renegSuccesses": (_el: _Element): void => { renegSuccesses = $._decodeInteger(_el); },
        "retrainRequests": (_el: _Element): void => { retrainRequests = $._decodeInteger(_el); },
        "retrainSuccesses": (_el: _Element): void => { retrainSuccesses = $._decodeInteger(_el); },
        "callWaiting": (_el: _Element): void => { callWaiting = $._decodeInteger(_el); },
        "duration": (_el: _Element): void => { duration = _decode_V59String(_el); },
        "caller": (_el: _Element): void => { caller = $._decodeBoolean(_el); },
        "reverseRoles": (_el: _Element): void => { reverseRoles = $._decodeBoolean(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CnxDiag_Item,
        _extension_additions_list_spec_for_CnxDiag_Item,
        _root_component_type_list_2_spec_for_CnxDiag_Item,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CnxDiag_Item(
        txCarrier,
        rxCarrier,
        carrierLosses,
        renegRequests,
        renegSuccesses,
        retrainRequests,
        retrainSuccesses,
        callWaiting,
        duration,
        caller,
        reverseRoles,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CnxDiag_Item(el);
}

let _cached_encoder_for_CnxDiag_Item: $.ASN1Encoder<CnxDiag_Item> | null = null;

/**
 * @summary Encodes a(n) CnxDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CnxDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_CnxDiag_Item (value: CnxDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CnxDiag_Item) { _cached_encoder_for_CnxDiag_Item = function (value: CnxDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V59String(value.txCarrier, $.BER),
            /* REQUIRED   */ _encode_V59String(value.rxCarrier, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.carrierLosses, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.renegRequests, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.renegSuccesses, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.retrainRequests, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.retrainSuccesses, $.BER),
            /* IF_ABSENT  */ ((value.callWaiting === undefined) ? undefined : $._encodeInteger(value.callWaiting, $.BER)),
            /* IF_ABSENT  */ ((value.duration === undefined) ? undefined : _encode_V59String(value.duration, $.BER)),
            /* REQUIRED   */ $._encodeBoolean(value.caller, $.BER),
            /* IF_ABSENT  */ ((value.reverseRoles === undefined) ? undefined : $._encodeBoolean(value.reverseRoles, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CnxDiag_Item(value, elGetter);
}

/* eslint-enable */
