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
import { V8bisDiag_Item_mR, _decode_V8bisDiag_Item_mR, _encode_V8bisDiag_Item_mR } from "../V59/V8bisDiag-Item-mR.ta.mjs";

import { V8bisDiag_Item_cR, _decode_V8bisDiag_Item_cR, _encode_V8bisDiag_Item_cR } from "../V59/V8bisDiag-Item-cR.ta.mjs";

import { V8bisDiag_Item_cL, _decode_V8bisDiag_Item_cL, _encode_V8bisDiag_Item_cL } from "../V59/V8bisDiag-Item-cL.ta.mjs";

import { V8bisDiag_Item_cLR, _decode_V8bisDiag_Item_cLR, _encode_V8bisDiag_Item_cLR } from "../V59/V8bisDiag-Item-cLR.ta.mjs";

import { V8bisDiag_Item_eS, _decode_V8bisDiag_Item_eS, _encode_V8bisDiag_Item_eS } from "../V59/V8bisDiag-Item-eS.ta.mjs";

import { V8bisDiag_Item_ackNak, _decode_V8bisDiag_Item_ackNak, _encode_V8bisDiag_Item_ackNak } from "../V59/V8bisDiag-Item-ackNak.ta.mjs";

/**
 * @summary V8bisDiag_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item ::= SEQUENCE {v8bisTransaction  INTEGER(1..13),
 *               mR
 *                 SEQUENCE {mRtype      V8bisSignalType,
 *                           mRSequence  V59String},
 *               cR
 *                 SEQUENCE {cRtype      V8bisSignalType,
 *                           cRSequence  V59String},
 *               cL                SEQUENCE {cLSequence  V59String},
 *               cLR               SEQUENCE {cLRSequence  V59String},
 *               eS
 *                 SEQUENCE {eSType
 *                             CHOICE {nONE  INTEGER(0),
 *                                     i     INTEGER(1),
 *                                     r     INTEGER(2)},
 *                           eSSequence  V59String},
 *               ackNak
 *                 SEQUENCE {aCK
 *                             CHOICE {nONE  INTEGER(0),
 *                                     aCK1  INTEGER(1),
 *                                     aCK2  INTEGER(2)},
 *                           nAK
 *                             CHOICE {none  INTEGER(0),
 *                                     nAK1  INTEGER(1),
 *                                     nAK2  INTEGER(2),
 *                                     nAK3  INTEGER(3),
 *                                     nAK4  INTEGER(4)}}}
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item {
    constructor (
        /**
         * @summary `v8bisTransaction`.
         * @public
         * @readonly
         */
        readonly v8bisTransaction: INTEGER,
        /**
         * @summary `mR`.
         * @public
         * @readonly
         */
        readonly mR: V8bisDiag_Item_mR,
        /**
         * @summary `cR`.
         * @public
         * @readonly
         */
        readonly cR: V8bisDiag_Item_cR,
        /**
         * @summary `cL`.
         * @public
         * @readonly
         */
        readonly cL: V8bisDiag_Item_cL,
        /**
         * @summary `cLR`.
         * @public
         * @readonly
         */
        readonly cLR: V8bisDiag_Item_cLR,
        /**
         * @summary `eS`.
         * @public
         * @readonly
         */
        readonly eS: V8bisDiag_Item_eS,
        /**
         * @summary `ackNak`.
         * @public
         * @readonly
         */
        readonly ackNak: V8bisDiag_Item_ackNak
    ) {
        {
                const _n = typeof this.v8bisTransaction === "bigint" ? Number(this.v8bisTransaction) : this.v8bisTransaction;
                if (_n < 1 || _n > 13) {
                    throw new ASN1OverflowError("V8bisDiag_Item.v8bisTransaction violates INTEGER range");
                }
            }}

    /**
     * @summary Restructures an object into a V8bisDiag_Item
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item`.
     * @returns {V8bisDiag_Item}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item)]: (V8bisDiag_Item)[_K] }): V8bisDiag_Item {
        return new V8bisDiag_Item(_o.v8bisTransaction, _o.mR, _o.cR, _o.cL, _o.cLR, _o.eS, _o.ackNak);
    }

}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("v8bisTransaction", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mR", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("cR", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cL", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("cLR", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("eS", false, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("ackNak", false, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item: $.ASN1Decoder<V8bisDiag_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item (el: _Element): V8bisDiag_Item {
    if (!_cached_decoder_for_V8bisDiag_Item) { _cached_decoder_for_V8bisDiag_Item = function (el: _Element): V8bisDiag_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 7) {
        throw new _ConstructionError("V8bisDiag-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "v8bisTransaction";
    sequence[1].name = "mR";
    sequence[2].name = "cR";
    sequence[3].name = "cL";
    sequence[4].name = "cLR";
    sequence[5].name = "eS";
    sequence[6].name = "ackNak";
    let v8bisTransaction!: INTEGER;
    let mR!: V8bisDiag_Item_mR;
    let cR!: V8bisDiag_Item_cR;
    let cL!: V8bisDiag_Item_cL;
    let cLR!: V8bisDiag_Item_cLR;
    let eS!: V8bisDiag_Item_eS;
    let ackNak!: V8bisDiag_Item_ackNak;
    v8bisTransaction = $._decodeInteger(sequence[0]);
    mR = _decode_V8bisDiag_Item_mR(sequence[1]);
    cR = _decode_V8bisDiag_Item_cR(sequence[2]);
    cL = _decode_V8bisDiag_Item_cL(sequence[3]);
    cLR = _decode_V8bisDiag_Item_cLR(sequence[4]);
    eS = _decode_V8bisDiag_Item_eS(sequence[5]);
    ackNak = _decode_V8bisDiag_Item_ackNak(sequence[6]);
    return new V8bisDiag_Item(
        v8bisTransaction,
        mR,
        cR,
        cL,
        cLR,
        eS,
        ackNak,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item(el);
}

let _cached_encoder_for_V8bisDiag_Item: $.ASN1Encoder<V8bisDiag_Item> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item (value: V8bisDiag_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item) { _cached_encoder_for_V8bisDiag_Item = function (value: V8bisDiag_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeInteger(value.v8bisTransaction, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_mR(value.mR, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_cR(value.cR, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_cL(value.cL, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_cLR(value.cLR, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_eS(value.eS, $.BER),
            /* REQUIRED   */ _encode_V8bisDiag_Item_ackNak(value.ackNak, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item(value, elGetter);
}

/* eslint-enable */
