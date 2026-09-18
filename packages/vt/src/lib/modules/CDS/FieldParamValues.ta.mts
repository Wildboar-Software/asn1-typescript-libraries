/* eslint-disable */
import {
    OPTIONAL,
    BOOLEAN,
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
import { FieldParamValues_maxFields, _decode_FieldParamValues_maxFields, _encode_FieldParamValues_maxFields } from "../CDS/FieldParamValues-maxFields.ta.mjs";
// export { FieldParamValues_maxFields, _decode_FieldParamValues_maxFields, _encode_FieldParamValues_maxFields } from "../CDS/FieldParamValues-maxFields.ta.mjs";
import { FieldParamValues_maxFieldElements, _decode_FieldParamValues_maxFieldElements, _encode_FieldParamValues_maxFieldElements } from "../CDS/FieldParamValues-maxFieldElements.ta.mjs";
// export { FieldParamValues_maxFieldElements, _decode_FieldParamValues_maxFieldElements, _encode_FieldParamValues_maxFieldElements } from "../CDS/FieldParamValues-maxFieldElements.ta.mjs";
import { FieldParamValues_accessOutside, _decode_FieldParamValues_accessOutside, _encode_FieldParamValues_accessOutside } from "../CDS/FieldParamValues-accessOutside.ta.mjs";
// export { FieldParamValues_accessOutside, FieldParamValues_accessOutside_allowed /* IMPORTED_LONG_NAMED_INTEGER */, allowed /* IMPORTED_SHORT_NAMED_INTEGER */, FieldParamValues_accessOutside_notAllowed /* IMPORTED_LONG_NAMED_INTEGER */, notAllowed /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_FieldParamValues_accessOutside, _encode_FieldParamValues_accessOutside } from "../CDS/FieldParamValues-accessOutside.ta.mjs";


/**
 * @summary FieldParamValues
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamValues ::= SEQUENCE {
 *     capability       [0] IMPLICIT BOOLEAN OPTIONAL,
 *     maxFields        [1] CHOICE { unbounded NULL, limit INTEGER } OPTIONAL,
 *     maxFieldElements [2] CHOICE { unbounded NULL, limit INTEGER } OPTIONAL,
 *     accessOutside    [3] IMPLICIT INTEGER { allowed (0), notAllowed (1) } OPTIONAL
 *     -- absence implies "allowed"
 * }
 * ```
 * 
 * @class
 */
export
class FieldParamValues {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<BOOLEAN>,
        /**
         * @summary `maxFields`.
         * @public
         * @readonly
         */
        readonly maxFields: OPTIONAL<FieldParamValues_maxFields>,
        /**
         * @summary `maxFieldElements`.
         * @public
         * @readonly
         */
        readonly maxFieldElements: OPTIONAL<FieldParamValues_maxFieldElements>,
        /**
         * @summary `accessOutside`.
         * @public
         * @readonly
         */
        readonly accessOutside: OPTIONAL<FieldParamValues_accessOutside>
    ) {}

    /**
     * @summary Restructures an object into a FieldParamValues
     * @description
     * 
     * This takes an `object` and converts it to a `FieldParamValues`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldParamValues`.
     * @returns {FieldParamValues}
     */
    public static _from_object (_o: { [_K in keyof (FieldParamValues)]: (FieldParamValues)[_K] }): FieldParamValues {
        return new FieldParamValues(_o.capability, _o.maxFields, _o.maxFieldElements, _o.accessOutside);
    }


}

/**
 * @summary The Leading Root Component Types of FieldParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FieldParamValues: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maxFields", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxFieldElements", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessOutside", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FieldParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FieldParamValues: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FieldParamValues
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FieldParamValues: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FieldParamValues: $.ASN1Decoder<FieldParamValues> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamValues
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamValues (el: _Element): FieldParamValues {
    if (!_cached_decoder_for_FieldParamValues) { _cached_decoder_for_FieldParamValues = function (el: _Element): FieldParamValues {
    let capability: OPTIONAL<BOOLEAN>;
    let maxFields: OPTIONAL<FieldParamValues_maxFields>;
    let maxFieldElements: OPTIONAL<FieldParamValues_maxFieldElements>;
    let accessOutside: OPTIONAL<FieldParamValues_accessOutside>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "maxFields": (_el: _Element): void => { maxFields = $._decode_explicit<FieldParamValues_maxFields>(() => _decode_FieldParamValues_maxFields)(_el); },
        "maxFieldElements": (_el: _Element): void => { maxFieldElements = $._decode_explicit<FieldParamValues_maxFieldElements>(() => _decode_FieldParamValues_maxFieldElements)(_el); },
        "accessOutside": (_el: _Element): void => { accessOutside = $._decode_implicit<FieldParamValues_accessOutside>(() => _decode_FieldParamValues_accessOutside)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FieldParamValues,
        _extension_additions_list_spec_for_FieldParamValues,
        _root_component_type_list_2_spec_for_FieldParamValues,
        undefined,
    );
    return new FieldParamValues(
        capability,
        maxFields,
        maxFieldElements,
        accessOutside
    );
}; }
    return _cached_decoder_for_FieldParamValues(el);
}

let _cached_encoder_for_FieldParamValues: $.ASN1Encoder<FieldParamValues> | null = null;

/**
 * @summary Encodes a(n) FieldParamValues into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamValues, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamValues (value: FieldParamValues, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamValues) { _cached_encoder_for_FieldParamValues = function (value: FieldParamValues): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeBoolean, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.maxFields === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => _encode_FieldParamValues_maxFields, $.BER)(value.maxFields, $.BER)),
            /* IF_ABSENT  */ ((value.maxFieldElements === undefined) ? undefined : $._encode_explicit(_TagClass.context, 2, () => _encode_FieldParamValues_maxFieldElements, $.BER)(value.maxFieldElements, $.BER)),
            /* IF_ABSENT  */ ((value.accessOutside === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FieldParamValues_accessOutside, $.BER)(value.accessOutside, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FieldParamValues(value, elGetter);
}


/* eslint-enable */
