/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type DATE_TIME,
    type OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ValidityPeriod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriod ::= SEQUENCE {
 *     notValidBefore  DATE-TIME OPTIONAL,
 *     notValidAfter   DATE-TIME OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ValidityPeriod {
    /**
     * @summary `notValidBefore`.
     * @public
     * @readonly
     */
    readonly notValidBefore: OPTIONAL<DATE_TIME>;
    /**
     * @summary `notValidAfter`.
     * @public
     * @readonly
     */
    readonly notValidAfter: OPTIONAL<DATE_TIME>;

    constructor (
        notValidBefore?: OPTIONAL<DATE_TIME>,
        notValidAfter?: OPTIONAL<DATE_TIME>
    ) {
        this.notValidBefore = notValidBefore;
        this.notValidAfter = notValidAfter;
    }

    /**
     * @summary Restructures an object into a ValidityPeriod
     * @description
     * 
     * This takes an `object` and converts it to a `ValidityPeriod`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ValidityPeriod`.
     * @returns {ValidityPeriod}
     */
    public static _from_object (_o: { [_K in keyof (ValidityPeriod)]: (ValidityPeriod)[_K] }): ValidityPeriod {
        return new ValidityPeriod(_o.notValidBefore, _o.notValidAfter);
    }


}

/**
 * @summary The Leading Root Component Types of ValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ValidityPeriod: $.ComponentSpec[] = [
    new $.ComponentSpec("notValidBefore", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notValidAfter", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ValidityPeriod: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ValidityPeriod
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ValidityPeriod: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ValidityPeriod: $.ASN1Decoder<ValidityPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidityPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValidityPeriod (el: _Element): ValidityPeriod {
    if (!_cached_decoder_for_ValidityPeriod) { _cached_decoder_for_ValidityPeriod = function (el: _Element): ValidityPeriod {
    let notValidBefore: OPTIONAL<DATE_TIME>;
    let notValidAfter: OPTIONAL<DATE_TIME>;
    const callbacks: $.DecodingMap = {
        "notValidBefore": (_el: _Element): void => { notValidBefore = $._decodeDateTime(_el); },
        "notValidAfter": (_el: _Element): void => { notValidAfter = $._decodeDateTime(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ValidityPeriod,
        _extension_additions_list_spec_for_ValidityPeriod,
        _root_component_type_list_2_spec_for_ValidityPeriod,
        undefined,
    );
    return new ValidityPeriod(
        notValidBefore,
        notValidAfter
    );
}; }
    return _cached_decoder_for_ValidityPeriod(el);
}

let _cached_encoder_for_ValidityPeriod: $.ASN1Encoder<ValidityPeriod> | null = null;

/**
 * @summary Encodes a(n) ValidityPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidityPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_ValidityPeriod (value: ValidityPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValidityPeriod) { _cached_encoder_for_ValidityPeriod = function (value: ValidityPeriod, elGetter: $.ASN1Encoder<ValidityPeriod>): _Element {
    const _components: _Element[] = [];
    if (value.notValidBefore !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeDateTime, $.BER)(value.notValidBefore, $.BER));
    }
    if (value.notValidAfter !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeDateTime, $.BER)(value.notValidAfter, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ValidityPeriod(value, elGetter);
}


/* eslint-enable */
