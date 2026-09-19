/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
// export { AttributeCombinations, _decode_AttributeCombinations, _encode_AttributeCombinations } from "../RecordSyntax-explain/AttributeCombinations.ta.mjs";
import { SortKeyDetails_sortType, _decode_SortKeyDetails_sortType, _encode_SortKeyDetails_sortType } from "../RecordSyntax-explain/SortKeyDetails-sortType.ta.mjs";
// export { SortKeyDetails_sortType, _decode_SortKeyDetails_sortType, _encode_SortKeyDetails_sortType } from "../RecordSyntax-explain/SortKeyDetails-sortType.ta.mjs";
import { SortKeyDetails_caseSensitivity, _decode_SortKeyDetails_caseSensitivity, _encode_SortKeyDetails_caseSensitivity } from "../RecordSyntax-explain/SortKeyDetails-caseSensitivity.ta.mjs";
// export { SortKeyDetails_caseSensitivity, SortKeyDetails_caseSensitivity_always /* IMPORTED_LONG_NAMED_INTEGER */, always /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeyDetails_caseSensitivity_never /* IMPORTED_LONG_NAMED_INTEGER */, never /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeyDetails_caseSensitivity_default_yes /* IMPORTED_LONG_NAMED_INTEGER */, default_yes /* IMPORTED_SHORT_NAMED_INTEGER */, SortKeyDetails_caseSensitivity_default_no /* IMPORTED_LONG_NAMED_INTEGER */, default_no /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_SortKeyDetails_caseSensitivity, _encode_SortKeyDetails_caseSensitivity } from "../RecordSyntax-explain/SortKeyDetails-caseSensitivity.ta.mjs";


/**
 * @summary SortKeyDetails
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SortKeyDetails ::= SEQUENCE {
 *         description                [0] IMPLICIT HumanString OPTIONAL,
 *         elementSpecifications      [1] IMPLICIT SEQUENCE OF Specification
 *                                                  OPTIONAL,
 *                                           -- each specification is a way of
 *                                           -- specifying this same sort key
 *         attributeSpecifications    [2] IMPLICIT AttributeCombinations OPTIONAL,
 *                                           -- each combination is a way of
 *                                           -- specifying this same sort key
 *         sortType                   [3] CHOICE {
 *                                           character    [0]   IMPLICIT NULL,
 *                                           numeric      [1]   IMPLICIT NULL,
 *                                           structured   [2]   IMPLICIT
 *                                                            HumanString} OPTIONAL,
 *         caseSensitivity            [4] IMPLICIT INTEGER {
 *                                           always       (0),   
 *                                              -- always case-sensitive
 *                                           never        (1),   
 *                                              -- never case-sensitive
 *                                           default-yes  (2),   
 *                                              -- case-sensitivity is as specified
 *                                              -- on request, and if not
 *                                              -- specified, case-sensitive.
 *                                           default-no   (3)
 *                                              -- case-sensitivity is as specified
 *                                              -- on request, and if not
 *                                              -- specified, not case-sensitive.
 *                                                           }
 *                                           OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SortKeyDetails {
    constructor (
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `elementSpecifications`.
         * @public
         * @readonly
         */
        readonly elementSpecifications: OPTIONAL<Specification[]>,
        /**
         * @summary `attributeSpecifications`.
         * @public
         * @readonly
         */
        readonly attributeSpecifications: OPTIONAL<AttributeCombinations>,
        /**
         * @summary `sortType`.
         * @public
         * @readonly
         */
        readonly sortType: OPTIONAL<SortKeyDetails_sortType>,
        /**
         * @summary `caseSensitivity`.
         * @public
         * @readonly
         */
        readonly caseSensitivity: OPTIONAL<SortKeyDetails_caseSensitivity>
    ) {}

    /**
     * @summary Restructures an object into a SortKeyDetails
     * @description
     * 
     * This takes an `object` and converts it to a `SortKeyDetails`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SortKeyDetails`.
     * @returns {SortKeyDetails}
     */
    public static _from_object (_o: { [_K in keyof (SortKeyDetails)]: (SortKeyDetails)[_K] }): SortKeyDetails {
        return new SortKeyDetails(_o.description, _o.elementSpecifications, _o.attributeSpecifications, _o.sortType, _o.caseSensitivity);
    }


}

/**
 * @summary The Leading Root Component Types of SortKeyDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SortKeyDetails: $.ComponentSpec[] = [
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("elementSpecifications", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("attributeSpecifications", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("sortType", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("caseSensitivity", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SortKeyDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SortKeyDetails: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SortKeyDetails
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SortKeyDetails: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SortKeyDetails: $.ASN1Decoder<SortKeyDetails> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SortKeyDetails
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SortKeyDetails (el: _Element): SortKeyDetails {
    if (!_cached_decoder_for_SortKeyDetails) { _cached_decoder_for_SortKeyDetails = function (el: _Element): SortKeyDetails {
    let description: OPTIONAL<HumanString>;
    let elementSpecifications: OPTIONAL<Specification[]>;
    let attributeSpecifications: OPTIONAL<AttributeCombinations>;
    let sortType: OPTIONAL<SortKeyDetails_sortType>;
    let caseSensitivity: OPTIONAL<SortKeyDetails_caseSensitivity>;
    const callbacks: $.DecodingMap = {
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "elementSpecifications": (_el: _Element): void => { elementSpecifications = $._decode_implicit<Specification[]>(() => $._decodeSequenceOf<Specification>(() => _decode_Specification))(_el); },
        "attributeSpecifications": (_el: _Element): void => { attributeSpecifications = $._decode_implicit<AttributeCombinations>(() => _decode_AttributeCombinations)(_el); },
        "sortType": (_el: _Element): void => { sortType = $._decode_explicit<SortKeyDetails_sortType>(() => _decode_SortKeyDetails_sortType)(_el); },
        "caseSensitivity": (_el: _Element): void => { caseSensitivity = $._decode_implicit<SortKeyDetails_caseSensitivity>(() => _decode_SortKeyDetails_caseSensitivity)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SortKeyDetails,
        _extension_additions_list_spec_for_SortKeyDetails,
        _root_component_type_list_2_spec_for_SortKeyDetails,
        undefined,
    );
    return new SortKeyDetails(
        description,
        elementSpecifications,
        attributeSpecifications,
        sortType,
        caseSensitivity
    );
}; }
    return _cached_decoder_for_SortKeyDetails(el);
}

let _cached_encoder_for_SortKeyDetails: $.ASN1Encoder<SortKeyDetails> | null = null;

/**
 * @summary Encodes a(n) SortKeyDetails into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SortKeyDetails, encoded as an ASN.1 Element.
 */
export
function _encode_SortKeyDetails (value: SortKeyDetails, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SortKeyDetails) { _cached_encoder_for_SortKeyDetails = function (value: SortKeyDetails, elGetter: $.ASN1Encoder<SortKeyDetails>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.elementSpecifications === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<Specification>(() => _encode_Specification, $.BER), $.BER)(value.elementSpecifications, $.BER)),
            /* IF_ABSENT  */ ((value.attributeSpecifications === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AttributeCombinations, $.BER)(value.attributeSpecifications, $.BER)),
            /* IF_ABSENT  */ ((value.sortType === undefined) ? undefined : $._encode_explicit(_TagClass.context, 3, () => _encode_SortKeyDetails_sortType, $.BER)(value.sortType, $.BER)),
            /* IF_ABSENT  */ ((value.caseSensitivity === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SortKeyDetails_caseSensitivity, $.BER)(value.caseSensitivity, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SortKeyDetails(value, elGetter);
}


/* eslint-enable */
