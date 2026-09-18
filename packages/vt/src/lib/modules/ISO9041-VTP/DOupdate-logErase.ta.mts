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
import { EraseAttr, _decode_EraseAttr, _encode_EraseAttr } from "../ISO9041-VTP/EraseAttr.ta.mjs";
// export { EraseAttr, _decode_EraseAttr, _encode_EraseAttr } from "../ISO9041-VTP/EraseAttr.ta.mjs";


/**
 * @summary DOupdate_logErase
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-logErase ::= SEQUENCE {
 *     logStartErase   LogPointer,
 *     logEndErase     LogPointer,
 *     attribute       EraseAttr
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_logErase {
    constructor (
        /**
         * @summary `logStartErase`.
         * @public
         * @readonly
         */
        readonly logStartErase: LogPointer,
        /**
         * @summary `logEndErase`.
         * @public
         * @readonly
         */
        readonly logEndErase: LogPointer,
        /**
         * @summary `attribute`.
         * @public
         * @readonly
         */
        readonly attribute: EraseAttr
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_logErase
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_logErase`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_logErase`.
     * @returns {DOupdate_logErase}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_logErase)]: (DOupdate_logErase)[_K] }): DOupdate_logErase {
        return new DOupdate_logErase(_o.logStartErase, _o.logEndErase, _o.attribute);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_logErase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_logErase: $.ComponentSpec[] = [
    new $.ComponentSpec("logStartErase", false, $.hasAnyTag),
    new $.ComponentSpec("logEndErase", false, $.hasAnyTag),
    new $.ComponentSpec("attribute", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_logErase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_logErase: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_logErase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_logErase: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_logErase: $.ASN1Decoder<DOupdate_logErase> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_logErase
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_logErase (el: _Element): DOupdate_logErase {
    if (!_cached_decoder_for_DOupdate_logErase) { _cached_decoder_for_DOupdate_logErase = function (el: _Element): DOupdate_logErase {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DOupdate-logErase contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "logStartErase";
    sequence[1].name = "logEndErase";
    sequence[2].name = "attribute";
    const logStartErase: LogPointer = _decode_LogPointer(sequence[0]);
    const logEndErase: LogPointer = _decode_LogPointer(sequence[1]);
    const attribute: EraseAttr = _decode_EraseAttr(sequence[2]);
    return new DOupdate_logErase(
        logStartErase,
        logEndErase,
        attribute,

    );
}; }
    return _cached_decoder_for_DOupdate_logErase(el);
}

let _cached_encoder_for_DOupdate_logErase: $.ASN1Encoder<DOupdate_logErase> | null = null;

/**
 * @summary Encodes a(n) DOupdate_logErase into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_logErase, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_logErase (value: DOupdate_logErase, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_logErase) { _cached_encoder_for_DOupdate_logErase = function (value: DOupdate_logErase): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_LogPointer(value.logStartErase, $.BER),
            /* REQUIRED   */ _encode_LogPointer(value.logEndErase, $.BER),
            /* REQUIRED   */ _encode_EraseAttr(value.attribute, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_logErase(value, elGetter);
}


/* eslint-enable */
