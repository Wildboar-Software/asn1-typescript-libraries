/* eslint-disable */
import {
    BOOLEAN,
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
import { ObservedValue, _decode_ObservedValue, _encode_ObservedValue } from "../Attribute-ASN1Module/ObservedValue.ta.mjs";
/**
 * @summary NotifyThreshold
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotifyThreshold ::= SEQUENCE {threshold    ObservedValue,
 *                               notifyOnOff  BOOLEAN
 * }
 * ```
 * 
 */
export
class NotifyThreshold {
    constructor (
        /**
         * @summary `threshold`.
         * @public
         * @readonly
         */
        readonly threshold: ObservedValue,
        /**
         * @summary `notifyOnOff`.
         * @public
         * @readonly
         */
        readonly notifyOnOff: BOOLEAN
    ) {}

    /**
     * @summary Restructures an object into a NotifyThreshold
     * @description
     * 
     * This takes an `object` and converts it to a `NotifyThreshold`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotifyThreshold`.
     * @returns {NotifyThreshold}
     */
    public static _from_object (_o: { [_K in keyof (NotifyThreshold)]: (NotifyThreshold)[_K] }): NotifyThreshold {
        return new NotifyThreshold(_o.threshold, _o.notifyOnOff);
    }


}

/**
 * @summary The Leading Root Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    new $.ComponentSpec("threshold", false, $.hasAnyTag),
    new $.ComponentSpec("notifyOnOff", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotifyThreshold
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotifyThreshold: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotifyThreshold: $.ASN1Decoder<NotifyThreshold> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotifyThreshold
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NotifyThreshold} The decoded data structure.
 */
export
function _decode_NotifyThreshold (el: _Element): NotifyThreshold {
    if (!_cached_decoder_for_NotifyThreshold) { _cached_decoder_for_NotifyThreshold = function (el: _Element): NotifyThreshold {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NotifyThreshold contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "threshold";
    sequence[1].name = "notifyOnOff";
    let threshold!: ObservedValue;
    let notifyOnOff!: BOOLEAN;
    threshold = _decode_ObservedValue(sequence[0]);
    notifyOnOff = $._decodeBoolean(sequence[1]);
    return new NotifyThreshold(
        threshold,
        notifyOnOff,

    );
}; }
    return _cached_decoder_for_NotifyThreshold(el);
}

let _cached_encoder_for_NotifyThreshold: $.ASN1Encoder<NotifyThreshold> | null = null;

/**
 * @summary Encodes a(n) NotifyThreshold into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotifyThreshold, encoded as an ASN.1 Element.
 */
export
function _encode_NotifyThreshold (value: NotifyThreshold, elGetter: $.ASN1Encoder<NotifyThreshold>): _Element {
    if (!_cached_encoder_for_NotifyThreshold) { _cached_encoder_for_NotifyThreshold = function (value: NotifyThreshold): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObservedValue(value.threshold, $.BER),
            /* REQUIRED   */ $._encodeBoolean(value.notifyOnOff, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotifyThreshold(value, elGetter);
}


/* eslint-enable */
