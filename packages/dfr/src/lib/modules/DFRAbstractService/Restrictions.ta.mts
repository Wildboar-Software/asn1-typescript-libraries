/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
    OBJECT_IDENTIFIER,
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
 * @summary Restrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Restrictions ::= SET {
 *     allowed-document-types  [0] SET OF OBJECT IDENTIFIER OPTIONAL, -- default is no restriction
 *     maximum-length          [1] INTEGER OPTIONAL -- default is no restriction
 * }
 * ```
 * 
 * @class
 */
export
class Restrictions {
    constructor (
        /**
         * @summary `allowed_document_types`.
         * @public
         * @readonly
         */
        readonly allowed_document_types: OPTIONAL<OBJECT_IDENTIFIER[]>,
        /**
         * @summary `maximum_length`.
         * @public
         * @readonly
         */
        readonly maximum_length: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Restrictions
     * @description
     * 
     * This takes an `object` and converts it to a `Restrictions`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Restrictions`.
     * @returns {Restrictions}
     */
    public static _from_object (_o: { [_K in keyof (Restrictions)]: (Restrictions)[_K] }): Restrictions {
        return new Restrictions(_o.allowed_document_types, _o.maximum_length);
    }


}

/**
 * @summary The Leading Root Component Types of Restrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Restrictions: $.ComponentSpec[] = [
    new $.ComponentSpec("allowed-document-types", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maximum-length", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Restrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Restrictions: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Restrictions
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Restrictions: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Restrictions: $.ASN1Decoder<Restrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Restrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Restrictions (el: _Element): Restrictions {
    if (!_cached_decoder_for_Restrictions) { _cached_decoder_for_Restrictions = function (el: _Element): Restrictions {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let allowed_document_types: OPTIONAL<OBJECT_IDENTIFIER[]>;
    let maximum_length: OPTIONAL<INTEGER>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "allowed-document-types": (_el: _Element): void => { allowed_document_types = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSetOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); },
        "maximum-length": (_el: _Element): void => { maximum_length = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Restrictions,
        _extension_additions_list_spec_for_Restrictions,
        _root_component_type_list_2_spec_for_Restrictions,
        undefined,
    );
    return new Restrictions( /* SET_CONSTRUCTOR_CALL */
        allowed_document_types,
        maximum_length
    );
}; }
    return _cached_decoder_for_Restrictions(el);
}

let _cached_encoder_for_Restrictions: $.ASN1Encoder<Restrictions> | null = null;

/**
 * @summary Encodes a(n) Restrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Restrictions, encoded as an ASN.1 Element.
 */
export
function _encode_Restrictions (value: Restrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Restrictions) { _cached_encoder_for_Restrictions = function (value: Restrictions): _Element {
    return $._encodeSet(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.allowed_document_types === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.allowed_document_types, $.BER)),
            /* IF_ABSENT  */ ((value.maximum_length === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.maximum_length, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Restrictions(value, elGetter);
}


/* eslint-enable */
