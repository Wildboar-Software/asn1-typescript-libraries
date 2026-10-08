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
import { Pointer, _decode_Pointer, _encode_Pointer } from "../ISO9041-VTP/Pointer.ta.mjs";
import { EraseAttr, _decode_EraseAttr, _encode_EraseAttr } from "../ISO9041-VTP/EraseAttr.ta.mjs";


/**
 * @summary DOupdate_erase
 * @description
 *
 * ERASE from `startErase` to `endErase`. Does not move the display
 * pointer. If ripple is enabled, replaced by backward x-ripple.
 * Requires erasure-capability `"yes"`.
 * ISO/IEC 9040:1997 §19.4.1.4, §18.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-erase ::= SEQUENCE {
 *     startErase  Pointer,
 *     endErase    Pointer,
 *     attribute   EraseAttr
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_erase {
    constructor (
        /**
         * @summary `startErase`.
         * @description
         * Start of the erase extent. ISO/IEC 9040:1997 §19.4.1.4.
         * @public
         * @readonly
         */
        readonly startErase: Pointer,
        /**
         * @summary `endErase`.
         * @description
         * End of the erase extent. ISO/IEC 9040:1997 §19.4.1.4.
         * @public
         * @readonly
         */
        readonly endErase: Pointer,
        /**
         * @summary `attribute`.
         * @description
         * TRUE also resets secondary attributes to explicit modal
         * defaults (reset-attribute `"yes"`); FALSE leaves them.
         * ISO/IEC 9040:1997 §19.4.1.4.
         * @public
         * @readonly
         */
        readonly attribute: EraseAttr
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_erase
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_erase`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_erase`.
     * @returns {DOupdate_erase}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_erase)]: (DOupdate_erase)[_K] }): DOupdate_erase {
        return new DOupdate_erase(_o.startErase, _o.endErase, _o.attribute);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_erase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_erase: $.ComponentSpec[] = [
    new $.ComponentSpec("startErase", false, $.hasAnyTag),
    new $.ComponentSpec("endErase", false, $.hasAnyTag),
    new $.ComponentSpec("attribute", false, $.hasTag(_TagClass.universal, 1))
];

/**
 * @summary The Trailing Root Component Types of DOupdate_erase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_erase: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_erase
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_erase: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_erase: $.ASN1Decoder<DOupdate_erase> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_erase
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_erase (el: _Element): DOupdate_erase {
    if (!_cached_decoder_for_DOupdate_erase) { _cached_decoder_for_DOupdate_erase = function (el: _Element): DOupdate_erase {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("DOupdate-erase contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "startErase";
    sequence[1].name = "endErase";
    sequence[2].name = "attribute";
    const startErase: Pointer = _decode_Pointer(sequence[0]);
    const endErase: Pointer = _decode_Pointer(sequence[1]);
    const attribute: EraseAttr = _decode_EraseAttr(sequence[2]);
    return new DOupdate_erase(
        startErase,
        endErase,
        attribute,

    );
}; }
    return _cached_decoder_for_DOupdate_erase(el);
}

let _cached_encoder_for_DOupdate_erase: $.ASN1Encoder<DOupdate_erase> | null = null;

/**
 * @summary Encodes a(n) DOupdate_erase into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_erase, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_erase (value: DOupdate_erase, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_erase) { _cached_encoder_for_DOupdate_erase = function (value: DOupdate_erase): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Pointer(value.startErase, $.BER),
            /* REQUIRED   */ _encode_Pointer(value.endErase, $.BER),
            /* REQUIRED   */ _encode_EraseAttr(value.attribute, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_erase(value, elGetter);
}


/* eslint-enable */
