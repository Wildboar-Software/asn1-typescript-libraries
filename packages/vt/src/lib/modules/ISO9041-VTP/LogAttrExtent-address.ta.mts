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
import { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";
// export { LogPointer, _decode_LogPointer, _encode_LogPointer } from "../ISO9041-VTP/LogPointer.ta.mjs";


/**
 * @summary LogAttrExtent_address
 * @description
 *
 * Address alternative of `LogAttrExtent`: logical ATTRIBUTE from
 * `beginning` through `ending` `LogPointer`s.
 * ISO/IEC 9040:1997 §19.4.1.3, §19.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogAttrExtent-address ::= SEQUENCE {
 *     beginning LogPointer,
 *     ending LogPointer
 * }
 * ```
 * 
 * @class
 */
export
class LogAttrExtent_address {
    constructor (
        /**
         * @summary `beginning`.
         * @description
         * Start of the logical attribute extent.
         * ISO/IEC 9040:1997 §19.4.1.3, §19.4.2.
         * @public
         * @readonly
         */
        readonly beginning: LogPointer,
        /**
         * @summary `ending`.
         * @description
         * End of the logical attribute extent; must be ≥ `beginning`.
         * ISO/IEC 9040:1997 §19.4.1.3, §19.4.2.
         * @public
         * @readonly
         */
        readonly ending: LogPointer
    ) {}

    /**
     * @summary Restructures an object into a LogAttrExtent_address
     * @description
     * 
     * This takes an `object` and converts it to a `LogAttrExtent_address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `LogAttrExtent_address`.
     * @returns {LogAttrExtent_address}
     */
    public static _from_object (_o: { [_K in keyof (LogAttrExtent_address)]: (LogAttrExtent_address)[_K] }): LogAttrExtent_address {
        return new LogAttrExtent_address(_o.beginning, _o.ending);
    }


}

/**
 * @summary The Leading Root Component Types of LogAttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_LogAttrExtent_address: $.ComponentSpec[] = [
    new $.ComponentSpec("beginning", false, $.hasAnyTag),
    new $.ComponentSpec("ending", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of LogAttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_LogAttrExtent_address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of LogAttrExtent_address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_LogAttrExtent_address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_LogAttrExtent_address: $.ASN1Decoder<LogAttrExtent_address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogAttrExtent_address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogAttrExtent_address (el: _Element): LogAttrExtent_address {
    if (!_cached_decoder_for_LogAttrExtent_address) { _cached_decoder_for_LogAttrExtent_address = function (el: _Element): LogAttrExtent_address {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("LogAttrExtent-address contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "beginning";
    sequence[1].name = "ending";
    const beginning: LogPointer = _decode_LogPointer(sequence[0]);
    const ending: LogPointer = _decode_LogPointer(sequence[1]);
    return new LogAttrExtent_address(
        beginning,
        ending,

    );
}; }
    return _cached_decoder_for_LogAttrExtent_address(el);
}

let _cached_encoder_for_LogAttrExtent_address: $.ASN1Encoder<LogAttrExtent_address> | null = null;

/**
 * @summary Encodes a(n) LogAttrExtent_address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogAttrExtent_address, encoded as an ASN.1 Element.
 */
export
function _encode_LogAttrExtent_address (value: LogAttrExtent_address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogAttrExtent_address) { _cached_encoder_for_LogAttrExtent_address = function (value: LogAttrExtent_address): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogPointer(value.beginning, $.BER),
            /* REQUIRED   */ _encode_LogPointer(value.ending, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_LogAttrExtent_address(value, elGetter);
}


/* eslint-enable */
