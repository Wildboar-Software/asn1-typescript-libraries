/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
/* START_OF_SYMBOL_DEFINITION OtherRevVals */
/**
 * @summary OtherRevVals
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRevVals ::= SEQUENCE {
 *     otherRevValType     OTHER-REVOCATION-VAL.&id,
 *     otherRevVals        SEQUENCE OF OTHER-REVOCATION-REF.&Type }
 * ```
 * 
 * @class
 */
export
class OtherRevVals {
    constructor (
        /**
         * @summary `otherRevValType`.
         * @public
         * @readonly
         */
        readonly otherRevValType: OBJECT_IDENTIFIER,
        /**
         * @summary `otherRevVals`.
         * @public
         * @readonly
         */
        readonly otherRevVals: _Element[]
    ) {}

    /**
     * @summary Restructures an object into a OtherRevVals
     * @description
     * 
     * This takes an `object` and converts it to a `OtherRevVals`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRevVals`.
     * @returns {OtherRevVals}
     */
    public static _from_object (_o: { [_K in keyof (OtherRevVals)]: (OtherRevVals)[_K] }): OtherRevVals {
        return new OtherRevVals(_o.otherRevValType, _o.otherRevVals);
    }


}
/* END_OF_SYMBOL_DEFINITION OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevVals */
/**
 * @summary The Leading Root Component Types of OtherRevVals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherRevVals: $.ComponentSpec[] = [
    new $.ComponentSpec("otherRevValType", false, $.hasTag(_TagClass.universal, 6), undefined, undefined),
    new $.ComponentSpec("otherRevVals", false, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevVals */
/**
 * @summary The Trailing Root Component Types of OtherRevVals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherRevVals: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevVals */
/**
 * @summary The Extension Addition Component Types of OtherRevVals
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherRevVals: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevVals */
let _cached_decoder_for_OtherRevVals: $.ASN1Decoder<OtherRevVals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _decode_OtherRevVals */
/**
 * @summary Decodes an ASN.1 element into a(n) OtherRevVals
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OtherRevVals} The decoded data structure.
 */
export
function _decode_OtherRevVals (el: _Element) {
    if (!_cached_decoder_for_OtherRevVals) { _cached_decoder_for_OtherRevVals = function (el: _Element): OtherRevVals {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("OtherRevVals contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "otherRevValType";
    sequence[1].name = "otherRevVals";
    let otherRevValType!: OBJECT_IDENTIFIER;
    let otherRevVals!: _Element[];
    otherRevValType = $._decodeObjectIdentifier(sequence[0]);
    otherRevVals = $._decodeSequenceOf<_Element>(() => $._decodeAny)(sequence[1]);
    return new OtherRevVals(
        otherRevValType,
        otherRevVals,

    );
}; }
    return _cached_decoder_for_OtherRevVals(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevVals */
let _cached_encoder_for_OtherRevVals: $.ASN1Encoder<OtherRevVals> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OtherRevVals */

/* START_OF_SYMBOL_DEFINITION _encode_OtherRevVals */
/**
 * @summary Encodes a(n) OtherRevVals into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRevVals, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRevVals (value: OtherRevVals, elGetter: $.ASN1Encoder<OtherRevVals>) {
    if (!_cached_encoder_for_OtherRevVals) { _cached_encoder_for_OtherRevVals = function (value: OtherRevVals): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.otherRevValType, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<_Element>(() => $._encodeAny, $.BER)(value.otherRevVals, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherRevVals(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OtherRevVals */

/* eslint-enable */
