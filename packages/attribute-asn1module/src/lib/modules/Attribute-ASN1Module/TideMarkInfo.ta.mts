/* eslint-disable */
import {
    GeneralizedTime,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { TideMark, _decode_TideMark, _encode_TideMark } from "../Attribute-ASN1Module/TideMark.ta.mjs";
/* START_OF_SYMBOL_DEFINITION TideMarkInfo */
/**
 * @summary TideMarkInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TideMarkInfo ::= SEQUENCE {
 *   currentTideMark   TideMark,
 *   previousTideMark  TideMark,
 *   resetTime         GeneralizedTime
 * }
 * ```
 * 
 * @class
 */
export
class TideMarkInfo {
    constructor (
        /**
         * @summary `currentTideMark`.
         * @public
         * @readonly
         */
        readonly currentTideMark: TideMark,
        /**
         * @summary `previousTideMark`.
         * @public
         * @readonly
         */
        readonly previousTideMark: TideMark,
        /**
         * @summary `resetTime`.
         * @public
         * @readonly
         */
        readonly resetTime: GeneralizedTime
    ) {}

    /**
     * @summary Restructures an object into a TideMarkInfo
     * @description
     * 
     * This takes an `object` and converts it to a `TideMarkInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TideMarkInfo`.
     * @returns {TideMarkInfo}
     */
    public static _from_object (_o: { [_K in keyof (TideMarkInfo)]: (TideMarkInfo)[_K] }): TideMarkInfo {
        return new TideMarkInfo(_o.currentTideMark, _o.previousTideMark, _o.resetTime);
    }


}
/* END_OF_SYMBOL_DEFINITION TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TideMarkInfo */
/**
 * @summary The Leading Root Component Types of TideMarkInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TideMarkInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("currentTideMark", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("previousTideMark", false, $.hasAnyTag, undefined, undefined),
    new $.ComponentSpec("resetTime", false, $.hasTag(_TagClass.universal, 24), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TideMarkInfo */
/**
 * @summary The Trailing Root Component Types of TideMarkInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TideMarkInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TideMarkInfo */
/**
 * @summary The Extension Addition Component Types of TideMarkInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TideMarkInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TideMarkInfo */
let _cached_decoder_for_TideMarkInfo: $.ASN1Decoder<TideMarkInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TideMarkInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TideMarkInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TideMarkInfo} The decoded data structure.
 */
export
function _decode_TideMarkInfo (el: _Element) {
    if (!_cached_decoder_for_TideMarkInfo) { _cached_decoder_for_TideMarkInfo = function (el: _Element): TideMarkInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TideMarkInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currentTideMark";
    sequence[1].name = "previousTideMark";
    sequence[2].name = "resetTime";
    let currentTideMark!: TideMark;
    let previousTideMark!: TideMark;
    let resetTime!: GeneralizedTime;
    currentTideMark = _decode_TideMark(sequence[0]);
    previousTideMark = _decode_TideMark(sequence[1]);
    resetTime = $._decodeGeneralizedTime(sequence[2]);
    return new TideMarkInfo(
        currentTideMark,
        previousTideMark,
        resetTime,

    );
}; }
    return _cached_decoder_for_TideMarkInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TideMarkInfo */
let _cached_encoder_for_TideMarkInfo: $.ASN1Encoder<TideMarkInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TideMarkInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TideMarkInfo */
/**
 * @summary Encodes a(n) TideMarkInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TideMarkInfo, encoded as an ASN.1 Element.
 */
export
function _encode_TideMarkInfo (value: TideMarkInfo, elGetter: $.ASN1Encoder<TideMarkInfo>) {
    if (!_cached_encoder_for_TideMarkInfo) { _cached_encoder_for_TideMarkInfo = function (value: TideMarkInfo): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_TideMark(value.currentTideMark, $.BER),
            /* REQUIRED   */ _encode_TideMark(value.previousTideMark, $.BER),
            /* REQUIRED   */ $._encodeGeneralizedTime(value.resetTime, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TideMarkInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TideMarkInfo */

/* eslint-enable */
