/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { V8bisSignalType, _decode_V8bisSignalType, _encode_V8bisSignalType } from "../V59/V8bisSignalType.ta.mjs";

import { V59String, _decode_V59String, _encode_V59String } from "../V59/V59String.ta.mjs";

/**
 * @summary V8bisDiag_Item_mR
 * @description
 *
 * MR signal type and exchanged sequence. ITU-T Rec. V.59 (11/2000) §6.8.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag-Item-mR ::= SEQUENCE {mRtype      V8bisSignalType,
 *                           mRSequence  V59String}
 * ```
 * 
 * @class
 */
export
class V8bisDiag_Item_mR {
    constructor (
        /**
         * @summary `mRtype`.
         * @description
         *
         * MR type transmitted or received (Table 7/V.59 via `V8bisSignalType`).
         * Tag-ID `0802`. ITU-T Rec. V.59 (11/2000) §6.8.2.
         * @public
         * @readonly
         */
        readonly mRtype: V8bisSignalType,
        /**
         * @summary `mRSequence`.
         * @description
         *
         * MR sequence transmitted or received. Hex `dataSequence` (§6.2.2):
         * first bit in time is the LSB of each hex word; omit start/stop/fill
         * bits and CRCs; `;` delimits N-bit words. Tag-ID `0803`. ITU-T Rec.
         * V.59 (11/2000) §6.8.2.
         * @public
         * @readonly
         */
        readonly mRSequence: V59String
    ) {}

    /**
     * @summary Restructures an object into a V8bisDiag_Item_mR
     * @description
     * 
     * This takes an `object` and converts it to a `V8bisDiag_Item_mR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `V8bisDiag_Item_mR`.
     * @returns {V8bisDiag_Item_mR}
     */
    public static _from_object (_o: { [_K in keyof (V8bisDiag_Item_mR)]: (V8bisDiag_Item_mR)[_K] }): V8bisDiag_Item_mR {
        return new V8bisDiag_Item_mR(_o.mRtype, _o.mRSequence);
    }

}

/**
 * @summary The Leading Root Component Types of V8bisDiag_Item_mR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_V8bisDiag_Item_mR: $.ComponentSpec[] = [
    new $.ComponentSpec("mRtype", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("mRSequence", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of V8bisDiag_Item_mR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_V8bisDiag_Item_mR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of V8bisDiag_Item_mR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_V8bisDiag_Item_mR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_V8bisDiag_Item_mR: $.ASN1Decoder<V8bisDiag_Item_mR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag_Item_mR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag_Item_mR (el: _Element): V8bisDiag_Item_mR {
    if (!_cached_decoder_for_V8bisDiag_Item_mR) { _cached_decoder_for_V8bisDiag_Item_mR = function (el: _Element): V8bisDiag_Item_mR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("V8bisDiag-Item-mR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "mRtype";
    sequence[1].name = "mRSequence";
    let mRtype!: V8bisSignalType;
    let mRSequence!: V59String;
    mRtype = _decode_V8bisSignalType(sequence[0]);
    mRSequence = _decode_V59String(sequence[1]);
    return new V8bisDiag_Item_mR(
        mRtype,
        mRSequence,

    );
}; }
    return _cached_decoder_for_V8bisDiag_Item_mR(el);
}

let _cached_encoder_for_V8bisDiag_Item_mR: $.ASN1Encoder<V8bisDiag_Item_mR> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag_Item_mR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag_Item_mR, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag_Item_mR (value: V8bisDiag_Item_mR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag_Item_mR) { _cached_encoder_for_V8bisDiag_Item_mR = function (value: V8bisDiag_Item_mR): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_V8bisSignalType(value.mRtype, $.BER),
            /* REQUIRED   */ _encode_V59String(value.mRSequence, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_V8bisDiag_Item_mR(value, elGetter);
}

/* eslint-enable */
