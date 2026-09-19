/* eslint-disable */
import {
    BOOLEAN,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";
// export { GUAMI, _decode_GUAMI, _encode_GUAMI } from "../TS33128Payloads/GUAMI.ta.mjs";


/**
 * @summary UDMAMFDeregistrationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMAMFDeregistrationInfo ::= SEQUENCE
 * {
 *     gUAMI                   [1] GUAMI,
 *     purgeFlag               [2] BOOLEAN
 * }
 * ```
 * 
 * @class
 */
export
class UDMAMFDeregistrationInfo {
    constructor (
        /**
         * @summary `gUAMI`.
         * @public
         * @readonly
         */
        readonly gUAMI: GUAMI,
        /**
         * @summary `purgeFlag`.
         * @public
         * @readonly
         */
        readonly purgeFlag: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a UDMAMFDeregistrationInfo
     * @description
     * 
     * This takes an `object` and converts it to a `UDMAMFDeregistrationInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMAMFDeregistrationInfo`.
     * @returns {UDMAMFDeregistrationInfo}
     */
    public static _from_object (_o: { [_K in keyof (UDMAMFDeregistrationInfo)]: (UDMAMFDeregistrationInfo)[_K] }): UDMAMFDeregistrationInfo {
        return new UDMAMFDeregistrationInfo(_o.gUAMI, _o.purgeFlag);
    }


}

/**
 * @summary The Leading Root Component Types of UDMAMFDeregistrationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMAMFDeregistrationInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("gUAMI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("purgeFlag", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UDMAMFDeregistrationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMAMFDeregistrationInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMAMFDeregistrationInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMAMFDeregistrationInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMAMFDeregistrationInfo: $.ASN1Decoder<UDMAMFDeregistrationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMAMFDeregistrationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMAMFDeregistrationInfo (el: _Element): UDMAMFDeregistrationInfo {
    if (!_cached_decoder_for_UDMAMFDeregistrationInfo) { _cached_decoder_for_UDMAMFDeregistrationInfo = function (el: _Element): UDMAMFDeregistrationInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UDMAMFDeregistrationInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "gUAMI";
    sequence[1].name = "purgeFlag";
    let gUAMI!: GUAMI;
    let purgeFlag!: BOOLEAN;
    gUAMI = $._decode_implicit<GUAMI>(() => _decode_GUAMI)(sequence[0]);
    purgeFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(sequence[1]);
    return new UDMAMFDeregistrationInfo(
        gUAMI,
        purgeFlag,

    );
}; }
    return _cached_decoder_for_UDMAMFDeregistrationInfo(el);
}

let _cached_encoder_for_UDMAMFDeregistrationInfo: $.ASN1Encoder<UDMAMFDeregistrationInfo> | null = null;

/**
 * @summary Encodes a(n) UDMAMFDeregistrationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMAMFDeregistrationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_UDMAMFDeregistrationInfo (value: UDMAMFDeregistrationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMAMFDeregistrationInfo) { _cached_encoder_for_UDMAMFDeregistrationInfo = function (value: UDMAMFDeregistrationInfo, elGetter: $.ASN1Encoder<UDMAMFDeregistrationInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GUAMI, $.BER)(value.gUAMI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.purgeFlag, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMAMFDeregistrationInfo(value, elGetter);
}


/* eslint-enable */
