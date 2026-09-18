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
import { AttrId, _decode_AttrId, _encode_AttrId } from "../ISO9041-VTP/AttrId.ta.mjs";
// export { AttrId, _decode_AttrId, _encode_AttrId } from "../ISO9041-VTP/AttrId.ta.mjs";
import { LogAttrExtent, _decode_LogAttrExtent, _encode_LogAttrExtent } from "../ISO9041-VTP/LogAttrExtent.ta.mjs";
// export { LogAttrExtent, _decode_LogAttrExtent, _encode_LogAttrExtent } from "../ISO9041-VTP/LogAttrExtent.ta.mjs";


/**
 * @summary DOupdate_writeLogAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DOupdate-writeLogAttr ::= SEQUENCE {
 *     attributeId     AttrId,
 *     logAttrExtent   LogAttrExtent
 * }
 * ```
 * 
 * @class
 */
export
class DOupdate_writeLogAttr {
    constructor (
        /**
         * @summary `attributeId`.
         * @public
         * @readonly
         */
        readonly attributeId: AttrId,
        /**
         * @summary `logAttrExtent`.
         * @public
         * @readonly
         */
        readonly logAttrExtent: LogAttrExtent
    ) {}

    /**
     * @summary Restructures an object into a DOupdate_writeLogAttr
     * @description
     * 
     * This takes an `object` and converts it to a `DOupdate_writeLogAttr`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DOupdate_writeLogAttr`.
     * @returns {DOupdate_writeLogAttr}
     */
    public static _from_object (_o: { [_K in keyof (DOupdate_writeLogAttr)]: (DOupdate_writeLogAttr)[_K] }): DOupdate_writeLogAttr {
        return new DOupdate_writeLogAttr(_o.attributeId, _o.logAttrExtent);
    }


}

/**
 * @summary The Leading Root Component Types of DOupdate_writeLogAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DOupdate_writeLogAttr: $.ComponentSpec[] = [
    new $.ComponentSpec("attributeId", false, $.hasAnyTag),
    new $.ComponentSpec("logAttrExtent", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of DOupdate_writeLogAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DOupdate_writeLogAttr: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DOupdate_writeLogAttr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DOupdate_writeLogAttr: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DOupdate_writeLogAttr: $.ASN1Decoder<DOupdate_writeLogAttr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DOupdate_writeLogAttr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DOupdate_writeLogAttr (el: _Element): DOupdate_writeLogAttr {
    if (!_cached_decoder_for_DOupdate_writeLogAttr) { _cached_decoder_for_DOupdate_writeLogAttr = function (el: _Element): DOupdate_writeLogAttr {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("DOupdate-writeLogAttr contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "attributeId";
    sequence[1].name = "logAttrExtent";
    let attributeId!: AttrId;
    let logAttrExtent!: LogAttrExtent;
    attributeId = _decode_AttrId(sequence[0]);
    logAttrExtent = _decode_LogAttrExtent(sequence[1]);
    return new DOupdate_writeLogAttr(
        attributeId,
        logAttrExtent,

    );
}; }
    return _cached_decoder_for_DOupdate_writeLogAttr(el);
}

let _cached_encoder_for_DOupdate_writeLogAttr: $.ASN1Encoder<DOupdate_writeLogAttr> | null = null;

/**
 * @summary Encodes a(n) DOupdate_writeLogAttr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOupdate_writeLogAttr, encoded as an ASN.1 Element.
 */
export
function _encode_DOupdate_writeLogAttr (value: DOupdate_writeLogAttr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DOupdate_writeLogAttr) { _cached_encoder_for_DOupdate_writeLogAttr = function (value: DOupdate_writeLogAttr): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AttrId(value.attributeId, $.BER),
            /* REQUIRED   */ _encode_LogAttrExtent(value.logAttrExtent, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DOupdate_writeLogAttr(value, elGetter);
}


/* eslint-enable */
