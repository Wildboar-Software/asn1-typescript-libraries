/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
// export { MMSVersion, _decode_MMSVersion, _encode_MMSVersion } from "../TS33128Payloads/MMSVersion.ta.mjs";
import { MMSDirection, _decode_MMSDirection, _encode_MMSDirection, _enum_for_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";
// export { MMSDirection, _enum_for_MMSDirection, MMSDirection_fromTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, fromTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, MMSDirection_toTarget /* IMPORTED_LONG_ENUMERATION_ITEM */, toTarget /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_MMSDirection, _encode_MMSDirection } from "../TS33128Payloads/MMSDirection.ta.mjs";


/**
 * @summary MMSCancel
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSCancel ::= SEQUENCE
 * {
 *     transactionID [1] UTF8String,
 *     version       [2] MMSVersion,
 *     cancelID      [3] UTF8String,
 *     direction     [4] MMSDirection
 * }
 * ```
 * 
 * @class
 */
export
class MMSCancel {
    constructor (
        /**
         * @summary `transactionID`.
         * @public
         * @readonly
         */
        readonly transactionID: UTF8String,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: MMSVersion,
        /**
         * @summary `cancelID`.
         * @public
         * @readonly
         */
        readonly cancelID: UTF8String,
        /**
         * @summary `direction`.
         * @public
         * @readonly
         */
        readonly direction: MMSDirection
    ) {}

    /**
     * @summary Restructures an object into a MMSCancel
     * @description
     * 
     * This takes an `object` and converts it to a `MMSCancel`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSCancel`.
     * @returns {MMSCancel}
     */
    public static _from_object (_o: { [_K in keyof (MMSCancel)]: (MMSCancel)[_K] }): MMSCancel {
        return new MMSCancel(_o.transactionID, _o.version, _o.cancelID, _o.direction);
    }

        /**
         * @summary The enum used as the type of the component `direction`
         * @public
         * @static
         */

    public static _enum_for_direction = _enum_for_MMSDirection;
}

/**
 * @summary The Leading Root Component Types of MMSCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSCancel: $.ComponentSpec[] = [
    new $.ComponentSpec("transactionID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cancelID", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("direction", false, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MMSCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSCancel: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSCancel
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSCancel: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSCancel: $.ASN1Decoder<MMSCancel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSCancel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSCancel (el: _Element): MMSCancel {
    if (!_cached_decoder_for_MMSCancel) { _cached_decoder_for_MMSCancel = function (el: _Element): MMSCancel {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("MMSCancel contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "transactionID";
    sequence[1].name = "version";
    sequence[2].name = "cancelID";
    sequence[3].name = "direction";
    let transactionID!: UTF8String;
    let version!: MMSVersion;
    let cancelID!: UTF8String;
    let direction!: MMSDirection;
    transactionID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[0]);
    version = $._decode_implicit<MMSVersion>(() => _decode_MMSVersion)(sequence[1]);
    cancelID = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(sequence[2]);
    direction = $._decode_implicit<MMSDirection>(() => _decode_MMSDirection)(sequence[3]);
    return new MMSCancel(
        transactionID,
        version,
        cancelID,
        direction,

    );
}; }
    return _cached_decoder_for_MMSCancel(el);
}

let _cached_encoder_for_MMSCancel: $.ASN1Encoder<MMSCancel> | null = null;

/**
 * @summary Encodes a(n) MMSCancel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSCancel, encoded as an ASN.1 Element.
 */
export
function _encode_MMSCancel (value: MMSCancel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSCancel) { _cached_encoder_for_MMSCancel = function (value: MMSCancel, elGetter: $.ASN1Encoder<MMSCancel>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER)(value.transactionID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_MMSVersion, $.BER)(value.version, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeUTF8String, $.BER)(value.cancelID, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => _encode_MMSDirection, $.BER)(value.direction, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MMSCancel(value, elGetter);
}


/* eslint-enable */
