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
import { FieldParamOffer_capability, _decode_FieldParamOffer_capability, _encode_FieldParamOffer_capability } from "../CDS/FieldParamOffer-capability.ta.mjs";
// export { FieldParamOffer_capability, FieldParamOffer_capability_yes /* IMPORTED_LONG_NAMED_BIT */, yes /* IMPORTED_SHORT_NAMED_BIT */, FieldParamOffer_capability_no /* IMPORTED_LONG_NAMED_BIT */, no /* IMPORTED_SHORT_NAMED_BIT */, _decode_FieldParamOffer_capability, _encode_FieldParamOffer_capability } from "../CDS/FieldParamOffer-capability.ta.mjs";
import { FieldParamOffer_maxFields, _decode_FieldParamOffer_maxFields, _encode_FieldParamOffer_maxFields } from "../CDS/FieldParamOffer-maxFields.ta.mjs";
// export { FieldParamOffer_maxFields, _decode_FieldParamOffer_maxFields, _encode_FieldParamOffer_maxFields } from "../CDS/FieldParamOffer-maxFields.ta.mjs";
import { FieldParamOffer_maxFieldElements, _decode_FieldParamOffer_maxFieldElements, _encode_FieldParamOffer_maxFieldElements } from "../CDS/FieldParamOffer-maxFieldElements.ta.mjs";
// export { FieldParamOffer_maxFieldElements, _decode_FieldParamOffer_maxFieldElements, _encode_FieldParamOffer_maxFieldElements } from "../CDS/FieldParamOffer-maxFieldElements.ta.mjs";
import { FieldParamOffer_accessOutside, _decode_FieldParamOffer_accessOutside, _encode_FieldParamOffer_accessOutside } from "../CDS/FieldParamOffer-accessOutside.ta.mjs";
// export { FieldParamOffer_accessOutside, FieldParamOffer_accessOutside_allowed /* IMPORTED_LONG_NAMED_BIT */, allowed /* IMPORTED_SHORT_NAMED_BIT */, FieldParamOffer_accessOutside_notAllowed /* IMPORTED_LONG_NAMED_BIT */, notAllowed /* IMPORTED_SHORT_NAMED_BIT */, _decode_FieldParamOffer_accessOutside, _encode_FieldParamOffer_accessOutside } from "../CDS/FieldParamOffer-accessOutside.ta.mjs";


/**
 * @summary FieldParamOffer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldParamOffer ::= SEQUENCE {
 *     capability          [0] IMPLICIT BIT STRING { yes (0), no (1) } OPTIONAL,
 *     maxFields           [1] IMPLICIT SEQUENCE {
 *         unbounded NULL OPTIONAL,
 *         limit G.IntegerOffer OPTIONAL
 *     } OPTIONAL,
 *     maxFieldElements    [2] IMPLICIT SEQUENCE {
 *         unbounded NULL OPTIONAL,
 *         limit G.IntegerOffer OPTIONAL
 *     } OPTIONAL,
 *     accessOutside       [3] IMPLICIT BIT STRING { allowed (0), notAllowed (1) } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class FieldParamOffer {
    constructor (
        /**
         * @summary `capability`.
         * @public
         * @readonly
         */
        readonly capability: OPTIONAL<FieldParamOffer_capability>,
        /**
         * @summary `maxFields`.
         * @public
         * @readonly
         */
        readonly maxFields: OPTIONAL<FieldParamOffer_maxFields>,
        /**
         * @summary `maxFieldElements`.
         * @public
         * @readonly
         */
        readonly maxFieldElements: OPTIONAL<FieldParamOffer_maxFieldElements>,
        /**
         * @summary `accessOutside`.
         * @public
         * @readonly
         */
        readonly accessOutside: OPTIONAL<FieldParamOffer_accessOutside>
    ) {}

    /**
     * @summary Restructures an object into a FieldParamOffer
     * @description
     * 
     * This takes an `object` and converts it to a `FieldParamOffer`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FieldParamOffer`.
     * @returns {FieldParamOffer}
     */
    public static _from_object (_o: { [_K in keyof (FieldParamOffer)]: (FieldParamOffer)[_K] }): FieldParamOffer {
        return new FieldParamOffer(_o.capability, _o.maxFields, _o.maxFieldElements, _o.accessOutside);
    }


}

/**
 * @summary The Leading Root Component Types of FieldParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FieldParamOffer: $.ComponentSpec[] = [
    new $.ComponentSpec("capability", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("maxFields", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("maxFieldElements", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("accessOutside", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of FieldParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FieldParamOffer: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FieldParamOffer
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FieldParamOffer: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FieldParamOffer: $.ASN1Decoder<FieldParamOffer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FieldParamOffer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FieldParamOffer (el: _Element): FieldParamOffer {
    if (!_cached_decoder_for_FieldParamOffer) { _cached_decoder_for_FieldParamOffer = function (el: _Element): FieldParamOffer {
    let capability: OPTIONAL<FieldParamOffer_capability>;
    let maxFields: OPTIONAL<FieldParamOffer_maxFields>;
    let maxFieldElements: OPTIONAL<FieldParamOffer_maxFieldElements>;
    let accessOutside: OPTIONAL<FieldParamOffer_accessOutside>;
    const callbacks: $.DecodingMap = {
        "capability": (_el: _Element): void => { capability = $._decode_implicit<FieldParamOffer_capability>(() => _decode_FieldParamOffer_capability)(_el); },
        "maxFields": (_el: _Element): void => { maxFields = $._decode_implicit<FieldParamOffer_maxFields>(() => _decode_FieldParamOffer_maxFields)(_el); },
        "maxFieldElements": (_el: _Element): void => { maxFieldElements = $._decode_implicit<FieldParamOffer_maxFieldElements>(() => _decode_FieldParamOffer_maxFieldElements)(_el); },
        "accessOutside": (_el: _Element): void => { accessOutside = $._decode_implicit<FieldParamOffer_accessOutside>(() => _decode_FieldParamOffer_accessOutside)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FieldParamOffer,
        _extension_additions_list_spec_for_FieldParamOffer,
        _root_component_type_list_2_spec_for_FieldParamOffer,
        undefined,
    );
    return new FieldParamOffer(
        capability,
        maxFields,
        maxFieldElements,
        accessOutside
    );
}; }
    return _cached_decoder_for_FieldParamOffer(el);
}

let _cached_encoder_for_FieldParamOffer: $.ASN1Encoder<FieldParamOffer> | null = null;

/**
 * @summary Encodes a(n) FieldParamOffer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FieldParamOffer, encoded as an ASN.1 Element.
 */
export
function _encode_FieldParamOffer (value: FieldParamOffer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FieldParamOffer) { _cached_encoder_for_FieldParamOffer = function (value: FieldParamOffer): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_FieldParamOffer_capability, $.BER)(value.capability, $.BER)),
            /* IF_ABSENT  */ ((value.maxFields === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FieldParamOffer_maxFields, $.BER)(value.maxFields, $.BER)),
            /* IF_ABSENT  */ ((value.maxFieldElements === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_FieldParamOffer_maxFieldElements, $.BER)(value.maxFieldElements, $.BER)),
            /* IF_ABSENT  */ ((value.accessOutside === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_FieldParamOffer_accessOutside, $.BER)(value.accessOutside, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FieldParamOffer(value, elGetter);
}


/* eslint-enable */
