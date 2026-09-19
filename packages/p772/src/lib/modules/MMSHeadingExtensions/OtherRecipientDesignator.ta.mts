/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OtherRecipientDesignator_type, _decode_OtherRecipientDesignator_type, _encode_OtherRecipientDesignator_type } from "../MMSHeadingExtensions/OtherRecipientDesignator-type.ta.mjs";
// export { OtherRecipientDesignator_type, OtherRecipientDesignator_type_primary /* IMPORTED_LONG_NAMED_INTEGER */, primary /* IMPORTED_SHORT_NAMED_INTEGER */, OtherRecipientDesignator_type_copy /* IMPORTED_LONG_NAMED_INTEGER */, copy /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_OtherRecipientDesignator_type, _encode_OtherRecipientDesignator_type } from "../MMSHeadingExtensions/OtherRecipientDesignator-type.ta.mjs";
import { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";
// export { MilitaryString, _decode_MilitaryString, _encode_MilitaryString } from "../MMSHeadingExtensions/MilitaryString.ta.mjs";


/**
 * @summary OtherRecipientDesignator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientDesignator ::= SET {
 *   type        [0]  INTEGER {primary(0), copy(1)},
 *   designator  [1]  MilitaryString}
 * ```
 * 
 * @class
 */
export
class OtherRecipientDesignator {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OtherRecipientDesignator_type,
        /**
         * @summary `designator`.
         * @public
         * @readonly
         */
        readonly designator: MilitaryString
    ) {}

    /**
     * @summary Restructures an object into a OtherRecipientDesignator
     * @description
     * 
     * This takes an `object` and converts it to a `OtherRecipientDesignator`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `OtherRecipientDesignator`.
     * @returns {OtherRecipientDesignator}
     */
    public static _from_object (_o: { [_K in keyof (OtherRecipientDesignator)]: (OtherRecipientDesignator)[_K] }): OtherRecipientDesignator {
        return new OtherRecipientDesignator(_o.type_, _o.designator);
    }


}

/**
 * @summary The Leading Root Component Types of OtherRecipientDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_OtherRecipientDesignator: $.ComponentSpec[] = [
    new $.ComponentSpec("type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("designator", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of OtherRecipientDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_OtherRecipientDesignator: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of OtherRecipientDesignator
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_OtherRecipientDesignator: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_OtherRecipientDesignator: $.ASN1Decoder<OtherRecipientDesignator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OtherRecipientDesignator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OtherRecipientDesignator (el: _Element): OtherRecipientDesignator {
    if (!_cached_decoder_for_OtherRecipientDesignator) { _cached_decoder_for_OtherRecipientDesignator = function (el: _Element): OtherRecipientDesignator {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let type_!: OtherRecipientDesignator_type;
    let designator!: MilitaryString;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OtherRecipientDesignator_type>(() => _decode_OtherRecipientDesignator_type)(_el); },
        "designator": (_el: _Element): void => { designator = $._decode_implicit<MilitaryString>(() => _decode_MilitaryString)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_OtherRecipientDesignator,
        _extension_additions_list_spec_for_OtherRecipientDesignator,
        _root_component_type_list_2_spec_for_OtherRecipientDesignator,
        undefined,
    );
    return new OtherRecipientDesignator( /* SET_CONSTRUCTOR_CALL */
        type_,
        designator
    );
}; }
    return _cached_decoder_for_OtherRecipientDesignator(el);
}

let _cached_encoder_for_OtherRecipientDesignator: $.ASN1Encoder<OtherRecipientDesignator> | null = null;

/**
 * @summary Encodes a(n) OtherRecipientDesignator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OtherRecipientDesignator, encoded as an ASN.1 Element.
 */
export
function _encode_OtherRecipientDesignator (value: OtherRecipientDesignator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OtherRecipientDesignator) { _cached_encoder_for_OtherRecipientDesignator = function (value: OtherRecipientDesignator, elGetter: $.ASN1Encoder<OtherRecipientDesignator>): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_OtherRecipientDesignator_type, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_MilitaryString, $.BER)(value.designator, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_OtherRecipientDesignator(value, elGetter);
}


/* eslint-enable */
