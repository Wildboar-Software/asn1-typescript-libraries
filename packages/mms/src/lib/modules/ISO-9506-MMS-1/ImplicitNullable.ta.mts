/* eslint-disable */
import {
    OPTIONAL,
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



/**
 * @summary ImplicitNullable
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImplicitNullable{T} ::= SEQUENCE {
 *         present T OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ImplicitNullable<T> {
    constructor (
        /**
         * @summary `present`.
         * @public
         * @readonly
         */
        readonly present: OPTIONAL<T>
    ) {}

    /**
     * @summary Restructures an object into a ImplicitNullable
     * @description
     * 
     * This takes an `object` and converts it to a `ImplicitNullable`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ImplicitNullable`.
     * @returns {ImplicitNullable}
     */
    public static _from_object (_o: { [_K in keyof (ImplicitNullable<any>)]: (ImplicitNullable<any>)[_K] }): ImplicitNullable<any> {
        return new ImplicitNullable(_o.present);
    }


}

/**
 * @summary The Leading Root Component Types of ImplicitNullable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ImplicitNullable: $.ComponentSpec[] = [
    new $.ComponentSpec("present", true, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ImplicitNullable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ImplicitNullable: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ImplicitNullable
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ImplicitNullable: $.ComponentSpec[] = [
    
];


/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) ImplicitNullable
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_ImplicitNullable<T>(_decode_T: $.ASN1Decoder<T>): $.ASN1Decoder<ImplicitNullable<T>> {
    return function (el: _Element): ImplicitNullable<T> {
    let present: OPTIONAL<T>;
    const callbacks: $.DecodingMap = {
        "present": (_el: _Element): void => { present = _decode_T(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ImplicitNullable,
        _extension_additions_list_spec_for_ImplicitNullable,
        _root_component_type_list_2_spec_for_ImplicitNullable,
        undefined,
    );
    return new ImplicitNullable(
        present
    );
};
}


/**
 * @summary Returns a function that will encode a(n) ImplicitNullable into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) ImplicitNullable as an ASN.1 element.
 */
export
function _get_encoder_for_ImplicitNullable<T>(_encode_T: $.ASN1Encoder<T>): $.ASN1Encoder<ImplicitNullable<T>> {
    return function (value: ImplicitNullable<T>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.present === undefined) ? undefined : _encode_T(value.present, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
};
}

/* eslint-enable */
