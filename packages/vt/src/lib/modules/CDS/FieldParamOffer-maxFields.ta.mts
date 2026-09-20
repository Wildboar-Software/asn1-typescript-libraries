/* eslint-disable */
import {
    OPTIONAL,
    NULL,
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
import { _decode_IntegerOffer, _encode_IntegerOffer, type IntegerOffer } from "../G/IntegerOffer.ta.mjs";


/**
 * @summary FieldParamOffer_maxFields
 * @description
 *
 * Offered `max-fields` (F-dimension bound; fields per Y-array).
 * Default 1. ISO/IEC 9040:1997 §18.2.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer-maxFields ::= SEQUENCE {
 *     unbounded NULL OPTIONAL,
 *     limit G.IntegerOffer OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FieldParamOffer_maxFields {
    constructor (
        /**
         * @summary `unbounded`.
         * @description
         * Offer unbounded `max-fields`. ISO/IEC 9040:1997 §18.2.2.
         * @public
         * @readonly
         */
        readonly unbounded: OPTIONAL<NULL>,
        /**
         * @summary `limit`.
         * @description
         * Offered integer `max-fields`(s). ISO/IEC 9040:1997 §18.2.2.
         * @public
         * @readonly
         */
        readonly limit: OPTIONAL<IntegerOffer>
    ) {}

    /**
     * @summary Restructures an object into a FieldParamOffer_maxFields
     * @description
     * 
     * This takes an `object` and converts it to a `FieldParamOffer_maxFields`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldParamOffer_maxFields`.
     * @returns {FieldParamOffer_maxFields}
     */
    public static _from_object (_o: { [_K in keyof (FieldParamOffer_maxFields)]: (FieldParamOffer_maxFields)[_K] }): FieldParamOffer_maxFields {
        return new FieldParamOffer_maxFields(_o.unbounded, _o.limit);
    }


}

/**
 * @summary The Leading Root Component Types of FieldParamOffer_maxFields
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FieldParamOffer_maxFields: $.ComponentSpec[] = [
    new $.ComponentSpec("unbounded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("limit", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of FieldParamOffer_maxFields
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FieldParamOffer_maxFields: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FieldParamOffer_maxFields
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FieldParamOffer_maxFields: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FieldParamOffer_maxFields: $.ASN1Decoder<FieldParamOffer_maxFields> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamOffer_maxFields
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamOffer_maxFields (el: _Element): FieldParamOffer_maxFields {
    if (!_cached_decoder_for_FieldParamOffer_maxFields) { _cached_decoder_for_FieldParamOffer_maxFields = function (el: _Element): FieldParamOffer_maxFields {
    let unbounded: OPTIONAL<NULL>;
    let limit: OPTIONAL<IntegerOffer>;
    const callbacks: $.DecodingMap = {
        "unbounded": (_el: _Element): void => { unbounded = $._decodeNull(_el); },
        "limit": (_el: _Element): void => { limit = _decode_IntegerOffer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FieldParamOffer_maxFields,
        _extension_additions_list_spec_for_FieldParamOffer_maxFields,
        _root_component_type_list_2_spec_for_FieldParamOffer_maxFields,
        undefined,
    );
    return new FieldParamOffer_maxFields(
        unbounded,
        limit
    );
}; }
    return _cached_decoder_for_FieldParamOffer_maxFields(el);
}

let _cached_encoder_for_FieldParamOffer_maxFields: $.ASN1Encoder<FieldParamOffer_maxFields> | null = null;

/**
 * @summary Encodes a(n) FieldParamOffer_maxFields into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamOffer_maxFields, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamOffer_maxFields (value: FieldParamOffer_maxFields, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamOffer_maxFields) { _cached_encoder_for_FieldParamOffer_maxFields = function (value: FieldParamOffer_maxFields): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.unbounded === undefined) ? undefined : $._encodeNull(value.unbounded, $.BER)),
            /* IF_ABSENT  */ ((value.limit === undefined) ? undefined : _encode_IntegerOffer(value.limit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FieldParamOffer_maxFields(value, elGetter);
}


/* eslint-enable */
